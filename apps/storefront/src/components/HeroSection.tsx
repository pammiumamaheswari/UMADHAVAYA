import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Compass, ChevronLeft, ChevronRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 3 Cinematic Heritage Backgrounds
  const backgroundSlides = [
    {
      url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=85&w=2000',
      title: 'Royal Crimson Kanchipuram',
    },
    {
      url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=85&w=2000',
      title: 'Emerald Katan Kadwa Banarasi',
    },
    {
      url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=85&w=2000',
      title: 'Ivory Gold Chanderi Tissue',
    },
  ];

  // Auto-slide backgrounds smoothly
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, [backgroundSlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundSlides.length) % backgroundSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
  };

  return (
    <section className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#4A0614] text-[#FAF7F2]">
      
      {/* 3 Crossfading Background Images */}
      <div className="absolute inset-0 z-0">
        {backgroundSlides.map((slide, idx) => (
          <div
            key={slide.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover object-center brightness-[0.40] contrast-[1.1] scale-105 transition-transform duration-[12000ms] ease-out"
            />
          </div>
        ))}

        {/* Calm Royal Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#30030C] via-transparent to-[#4A0614]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A0614]/70 via-transparent to-[#4A0614]/70" />
      </div>

      {/* Slide Navigation Arrow Left */}
      <button
        onClick={handlePrevSlide}
        className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 hover:border-[#C5A059] bg-black/30 hover:bg-[#670A1E]/80 backdrop-blur-sm text-white items-center justify-center transition-all cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 text-[#E8D3A2]" />
      </button>

      {/* Slide Navigation Arrow Right */}
      <button
        onClick={handleNextSlide}
        className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 hover:border-[#C5A059] bg-black/30 hover:bg-[#670A1E]/80 backdrop-blur-sm text-white items-center justify-center transition-all cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 text-[#E8D3A2]" />
      </button>

      {/* Main Content Container - Clean, Balanced Luxury Typography */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center flex flex-col items-center">
        
        {/* Subtle Brand Tag */}
        <span className="text-[11px] sm:text-xs font-medium tracking-[0.35em] text-[#E8D3A2] uppercase mb-4 opacity-90">
          The Digital Luxury Textile House
        </span>

        {/* Brand Name */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[0.25em] text-[#FAF7F2] mb-6">
          UMADHVAYA
        </h1>

        {/* Poetic Core Headline */}
        <div className="space-y-4 mb-10 max-w-2xl mx-auto">
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-[#FAF7F2] leading-snug">
            “Woven for generations. <br className="hidden sm:inline" />
            <span className="italic font-light text-[#E8D3A2]">Made for the woman of today.”</span>
          </p>
          <p className="text-stone-300 text-xs sm:text-sm font-normal tracking-[0.2em] uppercase opacity-80">
            Her heritage &bull; Her comfort &bull; Her story
          </p>
        </div>

        {/* Dual Primary & Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-10 w-full sm:w-auto">
          <Link
            to="/shop"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A059] hover:bg-[#D4AF37] text-[#1A0D14] text-xs font-semibold uppercase tracking-[0.18em] rounded-sm transition-all duration-300 shadow-lg hover:shadow-gold-glow flex items-center justify-center gap-3 group cursor-pointer"
          >
            <span>Explore The Collection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="#her-world-experience"
            className="w-full sm:w-auto px-8 py-3.5 border border-[#C5A059]/60 hover:border-[#C5A059] bg-[#670A1E]/50 hover:bg-[#670A1E]/80 text-[#FAF7F2] text-xs font-medium uppercase tracking-[0.18em] rounded-sm backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#C5A059]" />
            <span>Discover Her World</span>
          </a>
        </div>

        {/* Minimal Slide Indicator Dots */}
        <div className="flex items-center gap-2.5 mb-6">
          {backgroundSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? 'w-7 bg-[#C5A059]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Subtle Scroll Indicator */}
        <a
          href="#philosophy-section"
          className="inline-flex flex-col items-center text-stone-400 hover:text-[#C5A059] transition-colors cursor-pointer"
          aria-label="Scroll Down"
        >
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#E8D3A2]/80 mb-1">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C5A059]" />
        </a>

      </div>

      {/* Decorative Bottom Gold Accent Line */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-60" />
    </section>
  );
};
