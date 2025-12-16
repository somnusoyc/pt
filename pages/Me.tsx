import React from 'react';
import Header from '../components/Header';
import { useApp } from '../AppContext';
import { Clock, Package, Truck, Headphones, BookOpen, AlertCircle, Mail, ChevronRight } from 'lucide-react';

const Me: React.FC = () => {
  const { setTab, openUsageModal, openNoticeModal, openSupportChat, hasNewShipment } = useApp();

  const services = [
    { label: '联系客服', icon: <Headphones size={20} />, action: openSupportChat, sub: '9:00 - 23:00' },
    { label: '服用说明', icon: <BookOpen size={20} />, action: openUsageModal, sub: '专业指导' },
    { label: '用户须知', icon: <AlertCircle size={20} />, action: openNoticeModal, sub: '更新: 11/08' },
    { label: '商务合作', icon: <Mail size={20} />, action: () => alert('邮箱已复制: xxsjy.com'), sub: 'xxsjy.com' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header />
      
      <div className="p-4 space-y-4">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-5 flex items-center gap-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center overflow-hidden">
                    <img src="https://picsum.photos/seed/user/200/200" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">元元宝贝</h3>
                    <div className="text-xs text-gray-500">188****8888</div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 px-4 py-2 flex justify-between items-center text-xs font-bold text-gray-900">
                <span>💎 钻石会员</span>
                <span className="opacity-60 flex items-center gap-1">查看权益 <ChevronRight size={12}/></span>
            </div>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900 text-sm">我的订单</h3>
                <button className="text-xs text-gray-500 flex items-center gap-0.5" onClick={() => setTab('history')}>
                    查看全部 <ChevronRight size={12}/>
                </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
                <button className="flex flex-col items-center gap-2" onClick={() => setTab('history')}>
                    <Clock size={24} className="text-gray-800"/>
                    <span className="text-xs font-medium">待付款</span>
                </button>
                <button className="flex flex-col items-center gap-2 relative" onClick={() => setTab('history')}>
                    <Package size={24} className="text-gray-800"/>
                    <span className="text-xs font-medium">待发货</span>
                    {hasNewShipment && <span className="absolute -top-1 right-2 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white"></span>}
                </button>
                <button className="flex flex-col items-center gap-2">
                    <Truck size={24} className="text-gray-800"/>
                    <span className="text-xs font-medium">待收货</span>
                </button>
                <button className="flex flex-col items-center gap-2">
                    <Headphones size={24} className="text-gray-800"/>
                    <span className="text-xs font-medium">售后</span>
                </button>
            </div>
        </div>

        {/* Services */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <h3 className="font-bold text-gray-900 text-sm p-4 border-b border-gray-50">更多服务</h3>
            <div>
                {services.map((s, i) => (
                    <button 
                        key={i} 
                        className="w-full flex items-center justify-between p-4 border-b border-gray-50 last:border-0 active:bg-gray-50"
                        onClick={s.action}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-yellow-500">
                                {s.icon}
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-sm text-gray-900">{s.label}</div>
                                {s.sub && <div className="text-[10px] text-gray-400">{s.sub}</div>}
                            </div>
                        </div>
                        <ChevronRight size={16} className="text-gray-300"/>
                    </button>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Me;