import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { BrandPhilosophy } from '../components/BrandPhilosophy';
import { HowWillYouWearYourStory } from '../components/HowWillYouWearYourStory';
import { RoyalCollectionsGrid } from '../components/RoyalCollectionsGrid';
import { ThreadToTreasure } from '../components/ThreadToTreasure';
import { HandBehindHeritage } from '../components/HandBehindHeritage';
import { FindYourSareeSection } from '../components/FindYourSareeSection';
import { UmadhvayaJournal } from '../components/UmadhvayaJournal';
import { FinalBrandStatement } from '../components/FinalBrandStatement';

export const Home: React.FC = () => {
  return (
    <div className="bg-[#FAF7F2] text-[#1A1818] selection:bg-[#C5A059] selection:text-white">
      {/* 01 — CINEMATIC LUXURY HERO */}
      <HeroSection />

      {/* 02 — BRAND PHILOSOPHY: ONE SAREE. MANY WORLDS. */}
      <BrandPhilosophy />

      {/* 03 — SIGNATURE FEATURE: SAME SAREE. DIFFERENT STORIES. (THE 8 ROLES) */}
      <HowWillYouWearYourStory />

      {/* 04 — THE ROYAL EDIT: CURATED HEIRLOOMS CAROUSEL */}
      <RoyalCollectionsGrid />

      {/* 05 — FROM THREAD TO TREASURE: 6 CRAFTING MILESTONES */}
      <ThreadToTreasure />

      {/* 06 — THE HAND BEHIND THE HERITAGE: MASTER WEAVERS */}
      <HandBehindHeritage />

      {/* 07 — INTERACTIVE FIND YOUR SAREE EXPERIENCE */}
      <FindYourSareeSection />

      {/* 08 — THE UMADHVAYA JOURNAL */}
      <UmadhvayaJournal />

      {/* 09 — FINAL BRAND STATEMENT */}
      <FinalBrandStatement />
    </div>
  );
};
