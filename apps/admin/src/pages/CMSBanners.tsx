import React, { useState } from 'react';
import { Image, Plus, Check } from 'lucide-react';

interface Banner {
  id: string;
  badge: string;
  title: string;
  position: string;
  active: boolean;
}

const INITIAL_BANNERS: Banner[] = [
  { id: '1', badge: 'ROYAL HERITAGE WEAVES', title: 'UMADHVAYA — Woven for generations. Draped for you.', position: 'HERO_SLIDER', active: true },
  { id: '2', badge: 'SUMMER SOIRÉE', title: 'Ethereal Organza & Handloom Stories', position: 'HERO_SLIDER', active: true },
  { id: '3', badge: 'KANCHIPURAM & BANARASI', title: 'Pure Mulberry Silk & 24K Gold Zari', position: 'HERO_SLIDER', active: true },
];

export const CMSBanners: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>(INITIAL_BANNERS);

  const toggleActive = (id: string) => {
    setBanners((prev) =>
      prev.map((b) => (b.id === id ? { ...b, active: !b.active } : b))
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-4 rounded-lg">
        <div>
          <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
            Homepage Hero Banners & CMS Sections
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage real-time banners, festive promotions, and wedding trousseau announcements.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {banners.map((banner) => (
          <div key={banner.id} className="bg-slate-900 border border-slate-800 rounded-lg p-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold text-[#E8D3A2] uppercase tracking-wider bg-[#4A0B24] px-2 py-0.5 rounded">
                  {banner.badge}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${banner.active ? 'bg-emerald-950 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}>
                  {banner.active ? 'PUBLISHED' : 'DRAFT'}
                </span>
              </div>
              <h4 className="font-bold text-slate-100 text-sm mt-3">{banner.title}</h4>
              <p className="text-xs text-slate-500 mt-1 font-mono">{banner.position}</p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => toggleActive(banner.id)}
                className="text-xs font-semibold text-[#E8D3A2] hover:underline"
              >
                {banner.active ? 'Unpublish' : 'Publish Banner'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
