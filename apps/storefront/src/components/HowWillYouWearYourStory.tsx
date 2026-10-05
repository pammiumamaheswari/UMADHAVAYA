import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  GraduationCap,
  Scale,
  Lightbulb,
  Landmark,
  Palette,
  Home,
  BookOpen,
  Sparkles,
  ArrowRight,
  Check,
  LayoutGrid,
  CreditCard,
} from 'lucide-react';

import corporateImg from '../assets/stories/corporate.jpg';
import teacherImg from '../assets/stories/teacher.jpg';
import lawyerImg from '../assets/stories/lawyer.jpg';
import entrepreneurImg from '../assets/stories/entrepreneur.jpg';
import iasImg from '../assets/stories/ias.jpg';
import creativeImg from '../assets/stories/creative.jpg';
import homemakerImg from '../assets/stories/homemaker.jpg';
import studentImg from '../assets/stories/student.jpg';

interface ProfessionStory {
  id: string;
  name: string;
  tagline: string;
  tabIcon: React.ReactNode;
  workdayTitle: string;
  description: string;
  bullets: string[];
  sareeStylingNote: string;
  crop: {
    x: number; // percentage from left
    y: number; // percentage from top
    width: number; // percentage width
    height: number; // percentage height
  };
  image: string;
}

export const HowWillYouWearYourStory: React.FC = () => {
  const SIGNATURE_SAREE_NAME = 'The Rakta Kamal — Pure Mulberry Silk & 24K Gold Zari';
  const SIGNATURE_SAREE_LINK = '/products/aadrika-crimson-red-pure-kanchipuram-silk-saree';

  const [viewMode, setViewMode] = useState<'card' | 'grid'>('card');
  const [selectedId, setSelectedId] = useState<string>('corporate');

  const professions: ProfessionStory[] = [
    {
      id: 'corporate',
      name: 'Corporate',
      tagline: 'Power dressing with tradition',
      tabIcon: <Briefcase className="w-4 h-4" />,
      workdayTitle: 'Sarees for the Corporate Boardroom',
      description:
        'Sharp, authoritative, and unapologetically poised. A tailored blazer over deep magenta silk merges executive presence with timeless cultural identity.',
      bullets: [
        'Blazer or tailored jacket',
        'Minimal jewellery',
        'Structured handbag',
        'Block heels / formal sandals',
      ],
      sareeStylingNote: 'Styled with sharp black tailored blazer · Minimalist drape · 340g all-day ease',
      crop: { x: 2.8, y: 12.6, width: 22.3, height: 27.2 },
      image: corporateImg,
    },
    {
      id: 'teacher',
      name: 'Teacher',
      tagline: 'Simple. Graceful. Inspiring.',
      tabIcon: <GraduationCap className="w-4 h-4" />,
      workdayTitle: 'Sarees for the Classroom & Lecture Hall',
      description:
        'Knowledge builds tomorrow. Pinned shoulder pleats and breathable natural mulberry silk allow fluid, tireless movement through hours of inspiring young minds.',
      bullets: [
        'Comfortable blouse (half/full sleeves)',
        'Simple earrings & watch',
        'Tote bag / sling bag',
        'Low heels / flats',
      ],
      sareeStylingNote: 'Styled for active mentoring · Pinned shoulder pleats · Breathable & zero-fatigue',
      crop: { x: 27.3, y: 12.6, width: 22.3, height: 27.2 },
      image: teacherImg,
    },
    {
      id: 'lawyer',
      name: 'Lawyer',
      tagline: 'Confident. Sharp. Professional.',
      tabIcon: <Scale className="w-4 h-4" />,
      workdayTitle: 'Sarees for the Courtroom & Chambers',
      description:
        'Command quiet constitutional authority. Crisp white collared shirt and advocate jacket draped over structured royal gold zari borders for high-stakes advocacy.',
      bullets: [
        'Black blazer with white shirt',
        'Minimal jewellery',
        'Leather bag / file folder',
        'Closed heels',
      ],
      sareeStylingNote: 'Styled for sovereign courtroom poise · Crisp structured fall · Crease-resistant silk',
      crop: { x: 51.7, y: 12.6, width: 22.3, height: 27.2 },
      image: lawyerImg,
    },
    {
      id: 'entrepreneur',
      name: 'Entrepreneur',
      tagline: 'Visionary. Bold. Balanced.',
      tabIcon: <Lightbulb className="w-4 h-4" />,
      workdayTitle: 'Sarees for Visionary Builders',
      description:
        'From pitch presentations to leadership town halls. Pair the saree with contemporary cuts and statement metallic accents to project fearless visionary leadership.',
      bullets: [
        'Sleeveless or stylish blouse',
        'Statement earrings / watch',
        'Laptop / tablet',
        'Block heels or wedges',
      ],
      sareeStylingNote: 'Styled for keynotes & summits · Radiant pure silk sheen · Unrestricted mobility',
      crop: { x: 76.1, y: 12.6, width: 22.3, height: 27.2 },
      image: entrepreneurImg,
    },
    {
      id: 'ias',
      name: 'IAS Officer',
      tagline: 'Quiet authority. Timeless dignity.',
      tabIcon: <Landmark className="w-4 h-4" />,
      workdayTitle: 'Sarees for Administration & Public Service',
      description:
        'Command quiet administrative respect and sovereign poise. Crisp pinned shoulder pleats, modest high-neck blouse, and an official leather folio reflect dedication to public service and constitutional leadership.',
      bullets: [
        'Classic high-neck / elbow-sleeve blouse',
        'Neat pinned pleats for day-long decorum',
        'Minimalist gold studs & analog leather watch',
        'Official leather folio / executive organiser',
      ],
      sareeStylingNote: 'Styled for secretariat sessions · Impeccable pinned pleats · Wrinkle-resistant pure silk',
      crop: { x: 2.8, y: 55.0, width: 22.3, height: 27.2 },
      image: iasImg,
    },
    {
      id: 'creative',
      name: 'Creative',
      tagline: 'Express. Create. Be You.',
      tabIcon: <Palette className="w-4 h-4" />,
      workdayTitle: 'Sarees for the Creative Studio',
      description:
        'Living art. Drape the pure silk as an intentional canvas paired with trendy halter blouses, rustic oxidised silver, and tactile accessories for effortless self-expression.',
      bullets: [
        'Trendy blouse (sleeveless/halter)',
        'Oxidised jewellery',
        'Camera / tote bag',
        'Juttis / comfortable flats',
      ],
      sareeStylingNote: 'Styled for studio flow · Asymmetrical drape · Oxidised silver pairing',
      crop: { x: 27.3, y: 55.0, width: 22.3, height: 27.2 },
      image: creativeImg,
    },
    {
      id: 'homemaker',
      name: 'Homemaker',
      tagline: 'The heart of every home.',
      tabIcon: <Home className="w-4 h-4" />,
      workdayTitle: 'Sarees for the Heart of Home',
      description:
        'The soul of tradition and family warmth. Flowers in hair and auspicious brass puja thali, moving gracefully from morning prayers to festive feasts.',
      bullets: [
        'Traditional blouse',
        'Simple gold jewellery',
        'Apron (optional)',
        'Comfortable sandals / flats',
      ],
      sareeStylingNote: 'Styled for family celebrations · Traditional gajra pairing · Fluid festive grace',
      crop: { x: 51.7, y: 55.0, width: 22.3, height: 27.2 },
      image: homemakerImg,
    },
    {
      id: 'student',
      name: 'Student',
      tagline: 'Youthful. Breezy. Fearless.',
      tabIcon: <BookOpen className="w-4 h-4" />,
      workdayTitle: 'Sarees for Campus, Debates & Milestones',
      description:
        'University farewells, youth debates, and first milestones. An effortless, breezy drape paired with a contemporary sleeveless boat-neck top, clean white sneakers, and a canvas tote for rooted grace with modern energy.',
      bullets: [
        'Sleeveless boat-neck / crop-top blouse',
        'Minimalist white sneakers & canvas tote',
        'Delicate silver studs & minimal watch',
        'Effortless lightweight pleats & free-flow pallu',
      ],
      sareeStylingNote: 'Styled for university milestones · Contemporary crop cut · Zero-fuss sneaker ease',
      crop: { x: 76.1, y: 55.0, width: 22.3, height: 27.2 },
      image: studentImg,
    },
  ];

  const current = professions.find((p) => p.id === selectedId) || professions[0];

  return (
    <section
      id="her-world-experience"
      className="pt-12 pb-8 sm:pt-16 sm:pb-10 bg-[#FAF7F2] relative border-b border-[#C5A059]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge */}
        <div className="flex items-center justify-between border-b border-[#C5A059]/30 pb-4 mb-8">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#C5A059] uppercase block">
              ONE SAREE · MANY ROLES
            </span>
            <span className="text-xs text-stone-500 font-light">
              Traditional Roots &bull; Modern You
            </span>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-[#FFFDF9] p-1 rounded border border-[#C5A059]/30">
            <button
              onClick={() => setViewMode('card')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded transition-all cursor-pointer ${
                viewMode === 'card'
                  ? 'bg-[#670A1E] text-white font-medium shadow-xs'
                  : 'text-stone-600 hover:text-[#670A1E]'
              }`}
              title="Interactive Card View"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Detailed View</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#670A1E] text-white font-medium shadow-xs'
                  : 'text-stone-600 hover:text-[#670A1E]'
              }`}
              title="All 8 Stories Grid"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">All 8 Roles</span>
            </button>
          </div>
        </div>

        {/* Major Signature Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#4A0614] mb-2">
            Same Saree. Different Stories.
          </h2>
          <p className="font-serif text-lg sm:text-xl text-stone-700 italic font-light">
            “Elegant. Versatile. You — in every role.”
          </p>

          {/* Lotus Glyph */}
          <div className="flex justify-center my-3 text-[#C5A059]">
            <svg className="w-5 h-5 fill-current opacity-80" viewBox="0 0 24 24">
              <path d="M12 3C12 3 9.5 7 9.5 10C9.5 11.5 10.5 12.8 12 13C13.5 12.8 14.5 11.5 14.5 10C14.5 7 12 3 12 3ZM5.5 9C5.5 9 6 12.5 8 14.5C8.8 13.5 9.5 12.2 9.5 10C9.5 8.5 8.5 7.2 7 7C6.2 7.5 5.7 8.2 5.5 9ZM18.5 9C18.3 8.2 17.8 7.5 17 7C15.5 7.2 14.5 8.5 14.5 10C14.5 12.2 15.2 13.5 16 14.5C18 12.5 18.5 9 18.5 9ZM12 14.5C9.5 14.5 4 15.8 4 18.3V20H20V18.3C20 15.8 14.5 14.5 12 14.5Z" />
            </svg>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 font-normal">
            See how one iconic pure silk saree adapts seamlessly to her schedule, profession, and personality:
          </p>
        </div>

        {/* 1. INTERACTIVE SINGLE CARD VIEW */}
        {viewMode === 'card' && (
          <div>
            {/* Minimal Horizontal Navigation Tabs */}
            <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-1 border-b border-stone-200/90 mb-8 no-scrollbar">
              {professions.map((p, idx) => {
                const isActive = p.id === selectedId;
                return (
                  <React.Fragment key={p.id}>
                    <button
                      onClick={() => setSelectedId(p.id)}
                      className={`flex items-center gap-2 py-3 px-3.5 sm:px-5 text-xs tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer -mb-px border-b-2 ${
                        isActive
                          ? 'text-[#670A1E] font-semibold border-[#670A1E]'
                          : 'text-stone-600 hover:text-[#670A1E] font-normal border-transparent'
                      }`}
                    >
                      <span className={isActive ? 'text-[#670A1E]' : 'text-stone-500'}>
                        {p.tabIcon}
                      </span>
                      <span>{p.name}</span>
                    </button>
                    {idx < professions.length - 1 && (
                      <span className="h-4 w-px bg-stone-300/70 hidden sm:inline-block my-auto" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Elevated Showcase Card */}
            <div className="bg-[#FFFDF9] rounded-md border border-stone-200/90 shadow-lg shadow-stone-200/40 overflow-hidden max-w-5xl mx-auto transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[480px]">
                
                {/* Left Photo Column */}
                <div className="md:col-span-5 relative min-h-[360px] md:min-h-full bg-stone-900 overflow-hidden">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Role Badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#E8D3A2] block mb-0.5">
                      {current.name}
                    </span>
                    <p className="font-serif text-base italic text-stone-100">
                      “{current.tagline}”
                    </p>
                  </div>
                </div>

                {/* Right Details Column */}
                <div className="md:col-span-7 p-6 sm:p-9 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Header Tag */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase">
                        STYLING FOR HER WORLD
                      </span>
                      <span className="h-px w-8 bg-[#C5A059]/70" />
                    </div>

                    {/* Role Title */}
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#4A0614] mb-1">
                      {current.workdayTitle}
                    </h3>

                    <p className="text-xs font-serif italic text-stone-600 mb-4">
                      {current.tagline}
                    </p>

                    {/* Narrative Description */}
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {current.description}
                    </p>

                    {/* Bullet Styling Elements (Matching Reference Design) */}
                    <div className="bg-[#FAF7F2] p-4 rounded-sm border border-[#C5A059]/25 mb-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-900 block mb-2.5 text-[#670A1E]">
                        KEY STYLING ELEMENTS:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {current.bullets.map((b, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-stone-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom One Saree Showcase */}
                  <div className="pt-5 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                    <div>
                      <span className="text-[9px] font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-0.5">
                        THE SIGNATURE SAREE · ONE SAREE. MANY WORLDS.
                      </span>
                      <h4 className="font-serif text-base sm:text-lg font-medium text-[#4A0614]">
                        {SIGNATURE_SAREE_NAME}
                      </h4>
                      <p className="text-[11px] text-stone-500 font-normal">
                        {current.sareeStylingNote}
                      </p>
                    </div>

                    <Link
                      to={SIGNATURE_SAREE_LINK}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#670A1E] hover:bg-[#4A0614] text-white text-xs font-medium tracking-wider rounded-sm transition-colors shadow-sm whitespace-nowrap cursor-pointer"
                    >
                      <span>Explore the look</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

        {/* 2. ALL 8 ROLES GALLERY GRID (Matching Full Reference Screenshot) */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
            {professions.map((role) => (
              <div
                key={role.id}
                className="bg-[#FFFDF9] rounded-sm border border-[#C5A059]/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                {/* Photo with Overlay */}
                <div className="relative h-64 overflow-hidden bg-stone-900">
                  <img
                    src={role.image}
                    alt={role.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#E8D3A2]">
                      {role.name}
                    </span>
                    <p className="text-xs italic text-stone-200 font-serif">
                      {role.tagline}
                    </p>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div className="mb-4">
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      {role.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#C5A059] font-bold">•</span>
                          <span className="text-[11px] leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-[#670A1E] uppercase">
                      One Saree. Her Way.
                    </span>
                    <button
                      onClick={() => {
                        setSelectedId(role.id);
                        setViewMode('card');
                      }}
                      className="text-[10px] font-bold text-[#C5A059] hover:text-[#670A1E] flex items-center gap-1 uppercase tracking-wider"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner Quote (Matching User Reference Image) */}
        <div className="flex items-center justify-center gap-4 mt-8 pt-5 border-t border-[#C5A059]/30 text-center">
          <span className="h-px w-12 sm:w-20 bg-[#C5A059]/40" />
          <span className="font-serif text-xs sm:text-sm tracking-[0.2em] text-[#670A1E] uppercase font-medium">
            The Same Saree — Fits Every Dream
          </span>
          <span className="h-px w-12 sm:w-20 bg-[#C5A059]/40" />
        </div>

      </div>
    </section>
  );
};
