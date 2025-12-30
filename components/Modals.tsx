import React, { useState } from 'react';
import { X, ChevronLeft, Smile, Plus } from 'lucide-react';

interface ModalProps {
  onClose: () => void;
}

const NoticeSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white rounded-xl p-3.5 shadow-sm mb-2.5">
    <div className="text-sm font-bold text-gray-900 mb-1.5">{title}</div>
    {children}
  </div>
);

const NoticeItem: React.FC<{ no: string, title: string, desc: string, border?: boolean }> = ({ no, title, desc, border }) => (
  <div className={`py-2 ${border ? 'border-b border-gray-50' : ''}`}>
    <div className="text-[13px] font-semibold text-gray-900">{no} {title}</div>
    <div className="mt-1 text-xs leading-relaxed text-gray-600">{desc}</div>
  </div>
);

export const NoticeModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-6" onClick={onClose}>
      <div className="bg-gray-100 w-full max-w-sm rounded-[18px] max-h-[80vh] flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="relative p-3 text-center bg-gray-100 z-10">
          <button onClick={onClose} className="absolute right-3 top-3 w-6 h-6 flex items-center justify-center bg-white rounded-full text-gray-500 shadow-sm">
            <X size={14} />
          </button>
          <div className="font-bold text-base text-gray-900">用户须知</div>
        </div>
        <div className="overflow-y-auto px-3.5 pb-4">
          <NoticeSection title="一、消费告知书">
            <NoticeItem no="1." title="处方识别" desc="处方识别功能仅用于辅助录入营养处方信息，识别结果不等同于医生诊疗结论，如有疑问请以线下医生处方为准。" border />
            <NoticeItem no="2." title="下单流程" desc="确认处方信息 → 生成推荐营养包 → 核对收货信息与金额 → 提交订单并支付。请在提交前仔细核对处方和地址信息。" border />
            <NoticeItem no="3." title="支付方式" desc="当前支持微信支付等在线支付方式。系统仅在订单提交成功后扣款。" />
          </NoticeSection>
          <NoticeSection title="二、订单取消/修改">
             <NoticeItem no="1." title="修改订单" desc="如需修改收货信息或处方内容，请在订单提交后尽快联系客服处理。" border />
             <NoticeItem no="2." title="取消订单" desc="未发货订单可申请取消，已发货或已签收的订单不支持无理由取消。" />
          </NoticeSection>
           <NoticeSection title="三、物流配送">
             <NoticeItem no="1." title="发货时效" desc="一般在支付成功后1-3个工作日内完成出库。" border />
             <NoticeItem no="2." title="配送方式" desc="默认采用第三方快递公司进行配送。" border />
             <NoticeItem no="3." title="签收须知" desc="签收前请检查外包装完好，如出现破损、渗漏等异常情况，请第一时间拍照并联系客服处理。" />
          </NoticeSection>
           <NoticeSection title="四、售后服务">
             <NoticeItem no="1." title="退货政策" desc="如因质量问题或发错货等原因，需要退换货，请在签收后及时联系客服处理。营养补充剂属于特殊商品，非质量问题暂不支持无理由退货。" />
          </NoticeSection>
        </div>
      </div>
    </div>
  );
};

export const SupportChat: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center" onClick={onClose}>
      <div className="bg-[#f5f5f5] w-full max-w-md h-[80vh] rounded-2xl flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="h-11 flex items-center px-3 bg-white border-b border-gray-200">
           <button onClick={onClose} className="p-1 text-gray-600"><ChevronLeft size={24} /></button>
           <div className="flex-1 text-center pr-8">
             <div className="font-semibold text-sm text-gray-900">诺思睿儿</div>
             <div className="text-[10px] text-gray-400">客服会话</div>
           </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-3">
           <div className="text-center mb-3">
             <span className="inline-block px-2 py-0.5 rounded-full bg-gray-200 text-gray-500 text-[10px]">诺思睿儿 定制营养包为你服务</span>
           </div>
           <div className="flex items-start gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src="https://picsum.photos/seed/support/100/100" className="w-full h-full object-cover" />
              </div>
              <div className="max-w-[75%] bg-white rounded-r-xl rounded-bl-xl p-2.5 shadow-sm text-[13px] text-gray-900 whitespace-pre-line">
                嗨～这里是诺思睿儿定制营养包客服<br/>有什么关于处方、营养方案或下单的问题，都可以随时发给我～
              </div>
           </div>
        </div>

        <div className="bg-white p-2 border-t border-gray-200 flex items-center gap-2">
           <div className="flex-1 h-8 bg-gray-100 rounded-full border border-gray-200"></div>
           <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500">
             <Smile size={18} />
           </div>
           <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500">
             <Plus size={18} />
           </div>
        </div>
      </div>
    </div>
  );
};

