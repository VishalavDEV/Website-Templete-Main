import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // ================= ELECTRONICS =================
  {
    id: 'prod-001',
    slug: 'orbit-studio-pro-headphones',
    name: 'ORBIT Studio Pro Noise-Cancelling Headphones',
    brand: 'ORBIT',
    category: 'electronics',
    subcategory: 'audio',
    price: 7999,
    originalPrice: 9999,
    discount: 20,
    rating: 4.8,
    reviewCount: 342,
    description: 'Precision 40mm beryllium drivers paired with hybrid active noise cancellation for pristine sound reproduction.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Matte Charcoal', hex: '#161616' },
      { name: 'Silver Frost', hex: '#E2E8F0' }
    ],
    specifications: {
      'Driver Size': '40mm Beryllium',
      'Battery Life': '45 Hours (ANC On)',
      'Connectivity': 'Bluetooth 5.3 & 3.5mm Aux',
      'Charging': 'USB-C Fast Charge (10 min = 5 hrs)',
      'Weight': '250g'
    },
    features: [
      'Hybrid Adaptive Noise Cancellation',
      'Lossless LDAC Codec Support',
      'Multipoint Dual-Device Connection',
      'Quad Microphones with AI Beamforming'
    ],
    stock: 24,
    badge: 'BESTSELLER',
    featured: true,
    bestSeller: true,
    flashDeal: true,
    editCategory: 'DESK EDIT',
    tags: ['wireless headphones', 'audio', 'anc', 'orbit']
  },
  {
    id: 'prod-002',
    slug: 'nova-x1-pro-smartphone',
    name: 'NOVA X1 Pro 5G Smartphone (256GB)',
    brand: 'NOVA',
    category: 'electronics',
    subcategory: 'smartphones',
    price: 64999,
    originalPrice: 74999,
    discount: 13,
    rating: 4.9,
    reviewCount: 520,
    description: 'Flagship 6.7" 120Hz LTPO AMOLED display with 200MP OIS triple camera array and ceramic glass finish.',
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Obsidian Black', hex: '#0B0F19' },
      { name: 'Titanium Slate', hex: '#64748B' }
    ],
    specifications: {
      'Display': '6.7-inch QHD+ 120Hz LTPO AMOLED',
      'Processor': 'Octa-core 4nm Flagship Chipset',
      'RAM': '12GB LPDDR5X',
      'Storage': '256GB UFS 4.0',
      'Camera': '200MP Main + 50MP Ultra-wide + 48MP Telephoto',
      'Battery': '5000mAh with 100W Fast Charge'
    },
    features: [
      'Ceramic Shield Front & Back',
      'IP68 Water & Dust Resistance',
      'AI Photography & 8K Video Recording',
      'Dual Stereo Speakers by ORBIT Audio'
    ],
    stock: 15,
    badge: 'NEW',
    featured: true,
    newArrival: true,
    tags: ['smartphone', 'nova', '5g', 'flagship']
  },
  {
    id: 'prod-003',
    slug: 'nova-book-ultra-14',
    name: 'NOVA Book Ultra 14" OLED Laptop',
    brand: 'NOVA',
    category: 'electronics',
    subcategory: 'laptops',
    price: 94999,
    originalPrice: 109999,
    discount: 14,
    rating: 4.8,
    reviewCount: 189,
    description: 'Ultra-thin magnesium alloy chassis powered by next-gen 14-core processor and 3K Touch OLED display.',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Display': '14.0-inch 3.2K 120Hz Touch OLED',
      'Processor': 'Intel Core Ultra 7 155H',
      'RAM': '32GB LPDDR5X',
      'Storage': '1TB PCIe 4.0 NVMe SSD',
      'Weight': '1.18 kg'
    },
    features: [
      '18-Hour All-Day Battery Life',
      'Full Aluminum CNC Unibody',
      'Wi-Fi 7 & Thunderbolt 4 Ports',
      'Backlit Keyboard with Glass Precision Trackpad'
    ],
    stock: 12,
    badge: 'ORVANA SHELF',
    featured: true,
    editCategory: 'DESK EDIT',
    tags: ['laptop', 'nova', 'oled', 'ultrabook']
  },
  {
    id: 'prod-004',
    slug: 'orbit-soundbar-arc',
    name: 'ORBIT Arc Dolby Atmos Soundbar',
    brand: 'ORBIT',
    category: 'electronics',
    subcategory: 'audio',
    price: 24999,
    originalPrice: 29999,
    discount: 17,
    rating: 4.7,
    reviewCount: 114,
    description: 'Immersive 5.1.2 channel spatial audio soundbar with wireless subwoofer and eARC HDMI 2.1 input.',
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Channels': '5.1.2 Dolby Atmos',
      'Total Power': '450W RMS',
      'Subwoofer': '8-inch Wireless Down-Firing',
      'Inputs': 'HDMI eARC, Optical, Bluetooth 5.2'
    },
    features: ['Spatial Room Calibration', 'Dialogue Enhancer Mode', 'AirPlay 2 & Spotify Connect'],
    stock: 18,
    tags: ['soundbar', 'orbit', 'dolby atmos']
  },
  {
    id: 'prod-005',
    slug: 'nova-pulse-smartwatch',
    name: 'NOVA Pulse Titanium Smartwatch',
    brand: 'NOVA',
    category: 'electronics',
    subcategory: 'wearables',
    price: 12999,
    originalPrice: 15999,
    discount: 18,
    rating: 4.6,
    reviewCount: 230,
    description: 'Grade 5 titanium casing with sapphire glass, dual-frequency GPS, and ECG heart monitoring.',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Case Material': 'Grade 5 Titanium',
      'Display': '1.43-inch Always-On AMOLED 1000 nits',
      'Battery': 'Up to 12 Days',
      'Water Rating': '10 ATM (100m)'
    },
    features: ['ECG & SpO2 Tracking', 'Dual-Band L1+L5 GPS Navigation', 'Bluetooth Calling & Local Music Storage'],
    stock: 30,
    badge: 'BESTSELLER',
    bestSeller: true,
    tags: ['smartwatch', 'nova', 'titanium']
  },

  // ================= FASHION =================
  {
    id: 'prod-006',
    slug: 'kivo-chelsea-leather-boots',
    name: 'KIVO Italian Leather Chelsea Boots',
    brand: 'KIVO',
    category: 'fashion',
    subcategory: 'shoes',
    price: 6999,
    originalPrice: 8999,
    discount: 22,
    rating: 4.9,
    reviewCount: 145,
    description: 'Handcrafted full-grain Italian calfskin leather boots with Goodyear welted leather soles.',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Espresso Brown', hex: '#4A2E19' },
      { name: 'Midnight Black', hex: '#161616' }
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    specifications: {
      'Upper': 'Full-Grain Calfskin Leather',
      'Construction': 'Goodyear Welted',
      'Lining': 'Breathable Soft Leather',
      'Sole': 'Stack Leather with Anti-slip Rubber Heel'
    },
    features: ['Hand-burnished toe finish', 'Elastic side gussets for easy slip-on', 'Cushioning memory foam footbed'],
    stock: 19,
    badge: 'ORVANA SHELF',
    featured: true,
    editCategory: 'WEEKEND EDIT',
    tags: ['boots', 'leather', 'kivo', 'shoes']
  },
  {
    id: 'prod-007',
    slug: 'kivo-cashmere-overcoat',
    name: 'KIVO Tailored Wool-Cashmere Overcoat',
    brand: 'KIVO',
    category: 'fashion',
    subcategory: 'men',
    price: 11999,
    originalPrice: 14999,
    discount: 20,
    rating: 4.8,
    reviewCount: 98,
    description: 'Double-breasted tailored coat woven from premium virgin wool and Mongolian cashmere.',
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Camel Tan', hex: '#C19A6B' },
      { name: 'Charcoal Grey', hex: '#374151' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    specifications: {
      'Material': '85% Virgin Wool, 15% Cashmere',
      'Fit': 'Tailored Slim Fit',
      'Lining': '100% Cupro Bemberg'
    },
    features: ['Natural horn buttons', 'Deep flap welt pockets', 'Back vent for movement'],
    stock: 14,
    tags: ['overcoat', 'cashmere', 'kivo']
  },
  {
    id: 'prod-008',
    slug: 'mira-leather-tote-bag',
    name: 'MIRA Structured Leather Minimalist Tote',
    brand: 'MIRA',
    category: 'fashion',
    subcategory: 'bags',
    price: 5499,
    originalPrice: 6999,
    discount: 21,
    rating: 4.7,
    reviewCount: 176,
    description: 'Sleek everyday tote crafted from pebble-textured leather with padded 14" laptop compartment.',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Warm Cream', hex: '#F5F5DC' },
      { name: 'Classic Black', hex: '#161616' }
    ],
    specifications: {
      'Dimensions': '38 cm x 30 cm x 12 cm',
      'Material': '100% Pebbled Cowhide Leather',
      'Laptop Sleeve': 'Padded up to 14"'
    },
    features: ['Magnetic snap top closure', 'Key leash cord inside', 'Reinforced base studs'],
    stock: 22,
    badge: 'BESTSELLER',
    bestSeller: true,
    tags: ['tote bag', 'leather', 'mira']
  },
  {
    id: 'prod-009',
    slug: 'kivo-silk-linen-shirt',
    name: 'KIVO Relaxed Silk-Linen Resort Shirt',
    brand: 'KIVO',
    category: 'fashion',
    subcategory: 'men',
    price: 2999,
    originalPrice: 3999,
    discount: 25,
    rating: 4.6,
    reviewCount: 88,
    description: 'Lightweight breathable resort shirt blended from French linen and Mulberry silk.',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    specifications: { 'Material': '70% French Linen, 30% Mulberry Silk', 'Fit': 'Relaxed Camp Collar' },
    features: ['Natural mother-of-pearl buttons', 'Pre-washed for soft handfeel'],
    stock: 28,
    tags: ['shirt', 'linen', 'kivo']
  },

  // ================= HOME & LIVING =================
  {
    id: 'prod-010',
    slug: 'arco-lounge-chair',
    name: 'ARCO Copenhagen Modern Lounge Chair',
    brand: 'ARCO',
    category: 'home',
    subcategory: 'furniture',
    price: 18999,
    originalPrice: 22999,
    discount: 17,
    rating: 4.9,
    reviewCount: 94,
    description: 'Architectural lounge armchair crafted from solid FSC-certified white oak and bouclé upholstery.',
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Ivory Bouclé', hex: '#FAF8F5' },
      { name: 'Moss Green Velvet', hex: '#3B4D3A' }
    ],
    specifications: {
      'Dimensions': '78 W x 82 D x 74 H cm',
      'Frame': 'Solid FSC-Certified White Oak',
      'Upholstery': 'High-density foam with Textured Bouclé'
    },
    features: ['Ergonomic recline angle', 'Hand-rubbed natural oil wood finish', 'Scratch-resistant felt floor pads'],
    stock: 8,
    badge: 'ORVANA SHELF',
    featured: true,
    editCategory: 'HOME EDIT',
    tags: ['chair', 'furniture', 'arco', 'home']
  },
  {
    id: 'prod-011',
    slug: 'arco-ceramic-table-lamp',
    name: 'ARCO Sculptural Ceramic Table Lamp',
    brand: 'ARCO',
    category: 'home',
    subcategory: 'lighting',
    price: 4299,
    originalPrice: 5499,
    discount: 21,
    rating: 4.8,
    reviewCount: 132,
    description: 'Hand-thrown stoneware lamp base with textured linen drum shade and touch dimming.',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Height': '45 cm',
      'Shade Diameter': '28 cm',
      'Bulb Socket': 'E27 Warm LED (Included)',
      'Switch': '3-Level Touch Sensitive Dimmer'
    },
    features: ['Handcrafted matte ceramic finish', '3000K warm ambient glow'],
    stock: 35,
    under999: false,
    tags: ['lamp', 'lighting', 'arco']
  },
  {
    id: 'prod-012',
    slug: 'arco-espresso-machine-pro',
    name: 'ARCO Precision Espresso Machine',
    brand: 'ARCO',
    category: 'home',
    subcategory: 'appliances',
    price: 32999,
    originalPrice: 38999,
    discount: 15,
    rating: 4.9,
    reviewCount: 210,
    description: '15-bar Italian pump espresso system with integrated conical burr grinder and micro-foam steam wand.',
    images: [
      'https://images.unsplash.com/photo-1517668808822-9eaa03afd2af?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Pump Pressure': '15 Bar Italian Ulka Pump',
      'Water Tank': '2.2L Removable',
      'Grinder': '30 Precision Grind Settings',
      'Heating System': 'ThermoCoil PID Temperature Control'
    },
    features: ['Real-time extraction pressure gauge', 'Commercial 58mm stainless steel portafilter'],
    stock: 10,
    badge: 'BESTSELLER',
    bestSeller: true,
    tags: ['coffee machine', 'espresso', 'arco']
  },

  // ================= BEAUTY =================
  {
    id: 'prod-013',
    slug: 'luma-hyaluronic-glow-serum',
    name: 'LUMA Botanical Hyaluronic Glow Serum (50ml)',
    brand: 'LUMA',
    category: 'beauty',
    subcategory: 'skincare',
    price: 2499,
    originalPrice: 2999,
    discount: 17,
    rating: 4.9,
    reviewCount: 480,
    description: 'Triple-weight hyaluronic acid complex enriched with organic rose hip oil and botanical niacinamide.',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248597262-838d81017409?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Volume': '50 ml / 1.7 fl. oz.',
      'Skin Type': 'All Skin Types (Sensitive Friendly)',
      'Formulation': 'Lightweight Hydrating Water-Gel',
      'Key Ingredients': 'Hyaluronic Acid 2%, Niacinamide 5%, Rosehip Extract'
    },
    features: ['100% Vegan & Cruelty-Free', 'Free from parabens, sulfates & synthetic fragrance'],
    stock: 45,
    badge: 'BESTSELLER',
    bestSeller: true,
    editCategory: 'SELF CARE EDIT',
    tags: ['serum', 'skincare', 'luma', 'beauty']
  },
  {
    id: 'prod-014',
    slug: 'luma-velvet-matte-lipstick',
    name: 'LUMA Velvet Moisture Matte Lipstick',
    brand: 'LUMA',
    category: 'beauty',
    subcategory: 'makeup',
    price: 1299,
    originalPrice: 1599,
    discount: 18,
    rating: 4.7,
    reviewCount: 310,
    description: 'Weightless matte lipstick infused with squalane and jojoba oil for 10-hour comfortable hydration.',
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Rose Nude', hex: '#B86D6E' },
      { name: 'Crimson Red', hex: '#991B1B' }
    ],
    specifications: { 'Finish': 'Velvet Soft Matte', 'Weight': '3.8g' },
    features: ['Non-drying comfort formula', 'Smudge-resistant transfer proof'],
    stock: 50,
    tags: ['lipstick', 'makeup', 'luma']
  },
  {
    id: 'prod-015',
    slug: 'luma-amber-sandalwood-perfume',
    name: 'LUMA Amber & Sandalwood Eau de Parfum (100ml)',
    brand: 'LUMA',
    category: 'beauty',
    subcategory: 'fragrance',
    price: 4999,
    originalPrice: 6299,
    discount: 20,
    rating: 4.9,
    reviewCount: 165,
    description: 'Artisanal perfume blend featuring notes of warm amber, Mysore sandalwood, cardamom and bergamot.',
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: {
      'Volume': '100 ml EDP',
      'Fragrance Family': 'Warm Woody Amber',
      'Longevity': '8-12 Hours'
    },
    features: ['Hand-poured glass bottle', 'Unisex scent profile'],
    stock: 20,
    badge: 'ORVANA SHELF',
    editCategory: 'SELF CARE EDIT',
    tags: ['perfume', 'fragrance', 'luma']
  },

  // ================= GROCERY =================
  {
    id: 'prod-016',
    slug: 'vero-organic-matcha-powder',
    name: 'VERO Uji Ceremonial Organic Matcha (100g)',
    brand: 'VERO',
    category: 'grocery',
    subcategory: 'beverages',
    price: 1499,
    originalPrice: 1899,
    discount: 21,
    rating: 4.9,
    reviewCount: 240,
    description: 'First-harvest shade-grown green tea leaves from Uji, Kyoto, stone-ground into vibrant green powder.',
    images: [
      'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: { 'Origin': 'Uji, Kyoto, Japan', 'Grade': 'Ceremonial Grade', 'Net Weight': '100g Tin' },
    features: ['Rich in L-Theanine & Antioxidants', '100% USDA Certified Organic'],
    stock: 60,
    under999: false,
    tags: ['matcha', 'tea', 'vero', 'organic']
  },
  {
    id: 'prod-017',
    slug: 'vero-cold-pressed-olive-oil',
    name: 'VERO Extra Virgin Olive Oil (1 Liter)',
    brand: 'VERO',
    category: 'grocery',
    subcategory: 'staples',
    price: 1299,
    originalPrice: 1599,
    discount: 18,
    rating: 4.8,
    reviewCount: 310,
    description: 'Single-estate cold-pressed extra virgin olive oil with low acidity (<0.2%) and peppery finish.',
    images: [
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: { 'Volume': '1 Liter Dark Glass Bottle', 'Acidity': '< 0.2%' },
    features: ['First cold extraction', 'Rich in Polyphenols'],
    stock: 40,
    tags: ['olive oil', 'vero', 'grocery']
  },
  {
    id: 'prod-018',
    slug: 'vero-raw-wildflower-honey',
    name: 'VERO Raw Himalayan Wildflower Honey (500g)',
    brand: 'VERO',
    category: 'grocery',
    subcategory: 'staples',
    price: 699,
    originalPrice: 899,
    discount: 22,
    rating: 4.9,
    reviewCount: 190,
    description: 'Unfiltered, unpasteurized raw honey ethically harvested from high-altitude Himalayan wildflower flora.',
    images: [
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: { 'Net Weight': '500g Glass Jar', 'Processing': '100% Raw Unheated' },
    features: ['Contains natural pollen & enzymes', 'No added sugar or syrup'],
    stock: 75,
    under999: true,
    tags: ['honey', 'vero', 'grocery']
  },

  // ================= SPORTS =================
  {
    id: 'prod-019',
    slug: 'aera-velocity-running-shoes',
    name: 'AERA Velocity Carbon Cushion Running Shoes',
    brand: 'AERA',
    category: 'sports',
    subcategory: 'running',
    price: 8999,
    originalPrice: 10999,
    discount: 18,
    rating: 4.8,
    reviewCount: 160,
    description: 'High-energy return carbon plate running shoes with nitrogen-infused foam midsole.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    specifications: {
      'Weight': '210g (UK 8)',
      'Drop': '8mm',
      'Midsole': 'Supercritical Nitrogen Foam + Full Length Carbon Plate'
    },
    features: ['Engineered breathable mesh upper', 'High-abrasion rubber outsole'],
    stock: 25,
    badge: 'NEW',
    newArrival: true,
    tags: ['running shoes', 'aera', 'sports']
  },
  {
    id: 'prod-020',
    slug: 'aera-pro-yoga-mat',
    name: 'AERA Alignment Rubber Yoga Mat (6mm)',
    brand: 'AERA',
    category: 'sports',
    subcategory: 'yoga',
    price: 2799,
    originalPrice: 3499,
    discount: 20,
    rating: 4.9,
    reviewCount: 285,
    description: 'Eco-friendly natural tree rubber yoga mat with laser-etched alignment guidelines and ultra-grip surface.',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Sage Green', hex: '#6E8B74' },
      { name: 'Slate Blue', hex: '#4A6572' }
    ],
    specifications: { 'Dimensions': '183 cm x 68 cm x 6mm', 'Weight': '2.8 kg', 'Material': 'Natural Tree Rubber + PU' },
    features: ['Non-slip sweat activated grip', 'Includes cotton carrying strap'],
    stock: 45,
    tags: ['yoga mat', 'aera', 'fitness']
  },
  {
    id: 'prod-021',
    slug: 'aera-adjustable-dumbbells-set',
    name: 'AERA SelectWeight Adjustable Dumbbells (24kg Pair)',
    brand: 'AERA',
    category: 'sports',
    subcategory: 'gym',
    price: 16999,
    originalPrice: 19999,
    discount: 15,
    rating: 4.8,
    reviewCount: 140,
    description: 'Compact dial-adjust dumbbell system replacing 15 sets of weights from 2.5kg to 24kg per dumbbell.',
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: { 'Weight Range': '2.5kg to 24kg per dumbbell', 'Adjustments': '15 Weight Settings' },
    features: ['Durable molded steel plates', 'Silent smooth turn dial mechanism'],
    stock: 16,
    tags: ['dumbbells', 'gym', 'aera']
  },

  // ================= KIDS =================
  {
    id: 'prod-022',
    slug: 'nova-kids-robotics-kit',
    name: 'NOVA STEM Explorer Smart Robotics Kit',
    brand: 'NOVA',
    category: 'kids',
    subcategory: 'building-toys',
    price: 3499,
    originalPrice: 4499,
    discount: 22,
    rating: 4.9,
    reviewCount: 112,
    description: 'Interactive 350-piece robotic building set with app-controlled Bluetooth sensors and scratch coding.',
    images: [
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: { 'Age Group': '8-14 Years', 'Pieces': '350+ Snap-fit Components', 'Connectivity': 'Bluetooth 5.0' },
    features: ['Build 5 different robot models', 'Rechargeable lithium battery module'],
    stock: 30,
    tags: ['stem', 'robotics', 'kids']
  },

  // ================= TRAVEL =================
  {
    id: 'prod-023',
    slug: 'mira-carryon-spinner-suitcase',
    name: 'MIRA Horizon Polycarbonate Carry-On Suitcase',
    brand: 'MIRA',
    category: 'travel',
    subcategory: 'luggage',
    price: 8499,
    originalPrice: 10999,
    discount: 22,
    rating: 4.9,
    reviewCount: 195,
    description: 'Ultra-lightweight Makrolon polycarbonate hard shell cabin trolley with Japanese Hinomoto 360° spinner wheels.',
    images: [
      'https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565026057447-b88e4091582c?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Olive Green', hex: '#556B2F' },
      { name: 'Charcoal Black', hex: '#161616' }
    ],
    specifications: {
      'Capacity': '40 Liters (Cabin Approved)',
      'Dimensions': '55 x 37 x 23 cm',
      'Weight': '3.1 kg',
      'Lock': 'TSA-Accepted Combination Lock'
    },
    features: ['Built-in USB power bank pocket', 'Water-resistant laundry divider bag'],
    stock: 20,
    badge: 'ORVANA SHELF',
    editCategory: 'TRAVEL EDIT',
    tags: ['suitcase', 'luggage', 'mira', 'travel']
  },

  // ================= AUTOMOTIVE =================
  {
    id: 'prod-024',
    slug: 'nova-4k-dash-cam-pro',
    name: 'NOVA Guard 4K Front & Rear Dual Dash Cam',
    brand: 'NOVA',
    category: 'automotive',
    subcategory: 'auto-electronics',
    price: 9999,
    originalPrice: 12999,
    discount: 23,
    rating: 4.8,
    reviewCount: 155,
    description: 'Ultra HD 4K dash camera with Sony STARVIS 2 night vision sensor, G-sensor collision lock, and Wi-Fi App.',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: { 'Resolution': '4K 2160P Front + 1080P Rear', 'Sensor': 'Sony STARVIS 2 IMX678', 'FOV': '170° Wide Angle' },
    features: ['24/7 Parking Monitoring with Hardwire Kit', 'GPS Tracker & Speed Stamp'],
    stock: 25,
    tags: ['dash cam', 'automotive', 'nova']
  },

  // ================= BOOKS & STATIONERY =================
  {
    id: 'prod-025',
    slug: 'arco-leather-journal-fountain-pen-set',
    name: 'ARCO Italian Leather Journal & Brass Pen Set',
    brand: 'ARCO',
    category: 'books',
    subcategory: 'stationery',
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    rating: 4.9,
    reviewCount: 215,
    description: 'Refillable full-grain Tuscan leather notebook filled with 240 pages of 120gsm fountain-pen-friendly paper.',
    images: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: { 'Pages': '240 Pages (120gsm Acid-Free)', 'Size': 'A5 (15 x 21 cm)' },
    features: ['Includes solid machined brass rollerball pen', 'Lay-flat 180° binding'],
    stock: 40,
    under999: false,
    editCategory: 'DESK EDIT',
    tags: ['journal', 'stationery', 'arco']
  },

  // ================= PETS =================
  {
    id: 'prod-026',
    slug: 'vero-smart-pet-feeder',
    name: 'VERO PetCare Smart Automatic Pet Feeder',
    brand: 'VERO',
    category: 'pets',
    subcategory: 'dog-care',
    price: 4999,
    originalPrice: 6499,
    discount: 23,
    rating: 4.8,
    reviewCount: 130,
    description: 'App-enabled automatic dry food dispenser with 1080p HD camera, voice recording, and portion control.',
    images: [
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: { 'Capacity': '4 Liters Dry Food', 'Camera': '1080P HD Night Vision', 'Power': 'Dual AC Adapter + AA Battery Backup' },
    features: ['Schedule up to 10 meals per day', 'Stainless steel removable food bowl'],
    stock: 18,
    tags: ['pet feeder', 'pets', 'vero']
  },

  // ================= ADDITIONAL BUDGET & ACCESSIBLE ITEMS =================
  {
    id: 'prod-027',
    slug: 'orbit-mini-bluetooth-speaker',
    name: 'ORBIT Sound Pocket Waterproof Speaker',
    brand: 'ORBIT',
    category: 'electronics',
    subcategory: 'audio',
    price: 999,
    originalPrice: 1499,
    discount: 33,
    rating: 4.7,
    reviewCount: 520,
    description: 'Compact IPX7 waterproof Bluetooth speaker with 12-hour playtime and carabiner clip.',
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: { 'Battery': '12 Hours', 'Water Rating': 'IPX7 Fully Waterproof', 'Output': '10W RMS' },
    features: ['Integrated tough rubberized strap', 'Built-in microphone for speakerphone'],
    stock: 80,
    under999: true,
    flashDeal: true,
    tags: ['speaker', 'bluetooth', 'under 999', 'orbit']
  },
  {
    id: 'prod-028',
    slug: 'luma-lip-sleeping-mask',
    name: 'LUMA Berry Lip Sleeping Mask (20g)',
    brand: 'LUMA',
    category: 'beauty',
    subcategory: 'skincare',
    price: 499,
    originalPrice: 699,
    discount: 28,
    rating: 4.8,
    reviewCount: 630,
    description: 'Overnight lip treatment infused with berry extract, shea butter, and vitamin C for smooth soft lips.',
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: { 'Weight': '20g Jar', 'Key Ingredient': 'Berry Fruit Complex' },
    features: ['Melts dead skin cells overnight', 'Includes silicone lip spatula'],
    stock: 100,
    under999: true,
    tags: ['lip mask', 'skincare', 'beauty', 'under 999']
  },
  {
    id: 'prod-029',
    slug: 'arco-stainless-steel-water-bottle',
    name: 'ARCO Vacuum Insulated Steel Bottle (750ml)',
    brand: 'ARCO',
    category: 'home',
    subcategory: 'kitchen',
    price: 899,
    originalPrice: 1199,
    discount: 25,
    rating: 4.9,
    reviewCount: 410,
    description: 'Double-wall vacuum insulated 18/8 stainless steel flask keeping liquids cold for 24h or hot for 12h.',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Matte Cream', hex: '#F5F5DC' },
      { name: 'Slate Gray', hex: '#4B5563' }
    ],
    specifications: { 'Capacity': '750 ml', 'Material': 'Food Grade 18/8 Stainless Steel' },
    features: ['Sweat-free powder coat finish', 'Leakproof loop cap'],
    stock: 90,
    under999: true,
    tags: ['bottle', 'kitchen', 'under 999', 'arco']
  },
  {
    id: 'prod-030',
    slug: 'kivo-canvas-tote-bag',
    name: 'KIVO Heavyweight Organic Canvas Shopper',
    brand: 'KIVO',
    category: 'fashion',
    subcategory: 'bags',
    price: 799,
    originalPrice: 999,
    discount: 20,
    rating: 4.7,
    reviewCount: 275,
    description: 'Durable 16oz organic cotton canvas shoulder tote with inner zipper pocket.',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: { 'Material': '100% Organic 16oz Cotton Canvas', 'Dimensions': '40 x 38 cm' },
    features: ['Reinforced x-stitched handles', 'Interior zip pocket for phone & keys'],
    stock: 120,
    under999: true,
    tags: ['tote', 'canvas', 'under 999', 'kivo']
  }
];
