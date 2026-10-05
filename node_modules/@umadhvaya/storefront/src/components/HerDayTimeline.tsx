import React, { useState } from 'react';
import { HER_DAY_TIMELINE } from '../data/mockData';
import { Clock, CheckCircle2, Coffee, Briefcase, Users, Wine } from 'lucide-react';

import morningImg from '../assets/stories/corporate.jpg';
import keynoteImg from '../assets/stories/entrepreneur.jpg';
import coffeeImg from '../assets/stories/timeline_530pm.jpg';
import ritualImg from '../assets/stories/mayura_day.jpg';
import dinnerImg from '../assets/stories/mayura_night.jpg';

export const HerDayTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const currentSlot = HER_DAY_TIMELINE[activeStep] || HER_DAY_TIMELINE[0];

  const timelineImages = [
    morningImg,
    keynoteImg,
    coffeeImg,
    ritualImg,
    dinnerImg,
  ];

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Briefcase className="w-4 h-4" />;
      case 1: return <Users className="w-4 h-4" />;
      case 2: return <Coffee className="w-4 h-4" />;
      case 3: return <Users className="w-4 h-4" />;
      case 4: return <Wine className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <section id="her-day-section" className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-[#FAF7F2] border-b border-[#C5A059]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] font-medium tracking-[0.3em] text-[#C5A059] uppercase block mb-2">
            All-Day Living Proof
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#4A0614] mb-3">
            One Saree. Her Entire Day.
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-stone-700 italic max-w-xl mx-auto mb-3 font-light">
            “From morning focus to midnight celebration — fluid comfort that never tires.”
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-3 mb-4 opacity-80" />
          <p className="text-xs text-stone-500 font-normal tracking-wide">
            Select any time slot to see how the same handloom saree effortlessly adapts to each moment:
          </p>
        </div>

        {/* Time Scrubber Horizontal Bar */}
        <div className="relative mb-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 relative z-10">
            {HER_DAY_TIMELINE.map((item, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={item.time}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 sm:p-4 rounded-sm border text-left transition-all duration-300 flex flex-col items-start cursor-pointer ${
                    isActive
                      ? 'bg-[#670A1E] text-white border-[#670A1E] shadow-md ring-1 ring-[#C5A059]'
                      : 'bg-[#FFFDF9] text-stone-700 border-[#C5A059]/30 hover:border-[#670A1E]'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className={isActive ? 'text-[#E8D3A2]' : 'text-[#C5A059]'}>
                      {getIcon(idx)}
                    </span>
                    <span className="font-serif text-xs font-semibold tracking-wider">
                      {item.time}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider line-clamp-1">
                    {item.title.replace('THE ', '')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Timeline Card */}
        <div className="bg-[#FFFDF9] rounded-sm border border-[#C5A059]/40 shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[420px]">
            
            {/* Visual Photo Column */}
            <div className="md:col-span-5 relative min-h-[340px] md:min-h-full overflow-hidden bg-stone-900">
              <img
                src={timelineImages[activeStep] || currentSlot.image}
                alt={currentSlot.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-bold text-[#E8D3A2] tracking-widest uppercase block mb-0.5">
                  TIMELINE SNAPSHOT
                </span>
                <p className="font-serif text-lg sm:text-xl font-normal text-white">
                  {currentSlot.time} — {currentSlot.sareeLook}
                </p>
              </div>
            </div>

            {/* Details Column */}
            <div className="md:col-span-7 p-6 sm:p-9 lg:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#670A1E]/10 text-[#670A1E] font-serif font-bold text-xs rounded-sm border border-[#670A1E]/20">
                    {currentSlot.time}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
                    {currentSlot.context}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#4A0614] mb-3">
                  {currentSlot.title}
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {currentSlot.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#C5A059]/25 flex flex-wrap items-center gap-4 text-xs text-stone-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Zero-Crease Pure Silk Resilience</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Hypoallergenic & Breathable</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
