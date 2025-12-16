import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useApp } from '../AppContext';

const Header: React.FC = () => {
  const { goBack, history } = useApp();
  const canGoBack = history.length > 1;

  return (
    <div className="sticky top-0 z-10 bg-white/85 backdrop-blur-md flex items-center justify-between py-3 px-4 border-b border-gray-100 h-[50px]">
      <div className="w-8 flex items-center">
        {canGoBack && (
          <button 
            onClick={goBack} 
            className="p-1 -ml-2 text-gray-600 active:scale-90 transition-transform"
          >
            <ChevronLeft size={24} />
          </button>
        )}
      </div>
      
      <div className="flex items-center gap-2 font-semibold text-gray-900 absolute left-1/2 transform -translate-x-1/2">
        <img src="https://xxsjypt2.netlify.app/logo.png" alt="Logo" className="w-6 h-6 rounded-full object-cover" />
        <span className="relative inline-block ml-0.5">
          <span>诺思睿儿</span>
          <span className="absolute -right-1.5 -top-0.5 text-[10px]">®</span>
        </span>
      </div>

      <div className="w-8"></div>
    </div>
  );
};

export default Header;