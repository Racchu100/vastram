import { Product, Category, StoreInfo, Order, Review, CustomerProfile, Coupon } from '@/types';

export const STORE_INFO: StoreInfo = {
  name: "VASTRAM",
  tagline: "Luxury Women's Fashion Boutique",
  addressLine1: "Pailands Building, 2nd Floor",
  addressLine2: "P.M. Rao Road, KSR Road, Hampankatta",
  area: "Hampankatta",
  city: "Mangaluru",
  state: "Karnataka",
  pincode: "575001",
  phone: "+91 824 244 8990",
  whatsapp: "+91 98450 12345",
  email: "concierge@vastram.fashion",
  pickupHours: "Mon - Sun: 10:00 AM - 8:30 PM",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.516086772719!2d74.84152771526848!3d12.871239690921867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4f7e279a5b%3A0x6b14bbbc9dfa1e64!2sHampankatta%2C%20Mangaluru%2C%20Karnataka%20575001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapDirectionsUrl: "https://maps.google.com/?q=Pailands+Building+Hampankatta+Mangaluru"
};

export const PICKUP_TIME_SLOTS = [
  "10:30 AM - 01:00 PM",
  "01:00 PM - 03:30 PM",
  "03:30 PM - 06:00 PM",
  "06:00 PM - 08:30 PM"
];

