import React from 'react';
import { Home, FileText, Package, ShoppingCart, User } from 'lucide-react';
import { useApp } from '../AppContext';
import { Tab } from '../types';

const TabBar: React.FC = () => {
  const { tab, switchTab, parsedPlan, cart } = useApp();
  const hasPlan = !!parsedPlan;

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: 'report', label: '报告', icon: <FileText size={18} /> },
    { key: 'catalog', label: '产品', icon: <Package size={18} /> },
    { key: 'cart', label: '购物车', icon: <ShoppingCart size={18} /> },
    { key: 'me', label: '我的', icon: <User size={18} /> }
  ];

  const handleTabClick = (key: Tab) => {
    // Logic: If no plan, can only go to scan/report (which handles the scan view)
    if (!hasPlan && key !== 'report') {
      alert('请您先识别处方哦！');
      return;
    }
    // Use switchTab to reset the history stack when tapping bottom navigation
    switchTab(key);
  };

  return (
    <div className="fixed left-0 right-0 bottom-0 bg-white border-t border-gray-100 grid grid-cols-4 z-50 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      {tabs.map((t) => {
        // Active state check logic: 'report' is active for 'scan' or 'plan' views as well in this context
        const isActive = tab === t.key || (t.key === 'report' && (tab === 'scan' || tab === 'plan'));
        const isDisabled = !hasPlan && t.key !== 'report';
        const cartCount = cart.length;

        return (
          <button
            key={t.key}
            className={`flex flex-col items-center justify-center py-2 gap-0.5 text-xs touch-manipulation transition-colors h-[56px] ${
              isActive ? 'text-yellow-500' : 'text-gray-400'
            } ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={() => handleTabClick(t.key)}
          >
            <div className="relative mb-0.5">
              {t.icon}
              {t.key === 'cart' && cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 min-w-[14px] h-[14px] px-0.5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold border-2 border-white">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="scale-90 font-medium">{t.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default TabBar;