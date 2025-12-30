import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../AppContext';
import Header from '../components/Header';
import { Camera, X, Upload, Image as LucideImage } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";
import { PLAN } from '../constants';

const Scan: React.FC = () => {
  const { setParsedPlan, setTab, setLoading } = useApp();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("当前环境不支持访问相机，请尝试使用“上传照片”功能。");
      return;
    }

    try {
      setIsCameraOpen(true);
      let stream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' } 
        });
      } catch (e) {
        console.warn("Rear camera unavailable, falling back...", e);
        stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
      }

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera access error:", err);
      setIsCameraOpen(false);
      alert("无法开启相机。请检查浏览器权限，或使用“上传照片”功能。");
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsCameraOpen(false);
  };

  // Convert File or Blob to Base64 string (without data URL prefix)
  const fileToGenerativePart = async (file: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        // Remove the data URL prefix (e.g., "data:image/jpeg;base64,")
        const base64Data = base64String.split(',')[1];
        resolve(base64Data);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const analyzeImageWithAI = async (imageBlob: Blob) => {
    setLoading(true);
    stopCamera();

    try {
      // Use the API key from environment variables as configured
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const base64Data = await fileToGenerativePart(imageBlob);

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: {
          parts: [
            {
              inlineData: {
                mimeType: 'image/jpeg',
                data: base64Data
              }
            },
            {
              text: `Analyze this medical prescription or supplement checklist image. 
              Extract the nutritional items, dosage, and frequency.
              If patient details (name, age, weight) are not clearly visible, use these defaults: Name: "豆豆", Age: 4, Weight: 16.
              
              STRICT FILTERING RULES:
              1. IGNORE any item that is NOT visually marked with a checkmark, tick, or circle in the checkbox column. Unchecked items must NOT appear in the output.
              2. IGNORE any item that does not have a visible dosage or content value (e.g., "200mg", "10mg"). If the dosage column is empty, do not include the item.
              3. HANDWRITING FOCUS: Pay special attention to the "Content/Dose" column. Distinguish handwritten digits carefully (e.g., 200 vs 700, 10 vs 70) based on context (mg/g/IU) and common pediatric dosages.
              
              Map identified items to these specific nutrients if applicable: 
              "PS磷脂酰丝氨酸", "纯DNA", "GABA", "GG益生菌", "N-乙酰神经氨酸", "DHA", "维生素D", "钙", "铁", "锌".
              
              For 'dose', keep it concise (e.g., "200mg").
              For 'freq', use standard notation like "q.d." (once a day) or "b.i.d." (twice a day).
              For 'caution', generate short, child-safe advice (e.g., "遵医嘱", "睡前服用", "随餐服用").
              
              Return the result in the specified JSON schema.`
            }
          ]
        },
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              patient: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  age: { type: Type.NUMBER },
                  weight: { type: Type.NUMBER },
                },
                required: ["name", "age", "weight"]
              },
              doctor: {
                type: Type.OBJECT,
                properties: {
                  cardNo: { type: Type.STRING }
                },
                required: ["cardNo"]
              },
              prescription: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    nutrient: { type: Type.STRING },
                    dose: { type: Type.STRING },
                    freq: { type: Type.STRING },
                    durationDays: { type: Type.NUMBER },
                    caution: { type: Type.STRING },
                  },
                  required: ["nutrient", "dose", "freq", "durationDays", "caution"]
                }
              }
            },
            required: ["patient", "doctor", "prescription"]
          }
        }
      });

      if (response.text) {
        let cleanText = response.text;
        if (cleanText.startsWith('```')) {
            cleanText = cleanText.replace(/^```json\s*/, '').replace(/^```\s*/, '').replace(/\s*```$/, '');
        }
        
        const result = JSON.parse(cleanText);
        
        if (!result.doctor.cardNo) {
            result.doctor.cardNo = "RX-" + Math.random().toString(36).substr(2, 6).toUpperCase();
        }

        if (!result.prescription || result.prescription.length === 0) {
             console.warn("AI returned empty prescription. Falling back to demo.");
             setParsedPlan(PLAN);
        } else {
             setParsedPlan(result);
        }
        setTab('report');
      } else {
        throw new Error("No response from AI");
      }

    } catch (error) {
      console.error("AI Analysis Failed:", error);
      // alert("AI分析失败，将显示演示数据。\n错误信息: " + (error instanceof Error ? error.message : String(error)));
      setParsedPlan(PLAN);
      setTab('report');
    } finally {
      setLoading(false);
    }
  };

  const captureAndScan = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      if (video.videoWidth > 0 && video.videoHeight > 0) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          
          canvas.toBlob((blob) => {
            if (blob) {
              analyzeImageWithAI(blob);
            } else {
              setParsedPlan(PLAN);
              setTab('report');
            }
          }, 'image/jpeg', 0.8);
        }
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      analyzeImageWithAI(file);
    }
  };

  // 1. Camera Overlay View
  if (isCameraOpen) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-20 text-white">
            <button onClick={stopCamera} className="p-2 bg-black/20 rounded-full backdrop-blur-sm active:scale-90 transition-transform">
                <X size={24} />
            </button>
            <div className="text-sm font-medium bg-black/30 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                请对准勾选的营养项
            </div>
            <div className="w-10"></div>
        </div>

        {/* Video Area */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden bg-black">
            <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                muted 
                className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Scanner Frame */}
            <div className="relative w-[85%] aspect-[3/4] border-2 border-white/40 rounded-2xl overflow-hidden shadow-[0_0_0_100vh_rgba(0,0,0,0.6)] z-10 flex flex-col items-center">
                {/* Corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-yellow-400 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-yellow-400 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-yellow-400 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-yellow-400 rounded-br-lg"></div>
                
                {/* Scanning Line Animation */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.8)] animate-scan"></div>
            </div>
        </div>

        {/* Controls Footer */}
        <div className="h-36 bg-black flex items-center justify-center pb-8 pt-4 z-20 relative gap-12">
             {/* Album Upload */}
             <button onClick={() => fileInputRef.current?.click()} className="flex flex-col items-center gap-1 group">
                <div className="p-3 rounded-full bg-white/10 text-white group-active:bg-white/20 transition-colors">
                    <LucideImage size={24} />
                </div>
                <span className="text-[10px] text-white/60">相册</span>
             </button>

             {/* Shutter Button */}
             <button 
                onClick={captureAndScan}
                className="w-18 h-18 rounded-full bg-transparent border-4 border-white/30 p-1 active:scale-95 transition-transform"
             >
                <div className="w-16 h-16 rounded-full bg-white border-2 border-black"></div>
             </button>

             {/* Spacer to balance layout */}
             <div className="w-12"></div>
        </div>

        {/* Hidden Elements */}
        <canvas ref={canvasRef} className="hidden"></canvas>
        <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*" 
            onChange={handleFileUpload}
        />
      </div>
    );
  }

  // 2. Default Landing View
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-4">
        <div className="bg-white rounded-2xl shadow-sm p-6 pb-8 flex flex-col items-center">
            {/* Title */}
            <div className="flex items-center gap-3 mb-6 self-start w-full border-b border-gray-50 pb-4">
                <span className="w-1.5 h-10 rounded-full bg-yellow-400"></span>
                <div className="flex flex-col">
                    <span className="font-bold text-lg text-gray-900 leading-tight">上传医生处方</span>
                    <span className="text-xs text-gray-500 mt-0.5">AI 识别勾选药物与含量，定制专属方案</span>
                </div>
            </div>

            {/* Illustration Image (Static) */}
            <div className="w-full rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-8">
                <img 
                    src="https://xxsjypt2.netlify.app/2.png" 
                    alt="Scan Prescription" 
                    className="w-full h-auto object-cover block"
                />
            </div>

            {/* Action Buttons Row */}
            <div className="w-full flex gap-4 mb-6">
                <button 
                    onClick={startCamera}
                    className="flex-1 flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 font-bold py-3.5 rounded-full shadow-lg shadow-yellow-100 active:scale-95 transition-all text-sm"
                >
                    <Camera size={18} />
                    <span>拍摄处方单</span>
                </button>
                
                <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 font-bold py-3.5 rounded-full shadow-sm active:scale-95 transition-all active:bg-gray-50 text-sm"
                >
                    <Upload size={18} />
                    <span>上传相册图片</span>
                </button>
            </div>

            {/* Instructions */}
            <div className="w-full bg-blue-50/50 rounded-xl p-4 border border-blue-100/50">
                <div className="text-xs text-blue-900/70 text-center leading-relaxed">
                    <span className="font-bold block mb-1 text-blue-900">识别提示</span>
                    请确保画面包含以下勾选项：<br/>
                    PS磷脂酰丝氨酸、纯DNA、GABA、<br/>
                    益生菌、燕窝酸及对应含量
                </div>
            </div>
            
            <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                onChange={handleFileUpload}
            />
        </div>
      </div>
    </div>
  );
};

export default Scan;