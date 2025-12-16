import React from 'react';
import Header from '../components/Header';
import { useApp } from '../AppContext';
import { Check, Truck } from 'lucide-react';
import { SKUS } from '../constants';

const PaySuccess: React.FC = () => {
  const { setTab } = useApp();
  // Using a representative image for the bundle
  const bundleImg = SKUS.find(s => s.name.includes("DHA"))?.img || SKUS[0].img;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Success Banner */}
      <div className="pt-5 pb-3 px-4">
        <div className="bg-gray-50 border border-gray-100 rounded-[18px] p-5 flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-900 mb-1.5">支付成功</h2>
            <div className="flex items-center gap-1.5 text-xs text-gray-600">
                <div className="w-4 h-4 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px]">
                    <Check size={10} strokeWidth={4} />
                </div>
                <span>会员订单</span>
            </div>
        </div>
      </div>

      {/* Order Summary Card */}
      <div className="px-4">
        <div className="bg-white rounded-2xl p-3.5 flex items-center gap-3 shadow-sm border border-gray-100">
            <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                <img src={bundleImg} alt="Thumbnail" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-900 truncate mb-1">个性化脑营养配方</div>
                <div className="flex items-center text-xs text-gray-500 truncate">
                    <Truck size={12} className="mr-1" />
                    <span>浙江省杭州市萧山区小小神经元</span>
                </div>
            </div>
            <button 
                className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-yellow-200 to-yellow-400 text-gray-800 text-xs font-bold whitespace-nowrap active:scale-95 transition-transform"
                onClick={() => setTab('orderDetail')}
            >
                查看订单
            </button>
        </div>
      </div>

    </div>
  );
};

export default PaySuccess;