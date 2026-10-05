import React, { useState } from 'react';
import { CRAFT_STORY_STEPS } from '../data/mockData';
import { ChevronLeft, ChevronRight, ShieldCheck, Feather } from 'lucide-react';

export const ThreadToTreasure: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = CRAFT_STORY_STEPS[activeStep] || CRAFT_STORY_STEPS[0];

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % CRAFT_STORY_STEPS.length);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + CRAFT_STORY_STEPS.length) % CRAFT_STORY_STEPS.length);
  };

  return (
    <section
      id="craft-experience"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2] text-[#2E0B12] relative overflow-hidden border-b border-[#E8DFC8]"
    >
      {/* Decorative Corner / Background Flourish */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-[#EAD8B8]/20 to-transparent pointer-events-none rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#EAD8B8]/20 to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Row with Brand & Handcrafted Medallion */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 mb-8">
          
          {/* Top Left Brand Lockup */}
          <div className="hidden md:flex md:col-span-3 items-center gap-2.5">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-[#8C6D3A]">
                <svg className="w-5 h-5 fill-current text-[#8C6D3A]" viewBox="0 0 24 24">
                  <path d="M12 2C12 2 13.5 6 16.5 8C19.5 10 22 12 22 12C22 12 18.5 13 16 15C13.5 17 12 21 12 21C12 21 10.5 17 8 15C5.5 13 2 12 2 12C2 12 4.5 10 7.5 8C10.5 6 12 2 12 2Z" fillOpacity="0.8" />
                </svg>
                <span className="font-serif tracking-[0.25em] text-xs font-bold text-[#3F0814] uppercase">
                  UMADHVAYA
                </span>
              </div>
              <span className="text-[8px] tracking-[0.22em] text-[#8C6D3A] uppercase font-medium mt-0.5">
                TRADITION IN EVERY DRAPE
              </span>
            </div>
          </div>

          {/* Top Center Title */}
          <div className="md:col-span-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <span className="h-px w-6 sm:w-10 bg-[#C5A059]/60" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#8C6D3A] uppercase">
                THE ANATOMY OF CRAFTSMANSHIP
              </span>
              <span className="h-px w-6 sm:w-10 bg-[#C5A059]/60" />
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#3F0814] mb-1.5 tracking-tight">
              From Thread To Treasure
            </h2>
            
            <p className="font-serif text-sm sm:text-base text-[#6F4E53] italic font-light">
              “Six sacred milestones. Weeks of quiet human mastery.”
            </p>
            
            {/* Delicate Center Lotus Ornament */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="h-px w-6 bg-[#C5A059]/40" />
              <svg className="w-3.5 h-3.5 text-[#C5A059]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C12 3 13 7 15.5 9C18 11 21 12 21 12C21 12 17.5 13 15.5 15C13.5 17 12 21 12 21C12 21 10.5 17 8.5 15C6.5 13 3 12 3 12C3 12 6 11 8.5 9C11 7 12 3 12 3Z" />
              </svg>
              <span className="h-px w-6 bg-[#C5A059]/40" />
            </div>
          </div>

          {/* Top Right Silk Swatch Medallion */}
          <div className="hidden md:flex md:col-span-3 items-center justify-end gap-3">
            <div className="text-right">
              <span className="text-[9px] font-bold tracking-[0.2em] text-[#6F4E53] uppercase block">
                HANDCRAFTED
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-[#6F4E53] uppercase block">
                SAREES
              </span>
              <span className="h-0.5 w-5 bg-[#C5A059] block ml-auto mt-1" />
            </div>
            <div className="relative">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C5A059] shadow-md relative">
                <img
                  src="/stories/mayura_night.jpg"
                  alt="Handcrafted Silk"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/stories/mayura_day.jpg';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Botanical sprig decoration */}
              <svg className="absolute -right-2 -bottom-1 w-5 h-5 text-[#8C6D3A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22C12 22 17 17 17 11C17 5 12 2 12 2C12 2 7 5 7 11C7 17 12 22 12 22Z" />
                <path d="M12 22V8" />
              </svg>
            </div>
          </div>

        </div>

        {/* Step Navigation Pill Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-8 px-2">
          {CRAFT_STORY_STEPS.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`px-4 sm:px-5 py-2 rounded-full border text-[11px] sm:text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#4A0614] text-white border-[#4A0614] shadow-md font-bold'
                    : 'bg-white text-[#5C3A40] border-[#E2D6C7] hover:border-[#8C6D3A] hover:text-[#4A0614]'
                }`}
              >
                <span>{step.step}</span>
                <span className="mx-1.5 opacity-60">•</span>
                <span>{step.title.replace('THE ', '')}</span>
              </button>
            );
          })}
        </div>

        {/* Elevated Luxury Showcase Card */}
        <div className="bg-white rounded-xl sm:rounded-2xl border border-[#ECE2D5] shadow-[0_12px_40px_rgba(46,11,18,0.06)] overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[440px]">
            
            {/* Left Photo Column */}
            <div className="md:col-span-6 relative min-h-[340px] md:min-h-full overflow-hidden bg-stone-900 group">
              <img
                src={current.image}
                alt={current.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/stories/mayura_day.jpg';
                }}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              
              {/* Top Left Vertical Stage Badge */}
              <div className="absolute top-4 left-4">
                <div className="bg-[#4A0614] text-[#E8D3A2] px-2 py-2 rounded-md shadow-md border border-[#C5A059]/40">
                  <span className="text-[9px] font-bold tracking-[0.25em] uppercase [writing-mode:vertical-rl] rotate-180 block">
                    STAGE {current.step} OF 06
                  </span>
                </div>
              </div>

              {/* Bottom Left Photo Tag & Motif */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-1.5 mb-1 text-[#E8D3A2]">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C12 2 13.5 6 16.5 8C19.5 10 22 12 22 12C22 12 18.5 13 16 15C13.5 17 12 21 12 21C12 21 10.5 17 8 15C5.5 13 2 12 2 12C2 12 4.5 10 7.5 8C10.5 6 12 2 12 2Z" />
                  </svg>
                  <span className="text-[9px] font-bold tracking-[0.25em] uppercase">
                    HANDPICKED
                  </span>
                  <span className="h-px w-6 bg-[#C5A059]/50" />
                </div>
                <h4 className="font-serif text-base sm:text-lg font-normal text-white drop-shadow-sm">
                  {current.tag || current.subtitle}
                </h4>
              </div>
            </div>

            {/* Right Narrative & Details Column */}
            <div className="md:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#8C6D3A] tracking-[0.25em] uppercase">
                    CRAFTSMANSHIP MILESTONE
                  </span>
                  <span className="h-px w-8 bg-[#C5A059]" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#3F0814] mb-1">
                  {current.step} — {current.title}
                </h3>

                <p className="font-serif text-sm sm:text-base text-[#7A1D2E] italic font-light mb-4">
                  {current.subtitle}
                </p>

                <p className="text-[#594B4E] text-xs sm:text-sm leading-relaxed font-normal mb-6">
                  {current.description}
                </p>

                {/* Two Distinct Guarantee Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#ECE2D5]">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#ECE2D5]">
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center border border-[#D9CEBF] flex-shrink-0 text-[#8C6D3A]">
                      <Feather className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium text-[#3F0814]">
                      Certified Pure Silk & Real Zari
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#ECE2D5]">
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center border border-[#D9CEBF] flex-shrink-0 text-[#8C6D3A]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium text-[#3F0814]">
                      Fair Artisan Wages Above Standard
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Navigation Row */}
              <div className="pt-4 border-t border-[#ECE2D5] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handlePrev}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D9CEBF] bg-white hover:bg-[#4A0614] hover:text-white text-[#4A0614] transition-colors flex items-center justify-center cursor-pointer shadow-sm"
                    aria-label="Previous Stage"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D9CEBF] bg-white hover:bg-[#4A0614] hover:text-white text-[#4A0614] transition-colors flex items-center justify-center cursor-pointer shadow-sm"
                    aria-label="Next Stage"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-[#7A6A6D] font-serif ml-2">
                    Step {current.step} of 06
                  </span>
                </div>

                <span className="text-[10px] sm:text-[11px] text-[#8C6D3A] font-bold tracking-wider uppercase">
                  Crafting Cycle: 21 to 48 Days
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Section Bottom Footer Accent */}
        <div className="flex items-center justify-center gap-4 mt-12 text-center">
          <span className="h-px w-12 sm:w-20 bg-[#C5A059]/40" />
          <div className="flex items-center gap-2 text-[#7A6A6D]">
            <svg className="w-3.5 h-3.5 text-[#C5A059]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C12 3 13 7 15.5 9C18 11 21 12 21 12C21 12 17.5 13 15.5 15C13.5 17 12 21 12 21C12 21 10.5 17 8.5 15C6.5 13 3 12 3 12C3 12 6 11 8.5 9C11 7 12 3 12 3Z" />
            </svg>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] font-medium uppercase">
              PURE SILK • TIMELESS CRAFT • YOUR STORY
            </span>
          </div>
          <span className="h-px w-12 sm:w-20 bg-[#C5A059]/40" />
        </div>

      </div>
    </section>
  );
};
