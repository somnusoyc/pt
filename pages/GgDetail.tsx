import React, { useEffect } from 'react';
import { useApp } from '../AppContext';
import { ChevronLeft, Headphones } from 'lucide-react';

const GgDetail: React.FC = () => {
  const { goBack, openSupportChat } = useApp();

  const scienceTopics = [
    {
        topicId: "04",
        isArticle: true,
        title: "不是所有益生菌<br>都能叫 LGG。",
        introImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop",
        introText: `市面上益生菌五花八门，但 LGG 是真正经过 30 多年临床验证的“全能冠军”。它独有的菌毛结构能牢牢抓住肠壁，不被排出，持久守护肠道健康。`,
        buttonText: "深度阅读"
    },
    {
        topicId: "01",
        title: "01 双向调节肠道",
        introImage: "https://img.freepik.com/premium-vector/fecal-microbiota-transplant-from-healthy-unhealthy-intestine-improvement-intestinal-microflora_352905-689.jpg",
        introText: `LGG 对腹泻和便秘都有改善作用。它能产生乳酸，降低肠道 pH 值，抑制有害菌生长，同时促进肠道蠕动，帮助宝宝建立健康的排便规律。`,
        source: '原文: Szajewska H et al. Aliment Pharmacol Ther. 2013.'
    },
    {
        topicId: "02",
        title: "02 缓解过敏湿疹",
        introImage: "https://img.freepik.com/premium-photo/beautiful-with-closeup-hand-asian-woman-applying-moisturizer-lotion-skin-care-cream-cosmetic-product-girl-with-treatment-moisturizing-body-care_562687-4109.jpg?semt=ais_hybrid&w=740&q=80",
        introText: `肠道是人体最大的免疫器官。LGG 能调节 Th1/Th2 免疫平衡，从源头减少过敏反应。多项研究表明，孕期及婴幼儿期补充 LGG 可显著降低特应性湿疹的发生率。`,
        source: '原文: Kalliomäki M et al. Lancet. 2001.'
    },
    {
        topicId: "03",
        title: "03 提升全身自护力",
        introImage: "https://premium-cdn.parenting.com.tw/files/upload/article-images/5027355-01JD32MMFFV8KR9MEVTT14RXEQ.jpg",
        introText: `LGG 不仅作用于肠道，还能刺激产生 IgA 抗体，增强呼吸道黏膜的防御能力。坚持补充，有助于减少换季感冒的频率和持续时间。`,
        source: '原文: Hojsak I et al. Pediatrics. 2010.'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex justify-center min-h-screen py-0 md:py-10 bg-[#f3f4f6]">
        {/* Navbar */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-md">
            <div className="h-11 bg-white border-b border-gray-200 flex items-center px-4">
                <button onClick={goBack} className="flex items-center gap-2 text-gray-800 text-sm">
                    <ChevronLeft className="w-5 h-5" />
                    <div className="flex items-center gap-2">
                        <img src="https://xxsjypt2.netlify.app/logo.png" alt="Logo" className="w-6 h-6 rounded-full object-cover" />
                        <span className="text-sm text-gray-800 font-medium">诺思睿儿</span>
                    </div>
                </button>
            </div>
        </div>

        {/* Main Container */}
        <div className="bg-[#f2f2f2] font-sans text-gray-800 w-full max-w-md relative shadow-2xl overflow-hidden md:rounded-[2rem] border-x border-gray-100 pb-8 mt-11 md:mt-0">
            
            {/* Hero Section */}
            <div className="relative h-72 w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="https://img.freepik.com/premium-photo/abstract-human-gut-intestinal-microbiome-probiotics-medical-background-3d-illustration_92795-237.jpg?w=1000" 
                        alt="Abstract Gut Microbiome" 
                        className="w-full h-full object-cover brightness-90 filter blur-[1px] scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-teal-500/60 to-slate-900/90"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white pt-8">
                    <div className="flex flex-col items-center translate-y-4">
                        <h1 className="text-3xl font-bold tracking-wider mb-1">儿童 LGG 益生菌</h1>
                        <p className="text-sm font-light tracking-widest opacity-90 mb-6">Kids LGG Probiotics</p>
                    </div>
                    
                    <div className="w-48 h-48 flex items-center justify-center drop-shadow-2xl -mt-4">
                        <img 
                            src="https://pbs.twimg.com/media/G8SOJjLa8AEtKPo?format=png&name=900x900" 
                            alt="LGG 益生菌" 
                            className="w-full h-full object-contain select-none pointer-events-none"
                        />
                    </div>
                </div>
            </div>

            {/* Intro Content */}
            <div className="px-6 pt-8 pb-5 relative bg-white rounded-b-[2rem] z-20">
                <p className="text-[20px] leading-9 text-gray-700 font-normal text-justify tracking-wide">
                    肠道的“金盾牌”。LGG（鼠李糖乳杆菌GG）是全球研究最广泛的益生菌株，能有效定植肠道，平衡菌群，提升自护力，缓解敏敏体质。
                </p>
            </div>

            {/* Gray Background Content */}
            <div className="bg-[#f2f2f2] pt-16 pb-6 -mt-8 relative z-10">
                
                {/* 1. Need Analysis */}
                <div className="px-6 mb-10">
                    <h2 className="text-xl font-normal text-gray-900 mb-1">孩子是否需要 TA ?</h2>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-5">Is It Right for Your Child ?</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                        <NeedCard 
                            img="https://img.freepik.com/premium-photo/little-girl-holding-stomach-pain-understanding-stomach-ache-children_861973-39612.jpg" 
                            text="肚肚 不舒服" 
                        />
                        <NeedCard 
                            img="https://img.freepik.com/free-photo/medical-teleconsultation-sick-patient-home_23-2149329050.jpg?semt=ais_hybrid&w=740&q=80" 
                            text="体质弱 易生病" 
                        />
                        <NeedCard 
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJLRMHEH5cojs4Yn_SmFc1kYpJAyRZSQHKw&s" 
                            text="敏感 易过敏" 
                        />
                        <NeedCard 
                            img="https://img.ltn.com.tw/Upload/health/page/800/2021/12/18/phpBVofoP.jpg" 
                            text="挑食 不爱吃" 
                        />
                    </div>
                </div>

                {/* 2. Research Topics */}
                <div className="mb-12">
                    <div className="px-6 mb-6">
                        <h2 className="text-xl font-normal text-gray-900 mb-1">关于 LGG 的相关研究</h2>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Scientific Research on LGG Probiotics</p>
                    </div>
                    <div className="flex flex-col gap-6 px-6">
                        {scienceTopics.map((topic, i) => (
                            <TopicCard key={i} topic={topic} />
                        ))}
                    </div>
                </div>

                {/* 3. Comparison */}
                <div className="px-6 mb-12">
                    <h2 className="text-xl font-normal text-gray-900 mb-1">为什么选择 诺思睿儿 ?</h2>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-6">Better Ingredients and Formulation</p>
                    
                    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
                        <div className="grid grid-cols-[44px_1fr_1fr] gap-2 mb-2 relative z-10">
                            <div></div>
                            <div className="relative">
                                <div className="bg-[#FCD34D] text-[#422006] font-bold py-3 rounded-t-xl text-center shadow-sm flex items-center justify-center h-full pt-4 text-[15px] tracking-wide">
                                    诺思睿儿LGG
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute top-[60%] -left-5 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-[11px] font-black border-2 border-white shadow-sm italic leading-none">VS</div>
                                <div className="bg-[#9ca3af] text-white font-bold py-3 rounded-t-xl text-center shadow-sm flex items-center justify-center h-full pt-4 text-[13px] tracking-wide">
                                    普通 益生菌
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-[44px_1fr_1fr] gap-1 text-sm">
                            <ComparisonRow 
                                title="菌株" 
                                leftTitle="100% LGG 纯菌" leftText="选用鼠李糖乳杆菌GG (ATCC 53103)，拥有超1000篇文献支持，定植力强。" 
                                rightTitle="未知名/杂菌" rightText="菌株来源不明确，或为普通食品级菌株，难以在肠道存活。" 
                                round="top"
                            />
                            <ComparisonRow 
                                title="活性" 
                                leftTitle="120亿 高活菌" leftText="每包出厂添加量≥120亿 CFU，采用微胶囊包埋技术，耐酸耐胆盐。" 
                                rightTitle="活性低/易失活" rightText="活菌数少（<10亿），且经过胃酸后存活率极低，效果大打折扣。" 
                            />
                            <ComparisonRow 
                                title="配方" 
                                leftTitle="0敏 洁净配方" leftText="不含牛奶蛋白、麸质等常见过敏原，仅含益生菌与益生元，更适合敏宝。" 
                                rightTitle="含添加剂/致敏" rightText="常添加白砂糖、香精或含有乳粉基底，可能加重过敏反应。" 
                                round="bottom"
                            />
                        </div>

                        <div className="mt-8 pt-8 border-t border-dashed border-gray-200">
                            <div className="flex items-center justify-between px-2">
                                <div className="flex flex-col items-center w-[35%] relative group">
                                    <div className="w-20 h-24 mb-2 relative transition-transform duration-500 group-hover:scale-105">
                                        <img 
                                            src="https://pbs.twimg.com/media/G8SOJjLa8AEtKPo?format=png&name=900x900" 
                                            alt="LGG 益生菌 产品图" 
                                            className="w-full h-full object-contain rounded-lg shadow-md bg-white p-1"
                                        />
                                        <div className="absolute inset-0 bg-green-400/10 rounded-lg pointer-events-none"></div>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-xl font-bold text-gray-900 block leading-none">1包</span>
                                        <span className="text-[10px] text-gray-500 uppercase mt-1 block">NutriPacks LGG</span>
                                    </div>
                                </div>

                                <div className="text-4xl text-gray-400 font-light pb-6">≈</div>

                                <div className="flex flex-col w-[42%] justify-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                                            <img 
                                                src="https://img.freepik.com/free-photo/greek-yogurt-wooden-bowl-isolated-white-background_123827-22632.jpg?semt=ais_hybrid&w=740&q=80" 
                                                alt="Yogurt" 
                                                className="w-full h-full object-cover scale-110"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xl font-bold text-gray-900 leading-none">20杯</span>
                                            <span className="text-xs text-gray-500 mt-1">活性酸奶</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <p className="text-[9px] text-gray-400 bg-gray-50 inline-block px-3 py-1 rounded-full">
                                    * 基于每包120亿活性益生菌含量估算
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Specs */}
                <div className="px-6 mb-12">
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                        <div className="mb-6 flex items-end justify-between border-b border-gray-100 pb-4">
                            <div>
                                <h2 className="text-xl font-normal text-gray-900 mb-1">产品参数</h2>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Specification</p>
                            </div>
                            <div className="text-[10px] text-gray-400">NutriPacks Series</div>
                        </div>

                        <div className="space-y-5">
                            <SpecRow label="适宜人群" text="0岁及以上婴幼儿、儿童。特别适合肠胃娇嫩、容易腹泻/便秘、有湿疹困扰、剖腹产或未母乳喂养的宝宝。" />
                            <SpecRow label="规格" text="30 袋/盒 （30天周期装）" />
                            <SpecRow label="配方">
                                <div className="flex justify-between w-full max-w-[240px] mb-1">
                                    <span>鼠李糖乳杆菌(LGG)</span>
                                    <span className="font-bold text-gray-800">120亿 CFU/袋</span>
                                </div>
                                <div className="flex justify-between w-full max-w-[240px]">
                                    <span>低聚果糖(益生元)</span>
                                    <span className="font-bold text-gray-800">适量</span>
                                </div>
                            </SpecRow>
                            <SpecRow label="辅料" text="赤藓糖醇（0 蔗糖、0 乳粉、0 麸质）" />
                            <SpecRow label="保质期" text="24 个月" />
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                <span className="text-sm font-bold text-gray-900 min-w-[5rem]">注意事项</span>
                                <ul className="text-sm text-gray-600 leading-relaxed font-normal list-disc pl-4 space-y-1">
                                    <li>建议使用 37℃ 以下温水冲调，避免高温杀灭活菌；</li>
                                    <li>如正在服用抗生素，请间隔 2 小时以上食用本品；</li>
                                    <li>本品不能代替药物。</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-dashed border-gray-200">
                            <div className="flex justify-around items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                                <CertItem title="GMP" sub="制药标准" />
                                <CertItem title="FDA" sub="注册认证" />
                                <CertItem title="GRAS" sub="安全菌株" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="fixed bottom-6 right-6 z-50">
                <button 
                    className="w-14 h-14 bg-white rounded-full shadow-xl border border-gray-100 flex flex-col items-center justify-center hover:bg-gray-50 transition-transform active:scale-95"
                    onClick={openSupportChat}
                >
                    <Headphones className="w-6 h-6 text-gray-400 mb-[2px]" />
                    <span className="text-[10px] text-gray-500">咨询</span>
                </button>
            </div>

        </div>
    </div>
  );
};

// --- Helper Components ---

const NeedCard = ({ img, text }: { img: string, text: string }) => (
    <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-sm bg-gray-100 group">
        <img src={img} alt="Need" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
        <div className="absolute top-3 left-3 flex items-center gap-2">
            <div className="flex items-center justify-center w-2.5 h-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex-shrink-0">
                <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
            <span className="text-white text-sm font-bold tracking-wide drop-shadow-md">{text}</span>
        </div>
    </div>
);

const TopicCard = ({ topic }: { topic: any }) => {
    if (topic.isArticle) {
        return (
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-sm group cursor-pointer border border-gray-100">
                <img src={topic.introImage} alt={topic.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                <div className="absolute inset-0 p-8 z-10 flex flex-col items-start justify-center">
                    <h3 className="text-xl font-bold text-white mb-2 leading-snug drop-shadow-md" dangerouslySetInnerHTML={{ __html: topic.title }}></h3>
                    <p className="text-sm text-gray-100 mb-5 leading-relaxed line-clamp-2 drop-shadow-sm font-medium opacity-90 max-w-[95%]">{topic.introText}</p>
                    <button className="bg-white text-gray-900 text-xs font-bold px-5 py-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">{topic.buttonText}</button>
                </div>
            </div>
        );
    }
    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex flex-col">
            <div className="h-48 w-full relative overflow-hidden bg-gray-100">
                <img src={topic.introImage} alt={topic.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">{topic.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed text-justify mb-5 font-normal">{topic.introText}</p>
                <div className="text-[10px] text-gray-400 break-all leading-tight">{topic.source}</div>
            </div>
        </div>
    );
};

const ComparisonRow = ({ title, leftTitle, leftText, rightTitle, rightText, round }: any) => {
    return (
        <>
            <div className={`bg-[#E5E7EB] text-[#374151] font-bold flex items-center justify-center py-6 [writing-mode:vertical-lr] text-sm ${round === 'top' ? 'rounded-tl-xl' : ''} ${round === 'bottom' ? 'rounded-bl-xl' : ''}`}>
                <span className="block w-4 text-center leading-6">{title.split('').join('\n')}</span>
            </div>
            <div className={`bg-[#FEF3C7] p-4 flex flex-col justify-center min-h-[100px] ${round === 'top' ? 'rounded-tr-none' : ''}`}>
                <h4 className="font-bold text-[#422006] mb-2 text-[15px] leading-tight">{leftTitle}</h4>
                <p className="text-[13px] text-[#422006]/80 leading-relaxed">{leftText}</p>
            </div>
            <div className={`bg-[#b0b8c4] p-4 flex flex-col justify-center text-white min-h-[100px] ${round === 'top' ? 'rounded-tr-xl' : ''} ${round === 'bottom' ? 'rounded-br-xl' : ''}`}>
                <h4 className="font-bold text-white mb-2 text-[15px] leading-tight">{rightTitle}</h4>
                <p className="text-[13px] text-white/95 leading-relaxed">{rightText}</p>
            </div>
        </>
    )
}

const SpecRow = ({ label, text, children }: any) => (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-b border-gray-100 pb-5">
        <span className="text-sm font-bold text-gray-900 min-w-[5rem]">{label}</span>
        {children ? <div className="text-sm text-gray-600 leading-relaxed font-normal w-full">{children}</div> : 
        <p className="text-sm text-gray-600 leading-relaxed font-normal text-justify">{text}</p>}
    </div>
)

const CertItem = ({ title, sub }: any) => (
    <div className="flex flex-col items-center gap-1">
        <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center">
            <span className="text-[10px] font-bold text-gray-600">{title}</span>
        </div>
        <span className="text-[8px] text-gray-400">{sub}</span>
    </div>
)

export default GgDetail;