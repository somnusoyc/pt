import { Sku, Plan, ScienceTopic } from './types';

export const RAW_SKUS: Partial<Sku>[] = [
  { id: "vd-400", name: "PS磷脂酰丝氨酸 400mg", brand: "注意：遵医嘱使用 · 粉剂", form: "粉剂", price: 228, img: "https://xxsjypt2.netlify.app/img/PS%E7%A3%B7%E8%84%82%E9%85%B0%E4%B8%9D%E6%B0%A8%E9%85%B8%20.png" },
  { id: "dna-200", name: "纯DNA 200mg", brand: "注意：遵医嘱使用", form: "粉剂", price: 168, img: "https://xxsjypt2.netlify.app/img/%E7%BB%B4%E7%94%9F%E7%B4%A0d1.png" },
  { id: "gaba-200", name: "GABA 200mg", brand: "注意：睡前服用", form: "粉剂", price: 138, img: "https://xxsjypt2.netlify.app/img/GABA.png" },
  { id: "gg-200cfu", name: "GG益生菌 200亿CFU", brand: "注意：避免与热水同服", form: "粉剂", price: 188, img: "https://xxsjypt2.netlify.app/img/%E7%9B%8A%E7%94%9F%E8%8F%8C1.png" },
  { id: "na-50", name: "N-乙酰神经氨酸 50mg", brand: "注意：遵医嘱使用", form: "粉剂", price: 138, img: "https://xxsjypt2.netlify.app/img/N-%E4%B9%99%E9%85%B0%E7%A5%9E%E7%BB%8F%E6%B0%A8%E9%85%B8.png" }
];

export const PLAN: Plan = {
  patient: { name: "豆豆", age: 4, weight: 16 },
  prescription: [
    { nutrient: "PS磷脂酰丝氨酸", dose: "400mg", freq: "q.d.", durationDays: 60, caution: "遵医嘱使用" },
    { nutrient: "纯DNA", dose: "200mg", freq: "q.d.", durationDays: 60, caution: "遵医嘱使用" },
    { nutrient: "GABA", dose: "200mg", freq: "q.d.", durationDays: 60, caution: "睡前服用更佳" },
    { nutrient: "GG益生菌", dose: "200亿CFU", freq: "q.d.", durationDays: 30, caution: "避免同时饮用热水" },
    { nutrient: "N-乙酰神经氨酸", dose: "50mg", freq: "q.d.", durationDays: 60, caution: "遵医嘱使用" }
  ],
  doctor: { cardNo: "RX-8F3K-Q2" }
};

function getDescByName(name: string){
  const n = String(name||'');
  if (n.includes('PS磷脂酰丝氨酸')) return '常见的儿童营养成分，适量补充有助于支持专注力表现与健康成长。';
  if (n.includes('GABA')) return '人体天然存在的神经调节物质，适量补充有助于舒缓情绪、支持放松状态，并提升入睡质量。';
  if (n.includes('N-乙酰神经氨酸')) return 'N-乙酰神经氨酸源自母乳等天然营养，科学补充有助于支持脑部发育、学习专注，以及日常免疫保护。';
  if (n.includes('维生素D')) return '维生素D有助于钙吸收与骨骼发育，日晒不足或生长期更需关注。';
  if (n.includes('铁')) return '铁是造血关键元素，缺铁可致注意力不集中与乏力，建议随餐或与维C同服促进吸收。';
  if (n.includes('锌')) return '锌参与免疫与味觉发育，挑食或反复呼吸道感染的儿童可适当补充。';
  if (n.includes('DHA') || n.includes('Omega-3')) return 'DHA是孩子成长中不可或缺的营养成分，补充后有助于支持脑部发育、提高专注度，并呵护视力健康。';
  if (n.includes('钙')) return '钙是骨骼与牙齿主要成分，配合维生素D更利于吸收。';
  if (n.includes('维生素C')) return '维生素C支持免疫与抗氧化，促进铁吸收。';
  if (n.includes('维生素B')) return 'B族维生素参与能量代谢与神经系统功能，学习压力期可关注。';
  if (n.includes('益生菌')) return '益生菌有助于肠道微生态平衡，配合膳食纤维效果更佳。';
  if (n.includes('多种维生素')) return '均衡补充多种微量营养素，适合饮食结构不均衡的阶段性补充。';
  return '该成分为常见儿童营养素，适量补充有助于均衡膳食与健康成长。';
}

export const SKUS: Sku[] = RAW_SKUS.map((x, i) => ({
  id: String(x.id ?? ('sku-'+i)),
  name: String(x.name ?? '未命名儿童补剂'),
  brand: String(x.brand ?? 'Unknown'),
  form: String(x.form ?? ''),
  price: Number.isFinite(x.price) ? x.price! : 0,
  desc: String(getDescByName(x.name!)),
  img: String(x.img ?? '')
}));

