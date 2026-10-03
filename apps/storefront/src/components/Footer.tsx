import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, Phone, Mail, MapPin, Instagram, Facebook, Award } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#12070B] text-[#FAF7F2] border-t-2 border-[#C5A059]/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-800 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-[#670A1E] rounded-full text-[#E8D3A2] border border-[#C5A059]/40">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-royal text-lg font-semibold text-[#FAF7F2]">100% Pure Silk Mark</h4>
              <p className="text-xs text-stone-400">Certified by Silk Mark Organisation of India</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-[#670A1E] rounded-full text-[#E8D3A2] border border-[#C5A059]/40">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-royal text-lg font-semibold text-[#FAF7F2]">Direct Weaver Guilds</h4>
              <p className="text-xs text-stone-400">Authentic GI tagged handlooms from origin</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-[#670A1E] rounded-full text-[#E8D3A2] border border-[#C5A059]/40">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-royal text-lg font-semibold text-[#FAF7F2]">Insured Express Delivery</h4>
              <p className="text-xs text-stone-400">Tamper-proof royal wooden box packaging</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-[#670A1E] rounded-full text-[#E8D3A2] border border-[#C5A059]/40">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-royal text-lg font-semibold text-[#FAF7F2]">Bridal Concierge</h4>
              <p className="text-xs text-stone-400">Private video drapes & bespoke styling</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-12 items-start">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Logo variant="dark" size="md" />
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm mt-3">
              Dedicated to the preservation and celebration of timeless Indian textile craft. Each UMADHVAYA saree is an heirloom woven with devotion, pure natural silk, and certified precious metal zari.
            </p>
            <div className="pt-2 flex items-center space-x-4 text-[#C5A059]">
              <a href="#" className="hover:text-white transition-colors p-2 bg-stone-900 rounded-full"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white transition-colors p-2 bg-stone-900 rounded-full"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-xs font-bold tracking-widest text-[#C5A059] uppercase mb-4">
              Royal Weaves
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li><Link to="/shop/kanchipuram-silk" className="hover:text-white transition-colors">Kanchipuram Silk</Link></li>
              <li><Link to="/shop/banarasi-katan-silk" className="hover:text-white transition-colors">Banarasi Katan</Link></li>
              <li><Link to="/shop/organza-floral" className="hover:text-white transition-colors">Organza & Floral</Link></li>
              <li><Link to="/shop/paithani-royal-weaves" className="hover:text-white transition-colors">Paithani Heritage</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">All Silk Sarees</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-cinzel text-xs font-bold tracking-widest text-[#C5A059] uppercase mb-4">
              Care & Service
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Weaver Story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Bridal Video Draping</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Saree Care Guide</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Authenticity & Returns</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Heritage</Link></li>
            </ul>
          </div>

          {/* Newsletter / Royal Club */}
          <div>
            <h4 className="font-cinzel text-xs font-bold tracking-widest text-[#C5A059] uppercase mb-4">
              The Royal Club
            </h4>
            <p className="text-xs text-stone-400 mb-3">
              Receive private invitations to limited heirloom loom-releases.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-stone-900 border border-stone-700 px-3 py-2.5 text-xs text-white placeholder-stone-500 rounded focus:border-[#C5A059] outline-none"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-[#C5A059] hover:bg-[#D4AF37] text-stone-950 font-bold text-xs uppercase tracking-wider rounded transition-colors shadow-sm"
              >
                Join Privilege
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} UMADHVAYA SAREES. All Rights Reserved. Pure Silk Mark Guaranteed.</p>
        </div>
      </div>
    </footer>
  );
};
