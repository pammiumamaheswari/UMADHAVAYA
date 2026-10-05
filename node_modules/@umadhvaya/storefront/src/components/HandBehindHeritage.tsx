import React, { useState } from 'react';
import { ARTISANS_DATA } from '../data/mockData';
import { MapPin, ChevronLeft, ChevronRight, X, Sparkles, Award, Clock, Compass, ShieldCheck } from 'lucide-react';

export const HandBehindHeritage: React.FC = () => {
  const [selectedArtisan, setSelectedArtisan] = useState<typeof ARTISANS_DATA[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? ARTISANS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === ARTISANS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-[#FBF8F1] overflow-hidden select-none">
      {/* ─── TOP BACKGROUND ELEMENTS ─── */}
      {/* Vintage Handloom Top-Left Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full md:w-[480px] lg:w-[600px] h-[340px] pointer-events-none opacity-25 mix-blend-multiply overflow-hidden z-0">
        <img
          src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=900"
          alt="Vintage Handloom Threads"
          className="w-full h-full object-cover object-left-top"
          style={{
            maskImage: 'radial-gradient(ellipse at top left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at top left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)',
          }}
        />
      </div>

      {/* Decorative Lotus Flower Corner Vector (Top-Right) */}
      <div className="absolute -top-6 -right-6 w-56 h-56 pointer-events-none opacity-20 text-[#9E7A31] z-0">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
          {/* Stylized Lotus Bloom Vector */}
          <path d="M100 20 C100 20 120 60 120 90 C120 120 100 130 100 130 C100 130 80 120 80 90 C80 60 100 20 100 20 Z" />
          <path d="M100 35 C115 65 145 80 145 105 C145 125 125 135 100 135 C75 135 55 125 55 105 C55 80 85 65 100 35 Z" />
          <path d="M100 55 C125 75 165 95 165 120 C165 140 135 145 100 145 C65 145 35 140 35 120 C35 95 75 75 100 55 Z" />
          <path d="M100 135 L100 175 M85 145 C85 165 100 175 100 175 M115 145 C115 165 100 175 100 175" />
          <circle cx="100" cy="180" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-14 sm:pt-18 pb-8 relative z-10">
        
        {/* ─── SECTION HEADER ─── */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 mb-12 sm:mb-14">
          
          {/* Left / Center Main Heading */}
          <div className="text-center lg:text-left flex-1 max-w-3xl">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 mb-2.5">
              <div className="w-6 h-px bg-[#C5A059]" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#9E7A31] uppercase">
                THE HUMAN DEVOTION
              </span>
              <div className="w-6 h-px bg-[#C5A059]" />
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-[#530B18] tracking-tight leading-[1.15] mb-3">
              The Hand Behind The Heritage
            </h2>

            {/* Subtitle */}
            <p className="font-serif text-base sm:text-lg text-[#4A4036] italic font-normal max-w-2xl">
              “Behind every inch of precious gold zari is a master weaver whose lineage spans four generations.”
            </p>
          </div>

          {/* Right Callout Banner (From Mockup) */}
          <div className="hidden lg:flex items-center gap-6 pl-8 border-l border-[#D8C7AA]/70">
            <div>
              <div className="text-[11px] font-bold tracking-[0.22em] text-[#7A6240] uppercase leading-relaxed font-sans">
                REAL PEOPLE.<br />
                TIMELESS SKILLS.<br />
                EXTRAORDINARY<br />
                STORIES.
              </div>
              <div className="w-12 h-px bg-[#C5A059]/70 my-2" />
              <div className="font-serif italic text-xl text-[#9A6A32] font-normal leading-tight">
                Preserving Heritage,<br />
                <span className="text-[#845420]">Weaving Dreams</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── ARTISANS SHOWCASE CAROUSEL ─── */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous artisan"
            className="hidden xl:flex absolute -left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-[#D9C8AC] bg-[#FBF8F1]/90 backdrop-blur-md text-[#530B18] items-center justify-center hover:bg-[#530B18] hover:text-[#FBF8F1] hover:border-[#530B18] transition-all duration-300 shadow-md z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next artisan"
            className="hidden xl:flex absolute -right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-[#D9C8AC] bg-[#FBF8F1]/90 backdrop-blur-md text-[#530B18] items-center justify-center hover:bg-[#530B18] hover:text-[#FBF8F1] hover:border-[#530B18] transition-all duration-300 shadow-md z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 3 Artisan Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {ARTISANS_DATA.map((artisan, index) => (
              <div
                key={artisan.id}
                className="group bg-[#FFFEFC] rounded-2xl border border-[#E4D7C3] shadow-[0_6px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(83,11,24,0.12)] hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col justify-between relative"
              >
                {/* Top Image Container */}
                <div className="relative h-[270px] sm:h-[290px] overflow-hidden bg-stone-900">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Dark Vignette & Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  
                  {/* Top-Left Experience Badge */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-md bg-[#580D1D]/95 text-[#EAD09D] text-[10px] font-bold tracking-wider uppercase border border-[#C5A059]/40 shadow-sm flex items-center gap-1.5 backdrop-blur-xs">
                    <Compass className="w-3 h-3 text-[#E0C07F]" />
                    <span>{artisan.badge || artisan.experience}</span>
                  </div>

                  {/* Bottom Location & Name on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1 text-[11px] text-[#E0C07F] font-medium tracking-wide">
                      <MapPin className="w-3.5 h-3.5 text-[#E0C07F]" />
                      <span>{artisan.location}</span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-[21px] font-bold text-white uppercase tracking-wide mt-0.5 drop-shadow-sm">
                      {artisan.name}
                    </h3>
                  </div>
                </div>

                {/* Bottom Card Content Area */}
                <div className="p-5 sm:p-6 bg-[#FFFEFC] flex-1 flex flex-col justify-between relative">
                  
                  {/* Watermark Lotus Icon in Bottom Right */}
                  <div className="absolute bottom-3 right-3 w-20 h-20 text-[#D8C7AA] opacity-25 pointer-events-none">
                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M50 15 C50 15 62 40 62 60 C62 75 50 82 50 82 C50 82 38 75 38 60 C38 40 50 15 50 15 Z" />
                      <path d="M50 25 C60 45 78 55 78 70 C78 82 65 87 50 87 C35 87 22 82 22 70 C22 55 40 45 50 25 Z" />
                      <path d="M50 87 L50 98" />
                    </svg>
                  </div>

                  <div>
                    {/* Role & Generation */}
                    <div className="mb-3.5">
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[#7A1528] block">
                        {artisan.role}
                      </span>
                      <span className="text-xs text-[#6B5E51] font-medium block mt-0.5">
                        {artisan.generation}
                      </span>
                    </div>

                    {/* Artisan Quote */}
                    <p className="font-serif italic text-[#3A332C] text-[13.5px] sm:text-[14.5px] leading-relaxed mb-4 font-light">
                      “{artisan.quote}”
                    </p>
                  </div>

                  {/* Meet the Artisan Action Footer */}
                  <div className="pt-3.5 border-t border-[#EAE0D0] mt-2 flex items-center justify-between z-10">
                    <button
                      onClick={() => setSelectedArtisan(artisan)}
                      className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.12em] text-[#530B18] uppercase group-hover:text-[#8B1A2F] transition-colors py-1 hover:underline underline-offset-4"
                    >
                      {/* Mandala Floral Icon */}
                      <span className="w-5 h-5 rounded-full bg-[#530B18]/10 text-[#530B18] flex items-center justify-center group-hover:bg-[#530B18] group-hover:text-[#FBF8F1] transition-colors">
                        <Sparkles className="w-2.5 h-2.5" />
                      </span>
                      <span>MEET THE ARTISAN</span>
                      <span className="text-sm font-semibold transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ─── 02: BOTTOM CURVED MAROON WAVE SECTION: FROM HANDS TO HERITAGE ─── */}
      <div className="relative mt-8 sm:mt-12">
        {/* Organic Flowing Top Wave SVG Transition */}
        <div className="w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-14 lg:h-16 block preserve-3d"
          >
            <path
              d="M0,25 C280,60 520,5 820,38 C1120,68 1320,12 1440,28 L1440,65 L0,65 Z"
              fill="#4E0817"
            />
          </svg>
        </div>

        {/* Deep Royal Maroon Content Band */}
        <div className="bg-[#4E0817] text-[#FAF7F2] relative px-4 sm:px-6 lg:px-12 pt-4 pb-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
              
              {/* Left Column: Heading & Tagline */}
              <div className="lg:col-span-3 text-center lg:text-left">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-[#E0C07F] uppercase block mb-1">
                  THE CRAFT JOURNEY
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-white font-normal leading-tight">
                  From Hands<br className="hidden lg:block" /> To Heritage
                </h3>
                <div className="flex items-center justify-center lg:justify-start gap-1.5 mt-2 opacity-70">
                  <div className="w-6 h-px bg-[#E0C07F]" />
                  <span className="text-[#E0C07F] text-[10px]">❖</span>
                  <div className="w-6 h-px bg-[#E0C07F]" />
                </div>
              </div>

              {/* Middle Column: The 4 Step Craft Journey Icons */}
              <div className="lg:col-span-6">
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-2">
                  
                  {/* Step 1: The Weaver */}
                  <div className="flex flex-col items-center text-center group min-w-[72px]">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#D4B574]/60 bg-[#38040F] flex items-center justify-center text-[#E0C07F] mb-2 shadow-inner group-hover:border-[#E0C07F] group-hover:scale-105 transition-all">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                        <circle cx="12" cy="7" r="4" />
                        <path d="M5.5 21 C5.5 16.5 8.5 14 12 14 C15.5 14 18.5 16.5 18.5 21" />
                        <path d="M9 18 L15 18" strokeWidth="1" />
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#F5E8CE] tracking-wider uppercase">
                      THE WEAVER
                    </span>
                    <span className="text-[10px] text-[#C9B8A3] mt-0.5">
                      A legacy of skill
                    </span>
                  </div>

                  {/* Connecting Arrow */}
                  <span className="hidden sm:inline text-[#D4B574]/60 text-sm font-light">→</span>

                  {/* Step 2: The Handloom */}
                  <div className="flex flex-col items-center text-center group min-w-[72px]">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#D4B574]/60 bg-[#38040F] flex items-center justify-center text-[#E0C07F] mb-2 shadow-inner group-hover:border-[#E0C07F] group-hover:scale-105 transition-all">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <line x1="8" y1="4" x2="8" y2="20" />
                        <line x1="12" y1="4" x2="12" y2="20" />
                        <line x1="16" y1="4" x2="16" y2="20" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                        <line x1="3" y1="14" x2="21" y2="14" />
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#F5E8CE] tracking-wider uppercase">
                      THE HANDLOOM
                    </span>
                    <span className="text-[10px] text-[#C9B8A3] mt-0.5">
                      Threads of tradition
                    </span>
                  </div>

                  {/* Connecting Arrow */}
                  <span className="hidden sm:inline text-[#D4B574]/60 text-sm font-light">→</span>

                  {/* Step 3: The Saree */}
                  <div className="flex flex-col items-center text-center group min-w-[72px]">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#D4B574]/60 bg-[#38040F] flex items-center justify-center text-[#E0C07F] mb-2 shadow-inner group-hover:border-[#E0C07F] group-hover:scale-105 transition-all">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                        <path d="M12 3 L18 8 L15 21 L9 21 L6 8 Z" />
                        <path d="M6 8 C9 11 15 11 18 8" />
                        <path d="M8 14 C11 17 13 17 16 14" strokeDasharray="1 1" />
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#F5E8CE] tracking-wider uppercase">
                      THE SAREE
                    </span>
                    <span className="text-[10px] text-[#C9B8A3] mt-0.5">
                      A work of art
                    </span>
                  </div>

                  {/* Connecting Arrow */}
                  <span className="hidden sm:inline text-[#D4B574]/60 text-sm font-light">→</span>

                  {/* Step 4: The Woman */}
                  <div className="flex flex-col items-center text-center group min-w-[72px]">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#D4B574]/60 bg-[#38040F] flex items-center justify-center text-[#E0C07F] mb-2 shadow-inner group-hover:border-[#E0C07F] group-hover:scale-105 transition-all">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                        <path d="M12 4 C14.2 4 16 5.8 16 8 C16 10.2 14.2 12 12 12 C9.8 12 8 10.2 8 8 C8 5.8 9.8 4 12 4 Z" />
                        <path d="M16 8 C18 9 20 12 20 15 C19 18 16 20 12 20 C8 20 5 18 4 15 C4 12 6 9 8 8" />
                        <path d="M14 6 C15 7 15 8 14 9" strokeWidth="1" />
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#F5E8CE] tracking-wider uppercase">
                      THE WOMAN
                    </span>
                    <span className="text-[10px] text-[#C9B8A3] mt-0.5">
                      A timeless elegance
                    </span>
                  </div>

                </div>
              </div>

              {/* Right Column: Fair Wages Heritage Promise */}
              <div className="lg:col-span-3 lg:pl-6 lg:border-l lg:border-[#D4B574]/30 text-center lg:text-left">
                <p className="font-serif italic text-xs sm:text-[13px] text-[#E8DAC2] leading-relaxed font-light">
                  UMADHVAYA pays direct fair wages above industry benchmarks to every artisan family, preserving the sacred handloom heritage of Kanchipuram, Varanasi, Chanderi, and Yeola.
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-1 mt-2 text-[#E0C07F]/60 text-[9px]">
                  <span>✦</span>
                  <div className="w-8 h-px bg-[#E0C07F]/40" />
                  <span>✦</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ─── 03: TRADITIONAL INDIAN ZARI BROCADE BOTTOM BORDER ─── */}
        <div className="bg-[#2D040D] border-t border-[#D4B574]/40 py-2.5 px-4 overflow-hidden">
          <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-4 text-[#D4B574]/70 text-[10px] tracking-[0.3em] uppercase">
            <span>◈</span>
            <span>✦</span>
            <span className="font-serif italic">100% PURE SILK & TESTED ZARI CERTIFIED GUILD</span>
            <span>✦</span>
            <span>◈</span>
            <span className="hidden md:inline font-serif italic">• FAIR WAGE DIRECT WEAVER INITIATIVE •</span>
            <span className="hidden md:inline">◈</span>
          </div>
        </div>
      </div>

      {/* ─── ARTISAN STORY MODAL ─── */}
      {selectedArtisan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div
            className="bg-[#FFFDF9] rounded-2xl max-w-2xl w-full border border-[#C5A059]/40 shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArtisan(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header with Image */}
            <div className="relative h-60 sm:h-72 overflow-hidden bg-stone-900">
              <img
                src={selectedArtisan.image}
                alt={selectedArtisan.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#670A1E]/90 text-[#E8D3A2] text-xs font-bold border border-[#C5A059]/40 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E8D3A2]" />
                <span>{selectedArtisan.badge || selectedArtisan.experience}</span>
              </div>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="flex items-center gap-1.5 text-xs text-[#E8D3A2] mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedArtisan.location}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                  {selectedArtisan.name}
                </h3>
                <p className="text-xs text-stone-300 font-medium">{selectedArtisan.role} • {selectedArtisan.generation}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#670A1E] mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#C5A059]" />
                  Master Lineage & Craftsmanship
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed font-light">
                  {selectedArtisan.bio || `For generations, ${selectedArtisan.name} has practiced the rare and sacred art of traditional Indian handloom weaving in ${selectedArtisan.location}.`}
                </p>
              </div>

              {/* Technique & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAF7F2] p-4 rounded-xl border border-[#C5A059]/20">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold text-[#4A0614] uppercase block">Signature Technique</span>
                    <span className="text-xs text-stone-700">{selectedArtisan.technique || selectedArtisan.specialty}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold text-[#4A0614] uppercase block">Crafting Time</span>
                    <span className="text-xs text-stone-700">{selectedArtisan.daysPerSaree || '40 to 60 days per saree'}</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="border-l-2 border-[#C5A059] pl-4 py-1 italic font-serif text-stone-800 text-sm sm:text-base">
                “{selectedArtisan.quote}”
              </div>

              {/* Guild affiliation & Fair wage badge */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#C5A059]/20">
                <div className="text-xs text-stone-500 text-center sm:text-left">
                  <span className="font-semibold text-stone-700">{selectedArtisan.guild || 'UMADHVAYA Certified Heritage Guild'}</span>
                  <div className="text-[11px] text-stone-400">100% Fair Wage Direct Beneficiary</div>
                </div>
                <button
                  onClick={() => setSelectedArtisan(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#670A1E] hover:bg-[#4A0614] text-[#FAF7F2] text-xs font-bold tracking-wider uppercase transition shadow-md"
                >
                  Close Story
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