export const CATEGORIES: Category[] = [
  {
    id: "cat-1",
    name: "Bridal Collection",
    slug: "bridal",
    description: "Opulent royal bridal lehengas and hand-embroidered silks for the modern Indian bride.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000",
    productCount: 18,
    isFeatured: true
  },
  {
    id: "cat-2",
    name: "Designer Lehengas",
    slug: "lehengas",
    description: "Intricately detailed zardozi, gotapatti, and sequin encrusted couture lehengas.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000",
    productCount: 24,
    isFeatured: true
  },
  {
    id: "cat-3",
    name: "Heritage Sarees",
    slug: "sarees",
    description: "Pure Kanjeevaram, Organza, Banarasi, and Chanderi silk sarees.",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1000",
    productCount: 32,
    isFeatured: true
  },
  {
    id: "cat-4",
    name: "Evening Gowns",
    slug: "gowns",
    description: "Floor-sweeping satin, tulle, and velvet gowns for cocktail evenings and galas.",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=1000",
    productCount: 15,
    isFeatured: true
  },
  {
    id: "cat-5",
    name: "Party Wear",
    slug: "party-wear",
    description: "Chic contemporary outfits, embellished drapes, and statement ensembles.",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1000",
    productCount: 29,
    isFeatured: false
  },
  {
    id: "cat-6",
    name: "Royal Anarkalis",
    slug: "anarkalis",
    description: "Regal flared floor-length anarkalis with gold thread embroidery.",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1000",
    productCount: 14,
    isFeatured: false
  },
  {
    id: "cat-7",
    name: "Indo-Western",
    slug: "indo-western",
    description: "Fusion cape sets, crop top skirts, and asymmetric luxury silhouettes.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000",
    productCount: 20,
    isFeatured: true
  },
  {
    id: "cat-8",
    name: "Co-ord Sets",
    slug: "co-ord-sets",
    description: "Tailored silk and linen luxury matching coordinate ensembles.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000",
    productCount: 16,
    isFeatured: false
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "The Royal Crimson Velvet Bridal Lehenga",
    slug: "royal-crimson-velvet-bridal-lehenga",
    subtitle: "Handcrafted Zardozi & Dabka Embellished Bridal Masterpiece",
    description: "Step into timeless grandeur with VASTRAM's signature Crimson Velvet Bridal Lehenga. Handcrafted over 450 artisan hours in raw velvet with intricate gold zardozi, resham, and semi-precious stone embellishments. Features a double dupatta draping set in pure organza.",
    fabricDetails: "Velvet",
    workDetails: "Royal Gold Zardozi, Dabka, Cutdana & Sequin Embroidery",
    occasion: "Bridal Wear",
    price: 185000,
    offerPrice: 165000,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Bridal Collection",
    categorySlug: "bridal",
    availableSizes: ["S", "M", "L", "XL", "Custom Fit"],
    availableColors: [
      { name: "Royal Crimson Red", hex: "#8B0000" },
      { name: "Deep Imperial Wine", hex: "#4A0E17" }
    ],
    variants: [
      { id: "v1", size: "M", color: "Royal Crimson Red", colorHex: "#8B0000", stock: 2 },
      { id: "v2", size: "L", color: "Royal Crimson Red", colorHex: "#8B0000", stock: 1 }
    ],
    inStock: true,
    stockCount: 3,
    isFeatured: true,
    isTrending: true,
    isNewArrival: true,
    isBridal: true,
    sku: "VST-BDL-001",
    barcode: "8901234567890",
    rating: 5.0,
    reviewCount: 14,
    createdAt: "2026-07-01T10:00:00Z"
  },
  {
    id: "prod-2",
    name: "Imperial Kanjeevaram Gold Tissue Silk Saree",
    slug: "imperial-kanjeevaram-gold-tissue-silk-saree",
    subtitle: "Authentic Handwoven Pure Zari Heritage Saree",
    description: "Exude unparalleled grace in this 100% pure Kanjeevaram tissue silk saree woven with real gold zari threads. Features traditional peacock motif borders and an opulent heavy pallu. Comes with a matching unstitched blouse piece with gold border.",
    fabricDetails: "Kanjeevaram Silk",
    workDetails: "Pure Gold Zari Handloom Weave with Annapakshi Motifs",
    occasion: "Festive & Puja",
    price: 68000,
    offerPrice: 59500,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Heritage Sarees",
    categorySlug: "sarees",
    availableSizes: ["Custom Fit"],
    availableColors: [
      { name: "Imperial Metallic Gold", hex: "#D4AF37" },
      { name: "Champagne Ivory", hex: "#F5E6C8" }
    ],
    variants: [
      { id: "v3", size: "Custom Fit", color: "Imperial Metallic Gold", colorHex: "#D4AF37", stock: 4 }
    ],
    inStock: true,
    stockCount: 4,
    isFeatured: true,
    isTrending: true,
    isNewArrival: true,
    isBridal: false,
    sku: "VST-SAR-002",
    barcode: "8901234567891",
    rating: 4.9,
    reviewCount: 22,
    createdAt: "2026-07-05T10:00:00Z"
  },
  {
    id: "prod-3",
    name: "Emerald Grace Couture Evening Gown",
    slug: "emerald-grace-couture-evening-gown",
    subtitle: "Satin Silk Corseted Gown with Crystal Embellished Trail",
    description: "Designed for grand receptions and black-tie galas, this corseted evening gown is crafted in lustrous emerald satin silk. Features hand-set Swarovski crystals along the sweetheart neckline and a dramatic side slit with flowing train.",
    fabricDetails: "Pure Silk",
    workDetails: "Hand-set Swarovski Crystals & Micro-beading",
    occasion: "Evening Gala",
    price: 52000,
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Evening Gowns",
    categorySlug: "gowns",
    availableSizes: ["XS", "S", "M", "L"],
    availableColors: [
      { name: "Deep Emerald Green", hex: "#046307" },
      { name: "Midnight Sapphire", hex: "#0F2027" }
    ],
    variants: [
      { id: "v4", size: "S", color: "Deep Emerald Green", colorHex: "#046307", stock: 2 },
      { id: "v5", size: "M", color: "Deep Emerald Green", colorHex: "#046307", stock: 3 }
    ],
    inStock: true,
    stockCount: 5,
    isFeatured: true,
    isTrending: false,
    isNewArrival: true,
    isBridal: false,
    sku: "VST-GWN-003",
    barcode: "8901234567892",
    rating: 4.8,
    reviewCount: 9,
    createdAt: "2026-07-10T10:00:00Z"
  },
  {
    id: "prod-4",
    name: "Maharani Mirror Work Organza Lehenga",
    slug: "maharani-mirror-work-organza-lehenga",
    subtitle: "Lightweight Pastel Organza with Handcrafted Abhla Work",
    description: "Modern elegance meets royal heritage in this blouson organza lehenga. Adorned with intricate hand-cut mirror work and gold thread lattice work, paired with a fitted mirror blouse and a feather-light organza dupatta.",
    fabricDetails: "Organza Silk",
    workDetails: "Hand-cut Mirror (Abhla) Work & Thread Embroidery",
    occasion: "Sangeet & Haldi",
    price: 94000,
    offerPrice: 85000,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Designer Lehengas",
    categorySlug: "lehengas",
    availableSizes: ["S", "M", "L", "XL"],
    availableColors: [
      { name: "Powder Blush Pink", hex: "#FFD1DC" },
      { name: "Mint Ivory", hex: "#E0F2F1" }
    ],
    variants: [
      { id: "v6", size: "M", color: "Powder Blush Pink", colorHex: "#FFD1DC", stock: 2 }
    ],
    inStock: true,
    stockCount: 2,
    isFeatured: true,
    isTrending: true,
    isNewArrival: false,
    isBridal: false,
    sku: "VST-LHG-004",
    barcode: "8901234567893",
    rating: 5.0,
    reviewCount: 18,
    createdAt: "2026-07-12T10:00:00Z"
  },
  {
    id: "prod-5",
    name: "Noor Jahan Embroidered Silk Anarkali Suit",
    slug: "noor-jahan-embroidered-silk-anarkali-suit",
    subtitle: "Floor-Length Flared Kalidar Anarkali with Chanderi Silk Dupatta",
    description: "An homage to timeless Mughal royalty. Crafted in 100% pure raw silk with gold pita work along the collar and kalis. Complemented with a contrasting gold Chanderi silk dupatta bordered with scalloped gota lace.",
    fabricDetails: "Raw Silk",
    workDetails: "Fine Gold Pita Work & Scalloped Gota Trim",
    occasion: "Festive & Puja",
    price: 46000,
    offerPrice: 39900,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Royal Anarkalis",
    categorySlug: "anarkalis",
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    availableColors: [
      { name: "Ivory Cream & Gold", hex: "#FFFDD0" },
      { name: "Royal Mustard Yellow", hex: "#E1AD01" }
    ],
    variants: [
      { id: "v7", size: "L", color: "Ivory Cream & Gold", colorHex: "#FFFDD0", stock: 5 }
    ],
    inStock: true,
    stockCount: 5,
    isFeatured: false,
    isTrending: true,
    isNewArrival: true,
    isBridal: false,
    sku: "VST-ANK-005",
    barcode: "8901234567894",
    rating: 4.9,
    reviewCount: 11,
    createdAt: "2026-07-15T10:00:00Z"
  },
  {
    id: "prod-6",
    name: "Ophelia Embroidered Cape & Sharara Set",
    slug: "ophelia-embroidered-cape-sharara-set",
    subtitle: "3-Piece Contemporary Fusion Ensemble in Georgette",
    description: "Turn heads at reception parties with this modern Indo-Western ensemble. Features a hand-beaded crop top, flared tiered sharara pants, and a floor-sweeping sheer cape with pearl border accents.",
    fabricDetails: "Georgette",
    workDetails: "Pearl & Moti Work with Metallic Thread",
    occasion: "Cocktail & Party",
    price: 38500,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Indo-Western",
    categorySlug: "indo-western",
    availableSizes: ["XS", "S", "M", "L"],
    availableColors: [
      { name: "Dusty Lavender", hex: "#D6C6E1" },
      { name: "Sage Champagne", hex: "#B2AC88" }
    ],
    variants: [
      { id: "v8", size: "M", color: "Dusty Lavender", colorHex: "#D6C6E1", stock: 3 }
    ],
    inStock: true,
    stockCount: 3,
    isFeatured: true,
    isTrending: false,
    isNewArrival: true,
    isBridal: false,
    sku: "VST-INW-006",
    barcode: "8901234567895",
    rating: 4.7,
    reviewCount: 7,
    createdAt: "2026-07-18T10:00:00Z"
  }
];

