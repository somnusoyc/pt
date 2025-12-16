import React, { useEffect } from 'react';
import { useApp } from '../AppContext';
import { ChevronLeft, Headphones } from 'lucide-react';

const PsDetail: React.FC = () => {
  const { goBack, openSupportChat } = useApp();

  const scienceTopics = [
    {
        topicId: "04",
        isArticle: true,
        title: "专注力差≠不聪明，<br>可能是大脑“营养饥饿”。",
        introImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
        introText: `许多孩子上课走神、写作业磨蹭，并不是态度问题，而是大脑前额叶缺乏关键营养。补充 PS 可以帮助大脑“过滤”干扰信息，从生理层面提升专注力。`,
        buttonText: "深度阅读"
    },
    {
        topicId: "01",
        title: "01 提升专注力",
        introImage: "https://img.freepik.com/premium-photo/attractive-children-focus-writing-diary-while-sitting-school-aig_31965-380499.jpg",
        introText: `PS 是维持大脑细胞膜流动性的关键。临床研究显示，补充 PS 能显著改善儿童的注意力缺陷（ADHD）症状，帮助孩子在课堂上保持更长时间的专注，减少多动行为。`,
        source: '原文: Hirayama S et al. J Hum Nutr Diet. 2014.'
    },
    {
        topicId: "02",
        title: "02 舒缓情绪压力",
        introImage: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=1000&auto=format&fit=crop",
        introText: `学业压力会导致体内“压力荷尔蒙”（皮质醇）水平升高，影响情绪和睡眠。PS 能有效抑制皮质醇的过度分泌，帮助孩子缓解考前焦虑，保持情绪平稳。`,
        source: '原文: Benton D et al. Nutr Neurosci. 2001.'
    },
    {
        topicId: "03",
        title: "03 增强记忆力",
        introImage: "https://pic3.zhimg.com/v2-e5319442409279e1a7ff6980bb9f22b2_1440w.jpg",
        introText: `PS 能增加大脑突触的数量，促进神经递质（乙酰胆碱）的释放。这有助于加快大脑的信息处理速度，让孩子背课文更快，记单词更牢。`,
        source: '原文: Kato-Kataoka A et al. J Clin Biochem Nutr. 2010.'
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
                    {/* Background */}
                    <img 
                        src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1000&auto=format&fit=crop" 
                        alt="Brain Focus" 
                        className="w-full h-full object-cover brightness-75 filter blur-[1px] scale-110"
                    />
                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/60 to-slate-900/90"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white pt-4">
                    <div className="mb-12 transform translate-y-16 flex flex-col items-center">
                        <h1 className="text-3xl font-bold tracking-wider mb-1">儿童 PS 磷脂</h1>
                        <p className="text-sm font-light tracking-widest opacity-90">Kids Phosphatidylserine</p>
                    </div>
                    
                    {/* Product Main Image */}
                    <div className="w-48 h-48 flex items-center justify-center drop-shadow-2xl -mt-4">
                        <img 
                            src="https://pbs.twimg.com/media/G8SOJh3boAAotqF?format=png&name=900x900" 
                            alt="PS 磷脂酰丝氨酸" 
                            className="w-full h-full object-contain select-none pointer-events-none"
                        />
                    </div>
                </div>
            </div>

            {/* Intro Content */}
            <div className="px-6 pt-8 pb-5 relative bg-white rounded-b-[2rem] z-20">
                <p className="text-[20px] leading-9 text-gray-700 font-normal text-justify tracking-wide">
                    专注力的“守护神”。磷脂酰丝氨酸（PS）被称为继胆碱和 DHA 之后的第三代“脑黄金”，能有效提升专注力，舒缓大脑压力，让孩子坐得住、学得进。
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
                            img="https://img.freepik.com/free-photo/side-view-kid-cheating-school-test_23-2150105010.jpg?semt=ais_hybrid&w=740&q=80" 
                            text="上课 走神" 
                        />
                        <NeedCard 
                            img="https://img.freepik.com/free-photo/bored-little-girl-doing-homework_23-2148911568.jpg?w=740&t=st=1708500000" 
                            text="好动 坐不住" 
                        />
                        <NeedCard 
                            img="https://img.freepik.com/premium-photo/side-portrait-mischievous-cute-blond-kid-boy-freckled-face-angry-mood-disgruntled-wrinkled-nose-facial-expression-gestures-childhood-relationship-behaviour-education-mental-problem-parenthood_643018-490.jpg" 
                            text="急躁 易怒" 
                        />
                        <NeedCard 
                            img="https://img12.litenews.cn/1/extraction/202407/15/683257b429254cc588637b6aa92d33b0-9.jpg" 
                            text="磨蹭 效率低" 
                        />
                    </div>
                </div>

                {/* 2. Research Topics */}
                <div className="mb-12">
                    <div className="px-6 mb-6">
                        <h2 className="text-xl font-normal text-gray-900 mb-1">关于 PS 的相关研究</h2>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Scientific Research on Phosphatidylserine</p>
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
                        {/* Table Header */}
                        <div className="grid grid-cols-[44px_1fr_1fr] gap-2 mb-2 relative z-10">
                            <div></div>
                            {/* 本品 */}
                            <div className="relative">
                                <div className="bg-[#FCD34D] text-[#422006] font-bold py-3 rounded-t-xl text-center shadow-sm flex items-center justify-center h-full pt-4 text-[15px] tracking-wide">
                                    诺思睿儿PS
                                </div>
                            </div>
                            {/* 竞品 */}
                            <div className="relative">
                                <div className="absolute top-[60%] -left-5 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-[11px] font-black border-2 border-white shadow-sm italic leading-none">VS</div>
                                <div className="bg-[#9ca3af] text-white font-bold py-3 rounded-t-xl text-center shadow-sm flex items-center justify-center h-full pt-4 text-[13px] tracking-wide">
                                    普通 PS
                                </div>
                            </div>
                        </div>

                        {/* Table Body */}
                        <div className="grid grid-cols-[44px_1fr_1fr] gap-1 text-sm">
                            <ComparisonRow 
                                title="原料" 
                                leftTitle="非转基因大豆" leftText="精选优质非转基因大豆提取，天然植物来源，安全无副作用。" 
                                rightTitle="动物脑组织/劣质" rightText="早期多为牛脑提取（有疯牛病风险）或低成本杂源。" 
                                round="top"
                            />
                            <ComparisonRow 
                                title="纯度" 
                                leftTitle="高纯度浓缩" leftText="采用先进磷脂分离技术，去除大豆中其他杂质，纯度更有保障。" 
                                rightTitle="纯度低/含杂质" rightText="提取工艺落后，有效成分含量低，往往需要吃很多颗。" 
                            />
                            <ComparisonRow 
                                title="含量" 
                                leftTitle="100mg 黄金量" leftText="每包足量添加 100mg PS，符合多项临床研究推荐的儿童有效起效量。" 
                                rightTitle="含量不足" rightText="许多产品单颗仅含 20-50mg，难以达到改善专注力的阈值。" 
                                round="bottom"
                            />
                        </div>

                        {/* Visual Conversion */}
                        <div className="mt-8 pt-8 border-t border-dashed border-gray-200">
                            <div className="flex items-center justify-between px-2">
                                <div className="flex flex-col items-center w-[35%] relative group">
                                    <div className="w-20 h-24 mb-2 relative transition-transform duration-500 group-hover:scale-105">
                                        <img 
                                            src="https://pbs.twimg.com/media/G8SOJh3boAAotqF?format=png&name=900x900" 
                                            alt="Sachet" 
                                            className="w-full h-full object-contain rounded-lg shadow-md bg-white p-1"
                                        />
                                        <div className="absolute inset-0 bg-yellow-400/10 rounded-lg pointer-events-none"></div>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-xl font-bold text-gray-900 block leading-none">1包</span>
                                        <span className="text-[10px] text-gray-500 uppercase mt-1 block">NutriPacks PS</span>
                                    </div>
                                </div>

                                <div className="text-4xl text-gray-400 font-light pb-6">≈</div>

                                <div className="flex flex-col w-[42%] justify-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-14 h-14 rounded-full bg-yellow-50 border border-yellow-100 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                                            <img src="https://img.freepik.com/free-photo/soy-beans_1339-224.jpg?semt=ais_hybrid&w=740&q=80" alt="Soybeans" className="w-full h-full object-cover scale-110" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xl font-bold text-gray-900 leading-none">7kg</span>
                                            <span className="text-xs text-gray-500 mt-1">非转基因大豆</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <p className="text-[9px] text-gray-400 bg-gray-50 inline-block px-3 py-1 rounded-full">
                                    * 约7公斤大豆才能提取 100mg 纯 PS
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
                            <SpecRow label="适宜人群" text="4岁及以上儿童、青少年。特别适合上课走神、写作业磨蹭、好动、情绪起伏大、需要提升学习专注力的孩子。" />
                            <SpecRow label="规格" text="30 袋/盒 （30天周期装）" />
                            <SpecRow label="配方">
                                <div className="flex justify-between w-full max-w-[200px] mb-1">
                                    <span>磷脂酰丝氨酸(PS)</span>
                                    <span className="font-bold text-gray-800">100mg/袋</span>
                                </div>
                                <div className="flex justify-between w-full max-w-[200px]">
                                    <span>藻油 DHA</span>
                                    <span className="font-bold text-gray-800">50mg/袋</span>
                                </div>
                            </SpecRow>
                            <SpecRow label="辅料" text="赤藓糖醇、天然葡萄果粉（0 添加人工色素、防腐剂）" />
                            <SpecRow label="保质期" text="24 个月" />
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                <span className="text-sm font-bold text-gray-900 min-w-[5rem]">注意事项</span>
                                <ul className="text-sm text-gray-600 leading-relaxed font-normal list-disc pl-4 space-y-1">
                                    <li>本品为膳食营养补充剂，不能代替药物；</li>
                                    <li>大豆过敏者慎用；</li>
                                    <li>建议每日固定时间食用，坚持使用效果更佳。</li>
                                </ul>
                            </div>
                        </div>

                        {/* Certs */}
                        <div className="mt-8 pt-6 border-t border-dashed border-gray-200">
                            <div className="flex justify-around items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                                <CertItem title="GMP" sub="制药标准" />
                                <CertItem title="FDA" sub="注册认证" />
                                <CertItem title="GRAS" sub="安全认证" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Float Button */}
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

export default PsDetail;