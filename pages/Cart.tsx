import React from 'react';
import { useApp } from '../AppContext';
import Header from '../components/Header';
import { Trash2 } from 'lucide-react';

const Cart: React.FC = () => {
  const { cart, removeFromCart, openPayModal, setTab } = useApp();
  
  const total = 860; // Fixed for demo as per requirement
  const isEmpty = cart.length === 0;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header />
      
      <div className="p-4">
        <h2 className="font-bold text-xl mb-4">购物车</h2>
        
        {isEmpty ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                <p className="text-sm mb-4">购物车还是空的，快去加购配方吧~</p>
                <button 
                    className="px-6 py-2 bg-yellow-400 text-gray-900 font-bold rounded-full text-sm"
                    onClick={() => setTab('report')} // Go to report/scan
                >
                    去加购
                </button>
            </div>
        ) : (
            <>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
                    <div className="bg-gradient-to-r from-yellow-200 to-yellow-400 px-4 py-3 flex justify-between items-center">
                        <span className="font-bold text-gray-900 text-sm">第一疗程处方</span>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        {cart.map(item => (
                            <div key={item.id} className="flex justify-between items-center">
                                <div>
                                    <div className="font-bold text-sm text-gray-900">{item.name}</div>
                                    <div className="text-xs text-gray-500">{item.brand}</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">28天装</span>
                                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 p-1">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="px-4 py-3 border-t border-gray-50 flex justify-between items-center">
                        <span className="text-sm text-gray-500">合计</span>
                        <span className="text-lg font-black text-gray-900">¥{total.toFixed(2)}</span>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button 
                        className="w-full max-w-xs py-3 rounded-full bg-yellow-400 text-gray-900 font-bold shadow-lg shadow-yellow-200 active:scale-95 transition-transform"
                        onClick={openPayModal}
                    >
                        立即支付
                    </button>
                </div>
            </>
        )}
      </div>
    </div>
  );
};

export default Cart;