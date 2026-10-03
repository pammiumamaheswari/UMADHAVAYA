import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HER_WORLDS_DATA, HerWorldIdentity } from '../data/mockData';
import { ArrowRight, CheckCircle2, Feather, Sparkles } from 'lucide-react';

export const HowWillYouWearYourStory: React.FC = () => {
  const targetIds = [
    'teacher',
    'lawyer',
    'software-professional',
    'civil-servant',
    'entrepreneur',
    'creative-professional',
    'homemaker',
    'student',
    'myself',
  ];

  const availableRoles = HER_WORLDS_DATA.filter((r) => targetIds.includes(r.id));
  const [selectedId, setSelectedId] = useState<string>('teacher');

  const currentRole: HerWorldIdentity =
    availableRoles.find((item) => item.id === selectedId) || availableRoles[0];

  return (
    <section id="her-world-experience" className="py-20 sm:py-28 bg-[#FAF7F2] relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] font-medium tracking-[0.3em] text-[#C5A059] uppercase block mb-2">
            Signature Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#4A0614] mb-3">
            How Will You Wear Your Story?
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-stone-700 italic max-w-xl mx-auto mb-3 font-light">
            “Every woman has a different world. The saree becomes part of hers.”
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-3 mb-4 opacity-80" />
          <p className="text-xs text-stone-500 font-normal tracking-wide">
            Select an identity below to see how one versatile handloom saree adapts to her schedule, comfort, and life:
          </p>
        </div>

        {/* Identity Category Horizontal Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start lg:justify-center px-2">
          {availableRoles.map((role) => {
            const isSelected = role.id === selectedId;
            return (
              <button
                key={role.id}
                onClick={() => setSelectedId(role.id)}
                className={`px-4 py-2.5 rounded-sm text-xs font-cinzel font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 border flex-shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#670A1E] text-[#FAF7F2] border-[#670A1E] shadow-md shadow-[#670A1E]/20 ring-1 ring-[#C5A059]'
                    : 'bg-white text-stone-700 border-[#C5A059]/30 hover:border-[#670A1E] hover:text-[#670A1E]'
                }`}
              >
                {role.name}
              </button>
            );
          })}
        </div>

        {/* Reusable Content Card */}
        <div className="bg-[#FFFDF9] rounded-sm border border-[#C5A059]/40 shadow-xl overflow-hidden transition-all duration-500 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Large Woman Image */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-[500px] overflow-hidden bg-stone-900">
              <img
                src={currentRole.image}
                alt={currentRole.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A0614]/80 via-transparent to-black/20" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] font-cinzel font-bold tracking-[0.25em] text-[#E8D3A2] uppercase block mb-1">
                  {currentRole.subTitle}
                </span>
                <p className="font-royal text-xl sm:text-2xl font-light italic">
                  “{currentRole.quote}”
                </p>
              </div>
            </div>

            {/* Right: Narrative & Styling Details */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#C5A059]/25 mb-6">
                  <div>
                    <span className="text-[10px] font-cinzel font-bold text-[#C5A059] tracking-widest uppercase">
                      ROLE & PERSPECTIVE
                    </span>
                    <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A0614] mt-0.5">
                      SHE IS A {currentRole.name}
                    </h3>
                  </div>
                  <div className="px-3 py-1 bg-[#FAF7F2] border border-[#C5A059]/40 rounded text-[11px] font-semibold text-[#670A1E]">
                    {currentRole.accentQuote}
                  </div>
                </div>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {currentRole.philosophy}
                </p>

                {/* Styling Considerations */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                    <Feather className="w-4 h-4 text-[#C5A059]" />
                    <span>How This Saree Adapts To Her World:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentRole.stylingFeatures.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-700 bg-[#FAF7F2] p-2.5 rounded-sm border border-[#C5A059]/20">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#670A1E] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Recommendation & CTA Button */}
              <div className="pt-6 border-t border-[#C5A059]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-stone-500 uppercase tracking-wider block">Recommended Drape:</span>
                  <span className="font-royal text-lg font-bold text-[#670A1E]">
                    {currentRole.recommendedSaree}
                  </span>
                </div>

                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#670A1E] hover:bg-[#7B112B] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors shadow-sm"
                >
                  <span>EXPLORE HER STYLE</span>
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
