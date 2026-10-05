import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_SAREES } from '../data/mockData';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const RoyalCollectionsGrid: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Masterpieces' },
    { id: 'bridal-heirloom', label: 'Royal Bridal & Heirloom' },
    { id: 'banarasi-katan', label: 'Sacred Banarasi & Katan' },
    { id: 'light-contemporary', label: 'Contemporary Light Silks' },
  ];

  const filteredSarees = INITIAL_SAREES.filter((saree) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'bridal-heirloom') {
      return (
        saree.category.slug === 'kanchipuram-silk' ||
        saree.category.slug === 'paithani-silk' ||
        saree.collection?.slug === 'the-heirloom-collection' ||
        saree.collection?.slug === 'the-wedding-edit'
      );
    }
    if (selectedFilter === 'banarasi-katan') {
      return (
        saree.category.slug === 'banarasi-silk' ||
        saree.category.slug === 'katan-silk' ||
        saree.collection?.slug === 'the-katan-edit'
      );
    }
    if (selectedFilter === 'light-contemporary') {
      return (
        saree.category.slug === 'organza-silk' ||
        saree.category.slug === 'chanderi-silk' ||
        saree.category.slug === 'tussar-silk' ||
        saree.collection?.slug === 'the-gulmohar-edit' ||
        saree.collection?.slug === 'the-gold-collection' ||
        saree.collection?.slug === "the-weaver's-collection"
      );
    }
    return true;
  });

  // For carousel mode: 3 sarees per page on desktop
  const itemsPerPage = 3;
  const maxPages = Math.ceil(filteredSarees.length / itemsPerPage);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? maxPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev >= maxPages - 1 ? 0 : prev + 1));
  };

  // Determine which sarees to display
  const displayedSarees = showAll
    ? filteredSarees
    : filteredSarees.slice(carouselIndex * itemsPerPage, (carouselIndex + 1) * itemsPerPage);

  return (
    <section id="collections-section" className="pt-10 pb-14 sm:pt-14 sm:pb-18 bg-[#FAF7F2] border-b border-[#C5A059]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-[#C5A059] uppercase block mb-2">
            THE ROYAL EDIT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#4A0614] mb-2">
            Heirlooms of Timeless Stature
          </h2>
          <p className="font-serif text-base sm:text-lg text-stone-700 italic max-w-xl mx-auto font-light">
            “Each saree is given a poetic identity, woven with certified natural silk and 24K gold zari.”
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-3 opacity-80" />
        </div>

        {/* Curated 4-Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-8 px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedFilter(cat.id);
                setCarouselIndex(0);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                selectedFilter === cat.id
                  ? 'bg-[#670A1E] text-white border border-[#670A1E] shadow-sm'
                  : 'bg-white text-stone-700 border border-[#C5A059]/30 hover:border-[#670A1E] hover:text-[#670A1E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Carousel Navigation Header (when not in Show All mode) */}
        {!showAll && filteredSarees.length > itemsPerPage && (
          <div className="flex items-center justify-between max-w-7xl mx-auto mb-4 px-2">
            <span className="text-xs text-stone-500 font-medium tracking-wider">
              Showing {carouselIndex * itemsPerPage + 1}–{Math.min((carouselIndex + 1) * itemsPerPage, filteredSarees.length)} of {filteredSarees.length} Heirlooms
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous sarees"
                className="p-2 rounded-full bg-white hover:bg-[#670A1E] text-stone-700 hover:text-white border border-[#C5A059]/30 transition-colors shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next sarees"
                className="p-2 rounded-full bg-white hover:bg-[#670A1E] text-stone-700 hover:text-white border border-[#C5A059]/30 transition-colors shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Compact & Streamlined Saree Grid (3 Items at a Time) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
          {displayedSarees.map((saree) => (
            <div
              key={saree.id}
              className="group bg-[#FFFDF9] rounded-sm border border-[#C5A059]/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Image with Saree Story Name */}
                <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden bg-stone-900">
                  <img
                    src={saree.images[0]?.url}
                    alt={saree.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
                  
                  {/* Silk Mark Badge */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-[#C5A059]/40 text-[#E8D3A2] text-[9px] font-bold tracking-widest uppercase">
                    SILK MARK CERTIFIED
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[9px] font-bold tracking-[0.2em] text-[#C5A059] uppercase block">
                      {saree.category.name}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-white mt-0.5">
                      {saree.storyName}
                    </h3>
                  </div>
                </div>

                {/* Concise Body */}
                <div className="p-4 space-y-2">
                  <p className="font-serif text-xs text-[#670A1E] italic leading-snug line-clamp-1">
                    “{saree.poeticStory}”
                  </p>

                  <div className="pt-2 border-t border-[#C5A059]/20 flex items-center justify-between text-[11px] text-stone-500">
                    <span>{saree.origin}</span>
                    <span className="font-medium text-stone-700">{saree.workType}</span>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-4 pt-0 flex items-center justify-between border-t border-stone-100 mt-1">
                <div>
                  <span className="text-[9px] text-stone-400 block uppercase">Price:</span>
                  <span className="font-serif text-base font-bold text-[#4A0614]">
                    ₹{saree.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <Link
                  to={`/products/${saree.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#670A1E] hover:bg-[#4A0614] text-white text-xs font-medium tracking-wider uppercase rounded-sm transition-colors shadow-xs"
                >
                  <span>Discover</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Dots / View Mode Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-[#C5A059]/20 max-w-5xl mx-auto">
          {/* Dots Indicator */}
          {!showAll && maxPages > 1 ? (
            <div className="flex items-center gap-2">
              {Array.from({ length: maxPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCarouselIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    carouselIndex === i ? 'w-6 bg-[#670A1E]' : 'w-2 bg-[#C5A059]/40 hover:bg-[#C5A059]'
                  }`}
                />
              ))}
            </div>
          ) : (
            <div />
          )}

          {/* Toggle between 3-Item Carousel and Grid / Shop */}
          <div className="flex items-center gap-3">
            {filteredSarees.length > itemsPerPage && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-xs font-semibold text-[#670A1E] hover:text-[#4A0614] uppercase tracking-wider underline cursor-pointer"
              >
                {showAll ? 'Show 3 at a time' : `View all ${filteredSarees.length} pieces`}
              </button>
            )}

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#C5A059] hover:bg-[#b08d48] text-stone-950 text-xs font-bold tracking-wider uppercase rounded-sm shadow-xs transition-colors"
            >
              <span>Explore Boutique</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
