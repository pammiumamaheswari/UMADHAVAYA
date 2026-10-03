import React from 'react';
import { ComfortProfile } from '../data/mockData';
import { Feather, Wind, Activity, Award, ShieldCheck, Thermometer, Sparkles } from 'lucide-react';

interface ComfortProfileProps {
  profile: ComfortProfile;
  compact?: boolean;
}

export const ComfortProfileDisplay: React.FC<ComfortProfileProps> = ({ profile, compact = false }) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1 text-[#C5A059]">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-sm ${star <= Math.round(rating) ? 'text-[#C5A059]' : 'text-stone-300'}`}
          >
            ★
          </span>
        ))}
        <span className="text-[11px] font-bold text-stone-700 ml-1">
          {rating.toFixed(1)}/5.0
        </span>
      </div>
    );
  };

  if (compact) {
    return (
      <div className="p-4 bg-[#FAF7F2] rounded-sm border border-[#C5A059]/30 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-[#C5A059]/20">
          <span className="text-[11px] font-cinzel font-bold text-[#670A1E] uppercase tracking-wider flex items-center gap-1.5">
            <Feather className="w-3.5 h-3.5 text-[#C5A059]" />
            Comfort Profile Spec
          </span>
          <span className="text-[10px] px-2 py-0.5 bg-[#C5A059]/20 text-[#670A1E] font-bold rounded">
            {profile.weight} Weight
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-stone-500 block text-[10px]">Drape & Feel:</span>
            <span className="font-semibold text-stone-800">{profile.drape} • {profile.fabricFeel}</span>
          </div>
          <div>
            <span className="text-stone-500 block text-[10px]">Workday Comfort:</span>
            <div className="mt-0.5">{renderStars(profile.workdayComfortRating)}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFDF9] p-6 sm:p-8 rounded-sm border border-[#C5A059]/40 shadow-md">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#C5A059]/30 mb-6 gap-2">
        <div>
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
            CERTIFIED ERGONOMIC SPECIFICATION
          </span>
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#4A0614] mt-0.5">
            COMFORT PROFILE
          </h3>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF7F2] rounded-full border border-[#C5A059]/30 text-xs text-stone-700">
          <ShieldCheck className="w-4 h-4 text-[#670A1E]" />
          <span>Silk Mark Certified Ergonomics</span>
        </div>
      </div>

      {/* Primary Spec Attributes */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="p-3.5 bg-[#FAF7F2] rounded-sm border border-[#C5A059]/20">
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
            WEIGHT
          </span>
          <span className="font-cinzel font-bold text-base text-[#4A0614]">
            {profile.weight}
          </span>
          <p className="text-[10px] text-stone-500 mt-0.5">Featherlight silk core</p>
        </div>

        <div className="p-3.5 bg-[#FAF7F2] rounded-sm border border-[#C5A059]/20">
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
            DRAPE
          </span>
          <span className="font-cinzel font-bold text-base text-[#4A0614]">
            {profile.drape}
          </span>
          <p className="text-[10px] text-stone-500 mt-0.5">Self-holding pleats</p>
        </div>

        <div className="p-3.5 bg-[#FAF7F2] rounded-sm border border-[#C5A059]/20">
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
            MOVEMENT
          </span>
          <span className="font-cinzel font-bold text-base text-[#4A0614]">
            {profile.movement}
          </span>
          <p className="text-[10px] text-stone-500 mt-0.5">Unrestricted stride</p>
        </div>

        <div className="p-3.5 bg-[#FAF7F2] rounded-sm border border-[#C5A059]/20">
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
            FABRIC FEEL
          </span>
          <span className="font-cinzel font-bold text-base text-[#4A0614]">
            {profile.fabricFeel}
          </span>
          <p className="text-[10px] text-stone-500 mt-0.5">Zero-snag reverse</p>
        </div>
      </div>

      {/* Star Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-[#C5A059]/20 mb-6">
        <div className="flex items-center justify-between p-3 bg-[#FAF7F2]/60 rounded border border-stone-200/80">
          <span className="text-xs font-semibold text-stone-800">WORKDAY COMFORT</span>
          {renderStars(profile.workdayComfortRating)}
        </div>

        <div className="flex items-center justify-between p-3 bg-[#FAF7F2]/60 rounded border border-stone-200/80">
          <span className="text-xs font-semibold text-stone-800">MOVEMENT EASE</span>
          {renderStars(profile.movementRating)}
        </div>

        <div className="flex items-center justify-between p-3 bg-[#FAF7F2]/60 rounded border border-stone-200/80">
          <span className="text-xs font-semibold text-stone-800">BREATHABILITY</span>
          {renderStars(profile.breathabilityRating)}
        </div>

        <div className="flex items-center justify-between p-3 bg-[#FAF7F2]/60 rounded border border-stone-200/80">
          <span className="text-xs font-semibold text-stone-800">DRAPE EASE</span>
          {renderStars(profile.drapeEaseRating)}
        </div>
      </div>

      {/* Best For & Climate */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block mb-2">
            BEST SUITED FOR:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {profile.bestFor.map((use, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-[#670A1E]/10 text-[#670A1E] font-medium rounded-sm border border-[#670A1E]/20"
              >
                {use}
              </span>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block mb-2">
            CLIMATE ADAPTATION:
          </span>
          <div className="flex items-center gap-2 p-2 bg-[#FAF7F2] rounded border border-[#C5A059]/30">
            <Thermometer className="w-4 h-4 text-[#C5A059]" />
            <span className="font-semibold text-stone-800">{profile.climate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
