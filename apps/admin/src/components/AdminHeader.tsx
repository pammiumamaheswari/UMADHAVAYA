import React from 'react';
import { Bell, Search, ShieldCheck } from 'lucide-react';

export const AdminHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header className="h-16 bg-[#0B1120] border-b border-slate-800 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-bold text-slate-100">{title}</h2>
        <span className="hidden sm:inline-flex items-center gap-1 text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded font-mono font-semibold">
          <ShieldCheck className="w-3 h-3" />
          SYSTEM LIVE
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search orders, SKUs, patrons..."
            className="bg-slate-900 border border-slate-700 text-xs text-slate-200 pl-8 pr-4 py-1.5 rounded-md focus:border-[#C5A059] outline-none w-64"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
        </div>

        <button className="p-2 text-slate-400 hover:text-slate-100 relative">
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 bg-[#C5A059] rounded-full absolute top-1.5 right-1.5 animate-ping" />
        </button>
      </div>
    </header>
  );
};
