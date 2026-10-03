import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    badge: 'ROYAL HERITAGE WEAVES',
    title: 'UMADHVAYA',
    subtitle: 'Woven for generations. Draped for you.',
    ctaText: 'Explore Royal Sarees',
    ctaLink: '/shop',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1600',
    align: 'left',
  },
  {
    id: 2,
    badge: 'KANCHIPURAM & BANARASI',
    title: 'Pure Mulberry Silk & 24K Gold Zari',
    subtitle: 'Woven by 4th-generation master weavers over 40 meticulous days in the temple city.',
    ctaText: 'Explore Bridal Trousseau',
    ctaLink: '/shop/kanchipuram-silk',
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1600',
    align: 'right',
  },
  {
    id: 3,
    badge: 'SUMMER FESTIVE EDIT',
    title: 'Hand-Painted Botanical Organza Drapes',
    subtitle: 'Featherlight sheer elegance detailed with delicate scalloped zardozi craftsmanship.',
    ctaText: 'Discover Organza',
    ctaLink: '/shop/organza-floral',
    imageUrl: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=1600',
    align: 'left',
  },
];

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <div className="relative h-[80vh] min-h-[550px] max-h-[750px] w-full overflow-hidden bg-stone-950">
      {/* Background Slides */}
      {SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ transition: 'opacity 1s ease-in-out, transform 8s ease' }}
        >
          <img
            src={s.imageUrl}
            alt={s.title}
            className="w-full h-full object-cover object-center filter brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Slide Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-8 flex items-center">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#670A1E]/80 border border-[#C5A059]/40 backdrop-blur-md mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#FAF7F2] uppercase">
              {slide.badge}
            </span>
          </div>

          <h1 className="font-royal text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] text-[#FAF7F2] tracking-wide drop-shadow-md">
            {slide.title}
          </h1>

          <p className="mt-5 text-sm sm:text-base text-[#FAF7F2]/85 font-light leading-relaxed max-w-xl">
            {slide.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to={slide.ctaLink}
              className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#D4AF37] text-stone-950 text-xs font-bold tracking-[0.2em] uppercase rounded-sm shadow-gold-glow flex items-center gap-3 transition-all hover:translate-x-1"
            >
              <span>{slide.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/about"
              className="px-8 py-3.5 border border-[#FAF7F2]/40 hover:border-[#C5A059] text-[#FAF7F2] hover:text-[#C5A059] text-xs font-semibold tracking-[0.2em] uppercase rounded-sm backdrop-blur-sm transition-all"
            >
              Our Heritage Story
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
          className="p-3 rounded-full bg-black/40 hover:bg-[#5B0E2D] text-white border border-white/20 backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="text-xs tracking-widest text-[#C5A059] font-cinzel font-bold px-2">
          0{current + 1} / 0{SLIDES.length}
        </div>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % SLIDES.length)}
          className="p-3 rounded-full bg-black/40 hover:bg-[#5B0E2D] text-white border border-white/20 backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
