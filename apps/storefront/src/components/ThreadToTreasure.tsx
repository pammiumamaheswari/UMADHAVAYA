import React, { useState } from 'react';
import { CRAFT_STORY_STEPS } from '../data/mockData';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section id="craft-experience" className="py-20 sm:py-28 bg-[#30030C] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Background Subtle Gold Accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:32px_32px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-medium tracking-[0.3em] text-[#E8D3A2] uppercase block mb-2">
            The Anatomy of Craftsmanship
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF7F2] mb-4">
            From Thread To Treasure
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-stone-300 italic max-w-xl mx-auto mb-3 font-light">
            “Six sacred milestones. Weeks of quiet human mastery.”
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-3 mb-4 opacity-80" />
          <p className="text-xs text-stone-300 font-normal tracking-wide opacity-90">
            Select any stage below to explore the handloom journey from raw silk filament to finished heirloom:
          </p>
        </div>

        {/* Step Navigation Ribbon */}
        <div className="flex items-center justify-between overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar max-w-5xl mx-auto">
          {CRAFT_STORY_STEPS.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-sm border text-xs font-cinzel font-bold tracking-widest whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-[#C5A059] text-stone-950 border-[#C5A059] shadow-lg shadow-[#C5A059]/20'
                    : 'bg-[#4A0614]/80 text-stone-300 border-[#C5A059]/30 hover:border-[#C5A059] hover:text-white'
                }`}
              >
                <span>{step.step}</span>
                <span>—</span>
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Immersive Visual Showcase */}
        <div className="bg-[#4A0614] rounded-sm border border-[#C5A059]/40 shadow-2xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Image */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[480px] overflow-hidden bg-stone-950">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover object-center transition-all duration-700 scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#C5A059]/40 text-[#E8D3A2] text-xs font-cinzel font-bold">
                STAGE {current.step} / 06
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] font-bold tracking-widest text-[#C5A059] uppercase block">
                  {current.subtitle}
                </span>
                <h3 className="font-cinzel text-2xl font-bold mt-1">
                  {current.title}
                </h3>
              </div>
            </div>

            {/* Narrative & Controls */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-cinzel font-bold text-[#C5A059] tracking-widest uppercase block mb-2">
                  THE SACRED PROCESS
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FAF7F2] mb-2">
                  {current.step} — {current.title}
                </h3>
                <h4 className="font-royal text-xl text-[#E8D3A2] italic mb-6">
                  {current.subtitle}
                </h4>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light mb-8">
                  {current.description}
                </p>
              </div>

              {/* Prev / Next Stepper Controls */}
              <div className="pt-6 border-t border-[#C5A059]/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-sm border border-[#C5A059]/40 hover:border-[#C5A059] hover:bg-[#670A1E] text-white transition-colors"
                    aria-label="Previous Stage"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-sm border border-[#C5A059]/40 hover:border-[#C5A059] hover:bg-[#670A1E] text-white transition-colors"
                    aria-label="Next Stage"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <span className="text-xs text-stone-400 font-cinzel">
                  Crafting Cycle: 21 to 48 Days
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