export const SAMPLE_REVIEWS: Review[] = [
  {
    id: "rev-1",
    productId: "prod-1",
    productName: "The Royal Crimson Velvet Bridal Lehenga",
    customerName: "Priya Shetty",
    customerLocation: "Kadri, Mangaluru",
    rating: 5,
    title: "Absolute perfection for my wedding day!",
    comment: "I picked up my custom-fitted lehenga directly from VASTRAM's Hampankatta showroom. The trial fitting room experience was ultra-luxurious, and the embroidery is even more breathtaking in person!",
    photos: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600"],
    verifiedPurchase: true,
    isApproved: true,
    reply: "Dear Priya, it was an honor dressing you for your special day! Warmest wishes from team VASTRAM.",
    createdAt: "2026-07-20T14:30:00Z"
  },
  {
    id: "rev-2",
    productId: "prod-2",
    productName: "Imperial Kanjeevaram Gold Tissue Silk Saree",
    customerName: "Ananya Rai",
    customerLocation: "Bejai, Mangaluru",
    rating: 5,
    title: "Pure silk quality & seamless store pickup",
    comment: "Ordered online and chose the afternoon pickup slot. The showroom staff had my saree beautifully gift-wrapped and ready upon my arrival. Truly the best luxury boutique in Mangaluru!",
    verifiedPurchase: true,
    isApproved: true,
    createdAt: "2026-07-22T11:15:00Z"
  }
];

