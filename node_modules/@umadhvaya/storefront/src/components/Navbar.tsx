import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState<string>('');
  
  const { totalItemsCount, openCart } = useCart();
  const { wishlistCount } = useWishlist();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll-spy to dynamically track the active section in view on the landing page
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sectionIds = [
      'collections-section',
      'her-world-experience',
      'craft-experience',
      'find-your-saree',
      'journal-section',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180; // Offset for header height
      
      // If at top of page, clear active section
      if (window.scrollY < 400) {
        setActiveSection('');
        return;
      }

      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  const navCategories = [
    { name: 'NEW ARRIVALS', path: '/shop?sort=newest', isAnchor: false },
    { name: 'SAREES', path: '/shop', isAnchor: false },
    { name: 'COLLECTIONS', anchorId: 'collections-section', path: '/#collections-section', isAnchor: true },
    { name: 'THE UMADHVAYA EDIT', anchorId: 'her-world-experience', path: '/#her-world-experience', isAnchor: true },
    { name: 'THE CRAFT', anchorId: 'craft-experience', path: '/#craft-experience', isAnchor: true },
    { name: 'OUR STORY', path: '/about', isAnchor: false },
    { name: 'JOURNAL', anchorId: 'journal-section', path: '/#journal-section', isAnchor: true },
    { name: 'FIND YOUR SAREE', anchorId: 'find-your-saree', path: '/#find-your-saree', isAnchor: true, isCta: true },
  ];

  const handleNavClick = (item: typeof navCategories[0], e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (item.isAnchor && item.anchorId) {
      if (location.pathname === '/') {
        const el = document.getElementById(item.anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(item.anchorId!);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      }
    } else {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isItemActive = (item: typeof navCategories[0]) => {
    if (location.pathname === '/') {
      if (item.anchorId) {
        return activeSection === item.anchorId;
      }
      return false;
    }
    if (!item.isAnchor && location.pathname === item.path) {
      return true;
    }
    if (item.path === '/#find-your-saree' && location.pathname === '/find-your-saree') {
      return true;
    }
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FFFDF9]/98 backdrop-blur-md border-b border-[#C5A059]/25 shadow-sm transition-all duration-300">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 sm:h-24">

            {/* 1. LEFT: Brand Logo */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-stone-700 hover:text-[#670A1E] lg:hidden"
                aria-label="Open Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <div className="flex-shrink-0">
                <Logo size="md" />
              </div>
            </div>

            {/* 2. CENTER: Clean Luxury Navigation Links with Dynamic Scroll-Spy */}
            <nav className="hidden lg:flex items-center space-x-3 xl:space-x-5 flex-nowrap">
              {navCategories.map((item) => {
                const active = isItemActive(item);
                
                if (item.isCta) {
                  return (
                    <a
                      key={item.name}
                      href={item.path}
                      onClick={(e) => handleNavClick(item, e)}
                      className={`text-[11px] xl:text-[11.5px] tracking-[0.14em] font-medium whitespace-nowrap transition-all px-3 py-1.5 rounded-sm border cursor-pointer ${
                        active
                          ? 'bg-[#670A1E] text-white border-[#670A1E] shadow-sm ring-1 ring-[#C5A059]'
                          : 'bg-[#FAF7F2] text-[#670A1E] border-[#C5A059]/50 hover:bg-[#670A1E] hover:text-white hover:border-[#670A1E]'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                }

                return (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={(e) => handleNavClick(item, e)}
                    className={`text-[11px] xl:text-[11.5px] tracking-[0.14em] font-medium whitespace-nowrap transition-all py-2 border-b-2 cursor-pointer ${
                      active
                        ? 'text-[#670A1E] border-[#C5A059] font-semibold'
                        : 'text-stone-700 hover:text-[#670A1E] border-transparent hover:border-[#C5A059]/60'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* 3. RIGHT: Search, Account, Wishlist, Cart */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* Search Icon */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-1.5 text-stone-700 hover:text-[#670A1E] transition-colors"
                title="Search Sarees"
              >
                <Search className="w-5 h-5 stroke-[1.75]" />
              </button>

              {/* User Account */}
              <Link
                to={user ? '/account' : '/login'}
                className="p-1.5 text-stone-700 hover:text-[#670A1E] transition-colors"
                title={user ? `Namaste, ${user.firstName}` : 'Sign In'}
              >
                <User className="w-5 h-5 stroke-[1.75]" />
              </Link>

              {/* Wishlist Icon with count badge */}
              <Link
                to="/account/wishlist"
                className="p-1.5 text-stone-700 hover:text-[#670A1E] relative transition-colors"
                title="Wishlist"
              >
                <Heart className="w-5 h-5 stroke-[1.75]" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#670A1E] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Shopping Bag Icon with count badge */}
              <button
                onClick={openCart}
                className="p-1.5 text-stone-700 hover:text-[#670A1E] relative transition-colors"
                title="View Bag"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#670A1E] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {totalItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Search Input */}
        {searchOpen && (
          <div className="border-t border-[#C5A059]/30 bg-white/98 px-6 py-4 animate-in slide-in-from-top-2 shadow-md">
            <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto flex items-center gap-3">
              <Search className="w-5 h-5 text-[#C5A059]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by silk (Kanchipuram, Banarasi, Chanderi), color, occasion or zari..."
                className="w-full bg-transparent border-b border-stone-300 focus:border-[#670A1E] py-2 text-sm outline-none font-sans text-stone-800"
                autoFocus
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#670A1E] text-white text-xs tracking-widest uppercase font-semibold rounded hover:bg-[#7B112B] transition-colors"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-stone-400 hover:text-stone-600"
              >
                <X className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden">
          <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-[#FAF7F2] p-6 shadow-2xl flex flex-col justify-between border-r border-[#C5A059]/30">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#C5A059]/30">
                <Logo size="sm" />
                <button onClick={() => setMobileMenuOpen(false)} className="text-stone-600 p-1">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-6 flex flex-col space-y-4">
                {navCategories.map((item) => {
                  const active = isItemActive(item);
                  return (
                    <a
                      key={item.name}
                      href={item.path}
                      onClick={(e) => handleNavClick(item, e)}
                      className={`text-xs font-cinzel font-bold tracking-widest uppercase py-1.5 transition-colors ${
                        active ? 'text-[#670A1E] font-extrabold' : 'text-stone-800 hover:text-[#670A1E]'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#C5A059]/30">
              <div className="text-[11px] text-stone-500 mb-1">Bridal Draping Concierge:</div>
              <a href="tel:+919876543210" className="block text-sm font-bold text-[#670A1E]">
                +91 98765 43210 (Toll Free)
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
