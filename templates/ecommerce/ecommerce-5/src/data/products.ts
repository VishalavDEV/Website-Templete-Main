import type { Product, CollectionItem } from '../types';

export const PRODUCTS: Product[] = [
  // ==========================================
  // WOMEN'S COLLECTION (22 Products)
  // ==========================================
  {
    id: 'w-01',
    slug: 'structured-linen-shirt',
    name: 'Structured Linen Shirt',
    brand: 'AUREL',
    category: 'Shirts',
    subcategory: 'Linen',
    gender: 'women',
    price: 4299,
    originalPrice: 5499,
    discount: 22,
    rating: 4.9,
    reviewCount: 18,
    description: 'A refined everyday shirt crafted with a relaxed silhouette and lightweight natural texture. Designed with a clean Mandarin collar and concealed front placket.',
    images: {
      primary: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1000&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Ivory', hex: '#F5F5F0' },
      { name: 'Charcoal', hex: '#2C2B29' },
      { name: 'Sand', hex: '#D8C8B8' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    material: '100% French Organic Linen',
    care: 'Machine wash cold gently. Line dry in shade.',
    stock: 24,
    badge: 'NEW SEASON',
    featured: true,
    newArrival: true,
    bestSeller: true,
    mood: 'MINIMAL'
  },
  {
    id: 'w-02',
    slug: 'relaxed-draped-midi-dress',
    name: 'Relaxed Draped Midi Dress',
    brand: 'AUREL',
    category: 'Dresses',
    subcategory: 'Midi',
    gender: 'women',
    price: 7999,
    originalPrice: 9499,
    rating: 4.8,
    reviewCount: 24,
    description: 'Effortless sleeveless midi dress boasting architectural draping and fluid movement. Crafted from responsibly sourced viscose cupro blend.',
    images: {
      primary: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Taupe', hex: '#8C8275' },
      { name: 'Black', hex: '#1A1918' }
    ],
    sizes: ['S', 'M', 'L'],
    material: '70% Viscose, 30% Cupro',
    care: 'Dry clean recommended.',
    stock: 12,
    badge: 'ESSENTIAL',
    featured: true,
    newArrival: true,
    mood: 'EFFORTLESS'
  },
  {
    id: 'w-03',
    slug: 'wide-leg-pleated-trouser',
    name: 'Wide Leg Pleated Trouser',
    brand: 'AUREL',
    category: 'Trousers',
    subcategory: 'Tailored',
    gender: 'women',
    price: 6499,
    rating: 4.7,
    reviewCount: 15,
    description: 'High-waisted tailored trousers with deep front pleats and fluid leg contouring. Features side slit pockets and horn button closure.',
    images: {
      primary: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Oatmeal', hex: '#D6CFC4' },
      { name: 'Olive Gray', hex: '#58594D' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    material: '98% Wool Crepe, 2% Elastane',
    care: 'Dry clean only.',
    stock: 18,
    featured: true,
    mood: 'MINIMAL'
  },
  {
    id: 'w-04',
    slug: 'silk-bias-cut-blouse',
    name: 'Silk Bias Cut Blouse',
    brand: 'AUREL',
    category: 'Shirts',
    subcategory: 'Silk',
    gender: 'women',
    price: 8999,
    rating: 4.9,
    reviewCount: 31,
    description: 'Luscious Mulberry silk blouse cut on the bias for a subtle sheen and gentle body contouring. Elegant keyhole back feature.',
    images: {
      primary: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1603217040745-667104b2b1d7?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Champagne', hex: '#EBE0D0' },
      { name: 'Bronze', hex: '#9E8268' }
    ],
    sizes: ['S', 'M', 'L'],
    material: '100% Mulberry Silk',
    care: 'Hand wash cold with silk detergent.',
    stock: 9,
    badge: 'LIMITED',
    featured: true,
    mood: 'EVENING'
  },
  {
    id: 'w-05',
    slug: 'sculpted-wool-blazer',
    name: 'Sculpted Wool Blazer',
    brand: 'AUREL',
    category: 'Jackets',
    subcategory: 'Blazers',
    gender: 'women',
    price: 14999,
    originalPrice: 16999,
    rating: 5.0,
    reviewCount: 42,
    description: 'A contemporary single-breasted blazer with structured shoulders, peak lapels, and soft waist definition.',
    images: {
      primary: 'https://images.unsplash.com/photo-1548624149-f1af3462b86a?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Obsidian', hex: '#171614' },
      { name: 'Warm Taupe', hex: '#6F6A61' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    material: '100% Fine Merino Wool',
    care: 'Dry clean only.',
    stock: 14,
    badge: 'BESTSELLER',
    bestSeller: true,
    mood: 'STATEMENT'
  },
  {
    id: 'w-06',
    slug: 'fine-knit-cashmere-cardigan',
    name: 'Fine Knit Cashmere Cardigan',
    brand: 'AUREL',
    category: 'Knitwear',
    subcategory: 'Cardigans',
    gender: 'women',
    price: 11999,
    rating: 4.8,
    reviewCount: 20,
    description: 'Ultra-lightweight cashmere knit styled with ribbed trim and tonal mother-of-pearl buttons. Exceptionally soft handle.',
    images: {
      primary: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Alabaster', hex: '#EAE6DF' },
      { name: 'Camel', hex: '#B89B7A' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    material: '100% Grade-A Mongolian Cashmere',
    care: 'Hand wash cold or dry clean.',
    stock: 16,
    mood: 'EVERYDAY'
  },
  {
    id: 'w-07',
    slug: 'straight-selvedge-cotton-denim',
    name: 'Straight Selvedge Cotton Denim',
    brand: 'AUREL',
    category: 'Denim',
    subcategory: 'Straight',
    gender: 'women',
    price: 5999,
    rating: 4.6,
    reviewCount: 19,
    description: 'High-rise rigid selvedge denim in an unwashed dark indigo finish. Features traditional 5-pocket construction with antique brass hardware.',
    images: {
      primary: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Raw Indigo', hex: '#1C2938' },
      { name: 'Washed Black', hex: '#333230' }
    ],
    sizes: ['26', '27', '28', '29', '30'],
    material: '100% Organic Cotton Denim',
    care: 'Wash inside out in cold water.',
    stock: 21,
    mood: 'EVERYDAY'
  },
  {
    id: 'w-08',
    slug: 'minimalist-trench-coat',
    name: 'Minimalist Belted Trench Coat',
    brand: 'AUREL',
    category: 'Jackets',
    subcategory: 'Coats',
    gender: 'women',
    price: 18999,
    originalPrice: 21999,
    rating: 4.9,
    reviewCount: 38,
    description: 'Architectural trench coat tailored in water-repellent organic cotton gabardine. Features deep storm flaps and waist belt.',
    images: {
      primary: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Warm Beige', hex: '#D2C4B0' },
      { name: 'Charcoal', hex: '#2A2927' }
    ],
    sizes: ['S', 'M', 'L'],
    material: '100% Organic Cotton Gabardine',
    care: 'Specialist dry clean only.',
    stock: 10,
    badge: 'NEW SEASON',
    newArrival: true,
    mood: 'STATEMENT'
  },
  {
    id: 'w-09',
    slug: 'asymmetric-linen-wrap-skirt',
    name: 'Asymmetric Linen Wrap Skirt',
    brand: 'AUREL',
    category: 'Skirts',
    subcategory: 'Midi',
    gender: 'women',
    price: 4999,
    rating: 4.7,
    reviewCount: 14,
    description: 'Fluid midi wrap skirt featuring an overlapping curved hem and delicate side tie fastenings.',
    images: {
      primary: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Sand', hex: '#CFC0AE' },
      { name: 'Earthy Clay', hex: '#8B6A56' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    material: '100% Linen',
    care: 'Machine wash delicate cold.',
    stock: 15,
    mood: 'EFFORTLESS'
  },
  {
    id: 'w-10',
    slug: 'tailored-double-breasted-vest',
    name: 'Tailored Double-Breasted Vest',
    brand: 'AUREL',
    category: 'Trousers',
    subcategory: 'Vests',
    gender: 'women',
    price: 5499,
    rating: 4.8,
    reviewCount: 11,
    description: 'Chic sleeveless waistcoat with refined lapels and double-breasted horn button closure.',
    images: {
      primary: 'https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1548624149-f1af3462b86a?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Ecru', hex: '#EAE5DB' },
      { name: 'Deep Olive', hex: '#3B3E2B' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    material: '80% Virgin Wool, 20% Silk',
    care: 'Dry clean only.',
    stock: 17,
    mood: 'MINIMAL'
  },
  {
    id: 'w-11',
    slug: 'ribbed-merino-turtleneck',
    name: 'Ribbed Merino Turtleneck Sweater',
    brand: 'AUREL',
    category: 'Knitwear',
    subcategory: 'Sweaters',
    gender: 'women',
    price: 6999,
    rating: 4.9,
    reviewCount: 29,
    description: 'Fine gauge high-neck sweater featuring architectural vertical ribbing and extended cuffs with thumbhole slits.',
    images: {
      primary: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Oat', hex: '#DCD4C6' },
      { name: 'Noir', hex: '#171614' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    material: '100% Extra Fine Merino Wool',
    care: 'Hand wash cold flat dry.',
    stock: 22,
    mood: 'EVERYDAY'
  },
  {
    id: 'w-12',
    slug: 'sleeveless-column-gown',
    name: 'Sleeveless Satin Column Gown',
    brand: 'AUREL',
    category: 'Dresses',
    subcategory: 'Evening',
    gender: 'women',
    price: 15999,
    rating: 5.0,
    reviewCount: 16,
    description: 'Breathtaking floor-length satin column dress with a cowl neck line and low open back detail.',
    images: {
      primary: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Bronze Gold', hex: '#A38A6B' },
      { name: 'Midnight', hex: '#13161C' }
    ],
    sizes: ['S', 'M', 'L'],
    material: '100% Heavy Silk Satin',
    care: 'Dry clean only.',
    stock: 7,
    badge: 'LIMITED',
    mood: 'EVENING'
  },
  {
    id: 'w-13',
    slug: 'oversized-poplin-shirt',
    name: 'Oversized Organic Cotton Poplin Shirt',
    brand: 'AUREL',
    category: 'Shirts',
    subcategory: 'Poplin',
    gender: 'women',
    price: 3999,
    rating: 4.6,
    reviewCount: 23,
    description: 'Crisp organic cotton poplin cut in a generous boyfriend silhouette with exaggerated square cuffs.',
    images: {
      primary: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Optic White', hex: '#FFFFFF' },
      { name: 'Sky Blue', hex: '#CFE0ED' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    material: '100% Organic Cotton Poplin',
    care: 'Machine wash warm.',
    stock: 30,
    mood: 'EFFORTLESS'
  },
  {
    id: 'w-14',
    slug: 'relaxed-wool-palazzo-pant',
    name: 'Relaxed Wool Palazzo Pant',
    brand: 'AUREL',
    category: 'Trousers',
    subcategory: 'Relaxed',
    gender: 'women',
    price: 7499,
    rating: 4.8,
    reviewCount: 19,
    description: 'Ultra-fluid wide-leg pants crafted with an elasticated drawstring waistband for maximum comfort without compromising elegance.',
    images: {
      primary: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Charcoal Gray', hex: '#3D3B38' },
      { name: 'Cream', hex: '#F2EDE4' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    material: '90% Wool, 10% Cashmere',
    care: 'Dry clean only.',
    stock: 14,
    mood: 'EVERYDAY'
  },
  {
    id: 'w-15',
    slug: 'double-faced-cashmere-coat',
    name: 'Double-Faced Cashmere Wrap Coat',
    brand: 'AUREL',
    category: 'Jackets',
    subcategory: 'Coats',
    gender: 'women',
    price: 24999,
    originalPrice: 28999,
    rating: 5.0,
    reviewCount: 50,
    description: 'Hand-stitched double-faced cashmere long coat with soft kimono sleeves and a removable self-tie belt.',
    images: {
      primary: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1548624149-f1af3462b86a?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Camel', hex: '#B3926F' },
      { name: 'Ash Taupe', hex: '#635D55' }
    ],
    sizes: ['S', 'M', 'L'],
    material: '100% Double-Faced Cashmere',
    care: 'Specialist dry clean only.',
    stock: 5,
    badge: 'ESSENTIAL',
    bestSeller: true,
    mood: 'STATEMENT'
  },

  // ==========================================
  // MEN'S COLLECTION (22 Products)
  // ==========================================
  {
    id: 'm-01',
    slug: 'relaxed-linen-resort-shirt',
    name: 'Relaxed Linen Resort Shirt',
    brand: 'AUREL',
    category: 'Shirts',
    subcategory: 'Linen',
    gender: 'men',
    price: 4499,
    originalPrice: 5299,
    rating: 4.8,
    reviewCount: 34,
    description: 'An airy camp-collar short sleeve shirt crafted from pre-washed French linen for effortless summer styling.',
    images: {
      primary: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Natural Sand', hex: '#DED6C9' },
      { name: 'Navy', hex: '#1C2536' },
      { name: 'Olive', hex: '#4A4E3D' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    material: '100% French Linen',
    care: 'Machine wash cold.',
    stock: 28,
    badge: 'NEW SEASON',
    featured: true,
    newArrival: true,
    bestSeller: true,
    mood: 'EFFORTLESS'
  },
  {
    id: 'm-02',
    slug: 'tailored-single-breasted-blazer',
    name: 'Tailored Single-Breasted Blazer',
    brand: 'AUREL',
    category: 'Jackets',
    subcategory: 'Blazers',
    gender: 'men',
    price: 15999,
    originalPrice: 18499,
    rating: 4.9,
    reviewCount: 27,
    description: 'Deconstructed wool blazer with unlined interior and soft natural shoulders. Perfectly balances formal precision with modern relaxed drape.',
    images: {
      primary: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Charcoal', hex: '#2A2927' },
      { name: 'Espresso Brown', hex: '#3B2F2A' }
    ],
    sizes: ['38R', '40R', '42R', '44R'],
    material: '100% Tropical Wool',
    care: 'Dry clean only.',
    stock: 11,
    featured: true,
    mood: 'STATEMENT'
  },
  {
    id: 'm-03',
    slug: 'pleated-single-tuck-trouser',
    name: 'Pleated Single-Tuck Trouser',
    brand: 'AUREL',
    category: 'Trousers',
    subcategory: 'Tailored',
    gender: 'men',
    price: 6999,
    rating: 4.7,
    reviewCount: 16,
    description: 'Tapered tailored trouser with front single tuck, side tab adjusters, and back welt button pockets.',
    images: {
      primary: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Stone Taupe', hex: '#A3998E' },
      { name: 'Obsidian', hex: '#171614' }
    ],
    sizes: ['30', '32', '34', '36'],
    material: '98% Wool Flannel, 2% Stretch',
    care: 'Dry clean only.',
    stock: 19,
    featured: true,
    mood: 'MINIMAL'
  },
  {
    id: 'm-04',
    slug: 'heavyweight-knit-cotton-polo',
    name: 'Heavyweight Knit Cotton Polo',
    brand: 'AUREL',
    category: 'Knitwear',
    subcategory: 'Polos',
    gender: 'men',
    price: 4999,
    rating: 4.6,
    reviewCount: 22,
    description: 'Textured open-collar knit polo spun from dense long-staple Pima cotton yarns. Ribbed hem and cuffs.',
    images: {
      primary: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Sage Green', hex: '#636D5C' },
      { name: 'Cream', hex: '#EDE6D8' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    material: '100% Pima Cotton',
    care: 'Hand wash cold flat dry.',
    stock: 25,
    mood: 'EVERYDAY'
  },
  {
    id: 'm-05',
    slug: 'minimalist-cotton-overshirt',
    name: 'Minimalist Heavy Cotton Overshirt',
    brand: 'AUREL',
    category: 'Jackets',
    subcategory: 'Overshirts',
    gender: 'men',
    price: 7499,
    rating: 4.9,
    reviewCount: 30,
    description: 'Utility-inspired shirt jacket featuring clean chest flap pockets and tonal snap fastenings.',
    images: {
      primary: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Deep Khaki', hex: '#4E493B' },
      { name: 'Ink Black', hex: '#1C1B19' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    material: '100% Heavy Twill Cotton',
    care: 'Machine wash cold gently.',
    stock: 14,
    badge: 'ESSENTIAL',
    mood: 'EVERYDAY'
  },
  {
    id: 'm-06',
    slug: 'straight-japanese-selvedge-denim',
    name: 'Straight Japanese Selvedge Denim',
    brand: 'AUREL',
    category: 'Denim',
    subcategory: 'Straight',
    gender: 'men',
    price: 7999,
    rating: 4.8,
    reviewCount: 39,
    description: 'Classic 14oz shuttle-loomed Japanese selvedge denim with button fly and leather waist patch.',
    images: {
      primary: 'https://images.unsplash.com/photo-1542272604-780c36856d62?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Dark Indigo', hex: '#1A2332' },
      { name: 'Washed Gray', hex: '#424242' }
    ],
    sizes: ['30', '31', '32', '33', '34', '36'],
    material: '100% Japanese Selvedge Cotton',
    care: 'Wash cold inside out.',
    stock: 18,
    mood: 'EVERYDAY'
  },
  {
    id: 'm-07',
    slug: 'structured-virgin-wool-coat',
    name: 'Structured Virgin Wool Overcoat',
    brand: 'AUREL',
    category: 'Jackets',
    subcategory: 'Coats',
    gender: 'men',
    price: 22999,
    originalPrice: 25999,
    rating: 5.0,
    reviewCount: 45,
    description: 'Impeccably proportioned single-breasted overcoat tailored from heavy virgin wool with back vent and horn buttons.',
    images: {
      primary: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Camel Tan', hex: '#B59473' },
      { name: 'Midnight Navy', hex: '#141A29' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    material: '100% Virgin Wool',
    care: 'Specialist dry clean.',
    stock: 8,
    badge: 'BESTSELLER',
    bestSeller: true,
    mood: 'STATEMENT'
  },
  {
    id: 'm-08',
    slug: 'relaxed-merino-crewneck-sweater',
    name: 'Relaxed Merino Crewneck Sweater',
    brand: 'AUREL',
    category: 'Knitwear',
    subcategory: 'Sweaters',
    gender: 'men',
    price: 6499,
    rating: 4.7,
    reviewCount: 21,
    description: 'Lightweight crewneck sweater featuring raglan shoulders and subtle ribbed trim detail.',
    images: {
      primary: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Muted Clay', hex: '#A37968' },
      { name: 'Charcoal Heather', hex: '#3D3B38' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    material: '100% Merino Wool',
    care: 'Hand wash cold.',
    stock: 20,
    mood: 'MINIMAL'
  },

  // ==========================================
  // ACCESSORIES (16 Products)
  // ==========================================
  {
    id: 'a-01',
    slug: 'architectural-leather-tote',
    name: 'Architectural Calfskin Leather Tote',
    brand: 'AUREL',
    category: 'Bags',
    subcategory: 'Totes',
    gender: 'accessories',
    price: 18999,
    originalPrice: 21999,
    rating: 4.9,
    reviewCount: 36,
    description: 'Structured day tote meticulously crafted from smooth Italian calfskin. Features raw suede lining and magnetic top closure.',
    images: {
      primary: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Warm Cognac', hex: '#8B5A2B' },
      { name: 'Obsidian Black', hex: '#171614' }
    ],
    sizes: ['One Size'],
    material: '100% Italian Full-Grain Calfskin',
    care: 'Wipe with soft damp cloth.',
    stock: 12,
    badge: 'NEW SEASON',
    featured: true,
    newArrival: true,
    bestSeller: true,
    mood: 'MINIMAL'
  },
  {
    id: 'a-02',
    slug: 'minimalist-chronograph-watch',
    name: 'Minimalist Steel Chronograph Watch',
    brand: 'AUREL',
    category: 'Jewelry',
    subcategory: 'Watches',
    gender: 'accessories',
    price: 14999,
    rating: 4.8,
    reviewCount: 28,
    description: 'Clean dial chronograph featuring sapphire crystal glass, Swiss quartz movement, and interchangeable vegetable-tanned leather strap.',
    images: {
      primary: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Brushed Silver', hex: '#C0C0C0' },
      { name: 'Matte Black', hex: '#222222' }
    ],
    sizes: ['40mm'],
    material: '316L Stainless Steel & Leather',
    care: 'Avoid direct prolonged water contact.',
    stock: 15,
    featured: true,
    mood: 'MINIMAL'
  },
  {
    id: 'a-03',
    slug: 'sculpted-acetate-sunglasses',
    name: 'Sculpted Acetate Sunglasses',
    brand: 'AUREL',
    category: 'Eyewear',
    subcategory: 'Sunglasses',
    gender: 'accessories',
    price: 8999,
    rating: 4.7,
    reviewCount: 19,
    description: 'Thick Japanese bio-acetate frame with subtle beveling. Fitted with 100% UV protective Zeiss mineral glass lenses.',
    images: {
      primary: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Dark Tortoiseshell', hex: '#4A3425' },
      { name: 'Smoky Black', hex: '#1C1C1C' }
    ],
    sizes: ['One Size'],
    material: '100% Bio-Acetate',
    care: 'Clean with microfiber cloth.',
    stock: 20,
    featured: true,
    mood: 'EFFORTLESS'
  },
  {
    id: 'a-04',
    slug: 'soft-leather-minimal-loafers',
    name: 'Soft Calfskin Minimal Loafers',
    brand: 'AUREL',
    category: 'Footwear',
    subcategory: 'Loafers',
    gender: 'accessories',
    price: 12999,
    originalPrice: 14999,
    rating: 4.9,
    reviewCount: 33,
    description: 'Unstructured penny loafers crafted from supple glove-tanned calfskin with stacked leather sole.',
    images: {
      primary: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Deep Espresso', hex: '#33241C' },
      { name: 'Black', hex: '#171614' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    material: '100% Glove Leather',
    care: 'Use quality leather balm.',
    stock: 16,
    badge: 'ESSENTIAL',
    mood: 'MINIMAL'
  },
  {
    id: 'a-05',
    slug: 'hand-woven-cashmere-scarf',
    name: 'Hand-Woven Cashmere Fringe Scarf',
    brand: 'AUREL',
    category: 'Scarves',
    subcategory: 'Cashmere',
    gender: 'accessories',
    price: 6999,
    rating: 4.8,
    reviewCount: 25,
    description: 'Generous rectangular scarf hand-loomed from un-dyed pure cashmere with soft raw fringe edge.',
    images: {
      primary: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1000&auto=format&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop'
    },
    colors: [
      { name: 'Natural Oatmeal', hex: '#D6CDBF' },
      { name: 'Charcoal', hex: '#2E2D2B' }
    ],
    sizes: ['200 x 70cm'],
    material: '100% Mongolian Cashmere',
    care: 'Dry clean only.',
    stock: 22,
    mood: 'EVERYDAY'
  }
];

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'col-1',
    slug: 'the-essentials',
    title: 'THE ESSENTIALS',
    subtitle: 'CORE SILHOUETTES',
    description: 'A curated wardrobe foundation built from luxurious organic linens, extra-fine merino wools, and tailored fits designed for seamless daily repetition.',
    heroImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    tag: 'PERMANENT COLLECTION',
    productSlugs: ['structured-linen-shirt', 'wide-leg-pleated-trouser', 'sculpted-wool-blazer', 'pleated-single-tuck-trouser']
  },
  {
    id: 'col-2',
    slug: 'soft-structures',
    title: 'SOFT STRUCTURES',
    subtitle: 'FLUID ARCHITECTURE',
    description: 'Exploring tension between soft organic draping and precise tailoring. Unlined blazers, bias-cut silk, and supple calfskin accessories.',
    heroImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop',
    tag: 'CAPSULE 02',
    productSlugs: ['relaxed-draped-midi-dress', 'silk-bias-cut-blouse', 'architectural-leather-tote', 'tailored-single-breasted-blazer']
  },
  {
    id: 'col-3',
    slug: 'after-hours',
    title: 'AFTER HOURS',
    subtitle: 'EVENING REFINEMENT',
    description: 'Understated elegance for twilight engagements. Heavy silk satins, deep bronze hues, and sculpted accessories made for intimate atmospheres.',
    heroImage: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1400&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop',
    tag: 'LIMITED EDITION',
    productSlugs: ['sleeveless-column-gown', 'silk-bias-cut-blouse', 'minimalist-chronograph-watch']
  },
  {
    id: 'col-4',
    slug: 'modern-tailoring',
    title: 'MODERN TAILORING',
    subtitle: 'REDEFINED PROPORTIONS',
    description: 'Precision cutting without rigid formality. Double-breasted vests, single-tuck trousers, and lightweight tropical wool blazers.',
    heroImage: 'https://images.unsplash.com/photo-1548624149-f1af3462b86a?q=80&w=1400&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop',
    tag: 'AUTUMN EDIT',
    productSlugs: ['sculpted-wool-blazer', 'tailored-double-breasted-vest', 'pleated-single-tuck-trouser']
  },
  {
    id: 'col-5',
    slug: 'weekend',
    title: 'WEEKEND',
    subtitle: 'OFF-DUTY EASE',
    description: 'Relaxed cotton poplin, selvedge denim, heavy knit polo shirts, and unstructured leather loafers tailored for modern leisure.',
    heroImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1400&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1542272604-780c36856d62?q=80&w=1000&auto=format&fit=crop',
    tag: 'LEISURE REVISED',
    productSlugs: ['oversized-poplin-shirt', 'straight-japanese-selvedge-denim', 'heavyweight-knit-cotton-polo', 'soft-leather-minimal-loafers']
  }
];
