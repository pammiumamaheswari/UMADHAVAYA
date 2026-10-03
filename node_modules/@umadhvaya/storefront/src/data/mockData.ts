export interface ComfortProfile {
  weight: 'Light' | 'Medium' | 'Rich';
  drape: 'Easy' | 'Structured' | 'Fluid';
  movement: 'Effortless' | 'Graceful' | 'Structured';
  fabricFeel: 'Soft & Fluid' | 'Textured & Crisp' | 'Lustrous & Rich' | 'Featherlight Gossamer';
  breathabilityRating: number; // out of 5
  drapeEaseRating: number; // out of 5
  workdayComfortRating: number; // out of 5
  movementRating: number; // out of 5
  bestFor: string[];
  climate: 'All-Day Breathable' | 'Warm Climate Friendly' | 'Cool Evening Rich' | 'All-Weather Luxury';
}

export interface SareePassport {
  collection: string;
  sareeId: string;
  silkType: string;
  weaveType: string;
  zariType: string;
  craftedIn: string;
  craftingTime: string;
  technique: string;
  artisanGuild: string;
  authenticityVerified: boolean;
}

export interface DayNightEdit {
  day: {
    title: string;
    description: string;
    image: string;
    lighting: string;
    jewellery: string;
    drapeStyle: string;
    footwear: string;
    setting: string;
  };
  night: {
    title: string;
    description: string;
    image: string;
    lighting: string;
    jewellery: string;
    drapeStyle: string;
    footwear: string;
    setting: string;
  };
}

export interface HerWorldStyle {
  roleId: string;
  roleName: string;
  quote: string;
  stylingNote: string;
  image: string;
  context: string;
}

export interface SareeProduct {
  id: string;
  sku: string;
  name: string;
  storyName: string;
  poeticStory: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: {
    id: string;
    name: string;
    slug: string;
  };
  collection?: {
    id: string;
    name: string;
    slug: string;
  };
  price: number;
  mrp: number;
  discountPercent: number;
  taxRate: number;
  isFeatured: boolean;
  isBestSeller: boolean;
  isNewArrival: boolean;
  isSilkMarkCertified: boolean;
  isHandloomCertified: boolean;
  fabric: string;
  color: string;
  colorHex: string;
  pattern: string;
  occasion: string;
  workType: string;
  sareeLength: string;
  blouseIncluded: boolean;
  blouseLength: string;
  weightGrams: number;
  careInstructions: string;
  origin: string;
  availableQuantity: number;
  ratingAverage: number;
  reviewsCount: number;
  comfortProfile: ComfortProfile;
  passport: SareePassport;
  dayNightEdit: DayNightEdit;
  craftSpecs: {
    silkOrigin: string;
    loomType: string;
    warpWeft: string;
    zariComposition: string;
    weavingDays: number;
  };
  macroDetails: {
    zariCloseUp: string;
    weaveTexture: string;
    palluMacro: string;
    borderMacro: string;
  };
  images: Array<{
    id: string;
    url: string;
    altText?: string;
    isPrimary: boolean;
    isHover: boolean;
    label?: string;
  }>;
}

