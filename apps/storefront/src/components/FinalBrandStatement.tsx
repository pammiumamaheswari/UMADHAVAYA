import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const FinalBrandStatement: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 bg-[#4A0614] text-[#FAF7F2] relative overflow-hidden text-center">
      
      {/* Background Subtle Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
        <span className="font-cinzel text-[360px] font-black text-[#C5A059]">U</span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Subtle Crest */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#C5A059]/40 bg-[#670A1E]/80 mb-2 shadow-lg">
          <span className="font-cinzel text-2xl font-bold text-[#E8D3A2]">U</span>
        </div>

        {/* Major Emotional Headline */}
        <div className="space-y-2">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[0.1em] text-[#FAF7F2]">
            MORE THAN A SAREE.
          </h2>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light tracking-[0.1em] text-[#E8D3A2]">
            A REFLECTION OF HER.
          </h2>
        </div>

        <div className="w-16 h-0.5 bg-[#C5A059] mx-auto opacity-80" />

        {/* Poetic Realization */}
        <p className="font-serif text-xl sm:text-3xl text-stone-200 italic max-w-2xl mx-auto leading-relaxed font-light">
          “I don’t have to change who I am to wear this saree. <br className="hidden sm:inline" />
          This saree belongs in my world.”
        </p>

        {/* Brand Declaration */}
        <div className="pt-4 space-y-2">
          <span className="text-[11px] font-medium tracking-[0.35em] text-[#C5A059] uppercase block">
            UMADHVAYA
          </span>
          <p className="text-sm sm:text-base tracking-[0.2em] text-white font-medium uppercase">
            Her Saree &bull; Her Story &bull; Her Way
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-6">
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#C5A059] hover:bg-[#D4AF37] text-stone-950 text-xs font-bold tracking-[0.2em] uppercase rounded-sm shadow-xl hover:shadow-gold-glow transition-all"
          >
            <span>DISCOVER YOUR HEIRLOOM</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Decorative Bottom Gold Line */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-50" />
    </section>
  );
};
