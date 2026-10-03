import React, { useState } from 'react';
import { Search, Filter, Truck, Check, Eye, Printer } from 'lucide-react';

interface OrderItem {
  id: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  sareeTitle: string;
  amount: number;
  status: string;
  date: string;
  courier?: string;
  trackingNo?: string;
}

const INITIAL_ORDERS: OrderItem[] = [
  { id: '1', orderNumber: 'UMD-2026-1008', customerName: 'Gayatri Devi', customerPhone: '+91 98765 43210', sareeTitle: 'Aadrika Crimson Red Pure Kanchipuram Silk', amount: 48500, status: 'CONFIRMED', date: '01 Oct 2026' },
  { id: '2', orderNumber: 'UMD-2026-1009', customerName: 'Ananya Sharma', customerPhone: '+91 98765 43212', sareeTitle: 'Varanasi Noor Katan Silk Kadwa Banarasi', amount: 39500, status: 'PROCESSING', date: '01 Oct 2026' },
  { id: '3', orderNumber: 'UMD-2026-1010', customerName: 'Meenakshi Sundaram', customerPhone: '+91 98765 43214', sareeTitle: 'Mayura Royal Paithani Pure Silk Saree', amount: 42000, status: 'SHIPPED', date: '30 Sep 2026', courier: 'BlueDart Air', trackingNo: 'BLU847291823' },
  { id: '4', orderNumber: 'UMD-2026-1011', customerName: 'Radhika Rao', customerPhone: '+91 98765 43218', sareeTitle: 'Gulmohar Hand-Painted Organza Silk Saree', amount: 24500, status: 'DELIVERED', date: '29 Sep 2026', courier: 'Delhivery Express', trackingNo: 'DEL9928371' },
];

export const OrdersList: React.FC = () => {
  const [orders, setOrders] = useState<OrderItem[]>(INITIAL_ORDERS);
  const [selectedStatus, setSelectedStatus] = useState('ALL');

  const updateStatus = (orderNumber: string, nextStatus: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.orderNumber === orderNumber ? { ...o, status: nextStatus } : o))
    );
  };

  const filtered = orders.filter((o) => (selectedStatus === 'ALL' ? true : o.status === selectedStatus));

  return (
    <div className="space-y-6">
      {/* Filter Header */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
          {['ALL', 'CONFIRMED', 'PROCESSING', 'SHIPPED', 'DELIVERED'].map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors ${
                selectedStatus === st
                  ? 'bg-[#4A0B24] text-[#E8D3A2] border border-[#C5A059]'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-800/60'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-950/80 text-slate-400 border-b border-slate-800">
                <th className="p-4 font-semibold">Order Reference</th>
                <th className="p-4 font-semibold">Patron Details</th>
                <th className="p-4 font-semibold">Ordered Saree</th>
                <th className="p-4 font-semibold">Amount (INR)</th>
                <th className="p-4 font-semibold">Fulfillment Status</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {filtered.map((order) => (
                <tr key={order.orderNumber} className="hover:bg-slate-800/30">
                  <td className="p-4 font-mono font-bold text-[#E8D3A2]">
                    {order.orderNumber}
                    <div className="text-[10px] text-slate-500 font-sans">{order.date}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-semibold text-slate-100">{order.customerName}</div>
                    <div className="text-slate-500 text-[11px]">{order.customerPhone}</div>
                  </td>
                  <td className="p-4 truncate max-w-xs">{order.sareeTitle}</td>
                  <td className="p-4 font-bold text-slate-100">₹{order.amount.toLocaleString('en-IN')}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-[#4A0B24] text-[#E8D3A2] border border-[#C5A059]/40">
                      {order.status}
                    </span>
                    {order.trackingNo && (
                      <div className="text-[10px] text-slate-400 font-mono mt-1">
                        {order.courier}: {order.trackingNo}
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-right space-x-2">
                    {order.status === 'CONFIRMED' && (
                      <button
                        onClick={() => updateStatus(order.orderNumber, 'PROCESSING')}
                        className="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded text-[11px] font-semibold"
                      >
                        Pack Saree
                      </button>
                    )}
                    {order.status === 'PROCESSING' && (
                      <button
                        onClick={() => updateStatus(order.orderNumber, 'SHIPPED')}
                        className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-[11px] font-semibold"
                      >
                        Ship BlueDart
                      </button>
                    )}
                    {order.status === 'SHIPPED' && (
                      <button
                        onClick={() => updateStatus(order.orderNumber, 'DELIVERED')}
                        className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[11px] font-semibold"
                      >
                        Mark Delivered
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
