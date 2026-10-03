import React from 'react';

export const BrandPhilosophy: React.FC = () => {
  const pillars = [
    { label: 'RESPECT', desc: 'Honoring the intellect, dignity, and autonomy of every woman who wears it.' },
    { label: 'COMFORT', desc: 'Crafted with lightweight pure silk so you move effortlessly without fatigue.' },
    { label: 'CONFIDENCE', desc: 'A presence that commands the room with quiet, dignified authority.' },
    { label: 'INDIVIDUALITY', desc: 'A saree should adapt to the woman — not the woman to the saree.' },
    { label: 'HERITAGE', desc: 'Centuries of Indian handloom wisdom woven with certified precious gold zari.' },
    { label: 'VERSATILITY', desc: 'Seamlessly transforming from morning boardrooms to midnight celebrations.' },
    { label: 'SELF-EXPRESSION', desc: 'You define how you wear it. Your life, your voice, your story.' },
  ];

  return (
    <section id="philosophy-section" className="py-20 sm:py-28 bg-[#FFFDF9] relative overflow-hidden border-b border-[#C5A059]/20">
      {/* Subtle Background Watermark */}
      <div className="absolute right-[-5%] top-[10%] opacity-[0.03] select-none pointer-events-none">
        <span className="font-cinzel text-[300px] text-[#670A1E] font-black">U</span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Section Label */}
        <div className="inline-block mb-4">
          <span className="text-[11px] font-medium tracking-[0.3em] text-[#C5A059] uppercase block">
            The UMADHVAYA Philosophy
          </span>
          <div className="w-10 h-0.5 bg-[#C5A059] mx-auto mt-2 opacity-80" />
        </div>

        {/* Major Signature Statement */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#4A0614] tracking-[0.05em] leading-tight mb-6">
          ONE SAREE. <br className="sm:hidden" />
          <span className="text-[#C5A059]">MANY WORLDS.</span>
        </h2>

        {/* Poetic Core Thesis */}
        <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-800 leading-relaxed font-light max-w-3xl mx-auto mb-6 italic">
          “A saree that moves with her — <br className="hidden sm:inline" />
          from her first meeting of the morning to the last celebration of the night.”
        </p>

        <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal mb-14 opacity-90">
          UMADHVAYA believes that a saree is never an ornament to simply look beautiful. It is an extension of a woman's character, intellect, routine, comfort, and heritage. A sacred textile that honours who she is.
        </p>

        {/* Dignity & Value Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 pt-10 border-t border-[#C5A059]/30">
          {pillars.map((p, idx) => (
            <div
              key={p.label}
              className={`p-3.5 sm:p-4 rounded-sm bg-[#FAF7F2] border border-[#C5A059]/30 text-center hover:border-[#670A1E] transition-all duration-300 ${
                idx === 6 ? 'col-span-2 md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <h3 className="text-xs font-semibold tracking-wider text-[#670A1E] mb-1.5 uppercase">
                {p.label}
              </h3>
              <p className="text-[11px] text-stone-600 leading-snug">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