export const INITIAL_SAREES: SareeProduct[] = [
  {
    id: 'prod-001',
    sku: 'UMV-0248',
    storyName: 'THE RAKTA KAMAL',
    name: 'Aadrika Crimson Red Pure Kanchipuram Silk Saree',
    poeticStory: 'Where crimson silk meets the quiet brilliance of handwoven gold zari.',
    slug: 'aadrika-crimson-red-pure-kanchipuram-silk-saree',
    description:
      'The Aadrika represents the pinnacle of South Indian weaving heritage. Handcrafted in Kanchipuram over 38 days, it features a rich crimson red body interwoven with intricate floral jaal in 24-karat gold zari. The contrasting regal purple korvai border is adorned with traditional rudraksha and temple motifs, leading into an opulent grand pallu.',
    shortDescription:
      'Handwoven Crimson Red Pure Kanchipuram Silk Saree with heavy 24K pure gold zari korvai border.',
    category: {
      id: 'cat-1',
      name: 'Kanchipuram Silk',
      slug: 'kanchipuram-silk',
    },
    collection: {
      id: 'col-1',
      name: 'The Heirloom Collection',
      slug: 'the-heirloom-collection',
    },
    price: 48500,
    mrp: 58000,
    discountPercent: 16.38,
    taxRate: 5,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: true,
    isSilkMarkCertified: true,
    isHandloomCertified: true,
    fabric: 'Pure Mulberry Kanchipuram Silk (3-Ply Warp)',
    color: 'Crimson Red & Royal Purple',
    colorHex: '#800020',
    pattern: 'Korvai Temple Border & Gold Floral Jaal',
    occasion: 'Bridal, Muhurtham, Milestone Celebrations',
    workType: 'Pure 24K Gold Zari Korvai Handloom',
    sareeLength: '5.5 meters',
    blouseIncluded: true,
    blouseLength: '0.85 meters (Unstitched Heavy Brocade)',
    weightGrams: 880,
    careInstructions: 'Strictly dry clean only. Store wrapped in pure unbleached muslin fabric.',
    origin: 'Kanchipuram, Tamil Nadu',
    availableQuantity: 12,
    ratingAverage: 4.9,
    reviewsCount: 38,
    comfortProfile: {
      weight: 'Rich',
      drape: 'Structured',
      movement: 'Graceful',
      fabricFeel: 'Lustrous & Rich',
      breathabilityRating: 4.8,
      drapeEaseRating: 4.7,
      workdayComfortRating: 4.6,
      movementRating: 4.8,
      bestFor: ['Weddings', 'Milestone Speeches', 'Heirloom Celebrations', 'Ceremonial Dinners'],
      climate: 'All-Weather Luxury',
    },
    passport: {
      collection: 'The Heirloom Collection',
      sareeId: 'UMV-0248',
      silkType: 'Pure Mulberry Katan 3-Ply',
      weaveType: 'Interlocking Korvai Weave',
      zariType: '24-Karat Gold Electroplated Zari',
      craftedIn: 'Kanchipuram, Tamil Nadu',
      craftingTime: '38 Days on Traditional Pit Loom',
      technique: 'Three-Shuttle Petni Technique',
      artisanGuild: 'Sri Kamakshi Weavers Collective',
      authenticityVerified: true,
    },
    dayNightEdit: {
      day: {
        title: 'Morning Convocation & Keynote',
        description: 'Draped in neat pleats with a crisp matte blouse and minimal gold studs. Confident, stately, and effortless.',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200',
        lighting: 'Soft Natural Morning Light',
        jewellery: 'Heritage Pearl & Subtle Gold Studs',
        drapeStyle: 'Pinned Pleats, Ergonomic Shoulder Fall',
        footwear: 'Handcrafted Block-Heel Kolhapuris',
        setting: 'Executive Boardroom / University Hall',
      },
      night: {
        title: 'Gala Dinner & Reception',
        description: 'Flowing open pallu with heritage polki choker and deep crimson velvet accents for an unforgettable entrance.',
        image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1200',
        lighting: 'Warm Ambient Evening Candlelight',
        jewellery: 'Antique Temple Choker & Jhumkas',
        drapeStyle: 'Flowing Open Pallu on Forearm',
        footwear: 'Embroidered Silk Stilettos',
        setting: 'Royal Courtyard / Grand Ballroom',
      },
    },
    craftSpecs: {
      silkOrigin: 'Mulberry Silk, Bengaluru Sericulture Hub',
      loomType: 'Traditional Kanchipuram Pit Loom',
      warpWeft: '3-Ply Silk Warp x 3-Ply Weft',
      zariComposition: 'Silver Core with 24K Pure Gold Outer Foil',
      weavingDays: 38,
    },
    macroDetails: {
      zariCloseUp: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1400',
      weaveTexture: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1400',
      palluMacro: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1400',
      borderMacro: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=1400',
    },
    images: [
      {
        id: 'img-1-1',
        url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1400',
        altText: 'The Rakta Kamal Kanchipuram Silk Saree Drape',
        isPrimary: true,
        isHover: false,
        label: 'Full Drape View',
      },
      {
        id: 'img-1-2',
        url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1400',
        altText: 'Aadrika Saree 24K Gold Zari Pallu Detail',
        isPrimary: false,
        isHover: true,
        label: '24K Zari Pallu Macro',
      },
      {
        id: 'img-1-3',
        url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1400',
        altText: 'Temple Korvai Border Weave Close-up',
        isPrimary: false,
        isHover: false,
        label: 'Korvai Border Detail',
      },
      {
        id: 'img-1-4',
        url: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=1400',
        altText: 'Pure Silk Brocade Blouse Piece',
        isPrimary: false,
        isHover: false,
        label: 'Matching Blouse Piece',
      },
    ],
  },
  {
    id: 'prod-002',
    sku: 'UMV-0312',
    storyName: 'THE KASHI NOOR',
    name: 'Varanasi Noor Katan Silk Kadwa Banarasi Saree',
    poeticStory: 'Born on the sacred looms of the Ganga, bathed in emerald depth.',
    slug: 'varanasi-noor-katan-silk-kadwa-banarasi-saree',
    description:
      'An ethereal masterpiece from the holy ghats of Varanasi. Woven with pure Katan silk in a majestic emerald green hue, this saree is embellished with Kadwa handwoven gold and silver (Ganga-Jamuna) zari boota across the body with fine Meenakari accents.',
    shortDescription:
      'Emerald Green Katan Silk Banarasi Saree with Ganga-Jamuna Kadwa zari weave and Meenakari detailing.',
    category: {
      id: 'cat-2',
      name: 'Banarasi Katan Silk',
      slug: 'banarasi-katan-silk',
    },
    collection: {
      id: 'col-2',
      name: 'The Banarasi Edit',
      slug: 'the-banarasi-edit',
    },
    price: 39500,
    mrp: 46000,
    discountPercent: 14.13,
    taxRate: 5,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: true,
    isSilkMarkCertified: true,
    isHandloomCertified: true,
    fabric: 'Pure Katan Silk Handloom',
    color: 'Deep Emerald & Gold',
    colorHex: '#0B4F3F',
    pattern: 'Kadwa Jangla & Meenakari Floral Bootis',
    occasion: 'Receptions, Courtroom Dinners, Cultural Galas',
    workType: 'Ganga-Jamuna Zari Kadwa Handloom',
    sareeLength: '5.5 meters',
    blouseIncluded: true,
    blouseLength: '0.9 meters',
    weightGrams: 760,
    careInstructions: 'Dry clean only. Air occasionally in shade. Never spray perfume on zari.',
    origin: 'Varanasi, Uttar Pradesh',
    availableQuantity: 18,
    ratingAverage: 5.0,
    reviewsCount: 24,
    comfortProfile: {
      weight: 'Medium',
      drape: 'Fluid',
      movement: 'Effortless',
      fabricFeel: 'Soft & Fluid',
      breathabilityRating: 4.9,
      drapeEaseRating: 5.0,
      workdayComfortRating: 4.9,
      movementRating: 4.8,
      bestFor: ['All-Day Consultations', 'Festive Dinners', 'Diplomatic Receptions', 'Awards Ceremonies'],
      climate: 'All-Day Breathable',
    },
    passport: {
      collection: 'The Banarasi Edit',
      sareeId: 'UMV-0312',
      silkType: 'Pure Katan Mulberry Silk',
      weaveType: 'Kadwa Weaving (No Cut Threads)',
      zariType: 'Ganga-Jamuna Gold & Silver Zari',
      craftedIn: 'Madanpura, Varanasi',
      craftingTime: '42 Days of Hand Weaving',
      technique: 'Naksha-guided Kadwa Technique',
      artisanGuild: 'Bunkar Sahakari Samiti, Varanasi',
      authenticityVerified: true,
    },
    dayNightEdit: {
      day: {
        title: 'Morning Advisory & Office Hours',
        description: 'Paired with high-neck raw silk top, comfortable leather loafers, and a structured tote. Understated power.',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1200',
        lighting: 'Bright Diffused Skylight',
        jewellery: 'Silver Filigree Drop Earrings',
        drapeStyle: 'Structured Waist Pleats with Single Pinned Pallu',
        footwear: 'Tan Leather Loafers',
        setting: 'Chamber / Creative Studio',
      },
      night: {
        title: 'Soirée & Musical Evening',
        description: 'Swapped into a backless jewel-tone blouse with emerald uncut polki earrings and soft glowing makeup.',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200',
        lighting: 'Warm Amber Chandelier Glow',
        jewellery: 'Emerald-studded Jadau & Bangles',
        drapeStyle: 'Cascading Royal Pallu over Left Arm',
        footwear: 'Gold Mules with Hand-stitched Zari',
        setting: 'Heritage Lounge / Musical Concert',
      },
    },
    craftSpecs: {
      silkOrigin: 'Varanasi Certified Katan Yarn',
      loomType: 'Traditional Varanasi Drawloom',
      warpWeft: 'Double Warp Fine Katan',
      zariComposition: 'Tested Pure Silver with 24K Gold Coating',
      weavingDays: 42,
    },
    macroDetails: {
      zariCloseUp: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1400',
      weaveTexture: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1400',
      palluMacro: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1400',
      borderMacro: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=1400',
    },
    images: [
      {
        id: 'img-2-1',
        url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1400',
        altText: 'The Kashi Noor Emerald Banarasi Saree Drape',
        isPrimary: true,
        isHover: false,
        label: 'Front Full Drape',
      },
      {
        id: 'img-2-2',
        url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1400',
        altText: 'Kadwa Jangla Hand-Loom Weave',
        isPrimary: false,
        isHover: true,
        label: 'Kadwa Jangla Texture',
      },
      {
        id: 'img-2-3',
        url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1400',
        altText: 'Ganga Jamuna Zari Border Macro',
        isPrimary: false,
        isHover: false,
        label: 'Meenakari Border Detail',
      },
    ],
  },
  {
    id: 'prod-003',
    sku: 'UMV-0194',
    storyName: 'THE GULMOHAR',
    name: 'Gulmohar Hand-Painted Organza Silk Saree',
    poeticStory: 'Light as a morning breeze, blooming with quiet poetic grace.',
    slug: 'gulmohar-hand-painted-organza-silk-saree',
    description:
      'Light as a summer breeze and radiant as morning dawn. Crafted from pure spun silk organza in a soft blush rose hue, this saree features delicate hand-painted botanical blossoms surrounded by handcrafted cutwork scalloped borders finished with micro-pearls and zardozi.',
    shortDescription:
      'Blush Rose pure organza saree with hand-painted floral motifs and hand-cut zardozi scallops.',
    category: {
      id: 'cat-3',
      name: 'Organza & Floral',
      slug: 'organza-floral',
    },
    collection: {
      id: 'col-3',
      name: "The Weaver's Collection",
      slug: 'the-weavers-collection',
    },
    price: 24500,
    mrp: 29000,
    discountPercent: 15.52,
    taxRate: 5,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    isSilkMarkCertified: true,
    isHandloomCertified: false,
    fabric: 'Pure Silk Organza',
    color: 'Blush Rose & Pearl Cream',
    colorHex: '#C5A059',
    pattern: 'Botanical Flora & Scallop Cutwork',
    occasion: 'Day Weddings, Garden Brunches, Literary Festivals',
    workType: 'Hand Painting & Zardozi Embellishment',
    sareeLength: '5.5 meters',
    blouseIncluded: true,
    blouseLength: '0.8 meters',
    weightGrams: 390,
    careInstructions: 'Dry clean only. Do not iron directly on paint or pearls.',
    origin: 'Jaipur, Rajasthan',
    availableQuantity: 15,
    ratingAverage: 4.8,
    reviewsCount: 19,
    comfortProfile: {
      weight: 'Light',
      drape: 'Easy',
      movement: 'Effortless',
      fabricFeel: 'Featherlight Gossamer',
      breathabilityRating: 5.0,
      drapeEaseRating: 4.9,
      workdayComfortRating: 4.9,
      movementRating: 5.0,
      bestFor: ['Warm Day Events', 'Workplace Celebrations', 'Art Exhibitions', 'Travel & Luncheons'],
      climate: 'Warm Climate Friendly',
    },
    passport: {
      collection: "The Weaver's Collection",
      sareeId: 'UMV-0194',
      silkType: 'Spun Silk Organza',
      weaveType: 'Fine Open Plain Weave',
      zariType: 'Hand-finished Micro Zardozi Scallops',
      craftedIn: 'Jaipur, Rajasthan',
      craftingTime: '21 Days (Hand Artistry + Weave)',
      technique: 'Freehand Watercolor Botanical Painting',
      artisanGuild: 'Jaipur Heritage Atelier',
      authenticityVerified: true,
    },
    dayNightEdit: {
      day: {
        title: 'Daylight Brunch & Gallery Visit',
        description: 'Paired with linen sleeveless blouse, pearl tops, and flat leather juttis. Effortless breathing luxury.',
        image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=1200',
        lighting: 'Warm Afternoon Sun & Greenery',
        jewellery: 'Single Baroque Pearl Pendant',
        drapeStyle: 'Casual Soft Pleats with Natural Fall',
        footwear: 'Nude Leather Juttis',
        setting: 'Open Garden Café / Art Museum',
      },
      night: {
        title: 'Candlelight Dinner & Rooftop Gathering',
        description: 'Layered with a tailored cropped jacket, diamond solitaire accents, and sleek metallic sandals.',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200',
        lighting: 'Subtle Twilight & Candle Flames',
        jewellery: 'Rose Gold Choker & Solitaire Ring',
        drapeStyle: 'Cinched Waistline with Narrow Pleated Pallu',
        footwear: 'Rose Gold Strappy Heels',
        setting: 'Rooftop Bistro / Sunset Toast',
      },
    },
    craftSpecs: {
      silkOrigin: 'Organic Spun Mulberry Organza',
      loomType: 'Specialized High-Tension Handloom',
      warpWeft: 'Micro-filament Pure Silk',
      zariComposition: 'Gilded Zardozi Wire & Cultured Micro-Pearls',
      weavingDays: 21,
    },
    macroDetails: {
      zariCloseUp: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1400',
      weaveTexture: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=1400',
      palluMacro: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1400',
      borderMacro: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1400',
    },
    images: [
      {
        id: 'img-3-1',
        url: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=1400',
        altText: 'The Gulmohar Blush Pink Organza Saree Drape',
        isPrimary: true,
        isHover: false,
        label: 'Organza Sheer Drape',
      },
      {
        id: 'img-3-2',
        url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1400',
        altText: 'Hand Painted Botanical Flora Close Up',
        isPrimary: false,
        isHover: true,
        label: 'Botanical Artwork Macro',
      },
      {
        id: 'img-3-3',
        url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1400',
        altText: 'Scalloped Cutwork Zardozi Border',
        isPrimary: false,
        isHover: false,
        label: 'Zardozi Scallop Border',
      },
    ],
  },
  {
    id: 'prod-004',
    sku: 'UMV-0401',
    storyName: 'THE MAYURA RAJAT',
    name: 'Mayura Royal Paithani Pure Silk Saree',
    poeticStory: 'The timeless peacock dance woven in pure gold and vibrant resham tapestry.',
    slug: 'mayura-royal-paithani-pure-silk-saree',
    description:
      'The golden jewel of Maharashtra royalty. Featuring a brilliant Royal Blue silk body adorned with delicate coconut buttis and a breathtaking kaleidoscopic tapestry pallu woven with the iconic Mor-Bangadi peacock motifs in pure gold and resham.',
    shortDescription:
      'Royal Blue Paithani Silk Saree with classic Asavali border and Mor-Bangadi peacock tapestry pallu.',
    category: {
      id: 'cat-4',
      name: 'Paithani Weaves',
      slug: 'paithani-royal-weaves',
    },
    collection: {
      id: 'col-1',
      name: 'The Heirloom Collection',
      slug: 'the-heirloom-collection',
    },
    price: 42000,
    mrp: 49500,
    discountPercent: 15.15,
    taxRate: 5,
    isFeatured: true,
    isBestSeller: true,
    isNewArrival: false,
    isSilkMarkCertified: true,
    isHandloomCertified: true,
    fabric: 'Pure Mulberry Silk',
    color: 'Royal Midnight Blue & Sun Gold',
    colorHex: '#1E3A8A',
    pattern: 'Mor-Bangadi Peacock Motifs & Asavali Border',
    occasion: 'Festivals, Traditional Pojas, Muhurtham, Milestone Anniversaries',
    workType: 'Tapestry Weaving in Pure Zari',
    sareeLength: '5.5 meters',
    blouseIncluded: true,
    blouseLength: '0.85 meters',
    weightGrams: 820,
    careInstructions: 'Dry clean only. Store in pure cotton bag.',
    origin: 'Yeola, Maharashtra',
    availableQuantity: 8,
    ratingAverage: 5.0,
    reviewsCount: 31,
    comfortProfile: {
      weight: 'Medium',
      drape: 'Structured',
      movement: 'Graceful',
      fabricFeel: 'Lustrous & Rich',
      breathabilityRating: 4.7,
      drapeEaseRating: 4.8,
      workdayComfortRating: 4.7,
      movementRating: 4.8,
      bestFor: ['Festivals', 'Family Milestones', 'Keynote Speeches', 'Heirloom Gifting'],
      climate: 'All-Weather Luxury',
    },
    passport: {
      collection: 'The Heirloom Collection',
      sareeId: 'UMV-0401',
      silkType: 'Charkha Mulberry Pure Silk',
      weaveType: 'Interlocking Tapestry Weave',
      zariType: 'Real Silver Tested Gold Plated Zari',
      craftedIn: 'Yeola, Maharashtra',
      craftingTime: '35 Days on Traditional Loom',
      technique: 'Blind Back Tapestry Weaving',
      artisanGuild: 'Yeola Handloom Guild',
      authenticityVerified: true,
    },
    dayNightEdit: {
      day: {
        title: 'Morning Festival Puja & Family Feast',
        description: 'Crisp traditional drape, simple gold kada bangles, and fragrant fresh jasmine gajra in hair.',
        image: 'https://images.unsplash.com/photo-1610030470298-5007bf287c80?auto=format&fit=crop&q=80&w=1200',
        lighting: 'Crisp Morning Diya Light',
        jewellery: 'Traditional Kolhapuri Saaj & Pearl Nath',
        drapeStyle: 'Classic Front Pleats with Pinned Pallu',
        footwear: 'Gold Kolhapuri Flats',
        setting: 'Ancestral Courtyard / Festive Home',
      },
      night: {
        title: 'Evening Sangeet & Celebration',
        description: 'Statement kundan ear cuffs, sweeping open pallu, and bold regal berry lips.',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1200',
        lighting: 'Warm String Lights & Festivities',
        jewellery: 'Polki Statement Choker & Cocktails Rings',
        drapeStyle: 'Flowing Front Pallu with Fluid Movement',
        footwear: 'Embellished Velvet Block Heels',
        setting: 'Grand Banquet / Sangeet Floor',
      },
    },
    craftSpecs: {
      silkOrigin: 'Yeola Handspun Mulberry',
      loomType: 'Traditional Paithani Handloom',
      warpWeft: 'High Twist Silk Warp x Resham Weft',
      zariComposition: 'Pure Silver with 24K Gold Coating',
      weavingDays: 35,
    },
    macroDetails: {
      zariCloseUp: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1400',
      weaveTexture: 'https://images.unsplash.com/photo-1610030470298-5007bf287c80?auto=format&fit=crop&q=80&w=1400',
      palluMacro: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1400',
      borderMacro: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1400',
    },
    images: [
      {
        id: 'img-4-1',
        url: 'https://images.unsplash.com/photo-1610030470298-5007bf287c80?auto=format&fit=crop&q=80&w=1400',
        altText: 'The Mayura Rajat Paithani Silk Saree Drape',
        isPrimary: true,
        isHover: false,
        label: 'Royal Blue Drape',
      },
      {
        id: 'img-4-2',
        url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1400',
        altText: 'Mor Bangadi Peacock Tapestry Pallu Close-up',
        isPrimary: false,
        isHover: true,
        label: 'Peacock Pallu Tapestry',
      },
      {
        id: 'img-4-3',
        url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1400',
        altText: 'Gold Zari Asavali Border Macro',
        isPrimary: false,
        isHover: false,
        label: 'Asavali Zari Border',
      },
    ],
  },
  {
    id: 'prod-005',
    sku: 'UMV-0520',
    storyName: 'THE CHANDRIKA GOLD',
    name: 'Chandrika Ivory Gold Chanderi Tissue Silk Saree',
    poeticStory: 'Luminous gossamer reflecting the quiet warmth of starlight.',
    slug: 'chandrika-ivory-gold-chanderi-tissue-silk-saree',
    description:
      'Woven with luminous gossamer tissue silk and real silver zari, Chandrika is pure poetry. Handcrafted in the historic looms of Chanderi, Madhya Pradesh, it reflects ambient light with ethereal grace, detailed with delicate coin ashrafi motifs.',
    shortDescription:
      'Luminous Ivory & Gold Tissue Chanderi Saree with Ashrafi motifs and meenakari borders.',
    category: {
      id: 'cat-5',
      name: 'Handloom & Chanderi',
      slug: 'handloom-chanderi',
    },
    collection: {
      id: 'col-4',
      name: 'The Gold Collection',
      slug: 'the-gold-collection',
    },
    price: 31000,
    mrp: 36000,
    discountPercent: 13.88,
    taxRate: 5,
    isFeatured: true,
    isBestSeller: false,
    isNewArrival: true,
    isSilkMarkCertified: true,
    isHandloomCertified: true,
    fabric: 'Pure Chanderi Silk Tissue',
    color: 'Ivory Cream & Radiant Gold',
    colorHex: '#FFFDF9',
    pattern: 'Ashrafi Coin Booti & Silver Tissue Border',
    occasion: 'Intimate Weddings, Day Receptions, Executive Summits',
    workType: 'Tissue Weaving with Real Zari',
    sareeLength: '5.5 meters',
    blouseIncluded: true,
    blouseLength: '0.8 meters',
    weightGrams: 440,
    careInstructions: 'Dry clean only. Avoid steam iron on tissue zari.',
    origin: 'Chanderi, Madhya Pradesh',
    availableQuantity: 10,
    ratingAverage: 4.9,
    reviewsCount: 16,
    comfortProfile: {
      weight: 'Light',
      drape: 'Fluid',
      movement: 'Effortless',
      fabricFeel: 'Featherlight Gossamer',
      breathabilityRating: 5.0,
      drapeEaseRating: 5.0,
      workdayComfortRating: 5.0,
      movementRating: 5.0,
      bestFor: ['All-Day Conferences', 'Daytime Vows', 'Warm Climate Gatherings', 'Quiet Luxury'],
      climate: 'All-Day Breathable',
    },
    passport: {
      collection: 'The Gold Collection',
      sareeId: 'UMV-0520',
      silkType: 'Fine Chanderi Degummed Silk',
      weaveType: 'Gossamer Tissue Weave',
      zariType: 'Real Muted Gold Zari Thread',
      craftedIn: 'Chanderi, Madhya Pradesh',
      craftingTime: '26 Days of Loom Precision',
      technique: 'Ek-Naliya Fine Weft',
      artisanGuild: 'Chanderi Heritage Foundation',
      authenticityVerified: true,
    },
    dayNightEdit: {
      day: {
        title: 'Morning Keynote & Strategy Roundtable',
        description: 'Paired with a tailored cream shirt, minimalist gold watch, and clean lines. Quiet commanding luxury.',
        image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1200',
        lighting: 'Bright Crisp Morning Daylight',
        jewellery: 'Matte Gold Studs & Sleek Watch',
        drapeStyle: 'Sharp Architectural Pleats',
        footwear: 'Ivory Leather Kitten Heels',
        setting: 'Glasshouse Pavilion / Conference Hall',
      },
      night: {
        title: 'Evening Awards Ceremony & Dinner',
        description: 'Shifted to an emerald-cut choker, soft swept-back hair, and champagne glow under the night lights.',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200',
        lighting: 'Warm Ambient Architectural Lighting',
        jewellery: 'Diamond & Emerald Pendant Choker',
        drapeStyle: 'Draped over the shoulder with luminous shimmer',
        footwear: 'Metallic Gold Pumps',
        setting: 'Gala Hall / Private Dining Salon',
      },
    },
    craftSpecs: {
      silkOrigin: 'Chanderi Certified Fine Silk',
      loomType: 'Specialized Chanderi Throw-Shuttle Loom',
      warpWeft: 'Silk Warp with Metallic Tissue Weft',
      zariComposition: 'Muted Gold Thread with Silver Core',
      weavingDays: 26,
    },
    macroDetails: {
      zariCloseUp: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1400',
      weaveTexture: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1400',
      palluMacro: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1400',
      borderMacro: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1400',
    },
    images: [
      {
        id: 'img-5-1',
        url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1400',
        altText: 'The Chandrika Gold Chanderi Tissue Saree Drape',
        isPrimary: true,
        isHover: false,
        label: 'Ivory Tissue Drape',
      },
      {
        id: 'img-5-2',
        url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1400',
        altText: 'Silver Zari Ashrafi Coin Motif Macro',
        isPrimary: false,
        isHover: true,
        label: 'Silver Ashrafi Zari Macro',
      },
    ],
  },
  {
    id: 'prod-006',
    sku: 'UMV-0618',
    storyName: 'THE NILAMBARI',
    name: 'Nilambari Ghicha Tussar Silk Handloom Saree',
    poeticStory: 'Earthy, rustic dignity rooted in raw organic silk texture.',
    slug: 'nilambari-ghicha-tussar-silk-handloom-saree',
    description:
      'Celebrated for its rich organic texture and natural golden sheen. Handspun Ghicha Tussar silk woven with tribal Kantha stitch embroidery and antique copper zari borders.',
    shortDescription:
      'Organic Ghicha Tussar Silk Saree with rustic golden texture and hand-embroidered Kantha motifs.',
    category: {
      id: 'cat-6',
      name: 'Tussar & Raw Silk',
      slug: 'tussar-raw-silk',
    },
    collection: {
      id: 'col-3',
      name: "The Weaver's Collection",
      slug: 'the-weavers-collection',
    },
    price: 27500,
    mrp: 32000,
    discountPercent: 14.06,
    taxRate: 5,
    isFeatured: false,
    isBestSeller: true,
    isNewArrival: false,
    isSilkMarkCertified: true,
    isHandloomCertified: true,
    fabric: 'Pure Ghicha Tussar Silk',
    color: 'Mustard Amber & Antique Copper',
    colorHex: '#D97706',
    pattern: 'Tribal Kantha & Copper Zari Border',
    occasion: 'Art Summits, Heritage Walks, Book Launches, Everyday Power',
    workType: 'Handspun Ghicha with Hand Embroidery',
    sareeLength: '5.5 meters',
    blouseIncluded: true,
    blouseLength: '0.8 meters',
    weightGrams: 540,
    careInstructions: 'Dry clean only. Store flat in cloth wrapping.',
    origin: 'Bhagalpur, Bihar',
    availableQuantity: 14,
    ratingAverage: 4.8,
    reviewsCount: 22,
    comfortProfile: {
      weight: 'Medium',
      drape: 'Structured',
      movement: 'Effortless',
      fabricFeel: 'Textured & Crisp',
      breathabilityRating: 4.9,
      drapeEaseRating: 4.9,
      workdayComfortRating: 5.0,
      movementRating: 4.9,
      bestFor: ['University Lectures', 'Creative Workshops', 'Court Hearings', 'Everyday Luxury'],
      climate: 'All-Day Breathable',
    },
    passport: {
      collection: "The Weaver's Collection",
      sareeId: 'UMV-0618',
      silkType: 'Handspun Ghicha Wild Tussar',
      weaveType: 'Textured Handloom Weave',
      zariType: 'Antique Copper Zari Edge',
      craftedIn: 'Bhagalpur, Bihar',
      craftingTime: '24 Days of Hand Reeling and Weave',
      technique: 'Reeled Ghicha Handloom',
      artisanGuild: 'Bhagalpur Tussar Weavers',
      authenticityVerified: true,
    },
    dayNightEdit: {
      day: {
        title: 'Morning Class & Studio Mentoring',
        description: 'Styled with a high-neck cotton top, spectacles, and earthy terracotta studs. Authentic, articulate, dignified.',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1200',
        lighting: 'Warm Classroom Morning Light',
        jewellery: 'Raw Terracotta & Silver Studs',
        drapeStyle: 'Neat Compact Pleats for Free Movement',
        footwear: 'Earthy Leather Kolhapuri Flats',
        setting: 'University Seminar Room / Design Studio',
      },
      night: {
        title: 'Evening Book Reading & Jazz Club',
        description: 'Paired with antique tribal silver collar, relaxed loose drape, and artisanal leather boots.',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1200',
        lighting: 'Warm Jazz Club Lamp Light',
        jewellery: 'Oxidised Tribal Silver Choker',
        drapeStyle: 'Draped effortlessly with diagonal pallu',
        footwear: 'Handcrafted Ankle Boots',
        setting: 'Literary Café / Evening Salon',
      },
    },
    craftSpecs: {
      silkOrigin: 'Wild Tussar Cocoons, Bihar Forests',
      loomType: 'Traditional Bhagalpur Frame Loom',
      warpWeft: 'Handspun Ghicha Yarn',
      zariComposition: 'Copper-Tinged Antique Thread',
      weavingDays: 24,
    },
    macroDetails: {
      zariCloseUp: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1400',
      weaveTexture: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1400',
      palluMacro: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1400',
      borderMacro: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1400',
    },
    images: [
      {
        id: 'img-6-1',
        url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1400',
        altText: 'The Nilambari Ghicha Tussar Saree Drape',
        isPrimary: true,
        isHover: false,
        label: 'Tussar Silk Drape',
      },
      {
        id: 'img-6-2',
        url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1400',
        altText: 'Ghicha Tussar Raw Texture Macro',
        isPrimary: false,
        isHover: true,
        label: 'Raw Silk Texture Macro',
      },
    ],
  },
];

