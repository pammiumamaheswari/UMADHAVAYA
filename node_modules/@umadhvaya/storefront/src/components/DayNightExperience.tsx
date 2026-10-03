import React, { useState } from 'react';
import { INITIAL_SAREES, SareeProduct } from '../data/mockData';
import { Sun, Moon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DayNightExperience: React.FC = () => {
  const [selectedSareeIndex, setSelectedSareeIndex] = useState<number>(0);
  const [activeMode, setActiveMode] = useState<'day' | 'night'>('day');

  const saree: SareeProduct = INITIAL_SAREES[selectedSareeIndex] || INITIAL_SAREES[0];
  const currentEdit = activeMode === 'day' ? saree.dayNightEdit.day : saree.dayNightEdit.night;

  return (
    <section id="day-night-section" className="py-20 sm:py-28 bg-[#FFFDF9] border-y border-[#C5A059]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] font-medium tracking-[0.3em] text-[#C5A059] uppercase block mb-2">
            The Versatility Demonstration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#4A0614] mb-3">
            One Saree. Two Worlds.
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-stone-700 italic max-w-xl mx-auto mb-3 font-light">
            “The same heirloom. Re-imagined from morning meetings to evening celebrations.”
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-3 mb-4 opacity-80" />
          <p className="text-xs text-stone-500 font-normal tracking-wide">
            Switch between Day and Night to see how the styling, jewellery, and lighting transform:
          </p>
        </div>

        {/* Saree Picker Mini-Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {INITIAL_SAREES.slice(0, 4).map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setSelectedSareeIndex(idx)}
              className={`px-4 py-2 text-xs font-cinzel font-bold tracking-wider rounded-sm transition-all border whitespace-nowrap cursor-pointer ${
                selectedSareeIndex === idx
                  ? 'bg-[#4A0614] text-[#FAF7F2] border-[#C5A059] shadow-sm'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-[#C5A059]'
              }`}
            >
              {s.storyName}
            </button>
          ))}
        </div>

        {/* Master Day / Night Interactive Switcher */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex p-1.5 bg-[#FAF7F2] border-2 border-[#C5A059]/40 rounded-full shadow-inner">
            <button
              onClick={() => setActiveMode('day')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                activeMode === 'day'
                  ? 'bg-amber-100 text-amber-950 shadow-md ring-1 ring-amber-400'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Sun className={`w-4 h-4 ${activeMode === 'day' ? 'text-amber-600' : 'text-stone-400'}`} />
              <span>☀ DAY EDIT</span>
            </button>

            <button
              onClick={() => setActiveMode('night')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                activeMode === 'night'
                  ? 'bg-[#30030C] text-[#FAF7F2] shadow-md ring-1 ring-[#C5A059]'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Moon className={`w-4 h-4 ${activeMode === 'night' ? 'text-[#E8D3A2]' : 'text-stone-400'}`} />
              <span>🌙 NIGHT EDIT</span>
            </button>
          </div>
        </div>

        {/* Interactive Visual Display */}
        <div className={`rounded-sm border transition-all duration-700 overflow-hidden shadow-2xl max-w-5xl mx-auto ${
          activeMode === 'day'
            ? 'bg-[#FAF7F2] border-amber-200 text-stone-900'
            : 'bg-[#15070B] border-[#C5A059]/40 text-[#FAF7F2]'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual Photo */}
            <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-[540px] overflow-hidden">
              <img
                src={currentEdit.image}
                alt={`${saree.storyName} ${activeMode === 'day' ? 'Day Edit' : 'Night Edit'}`}
                className={`w-full h-full object-cover transition-all duration-700 scale-100 hover:scale-105 ${
                  activeMode === 'day'
                    ? 'contrast-[1.02] brightness-100'
                    : 'contrast-[1.18] brightness-[0.88] saturate-[1.12]'
                }`}
              />
              {/* Context Lighting Badge */}
              <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${activeMode === 'day' ? 'bg-amber-400' : 'bg-indigo-400'}`} />
                <span>{currentEdit.lighting}</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-black/60 backdrop-blur-md border border-white/15 text-white">
                <div className="text-[11px] tracking-widest text-[#E8D3A2] uppercase font-bold">
                  {activeMode === 'day' ? 'THE WORKDAY / DAYTIME DRAPE' : 'THE GALA / CELEBRATION DRAPE'}
                </div>
                <div className="font-royal text-xl font-medium mt-1">
                  {currentEdit.title}
                </div>
              </div>
            </div>

            {/* Styling Breakdown */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#C5A059]/30 mb-6">
                  <div>
                    <span className="text-[11px] font-cinzel font-bold text-[#C5A059] tracking-widest uppercase">
                      STYLING CURATION
                    </span>
                    <h3 className="font-cinzel text-2xl sm:text-3xl font-bold mt-1">
                      {saree.storyName}
                    </h3>
                  </div>
                  <span className="text-xs px-3 py-1 rounded bg-[#C5A059]/20 text-[#C5A059] font-bold uppercase tracking-wider">
                    {activeMode === 'day' ? 'Daylight Palette' : 'Nocturne Splendor'}
                  </span>
                </div>

                <p className="text-sm sm:text-base leading-relaxed opacity-90 font-light mb-8">
                  {currentEdit.description}
                </p>

                {/* Micro-Details Grid */}
                <div className="space-y-4">
                  <div className="p-3.5 rounded-sm border border-[#C5A059]/25 bg-black/5 dark:bg-white/5 flex items-start gap-3">
                    <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider w-24 flex-shrink-0">
                      Jewellery:
                    </span>
                    <span className="text-xs opacity-90">{currentEdit.jewellery}</span>
                  </div>

                  <div className="p-3.5 rounded-sm border border-[#C5A059]/25 bg-black/5 dark:bg-white/5 flex items-start gap-3">
                    <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider w-24 flex-shrink-0">
                      Drape Style:
                    </span>
                    <span className="text-xs opacity-90">{currentEdit.drapeStyle}</span>
                  </div>

                  <div className="p-3.5 rounded-sm border border-[#C5A059]/25 bg-black/5 dark:bg-white/5 flex items-start gap-3">
                    <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider w-24 flex-shrink-0">
                      Footwear:
                    </span>
                    <span className="text-xs opacity-90">{currentEdit.footwear}</span>
                  </div>

                  <div className="p-3.5 rounded-sm border border-[#C5A059]/25 bg-black/5 dark:bg-white/5 flex items-start gap-3">
                    <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider w-24 flex-shrink-0">
                      Environment:
                    </span>
                    <span className="text-xs opacity-90">{currentEdit.setting}</span>
                  </div>
                </div>
              </div>

              {/* View Saree Detail Link */}
              <div className="pt-6 border-t border-[#C5A059]/30 flex items-center justify-between">
                <div>
                  <span className="text-[11px] opacity-70 block">Silk & Weave Origin:</span>
                  <span className="text-xs font-bold">{saree.origin}</span>
                </div>
                <Link
                  to={`/products/${saree.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C5A059] hover:bg-[#D4AF37] text-stone-950 text-xs font-bold tracking-widest uppercase rounded-sm transition-colors cursor-pointer"
                >
                  <span>View This Saree</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
