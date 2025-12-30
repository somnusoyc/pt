import React, { useEffect } from 'react';
import { useApp } from '../AppContext';
import { ChevronLeft, Headphones } from 'lucide-react';

const GabaDetail: React.FC = () => {
  const { goBack, openSupportChat } = useApp();

  const scienceTopics = [
    {
        topicId: "04",
        isArticle: true,
        title: "睡得好，才能长得高。<br>深睡是生长激素的加油站。",
        introImage: "https://img.freepik.com/free-photo/boy-measured-height-with-blackboard_1150-19697.jpg?semt=ais_hybrid&w=740&q=80",
        introText: `生长激素 70% 都是在夜间深度睡眠中分泌的。如果孩子入睡难、睡不实，直接影响身高的潜能发挥。GABA 帮助大脑“关机”，让生长激素“开机”。`,
        buttonText: "深度阅读"
    },
    {
        topicId: "01",
        title: "01 缩短入睡时间",
        introImage: "https://img.freepik.com/premium-photo/more-you-read-better-you-sleep-little-child-sleep-bed-sleepy-time-bedtime-childhood-sleep-healthy-sleep-habits-health-childcare-good-night-sleeping-beauty_474717-1192.jpg",
        introText: `GABA 能结合大脑中的受体，抑制神经元的过度兴奋，就像给大脑踩下“刹车”。研究表明，补充 GABA 可显著缩短入睡潜伏期，帮助孩子更快进入梦乡。`,
        source: '原文: Yamatsu A et al. Food Sci Biotechnol. 2016.'
    },
    {
        topicId: "02",
        title: "02 延长深度睡眠",
        introImage: "https://img.freepik.com/premium-photo/sleep-sleeping-concept-kid-take-nap-child-sleeping-bed-comfortable-mattress-bedroom-healthy_265223-105566.jpg",
        introText: `深睡眠是身体修复和大脑发育的关键阶段。GABA 能增加非快速眼动（NREM）睡眠的时间，让孩子睡得更香、更沉，减少夜间惊醒的次数。`,
        source: '原文: Abdou AM et al. Biofactors. 2006.'
    },
    {
        topicId: "03",
        title: "03 平稳情绪，缓解焦虑",
        introImage: "https://img.freepik.com/premium-photo/shot-little-cute-calm-girl-meditating-closing-eyes-raising-hands-with-zen-gesture_776674-1143288.jpg?semt=ais_hybrid&w=740&q=80",
        introText: `考试压力、环境改变都可能让孩子产生焦虑情绪，导致脾气暴躁。GABA 能增加脑内α波（放松波）的产生，减少β波（紧张波），让孩子心情更平和。`,
        source: '原文: Yoto A et al. Amino Acids. 2012.'
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
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                        alt="Abstract Purple Art" 
                        className="w-full h-full object-cover brightness-75 filter blur-[1px] scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 to-slate-900/90"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white pt-4">
                    <div className="mb-12 transform translate-y-16 flex flex-col items-center">
                        <h1 className="text-3xl font-bold tracking-wider mb-1">儿童 GABA</h1>
                        <p className="text-sm font-light tracking-widest opacity-90">Kids Sleep & Calm</p>
                    </div>
                    
                    <div className="w-48 h-48 flex items-center justify-center drop-shadow-2xl -mt-4">
                        <img 
                            src="https://pbs.twimg.com/media/G8SON9Ca4AYbkqS?format=png&name=900x900" 
                            alt="GABA 产品" 
                            className="w-full h-full object-contain select-none pointer-events-none"
                        />
                    </div>
                </div>
            </div>

            {/* Intro Content */}
            <div className="px-6 pt-8 pb-5 relative bg-white rounded-b-[2rem] z-20">
                <p className="text-[20px] leading-9 text-gray-700 font-normal text-justify tracking-wide">
                    天然的“安睡因子”。GABA（γ-氨基丁酸）是存在于人脑中的抑制性神经递质，能平复过度兴奋的神经，帮助孩子快速入睡，提升深度睡眠质量。
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
                            img="https://img.freepik.com/premium-photo/child-cant-sleep-unhappy-baby-with-sad-expression-trying-sleep-bed_817921-69062.jpg" 
                            text="入睡难 翻来覆去" 
                        />
                        <NeedCard 
                            img="https://p2.itc.cn/images01/20200711/09d9370c6e3f4ad5925a7a402bd4f4ac.jpeg" 
                            text="易惊醒 睡不实" 
                        />
                        <NeedCard 
                            img="https://img.freepik.com/free-photo/top-view-arrangement-with-different-feelings_23-2148860308.jpg?semt=ais_hybrid&w=740&q=80" 
                            text="脾气躁 情绪差" 
                        />
                        <NeedCard 
                            img="https://img.ltn.com.tw/Upload/health/page/800/2024/06/13/phped8DlK.jpg" 
                            text="长得慢 个子小" 
                        />
                    </div>
                </div>

                {/* 2. Research Topics */}
                <div className="mb-12">
                    <div className="px-6 mb-6">
                        <h2 className="text-xl font-normal text-gray-900 mb-1">关于 GABA 的相关研究</h2>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Scientific Research on GABA</p>
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
                                    诺思睿儿GABA
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute top-[60%] -left-5 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-[11px] font-black border-2 border-white shadow-sm italic leading-none">VS</div>
                                <div className="bg-[#9ca3af] text-white font-bold py-3 rounded-t-xl text-center shadow-sm flex items-center justify-center h-full pt-4 text-[13px] tracking-wide">
                                    普通 GABA
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-[44px_1fr_1fr] gap-1 text-sm">
                            <ComparisonRow 
                                title="工艺" 
                                leftTitle="天然发酵提取" leftText="利用乳酸菌发酵技术提取，结构与人体自身合成的 GABA 一致，吸收率高。" 
                                rightTitle="化学合成" rightText="常用吡咯烷酮为原料化学合成，可能含有副产物，且生物利用度低。" 
                                round="top"
                            />
                            <ComparisonRow 
                                title="纯度" 
                                leftTitle="99% 制药级" leftText="严格提纯工艺，纯度高达 99% 以上，不含杂质，温和不刺激。" 
                                rightTitle="纯度较低" rightText="纯度往往在 20%-80% 之间，含有较多无效成分或未知杂质。" 
                            />
                            <ComparisonRow 
                                title="含量" 
                                leftTitle="100mg 足量" leftText="每包添加 100mg 高纯 GABA，科学配比，符合新食品原料推荐食用量。" 
                                rightTitle="含量不明/不足" rightText="经常概念性添加，实际含量低，难以达到助眠或舒缓效果。" 
                                round="bottom"
                            />
                        </div>

                        <div className="mt-8 pt-8 border-t border-dashed border-gray-200">
                            <div className="flex items-center justify-between px-2">
                                <div className="flex flex-col items-center w-[35%] relative group">
                                    <div className="w-20 h-24 mb-2 relative transition-transform duration-500 group-hover:scale-105">
                                        <img 
                                            src="https://pbs.twimg.com/media/G8SON9Ca4AYbkqS?format=png&name=900x900" 
                                            alt="GABA 产品图" 
                                            className="w-full h-full object-contain rounded-lg shadow-md bg-white p-1"
                                        />
                                        <div className="absolute inset-0 bg-purple-400/10 rounded-lg pointer-events-none"></div>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-xl font-bold text-gray-900 block leading-none">1包</span>
                                        <span className="text-[10px] text-gray-500 uppercase mt-1 block">NutriPacks GABA</span>
                                    </div>
                                </div>

                                <div className="text-4xl text-gray-400 font-light pb-6">≈</div>

                                <div className="flex flex-col w-[42%] justify-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-14 h-14 rounded-full bg-yellow-50 border border-yellow-100 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                                            <img 
                                                src="https://img.mp.sohu.com/q_70,c_zoom,w_640/upload/20170430/e932b2b06c4b4de7a0d83f5e68444681_th.jpeg" 
                                                alt="Brown Rice" 
                                                className="w-full h-full object-cover scale-110"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xl font-bold text-gray-900 leading-none">5kg</span>
                                            <span className="text-xs text-gray-500 mt-1">发芽糙米</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <p className="text-[9px] text-gray-400 bg-gray-50 inline-block px-3 py-1 rounded-full">
                                    * 约5公斤发芽糙米才能提取 100mg GABA
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
                            <SpecRow label="适宜人群" text="3岁及以上儿童、青少年。特别适合入睡困难、睡眠浅、易惊醒、情绪焦虑、需要促进生长发育的孩子。" />
                            <SpecRow label="规格" text="30 袋/盒 （30天周期装）" />
                            <SpecRow label="配方">
                                <div className="flex justify-between w-full max-w-[200px] mb-1">
                                    <span>γ-氨基丁酸(GABA)</span>
                                    <span className="font-bold text-gray-800">100mg/袋</span>
                                </div>
                                <div className="flex justify-between w-full max-w-[200px]">
                                    <span>茶叶茶氨酸</span>
                                    <span className="font-bold text-gray-800">50mg/袋</span>
                                </div>
                            </SpecRow>
                            <SpecRow label="辅料" text="赤藓糖醇、天然蓝莓果粉（0 色素、0 激素、0 依赖）" />
                            <SpecRow label="保质期" text="24 个月" />
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                <span className="text-sm font-bold text-gray-900 min-w-[5rem]">注意事项</span>
                                <ul className="text-sm text-gray-600 leading-relaxed font-normal list-disc pl-4 space-y-1">
                                    <li>建议睡前 30-60 分钟食用；</li>
                                    <li>GABA 食用量≤500mg/天；</li>
                                    <li>本品不能代替药物治疗失眠等疾病。</li>
                                </ul>
                            </div>
                        </div>

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

export default GabaDetail;