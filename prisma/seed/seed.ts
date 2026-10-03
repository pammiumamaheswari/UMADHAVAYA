import { PrismaClient, Role, ProductStatus, DiscountType } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('✨ Starting UMADHVAYA database seeding...');

  // 1. Create Super Admin / Owner User
  const passwordHash = await bcrypt.hash('Admin@Umadhvaya2026', 10);

  const owner = await prisma.user.upsert({
    where: { email: 'owner@umadhvaya.com' },
    update: {},
    create: {
      email: 'owner@umadhvaya.com',
      passwordHash,
      firstName: 'Maharaja',
      lastName: 'Umadhvaya',
      role: Role.OWNER,
      phone: '+919876543210',
      isEmailVerified: true,
      customerProfile: {
        create: {
          isSubscribed: true,
          preferredFabric: 'Pure Kanchipuram Silk',
        },
      },
    },
  });

  const staff = await prisma.user.upsert({
    where: { email: 'manager@umadhvaya.com' },
    update: {},
    create: {
      email: 'manager@umadhvaya.com',
      passwordHash,
      firstName: 'Lakshmi',
      lastName: 'Rao',
      role: Role.MANAGER,
      phone: '+919876543211',
      isEmailVerified: true,
      customerProfile: {
        create: {
          isSubscribed: true,
        },
      },
    },
  });

  console.log('✅ Created Owner & Staff accounts');

  // 2. Create Saree Categories
  const categoriesData = [
    {
      name: 'Kanchipuram Silk',
      slug: 'kanchipuram-silk',
      description: 'Woven with pure mulberry silk and dipped in pure 24K gold zari from the sacred temple town of Kanchipuram.',
      imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
      displayOrder: 1,
      isFeatured: true,
    },
    {
      name: 'Banarasi Katan Silk',
      slug: 'banarasi-katan-silk',
      description: 'Heirloom weaves from Varanasi featuring intricate Kadwa gold brocade, Mughal jaal, and opulent pallus.',
      imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800',
      displayOrder: 2,
      isFeatured: true,
    },
    {
      name: 'Handloom & Chanderi',
      slug: 'handloom-chanderi',
      description: 'Featherlight sheer silk cotton weaves with traditional coin and peacock buttas from Madhya Pradesh.',
      imageUrl: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800',
      displayOrder: 3,
      isFeatured: true,
    },
    {
      name: 'Organza & Floral',
      slug: 'organza-floral',
      description: 'Ethereal translucent pastel organza sarees with delicate handcrafted resham embroidery and scallop borders.',
      imageUrl: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=800',
      displayOrder: 4,
      isFeatured: true,
    },
    {
      name: 'Paithani & Royal Weaves',
      slug: 'paithani-royal-weaves',
      description: 'Pride of Maharashtra featuring kaleidoscopic peacock motifs and dense oblique square gold borders.',
      imageUrl: 'https://images.unsplash.com/photo-1610030470298-5007bf287c80?auto=format&fit=crop&q=80&w=800',
      displayOrder: 5,
      isFeatured: true,
    },
    {
      name: 'Tussar & Raw Silk',
      slug: 'tussar-raw-silk',
      description: 'Rich textured natural wild silks handcrafted by indigenous master weavers of Eastern India.',
      imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
      displayOrder: 6,
      isFeatured: false,
    },
  ];

  const categories: Record<string, any> = {};
  for (const cat of categoriesData) {
    const created = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: cat,
      create: cat,
    });
    categories[cat.slug] = created;
  }

  console.log('✅ Created Categories');

  // 3. Create Collections
  const collectionsData = [
    {
      name: 'Royal Bridal Trousseau 2026',
      slug: 'bridal-trousseau-2026',
      tagline: 'Timeless Grandeur for the Modern Royal Bride',
      description: 'Curated heavy bridal silks woven over 45 days with pure silver and gold zari.',
      imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1200',
      isFeatured: true,
      displayOrder: 1,
    },
    {
      name: 'Virasat Festive Heirlooms',
      slug: 'virasat-festive-heirlooms',
      tagline: 'Centuries of Weaving Legacy in Every Thread',
      description: 'Festive pure silks designed for Diwali, Navratri, and royal family ceremonies.',
      imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200',
      isFeatured: true,
      displayOrder: 2,
    },
  ];

  const collections: Record<string, any> = {};
  for (const col of collectionsData) {
    const created = await prisma.collection.upsert({
      where: { slug: col.slug },
      update: col,
      create: col,
    });
    collections[col.slug] = created;
  }

  console.log('✅ Created Collections');

  // 4. Create Rich Saree Products
  const productsData = [
    {
      sku: 'UMD-KAN-001',
      name: 'Aadrika Crimson Red Pure Kanchipuram Silk Saree',
      slug: 'aadrika-crimson-red-pure-kanchipuram-silk-saree',
      description: 'The Aadrika saree represents the pinnacle of South Indian weaving heritage. Handcrafted in Kanchipuram over 38 days, it features a rich crimson red body interwoven with intricate floral jaal in 24-karat gold zari. The contrasting regal purple korvai border is adorned with traditional rudraksha and temple motifs, leading into an opulent grand pallu.',
      shortDescription: 'Handwoven Crimson Red Pure Kanchipuram Silk Saree with heavy 24K pure gold zari korvai border.',
      categoryId: categories['kanchipuram-silk'].id,
      collectionId: collections['bridal-trousseau-2026'].id,
      price: 48500.00,
      mrp: 58000.00,
      discountPercent: 16.38,
      status: ProductStatus.ACTIVE,
      isFeatured: true,
      isBestSeller: true,
      isNewArrival: true,
      isSilkMarkCertified: true,
      fabric: 'Pure Mulberry Kanchipuram Silk',
      color: 'Crimson Red & Royal Purple',
      colorHex: '#991B1B',
      pattern: 'Korvai Temple Border & Gold Floral Jaal',
      occasion: 'Bridal / Wedding / Muhurtham',
      workType: 'Pure 24K Gold Zari Weave',
      sareeLength: '5.5 meters',
      blouseIncluded: true,
      blouseLength: '0.85 meters (Unstitched Heavy Brocade)',
      blouseFabric: 'Purple Silk with Gold Zari Border',
      weightGrams: 920,
      careInstructions: 'Strictly dry clean only. Store wrapped in pure unbleached muslin fabric in a cedar or wooden box.',
      origin: 'Kanchipuram, Tamil Nadu',
      manufacturer: 'UMADHVAYA Master Weaver Guild #104',
      returnEligible: true,
      returnPeriodDays: 7,
      stockQuantity: 12,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000',
          altText: 'Aadrika Crimson Red Pure Kanchipuram Silk Saree Pallu View',
          isPrimary: true,
          displayOrder: 1,
        },
        {
          url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1000',
          altText: 'Aadrika Saree Gold Zari Border Close-up',
          isHover: true,
          displayOrder: 2,
        },
      ],
    },
    {
      sku: 'UMD-BAN-002',
      name: 'Varanasi Noor Katan Silk Kadwa Banarasi Saree',
      slug: 'varanasi-noor-katan-silk-kadwa-banarasi-saree',
      description: 'An ethereal masterpiece from the holy ghats of Varanasi. Woven with pure Katan silk in a majestic emerald green hue, this saree is embellished with Kadwa handwoven gold and silver (Ganga-Jamuna) zari boota across the body. The rich meenakari work in the border adds a mesmerizing jewel-toned depth.',
      shortDescription: 'Emerald Green Katan Silk Banarasi Saree with Ganga-Jamuna Kadwa zari weave and Meenakari detailing.',
      categoryId: categories['banarasi-katan-silk'].id,
      collectionId: collections['bridal-trousseau-2026'].id,
      price: 39500.00,
      mrp: 46000.00,
      discountPercent: 14.13,
      status: ProductStatus.ACTIVE,
      isFeatured: true,
      isBestSeller: true,
      isNewArrival: true,
      isSilkMarkCertified: true,
      fabric: 'Pure Katan Silk',
      color: 'Emerald Green',
      colorHex: '#065F46',
      pattern: 'Kadwa Jangla & Meenakari Border',
      occasion: 'Reception & Wedding Gala',
      workType: 'Ganga-Jamuna Zari Handloom',
      sareeLength: '5.5 meters',
      blouseIncluded: true,
      blouseLength: '0.9 meters (Unstitched)',
      blouseFabric: 'Emerald Green Silk with Sleeve Borders',
      weightGrams: 850,
      origin: 'Varanasi, Uttar Pradesh',
      stockQuantity: 18,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1000',
          altText: 'Varanasi Noor Katan Silk Banarasi Saree Full View',
          isPrimary: true,
          displayOrder: 1,
        },
      ],
    },
    {
      sku: 'UMD-ORG-003',
      name: 'Gulmohar Hand-Painted Organza Silk Saree',
      slug: 'gulmohar-hand-painted-organza-silk-saree',
      description: 'Light as a summer breeze and radiant as morning dawn. Crafted from pure spun silk organza in a soft blush rose hue, this saree features delicate hand-painted botanical blossoms surrounded by handcrafted cutwork scalloped borders finished with micro-pearls and zardozi.',
      shortDescription: 'Blush Rose pure organza saree with hand-painted floral motifs and hand-cut zardozi scallops.',
      categoryId: categories['organza-floral'].id,
      collectionId: collections['virasat-festive-heirlooms'].id,
      price: 24500.00,
      mrp: 29000.00,
      discountPercent: 15.52,
      status: ProductStatus.ACTIVE,
      isFeatured: true,
      isBestSeller: false,
      isNewArrival: true,
      isSilkMarkCertified: true,
      fabric: 'Pure Silk Organza',
      color: 'Blush Rose Pink',
      colorHex: '#F472B6',
      pattern: 'Botanical Flora & Scallop Cutwork',
      occasion: 'Sangeet, Day Weddings, Soirée',
      workType: 'Hand Painting & Zardozi Embellishment',
      sareeLength: '5.5 meters',
      blouseIncluded: true,
      blouseLength: '0.8 meters',
      blouseFabric: 'Raw Silk in Matching Rose Blush',
      weightGrams: 420,
      origin: 'Jaipur, Rajasthan',
      stockQuantity: 15,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=1000',
          altText: 'Gulmohar Blush Pink Organza Saree Full Drape',
          isPrimary: true,
          displayOrder: 1,
        },
      ],
    },
    {
      sku: 'UMD-PAI-004',
      name: 'Mayura Royal Paithani Pure Silk Saree',
      slug: 'mayura-royal-paithani-pure-silk-saree',
      description: 'The golden jewel of Maharashtra royalty. Featuring a brilliant Royal Blue silk body adorned with delicate coconut buttis and a breathtaking kaleidoscopic tapestry pallu woven with the iconic Mor-Bangadi (peacock within bangle) motifs in pure gold and resham.',
      shortDescription: 'Royal Blue Paithani Silk Saree with classic Asavali border and Mor-Bangadi peacock tapestry pallu.',
      categoryId: categories['paithani-royal-weaves'].id,
      collectionId: collections['bridal-trousseau-2026'].id,
      price: 42000.00,
      mrp: 49500.00,
      discountPercent: 15.15,
      status: ProductStatus.ACTIVE,
      isFeatured: true,
      isBestSeller: true,
      isNewArrival: false,
      isSilkMarkCertified: true,
      fabric: 'Pure Mulberry Silk',
      color: 'Royal Blue & Sun Gold',
      colorHex: '#1E3A8A',
      pattern: 'Mor-Bangadi Peacock Motifs & Asavali Border',
      occasion: 'Festive & Muhurtham',
      workType: 'Tapestry Weaving in Pure Zari',
      sareeLength: '5.5 meters',
      blouseIncluded: true,
      blouseLength: '0.85 meters',
      weightGrams: 880,
      origin: 'Yeola, Maharashtra',
      stockQuantity: 8,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1610030470298-5007bf287c80?auto=format&fit=crop&q=80&w=1000',
          altText: 'Mayura Royal Paithani Silk Saree',
          isPrimary: true,
          displayOrder: 1,
        },
      ],
    },
  ];

  for (const prod of productsData) {
    const { images, stockQuantity, ...productPayload } = prod;
    const createdProduct = await prisma.product.upsert({
      where: { sku: prod.sku },
      update: productPayload,
      create: {
        ...productPayload,
        inventory: {
          create: {
            stockQuantity: stockQuantity,
            availableQuantity: stockQuantity,
            reservedQuantity: 0,
            lowStockThreshold: 3,
            warehouseLocation: 'UMADHVAYA Central Vault, Chennai',
          },
        },
        images: {
          create: images,
        },
      },
    });

    console.log(`✅ Seeded Saree: ${createdProduct.name}`);
  }

  // 5. Create Promotional CMS Banners
  const bannersData = [
    {
      title: 'The Royal Heritage Saree Gala',
      subtitle: 'Handcrafted masterworks in pure Mulberry Silk and 24K Gold Zari',
      badgeText: 'HERITAGE BRIDAL 2026',
      linkUrl: '/shop',
      imageUrlDesktop: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1600',
      position: 'HERO_SLIDER',
      displayOrder: 1,
      isActive: true,
    },
    {
      title: 'Ethereal Organza & Handloom Stories',
      subtitle: 'Featherlight drapes crafted for modern royal celebrations',
      badgeText: 'SUMMER SOIRÉE',
      linkUrl: '/shop/organza-floral',
      imageUrlDesktop: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=1600',
      position: 'HERO_SLIDER',
      displayOrder: 2,
      isActive: true,
    },
  ];

  for (const banner of bannersData) {
    await prisma.banner.create({
      data: banner,
    });
  }

  // 6. Create Introductory Coupon
  await prisma.coupon.upsert({
    where: { code: 'ROYAL10' },
    update: {},
    create: {
      code: 'ROYAL10',
      title: 'Welcome Royal Privilege',
      description: 'Enjoy 10% off your inaugural Umadhvaya luxury purchase up to ₹5,000.',
      discountType: DiscountType.PERCENTAGE,
      discountValue: 10.0,
      minOrderAmount: 15000.0,
      maxDiscountAmount: 5000.0,
      startDate: new Date(),
      endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      usageLimitTotal: 1000,
      usageLimitPerUser: 1,
      firstOrderOnly: true,
      isActive: true,
    },
  });

  console.log('🎉 UMADHVAYA Database Seed Completed Successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
