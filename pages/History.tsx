import React from 'react';
import Header from '../components/Header';
import { useApp } from '../AppContext';
import { SKUS } from '../constants';

const History: React.FC = () => {
  const { orderSubmitted, setTab } = useApp();
  const bundleImg = SKUS.find(s => s.name.includes("DHA"))?.img || SKUS[0].img;

  return (
    <div className="min-h-screen bg-gray-50 pb-safe">
      <Header />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-4">订单历史</h2>
        
        {orderSubmitted ? (
            <div className="flex flex-col gap-3">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex gap-3">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                <img src={bundleImg} alt="Order" className="w-full h-full object-cover"/>
                            </div>
                            <div>
                                <div className="font-bold text-[13px] text-gray-900">个性化脑营养配方订单</div>
                                <div className="text-xs text-gray-500 mt-1">状态：待发货</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                         <button 
                            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-200 to-yellow-400 text-gray-900 text-xs font-bold"
                            onClick={() => setTab('orderDetail')}
                         >
                            查看订单
                         </button>
                    </div>
                </div>
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center py-12">
                <div className="text-[13px] text-gray-400 mb-4">当前还没有配方订单，完成支付后会出现在这里</div>
                <button 
                    className="px-6 py-2 rounded-full bg-yellow-400 text-gray-900 font-bold text-sm shadow-md shadow-yellow-100"
                    onClick={() => {
                        setTab('report'); // Go to report
                        // Ideally we would scroll to the bottom or trigger payment, 
                        // but switching to report where the payment button exists is a good flow.
                    }}
                >
                    去支付
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default History;