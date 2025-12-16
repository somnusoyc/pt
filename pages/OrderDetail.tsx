import React from 'react';
import Header from '../components/Header';
import { SKUS } from '../constants';

const OrderDetail: React.FC = () => {
  // Using a representative image for the bundle
  const bundleImg = SKUS.find(s => s.name.includes("DHA"))?.img || SKUS[0].img;
  const total = 860;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Status */}
      <div className="pt-3 pb-2 px-4">
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
            <div className="flex items-center gap-1.5 text-[13px] font-semibold text-green-600 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                <span>待发货</span>
                <span className="ml-1.5 text-gray-500 font-normal">个性化脑营养配方订单</span>
            </div>
            <div className="text-xs text-gray-600 truncate">
                收件人 已加密 · 寄送至 浙江省杭州市萧山区小小神经元
            </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="px-4 pt-1">
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
            <div className="pb-2 mb-2 border-b border-gray-50 flex items-center gap-1.5 text-xs font-semibold text-orange-500">
                <span>小小神经元营养中心</span>
            </div>
            
            <div className="flex gap-2.5 mb-2">
                <div className="w-[52px] h-[52px] rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                    <img src={bundleImg} alt="Product" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[13px] text-gray-900 truncate mb-1">个性化脑营养配方 · 28天装</div>
                    <div className="text-[11px] text-gray-500 truncate mb-1.5">含 DHA、PS、燕窝酸、GABA、LGG 等组合营养</div>
                    <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-orange-600">¥ {total.toFixed(2)}</span>
                        <span className="text-gray-500">x1</span>
                    </div>
                </div>
            </div>

            <div className="pt-2 border-t border-gray-50 flex justify-between items-center text-[13px]">
                <div className="text-gray-500">共 1 件商品</div>
                <div className="flex items-center">
                    <span className="text-gray-500 mr-1">实付款</span>
                    <span className="text-gray-900 font-extrabold text-[15px]">¥ {total.toFixed(2)}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;