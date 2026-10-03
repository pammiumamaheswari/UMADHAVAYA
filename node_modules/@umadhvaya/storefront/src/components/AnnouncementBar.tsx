import React from 'react';
import { Sparkles, ShieldCheck, Truck } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#670A1E] text-[#FAF7F2] text-xs py-2 px-4 border-b border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-2 text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
          <span>CELEBRATE ROYAL WEAVES — USE CODE <strong className="text-[#C5A059] tracking-wider">ROYAL10</strong> FOR 10% OFF</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-[11px] text-[#FAF7F2]/80">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>100% Pure Silk Mark Certified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Complimentary Insured Shipping on Orders above ₹5,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};
