import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { INITIAL_SAREES, SareeProduct } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { VideoDrapeModal } from '../components/VideoDrapeModal';
import { ComfortProfileDisplay } from '../components/ComfortProfileDisplay';
import { SareePassportCard } from '../components/SareePassportCard';
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Heart,
  ShoppingBag,
  Star,
  Sun,
  Flame,
  Moon,
  ZoomIn,
  ZoomOut,
  Maximize2,
  X,
  Video,
  Award,
  Package,
  Check,
  Eye,
  Feather,
  Layers,
  Compass,
} from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  // Find exact product or fallback
  const product: SareeProduct =
    INITIAL_SAREES.find((p) => p.slug === slug) || INITIAL_SAREES[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightingTheme, setLightingTheme] = useState<'daylight' | 'candlelight' | 'darkRoyal'>('daylight');
  const [zoomFactor, setZoomFactor] = useState<number>(2.8);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomCoords, setZoomCoords] = useState({ x: 50, y: 50 });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [blouseChoice, setBlouseChoice] = useState('Unstitched Matching Pure Silk Fabric (Included)');
  const [quantity, setQuantity] = useState(1);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPassportModalOpen, setIsPassportModalOpen] = useState(false);
  const [activeDayNight, setActiveDayNight] = useState<'day' | 'night'>('day');
  const [macroTab, setMacroTab] = useState<'zari' | 'weave' | 'pallu' | 'border'>('zari');

  const activeImage = product.images[activeImageIndex] || product.images[0];
  const isFavorited = isInWishlist(product.id);

  // Reset active image when slug changes
  useEffect(() => {
    setActiveImageIndex(0);
    setIsZooming(false);
    window.scrollTo(0, 0);
  }, [slug]);

  const handleBuyNow = () => {
    addItem(product, quantity, blouseChoice);
    navigate('/checkout');
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setZoomCoords({ x, y });
  };

  const getImageFilterStyle = () => {
    if (lightingTheme === 'candlelight') {
      return 'contrast-[1.12] brightness-[0.95] sepia-[0.38] hue-rotate-[-12deg] saturate-[1.25]';
    }
    if (lightingTheme === 'darkRoyal') {
      return 'contrast-[1.25] brightness-[0.88] saturate-[1.15]';
    }
    return 'contrast-[1.02] brightness-[1.0] saturate-[1.05]';
  };

  const relatedSarees = INITIAL_SAREES.filter((s) => s.id !== product.id).slice(0, 3);
  const currentDayNight = activeDayNight === 'day' ? product.dayNightEdit.day : product.dayNightEdit.night;

  return (
    <div className={`transition-colors duration-500 ${lightingTheme === 'darkRoyal' ? 'bg-[#0F0B0D] text-stone-100' : 'bg-[#FAF7F2] text-stone-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Breadcrumb Navigation */}
        <nav className="text-xs mb-6 flex items-center space-x-2 text-stone-500">
          <Link to="/" className="hover:text-[#C5A059]">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#C5A059]">Sarees</Link>
          <span>/</span>
          <Link to={`/shop/${product.category.slug}`} className="hover:text-[#C5A059]">
            {product.category.name}
          </Link>
          <span>/</span>
          <span className="font-semibold text-stone-800 truncate max-w-xs">{product.storyName}</span>
        </nav>

        {/* Top Split: Gallery & Purchase Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ======================================================== */}
          {/* LEFT: INTERACTIVE IMAGE GALLERY & ADVANCED ZOOM SYSTEM   */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Top Toolbar: Lighting Modes & Zoom Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md rounded-sm border border-[#C5A059]/40 shadow-sm">
              <div className="flex items-center gap-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#C5A059] mr-1 hidden sm:inline">
                  Atmosphere:
                </span>
                <button
                  onClick={() => setLightingTheme('daylight')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold transition-all ${
                    lightingTheme === 'daylight'
                      ? 'bg-amber-100 text-amber-950 shadow-sm ring-1 ring-amber-400'
                      : 'text-stone-600 hover:text-stone-950 bg-stone-100'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5 text-amber-600" />
                  <span>Daylight</span>
                </button>

                <button
                  onClick={() => setLightingTheme('candlelight')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold transition-all ${
                    lightingTheme === 'candlelight'
                      ? 'bg-amber-900 text-amber-100 shadow-sm ring-1 ring-amber-400'
                      : 'text-stone-600 hover:text-stone-950 bg-stone-100'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span>Candlelight</span>
                </button>

                <button
                  onClick={() => setLightingTheme('darkRoyal')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold transition-all ${
                    lightingTheme === 'darkRoyal'
                      ? 'bg-stone-950 text-[#E8D3A2] shadow-sm ring-1 ring-[#C5A059]'
                      : 'text-stone-600 hover:text-stone-950 bg-stone-100'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Royal Dark</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#670A1E] text-white hover:bg-[#7D0C25] rounded-sm text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#E8D3A2]" />
                  <span>Inspect Ultra-HD</span>
                </button>
              </div>
            </div>

            {/* Main Primary Image with Precision Magnifier */}
            <div
              className={`relative aspect-[3/4] rounded-sm overflow-hidden border-2 border-[#C5A059]/40 shadow-xl cursor-crosshair group select-none ${
                lightingTheme === 'darkRoyal' ? 'bg-black' : 'bg-stone-100'
              }`}
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
              onMouseMove={handleMouseMove}
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src={activeImage.url}
                alt={activeImage.altText || product.name}
                className={`w-full h-full object-cover object-center transition-all duration-500 ${getImageFilterStyle()}`}
                style={
                  isZooming
                    ? {
                        transformOrigin: `${zoomCoords.x}% ${zoomCoords.y}%`,
                        transform: `scale(${zoomFactor})`,
                      }
                    : undefined
                }
              />

              {product.isSilkMarkCertified && (
                <div className="absolute top-4 left-4 bg-[#670A1E]/95 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 uppercase tracking-wider flex items-center gap-1.5 shadow-lg border border-[#C5A059]/50 pointer-events-none">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Silk Mark Guaranteed</span>
                </div>
              )}

              <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md text-[#E8D3A2] text-[11px] font-cinzel font-semibold px-3 py-1 rounded shadow-md border border-white/20 pointer-events-none">
                {activeImage.label || `Angle 0${activeImageIndex + 1}`}
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img.id || idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-square rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                    activeImageIndex === idx
                      ? 'border-[#670A1E] ring-2 ring-[#C5A059] shadow-md scale-[1.02]'
                      : 'border-stone-300 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Saree Passport Preview Banner */}
            <div className="p-4 bg-[#FFFDF9] dark:bg-stone-900 rounded-sm border border-[#C5A059]/40 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#670A1E] text-[#E8D3A2] flex items-center justify-center border border-[#C5A059]/40">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-cinzel font-bold text-[#4A0614] dark:text-[#E8D3A2]">
                    UMADHVAYA SAREE PASSPORT: {product.passport.sareeId}
                  </div>
                  <p className="text-[11px] text-stone-500">
                    Handcrafted in {product.origin} over {product.passport.craftingTime}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsPassportModalOpen(true)}
                className="px-4 py-2 border border-[#C5A059] text-xs font-cinzel font-bold text-[#670A1E] hover:bg-[#670A1E] hover:text-white rounded-sm transition-colors"
              >
                View Certificate
              </button>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT: SPECIFICATION, STORY, & LUXURY ACTION PANEL       */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 space-y-6">
            
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                  {product.origin}
                </span>
                <span className="text-xs text-stone-400 font-mono">
                  PASSPORT: {product.passport.sareeId}
                </span>
              </div>

              {/* Story Name & Saree Name */}
              <h1 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#4A0614] dark:text-[#E8D3A2] leading-tight">
                {product.storyName}
              </h1>
              <p className="text-sm font-semibold text-stone-700 dark:text-stone-300 mt-1">
                {product.name}
              </p>

              {/* Poetic Story Headline */}
              <p className="font-royal text-lg text-[#670A1E] dark:text-[#C5A059] italic mt-2">
                “{product.poeticStory}”
              </p>

              {/* Ratings */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold">{product.ratingAverage}</span>
                <span className="text-xs text-stone-500">({product.reviewsCount} verified royal patrons)</span>
              </div>
            </div>

            {/* Pricing Box */}
            <div className="p-5 bg-gradient-to-r from-[#FAF7F2] to-[#FFFDF9] dark:from-stone-900 dark:to-stone-950 border border-[#C5A059]/40 rounded-sm shadow-sm">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-bold text-[#670A1E] dark:text-[#E8D3A2]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.mrp > product.price && (
                  <span className="text-base text-stone-400 line-through">
                    ₹{product.mrp.toLocaleString('en-IN')}
                  </span>
                )}
                {product.discountPercent > 0 && (
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    {Math.round(product.discountPercent)}% PRIVILEGE OFF
                  </span>
                )}
              </div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">
                Inclusive of 5% GST & All Taxes. Complimentary Handcrafted Cedar Box & Muslin Wrap included.
              </p>
            </div>

            {/* Quick Provenance Specs */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white dark:bg-stone-900 border border-[#E8D3A2]/70 rounded">
                <span className="text-stone-400 block text-[10px] uppercase font-bold tracking-wider">Silk</span>
                <span className="font-semibold text-stone-800 dark:text-stone-200">{product.fabric}</span>
              </div>
              <div className="p-3 bg-white dark:bg-stone-900 border border-[#E8D3A2]/70 rounded">
                <span className="text-stone-400 block text-[10px] uppercase font-bold tracking-wider">Weave & Zari</span>
                <span className="font-semibold text-stone-800 dark:text-stone-200">{product.workType}</span>
              </div>
              <div className="p-3 bg-white dark:bg-stone-900 border border-[#E8D3A2]/70 rounded">
                <span className="text-stone-400 block text-[10px] uppercase font-bold tracking-wider">Origin</span>
                <span className="font-semibold text-stone-800 dark:text-stone-200">{product.origin}</span>
              </div>
              <div className="p-3 bg-white dark:bg-stone-900 border border-[#E8D3A2]/70 rounded">
                <span className="text-stone-400 block text-[10px] uppercase font-bold tracking-wider">Crafting Time</span>
                <span className="font-semibold text-stone-800 dark:text-stone-200">{product.craftSpecs.weavingDays} Days on Pit Loom</span>
              </div>
            </div>

            {/* Blouse Configuration */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                Blouse Piece Configuration:
              </label>
              <select
                value={blouseChoice}
                onChange={(e) => setBlouseChoice(e.target.value)}
                className="w-full p-3 bg-white dark:bg-stone-900 border border-[#C5A059]/60 rounded text-xs font-medium text-stone-800 dark:text-stone-200 outline-none focus:ring-1 focus:ring-[#670A1E]"
              >
                <option value="Unstitched Matching Pure Silk Fabric (Included)">Unstitched Matching Pure Silk Fabric (Included)</option>
                <option value="Custom Royal Maggam Hand-Embroidery (+₹2,500)">Custom Royal Maggam Hand-Embroidery (+₹2,500)</option>
                <option value="Contemporary Sleeveless Silk Cut (+₹1,800)">Contemporary Sleeveless Silk Cut (+₹1,800)</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#E8D3A2]/60">
              <div className="flex gap-3">
                <button
                  onClick={() => addItem(product, quantity, blouseChoice)}
                  className="flex-1 py-4 bg-[#670A1E] hover:bg-[#7D0C25] text-white text-xs font-bold uppercase tracking-widest rounded shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
                  <span>Add To Royal Bag</span>
                </button>

                <button
                  onClick={handleBuyNow}
                  className="flex-1 py-4 bg-[#C5A059] hover:bg-[#D4AF37] text-stone-950 text-xs font-bold uppercase tracking-widest rounded shadow-gold-glow flex items-center justify-center gap-2 transition-all"
                >
                  <span>Instant Buy Now</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 rounded border transition-colors ${
                    isFavorited
                      ? 'border-[#991B1B] text-[#991B1B] bg-rose-50'
                      : 'border-stone-300 text-stone-700 hover:text-[#991B1B] bg-white dark:bg-stone-900'
                  }`}
                  title="Save to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current text-[#991B1B]' : ''}`} />
                </button>
              </div>

              {/* Private Video Drape Concierge Booking Button */}
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full py-3 bg-[#FAF7F2] dark:bg-stone-900 hover:bg-[#F3EDE2] text-[#670A1E] dark:text-[#E8D3A2] border border-[#C5A059] rounded text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
              >
                <Video className="w-4 h-4 text-[#C5A059]" />
                <span>Book 1-on-1 Private Video Drape</span>
              </button>
            </div>

            {/* Trust Assurances */}
            <div className="space-y-2.5 pt-4 border-t border-stone-200 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-400">
              <div className="flex items-center gap-2.5">
                <Package className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>Handcrafted Aromatic Cedar Wood Box, Unbleached Muslin Wrap & Signed Saree Passport.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>Complimentary insured express shipping across India (3–5 business days).</span>
              </div>
              <div className="flex items-center gap-2.5">
                <RotateCcw className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>7-Day Hassle-Free Royal Return & Exchange Privilege.</span>
              </div>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* LOWER SECTION 1: THE STORY OF THIS SAREE                 */}
        {/* ======================================================== */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#C5A059]/30">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center">
              <span className="text-xs font-bold tracking-[0.3em] text-[#C5A059] uppercase block mb-1">
                HERITAGE PROVENANCE
              </span>
              <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#4A0614] dark:text-[#FAF7F2]">
                THE STORY OF THIS SAREE
              </h2>
              <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-3" />
            </div>

            <p className="text-stone-700 dark:text-stone-300 text-base sm:text-lg leading-relaxed font-light text-center">
              {product.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-center">
              <div className="p-4 bg-white dark:bg-stone-900 border border-[#C5A059]/30 rounded">
                <span className="text-[10px] font-bold text-[#C5A059] uppercase block mb-1">WARP & WEFT DENSITY</span>
                <span className="font-royal text-lg font-bold text-stone-900 dark:text-white">{product.craftSpecs.warpWeft}</span>
              </div>
              <div className="p-4 bg-white dark:bg-stone-900 border border-[#C5A059]/30 rounded">
                <span className="text-[10px] font-bold text-[#C5A059] uppercase block mb-1">ZARI METALLURGY</span>
                <span className="font-royal text-lg font-bold text-stone-900 dark:text-white">{product.craftSpecs.zariComposition}</span>
              </div>
              <div className="p-4 bg-white dark:bg-stone-900 border border-[#C5A059]/30 rounded">
                <span className="text-[10px] font-bold text-[#C5A059] uppercase block mb-1">AUTHENTIC LOOM</span>
                <span className="font-royal text-lg font-bold text-stone-900 dark:text-white">{product.craftSpecs.loomType}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* LOWER SECTION 2: SEE THE WEAVE (MACRO PHOTO VIEWER)      */}
        {/* ======================================================== */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#C5A059]/30">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-[0.3em] text-[#C5A059] uppercase block mb-1">
              TACTILE TEXTILE REALISM
            </span>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#4A0614] dark:text-[#FAF7F2]">
              SEE THE WEAVE
            </h2>
            <p className="font-royal text-lg text-stone-600 dark:text-stone-300 italic mt-1">
              “Feel the density of hand-locked Kadwa knots and 24K gold zari through macro lenses.”
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white dark:bg-stone-900 p-6 rounded-sm border border-[#C5A059]/40 shadow-lg">
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-6">
              {[
                { id: 'zari', label: '24K Gold Zari Pallu', img: product.macroDetails.zariCloseUp },
                { id: 'weave', label: 'Silk Grain & Warp', img: product.macroDetails.weaveTexture },
                { id: 'pallu', label: 'Grand Pallu Motifs', img: product.macroDetails.palluMacro },
                { id: 'border', label: 'Temple Korvai Border', img: product.macroDetails.borderMacro },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setMacroTab(tab.id as any)}
                  className={`px-4 py-2 text-xs font-cinzel font-bold uppercase tracking-wider rounded-sm transition-all ${
                    macroTab === tab.id
                      ? 'bg-[#670A1E] text-white border border-[#670A1E]'
                      : 'bg-[#FAF7F2] text-stone-700 border border-stone-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded border border-[#C5A059]/30">
              <img
                src={
                  macroTab === 'zari'
                    ? product.macroDetails.zariCloseUp
                    : macroTab === 'weave'
                    ? product.macroDetails.weaveTexture
                    : macroTab === 'pallu'
                    ? product.macroDetails.palluMacro
                    : product.macroDetails.borderMacro
                }
                alt="Macro Weave"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-zoom-in"
              />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded text-white text-xs font-cinzel">
                Macro Magnification (4.0x Resolution)
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* LOWER SECTION 3: ERGONOMIC COMFORT PROFILE               */}
        {/* ======================================================== */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#C5A059]/30 max-w-5xl mx-auto">
          <ComfortProfileDisplay profile={product.comfortProfile} />
        </div>

        {/* ======================================================== */}
        {/* LOWER SECTION 4: ONE SAREE. TWO WORLDS. (DAY / NIGHT)    */}
        {/* ======================================================== */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#C5A059]/30">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-[0.3em] text-[#C5A059] uppercase block mb-1">
              VERSATILITY IN ACTION
            </span>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#4A0614] dark:text-[#FAF7F2]">
              ONE SAREE. TWO WORLDS.
            </h2>
            <p className="font-royal text-lg text-stone-600 dark:text-stone-300 italic mt-1">
              “How {product.storyName} transforms between morning sunlight and evening celebrations.”
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="inline-flex p-1 bg-stone-200 dark:bg-stone-800 rounded-full">
                <button
                  onClick={() => setActiveDayNight('day')}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeDayNight === 'day' ? 'bg-[#C5A059] text-stone-950 shadow-sm' : 'text-stone-600'
                  }`}
                >
                  ☀ Day Edit
                </button>
                <button
                  onClick={() => setActiveDayNight('night')}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeDayNight === 'night' ? 'bg-[#670A1E] text-white shadow-sm' : 'text-stone-600'
                  }`}
                >
                  🌙 Night Edit
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-sm border border-[#C5A059]/30 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 aspect-[3/4] overflow-hidden rounded">
                <img
                  src={currentDayNight.image}
                  alt={currentDayNight.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-7 space-y-4">
                <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-widest block">
                  {currentDayNight.lighting}
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-[#4A0614] dark:text-[#FAF7F2]">
                  {currentDayNight.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed font-light">
                  {currentDayNight.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-stone-200 dark:border-stone-800 text-xs">
                  <div><strong>Jewellery:</strong> {currentDayNight.jewellery}</div>
                  <div><strong>Drape Style:</strong> {currentDayNight.drapeStyle}</div>
                  <div><strong>Setting:</strong> {currentDayNight.setting}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* LOWER SECTION 5: RELATED ROYAL HEIRLOOMS                 */}
        {/* ======================================================== */}
        <div className="mt-20 pt-16 border-t border-[#C5A059]/30">
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-center text-[#4A0614] dark:text-[#FAF7F2] mb-10">
            COMPLEMENTARY ROYAL HEIRLOOMS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedSarees.map((rel) => (
              <Link
                key={rel.id}
                to={`/products/${rel.slug}`}
                className="group bg-white dark:bg-stone-900 p-4 rounded-sm border border-[#C5A059]/30 shadow hover:shadow-xl transition-all"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-3">
                  <img src={rel.images[0]?.url} alt={rel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="text-[10px] font-bold text-[#C5A059] uppercase">{rel.category.name}</div>
                <h4 className="font-cinzel text-base font-bold text-[#4A0614] dark:text-white mt-0.5">{rel.storyName}</h4>
                <div className="font-royal text-sm font-bold text-stone-900 dark:text-amber-200 mt-1">₹{rel.price.toLocaleString('en-IN')}</div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Saree Passport Certificate Modal */}
      {isPassportModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <SareePassportCard
            passport={product.passport}
            sareeName={product.name}
            onClose={() => setIsPassportModalOpen(false)}
          />
        </div>
      )}

      {/* Video Drape Modal */}
      <VideoDrapeModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        productName={product.name}
      />

      {/* Fullscreen Ultra-HD Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-2 text-white hover:text-[#C5A059]"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={activeImage.url}
            alt={activeImage.altText || product.name}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  );
};
