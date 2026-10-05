import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/mockData';
import { BookOpen, Clock, ArrowRight, X, Sparkles } from 'lucide-react';

export const UmadhvayaJournal: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<typeof JOURNAL_ARTICLES[0] | null>(null);

  return (
    <section id="journal-section" className="py-12 sm:py-16 bg-[#FAF7F2] border-b border-[#C5A059]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#C5A059] uppercase block mb-2">
            Editorial Chronicles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#4A0614] mb-3">
            The UMADHVAYA Journal
          </h2>
          <p className="font-serif text-base sm:text-lg text-stone-700 italic max-w-xl mx-auto font-light">
            “Essays on textile metallurgy, handloom anthropology, and the art of modern draping.”
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-3 opacity-80" />
        </div>

        {/* Journal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {JOURNAL_ARTICLES.map((art) => (
            <article
              key={art.id}
              className="bg-[#FFFDF9] rounded-sm border border-[#C5A059]/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveArticle(art)}
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-stone-900">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#670A1E]/90 text-[#E8D3A2] text-[10px] font-cinzel font-bold border border-[#C5A059]/30">
                    {art.category}
                  </div>

                  <div className="absolute bottom-3 left-3 text-white flex items-center gap-1.5 text-[11px] text-stone-300">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <h3 className="font-cinzel text-base font-bold text-[#4A0614] group-hover:text-[#670A1E] transition-colors line-clamp-2">
                    {art.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-light">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-stone-100 flex items-center justify-between text-xs text-[#670A1E] font-bold tracking-wider uppercase mt-2">
                <span>Read Essay</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C5A059]" />
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Full Editorial Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#FFFDF9] text-stone-900 rounded-sm border-2 border-[#C5A059] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative my-8">
            
            <button
              onClick={() => setActiveArticle(null)}
              className="sticky top-0 float-right p-1.5 rounded-full bg-[#FAF7F2] text-stone-700 hover:text-[#670A1E] border border-stone-300 z-30"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-cinzel font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
                  {activeArticle.category} • {activeArticle.readTime}
                </span>
                <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#4A0614] leading-tight">
                  {activeArticle.title}
                </h2>
                <p className="font-royal text-lg text-stone-600 italic mt-2">
                  {activeArticle.subtitle}
                </p>
              </div>

              <div className="h-64 sm:h-80 w-full overflow-hidden rounded-sm border border-[#C5A059]/30">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-stone max-w-none text-sm sm:text-base leading-relaxed text-stone-800 space-y-4 font-light whitespace-pre-line">
                {activeArticle.content}
              </div>

              <div className="pt-6 border-t border-[#C5A059]/30 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-cinzel">
                  UMADHVAYA JOURNAL ARCHIVE • {activeArticle.date}
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 bg-[#670A1E] text-white text-xs font-bold uppercase tracking-widest rounded-sm"
                >
                  Close Essay
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
