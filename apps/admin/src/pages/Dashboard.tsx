import React from 'react';
import {
  TrendingUp,
  ShoppingBag,
  Clock,
  AlertTriangle,
  Users,
  CheckCircle,
  ArrowUpRight,
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const stats = [
    { title: "Today's Gross Sales", value: '₹1,54,500', change: '+18.4%', icon: TrendingUp, color: 'text-[#C5A059]' },
    { title: 'Orders Placed Today', value: '14 Orders', change: '+4 Today', icon: ShoppingBag, color: 'text-blue-400' },
    { title: 'Pending Dispatch', value: '6 Sarees', change: 'Priority', icon: Clock, color: 'text-amber-400' },
    { title: 'Low Stock Vault Alert', value: '2 Loom Types', change: '< 3 Remaining', icon: AlertTriangle, color: 'text-rose-400' },
  ];

  const recentOrders = [
    { id: 'UMD-2026-1008', patron: 'Gayatri Devi', saree: 'Aadrika Crimson Red Kanchipuram Silk', amount: '₹48,500', status: 'CONFIRMED' },
    { id: 'UMD-2026-1009', patron: 'Ananya Sharma', saree: 'Varanasi Noor Katan Silk Banarasi', amount: '₹39,500', status: 'PACKED' },
    { id: 'UMD-2026-1010', patron: 'Meenakshi Sundaram', saree: 'Mayura Royal Paithani Pure Silk', amount: '₹42,000', status: 'SHIPPED' },
    { id: 'UMD-2026-1011', patron: 'Radhika Rao', saree: 'Gulmohar Hand-Painted Organza Silk', amount: '₹24,500', status: 'CONFIRMED' },
  ];

  return (
    <div className="space-y-6">
      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="bg-slate-900/90 border border-slate-800 p-5 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{s.title}</span>
                <Icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-2xl font-bold text-slate-100">{s.value}</span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center">
                  {s.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid: Orders & Fast Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders Table */}
        <div className="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-lg p-5">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
            <h3 className="text-sm font-bold text-slate-200 tracking-wider uppercase">
              Recent Heirloom Orders
            </h3>
            <span className="text-xs text-[#C5A059] font-semibold cursor-pointer hover:underline">
              View All Orders →
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-slate-400 border-b border-slate-800">
                  <th className="pb-3 font-semibold">Order ID</th>
                  <th className="pb-3 font-semibold">Patron</th>
                  <th className="pb-3 font-semibold">Saree Ordered</th>
                  <th className="pb-3 font-semibold">Amount</th>
                  <th className="pb-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 font-mono font-bold text-[#C5A059]">{order.id}</td>
                    <td className="py-3 font-medium text-slate-100">{order.patron}</td>
                    <td className="py-3 truncate max-w-xs">{order.saree}</td>
                    <td className="py-3 font-bold text-slate-100">{order.amount}</td>
                    <td className="py-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Saree Vault Health */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-5 space-y-4">
          <h3 className="text-sm font-bold text-slate-200 tracking-wider uppercase pb-3 border-b border-slate-800">
            Vault & Silk Mark Audit
          </h3>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-800/60 rounded border border-slate-700">
              <div className="flex justify-between items-center text-slate-200 font-semibold mb-1">
                <span>Kanchipuram Silk Vault</span>
                <span className="text-emerald-400 font-bold">12 in Stock</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#C5A059] h-full w-4/5" />
              </div>
            </div>

            <div className="p-3 bg-slate-800/60 rounded border border-slate-700">
              <div className="flex justify-between items-center text-slate-200 font-semibold mb-1">
                <span>Banarasi Katan Vault</span>
                <span className="text-emerald-400 font-bold">18 in Stock</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#C5A059] h-full w-3/4" />
              </div>
            </div>

            <div className="p-3 bg-slate-800/60 rounded border border-slate-700">
              <div className="flex justify-between items-center text-slate-200 font-semibold mb-1">
                <span>Paithani Royal Weaves</span>
                <span className="text-amber-400 font-bold">8 in Stock</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full w-2/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
