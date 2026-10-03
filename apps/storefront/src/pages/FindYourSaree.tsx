import React from 'react';
import { FindYourSareeSection } from '../components/FindYourSareeSection';
import { RoyalCollectionsGrid } from '../components/RoyalCollectionsGrid';
import { SheIsUmadhvaya } from '../components/SheIsUmadhvaya';
import { FinalBrandStatement } from '../components/FinalBrandStatement';
import { Sparkles, Compass } from 'lucide-react';

export const FindYourSaree: React.FC = () => {
  return (
    <div className="bg-[#FAF7F2] text-[#1A1818]">
      {/* Header Banner */}
      <section className="py-16 sm:py-20 bg-[#4A0614] text-[#FAF7F2] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#670A1E] border border-[#C5A059]/40 text-[#E8D3A2] text-[11px] font-cinzel font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>BESPOKE HEIRLOOM CURATION</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-wide">
            FIND YOUR SAREE
          </h1>
          <p className="font-royal text-xl sm:text-2xl text-stone-200 italic font-light max-w-xl mx-auto">
            “A saree should adapt to the woman — not the woman to the saree.”
          </p>
        </div>
      </section>

      {/* Interactive 3-Step Questionnaire */}
      <FindYourSareeSection />

      {/* The Royal Edit Collection */}
      <RoyalCollectionsGrid />

      {/* Campaign Manifesto */}
      <SheIsUmadhvaya />

      {/* Final Brand Statement */}
      <FinalBrandStatement />
    </div>
  );
};
