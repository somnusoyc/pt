import React, { useRef, useState } from 'react';
import { ScienceTopic } from '../types';
import { Sprout } from 'lucide-react';

interface Props {
  data: ScienceTopic;
}

const TopicSection: React.FC<Props> = ({ data }) => {
  const { topicId, title, subTitle, introImage, introText, ratingData, conclusion1, conclusion2 } = data;
  const cardBaseClass = "min-w-[85%] w-[85%] h-[600px] bg-white rounded-3xl p-8 shadow-sm relative flex-shrink-0 snap-center flex flex-col border border-gray-100 select-none";

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="mb-12">
      <div 
        ref={scrollRef}
        className={`flex overflow-x-auto pb-8 px-6 gap-4 scrollbar-hide snap-x snap-mandatory ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {/* Card 1: Intro */}
        <div className={cardBaseClass}>
          <div>
            <div className="inline-block bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-full mb-6">
              {topicId}
            </div>
            <h3 className="text-2xl font-normal text-gray-900 leading-tight">
              {title}
              {subTitle && <span className="text-sm align-top ml-1 text-gray-500">{subTitle}</span>}
              <span className="text-xl ml-1 text-gray-500">。</span>
            </h3>
          </div>
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="w-full aspect-square rounded-full overflow-hidden bg-black relative max-w-[260px] shadow-inner pointer-events-none">
              <img 
                src={introImage} 
                alt="Intro" 
                className="w-full h-full object-cover opacity-80 mix-blend-screen scale-110"
              />
              <div className={`absolute inset-0 ${['01', '03'].includes(topicId) ? 'bg-purple-500/20' : 'bg-red-600/20'} mix-blend-overlay`}></div>
            </div>
          </div>
          <div className="mt-auto">
            <p className="text-[15px] leading-7 text-gray-600 text-justify">
              {introText}
            </p>
          </div>
        </div>

        {/* Card 2: Rating (Only if ratingData exists) */}
        {ratingData && (
          <div className={cardBaseClass}>
            <div className="flex flex-col gap-4 mb-4">
              <div className="self-start border border-gray-400 text-gray-700 text-[11px] font-medium px-4 py-1 rounded-full">
                科学评级
              </div>
              <p className="text-[15px] text-gray-700 leading-relaxed">
                根据最新研究数据，此功效科学评级为：
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center -mt-6">
              <div className="w-32 h-32 rounded-full border-2 border-gray-800 flex items-center justify-center mb-4">
                <Sprout strokeWidth={1.5} className="w-16 h-16 text-gray-800" />
              </div>
              <span className="text-2xl text-gray-900 font-medium tracking-wide">成熟认证</span>
            </div>
            <div className="mt-auto grid grid-cols-2 gap-y-10 gap-x-4">
              <div>
                <div className="text-2xl font-normal text-gray-900">{ratingData.years} <span className="text-xs font-normal">年</span></div>
                <div className="text-[11px] text-gray-500 mt-1">研究年限</div>
              </div>
              <div>
                <div className="text-2xl font-normal text-gray-900">{ratingData.count1} <span className="text-xs font-normal">篇</span></div>
                <div className="text-[11px] text-gray-500 mt-1">高质量研究</div>
              </div>
              <div>
                <div className="text-2xl font-normal text-gray-900">{ratingData.count2} <span className="text-xs font-normal">篇</span></div>
                <div className="text-[11px] text-gray-500 mt-1">荟萃分析 <br/><span className="scale-75 origin-left inline-block text-[9px] text-gray-400">Meta Analysis</span></div>
              </div>
              <div>
                <div className="text-2xl font-normal text-gray-900">{ratingData.count3} <span className="text-xs font-normal">篇</span></div>
                <div className="text-[11px] text-gray-500 mt-1">双盲随机对照实验 <br/><span className="scale-75 origin-left inline-block text-[9px] text-gray-400">Randomized Controlled Trial</span></div>
              </div>
            </div>
          </div>
        )}

        {/* Card 3: Conclusion 1 */}
        {conclusion1 && (
          <div className={cardBaseClass}>
            <div className="mb-8">
              <div className="self-start border border-gray-400 text-gray-700 text-[11px] font-medium px-4 py-1 rounded-full inline-block">
                结论摘取 01
              </div>
            </div>
            <div className="flex-1 overflow-y-auto pr-1">
              <p className="text-[19px] leading-9 text-gray-800 text-justify font-normal tracking-wide">
                {conclusion1.text}
              </p>
            </div>
            <div className="mt-auto border-t border-gray-100 pt-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-600 font-medium">发表于权威期刊/文献库:</span>
                <span className="font-serif font-bold text-blue-900 text-sm">Pub<span className="text-blue-500">Med</span></span>
              </div>
              <div className="text-xs text-gray-600 font-medium mb-3">
                被引用次数： <span className="text-gray-900">{conclusion1.citations}</span>
              </div>
              <div className="mb-4">
                <span className="text-[11px] text-gray-500 font-medium">双盲随机对照实验/荟萃分析/系统综述：</span>
                <span className="text-[11px] text-gray-900 font-bold ml-1">有</span>
              </div>
              <p className="text-[9px] text-gray-400 leading-tight text-justify break-all uppercase">
                {conclusion1.source}
              </p>
            </div>
          </div>
        )}

        {/* Card 4: Conclusion 2 */}
        {conclusion2 && (
          <div className={cardBaseClass}>
            <div className="mb-6">
              <div className="self-start border border-gray-400 text-gray-700 text-[11px] font-medium px-4 py-1 rounded-full inline-block">
                结论摘取 02
              </div>
            </div>
            <div className="flex-1 overflow-y-auto pr-1">
              <p className="text-[17px] leading-8 text-gray-800 text-justify font-normal tracking-wide">
                {conclusion2.text}
              </p>
            </div>
            <div className="mt-auto border-t border-gray-100 pt-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-600 font-medium">发表于权威期刊/文献库:</span>
                <span className="font-serif font-bold text-blue-900 text-sm">Pub<span className="text-blue-500">Med</span></span>
              </div>
              <div className="text-xs text-gray-600 font-medium mb-3">
                被引用次数： <span className="text-gray-900">{conclusion2.citations}</span>
              </div>
              <div className="mb-4">
                <span className="text-[11px] text-gray-500 font-medium">双盲随机对照实验/荟萃分析/系统综述：</span>
                <span className="text-[11px] text-gray-900 font-bold ml-1">有</span>
              </div>
              <p className="text-[9px] text-gray-400 leading-tight text-justify break-all uppercase">
                {conclusion2.source}
              </p>
            </div>
          </div>
        )}

        {/* Padding for snap */}
        <div className="min-w-[5%] flex-shrink-0"></div>
      </div>

      <div className="flex justify-center gap-3 mt-[-20px] mb-8 pr-6">
        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
};

export default TopicSection;