export const UsageModal: React.FC<ModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'storage'|'usage'|'caution'>('storage');
  
  const tabs = [
    { key: 'storage', label: '产品存储' },
    { key: 'usage', label: '使用方法' },
    { key: 'caution', label: '注意事项' }
  ];

  const renderContent = () => {
    const Item = ({ no, title, desc }: { no: string, title: string, desc: string }) => (
        <div className="bg-gray-50 p-3 rounded-xl mb-3">
            <div className="text-[13px] font-bold text-gray-900 mb-1">{no} {title}</div>
            <div className="text-xs leading-relaxed text-gray-600">{desc}</div>
        </div>
    );

    if (activeTab === 'storage') return (
        <>
            <Item no="01" title="请放置于25℃以下阴凉、干燥处贮存" desc="营养素可能会随储存生失去活性及发生水解，为避免营养素受潮，请放置于25℃以下阴凉、干燥处贮存。" />
            <Item no="02" title="湿热地区建议放置于冰箱冷藏室贮存" desc="气温超过25℃或室内较为潮湿时，建议将未拆封的产品盒放置于冰箱冷藏室，以避免受潮变质。" />
            <Item no="03" title="产品保质期为12个月" desc="可在每个小袋子右下角查看具体保质日期。" />
            <Item no="04" title="密封铝箔袋拆封后请尽快服用" desc="如遇小袋子包装破损请勿服用。" />
        </>
    );
    if (activeTab === 'usage') return (
        <>
            <Item no="01" title="建议随餐或餐后服用" desc="多数营养素与食物同服更利于吸收，并可减少胃部不适。" />
            <Item no="02" title="遵照处方推荐剂量" desc="请按照营养处方或医生建议的每日次数与剂量服用，不建议自行加量。" />
            <Item no="03" title="如需合并其他营养补充剂，请先咨询专业人员" desc="如已在使用其他维生素/矿物质补充剂，请先与营养师或医生确认，以避免重复或过量摄入。" />
        </>
    );
    return (
        <>
            <Item no="01" title="如出现明显不适请立即停用并就医" desc="若服用期间出现持续腹泻、呕吐、皮疹、呼吸困难等明显不适，请立即停用并及时就医。" />
            <Item no="02" title="已知对相关成分过敏者慎用" desc="如既往有对鱼油、蛋白制品或特定营养素过敏史，请在专业人员指导下谨慎使用。" />
            <Item no="03" title="本产品不能代替药物" desc="营养补充剂主要用于膳食营养补充，不能替代任何药物治疗。" />
        </>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-6" onClick={onClose}>
        <div className="bg-white w-full max-w-sm rounded-[18px] min-h-[60vh] flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="relative p-4 text-center">
                <button onClick={onClose} className="absolute right-4 top-4 text-gray-400">
                    <X size={20} />
                </button>
                <div className="font-bold text-base text-gray-900">服用说明</div>
            </div>
            
            <div className="flex px-4 mb-4">
                {tabs.map(t => (
                    <button 
                        key={t.key}
                        onClick={() => setActiveTab(t.key as any)}
                        className={`flex-1 pb-2 text-[13px] font-medium transition-colors border-b-2 ${
                            activeTab === t.key 
                            ? 'text-gray-900 border-yellow-400' 
                            : 'text-gray-400 border-transparent'
                        }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            <div className="flex-1 overflow-y-auto px-4 pb-4">
                {renderContent()}
            </div>
        </div>
    </div>
  );
};