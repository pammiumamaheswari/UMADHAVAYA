import React from 'react';
import { ARTISANS_DATA } from '../data/mockData';
import { Award, Clock, Heart, Sparkles, MapPin } from 'lucide-react';

export const HandBehindHeritage: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#C5A059]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-medium tracking-[0.3em] text-[#C5A059] uppercase block mb-2">
            The Human Devotion
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#4A0614] mb-4">
            The Hand Behind The Heritage
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-stone-700 italic max-w-xl mx-auto font-light">
            “Behind every inch of precious gold zari is a master weaver whose lineage spans four generations.”
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-4 opacity-80" />
        </div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTISANS_DATA.map((artisan) => (
            <div
              key={artisan.id}
              className="bg-[#FFFDF9] rounded-sm border border-[#C5A059]/30 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Photo with Overlay */}
                <div className="relative h-64 overflow-hidden bg-stone-900">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#670A1E]/90 text-[#E8D3A2] text-[10px] font-cinzel font-bold border border-[#C5A059]/40">
                    {artisan.experience}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1 text-[11px] text-[#C5A059] font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{artisan.location}</span>
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-white mt-0.5">
                      {artisan.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1 pb-3 border-b border-[#C5A059]/20">
                    <span className="text-[11px] font-bold text-[#670A1E] uppercase tracking-wider block">
                      {artisan.role}
                    </span>
                    <span className="text-xs text-stone-600 block">
                      {artisan.generation}
                    </span>
                  </div>

                  <p className="font-royal text-base text-stone-800 italic leading-relaxed">
                    “{artisan.quote}”
                  </p>
                </div>
              </div>

              {/* Specialty Footer */}
              <div className="px-6 py-4 bg-[#FAF7F2] border-t border-[#C5A059]/20 text-[11px] text-stone-600 flex items-center justify-between">
                <span className="font-bold text-[#4A0614] uppercase tracking-wider">Specialty:</span>
                <span className="font-medium text-stone-800 truncate max-w-[180px]">{artisan.specialty}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Guild Commitment Banner */}
        <div className="mt-14 p-6 bg-[#670A1E] text-[#FAF7F2] rounded-sm border border-[#C5A059]/40 text-center max-w-4xl mx-auto shadow-md">
          <p className="font-royal text-lg sm:text-xl font-light">
            UMADHVAYA pays <strong>direct fair wages above industry benchmarks</strong> to every artisan family, preserving the sacred handloom heritage of Kanchipuram, Varanasi, Chanderi, and Yeola.
          </p>
        </div>

      </div>
    </section>
  );
};
