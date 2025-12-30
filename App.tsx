import React, { useState } from 'react';
import { AppState, PayState, Plan, Sku, Tab } from './types';
import { AppContext } from './AppContext';
import TabBar from './components/TabBar';
import Scan from './pages/Scan';
import PlanPage from './pages/Plan';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Me from './pages/Me';
import History from './pages/History';
import PaySuccess from './pages/PaySuccess';
import OrderDetail from './pages/OrderDetail';
import DhaDetail from './pages/DhaDetail';
import PsDetail from './pages/PsDetail';
import GabaDetail from './pages/GabaDetail';
import GgDetail from './pages/GgDetail';
import SaDetail from './pages/SaDetail';
import { UsageModal, NoticeModal, SupportChat } from './components/Modals';
import { X, MapPin, ChevronRight, Check } from 'lucide-react';
import { SKUS } from './constants';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    tab: 'report',
    history: ['report'], // Initial stack
    parsedPlan: null,
    cart: [],
    orderSubmitted: false,
    hasNewShipment: false,
    isLoading: false,
    showPayModal: false,
    showUsageModal: false,
    showSupportChat: false,
    showNoticeModal: false,
    showHospitalModal: false,
    showPrescriptionModal: false,
    pay: {
        address: '',
        spec: '3m',
        coupon: 260,
        coin: 2,
        shipping: 0,
        duty: 0,
        agree: false,
        expandSupp: false
    }
  });

  const activeTab = state.history[state.history.length - 1];

  const actions = {
    // Pushes a new tab onto the history stack
    setTab: (tab: Tab) => setState(s => ({ 
        ...s, 
        history: [...s.history, tab],
        tab // Update legacy tab for convenience
    })),
    // Resets the stack to a single root tab (for bottom bar navigation)
    switchTab: (tab: Tab) => setState(s => ({
        ...s,
        history: [tab],
        tab
    })),
    // Pops the last item from the history stack
    goBack: () => setState(s => {
        if (s.history.length <= 1) return s;
        const newHistory = s.history.slice(0, -1);
        return {
            ...s,
            history: newHistory,
            tab: newHistory[newHistory.length - 1]
        };
    }),
    addToCart: (sku: Sku) => setState(s => {
      const exists = s.cart.find(c => c.id === sku.id);
      if (exists) {
        return { ...s, cart: s.cart.map(c => c.id === sku.id ? { ...c, qty: c.qty + 1 } : c) };
      }
      return { ...s, cart: [...s.cart, { ...sku, qty: 1 }] };
    }),
    removeFromCart: (id: string) => setState(s => ({ ...s, cart: s.cart.filter(c => c.id !== id) })),
    toggleCart: (sku: Sku) => setState(s => {
      const exists = s.cart.find(c => c.id === sku.id);
      if (exists) return { ...s, cart: s.cart.filter(c => c.id !== sku.id) };
      return { ...s, cart: [...s.cart, { ...sku, qty: 1 }] };
    }),
    setParsedPlan: (plan: Plan | null) => setState(s => ({ ...s, parsedPlan: plan })),
    setLoading: (isLoading: boolean) => setState(s => ({ ...s, isLoading })),
    submitOrder: () => setState(s => ({ 
        ...s, 
        orderSubmitted: true, 
        cart: [], 
        hasNewShipment: true, 
        showPayModal: false, 
        // Push PaySuccess to history
        history: [...s.history, 'paySuccess'],
        tab: 'paySuccess'
    })),
    closeModals: () => setState(s => ({ 
      ...s, 
      showPayModal: false, 
      showUsageModal: false, 
      showSupportChat: false, 
      showNoticeModal: false, 
      showHospitalModal: false, 
      showPrescriptionModal: false 
    })),
    openPayModal: () => setState(s => ({ ...s, showPayModal: true })),
    openUsageModal: () => setState(s => ({ ...s, showUsageModal: true })),
    openSupportChat: () => setState(s => ({ ...s, showSupportChat: true })),
    openNoticeModal: () => setState(s => ({ ...s, showNoticeModal: true })),
    openHospitalModal: () => setState(s => ({ ...s, showHospitalModal: true })),
    openPrescriptionModal: () => setState(s => ({ ...s, showPrescriptionModal: true })),
    setPayState: (payPart: Partial<PayState>) => setState(s => ({ ...s, pay: { ...s.pay, ...payPart } })),
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'scan': return <Scan />;
      case 'report': return state.parsedPlan ? <PlanPage /> : <Scan />;
      case 'plan': return <PlanPage />;
      case 'catalog': return <Catalog />;
      case 'cart': return <Cart />;
      case 'me': return <Me />;
      case 'dhaDetail': return <DhaDetail />;
      case 'psDetail': return <PsDetail />;
      case 'gabaDetail': return <GabaDetail />;
      case 'ggDetail': return <GgDetail />;
      case 'saDetail': return <SaDetail />;
      case 'paySuccess': return <PaySuccess />;
      case 'orderDetail': return <OrderDetail />;
      case 'history': return <History />;
      default: return state.parsedPlan ? <PlanPage /> : <Scan />;
    }
  };

  // Determine total price dynamically
  // If items in cart, sum cart.
  // If no items in cart but plan exists (and user clicked "Pay" from Plan page), sum plan items.
  let productPrice = 0;
  let payItems: Sku[] = [];

  if (state.cart.length > 0) {
      productPrice = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
      payItems = state.cart;
  } else if (state.parsedPlan) {
      // Re-derive recommended SKUs similar to Plan.tsx to match logic
      // This ensures if user clicks "Pay" directly on Plan page, the price matches the items shown there.
      const recSkus = SKUS.reduce<Sku[]>((acc, s) => {
        const match = state.parsedPlan?.prescription.find(p => s.name.includes(p.nutrient));
        if (match) {
            acc.push({ ...s, price: s.price }); // Ensure we use the updated constant price
        }
        return acc;
      }, []);
      const displaySkus = recSkus.length > 0 ? recSkus : SKUS.slice(0, 5);
      productPrice = displaySkus.reduce((sum, item) => sum + item.price, 0);
      payItems = displaySkus;
  } else {
      // Fallback for demo safety
      productPrice = 860;
      payItems = SKUS.slice(0, 5);
  }

  const totalPrice = productPrice + state.pay.shipping;

  return (
    <AppContext.Provider value={{ ...state, ...actions, tab: activeTab }}>
      <div className="max-w-md mx-auto min-h-screen bg-gray-50 relative shadow-2xl overflow-hidden pb-16">
        {renderContent()}
        
        {/* TabBar is visible on most pages now, except Scan (Camera) */}
        {activeTab !== 'scan' && <TabBar />}

        {/* Global Loading Overlay */}
        {state.isLoading && (
          <div className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-[9999] flex items-center justify-center">
             <div className="bg-white p-6 rounded-2xl flex flex-col items-center shadow-2xl">
                <div className="w-10 h-10 border-4 border-gray-100 border-t-yellow-400 rounded-full animate-spin mb-3"></div>
                <div className="font-bold text-gray-900">正在识别...</div>
             </div>
          </div>
        )}

        {/* New Modals */}
        {state.showUsageModal && <UsageModal onClose={actions.closeModals} />}
        {state.showNoticeModal && <NoticeModal onClose={actions.closeModals} />}
        {state.showSupportChat && <SupportChat onClose={actions.closeModals} />}

        {/* Detailed Pay Modal */}
        {state.showPayModal && (
          <div className="fixed inset-0 bg-black/50 z-[100] flex items-end justify-center" onClick={actions.closeModals}>
             <div 
                className="bg-white w-full max-w-md rounded-t-3xl min-h-[85vh] flex flex-col overflow-hidden" 
                onClick={e => e.stopPropagation()}
             >
                {/* Header */}
                <div className="relative p-4 border-b border-gray-50">
                    <button 
                        onClick={actions.closeModals} 
                        className="absolute right-4 top-4 text-gray-400"
                    >
                        <X size={24} />
                    </button>
                    <h3 className="text-center font-bold text-lg text-gray-900">确认支付</h3>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto bg-gray-50">
                    {/* Address Card */}
                    <div className="px-4 pt-4">
                        <div className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm">
                            <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center flex-shrink-0">
                                <MapPin size={18} />
                            </div>
                            <div className="flex-1 font-semibold text-gray-900 text-sm">
                                {state.pay.address ? state.pay.address : '点击添加收货地址'}
                            </div>
                            <ChevronRight size={16} className="text-gray-400" />
                        </div>
                    </div>

                    {/* Product Card */}
                    <div className="p-4">
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                            {/* Product Header */}
                            <div className="flex gap-3 mb-4">
                                <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden flex-shrink-0">
                                    <img src={SKUS[0].img} alt="Product" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold text-sm text-gray-900 mb-1">个性化脑营养配方</div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {['海外进口', '跨境直邮', '免运费', '专业营养师咨询'].map(tag => (
                                            <span key={tag} className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Specs */}
                            <div className="flex items-center justify-between py-3 border-t border-gray-50 text-sm">
                                <span className="text-gray-500 w-12">规格</span>
                                <div className="flex-1 text-right">
                                    <span className="inline-block bg-orange-50 text-gray-900 font-bold px-3 py-1.5 rounded-lg border border-orange-100 text-xs">
                                        28天装 28包×1盒
                                    </span>
                                </div>
                            </div>

                            {/* Supplements */}
                            <div className="py-3 border-t border-gray-50 text-sm">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-gray-500 w-12">补剂</span>
                                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => actions.setPayState({ expandSupp: !state.pay.expandSupp })}>
                                        <span className="font-bold text-gray-900">{payItems.length}种</span>
                                        <ChevronRight size={14} className={`text-gray-400 transition-transform ${state.pay.expandSupp ? 'rotate-90' : ''}`} />
                                    </div>
                                </div>
                                {state.pay.expandSupp && (
                                    <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600 leading-relaxed space-y-1">
                                        {payItems.map((item, idx) => (
                                            <div key={idx}>{idx + 1}. {item.name}</div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Price Breakdown */}
                            <div className="py-3 border-t border-gray-50 text-sm flex justify-between items-center">
                                <span className="text-gray-500">商品金额</span>
                                <span className="font-bold text-gray-900">¥ {productPrice.toFixed(2)}</span>
                            </div>
                            <div className="py-3 border-t border-gray-50 text-sm flex justify-between items-center">
                                <span className="text-gray-500">运费</span>
                                <span className="text-gray-500">{state.pay.shipping > 0 ? `¥ ${state.pay.shipping}` : '免运费'}</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="p-4 bg-white border-t border-gray-50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                    <label className="flex items-start gap-2 mb-4 cursor-pointer">
                        <div 
                            className={`w-4 h-4 rounded mt-0.5 border flex items-center justify-center transition-colors ${
                                state.pay.agree ? 'bg-yellow-400 border-yellow-400 text-white' : 'border-gray-300 bg-white'
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                actions.setPayState({ agree: !state.pay.agree });
                            }}
                        >
                            {state.pay.agree && <Check size={12} strokeWidth={3} />}
                        </div>
                        <span className="text-xs text-gray-500 leading-snug">
                            同意《小小神经元用户协议》《隐私协议》《消费者告知》
                        </span>
                    </label>
                    <button 
                        className={`w-full py-3.5 rounded-full font-bold text-base transition-all ${
                            state.pay.agree 
                            ? 'bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-100 active:scale-95' 
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                        onClick={() => state.pay.agree ? actions.submitOrder() : alert('请先勾选并同意协议')}
                    >
                        立即支付 ¥ {totalPrice.toFixed(2)}
                    </button>
                </div>
             </div>
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
};

export default App;