export const SCIENCE_TOPICS: ScienceTopic[] = [
  {
    topicId: "01",
    title: "改善记忆与认知功能",
    subTitle: "[1,2]",
    introImage: "https://picsum.photos/seed/brain1/800/800",
    introText: <>Omega-3脂肪酸，尤其是DHA，构成了神经元细胞膜的重要组成部分<sup className="text-[10px]">[1]</sup>。DHA提高了神经细胞膜的流动性和弹性，促进神经信号传递和神经元沟通<sup className="text-[10px]">[1,2]</sup>。</>,
    ratingData: { years: '1991-2024', count1: '927', count2: '590', count3: '321' },
    conclusion1: {
      text: <>目前对24项研究的荟萃分析(n=9660;随访3至36个月)发现，<span className="bg-[#ffeb3b] px-1 decoration-clone box-decoration-clone">在干预研究的最初12个月内，对执行功能的有益影响呈上升趋势。</span>此外，这些趋势在血液二十二碳六烯酸(DHA) + EPA水平不太低的区域表现出更高的意义。</>,
      citations: '250+次',
      source: 'Suh SW, Lim E, Burm SY, Lee H, Bae JB, Han JW, Kim KW. BMC Med. 2024.'
    },
    conclusion2: {
      text: <>DHA/EPA补充剂显著改善了MMC(轻度记忆主诉)成人的情景记忆结果(P&lt; 0.004)。无论基线时的认知状态如何，&gt; 1 g/d DHA/EPA可改善情景记忆(P&lt;.04)。</>,
      citations: '250+次',
      source: 'Yurko-Mauro K, Alexander DD, Van Elswyk ME. PLoS One. 2015.'
    }
  },
  {
    topicId: "02",
    title: "改善心血管功能，辅助降低血脂",
    subTitle: "[3,4]",
    introImage: "https://picsum.photos/seed/heart1/800/800",
    introText: <>Omega-3脂肪酸具有抗炎特性，可以改善血管内皮的功能。它能抑制肝脏中甘油三酯的合成，从而降低血液甘油三酯水平，改善血管整体的健康和弹性<sup className="text-[10px]">[3,4]</sup>。</>,
    ratingData: { years: '1980-2024', count1: '2780', count2: '1821', count3: '850' },
    conclusion1: {
      text: <>补充海洋omega 3与以下风险降低显著相关：心肌梗死风险(比率比[RR] 0.92;P = 0.020)，冠心病死亡(RR:0.92;P = 0.014)。</>,
      citations: '380+次',
      source: 'Hu Y, Hu FB, Manson JE. J Am Heart Assoc. 2019.'
    },
    conclusion2: {
      text: <>总共纳入了40项研究，共有135267名参与者。补充剂与心肌梗死风险降低相关(RR 0.87)。</>,
      citations: '200+次',
      source: 'Bernasconi AA, Wiest MM, Lavie CJ. Mayo Clin Proc. 2021.'
    }
  },
  {
    topicId: "03",
    title: "具有抗炎作用，缓解炎症",
    subTitle: "[7,8]",
    introImage: "https://picsum.photos/seed/joint1/800/800",
    introText: <>Omega-3脂肪酸（EPA和DHA）是抗炎介质的前体，它们能调节免疫反应，减少炎症因子的产生<sup className="text-[10px]">[7,8]</sup>。</>,
    ratingData: { years: '1985-2024', count1: '1200', count2: '680', count3: '450' },
    conclusion1: {
      text: <>系统评价和荟萃分析一致表明，补充Omega-3脂肪酸可减轻类风湿性关节炎患者的关节疼痛、晨僵。</>,
      citations: '400+次',
      source: 'Gioxari A, Kaliora AC. Nutrition. 2018.'
    },
    conclusion2: {
      text: <>Omega-3脂肪酸的抗炎作用也可能有助于改善代谢综合征相关的慢性低度炎症。</>,
      citations: '220+次',
      source: 'Calder PC. Biochem Soc Trans. 2017.'
    }
  }
];

export const EXTRA_TOPICS: ScienceTopic[] = [
    {
        topicId: "04",
        isArticle: true,
        title: "它是大脑和眼睛的“结构基石”。", // Cast to string for title if needed, but type allows ReactNode
        introImage: "https://picsum.photos/seed/brain2/800/600",
        introText: `大脑 60% 是脂肪，其中 DHA 占大脑皮层总脂肪酸的 20%，视网膜的 50%。它是神经系统细胞生长及维持的主要元素。`,
        buttonText: "深度阅读"
    },
    {
        topicId: "01",
        title: "01 促进神经连接，提升智力",
        introImage: "https://picsum.photos/seed/nerve/800/600",
        introText: `DHA 能促进神经细胞轴突和树突的生长，增加突触连接。充足的 DHA 有助于提升信息传递速度，表现为孩子学东西快，反应灵敏。`,
        source: '原文: Birch EE et al. Dev Med Child Neurol. 2000.'
    },
    {
        topicId: "02",
        title: "02 点亮视网膜，保护视力",
        introImage: "https://picsum.photos/seed/eye/800/600",
        introText: `DHA 是视网膜光受体细胞膜的重要组成部分，能提高视网膜对光的敏感度，促进视觉系统的发育。长期补充有助于减少视疲劳，降低近视风险。`,
        source: '原文: SanGiovanni JP et al. Am J Clin Nutr. 2009.'
    },
    {
        topicId: "03",
        title: "03 藻油VS鱼油，为何选藻油？",
        introImage: "https://picsum.photos/seed/algae/800/600",
        introText: `藻油直接提取自海洋微藻，是 DHA 的原始生产者，未经过食物链传递，不含重金属（汞、铅）。相比鱼油，藻油更纯净、更安全、无腥味。`,
        source: '原文: Arterburn LM et al. Am J Clin Nutr. 2008.'
    }
];