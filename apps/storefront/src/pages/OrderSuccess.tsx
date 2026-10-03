import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, PackageCheck, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const OrderSuccess: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24 text-center">
      <div className="w-16 h-16 bg-[#5B0E2D] text-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-6 shadow-gold-glow">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <span className="text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-2">
        ORDER CONFIRMED WITH ROYAL PRIVILEGE
      </span>

      <h1 className="font-royal text-3xl sm:text-5xl font-semibold text-stone-900 mb-4">
        Thank You for Your Patronage
      </h1>

      <div className="bg-white p-6 border border-[#E8D3A2] rounded-sm shadow-sm text-left my-8 space-y-4">
        <div className="flex justify-between items-center pb-3 border-b border-stone-100">
          <span className="text-xs text-stone-500">Royal Order Reference:</span>
          <span className="text-sm font-bold font-mono text-[#5B0E2D]">{id}</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-stone-600">
          <PackageCheck className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
          <span>
            Your heirloom saree is being carefully inspected by our master weavers and prepared in our signature royal cedar packaging.
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs text-stone-600">
          <ShieldCheck className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
          <span>
            Silk Mark certificate card & tax invoice attached inside parcel.
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/shop"
          className="px-8 py-3.5 bg-[#5B0E2D] text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-[#721121] transition-all shadow-md"
        >
          Explore More Sarees
        </Link>
        <Link
          to="/"
          className="px-8 py-3.5 border border-stone-300 text-stone-700 text-xs font-semibold uppercase tracking-widest rounded hover:border-[#5B0E2D] transition-all"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};
