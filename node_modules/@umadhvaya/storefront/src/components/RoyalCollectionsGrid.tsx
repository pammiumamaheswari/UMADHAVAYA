import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROYAL_COLLECTIONS, INITIAL_SAREES, SareeProduct } from '../data/mockData';
import { SareeCard } from './SareeCard';
import { ArrowRight, Sparkles, Award } from 'lucide-react';

export const RoyalCollectionsGrid: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredSarees = selectedFilter === 'all'
    ? INITIAL_SAREES
    : INITIAL_SAREES.filter((s) => s.collection?.slug === selectedFilter);

  return (
    <section id="collections-section" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#C5A059]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-medium tracking-[0.3em] text-[#C5A059] uppercase block mb-2">
            The Royal Edit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#4A0614] mb-4">
            Heirlooms of Timeless Stature
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-stone-700 italic max-w-xl mx-auto font-light">
            “Each saree is given a poetic identity, woven with certified natural silk and 24K gold zari.”
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-4 opacity-80" />
        </div>

        {/* Collection Filter Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-5 py-2.5 rounded-sm text-xs font-cinzel font-bold tracking-widest whitespace-nowrap uppercase transition-all ${
              selectedFilter === 'all'
                ? 'bg-[#670A1E] text-[#FAF7F2] border border-[#670A1E] shadow-sm'
                : 'bg-white text-stone-700 border border-[#C5A059]/30 hover:border-[#670A1E]'
            }`}
          >
            All Masterpieces
          </button>
          {ROYAL_COLLECTIONS.map((col) => (
            <button
              key={col.id}
              onClick={() => setSelectedFilter(col.slug)}
              className={`px-5 py-2.5 rounded-sm text-xs font-cinzel font-bold tracking-widest whitespace-nowrap uppercase transition-all ${
                selectedFilter === col.slug
                  ? 'bg-[#670A1E] text-[#FAF7F2] border border-[#670A1E] shadow-sm'
                  : 'bg-white text-stone-700 border border-[#C5A059]/30 hover:border-[#670A1E]'
              }`}
            >
              {col.name}
            </button>
          ))}
        </div>

        {/* Curated Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSarees.map((saree) => (
            <div
              key={saree.id}
              className="group bg-[#FFFDF9] rounded-sm border border-[#C5A059]/30 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Image with Saree Story Name */}
                <div className="relative aspect-[3/4] overflow-hidden bg-stone-900">
                  <img
                    src={saree.images[0]?.url}
                    alt={saree.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  {/* Silk Mark Badge */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-[#C5A059]/40 text-[#E8D3A2] text-[10px] font-bold tracking-widest uppercase">
                    SILK MARK CERTIFIED
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-cinzel font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
                      {saree.category.name}
                    </span>
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold mt-0.5 text-[#FAF7F2]">
                      {saree.storyName}
                    </h3>
                  </div>
                </div>

                {/* Poetic & Technical Body */}
                <div className="p-6 space-y-3">
                  <p className="font-royal text-base text-[#670A1E] italic leading-snug">
                    “{saree.poeticStory}”
                  </p>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {saree.shortDescription}
                  </p>

                  <div className="pt-3 border-t border-[#C5A059]/20 flex items-center justify-between text-xs text-stone-500">
                    <span>{saree.origin}</span>
                    <span className="font-semibold text-stone-700">{saree.workType}</span>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-100 mt-2">
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase">Price:</span>
                  <span className="font-royal text-xl font-bold text-stone-900">
                    ₹{saree.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <Link
                  to={`/products/${saree.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#670A1E] hover:bg-[#7B112B] text-white text-xs font-bold tracking-widest uppercase rounded-sm transition-colors shadow-sm"
                >
                  <span>Discover</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* View All CTAs */}
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C5A059] hover:bg-[#D4AF37] text-stone-950 text-xs font-bold tracking-[0.2em] uppercase rounded-sm shadow-md transition-all hover:shadow-gold-glow"
          >
            <span>VIEW COMPLETE ROYAL EDIT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
