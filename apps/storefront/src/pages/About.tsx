import React from 'react';
import { Award, ShieldCheck, Sparkles, Feather, Compass, Heart } from 'lucide-react';
import { HandBehindHeritage } from '../components/HandBehindHeritage';
import { ThreadToTreasure } from '../components/ThreadToTreasure';
import { FinalBrandStatement } from '../components/FinalBrandStatement';

export const About: React.FC = () => {
  return (
    <div className="bg-[#FAF7F2] text-[#1A1818]">
      
      {/* Editorial Hero */}
      <section className="py-20 sm:py-28 bg-[#4A0614] text-[#FAF7F2] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs font-bold tracking-[0.3em] text-[#C5A059] uppercase block">
            OUR SACRED CALLING
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide">
            THE HOUSE OF UMADHVAYA
          </h1>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto" />
          <p className="font-royal text-2xl sm:text-3xl text-stone-200 italic font-light max-w-2xl mx-auto">
            “A saree should adapt to the woman — not the woman to the saree.”
          </p>
        </div>
      </section>

      {/* Core Philosophy Split */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-cinzel font-bold text-[#C5A059] tracking-widest uppercase">
              THE PHILOSOPHY OF DIGNITY
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#4A0614]">
              ONE SAREE. MANY WORLDS.
            </h2>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
              UMADHVAYA was founded on a singular conviction: a saree is not merely ceremonial costume or an ornament to "look beautiful". It is a living, breathing companion to a woman's intellectual, professional, and personal journey.
            </p>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
              Whether she is leading a boardroom keynote, mentoring the next generation in a classroom, presiding over a courtroom, or celebrating at home, her drape must give her uncompromised comfort, movement, and quiet sovereign stature.
            </p>

            <div className="pt-4 border-t border-[#C5A059]/30 grid grid-cols-2 gap-4">
              <div className="p-3 bg-white rounded border border-[#C5A059]/20">
                <span className="font-cinzel font-bold text-xs text-[#670A1E] block">100% PURE SILK MARK</span>
                <p className="text-[11px] text-stone-500 mt-0.5">Tested natural mulberry protein fibers</p>
              </div>
              <div className="p-3 bg-white rounded border border-[#C5A059]/20">
                <span className="font-cinzel font-bold text-xs text-[#670A1E] block">DIRECT ARTISAN GUILDS</span>
                <p className="text-[11px] text-stone-500 mt-0.5">Fair wages above industry standard</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-sm overflow-hidden border-2 border-[#C5A059]/40 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200"
              alt="UMADHVAYA Philosophy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A0614]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-royal text-xl italic">
                “Respect. Comfort. Confidence. Heritage. Individuality.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* From Thread to Treasure Section */}
      <ThreadToTreasure />

      {/* Hand Behind Heritage */}
      <HandBehindHeritage />

      {/* Final Emotional Statement */}
      <FinalBrandStatement />

    </div>
  );
};