export const CATEGORIES_LIST = [
  { id: 'cat-1', name: 'Kanchipuram Silk', slug: 'kanchipuram-silk', count: 18, image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600' },
  { id: 'cat-2', name: 'Banarasi Katan Silk', slug: 'banarasi-katan-silk', count: 14, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600' },
  { id: 'cat-3', name: 'Organza & Floral', slug: 'organza-floral', count: 12, image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=600' },
  { id: 'cat-4', name: 'Paithani Weaves', slug: 'paithani-royal-weaves', count: 9, image: 'https://images.unsplash.com/photo-1610030470298-5007bf287c80?auto=format&fit=crop&q=80&w=600' },
  { id: 'cat-5', name: 'Handloom & Chanderi', slug: 'handloom-chanderi', count: 16, image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600' },
  { id: 'cat-6', name: 'Tussar & Raw Silk', slug: 'tussar-raw-silk', count: 8, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600' },
];

export const ROYAL_COLLECTIONS = [
  {
    id: 'col-1',
    name: 'THE HEIRLOOM COLLECTION',
    tagline: 'Woven to be passed down through four generations.',
    slug: 'the-heirloom-collection',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000',
    count: '16 Masterpieces',
  },
  {
    id: 'col-2',
    name: 'THE WEDDING EDIT',
    tagline: 'Opulent crimson, emerald, and pure 24K gold zari for timeless vows.',
    slug: 'the-wedding-edit',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1000',
    count: '22 Masterpieces',
  },
  {
    id: 'col-3',
    name: 'THE GOLD COLLECTION',
    tagline: 'Luminous gossamer tissue and real precious metal brocades.',
    slug: 'the-gold-collection',
    image: 'https://images.unsplash.com/photo-1610030470298-5007bf287c80?auto=format&fit=crop&q=80&w=1000',
    count: '14 Masterpieces',
  },
  {
    id: 'col-4',
    name: "THE WEAVER'S COLLECTION",
    tagline: 'Direct from the private master looms of Varanasi, Yeola & Chanderi.',
    slug: 'the-weavers-collection',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1000',
    count: '19 Masterpieces',
  },
  {
    id: 'col-5',
    name: 'THE KATAN EDIT',
    tagline: 'Pure double-twisted mulberry silk with immaculate Kadwa detailing.',
    slug: 'the-katan-edit',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=1000',
    count: '12 Masterpieces',
  },
  {
    id: 'col-6',
    name: 'THE BANARASI EDIT',
    tagline: 'Intricate Ganga-Jamuna zari motifs inspired by Mughal geometry and nature.',
    slug: 'the-banarasi-edit',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1000',
    count: '18 Masterpieces',
  },
];

export interface HerWorldIdentity {
  id: string;
  name: string;
  subTitle: string;
  quote: string;
  philosophy: string;
  image: string;
  stylingFeatures: string[];
  recommendedSaree: string;
  accentQuote: string;
}

export const HER_WORLDS_DATA: HerWorldIdentity[] = [
  {
    id: 'teacher',
    name: 'TEACHER',
    subTitle: 'The Luminary & Mentor',
    quote: 'Knowledge carries grace. My drape must move freely as I teach, listen, and inspire.',
    philosophy: 'A teacher shapes generations with clarity and patience. She needs a drape that breathes through eight hours of active engagement while commanding natural authority.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900',
    stylingFeatures: ['Ergonomic pinned shoulder pleats', 'Breathable organic silk weave', 'Minimalist earthen jewelry', 'All-day effortless posture'],
    recommendedSaree: 'THE NILAMBARI',
    accentQuote: 'Her wisdom weaves the future.',
  },
  {
    id: 'lawyer',
    name: 'LAWYER',
    subTitle: 'The Voice of Justice',
    quote: 'In the courtroom, precision is power. My saree reflects discipline, resolve, and heritage.',
    philosophy: 'Advocacy demands sharp poise and unwavering focus. The saree brings timeless Indian stature to the bar, seamlessly pairing with formal court attire.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=900',
    stylingFeatures: ['Crisp structured pleating', 'Subtle dark emerald or charcoal tones', 'High-neck tailored collar', 'Functional pocket-friendly fall'],
    recommendedSaree: 'THE KASHI NOOR',
    accentQuote: 'Her words command respect.',
  },
  {
    id: 'software-professional',
    name: 'SOFTWARE PROFESSIONAL',
    subTitle: 'The Modern Innovator',
    quote: 'From global sprint reviews to evening leadership dinners, my saree bridges technology and soul.',
    philosophy: 'Building architectures for tomorrow while celebrating roots of yesterday. Lightweight tissue and organza drape effortlessly during long hackathons or transatlantic summits.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=900',
    stylingFeatures: ['Featherlight Chanderi tissue', 'Modern minimalist watch pairing', 'Effortless fluid movement', 'Crease-resistant pure silk'],
    recommendedSaree: 'THE CHANDRIKA GOLD',
    accentQuote: 'Her logic code meets silk artistry.',
  },
  {
    id: 'civil-servant',
    name: 'CIVIL SERVANT',
    subTitle: 'The Pillar of Governance',
    quote: 'Representing the nation requires quiet dignity, grounding, and absolute authenticity.',
    philosophy: 'In administration and diplomacy, she commands authority through composure. Certified handlooms with GI tags represent the very soil and crafts of India.',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=900',
    stylingFeatures: ['Authentic Silk Mark handloom', 'Restrained temple korvai borders', 'Stately posture', 'Formal boardroom elegance'],
    recommendedSaree: 'THE RAKTA KAMAL',
    accentQuote: 'Dignity rooted in public service.',
  },
  {
    id: 'doctor',
    name: 'DOCTOR',
    subTitle: 'The Healer',
    quote: 'Comfort is not a luxury when lives depend on your calm. My drape brings warmth and reassurance.',
    philosophy: 'A physician brings healing hands and compassionate strength. Soft natural mulberry silk stays comfortable through rounds, patient consultations, and medical conferences.',
    image: 'https://images.unsplash.com/photo-1594824813587-f823126f588c?auto=format&fit=crop&q=80&w=900',
    stylingFeatures: ['Soft hypoallergenic mulberry silk', 'Clean compact pallu wrap', 'Gentle soothing colorways', 'Unrestricted arm mobility'],
    recommendedSaree: 'THE GULMOHAR',
    accentQuote: 'Strength softened by empathy.',
  },
  {
    id: 'entrepreneur',
    name: 'ENTREPRENEUR',
    subTitle: 'The Visionary Builder',
    quote: 'I do not dress to blend in. I dress to create new paradigms on my own terms.',
    philosophy: 'Pitching to investors, leading team town halls, and closing partnerships. She wears her heritage as an authentic signature of visionary leadership.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=900',
    stylingFeatures: ['Bold Kadwa zari motifs', 'Contemporary structured blouses', 'Dynamic day-to-night versatility', 'Unforgettable presence'],
    recommendedSaree: 'THE MAYURA RAJAT',
    accentQuote: 'She writes her own future.',
  },
  {
    id: 'creative-professional',
    name: 'CREATIVE PROFESSIONAL',
    subTitle: 'The Storyteller & Artist',
    quote: 'Textiles are living poetry. Every drape is an intentional brushstroke of individuality.',
    philosophy: 'For the architect, curator, designer, and writer, the saree is a wearable canvas celebrating pure geometry, color resonance, and tactile craft.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=900',
    stylingFeatures: ['Artisanal Ghicha raw textures', 'Architectural blouse cuts', 'Experimental asymmetrical drapes', 'Heritage silver accessories'],
    recommendedSaree: 'THE NILAMBARI',
    accentQuote: 'Her canvas is her life.',
  },
  {
    id: 'homemaker',
    name: 'THE HEART OF HOME',
    subTitle: 'The Anchor & Curator of Memories',
    quote: 'A home is not built by walls, but by warmth, celebration, and love. I wear my joy freely.',
    philosophy: 'Homemaking is an art of nurture, coordination, and grace. From welcoming guests to creating joyful family milestones, she moves with effortless rhythm.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=900',
    stylingFeatures: ['Comfortable lightweight pure silk', 'Easy pleating that holds all day', 'Rich festive borders for gatherings', 'Effortless grace in movement'],
    recommendedSaree: 'THE MAYURA RAJAT',
    accentQuote: 'The soul of every celebration.',
  },
  {
    id: 'student',
    name: 'STUDENT',
    subTitle: 'The Emerging Voice',
    quote: 'Discovering my heritage on my own terms. Modern, light, and authentically me.',
    philosophy: 'For university farewells, debates, and first milestones. A saree that is light to drape, youthful, and vibrant.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=900',
    stylingFeatures: ['Featherlight organza drape', 'Fun contemporary blouse pairing', 'Casual sneaker or sandal styling', 'Zero-fuss easy wrap'],
    recommendedSaree: 'THE GULMOHAR',
    accentQuote: 'Fresh roots, bold dreams.',
  },
  {
    id: 'mother',
    name: 'MOTHER',
    subTitle: 'The Nurturing Strength',
    quote: 'Passing down values, warmth, and stories. My saree holds memories of every milestone.',
    philosophy: 'From balancing life to standing proud at her children’s achievements, her saree embodies resilience, unconditional love, and timeless dignity.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=900',
    stylingFeatures: ['Ultra-soft pure katan silk', 'Generous comfortable drape', 'Heirloom handloom authenticity', 'Enduring beauty'],
    recommendedSaree: 'THE RAKTA KAMAL',
    accentQuote: 'Her warmth is eternal.',
  },
  {
    id: 'bride',
    name: 'BRIDE',
    subTitle: 'The Sovereign Queen of Her Day',
    quote: 'Not just stepping into a new chapter, but celebrating the woman I have grown to be.',
    philosophy: 'A bride is sovereign. Her wedding saree is not merely attire, but an immortal heirloom woven with 24-karat gold zari, preserving the sacred sanctity of her vows.',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=900',
    stylingFeatures: ['Grand 24K pure gold zari pallu', 'Rich three-ply mulberry silk', 'Bridal korvai temple craftsmanship', 'Heirloom certificate included'],
    recommendedSaree: 'THE RAKTA KAMAL',
    accentQuote: 'Her sacred vows, woven in gold.',
  },
  {
    id: 'myself',
    name: 'MYSELF',
    subTitle: 'The Unapologetic Individual',
    quote: 'I do not wear a saree to conform. I wear it because it belongs in my world.',
    philosophy: 'No labels, no rigid boundaries. She wears her saree because it gives her freedom, confidence, and immense joy.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=900',
    stylingFeatures: ['Versatile fluid drape', 'Personalized jewellery styling', 'Comfort-first luxury silk', 'Uniquely her own'],
    recommendedSaree: 'THE CHANDRIKA GOLD',
    accentQuote: 'Her saree. Her story. Her way.',
  },
];

export const HER_DAY_TIMELINE = [
  {
    time: '8:30 AM',
    title: 'THE MORNING WORKDAY',
    context: 'Briefing & Strategic Priorities',
    description: 'Neatly pleated and pinned at the shoulder. Paired with a comfortable cotton-silk blouse and minimalist gold studs for unrestricted focus.',
    sareeLook: 'Structured & Ergonomic',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900',
  },
  {
    time: '1:00 PM',
    title: 'THE KEYNOTE & CLIENT LUNCH',
    context: 'High-Stakes Presentation & Discourse',
    description: 'The natural sheen of pure silk catches the ambient light of the boardroom. Cool, breathable fabric maintains impeccable comfort through extended discussions.',
    sareeLook: 'Commanding & Breathable',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=900',
  },
  {
    time: '5:30 PM',
    title: 'TRAVEL & ARTISANAL COFFEE',
    context: 'Transition, Movement & Informal Catch-up',
    description: 'Loosened the pallu for an effortless diagonal drape. Paired with comfortable leather flats as she walks through the historic art district.',
    sareeLook: 'Relaxed & Fluid',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=900',
  },
  {
    time: '7:30 PM',
    title: 'FAMILY GATHERING & RITUAL',
    context: 'Laughter, Welcome & Warmth',
    description: 'Added a delicate heirloom gold chain and fresh jasmine to the hair. The saree feels soft against the skin during warm embraces.',
    sareeLook: 'Warm & Festive',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=900',
  },
  {
    time: '9:00 PM',
    title: 'THE CELEBRATION DINNER',
    context: 'Candlelight, Music & Unwinding',
    description: 'Swapped into jewel-tone lipstick and open flowing pallu. The 24K gold zari shimmers softly under evening chandeliers.',
    sareeLook: 'Radiant Evening Luxury',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=900',
  },
];

export const CRAFT_STORY_STEPS = [
  {
    step: '01',
    title: 'THE SILK',
    subtitle: 'Pure Mulberry Sericulture',
    description: 'Only the highest grade 3-ply natural mulberry silk yarn is selected, spun with meticulous high-twist density for supple drape and lifelong resilience.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=900',
  },
  {
    step: '02',
    title: 'THE DESIGN',
    subtitle: 'Naksha & Sacred Geometry',
    description: 'Master sketch artists spend weeks hand-drawing sacred motifs—the rudraksha, kamal, and mor-bangadi—transcribing ancient spiritual symbolism into punch-card graphs.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=900',
  },
  {
    step: '03',
    title: 'THE LOOM',
    subtitle: 'The Rhythmic Pit Loom',
    description: 'Erected on solid seasoned teak wood, our traditional pit looms maintain natural earth humidity, keeping fine silk threads supple throughout weeks of weaving.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=900',
  },
  {
    step: '04',
    title: 'THE ZARI',
    subtitle: '24-Karat Tested Precious Metal',
    description: 'Real silver cores wrapped with pure 24-karat gold foil. No synthetic plastic filaments are ever tolerated in an authentic UMADHVAYA heirloom.',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=900',
  },
  {
    step: '05',
    title: 'THE WEAVE',
    subtitle: 'The Kadwa & Korvai Art',
    description: 'Each motif is individually locked by hand. Not a single floating yarn is left on the reverse side, ensuring a silky touch that never snags against skin.',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=900',
  },
  {
    step: '06',
    title: 'YOUR SAREE',
    subtitle: 'A Reflection of Her',
    description: 'Inspected by 3 master examiners, sealed with a Silk Mark certification and its unique Saree Passport, ready to become part of your journey.',
    image: 'https://images.unsplash.com/photo-1610030470298-5007bf287c80?auto=format&fit=crop&q=80&w=900',
  },
];

export const ARTISANS_DATA = [
  {
    id: 'art-1',
    name: 'Pandit Ramdas Shastri',
    role: 'Master Weaver & Loom Patriarch',
    experience: '46 Years of Devotion',
    generation: '4th Generation Kadwa Artisan',
    location: 'Madanpura, Varanasi',
    quote: 'A saree is not cloth. When you sit at the loom, your heartbeat must match the rhythm of the warp.',
    specialty: 'Pure Katan Kadwa Jangla',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'art-2',
    name: 'M. Shanmugam',
    role: 'Senior Korvai Weaver',
    experience: '38 Years of Mastery',
    generation: '3rd Generation Temple Guild',
    location: 'Kanchipuram, Tamil Nadu',
    quote: 'Interlocking the border with three shuttles requires two weavers moving in complete unison for 40 days.',
    specialty: 'Petni Interlocking Korvai & Temple Borders',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'art-3',
    name: 'Sushila Devi & Brothers',
    role: 'Master Naksha & Color Alchemist',
    experience: '32 Years of Precision',
    generation: 'Pioneering Paithani Tapestry',
    location: 'Yeola, Maharashtra',
    quote: 'We dye each silk thread with natural botanical extracts to ensure the color never fades across generations.',
    specialty: 'Mor-Bangadi Peacock Tapestry',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
  },
];

export const JOURNAL_ARTICLES = [
  {
    id: 'journal-1',
    slug: 'the-art-of-banarasi-zari',
    title: 'The Art of Banarasi Zari: When Silver Meets Pure 24K Gold',
    subtitle: 'Understanding the precious metal metallurgy behind India’s most coveted handloom heirlooms.',
    readTime: '6 min read',
    category: 'Textile Metallurgy',
    date: 'October 2026',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=900',
    summary: 'True zari is not metallic lurex. It begins with silver ingots drawn into wires thinner than human hair, then electro-plated with pure 24-karat gold.',
    content: `For centuries, the grandeur of a Banarasi saree has been measured by the purity of its zari. Unlike modern fast-fashion metallic threads (which are merely plastic polyester coated with aluminum paint), an authentic UMADHVAYA saree is woven with real tested zari.

The process begins in specialized refining ateliers in Varanasi. Pure silver ingots are drawn through diamond dies until they achieve microscopic fineness. This silver wire is then flattened and wound around a core silk filament before receiving a 24-karat gold electroplating bath.

When you drape authentic zari, it does not scratch the skin. It feels supple, cool to the touch, and reflects ambient candlelight with a soft, aristocratic warmth.`,
  },
  {
    id: 'journal-2',
    slug: 'inside-a-varanasi-loom',
    title: 'Inside a Varanasi Loom: 42 Days of Silence and Rhythm',
    subtitle: 'A journey through the narrow alleys of Madanpura, where master weavers converse with silk.',
    readTime: '8 min read',
    category: 'Weaver Stories',
    date: 'September 2026',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=900',
    summary: 'The rhythmic sound of the wooden shuttle on a Madanpura loom is a continuous meditation passed down through four generations.',
    content: `Step off the banks of the Ganga and enter the narrow lanes of Madanpura. Here, the hum of the city gives way to the hypnotic wooden click of the pit loom.

Master Weaver Ramdas sits at a pit loom excavated into the earthen floor. The coolness of the soil keeps the Katan silk threads from snapping under seasonal humidity changes. Each motif in the Kadwa technique requires the weaver to manually pass individual spools of zari across selected warp threads, locking each knot by hand.

There are no scissors used on the reverse of a Kadwa saree; every thread is woven cleanly. When a saree takes 42 days to weave, it carries the patience and dignity of its maker.`,
  },
  {
    id: 'journal-3',
    slug: 'how-to-style-one-saree-day-night',
    title: 'How to Style One Saree for Day and Night',
    subtitle: 'The modern woman’s guide to effortless transition from executive boardroom to evening gala.',
    readTime: '5 min read',
    category: 'Styling & Versatility',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=900',
    summary: 'A versatile luxury saree is the ultimate sustainable investment. Here is how subtle blouse and jewelry swaps redefine your presence.',
    content: `The modern woman does not have time to return home to change before an important evening reception. Her wardrobe must adapt to her schedule.

1. The Day Edit: Focus on crisp, pinned pleats over the left shoulder. Pair with a high-neck matte linen or raw silk blouse, minimalist stud earrings, and structured leather flats or block heels.
2. The Night Transition: Unpin the shoulder pleats and allow the grand zari pallu to cascade gracefully over the left arm. Swap to a statement temple choker or polki studs, and step into sleek heels. The same saree transforms from quiet authority into radiant celebration.`,
  },
  {
    id: 'journal-4',
    slug: 'how-to-care-for-silk-heirlooms',
    title: 'How to Care for Pure Silk: Preserving Your Heirloom for Generations',
    subtitle: 'The sacred rituals of storage, airing, and unbleached muslin wrapping.',
    readTime: '4 min read',
    category: 'Heirloom Care',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=900',
    summary: 'Never store silk in plastic bags. Discover how unbleached organic muslin preserves the natural fibers for decades.',
    content: `Pure natural silk is a living protein fiber. To ensure your UMADHVAYA saree remains as lustrous 50 years from now as it is today, follow these time-honored preservation principles:

- Wrap in Muslin: Never store sarees in plastic covers. Plastic traps moisture and oxidizes pure silver zari. Always wrap your saree in breathable, unbleached pure cotton muslin.
- Periodic Airing: Once every six months, take your sarees out into a dry, shaded room and air them for two hours. Refold them along different fold lines to prevent crease wear.
- Professional Dry Clean Only: Never expose handloom silk to domestic machine wash or harsh detergents.`,
  },
];
