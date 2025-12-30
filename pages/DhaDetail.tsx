import React, { useEffect } from 'react';
import { useApp } from '../AppContext';
import { ChevronLeft, Headphones, Lightbulb, Brain, Heart, Eye, Award } from 'lucide-react';

const DhaDetail: React.FC = () => {
  const { goBack, openSupportChat } = useApp();

  const scienceTopics = [
    {
        topicId: "04",
        isArticle: true,
        title: "它是大脑和眼睛的<br>“结构基石”。",
        introImage: "https://pic.rmb.bdstatic.com/bjh/240304/dump/e2e7f74d63f44e121835b5f305f19e3d.jpeg?x-bce-process=image/auto-orient,o_1/resize,w_1242,limit_1/quality,Q_86/format,f_auto",
        introText: "大脑 60% 是脂肪，其中 DHA 占大脑皮层总脂肪酸的 20%，视网膜的 50%。它是神经系统细胞生长及维持的主要元素，对智力和视力发育至关重要。",
        buttonText: "深度阅读"
    },
    {
        topicId: "01",
        title: "01 促进神经连接，提升智力",
        introImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1000",
        introText: "DHA 能促进神经细胞轴突和树突的生长，增加突触连接。充足的 DHA 有助于提升信息传递速度，表现为孩子学东西快，反应灵敏，解决问题能力强。",
        source: '原文: Birch EE et al. Dev Med Child Neurol. 2000.'
    },
    {
        topicId: "02",
        title: "02 点亮视网膜，保护视力",
        introImage: "https://www.shutterstock.com/image-photo/3d-drawing-human-eye-light-260nw-2628421357.jpg",
        introText: "DHA 是视网膜光受体细胞膜的重要组成部分，能提高视网膜对光的敏感度，促进视觉系统的发育。长期补充有助于减少视疲劳，降低近视风险。",
        source: '原文: SanGiovanni JP et al. Am J Clin Nutr. 2009.'
    },
    {
        topicId: "03",
        title: "03 藻油VS鱼油，为何选藻油？",
        introImage: "https://static.foodtalks.cn/image/post/601b7f7b3702f78772ded14b2be2c394c636.jpg",
        introText: "藻油直接提取自海洋微藻，是 DHA 的原始生产者，未经过食物链传递，不含重金属（汞、铅）。相比鱼油，藻油更纯净、更安全、无腥味，更适合儿童。",
        source: '原文: Arterburn LM et al. Am J Clin Nutr. 2008.'
    }
  ];

  // Scroll to top on mount
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
                        <img src="https://xxsjypt2.netlify.app/logo.png" alt="Logo" className="w-6 h-6 rounded-md object-cover" />
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
                        src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop" 
                        alt="Brain Gold" 
                        className="w-full h-full object-cover brightness-75 filter blur-[1px] scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-600/50 to-slate-900/90"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white pt-12">
                    <div className="flex flex-col items-center translate-y-7">
                        <h1 className="text-3xl font-bold tracking-wider mb-1">儿童纯藻油 DHA</h1>
                        <p className="text-sm font-light tracking-widest opacity-90 mb-4">Kids Pure Algal DHA</p>
                    </div>

                    <div className="w-40 h-40 flex items-center justify-center drop-shadow-2xl mt-4">
                        <img 
                            src="https://pbs.twimg.com/media/G8SOJh2agAEqyBz?format=png&name=900x900" 
                            alt="儿童纯藻油DHA" 
                            className="w-full h-full object-contain select-none pointer-events-none"
                        />
                    </div>
                </div>
            </div>

            {/* Intro Content */}
            <div className="px-6 pt-8 pb-5 relative bg-white rounded-b-[2rem] z-20">
                <p className="text-[20px] leading-9 text-gray-700 font-normal text-justify tracking-wide">
                    智慧与视力的“黄金油”。DHA 是大脑皮层和视网膜的重要构成成分，纯净藻油来源，无重金属污染风险，点亮孩子的天赋与明眸。
                </p>
            </div>

            {/* Gray Background Content */}
            <div className="bg-[#f2f2f2] pt-16 pb-6 -mt-8 relative z-10">
                
                {/* 1. Need Analysis */}
                <div className="px-6 mb-10">
                    <h2 className="text-xl font-normal text-gray-900 mb-1">孩子是否需要 TA ?</h2>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-5">Is It Right for Your Child ?</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                        {/* Items */}
                        <NeedCard 
                            img="https://img.freepik.com/free-photo/mother-son-after-quarrel_1398-4909.jpg?semt=ais_hybrid&w=740&q=80" 
                            text="反应慢 记不住" 
                        />
                        <NeedCard 
                            img="https://img.ltn.com.tw/Upload/health/page/800/2022/09/12/phpjQS5Yw.jpg" 
                            text="揉眼睛 视力差" 
                        />
                        <NeedCard 
                            img="https://img95.699pic.com/xsj/1n/2p/32.jpg!/fh/300" 
                            text="挑食 不吃鱼" 
                        />
                        <NeedCard 
                            img="https://img.freepik.com/free-photo/child-with-autism-living-fantasy-world_23-2151248894.jpg?semt=ais_incoming&w=740&q=80" 
                            text="大脑 发育期" 
                        />
                    </div>
                </div>

                {/* 2. Research Topics */}
                <div className="mb-12">
                    <div className="px-6 mb-6">
                        <h2 className="text-xl font-normal text-gray-900 mb-1">关于 DHA 的相关研究</h2>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Scientific Research on DHA</p>
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
                            <div className="relative">
                                <div className="bg-[#FCD34D] text-[#422006] font-bold py-3 rounded-t-xl text-center shadow-sm flex items-center justify-center h-full pt-4 text-[15px] tracking-wide">
                                    诺思睿儿DHA
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute top-[60%] -left-5 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-[11px] font-black border-2 border-white shadow-sm italic leading-none">VS</div>
                                <div className="bg-[#9ca3af] text-white font-bold py-3 rounded-t-xl text-center shadow-sm flex items-center justify-center h-full pt-4 text-[13px] tracking-wide">
                                    鱼油/普通DHA
                                </div>
                            </div>
                        </div>

                        {/* Table Body */}
                        <div className="grid grid-cols-[44px_1fr_1fr] gap-1 text-sm">
                            <ComparisonRow 
                                title="来源" 
                                leftTitle="深海裂壶藻" leftText="位于食物链最底端，未经食物链富集，天然纯净，无核污染担忧。" 
                                rightTitle="深海鱼类" rightText="容易富集重金属（汞、铅）及海洋污染物，存在安全隐患。" 
                                round="top"
                            />
                            <ComparisonRow 
                                title="味道" 
                                leftTitle="清香 0腥味" leftText="几乎无腥味，带有淡淡海藻清香，宝宝接受度高，爱吃不抗拒。" 
                                rightTitle="腥味重/难吃" rightText="鱼腥味重，宝宝容易反胃、呕吐，很难坚持长期补充。" 
                            />
                            <ComparisonRow 
                                title="含量" 
                                leftTitle="150mg 纯DHA" leftText="纯度高达 40% 以上，EPA 含量极低（<1%），专为婴幼儿设计。" 
                                rightTitle="EPA 含量高" rightText="鱼油通常含较高 EPA，可能导致性早熟，不适合儿童长期大量食用。" 
                                round="bottom"
                            />
                        </div>

                        {/* Visual Conversion */}
                        <div className="mt-8 pt-8 border-t border-dashed border-gray-200">
                            <div className="flex items-center justify-between px-2">
                                <div className="flex flex-col items-center w-[35%] relative group">
                                    <div className="w-20 h-24 mb-2 relative transition-transform duration-500 group-hover:scale-105">
                                        <img 
                                            src="https://pbs.twimg.com/media/G8SOJh2agAEqyBz?format=png&name=900x900" 
                                            alt="Sachet" 
                                            className="w-full h-full object-contain rounded-lg shadow-md bg-white p-1"
                                        />
                                        <div className="absolute inset-0 bg-amber-400/10 rounded-lg pointer-events-none"></div>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-xl font-bold text-gray-900 block leading-none">1包</span>
                                        <span className="text-[10px] text-gray-500 uppercase mt-1 block">NutriPacks DHA</span>
                                    </div>
                                </div>

                                <div className="text-4xl text-gray-400 font-light pb-6">≈</div>

                                <div className="flex flex-col w-[42%] justify-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                                            <img src="https://img.freepik.com/free-photo/walnuts-walnut-kernels-ceramic-bowl-high-quality-photo_114579-38064.jpg?semt=ais_hybrid&w=740&q=80" alt="Walnuts" className="w-full h-full object-cover scale-125" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-lg font-bold text-gray-900 leading-none">47个</span>
                                            <span className="text-[10px] text-gray-500 mt-0.5">优质核桃</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center w-full my-3 pr-2 opacity-60">
                                        <div className="h-px bg-gray-300 flex-1"></div>
                                        <span className="text-[10px] text-gray-500 px-2 font-medium">or</span>
                                        <div className="h-px bg-gray-300 flex-1"></div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                                            <img src="https://img.freepik.com/free-photo/delicious-white-tuna-recipe-still-life-top-view_23-2151053700.jpg?semt=ais_hybrid&w=740&q=80" alt="Fish" className="w-full h-full object-cover scale-150" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-lg font-bold text-gray-900 leading-none">120g</span>
                                            <span className="text-[10px] text-gray-500 mt-0.5">深海鱼肉</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <p className="text-[9px] text-gray-400 bg-gray-50 inline-block px-3 py-1 rounded-full">
                                    * 基于每包 150mg DHA 含量及核桃转化率估算
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
                            <SpecRow label="适宜人群" text="6个月及以上婴幼儿、儿童、青少年、孕妇及哺乳期妈妈。特别适合需补充脑眼营养、不爱吃鱼、对鱼腥味敏感的人群。" />
                            <SpecRow label="规格" text="30 袋/盒 （30天周期装）" />
                            <SpecRow label="配方">
                                <div className="flex justify-between w-full max-w-[200px] mb-1">
                                    <span>藻油 DHA</span>
                                    <span className="font-bold text-gray-800">150mg/袋</span>
                                </div>
                                <div className="flex justify-between w-full max-w-[200px]">
                                    <span>花生四烯酸(ARA)</span>
                                    <span className="font-bold text-gray-800">150mg/袋</span>
                                </div>
                            </SpecRow>
                            <SpecRow label="辅料" text="赤藓糖醇、天然甜橙果粉（不含人工色素、防腐剂）" />
                            <SpecRow label="保质期" text="24 个月" />
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                <span className="text-sm font-bold text-gray-900 min-w-[5rem]">注意事项</span>
                                <ul className="text-sm text-gray-600 leading-relaxed font-normal list-disc pl-4 space-y-1">
                                    <li>建议随餐食用，油脂有助于 DHA 吸收；</li>
                                    <li>本品不能代替药物。</li>
                                </ul>
                            </div>
                        </div>

                        {/* Certs */}
                        <div className="mt-8 pt-6 border-t border-dashed border-gray-200">
                            <div className="flex justify-around items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                                <CertItem title="GMP" sub="制药标准" />
                                <CertItem title="FDA" sub="注册认证" />
                                <CertItem title="Pure" sub="纯净藻油" />
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

// Helper Components

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

const TopicCard: React.FC<{ topic: any }> = ({ topic }) => {
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

export default DhaDetail;