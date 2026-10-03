import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Sparkles, Feather } from 'lucide-react';
import { SareeProduct } from '../data/mockData';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

interface SareeCardProps {
  product: SareeProduct;
}

export const SareeCard: React.FC<SareeCardProps> = ({ product }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addItem } = useCart();

  const isFavorited = isInWishlist(product.id);
  const primaryImg = product.images.find((img) => img.isPrimary)?.url || product.images[0]?.url;
  const hoverImg = product.images.find((img) => img.isHover)?.url || primaryImg;

  return (
    <div className="group relative bg-[#FFFDF9] border border-[#C5A059]/30 rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
      {/* Image Container with Hover Flip */}
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-900">
        <Link to={`/products/${product.slug}`} className="block w-full h-full">
          <img
            src={primaryImg}
            alt={product.name}
            className={`w-full h-full object-cover object-center saree-hover-zoom ${
              hoverImg !== primaryImg ? 'group-hover:opacity-0' : ''
            } transition-opacity duration-700`}
            loading="lazy"
          />
          {hoverImg !== primaryImg && (
            <img
              src={hoverImg}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 saree-hover-zoom"
              loading="lazy"
            />
          )}
        </Link>

        {/* Ambient Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
          {product.isSilkMarkCertified && (
            <span className="bg-[#670A1E]/95 backdrop-blur-sm text-white text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase shadow-md border border-[#C5A059]/40">
              Silk Mark Pure
            </span>
          )}
          {product.comfortProfile && (
            <span className="bg-black/60 backdrop-blur-sm text-[#E8D3A2] text-[9px] font-semibold tracking-wider px-2 py-0.5 rounded-sm flex items-center gap-1 border border-white/10">
              <Feather className="w-2.5 h-2.5 text-[#C5A059]" />
              {product.comfortProfile.weight} • {product.comfortProfile.drape}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all shadow-sm ${
            isFavorited
              ? 'bg-rose-50 text-[#991B1B]'
              : 'bg-white/80 text-stone-700 hover:text-[#991B1B] hover:bg-white'
          }`}
          title="Add to Wishlist"
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current text-[#991B1B]' : ''}`} />
        </button>

        {/* Story Name Overlay */}
        <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
          <span className="text-[9px] font-cinzel font-bold tracking-[0.2em] text-[#C5A059] uppercase block">
            {product.category.name}
          </span>
          <h3 className="font-cinzel text-lg font-bold text-white leading-tight">
            {product.storyName}
          </h3>
        </div>

        {/* Quick Add To Bag Action */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#4A0614] via-[#670A1E]/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full py-2.5 px-4 bg-[#C5A059] hover:bg-[#D4AF37] text-stone-950 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Bag
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <Link
            to={`/products/${product.slug}`}
            className="font-royal text-sm font-semibold text-stone-800 hover:text-[#670A1E] line-clamp-1 transition-colors"
          >
            {product.name}
          </Link>
          <p className="text-[11px] font-royal italic text-[#670A1E] mt-0.5 line-clamp-1">
            “{product.poeticStory}”
          </p>
          <div className="text-[11px] text-stone-500 mt-1 line-clamp-1">
            {product.origin} • {product.workType}
          </div>
        </div>

        <div className="pt-3 border-t border-[#C5A059]/20 flex items-center justify-between">
          <div>
            <span className="text-base font-bold text-[#670A1E]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.mrp > product.price && (
              <span className="text-xs text-stone-400 line-through ml-2">
                ₹{product.mrp.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <Link
            to={`/products/${product.slug}`}
            className="text-[10px] font-cinzel font-bold text-[#670A1E] hover:text-[#C5A059] uppercase tracking-wider"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};
