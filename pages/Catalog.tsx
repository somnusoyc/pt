import React from 'react';
import Header from '../components/Header';
import { SKUS } from '../constants';
import { useApp } from '../AppContext';

const Catalog: React.FC = () => {
  const { setTab } = useApp();

  return (
    <div className="pb-24">
      <Header />
      
      {/* Brand Intro */}
      <div className="p-4 mt-2">
        <div className="flex items-center gap-2 mb-3">
            <span className="w-1 h-5 rounded-full bg-yellow-400"></span>
            <h2 className="font-bold text-lg">品牌介绍</h2>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <div className="text-gray-400 text-xs mb-1">Hi,</div>
                    <div className="text-lg font-black text-gray-900">我们是诺思睿儿。</div>
                    <div className="text-gray-400 text-xs">We are Nosreel.</div>
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
                    <img src="https://xxsjypt2.netlify.app/logo.png" alt="Logo" className="w-full h-full object-cover" />
                </div>
            </div>
            <p className="text-xs leading-relaxed text-gray-600 text-justify mb-4">
                孵化于浙江大学滨江研究院及小小神经元合作的儿童脑与行为发育数字化精准保健联合研究中心。致力于一站式为孩子提供干净的、卓越的营养补充剂，助力每一个儿童成长。
            </p>
            <div className="rounded-2xl overflow-hidden">
                <img src="https://xxsjypt2.netlify.app/40301763452647_.pic_hd.jpg" alt="诺思睿儿" className="w-full h-auto object-cover block" />
            </div>
        </div>
      </div>

      {/* Product List */}
      <div className="p-4 pt-0">
        <div className="flex items-center gap-2 mb-3">
            <span className="w-1 h-5 rounded-full bg-yellow-400"></span>
            <h2 className="font-bold text-lg">产品</h2>
        </div>
        <div className="flex flex-col gap-3">
            {SKUS.map(sku => (
                <div 
                    key={sku.id} 
                    className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 active:scale-[0.99] transition-transform cursor-pointer"
                    onClick={() => {
                        if(sku.name.includes('DHA') || sku.name.includes('DNA') || sku.id === 'dna-200') {
                            setTab('dhaDetail');
                        } else if(sku.name.includes('PS') || sku.id === 'vd-400') {
                            setTab('psDetail');
                        } else if(sku.name.includes('GABA') || sku.id === 'gaba-200') {
                            setTab('gabaDetail');
                        } else if(sku.name.includes('益生菌') || sku.id === 'gg-200cfu') {
                            setTab('ggDetail');
                        } else if(sku.name.includes('神经氨酸') || sku.id === 'na-50') {
                            setTab('saDetail');
                        } else {
                            // Placeholder for other products details if needed
                        }
                    }}
                >
                    <div className="aspect-[2/1] bg-gray-50 rounded-xl mb-3 overflow-hidden">
                        <img src={sku.img} alt={sku.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-bold text-sm text-gray-900">{sku.name}</h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{sku.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;