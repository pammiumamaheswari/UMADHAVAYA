import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { SareeCard } from '../components/SareeCard';
import { INITIAL_SAREES, CATEGORIES_LIST, ROYAL_COLLECTIONS } from '../data/mockData';
import { Filter, SlidersHorizontal, Check, X, Sparkles, Feather } from 'lucide-react';

export const Shop: React.FC = () => {
  const { category: categorySlug } = useParams<{ category?: string }>();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const collectionParam = searchParams.get('collection') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(categorySlug || 'all');
  const [selectedCollection, setSelectedCollection] = useState<string>(collectionParam);
  const [selectedWeight, setSelectedWeight] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [priceRange, setPriceRange] = useState<number>(60000);
  const [showFilters, setShowFilters] = useState(false);

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return INITIAL_SAREES.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category.slug !== selectedCategory) {
        return false;
      }
      // Collection filter
      if (selectedCollection !== 'all' && product.collection?.slug !== selectedCollection) {
        return false;
      }
      // Weight filter
      if (selectedWeight !== 'all' && product.comfortProfile.weight !== selectedWeight) {
        return false;
      }
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matches =
          product.name.toLowerCase().includes(query) ||
          product.storyName.toLowerCase().includes(query) ||
          product.fabric.toLowerCase().includes(query) ||
          product.color.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query);
        if (!matches) return false;
      }
      // Price filter
      if (product.price > priceRange) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      if (sortBy === 'rating') return b.ratingAverage - a.ratingAverage;
      return 0;
    });
  }, [selectedCategory, selectedCollection, selectedWeight, searchQuery, priceRange, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Page Header */}
      <div className="border-b border-[#C5A059]/20 pb-6 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
            THE ROYAL EDIT • HEIRLOOMS OF INDIA
          </span>
          <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#4A0614]">
            {selectedCategory !== 'all'
              ? CATEGORIES_LIST.find((c) => c.slug === selectedCategory)?.name || 'Royal Sarees'
              : selectedCollection !== 'all'
              ? ROYAL_COLLECTIONS.find((c) => c.slug === selectedCollection)?.name || 'The Curated Edit'
              : 'The Royal Saree Collection'}
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Showing {filteredProducts.length} Silk Mark certified heirloom masterpieces
          </p>
        </div>

        {/* Sort Controls */}
        <div className="flex items-center justify-between sm:justify-end gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 border border-stone-300 rounded text-xs font-medium bg-white"
          >
            <Filter className="w-4 h-4 text-[#670A1E]" />
            <span>Filters</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500 hidden sm:inline">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-[#C5A059]/40 text-xs px-3 py-2 rounded focus:border-[#670A1E] outline-none font-medium text-stone-800"
            >
              <option value="newest">Featured & Newest</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Desktop Sidebar Filters */}
        <div className={`lg:block ${showFilters ? 'block' : 'hidden'} space-y-6`}>
          <div className="bg-[#FFFDF9] p-6 rounded-sm border border-[#C5A059]/30 shadow-sm space-y-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#4A0614]">
                Filter Heirlooms
              </h3>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedCollection('all');
                  setSelectedWeight('all');
                  setPriceRange(60000);
                }}
                className="text-[11px] text-[#670A1E] hover:underline"
              >
                Reset All
              </button>
            </div>

            {/* Weave Category Filter */}
            <div>
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
                Royal Weave
              </h4>
              <div className="space-y-1.5 text-xs">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left py-1.5 px-2 rounded transition-colors ${
                    selectedCategory === 'all' ? 'bg-[#670A1E] text-white font-bold' : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  All Weaves
                </button>
                {CATEGORIES_LIST.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`w-full text-left py-1.5 px-2 rounded transition-colors flex justify-between items-center ${
                      selectedCategory === cat.slug ? 'bg-[#670A1E] text-white font-bold' : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] opacity-70">({cat.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Comfort Weight Filter */}
            <div className="pt-4 border-t border-stone-200">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Feather className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Comfort Weight</span>
              </h4>
              <div className="space-y-1.5 text-xs">
                {['all', 'Light', 'Medium', 'Rich'].map((w) => (
                  <button
                    key={w}
                    onClick={() => setSelectedWeight(w)}
                    className={`w-full text-left py-1.5 px-2 rounded transition-colors ${
                      selectedWeight === w ? 'bg-[#670A1E] text-white font-bold' : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {w === 'all' ? 'All Comfort Profiles' : `${w} Weight Silk`}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="pt-4 border-t border-stone-200">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Max Investment
                </h4>
                <span className="text-xs font-bold text-[#670A1E]">
                  ₹{priceRange.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="20000"
                max="60000"
                step="2500"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-[#670A1E]"
              />
            </div>

          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded border border-[#C5A059]/30 p-8 space-y-4">
              <Sparkles className="w-10 h-10 text-[#C5A059] mx-auto" />
              <h3 className="font-cinzel text-xl font-bold text-stone-800">
                No matching heirlooms found
              </h3>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Try adjusting your filters or search terms to explore our other silk archives.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedCollection('all');
                  setSelectedWeight('all');
                  setPriceRange(60000);
                }}
                className="px-6 py-2.5 bg-[#670A1E] text-white text-xs uppercase font-bold tracking-widest rounded"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((saree) => (
                <SareeCard key={saree.id} product={saree} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
