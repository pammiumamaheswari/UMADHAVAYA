import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import { SareeCard } from '../components/SareeCard';
import { User, Package, Heart, MapPin, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Account: React.FC = () => {
  const { user, logout } = useAuth();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'wishlist'>('profile');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="border-b border-[#C5A059]/20 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase">
            ROYAL PATRON PORTAL
          </span>
          <h1 className="font-royal text-3xl sm:text-4xl font-semibold text-stone-900 mt-1">
            Namaste, {user?.firstName || 'Valued Patron'}
          </h1>
        </div>

        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-2 text-xs font-semibold text-rose-700 hover:text-rose-900 px-4 py-2 border border-rose-200 rounded self-start sm:self-auto"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Navigation Tabs */}
        <aside className="space-y-2">
          <button
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded text-xs font-semibold tracking-wider uppercase transition-colors ${
              activeTab === 'profile'
                ? 'bg-[#5B0E2D] text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Profile Details</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded text-xs font-semibold tracking-wider uppercase transition-colors ${
              activeTab === 'orders'
                ? 'bg-[#5B0E2D] text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Order History</span>
          </button>

          <button
            onClick={() => setActiveTab('wishlist')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded text-xs font-semibold tracking-wider uppercase transition-colors ${
              activeTab === 'wishlist'
                ? 'bg-[#5B0E2D] text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>My Wishlist ({wishlist.length})</span>
          </button>
        </aside>

        {/* Content Panel */}
        <main className="md:col-span-3">
          {activeTab === 'profile' && (
            <div className="bg-white p-6 border border-stone-200/80 rounded-sm space-y-6">
              <h3 className="font-royal text-2xl font-bold text-stone-900 border-b border-stone-100 pb-3">
                Patron Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-stone-400 block mb-1">First Name</span>
                  <span className="font-semibold text-stone-800 text-sm">{user?.firstName || 'Maharani'}</span>
                </div>
                <div>
                  <span className="text-stone-400 block mb-1">Last Name</span>
                  <span className="font-semibold text-stone-800 text-sm">{user?.lastName || 'Patron'}</span>
                </div>
                <div>
                  <span className="text-stone-400 block mb-1">Registered Email</span>
                  <span className="font-semibold text-stone-800 text-sm">{user?.email || 'patron@umadhvaya.com'}</span>
                </div>
                <div>
                  <span className="text-stone-400 block mb-1">Membership Tier</span>
                  <span className="font-semibold text-[#C5A059] text-sm">Royal Privilege Club</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="bg-white p-6 border border-stone-200/80 rounded-sm space-y-4">
              <h3 className="font-royal text-2xl font-bold text-stone-900 border-b border-stone-100 pb-3">
                Order History
              </h3>
              <div className="border border-stone-200 rounded p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#FAF7F2]">
                <div>
                  <div className="text-xs font-bold text-[#5B0E2D] font-mono">ORDER #UMD-2026-1008</div>
                  <div className="text-xs text-stone-500 mt-0.5">Placed on 01 Oct 2026 • 1 Item</div>
                  <div className="text-xs font-semibold text-stone-800 mt-1">Aadrika Crimson Red Pure Kanchipuram Silk</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-stone-900">₹48,500</div>
                  <span className="inline-block text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded mt-1">
                    DELIVERED WITH SILK MARK
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div>
              {wishlist.length === 0 ? (
                <div className="text-center py-16 bg-white border border-stone-200 rounded p-6">
                  <Heart className="w-10 h-10 text-stone-300 mx-auto mb-2" />
                  <p className="text-xs text-stone-500">Your wishlist is empty.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlist.map((item) => (
                    <SareeCard key={item.id} product={item} />
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
