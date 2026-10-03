import React from 'react';
import { Sparkles, Heart, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SheIsUmadhvaya: React.FC = () => {
  const personas = [
    {
      title: 'SHE IS A TEACHER.',
      subtitle: 'Knowledge, Patience & Grace',
      quote: 'Her words nurture the thinkers of tomorrow.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'SHE IS A LAWYER.',
      subtitle: 'Clarity, Justice & Resolve',
      quote: 'Her presence brings unwavering constitutional stature.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'SHE IS A SOFTWARE PROFESSIONAL.',
      subtitle: 'Logic, Innovation & Vision',
      quote: 'She crafts algorithms by day and celebrates her roots by night.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'SHE IS A CIVIL SERVANT.',
      subtitle: 'Integrity, Grounding & Leadership',
      quote: 'Serving the nation with quiet, resolute devotion.',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'SHE IS AN ENTREPRENEUR.',
      subtitle: 'Courage, Enterprise & Autonomy',
      quote: 'Building enterprises on her own unapologetic terms.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'SHE IS THE HEART OF HOME.',
      subtitle: 'Nurture, Warmth & Celebration',
      quote: 'The soul of every tradition and family milestone.',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'SHE IS A MOTHER.',
      subtitle: 'Unconditional Strength & Wisdom',
      quote: 'Passing down generational stories with every fold.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'SHE IS HERSELF.',
      subtitle: 'Sovereign, Free & Authentic',
      quote: 'She does not ask for permission to belong. She simply is.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section id="manifesto-section" className="py-20 sm:py-28 bg-[#FFFDF9] border-b border-[#C5A059]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-medium tracking-[0.3em] text-[#C5A059] uppercase block mb-2">
            Editorial Campaign
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#4A0614] mb-4">
            She Is UMADHVAYA
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-stone-700 italic max-w-xl mx-auto font-light">
            “Different lives. Different professions. Different dreams. One shared thread of dignity.”
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-4 opacity-80" />
        </div>

        {/* Campaign Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {personas.map((p) => (
            <div
              key={p.title}
              className="group relative h-96 overflow-hidden rounded-sm border border-[#C5A059]/30 bg-stone-900 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A0614]/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-bold tracking-widest text-[#E8D3A2] uppercase block mb-1 font-cinzel">
                  {p.subtitle}
                </span>
                <h3 className="font-cinzel text-lg font-bold text-[#FAF7F2] leading-tight mb-2">
                  {p.title}
                </h3>
                <p className="font-royal text-xs italic text-stone-300 opacity-90">
                  “{p.quote}”
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Background Manifesto Card */}
        <div className="relative max-w-5xl mx-auto rounded-sm border-2 border-[#C5A059] overflow-hidden shadow-2xl p-8 sm:p-16 text-center text-white">
          
          {/* Background Editorial Handloom Visual */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=85&w=1600"
              alt="UMADHVAYA Silk Weave Heritage"
              className="w-full h-full object-cover object-center brightness-[0.28] contrast-[1.15] scale-105"
            />
            <div className="absolute inset-0 bg-[#4A0614]/75 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#30030C] via-transparent to-[#4A0614]/60" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-[11px] font-bold tracking-[0.35em] text-[#E8D3A2] uppercase block font-cinzel">
              THE MANIFESTO
            </span>

            <h3 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold text-[#FAF7F2] leading-tight">
              “SHE IS NOT DEFINED BY WHAT SHE WEARS. <br className="hidden sm:inline" />
              <span className="text-[#E8D3A2]">SHE DEFINES HOW SHE WEARS IT.”</span>
            </h3>

            <div className="w-16 h-0.5 bg-[#C5A059] mx-auto" />

            <p className="font-royal text-xl sm:text-2xl text-stone-200 font-light italic">
              UMADHVAYA — Her Saree. Her Story. Her Way.
            </p>

            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C5A059] hover:bg-[#D4AF37] text-stone-950 text-xs font-cinzel font-bold tracking-widest uppercase rounded-sm transition-all shadow-lg hover:shadow-gold-glow cursor-pointer"
              >
                <span>DISCOVER HER SILK ARCHIVE</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
