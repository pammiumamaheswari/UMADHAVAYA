import React, { useState } from 'react';
import { INITIAL_SAREES, SareeProduct } from '../data/mockData';
import { Sparkles, ArrowRight, RotateCcw, Check, Compass, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FindYourSareeSection: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [occasion, setOccasion] = useState<string>('');
  const [vibe, setVibe] = useState<string>('');
  const [priority, setPriority] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const occasions = ['WORK', 'WEDDING', 'FESTIVAL', 'DINNER', 'CELEBRATION', 'EVERYDAY', 'GIFT'];
  const vibes = ['MINIMAL', 'ELEGANT', 'BOLD', 'TRADITIONAL', 'CONTEMPORARY', 'GRACEFUL', 'POWERFUL', 'QUIET LUXURY', 'FESTIVE'];
  const priorities = ['COMFORT', 'LIGHTWEIGHT', 'HERITAGE', 'ZARI', 'VERSATILITY', 'STATEMENT LOOK'];

  const handleReset = () => {
    setStep(1);
    setOccasion('');
    setVibe('');
    setPriority('');
    setIsCompleted(false);
  };

  // Recommendation engine
  const getRecommendation = (): SareeProduct => {
    if (priority === 'LIGHTWEIGHT' || vibe === 'MINIMAL') {
      return INITIAL_SAREES.find((s) => s.storyName === 'THE GULMOHAR') || INITIAL_SAREES[2];
    }
    if (occasion === 'WORK' || vibe === 'QUIET LUXURY' || priority === 'VERSATILITY') {
      return INITIAL_SAREES.find((s) => s.storyName === 'THE CHANDRIKA GOLD') || INITIAL_SAREES[4];
    }
    if (occasion === 'WEDDING' || priority === 'ZARI' || vibe === 'BOLD') {
      return INITIAL_SAREES.find((s) => s.storyName === 'THE RAKTA KAMAL') || INITIAL_SAREES[0];
    }
    if (vibe === 'POWERFUL' || occasion === 'DINNER') {
      return INITIAL_SAREES.find((s) => s.storyName === 'THE KASHI NOOR') || INITIAL_SAREES[1];
    }
    if (occasion === 'FESTIVAL' || priority === 'HERITAGE') {
      return INITIAL_SAREES.find((s) => s.storyName === 'THE MAYURA RAJAT') || INITIAL_SAREES[3];
    }
    return INITIAL_SAREES.find((s) => s.storyName === 'THE NILAMBARI') || INITIAL_SAREES[5];
  };

  const matchedSaree = getRecommendation();

  return (
    <section id="find-your-saree" className="py-20 sm:py-28 bg-[#30030C] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-[11px] font-medium tracking-[0.3em] text-[#E8D3A2] uppercase block mb-2">
            Interactive Curation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF7F2] mb-3">
            Find Your Saree
          </h2>
          <p className="font-serif text-xl text-stone-300 italic mb-3 font-light">
            “Tell us about your world. We will reveal the heirloom that matches your spirit.”
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-3 mb-4 opacity-80" />
          <p className="text-xs text-stone-300 font-normal tracking-wide opacity-90">
            Answer 3 quick questions below to discover the curated handloom weave for you:
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-[#4A0614] p-6 sm:p-10 rounded-sm border border-[#C5A059]/40 shadow-2xl">
          
          {!isCompleted ? (
            <div className="space-y-8">
              
              {/* Stepper Progress Bar */}
              <div className="flex items-center justify-between border-b border-[#C5A059]/30 pb-4">
                <div>
                  <span className="text-xs font-cinzel font-bold text-[#E8D3A2] tracking-wider block">
                    STEP 0{step} OF 03
                  </span>
                  <span className="text-[11px] text-stone-400">
                    {step === 1 && 'Where will you wear it?'}
                    {step === 2 && 'What feels like you?'}
                    {step === 3 && 'What matters most to you?'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-8 h-1.5 rounded-full transition-all ${
                        s === step ? 'bg-[#C5A059]' : s < step ? 'bg-[#C5A059]/60' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step 1: Where will you wear it? */}
              {step === 1 && (
                <div className="space-y-5">
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#FAF7F2]">
                    1. WHERE WILL YOU WEAR IT?
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {occasions.map((occ) => (
                      <button
                        key={occ}
                        onClick={() => {
                          setOccasion(occ);
                          setStep(2);
                        }}
                        className={`p-3.5 rounded-sm border text-xs font-cinzel font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                          occasion === occ
                            ? 'bg-[#C5A059] text-stone-950 border-[#C5A059]'
                            : 'bg-[#30030C]/80 text-stone-200 border-[#C5A059]/30 hover:border-[#C5A059] hover:text-white'
                        }`}
                      >
                        {occ}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: What feels like you? */}
              {step === 2 && (
                <div className="space-y-5">
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#FAF7F2]">
                    2. WHAT FEELS LIKE YOU?
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {vibes.map((v) => (
                      <button
                        key={v}
                        onClick={() => {
                          setVibe(v);
                          setStep(3);
                        }}
                        className={`p-3.5 rounded-sm border text-xs font-cinzel font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                          vibe === v
                            ? 'bg-[#C5A059] text-stone-950 border-[#C5A059]'
                            : 'bg-[#30030C]/80 text-stone-200 border-[#C5A059]/30 hover:border-[#C5A059] hover:text-white'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: What matters most? */}
              {step === 3 && (
                <div className="space-y-5">
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#FAF7F2]">
                    3. WHAT MATTERS MOST TO YOU?
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {priorities.map((p) => (
                      <button
                        key={p}
                        onClick={() => {
                          setPriority(p);
                          setIsCompleted(true);
                        }}
                        className={`p-3.5 rounded-sm border text-xs font-cinzel font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                          priority === p
                            ? 'bg-[#C5A059] text-stone-950 border-[#C5A059]'
                            : 'bg-[#30030C]/80 text-stone-200 border-[#C5A059]/30 hover:border-[#C5A059] hover:text-white'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step Back Button */}
              {step > 1 && (
                <div className="pt-2">
                  <button
                    onClick={() => setStep((prev) => prev - 1)}
                    className="text-xs text-stone-400 hover:text-[#C5A059] uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    ← Back to Previous Question
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* Result Recommendation Card */
            <div className="space-y-6 text-left">
              <div className="flex items-center justify-between border-b border-[#C5A059]/30 pb-4">
                <div className="flex items-center gap-2 text-[#C5A059]">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-xs font-cinzel font-bold tracking-widest uppercase">
                    PERFECT SOUL MATCH FOUND
                  </span>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 text-xs text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restart Discovery</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 relative aspect-[3/4] overflow-hidden rounded-sm border border-[#C5A059]">
                  <img
                    src={matchedSaree.images[0]?.url}
                    alt={matchedSaree.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 p-2 bg-black/60 backdrop-blur-sm rounded text-[10px] text-white">
                    {matchedSaree.origin}
                  </div>
                </div>

                <div className="sm:col-span-7 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#C5A059] uppercase">
                      YOUR RECOMMENDED HEIRLOOM
                    </span>
                    <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FAF7F2] mt-0.5">
                      {matchedSaree.storyName}
                    </h3>
                    <p className="font-royal text-lg text-[#E8D3A2] italic mt-1">
                      “{matchedSaree.poeticStory}”
                    </p>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed font-light">
                    {matchedSaree.description}
                  </p>

                  <div className="p-3 bg-[#30030C] rounded border border-[#C5A059]/30 space-y-1 text-xs">
                    <div className="flex justify-between text-stone-400">
                      <span>Curated For:</span>
                      <span className="text-white font-semibold">{occasion} • {vibe}</span>
                    </div>
                    <div className="flex justify-between text-stone-400">
                      <span>Key Attribute:</span>
                      <span className="text-[#C5A059] font-semibold">{priority} Focused</span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase">Price</span>
                      <span className="font-royal text-xl font-bold text-white">
                        ₹{matchedSaree.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <Link
                      to={`/products/${matchedSaree.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] hover:bg-[#D4AF37] text-stone-950 text-xs font-bold tracking-widest uppercase rounded-sm transition-all cursor-pointer"
                    >
                      <span>View Saree Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
