import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { BrandPhilosophy } from '../components/BrandPhilosophy';
import { HowWillYouWearYourStory } from '../components/HowWillYouWearYourStory';
import { RoyalCollectionsGrid } from '../components/RoyalCollectionsGrid';
import { DayNightExperience } from '../components/DayNightExperience';
import { HerDayTimeline } from '../components/HerDayTimeline';
import { ThreadToTreasure } from '../components/ThreadToTreasure';
import { HandBehindHeritage } from '../components/HandBehindHeritage';
import { FindYourSareeSection } from '../components/FindYourSareeSection';
import { SheIsUmadhvaya } from '../components/SheIsUmadhvaya';
import { UmadhvayaJournal } from '../components/UmadhvayaJournal';
import { FinalBrandStatement } from '../components/FinalBrandStatement';

export const Home: React.FC = () => {
  return (
    <div className="bg-[#FAF7F2] text-[#1A1818] selection:bg-[#C5A059] selection:text-white">
      {/* 01 — CINEMATIC LUXURY HERO */}
      <HeroSection />

      {/* 02 — BRAND PHILOSOPHY: ONE SAREE. MANY WORLDS. */}
      <BrandPhilosophy />

      {/* 03 — SIGNATURE FEATURE: HOW WILL YOU WEAR YOUR STORY? */}
      <HowWillYouWearYourStory />

      {/* 04 — SIGNATURE COLLECTIONS & ROYAL EDIT */}
      <RoyalCollectionsGrid />

      {/* 05 — ONE SAREE. TWO WORLDS. DAY / NIGHT EDIT */}
      <DayNightExperience />

      {/* 06 — HER DAY: 8:30 AM TO 9:00 PM ALL-DAY COMFORT TIMELINE */}
      <HerDayTimeline />

      {/* 07 — FROM THREAD TO TREASURE: 6 WEAVING MILESTONES */}
      <ThreadToTreasure />

      {/* 08 — THE HAND BEHIND THE HERITAGE: MASTER WEAVERS */}
      <HandBehindHeritage />

      {/* 09 — INTERACTIVE FIND YOUR SAREE EXPERIENCE */}
      <FindYourSareeSection />

      {/* 10 — SHE IS UMADHVAYA CAMPAIGN */}
      <SheIsUmadhvaya />

      {/* 11 — THE UMADHVAYA JOURNAL */}
      <UmadhvayaJournal />

      {/* 12 — FINAL BRAND STATEMENT */}
      <FinalBrandStatement />
    </div>
  );
};
