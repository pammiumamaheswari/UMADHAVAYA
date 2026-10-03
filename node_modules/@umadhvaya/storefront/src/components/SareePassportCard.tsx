import React from 'react';
import { SareePassport } from '../data/mockData';
import { ShieldCheck, Award, QrCode, CheckCircle, Sparkles, X } from 'lucide-react';

interface SareePassportProps {
  passport: SareePassport;
  sareeName: string;
  onClose?: () => void;
}

export const SareePassportCard: React.FC<SareePassportProps> = ({ passport, sareeName, onClose }) => {
  return (
    <div className="relative bg-[#FFFDF9] text-[#1A1818] p-6 sm:p-10 rounded-sm border-2 border-[#C5A059] shadow-2xl max-w-2xl mx-auto overflow-hidden">
      
      {/* Background Subtle Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <span className="font-cinzel text-[240px] font-black text-[#670A1E]">U</span>
      </div>

      {/* Decorative Ornate Double Border */}
      <div className="absolute inset-2 border border-[#C5A059]/40 pointer-events-none" />

      {/* Close button if in modal */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-stone-400 hover:text-stone-700 z-20"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Passport Header */}
      <div className="text-center relative z-10 mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#670A1E] text-[#E8D3A2] border border-[#C5A059] mb-3 shadow-md">
          <Award className="w-6 h-6" />
        </div>
        <span className="text-[10px] font-bold tracking-[0.3em] text-[#C5A059] uppercase block">
          OFFICIAL DIGITAL ARCHIVE OF AUTHENTICITY
        </span>
        <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A0614] tracking-wide mt-1">
          UMADHVAYA SAREE PASSPORT
        </h2>
        <p className="text-xs text-stone-500 font-sans mt-1">
          Unique Registry ID: <span className="font-mono font-bold text-[#670A1E]">{passport.sareeId}</span>
        </p>
      </div>

      {/* Certificate Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs relative z-10 mb-8 bg-[#FAF7F2] p-5 rounded border border-[#C5A059]/30">
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
            COLLECTION
          </span>
          <span className="font-cinzel font-bold text-sm text-[#4A0614]">
            {passport.collection}
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
            SILK GRADE
          </span>
          <span className="font-medium text-stone-900">
            {passport.silkType}
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
            WEAVING TECHNIQUE
          </span>
          <span className="font-medium text-stone-900">
            {passport.weaveType}
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
            ZARI COMPOSITION
          </span>
          <span className="font-medium text-stone-900">
            {passport.zariType}
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
            CRAFTED IN
          </span>
          <span className="font-medium text-stone-900">
            {passport.craftedIn}
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
            CRAFTING DURATION
          </span>
          <span className="font-medium text-stone-900">
            {passport.craftingTime}
          </span>
        </div>

        <div className="sm:col-span-2 space-y-1 pt-2 border-t border-[#C5A059]/20">
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
            MASTER GUILD
          </span>
          <span className="font-medium text-stone-900">
            {passport.artisanGuild}
          </span>
        </div>
      </div>

      {/* Seal & Verification */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#C5A059]/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#670A1E]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1 text-[#670A1E] font-bold text-xs font-cinzel">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              AUTHENTICITY VERIFIED
            </div>
            <p className="text-[10px] text-stone-500 font-sans">
              Silk Mark Organisation of India Protocol Certified
            </p>
          </div>
        </div>

        <div className="text-center sm:text-right">
          <span className="font-royal italic text-sm text-[#4A0614] block">
            Umādhvaya Heritage Seal
          </span>
          <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold">
            MASTER EXAMINER APPROVED
          </span>
        </div>
      </div>

    </div>
  );
};
