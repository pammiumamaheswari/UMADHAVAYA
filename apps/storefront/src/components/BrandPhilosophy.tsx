import React from 'react';
import { ArrowRight } from 'lucide-react';

export const BrandPhilosophy: React.FC = () => {
  const pillars = [
    'RESPECT',
    'COMFORT',
    'CONFIDENCE',
    'INDIVIDUALITY',
    'HERITAGE',
    'VERSATILITY',
    'SELF-EXPRESSION',
  ];

  return (
    <section
      id="philosophy-section"
      className="py-12 sm:py-16 bg-[#FFFDF9] relative overflow-hidden border-b border-[#C5A059]/20"
    >
      {/* Subtle Background Monogram */}
      <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] hidden lg:block">
        <span className="font-serif text-[360px] font-bold text-[#670A1E]">U</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Subtle Label */}
        <div className="inline-block mb-3">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#C5A059] uppercase block">
            THE UMADHVAYA PHILOSOPHY
          </span>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-2 opacity-80" />
        </div>

        {/* Signature Statement */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#4A0614] tracking-[0.03em] leading-tight mb-4">
          ONE SAREE. <span className="text-[#C5A059]">MANY WORLDS.</span>
        </h2>

        {/* Poetic Quote */}
        <p className="font-serif text-xl sm:text-3xl text-stone-800 leading-relaxed font-light max-w-3xl mx-auto mb-4 italic">
          “A saree that moves with her — <br className="hidden sm:inline" />
          from her first meeting of the morning to the last celebration of the night.”
        </p>

        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal mb-10 opacity-90">
          UMADHVAYA believes a saree is never an ornament to simply look beautiful. It is an extension of a woman's character, intellect, routine, comfort, and living heritage.
        </p>

        {/* Highlighted Headings Only (Sentences Removed) */}
        <div className="pt-8 border-t border-[#C5A059]/25">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-6">
            OUR SEVEN CORE PILLARS
          </span>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto">
            {pillars.map((heading, idx) => (
              <div
                key={heading}
                className="group relative px-5 sm:px-6 py-3 bg-[#FAF7F2] hover:bg-[#670A1E] border border-[#C5A059]/40 hover:border-[#670A1E] rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] group-hover:bg-[#E8D3A2] transition-colors" />
                  <span className="font-serif text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#4A0614] group-hover:text-white uppercase transition-colors">
                    {heading}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Editorial Banner Linking to Experience */}
        <div className="mt-12 pt-8 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto text-center sm:text-left">
          <p className="font-serif text-sm sm:text-base text-[#4A0614] italic">
            “How will you wear your story today?”
          </p>
          <a
            href="#her-world-experience"
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#670A1E] hover:bg-[#4A0614] text-white text-xs font-medium tracking-wider rounded-full transition-colors shadow-xs"
          >
            <span>Explore The 8 Roles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