export const SAMPLE_ORDERS: Order[] = [
  {
    id: "ord-1001",
    orderNumber: "VST-2026-8941",
    customerName: "Dr. Deepa Kamath",
    customerPhone: "+91 98451 98765",
    customerEmail: "deepa.kamath@example.com",
    items: [
      {
        productId: "prod-2",
        productName: "Imperial Kanjeevaram Gold Tissue Silk Saree",
        productImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600",
        size: "Custom Fit",
        color: "Imperial Metallic Gold",
        price: 59500,
        quantity: 1
      }
    ],
    subtotal: 59500,
    discount: 0,
    totalAmount: 59500,
    pickupDate: "2026-07-26",
    pickupTimeSlot: "01:00 PM - 03:30 PM",
    paymentMethod: "UPI_AT_STORE",
    paymentStatus: "UNPAID",
    orderStatus: "READY_FOR_PICKUP",
    notes: "Please keep the gift box ready.",
    fittingRequested: false,
    qrPassCode: "PASS-VST-8941-MNG",
    createdAt: "2026-07-24T16:20:00Z",
    updatedAt: "2026-07-25T09:00:00Z"
  },
  {
    id: "ord-1002",
    orderNumber: "VST-2026-8942",
    customerName: "Kavya Alva",
    customerPhone: "+91 99012 34567",
    customerEmail: "kavya.alva@example.com",
    items: [
      {
        productId: "prod-4",
        productName: "Maharani Mirror Work Organza Lehenga",
        productImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600",
        size: "M",
        color: "Powder Blush Pink",
        price: 85000,
        quantity: 1
      }
    ],
    subtotal: 85000,
    discount: 5000,
    totalAmount: 80000,
    pickupDate: "2026-07-27",
    pickupTimeSlot: "03:30 PM - 06:00 PM",
    paymentMethod: "CARD_AT_STORE",
    paymentStatus: "UNPAID",
    orderStatus: "CONFIRMED",
    notes: "Requires minor waist adjustment during pickup trial.",
    fittingRequested: true,
    qrPassCode: "PASS-VST-8942-MNG",
    createdAt: "2026-07-25T08:15:00Z",
    updatedAt: "2026-07-25T08:15:00Z"
  }
];

export const SAMPLE_CUSTOMERS: CustomerProfile[] = [
  {
    id: "cust-1",
    name: "Dr. Deepa Kamath",
    email: "deepa.kamath@example.com",
    phone: "+91 98451 98765",
    loyaltyPoints: 1250,
    totalOrders: 4,
    totalSpent: 185000,
    status: "VIP",
    notes: "Prefers pure gold zari Kanjeevarams.",
    joinedDate: "2025-11-12"
  },
  {
    id: "cust-2",
    name: "Kavya Alva",
    email: "kavya.alva@example.com",
    phone: "+91 99012 34567",
    loyaltyPoints: 800,
    totalOrders: 2,
    totalSpent: 120000,
    status: "ACTIVE",
    notes: "Bridal appointment in August.",
    joinedDate: "2026-01-20"
  }
];
