import React from 'react';
import { useApp } from '../AppContext';
import Header from '../components/Header';
import { SKUS } from '../constants';
import { AlertCircle } from 'lucide-react';
import { Sku } from '../types';

const Plan: React.FC = () => {
  const { parsedPlan, cart, addToCart, orderSubmitted, openPayModal } = useApp();
  
  if (!parsedPlan) return null;

  // Filter and map recommended SKUs based on plan results.
  const recSkus = SKUS.reduce<Sku[]>((acc, s) => {
    // Find matching prescription item
    const match = parsedPlan.prescription.find(p => s.name.includes(p.nutrient));
    
    if (match) {
        // Create a new SKU instance reflecting the scanned data
        const adaptedSku: Sku = {
            ...s,
            // Override the name to show "Nutrient + Scanned Dose"
            name: `${match.nutrient} ${match.dose}`,
            // We can also append the frequency/caution to description or brand field for visibility
            brand: `建议: ${match.freq} · ${match.caution}`,
            // Update ID to be unique for this customized dosage if needed
            id: `${s.id}_${match.dose.replace(/\s/g,'')}` 
        };
        acc.push(adaptedSku);
    }
    return acc;
  }, []);
  
  // If no specific match (fallback), show defaults
  const displaySkus = recSkus.length > 0 ? recSkus : SKUS.slice(0, 5);
  
  // Dynamic Total Calculation
  const total = displaySkus.reduce((sum, item) => sum + item.price, 0);
  
  const allAdded = displaySkus.every(s => cart.some(c => c.id === s.id));

  // Keywords to trigger yellow bar highlight
  const highlightKeywords = ['VD', 'Fe', 'Zn', 'DNA', 'GABA', '益生菌', '神经氨酸', 'PS', '磷脂'];

  return (
    <div className="pb-24">
      <Header />
      
      {/* Plan Main Container */}
      <div className="p-4 pt-6">
        <div className="bg-white rounded-[20px] shadow-[0_8px_20px_rgba(148,163,184,0.18)] border border-gray-100 overflow-hidden relative">
            
            {/* Header Section */}
            <div className="relative py-7 px-4 flex justify-center items-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400 text-gray-900 shadow-[0_4px_12px_rgba(250,204,21,0.25)] z-10">
                    {/* Brain Icon SVG */}
                    <svg width="16" height="16" viewBox="0 0 1024 1024" fill="none" className="text-gray-900">
                        <path d="M163.2656 477.792h277.44v64h-277.44zM1022.9456 984.32a30.24 30.24 0 0 0-0.704-5.056l-99.232-284.8 22.944-63.04h7.04a32 32 0 0 0 0-64h-286.08a32 32 0 0 0 0 64h6.56l23.136 63.52-98.88 283.968a85.12 85.12 0 0 1-1.856 10.624c0 0.448 0.224 0.832 0.224 1.28a31.008 31.008 0 0 0 0.96 4.608 31.808 31.808 0 0 0 1.984 7.584c0.416 0.896 1.152 1.6 1.664 2.432a31.648 31.648 0 0 0 5.536 7.424c0.64 0.608 1.536 0.96 2.24 1.504a31.424 31.424 0 0 0 8.384 4.96c0.224 0.096 0.32 0.256 0.544 0.32a184.864 184.864 0 0 1 10.464 1.92h362.56c0.544 0 1.056 0.224 1.6 0.224a31.872 31.872 0 0 0 10.56-1.792c0.544-0.192 0.928-0.64 1.472-0.896 0.832-0.32 1.44-0.928 2.24-1.312a31.616 31.616 0 0 0 8.096-5.44c0.512-0.544 0.832-1.216 1.312-1.792a31.744 31.744 0 0 0 5.44-8.096 32.864 32.864 0 0 0 0.96-3.552 31.296 31.296 0 0 0 1.696-8.352c0-0.352 0.192-0.64 0.192-1.024a30.176 30.176 0 0 0-1.056-5.216z m-349.984-26.784l87.712-251.968a59748.224 59748.224 0 0 1 1.536-11.008 31427.936 31427.936 0 0 0-1.696-11.2l-18.944-51.968h136.288l-18.912 51.968a30.08 30.08 0 0 0-0.576 3.744 24.288 24.288 0 0 0-0.128 13.696 29.984 29.984 0 0 0 0.544 3.872l88.128 252.896zM163.2656 318.624h408.512v64H163.2656z" fill="currentColor"/>
                        <path d="M64.0016 125.792h136v41.92a26.464 26.464 0 0 0 26.464 26.496h427.072a26.464 26.464 0 0 0 26.464-26.496v-41.92h136v338.08h64V100.672a38.592 38.592 0 0 0-38.24-38.88H680.0016V28.672a26.464 26.464 0 0 0-26.464-26.464H226.4656a26.464 26.464 0 0 0-26.464 26.432v33.152H38.2416A38.592 38.592 0 0 0 0.0016 100.672v882.24a38.592 38.592 0 0 0 38.24 38.88H486.7216v-64H64.0016zM264.0016 66.24h352v64h-352z" fill="currentColor"/>
                    </svg>
                    <span className="font-extrabold text-base">个性化脑营养配方</span>
                </div>
                {/* Dashed Line at Bottom */}
                <div className="absolute left-4 right-4 bottom-0 h-px bg-[repeating-linear-gradient(90deg,#E5E7EB_0_3px,transparent_3px_6px)]"></div>
            </div>

            {/* Stats Row */}
            <div className="p-4 pt-4">
                <div className="grid grid-cols-2 gap-3">
                    {/* Treatment Days Card */}
                    <div className="relative rounded-2xl p-3.5 bg-gradient-to-r from-yellow-300 to-yellow-400 flex flex-col justify-center overflow-hidden">
                        <div className="flex justify-between items-start mb-0.5">
                            <span className="text-xs font-medium text-yellow-900/80">疗程天数</span>
                            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
                                {/* Calendar Icon SVG */}
                                <svg width="24" height="24" viewBox="0 0 1024 1024">
                                    <path d="M512 909.061224c-218.906122 0-397.061224-178.155102-397.061224-397.061224s178.155102-397.061224 397.061224-397.061224 397.061224 178.155102 397.061224 397.061224-178.155102 397.061224-397.061224 397.061224z" fill="#F2CB51"/>
                                    <path d="M707.918367 537.077551h-198.530612c-10.971429 0-19.853061-8.881633-19.853061-19.853061 0-10.971429 8.881633-19.853061 19.853061-19.853061h198.530612c10.971429 0 19.853061 8.881633 19.853062 19.853061 0 10.44898-8.881633 19.853061-19.853062 19.853061z" fill="#AA1D32"/>
                                    <path d="M509.387755 537.077551c-10.971429 0-19.853061-8.881633-19.853061-19.853061V269.061224c0-10.971429 8.881633-19.853061 19.853061-19.853061s19.853061 8.881633 19.853061 19.853061V517.22449c0 10.44898-8.881633 19.853061-19.853061 19.853061z" fill="#E5404F"/>
                                </svg>
                            </div>
                        </div>
                        <div className="text-[22px] font-black text-gray-900 tracking-tight -mt-1.5">
                            28 <span className="text-sm font-bold">天</span>
                        </div>
                    </div>

                    {/* Supplement Types Card */}
                    <div className="relative rounded-2xl p-3.5 bg-gradient-to-r from-[#f5f3e7] to-[#e7e5e4] flex flex-col justify-center overflow-hidden">
                        <div className="flex justify-between items-start mb-0.5">
                            <span className="text-xs font-medium text-gray-500">补充种类</span>
                            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
                                {/* Stack Icon SVG */}
                                <svg width="24" height="24" viewBox="0 0 1024 1024">
                                    <path d="M939.690667 712.874667L550.912 946.005333c-10.752 6.485333-24.917333 9.728-38.912 9.728-14.165333 0-28.16-3.242667-38.912-9.728L84.309333 712.874667c-21.504-12.970667-21.504-33.792 0-46.592l65.877334-39.594667 300.032 180.053333c17.237333 10.24 39.082667 16.042667 61.781333 16.042667s44.544-5.632 61.781333-16.042667L873.813333 626.688l65.877334 39.594667c21.333333 12.8 21.333333 33.621333 0 46.592z" fill="#00BFA9"/>
                                    <path d="M939.690667 535.381333L550.912 768.512c-10.752 6.485333-24.746667 9.728-38.912 9.728s-28.16-3.242667-38.912-9.728L84.309333 535.381333c-21.504-12.970667-21.504-33.792 0-46.592l65.877334-39.594666 300.032 180.053333c17.237333 10.24 39.082667 16.042667 61.781333 16.042667s44.544-5.632 61.781333-16.042667L873.813333 449.194667l65.877334 39.594666c21.333333 12.8 21.333333 33.621333 0 46.592z" fill="#0080D5"/>
                                    <path d="M939.690667 357.888L550.912 591.018667c-10.752 6.485333-24.746667 9.728-38.912 9.728s-28.16-3.242667-38.912-9.728L84.309333 357.888c-21.504-12.970667-21.504-33.792 0-46.592L473.088 77.824C483.84 71.509333 497.834667 68.266667 512 68.266667c13.994667 0 28.16 3.242667 38.912 9.728l388.778667 233.301333c21.333333 12.8 21.333333 33.621333 0 46.592z" fill="#00BFA9"/>
                                </svg>
                            </div>
                        </div>
                        <div className="text-[22px] font-black text-gray-900 tracking-tight -mt-1.5">
                            {parsedPlan.prescription.length} <span className="text-sm font-bold">种</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* List */}
            <div className="px-4 pb-4 flex flex-col gap-3">
                {displaySkus.map(s => {
                    const isHighlighted = highlightKeywords.some(k => s.name.includes(k));
                    return (
                        <div key={s.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-2xl relative overflow-hidden active:scale-[0.99] transition-transform">
                            {/* Decorative line for highlighted items */}
                            {isHighlighted && (
                                <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-l-full"></div>
                            )}
                            <div className={isHighlighted ? "ml-3" : ""}>
                                <div className="font-bold text-[13px] text-gray-900">{s.name}</div>
                                <div className="text-[11px] text-gray-500 mt-0.5">{s.brand}</div>
                            </div>
                            <div className="bg-[#e5e7eb]/50 px-2 py-0.5 rounded text-[11px] font-bold text-gray-600">
                                28天装
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Total & Actions */}
            <div className="p-4 pt-2 bg-white border-t border-gray-50">
                <div className="flex justify-end items-center mb-4 gap-2">
                    <span className="text-sm text-gray-500">合计:</span>
                    <span className="text-xl font-black text-gray-900">¥{total.toFixed(2)}</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <button 
                        className={`py-3 rounded-full font-bold text-sm border transition-colors ${
                            allAdded || orderSubmitted
                            ? 'bg-gray-50 text-gray-400 border-gray-100 cursor-not-allowed' 
                            : 'bg-white text-gray-700 border-gray-200 active:bg-gray-50'
                        }`}
                        onClick={() => !allAdded && !orderSubmitted && displaySkus.forEach(addToCart)}
                        disabled={allAdded || orderSubmitted}
                    >
                        {allAdded ? '已加入' : '加入购物车'}
                    </button>
                    <button 
                        className={`py-3 rounded-full font-bold text-sm shadow-lg transition-transform ${
                            orderSubmitted 
                            ? 'bg-gray-100 text-gray-400 shadow-none cursor-not-allowed' 
                            : 'bg-yellow-400 text-gray-900 shadow-yellow-200 active:scale-95'
                        }`}
                        onClick={openPayModal}
                        disabled={orderSubmitted}
                    >
                        立即支付
                    </button>
                </div>
                {orderSubmitted && <div className="text-center mt-3 text-xs text-red-500 flex items-center justify-center gap-1 bg-red-50 py-1.5 rounded-lg">
                    <AlertCircle size={10} /> 同一处方不可二次购买
                </div>}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;