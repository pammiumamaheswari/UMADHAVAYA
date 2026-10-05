import React, { useState } from 'react';
import { INITIAL_SAREES, SareeProduct } from '../data/mockData';
import { Sun, Moon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DayNightExperience: React.FC = () => {
  const [selectedSareeIndex, setSelectedSareeIndex] = useState<number>(0);
  const [activeMode, setActiveMode] = useState<'day' | 'night'>('day');

  const saree: SareeProduct = INITIAL_SAREES[selectedSareeIndex] || INITIAL_SAREES[0];
  const dayEdit = saree.dayNightEdit.day;
  const nightEdit = saree.dayNightEdit.night;
  const currentEdit = activeMode === 'day' ? dayEdit : nightEdit;

  return (
    <section
      id="day-night-section"
      className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-[#FFFDF9] border-b border-[#C5A059]/20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#C5A059] uppercase block mb-2">
            THE VERSATILITY DEMONSTRATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#4A0614] mb-2">
            One Saree. <span className="text-[#C5A059] italic">Two Worlds.</span>
          </h2>
          <p className="font-serif text-base sm:text-lg text-stone-700 italic max-w-xl mx-auto font-light">
            “The same heirloom. Re-imagined from morning meetings to evening celebrations.”
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-3 opacity-80" />
        </div>

        {/* Unified Control Header: Saree Selection Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-8 px-2">
          {INITIAL_SAREES.slice(0, 4).map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setSelectedSareeIndex(idx)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                selectedSareeIndex === idx
                  ? 'bg-[#670A1E] text-white border border-[#670A1E] shadow-sm'
                  : 'bg-[#FAF7F2] text-stone-700 border border-[#C5A059]/30 hover:border-[#670A1E] hover:text-[#670A1E]'
              }`}
            >
              {s.storyName}
            </button>
          ))}
        </div>

        {/* Master Card with Integrated Day/Night Switcher */}
        <div
          className={`rounded-sm border transition-all duration-500 overflow-hidden shadow-xl ${
            activeMode === 'day'
              ? 'bg-[#FAF7F2] border-[#C5A059]/40 text-stone-900'
              : 'bg-[#180A0E] border-[#C5A059]/50 text-[#FAF7F2]'
          }`}
        >
          {/* Top Mode Bar */}
          <div
            className={`p-4 px-6 sm:px-8 border-b flex flex-col sm:flex-row items-center justify-between gap-4 ${
              activeMode === 'day'
                ? 'bg-amber-50/70 border-[#C5A059]/20'
                : 'bg-[#220B12] border-[#C5A059]/30'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C5A059]">
                {saree.storyName}
              </span>
              <span className="text-stone-400 hidden sm:inline">&bull;</span>
              <span className="text-xs opacity-80 font-serif italic hidden sm:inline">
                {saree.category.name}
              </span>
            </div>

            {/* Toggle Buttons */}
            <div className="flex items-center p-1 rounded-full bg-black/10 dark:bg-black/40 border border-[#C5A059]/30">
              <button
                onClick={() => setActiveMode('day')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeMode === 'day'
                    ? 'bg-amber-400 text-stone-950 shadow-xs'
                    : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Day Edit</span>
              </button>

              <button
                onClick={() => setActiveMode('night')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeMode === 'night'
                    ? 'bg-[#670A1E] text-white shadow-xs'
                    : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Night Edit</span>
              </button>
            </div>
          </div>

          {/* Card Body Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[440px]">
            
            {/* Visual Photo Column */}
            <div className="md:col-span-5 relative min-h-[320px] md:min-h-full overflow-hidden bg-stone-900">
              <img
                src={currentEdit.image}
                alt={`${saree.storyName} ${activeMode === 'day' ? 'Day Edit' : 'Night Edit'}`}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  activeMode === 'day'
                    ? 'contrast-[1.02] brightness-100'
                    : 'contrast-[1.12] brightness-[0.9] saturate-[1.1]'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              {/* Lighting Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    activeMode === 'day' ? 'bg-amber-400' : 'bg-indigo-400'
                  }`}
                />
                <span>{currentEdit.lighting}</span>
              </div>

              {/* Bottom Photo Title */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] tracking-widest text-[#E8D3A2] uppercase font-bold block mb-0.5">
                  {activeMode === 'day' ? 'DAYTIME STYLING' : 'NOCTURNE GALA STYLING'}
                </span>
                <p className="font-serif text-base font-normal leading-tight text-white">
                  {currentEdit.title}
                </p>
              </div>
            </div>

            {/* Styling Breakdown Details */}
            <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#C5A059]/25 mb-4">
                  <span className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase">
                    {activeMode === 'day' ? 'MORNING / WORKDAY EDIT' : 'EVENING / GALA EDIT'}
                  </span>
                  <span
                    className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider ${
                      activeMode === 'day'
                        ? 'bg-amber-200/60 text-amber-950'
                        : 'bg-[#670A1E] text-white'
                    }`}
                  >
                    {activeMode === 'day' ? '8:30 AM — 5:00 PM' : '6:00 PM — MIDNIGHT'}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal mb-2 text-[#4A0614] dark:text-amber-100">
                  {currentEdit.title}
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed opacity-90 font-normal mb-6">
                  {currentEdit.description}
                </p>

                {/* 4-Cell Styling Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  <div className="p-3 rounded-sm border border-[#C5A059]/20 bg-black/[0.02] dark:bg-white/[0.04]">
                    <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider block mb-0.5">
                      Jewellery
                    </span>
                    <span className="text-xs opacity-90 leading-tight block">
                      {currentEdit.jewellery}
                    </span>
                  </div>

                  <div className="p-3 rounded-sm border border-[#C5A059]/20 bg-black/[0.02] dark:bg-white/[0.04]">
                    <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider block mb-0.5">
                      Drape Style
                    </span>
                    <span className="text-xs opacity-90 leading-tight block">
                      {currentEdit.drapeStyle}
                    </span>
                  </div>

                  <div className="p-3 rounded-sm border border-[#C5A059]/20 bg-black/[0.02] dark:bg-white/[0.04]">
                    <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider block mb-0.5">
                      Footwear
                    </span>
                    <span className="text-xs opacity-90 leading-tight block">
                      {currentEdit.footwear}
                    </span>
                  </div>

                  <div className="p-3 rounded-sm border border-[#C5A059]/20 bg-black/[0.02] dark:bg-white/[0.04]">
                    <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider block mb-0.5">
                      Setting
                    </span>
                    <span className="text-xs opacity-90 leading-tight block">
                      {currentEdit.setting}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Row */}
              <div className="pt-4 border-t border-[#C5A059]/20 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] opacity-70 block uppercase">Pure Silk Origin</span>
                  <span className="text-xs font-semibold text-[#670A1E] dark:text-[#E8D3A2]">
                    {saree.origin}
                  </span>
                </div>

                <Link
                  to={`/products/${saree.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#670A1E] hover:bg-[#4A0614] text-white text-xs font-medium tracking-wider uppercase rounded-sm transition-colors shadow-xs cursor-pointer"
                >
                  <span>Explore Saree</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
