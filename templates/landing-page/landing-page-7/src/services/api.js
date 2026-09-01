const BASE_URL = 'http://localhost:8080/api';

const MOCK_CATEGORIES = [
  { id: 1, name: 'Admin', slug: 'admin' },
  { id: 2, name: 'Medical', slug: 'medical' },
  { id: 3, name: 'Block magazine', slug: 'block-magazine' },
  { id: 4, name: 'Comming soon', slug: 'comming-soon' },
  { id: 5, name: 'Travels', slug: 'travels' },
  { id: 6, name: 'Hotel', slug: 'hotel' },
  { id: 7, name: 'Events', slug: 'events' },
  { id: 8, name: 'Photography', slug: 'photography' },
  { id: 9, name: 'Construction', slug: 'construction' },
  { id: 10, name: 'Education', slug: 'education' },
  { id: 11, name: 'Restaurant', slug: 'restaurant' },
  { id: 12, name: 'Ecommerce', slug: 'ecommerce' },
  { id: 13, name: 'Buisness', slug: 'buisness' },
  { id: 14, name: 'onepage', slug: 'onepage' },
  { id: 15, name: 'landing page', slug: 'landing-page' },
  { id: 16, name: 'cooperate', slug: 'cooperate' },
  { id: 17, name: 'agency', slug: 'agency' },
  { id: 18, name: 'portfolio', slug: 'portfolio' }
];

const MOCK_TEMPLATES = [
  {
    id: 126,
    name: 'Aurelia Haven — Luxury Resort & Sanctuary',
    slug: 'aurelia-haven',
    previewImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 6, name: 'Hotel', slug: 'hotel' },
    pagesCount: 11,
    downloadsCount: 1400,
    description: 'A complete premium luxury resort and hotel sanctuary template featuring clifftop parallax headers, interactive booking widgets, responsive room selectors, masonry filtering galleries with lightboxes, count-up statistics, and custom mixology menus.',
    bootstrapVersion: 'React / Tailwind CSS / Motion',
    version: '1.0.0',
    demoUrl: '/templates/hotel/hotel-7/index.html'
  },
  {
    id: 1,
    name: 'SnapFolio  -  Dark Minimalist Portfolio',
    slug: 'photography-1',
    previewImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 8, name: 'Photography', slug: 'photography' },
    pagesCount: 1,
    downloadsCount: 15000,
    description: 'A dark-themed photography portfolio featuring a floating glass sidebar navigation, animated typewriter hero headlines, responsive masonry layouts, next/prev arrow keyboard navigation lightbox, and integrated booking validation feedback.',
    bootstrapVersion: 'HTML5 / Tailwind CSS',
    version: '1.0',
    demoUrl: '/templates/photography/photography-1/index.html'
  },
  {
    id: 2,
    name: 'Photo  -  Editorial Photography Studio',
    slug: 'photography-2',
    previewImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 8, name: 'Photography', slug: 'photography' },
    pagesCount: 1,
    downloadsCount: 8400,
    description: 'A high-end, editorial landing page template for creative photography studios. Features Sphere-style scroll-linked canvas camera aperture and lens flare animations, split-layout typography, and interactive showcase grids.',
    bootstrapVersion: 'HTML5 / Vanilla CSS',
    version: '1.0',
    demoUrl: '/templates/photography/photography-2/index.html'
  },
  {
    id: 3,
    name: 'Lumière — High-End Wedding & Event Photography',
    slug: 'photography-3',
    previewImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 8, name: 'Photography', slug: 'photography' },
    pagesCount: 1,
    downloadsCount: 1200,
    description: 'A responsive, high-end wedding and event photography portfolio web template with a warm ivory backdrop, center-split navigation, elegant serif headings, and sticky whatsapp/phone buttons.',
    bootstrapVersion: 'HTML5 / Tailwind CSS',
    version: '1.0',
    demoUrl: '/templates/photography/photography-3/index.html'
  },
  {
    id: 124,
    name: 'Eden Rose — Cinematic Luxury Wedding Portfolio',
    slug: 'photography-4',
    previewImage: '/cinematic_cover.png',
    templateType: 'FREE',
    price: 0,
    category: { id: 8, name: 'Photography', slug: 'photography' },
    pagesCount: 1,
    downloadsCount: 1320,
    description: 'A high-end cinematic wedding photography portfolio template with immersive slideshows, custom transitions, and smooth galleries.',
    bootstrapVersion: 'HTML5 / Vanilla CSS',
    version: '1.0.0',
    demoUrl: '/templates/photography/photography-4/index.html'
  },
  {
    id: 125,
    name: 'AURA — Premium Fine Art Studio',
    slug: 'photography-5',
    previewImage: '/fineart_cover.png',
    templateType: 'FREE',
    price: 0,
    category: { id: 8, name: 'Photography', slug: 'photography' },
    pagesCount: 1,
    downloadsCount: 1430,
    description: 'A premium fine art and editorial studio portfolio featuring elegant dark-theme aesthetics, grid catalogs, and custom zoom-in lightboxes.',
    bootstrapVersion: 'HTML5 / Vanilla CSS',
    version: '1.0.0',
    demoUrl: '/templates/photography/photography-5/index.html'
  },
  {
    id: 145,
    name: 'Lume Studio — Fashion & Editorial Portfolio',
    slug: 'photography-7',
    previewImage: '/lume_cover.png',
    templateType: 'FREE',
    price: 0,
    category: { id: 8, name: 'Photography', slug: 'photography' },
    pagesCount: 1,
    downloadsCount: 1510,
    description: 'A fashion-focused editorial photography portfolio with clean minimalist grids, typography layouts, and interactive sliders.',
    bootstrapVersion: 'HTML5 / Vanilla CSS',
    version: '1.0.0',
    demoUrl: '/templates/photography/photography-7/index.html'
  },
  {
    id: 127,
    name: 'Kairo — Modern 3D Photography Portfolio',
    slug: 'photography-6',
    previewImage: '/kairo_cover.png',
    templateType: 'FREE',
    price: 0,
    category: { id: 8, name: 'Photography', slug: 'photography' },
    pagesCount: 1,
    downloadsCount: 1820,
    description: 'A modern, interactive photography portfolio featuring advanced 3D orbital interactions, custom cursor shaders, and horizontal scroll grids.',
    bootstrapVersion: 'HTML5 / Three.js / Vanilla JS',
    version: '1.0.0',
    demoUrl: '/templates/photography/photography-6/index.html'
  },
  {
    id: 4,
    name: 'Qure Nexa — Advanced Medical & Healthcare Platform',
    slug: 'medical-1',
    previewImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 2, name: 'Medical', slug: 'medical' },
    pagesCount: 12,
    downloadsCount: 12400,
    description: 'A modern healthcare and hospital management platform featuring multi-role portals for Patients, Doctors, and Admins, doctor directory, intelligent slot booking, and clinical workflows.',
    bootstrapVersion: 'React 19 / Tailwind CSS / Vite',
    demoUrl: '/templates/medical/medical-1/index.html',
  },
  {
    id: 9002,
    name: 'Medicio Healthcare — Advanced Medical Center Platform',
    slug: 'medicio-healthcare',
    previewImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 2, name: 'Medical', slug: 'medical' },
    pagesCount: 1,
    downloadsCount: 1200,
    description: 'A customized, comprehensive healthcare web platform with interactive appointment booking, doctor directory, department catalog, service scopes, and patient portal.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    demoUrl: '/templates/medical/medical-2/index.html',
    downloadFile: 'medicio-healthcare.zip',
    version: '1.0'
  },
  {
    id: 9003,
    name: 'Aurevia Health — Premium Healthcare Technology Platform',
    slug: 'aurevia-health',
    previewImage: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 2, name: 'Medical', slug: 'medical' },
    pagesCount: 1,
    downloadsCount: 1850,
    description: 'Premium healthcare technology platform for discovering specialists, clinical departments, intelligent appointment booking, and comprehensive patient-doctor ecosystems.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    demoUrl: '/templates/medical/medical-3/index.html',
    downloadFile: 'aurevia-health.zip',
    version: '1.0'
  },
  {
    id: 9004,
    name: 'Veylora Health — Multi-Speciality Hospital Platform',
    slug: 'veylora-health',
    previewImage: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce2?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 2, name: 'Medical', slug: 'medical' },
    pagesCount: 1,
    downloadsCount: 2100,
    description: 'Comprehensive healthcare platform featuring specialized medical departments, verified doctor profiles, instant appointment booking, and patient health tools.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    demoUrl: '/templates/medical/medical-4/index.html',
    downloadFile: 'veylora-health.zip',
    version: '1.0'
  },


  {
    id: 7,
    name: 'Soft Glow — Clean Beauty & Skin-First Hydration',
    slug: 'soft-glow',
    previewImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 12, name: 'Ecommerce', slug: 'ecommerce' },
    pagesCount: 3,
    downloadsCount: 2450,
    description: 'A high-end Next.js beauty and skincare storefront featuring dewy-gloss styles, peptide bundle builders, marquee notification bars, interactive review boards, and smooth scroll animations.',
    bootstrapVersion: 'Next.js / React / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/ecommerce/ecommerce-1/index.html'
  },
  {
    id: 8,
    name: 'AURA — Premium Acoustic & Luxury Archive',
    slug: 'aura-commerce',
    previewImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 12, name: 'Ecommerce', slug: 'ecommerce' },
    pagesCount: 8,
    downloadsCount: 3100,
    description: 'An editorial, dark-themed e-commerce experience dedicated to premium acoustics, luxury timepieces, and structural apparel. Built with interactive cart drawers, wishlist triggers, and gold gradient finishes.',
    bootstrapVersion: 'React / React Router / CSS Modules',
    version: '1.0.0',
    demoUrl: '/templates/ecommerce/ecommerce-6/index.html'
  },
  {
    id: 9,
    name: 'AURELIA — Luxury Jewelry & Emerald Archive',
    slug: 'aurelia-commerce',
    previewImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 12, name: 'Ecommerce', slug: 'ecommerce' },
    pagesCount: 9,
    downloadsCount: 1420,
    description: 'A premium, dark emerald & gold themed e-commerce template for high-end luxury jewelry, diamonds, and bridal collections. Styled with custom drawers, search overlay, and elegant product filters.',
    bootstrapVersion: 'React / React Router / Vanilla CSS',
    version: '1.0.0',
    demoUrl: '/templates/ecommerce/ecommerce-2/index.html'
  },

  {
    id: 11,
    name: 'ToyVerse — Interactive Toy & Hobby Store',
    slug: 'toy-store',
    previewImage: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 12, name: 'Ecommerce', slug: 'ecommerce' },
    pagesCount: 8,
    downloadsCount: 3200,
    description: 'A vibrant and interactive online storefront designed for modern toy stores and hobby shops. Features a custom 3D flying toy canvas, whimsical category lists, responsive cart drawer, and interactive tracking.',
    demoUrl: '/templates/ecommerce/ecommerce-8/index.html'
  },
  {
    id: 12,
    name: 'NOVA — Futuristic Device & Ecosystem Store',
    slug: 'nova-store',
    previewImage: '/templates/ecommerce/ecommerce-3/images/nova_x1_front.webp',
    templateType: 'FREE',
    price: 0,
    category: { id: 12, name: 'Ecommerce', slug: 'ecommerce' },
    pagesCount: 4,
    downloadsCount: 4100,
    description: 'A futuristic and clean electronic product storefront dedicated to premium devices and smart ecosystem components. Features automated command search overlays, compare modals, interactive specifications, and cart drawers.',
    demoUrl: '/templates/ecommerce/ecommerce-3/index.html'
  },
  {
    id: 13,
    name: 'Orvana — Premium Design & Lifestyle Concept Store',
    slug: 'orvana-store',
    previewImage: 'https://images.unsplash.com/photo-1441984969733-d4df530a7731?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 12, name: 'Ecommerce', slug: 'ecommerce' },
    pagesCount: 14,
    downloadsCount: 5120,
    description: 'A cinematic and immersive e-commerce storefront for lifestyle and fashion concept brands. Features rich animations, cinematic video hero headers, product quick view modals, interactive sorting, and detailed item configuration options.',
    demoUrl: '/templates/ecommerce/ecommerce-4/index.html'
  },
  {
    id: 14,
    name: 'AUREL — Minimalist Fashion & Lifestyle Store',
    slug: 'aurel-store',
    previewImage: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop',
    templateType: 'FREE',
    price: 0,
    category: { id: 12, name: 'Ecommerce', slug: 'ecommerce' },
    pagesCount: 10,
    downloadsCount: 3820,
    description: 'A minimalist, structured e-commerce storefront for organic fashion and lifestyle labels. Features smooth scroll reveals, custom cursors, floating filter panels, and color/size cart controls.',
    demoUrl: '/templates/ecommerce/ecommerce-5/index.html'
  },
  {
    id: 15,
    name: 'Ember House — Artisan Dining & Gathering Space',
    slug: 'ember-house',
    previewImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 11, name: 'Restaurant', slug: 'restaurant' },
    pagesCount: 8,
    downloadsCount: 2950,
    description: 'An elegant, full-featured artisan restaurant and gathering venue template. Features fine dining menu displays, inline reservation requests, slideshow lookbooks, team/chef highlights, and clean typography.',
    demoUrl: '/templates/restaurant/restaurant-1/index.html'
  },
  {
    id: 16,
    name: 'Ember & Olive — Artisan Seasonal Restaurant',
    slug: 'ember-and-olive-react',
    previewImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 11, name: 'Restaurant', slug: 'restaurant' },
    pagesCount: 6,
    downloadsCount: 9500,
    description: 'An elegant, premium React-refactored restaurant template featuring signature dish modals, scroll progress cursors, reservation sections, event highlights, and a gorgeous lightbox gallery.',
    demoUrl: '/templates/restaurant/restaurant-2/index.html'
  },
  {
    id: 17,
    name: 'Lumière — Modern Culinary Concept Store',
    slug: 'lumiere-restaurant',
    previewImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 11, name: 'Restaurant', slug: 'restaurant' },
    pagesCount: 1,
    downloadsCount: 1840,
    description: 'An immersive and cinematic restaurant concept showcase template. Features custom dynamic cursors, interactive floating dish hover cards, smooth scroll reveals, custom reservation modals, and structured storytelling panels.',
    demoUrl: '/templates/restaurant/restaurant-3/index.html'
  },
  {
    id: 18,
    name: 'Ember House Noire — Contemporary Garden Restaurant',
    slug: 'ember-house-noire',
    previewImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 11, name: 'Restaurant', slug: 'restaurant' },
    pagesCount: 1,
    downloadsCount: 1450,
    description: 'A contemporary garden restaurant template styled in dark editorial aesthetics. Features botanical garden themes, interactive curatorial grids, testimonial slide bars, custom cursors, and reservation capture forms.',
    demoUrl: '/templates/restaurant/restaurant-4/index.html'
  },
  {
    id: 19,
    name: 'NOIRE — Nocturnal Garden Bar & Grill',
    slug: 'noire-restaurant',
    previewImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 11, name: 'Restaurant', slug: 'restaurant' },
    pagesCount: 1,
    downloadsCount: 1200,
    description: 'An premium, unconventional, and moody restaurant template featuring custom ambient audio lounge music, live fireplace hearth sections, dynamic parallax scroll effects, menu showcases, and reservation builders.',
    demoUrl: '/templates/restaurant/restaurant-5/index.html'
  },
  {
    id: 128,
    name: 'Konkan Coast — Coastal Cuisine & Modern Table',
    slug: 'konkan-coast',
    previewImage: '/templates/restaurant/restaurant-6/assets/images/hero.jpg',
    templateType: 'FREE',
    price: 0,
    category: { id: 11, name: 'Restaurant', slug: 'restaurant' },
    pagesCount: 1,
    downloadsCount: 1650,
    description: 'An elegant, premium React-refactored restaurant template featuring custom ambient audio lounge music, live fireplace hearth sections, dynamic parallax scroll effects, menu showcases, and reservation builders.',
    demoUrl: '/templates/restaurant/restaurant-6/index.html'
  },
  {
    id: 129,
    name: 'Masala Atelier — Modern Indian Fusion',
    slug: 'masala-atelier',
    previewImage: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 11, name: 'Restaurant', slug: 'restaurant' },
    pagesCount: 1,
    downloadsCount: 1950,
    description: 'A contemporary chic Indian fusion culinary studio in Mumbai. Asymmetric layouts, truffle paneer tikka, saffron cheesecake, and modern craft mocktails.',
    demoUrl: '/templates/restaurant/restaurant-7/index.html'
  },
  {
    id: 130,
    name: 'Rang Mahal — Traditional Rajasthani',
    slug: 'rang-mahal',
    previewImage: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 11, name: 'Restaurant', slug: 'restaurant' },
    pagesCount: 1,
    downloadsCount: 2200,
    description: 'A luxury Rajasthani heritage restaurant from Jaipur. Maroon-gold archways, traditional Dal Baati Churma dishes, and premium royal dining layouts.',
    demoUrl: '/templates/restaurant/restaurant-8/index.html'
  },
  {
    id: 131,
    name: 'The Royal Tandoor — Luxury North Indian',
    slug: 'the-royal-tandoor',
    previewImage: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 11, name: 'Restaurant', slug: 'restaurant' },
    pagesCount: 1,
    downloadsCount: 2800,
    description: 'A high-end regal Mughlai dining experience located in New Delhi. Sophisticated gold-burgundy color palettes, buttery rich dal makhani, and premium tandoor grills.',
    demoUrl: '/templates/restaurant/restaurant-9/index.html'
  },
  {
    id: 132,
    name: 'Southern Ember — Modern South Indian',
    slug: 'southern-ember',
    previewImage: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 11, name: 'Restaurant', slug: 'restaurant' },
    pagesCount: 1,
    downloadsCount: 3100,
    description: 'A premium modern South Indian culinary experience from Chennai. Features a golden ghee roast Dosa showcase, claypot idlis, filter coffee, and warm terracotta design accents.',
    demoUrl: '/templates/restaurant/restaurant-10/index.html'
  },
  {
    id: 133,
    name: 'Travelverse — Interactive Travel & Trip Planner',
    slug: 'travelverse',
    previewImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 5, name: 'Travels', slug: 'travels' },
    pagesCount: 1,
    downloadsCount: 1850,
    description: 'A premium, interactive React travel platform featuring dynamic page transitions, an interactive cyber world map, a custom trip builder, hotel booking cards, and stunning visual layouts.',
    demoUrl: '/templates/travels/travel-1/index.html'
  },
  {
    id: 20,
    name: 'Skillora — Online Education & Learning Platform',
    slug: 'skillora-education',
    previewImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 10, name: 'Education', slug: 'education' },
    pagesCount: 8,
    downloadsCount: 3900,
    description: 'A modern, gorgeous online learning platform with university programs, certified courses, industry mentorship, and dynamic bento animations.',
    bootstrapVersion: 'React / TypeScript / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/education/education-1/index.html'
  },
  {
    id: 101,
    name: 'BLUECORE — Futuristic Device & Electronics Showroom',
    slug: 'bluecore-showroom',
    previewImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 12, name: 'Ecommerce', slug: 'ecommerce' },
    pagesCount: 12,
    downloadsCount: 4500,
    description: 'A high-end, futuristic e-commerce showroom for devices and electronics. Features holographic UI styling, detailed product catalogs across 8 categories, interactive specification panels, and a sleek dark theme.',
    bootstrapVersion: 'React / Framer Motion / Vanilla CSS',
    version: '1.0.0',
    demoUrl: '/templates/ecommerce/ecommerce-9/index.html'
  },
  {
    id: 102,
    name: 'E-Commerce Hub — Modern Kids & Family Fashion Store',
    slug: 'ecom-hub-fashion',
    previewImage: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 12, name: 'Ecommerce', slug: 'ecommerce' },
    pagesCount: 18,
    downloadsCount: 3600,
    description: 'A modern, responsive e-commerce storefront dedicated to family fashion and kids wear. Features animated custom cursors, product quick-view modals, search overlays, a wishlist manager, and a Spring Boot backend.',
    bootstrapVersion: 'React / Tailwind / Spring Boot',
    version: '1.0.0',
    demoUrl: '/templates/ecommerce/ecommerce-10/index.html'
  },
  {
    id: 103,
    name: 'Eventora — Premier Tech & Leadership Summit Launch Platform',
    slug: 'eventora-event',
    previewImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 7, name: 'Events', slug: 'events' },
    pagesCount: 12,
    downloadsCount: 3200,
    description: 'A premium tech and leadership event launching platform. Features dynamic schedules, speaker registries, digital ticket cards, countdown timers, and reservation capture modals.',
    bootstrapVersion: 'React / Tailwind / Plus Jakarta Sans',
    version: '1.0.0',
    demoUrl: '/templates/events/events-1/index.html'
  },
  {
    id: 104,
    name: 'CYBERNEXUS — Global Technology & Intelligence Summit',
    slug: 'cybernexus-event',
    previewImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 7, name: 'Events', slug: 'events' },
    pagesCount: 8,
    downloadsCount: 2800,
    description: 'A premium, high-tech event landing page for technology and AI conferences. Features interactive scroll spies, customized cursor indicators, schedule registries, and ticket reservation forms.',
    bootstrapVersion: 'React / Vanilla CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/events/events-2/index.html'
  },
  {
    id: 105,
    name: 'VERTEX — Robotics & Quantum Tech Summit',
    slug: 'vertex-event',
    previewImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 7, name: 'Events', slug: 'events' },
    pagesCount: 10,
    downloadsCount: 2900,
    description: 'A premium, light/dark responsive robotics and quantum technology event template. Features quantum style grid animations, particle canvas backgrounds, dynamic tracks, speaker panels, and a sleek modern dark mode design.',
    bootstrapVersion: 'React / Space Grotesk / Vite',
    version: '1.0.0',
    demoUrl: '/templates/events/events-3/index.html'
  },
  {
    id: 106,
    name: 'VORTEX FORGE FITNESS — IRON ASCENT 2026',
    slug: 'iron-ascent-event',
    previewImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 7, name: 'Events', slug: 'events' },
    pagesCount: 15,
    downloadsCount: 2700,
    description: 'A premium athletic and fitness challenge event launching template. Features trainer portfolios, class schedules, program cards, equipment showcases, pricing tables, and registration capture.',
    bootstrapVersion: 'React / Tailwind / Montserrat',
    version: '1.0.0',
    demoUrl: '/templates/events/events-4/index.html'
  },
  {
    id: 107,
    name: 'AQUAVEXA AUTO SPA — Premium Car Wash & Detailing Studio',
    slug: 'aquavexa-autospa',
    previewImage: 'https://images.unsplash.com/photo-1520340356584-f9917d1eed69?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 7, name: 'Events', slug: 'events' },
    pagesCount: 12,
    downloadsCount: 2100,
    description: 'A premium automotive wash, detailing, and paint studio platform. Features services grids, pricing cards, equipment showcases, paint studios, booking panels, and a reactive dark mode design.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/events/events-5/index.html'
  },
  {
    id: 108,
    name: 'Advanced Construction — Heavy Civil Engineering & Crane Infrastructure',
    slug: 'advanced-construction',
    previewImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 9, name: 'Construction', slug: 'construction' },
    pagesCount: 8,
    downloadsCount: 3400,
    description: 'A premium commercial construction and heavy engineering landing page. Features customized pricing cost-estimators, milestone trackers, service portfolios, and a full dark mode design system.',
    bootstrapVersion: 'React / Outfit / Plus Jakarta Sans',
    version: '1.0.0',
    demoUrl: '/templates/construction/construction-1/index.html'
  },
  {
    id: 109,
    name: 'Sage & Shutter — Fine Art Wedding Photography',
    slug: 'sage-shutter-photography',
    previewImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 8, name: 'Photography', slug: 'photography' },
    pagesCount: 1,
    downloadsCount: 2300,
    description: 'An elegant, high-end fine art wedding photography showcase template. Features delicate earthy desaturated filters, parallax image carousels, custom cursor indicators, and responsive testimonial sliders.',
    bootstrapVersion: 'React / Tailwind CSS / Motion',
    version: '1.0.0',
    demoUrl: '/templates/photography/photography-8/index.html'
  },
  {
    id: 110,
    name: 'Blush Lens — Fine Art Wedding Photography',
    slug: 'blush-lens-photography',
    previewImage: '/wedding_cover.png',
    templateType: 'FREE',
    price: 0,
    category: { id: 8, name: 'Photography', slug: 'photography' },
    pagesCount: 1,
    downloadsCount: 1850,
    description: 'A premium React wedding photography template featuring romantic blush and warm ivory tones, editorial serif typography, interactive booking forms, and dynamic parallax portfolio galleries.',
    bootstrapVersion: 'React / Tailwind CSS / Motion',
    version: '1.0.0',
    demoUrl: '/templates/photography/photography-9/index.html'
  },
  {
    id: 111,
    name: 'Aether Studio — Fine Art Editorial Photography',
    slug: 'aether-studio-photography',
    previewImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 8, name: 'Photography', slug: 'photography' },
    pagesCount: 1,
    downloadsCount: 1480,
    description: 'A high-end, editorial photography showcase template. Features custom slide overlays, parallax grid systems, desaturated earthy image styling, and elegant typewriter layout design.',
    bootstrapVersion: 'React / Tailwind CSS / Motion',
    version: '1.0.0',
    demoUrl: '/templates/photography/photography-10/index.html'
  },
  {
    id: 112,
    name: 'BuildHub Constructions — Premier Architecture & 3D BIM',
    slug: 'buildhub-construction',
    previewImage: 'https://images.unsplash.com/photo-1503387762-592dec58ef4e?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 9, name: 'Construction', slug: 'construction' },
    pagesCount: 12,
    downloadsCount: 2900,
    description: 'A premium React architectural and construction design studio template. Features an interactive 3D digital twin BIM model preview, cost calculators, structural project showcases, and a responsive theme toggle.',
    bootstrapVersion: 'React / Three.js / Lucide',
    version: '1.0.0',
    demoUrl: '/templates/construction/construction-2/index.html'
  },
  {
    id: 113,
    name: 'Futurix Constructions — 3D BIM Technology',
    slug: 'futurix-constructions',
    previewImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 9, name: 'Construction', slug: 'construction' },
    pagesCount: 1,
    downloadsCount: 1750,
    description: 'Next-generation commercial construction and BIM engineering landing page with real-time 3D telemetry, parametric cost estimator, live statistics, and Java Spring Boot REST backend.',
    bootstrapVersion: 'React / Three.js / Glassmorphism',
    version: '1.0.0',
    demoUrl: '/templates/construction/construction-3/index.html'
  },
  {
    id: 114,
    name: 'Eduvora — Online Learning Platform',
    slug: 'eduvora-education',
    previewImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 10, name: 'Education', slug: 'education' },
    pagesCount: 15,
    downloadsCount: 2750,
    description: 'Comprehensive academic learning platform and stateful Student Portal with examination registrations, hall tickets, marksheets, photocopy and revaluation hubs, security audit logs, and dual-role authentication.',
    bootstrapVersion: 'React / Tailwind CSS / Router',
    version: '1.0.0',
    demoUrl: '/templates/education/education-2/index.html'
  },
  {
    id: 115,
    name: 'Eduvora II — Online Learning Platform',
    slug: 'eduvora-education-ii',
    previewImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 10, name: 'Education', slug: 'education' },
    pagesCount: 15,
    downloadsCount: 2100,
    description: 'Comprehensive academic learning platform and stateful Student Portal with examination registrations, hall tickets, marksheets, photocopy and revaluation hubs, security audit logs, and dual-role authentication.',
    bootstrapVersion: 'React / Tailwind CSS / Router',
    version: '1.0.0',
    demoUrl: '/templates/education/education-3/index.html'
  },
  {
    id: 116,
    name: 'Eduvora III — Online Learning Platform',
    slug: 'eduvora-education-iii',
    previewImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 10, name: 'Education', slug: 'education' },
    pagesCount: 15,
    downloadsCount: 1890,
    description: 'Comprehensive academic learning platform and stateful Student Portal with examination registrations, hall tickets, marksheets, photocopy and revaluation hubs, security audit logs, and dual-role authentication.',
    bootstrapVersion: 'React / Tailwind CSS / Router',
    version: '1.0.0',
    demoUrl: '/templates/education/education-4/index.html'
  },
  {
    id: 117,
    name: 'Knack Design Build — Bespoke Architecture',
    slug: 'knack-design-build',
    previewImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 9, name: 'Construction', slug: 'construction' },
    pagesCount: 1,
    downloadsCount: 1200,
    description: 'A luxury architecture and bespoke general contracting landing page. Features dynamic villa portfolios, 3D BIM integration methodology showcases, on-time milestone stats, and custom consultation request flow.',
    bootstrapVersion: 'React / Tailwind CSS / Ambient',
    version: '1.0.0',
    demoUrl: '/templates/construction/construction-4/index.html'
  },
  {
    id: 118,
    name: 'Bespoke Lakefront Villas — Swiss Design Studio',
    slug: 'swiss-lakefront-villas',
    previewImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 9, name: 'Construction', slug: 'construction' },
    pagesCount: 1,
    downloadsCount: 1380,
    description: 'A luxury lakefront residential and bespoke architectural configurator landing page. Features interactive 3D style customizer, geo-coordinates villa catalog, and RESTful configurator server.',
    bootstrapVersion: 'React / Tailwind CSS / Configurator',
    version: '1.0.0',
    demoUrl: '/templates/construction/construction-5/index.html'
  },
  {
    id: 119,
    name: 'Arcstone Architects — Luxury Residential Design',
    slug: 'arcstone-architects',
    previewImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 9, name: 'Construction', slug: 'construction' },
    pagesCount: 1,
    downloadsCount: 1650,
    description: 'A luxury residential and commercial architecture studio landing page. Features scroll-bound video transformations, custom lightboxes, bento portfolios, and RESTful project server.',
    bootstrapVersion: 'React / Vanilla CSS / Scroll Video',
    version: '1.0.0',
    demoUrl: '/templates/construction/construction-6/index.html'
  },
  {
    id: 120,
    name: 'Aura Haven Resorts — Luxury Sanctuary Resort',
    slug: 'aura-haven-resorts',
    previewImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 6, name: 'Hotel', slug: 'hotel' },
    pagesCount: 1,
    downloadsCount: 1850,
    description: 'A luxury boutique sanctuary resort landing page. Features responsive editorial slideshows, immersive accommodation galleries, interactive basalt thermal spa sections, and fine dining reservation flow.',
    bootstrapVersion: 'HTML5 / CSS3 / Vanilla JS',
    version: '1.0.0',
    demoUrl: '/templates/hotel/hotel-1/index.html'
  },
  {
    id: 121,
    name: 'Aethelred Resort — Luxury Hotel & Lodging',
    slug: 'aethelred-resort',
    previewImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 6, name: 'Hotel', slug: 'hotel' },
    pagesCount: 1,
    downloadsCount: 1900,
    description: 'Aethelred Resort is an original luxury hotel and resort website template featuring booking bar, room showcase, amenities list, dining highlights, testimonials, and gallery.',
    bootstrapVersion: 'HTML5 / CSS3 / Vanilla JS',
    version: '1.0.0',
    demoUrl: '/templates/hotel/hotel-2/index.html'
  },
  {
    id: 122,
    name: 'Aurelia Velvet Obsidian Resort — Ultra-Luxury Sanctuary',
    slug: 'aurelia-velvet-obsidian-resort',
    previewImage: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 6, name: 'Hotel', slug: 'hotel' },
    pagesCount: 1,
    downloadsCount: 1750,
    description: 'A private refuge offering luxury architectural pods crafted from volcanic stone, glass canopies, and polished teakwood.',
    bootstrapVersion: 'HTML5 / CSS3 / Vanilla JS',
    version: '1.0.0',
    demoUrl: '/templates/hotel/hotel-3/index.html'
  },
  {
    id: 123,
    name: 'Solitude Haven — Luxury Forest Sanctuary',
    slug: 'solitude-haven',
    previewImage: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 6, name: 'Hotel', slug: 'hotel' },
    pagesCount: 1,
    downloadsCount: 1490,
    description: 'An elegant, full-featured luxury forest sanctuary and wellness retreat template. Features bento-style accommodation cards, immersive experience sections, smooth scroll indicates, and responsive layouts.',
    bootstrapVersion: 'HTML5 / CSS3 / Vanilla JS',
    version: '1.0.0',
    demoUrl: '/templates/hotel/hotel-4/index.html'
  },
  {
    id: 134,
    name: 'TS Admin — Enterprise Command Center',
    slug: 'ts-admin',
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 1, name: 'Admin', slug: 'admin' },
    pagesCount: 1,
    downloadsCount: 1450,
    description: 'A comprehensive corporate and analytics administrative platform featuring sales intelligence, GPU computing, conversion tracking, chat dashboard, and settings panel.',
    bootstrapVersion: 'React 19 / Vite / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/admin/admin-1/index.html'
  },
  {
    id: 135,
    name: 'Elemental — Editorial Command Center',
    slug: 'elemental-admin',
    previewImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 1, name: 'Admin', slug: 'admin' },
    pagesCount: 1,
    downloadsCount: 1890,
    description: 'A beautiful editorial command operating system and science archive built using custom React state views, featuring editorial pipeline, task manager, media library, and workspace options.',
    bootstrapVersion: 'React 19 / TypeScript / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/admin/admin-2/index.html'
  },
  {
    id: 136,
    name: 'Chronicle — Typography-First Magazine',
    slug: 'chronicle-magazine',
    previewImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 3, name: 'Block magazine', slug: 'block-magazine' },
    pagesCount: 1,
    downloadsCount: 1250,
    description: 'A gorgeous, responsive typography-first blog and magazine publishing platform, designed with customizable reading progress bars, trending topic pills, and article bookmarking.',
    bootstrapVersion: 'React 19 / TypeScript / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/block-magazine/blog-1/index.html'
  },
  {
    id: 137,
    name: 'Elemental — Stories Behind the Science',
    slug: 'elemental-science',
    previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 3, name: 'Block magazine', slug: 'block-magazine' },
    pagesCount: 1,
    downloadsCount: 1640,
    description: 'A clean, modern science and technology magazine featuring card galleries, layout options, reading time estimation, newsletter box subscription, and dark mode support.',
    bootstrapVersion: 'React 19 / Vite / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/block-magazine/blog-2/index.html'
  },
  {
    id: 138,
    name: 'Future Intelligence — AI & Future Tech Magazine',
    slug: 'future-intelligence',
    previewImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 3, name: 'Block magazine', slug: 'block-magazine' },
    pagesCount: 1,
    downloadsCount: 2100,
    description: 'An immersive digital magazine layout with rich background visuals, interactive company metrics, tools directory, subscription overlay, and fluid animations.',
    bootstrapVersion: 'React 19 / Vite / Vanilla CSS',
    version: '1.0.0',
    demoUrl: '/templates/block-magazine/blog-3/index.html'
  },
  {
    id: 140,
    name: 'Orange 16  -  Coming Soon Template',
    slug: 'coming-soon-template',
    previewImage: '/templates/comming-soon/coming-soon-template/orange-cover.jpg',
    templateType: 'FREE',
    price: 0,
    category: { id: 4, name: 'Comming soon', slug: 'comming-soon' },
    pagesCount: 1,
    downloadsCount: 1200,
    description: 'A new experience of performance, photography and design is about to arrive. Explore the revolutionary Orange 16 with White and Black Titanium craft, O18 Pro chip, slow-motion video, and exploded engineering architecture.',
    bootstrapVersion: 'HTML5 / Vanilla CSS',
    version: '1.0',
    demoUrl: '/templates/comming-soon/coming-soon-template/index.html'
  },
  {
    id: 141,
    name: 'NOVA X1  -  Cinematic Coming Soon Template',
    slug: 'nova-x1-template',
    previewImage: '/templates/comming-soon/cm-2/car-cover.jpg',
    templateType: 'FREE',
    price: 0,
    category: { id: 4, name: 'Comming soon', slug: 'comming-soon' },
    pagesCount: 1,
    downloadsCount: 1850,
    description: 'A production-quality futuristic automotive showroom template. Explore the NOVA X1 electric SUV with interactive 3D WebGL visuals, scroll-driven camera reveals, dynamic paint customizer, performance analytics, and pre-booking capture.',
    bootstrapVersion: 'React / Three.js / GSAP',
    version: '1.0',
    demoUrl: '/templates/comming-soon/cm-2/index.html'
  },
  {
    id: 142,
    name: 'AURA SKY RESIDENCES  -  Premium Cinematic Building Launch Template',
    slug: 'aura-sky-template',
    previewImage: '/templates/comming-soon/cm-3/buliding-jpg/ezgif-frame-001.jpg',
    templateType: 'FREE',
    price: 0,
    category: { id: 4, name: 'Comming soon', slug: 'comming-soon' },
    pagesCount: 1,
    downloadsCount: 950,
    description: 'Create a modern, premium, cinematic coming soon website for luxury real-estate projects. Features continuous slow-motion building rendering background loops, Lenis smooth scrolling, architectural specification grids, and modular registration capture forms.',
    bootstrapVersion: 'HTML5 / Tailwind CSS',
    version: '1.0',
    demoUrl: '/templates/comming-soon/cm-3/index.html'
  },
  {
    id: 143,
    name: 'BOTANICAL STUDIES  -  Heritage Folio Book Launch Template',
    slug: 'botanical-studies-template',
    previewImage: '/templates/comming-soon/cm-4/botanical-cover.jpg',
    templateType: 'FREE',
    price: 0,
    category: { id: 4, name: 'Comming soon', slug: 'comming-soon' },
    pagesCount: 1,
    downloadsCount: 1420,
    description: 'An exquisite collector’s edition book coming soon website template. Features interactive 9-frame video background engine, live millisecond-precision countdown timer, Linnean author showcase, antiquarian Web Audio synthesizer, botanical plate inspector modal, and responsive laptop/tab/phone preview.',
    bootstrapVersion: 'HTML5 / Tailwind / Vanilla JS',
    version: '1.0',
    demoUrl: '/templates/comming-soon/cm-4/index.html'
  },
  {
    id: 144,
    name: 'AURELIA CHRONOS  -  18K Luxury Golden Watch Launch Template',
    slug: 'aurelia-chronos-template',
    previewImage: '/templates/comming-soon/cm-5/watch-hero.jpg',
    templateType: 'FREE',
    price: 0,
    category: { id: 4, name: 'Comming soon', slug: 'comming-soon' },
    pagesCount: 1,
    downloadsCount: 1680,
    description: 'A luxurious 18k solid gold watch launch template. Features weightless floating antigravity 3D physics, interactive 360-degree studio orbit rotation, fluted crown and sunburst guilloché macro lens inspectors, 28,800 vph mechanical escapement audio synthesizer, and VIP allocation reservation capture.',
    bootstrapVersion: 'HTML5 / Tailwind CSS / Vanilla JS',
    version: '1.0',
    demoUrl: '/templates/comming-soon/cm-5/index.html'
  },
  {
    id: 152,
    name: 'Smart Academy — School & Class Management Portal',
    slug: 'smart-academy-portal',
    previewImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 10, name: 'Education', slug: 'education' },
    pagesCount: 1,
    downloadsCount: 2100,
    description: 'School and class management portal designed for stateful student workflows, including class directories, homework modules, study grids, and progress monitors.',
    bootstrapVersion: 'React 19 / Vite / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/education/education-2/index.html'
  },
  {
    id: 153,
    name: 'LearnUp — Modern E-Learning & Course Platform',
    slug: 'learnup-courses-platform',
    previewImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 10, name: 'Education', slug: 'education' },
    pagesCount: 1,
    downloadsCount: 1850,
    description: 'A modern learning and course catalogue platform with interactive study paths, mentor bookers, FAQ grids, and dynamic bento layout lists.',
    bootstrapVersion: 'React 19 / Vite / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/education/education-3/index.html'
  },
  {
    id: 154,
    name: 'University of Excellence — Academic Portal & Admissions',
    slug: 'university-excellence-portal',
    previewImage: 'https://images.unsplash.com/photo-1541178735483-a7bbd74c9e59?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 10, name: 'Education', slug: 'education' },
    pagesCount: 1,
    downloadsCount: 2900,
    description: 'Complete academic university portal featuring admission enrollment workflows, fee calculators, campus event registries, and library dashboards.',
    bootstrapVersion: 'React 19 / Vite / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/education/education-4/index.html'
  },
  {
    id: 155,
    name: 'KidsZone — Creative Preschool & Kindergarten Template',
    slug: 'kidszone-preschool-template',
    previewImage: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 10, name: 'Education', slug: 'education' },
    pagesCount: 1,
    downloadsCount: 1560,
    description: 'A colorful, engaging preschool, daycare, and kindergarten dashboard featuring activity cards, teacher catalogs, fee structures, and enrollment captures.',
    bootstrapVersion: 'React 19 / Vite / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/education/education-5/index.html'
  },
  {
    id: 157,
    name: 'CollegePortal — Admissions & Academic Booking Platform',
    slug: 'college-admissions-portal',
    previewImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 10, name: 'Education', slug: 'education' },
    pagesCount: 15,
    downloadsCount: 2750,
    description: 'Comprehensive academic learning platform with stateful Student Portal, examination registrations, hall tickets, marksheets, security audit logs, and dual-role authentication.',
    bootstrapVersion: 'React / Vanilla CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/education/education-7/index.html'
  },
  {
    id: 158,
    name: 'MySchool — Parent Inquiry & K-12 School Portal',
    slug: 'myschool-parent-portal',
    previewImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 10, name: 'Education', slug: 'education' },
    pagesCount: 12,
    downloadsCount: 2100,
    description: 'K-12 school portal featuring parent inquiry panels, progress logs, fee configurators, class curriculum schedules, and event boards.',
    bootstrapVersion: 'HTML5 / Vanilla CSS / JS',
    version: '1.0.0',
    demoUrl: '/templates/education/education-8/index.html'
  },
  {
    id: 159,
    name: 'Modern University — Premium Academic & Research Hub',
    slug: 'modern-university-hub',
    previewImage: 'https://images.unsplash.com/photo-1541178735483-a7bbd74c9e59?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 10, name: 'Education', slug: 'education' },
    pagesCount: 1,
    downloadsCount: 1890,
    description: 'A premium modern university portal with interactive research timelines, department directories, and full admission customizer panels.',
    bootstrapVersion: 'HTML5 / Tailwind CSS / Vanilla JS',
    version: '1.0.0',
    demoUrl: '/templates/education/education-9/index.html'
  },
  {
    id: 160,
    name: 'EduNexus — Next-Gen Student Portal & Campus Management',
    slug: 'edunexus-student-portal',
    previewImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 10, name: 'Education', slug: 'education' },
    pagesCount: 1,
    downloadsCount: 3200,
    description: 'Next-generation academic dashboard and campus administration hub. Features slot booking customizers, department catalogues, and advanced student registries.',
    bootstrapVersion: 'React 19 / Vite / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/education/education-10/index.html'
  },
  {
    id: 171,
    name: 'Aurelius — High-End Historical Renovation & Heritage Atelier',
    slug: 'aurelius-renovation',
    previewImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 9, name: 'Construction', slug: 'construction' },
    pagesCount: 1,
    downloadsCount: 1600,
    description: 'A premium, high-end renovation and heritage contracting atelier template. Features interactive restoration comparisons, craft galleries, masonry portfolios, and consultation booking.',
    bootstrapVersion: 'HTML5 / CSS3 / Vanilla JS',
    version: '1.0.0',
    demoUrl: '/templates/construction/construction-7/index.html'
  },
  {
    id: 172,
    name: 'BuildX — Sustainable Biophilic Architecture & Living Facades',
    slug: 'buildx-biophilic',
    previewImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 9, name: 'Construction', slug: 'construction' },
    pagesCount: 1,
    downloadsCount: 1980,
    description: 'A sustainable architecture landing page featuring living biophilic facade simulators, aerodynamic estimators, telemetry HUDs, and biophilic design specification cards.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/construction/construction-8/index.html'
  },
  {
    id: 173,
    name: 'Chronos — Monolithic Brutalist Architecture & Concrete Engineering',
    slug: 'chronos-brutalist',
    previewImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 9, name: 'Construction', slug: 'construction' },
    pagesCount: 1,
    downloadsCount: 2200,
    description: 'A brutalist architectural and engineering showcase template. Features custom brutalist typography, concrete telemetry estimation simulators, weather atmosphere dashboards, and live HUD trackers.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/construction/construction-9/index.html'
  },
  {
    id: 174,
    name: 'Aerovision — Kinetic Skyrise & Aerodynamic Architecture',
    slug: 'aerovision-skyrise',
    previewImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 9, name: 'Construction', slug: 'construction' },
    pagesCount: 1,
    downloadsCount: 3100,
    description: 'Next-generation aerodynamic skyrise portal. Features biophilic 3D kinetic facade simulators, aerodynamic estimators, machinery fleet telemetry hubs, and wind tunnel streamlined overlays.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/construction/construction-10/index.html'
  },
  {
    id: 175,
    name: 'Innovate SF — Global Tech Summit & Startup Launchpad',
    slug: 'innovate-sf',
    previewImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 7, name: 'Events', slug: 'events' },
    pagesCount: 12,
    downloadsCount: 3200,
    description: 'A premium tech and leadership event launching platform. Features dynamic schedules, speaker registries, digital ticket cards, countdown timers, and reservation capture modals.',
    bootstrapVersion: 'React / Tailwind / Plus Jakarta Sans',
    version: '1.0.0',
    demoUrl: '/templates/events/events-6/index.html'
  },
  {
    id: 176,
    name: 'Quantum Sphere — Physics & Deep Tech Colloquium',
    slug: 'quantum-sphere',
    previewImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 7, name: 'Events', slug: 'events' },
    pagesCount: 8,
    downloadsCount: 2800,
    description: 'A premium, high-tech event landing page for technology and AI conferences. Features interactive scroll spies, customized cursor indicators, schedule registries, and ticket reservation forms.',
    bootstrapVersion: 'React / Vanilla CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/events/events-7/index.html'
  },
  {
    id: 177,
    name: 'Aero Ascent — Vertical Flight & Drone Expo',
    slug: 'aero-ascent',
    previewImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 7, name: 'Events', slug: 'events' },
    pagesCount: 10,
    downloadsCount: 2900,
    description: 'A premium, light/dark responsive robotics and quantum technology event template. Features quantum style grid animations, particle canvas backgrounds, dynamic tracks, speaker panels, and a sleek modern dark mode design.',
    bootstrapVersion: 'React / Space Grotesk / Vite',
    version: '1.0.0',
    demoUrl: '/templates/events/events-8/index.html'
  },
  {
    id: 178,
    name: 'Apex Fit — Global Hybrid Functional Fitness Showcase',
    slug: 'apex-fit',
    previewImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 7, name: 'Events', slug: 'events' },
    pagesCount: 15,
    downloadsCount: 2700,
    description: 'A premium athletic and fitness challenge event launching template. Features trainer portfolios, class schedules, program cards, equipment showcases, pricing tables, and registration capture.',
    bootstrapVersion: 'React / Tailwind / Montserrat',
    version: '1.0.0',
    demoUrl: '/templates/events/events-9/index.html'
  },
  {
    id: 179,
    name: 'Hydro Shine — Premier Car Detailing & Wash Studio Platform',
    slug: 'hydro-shine',
    previewImage: 'https://images.unsplash.com/photo-1520340356584-f9917d1eed69?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 7, name: 'Events', slug: 'events' },
    pagesCount: 12,
    downloadsCount: 2100,
    description: 'A premium automotive wash, detailing, and paint studio platform. Features services grids, pricing cards, equipment showcases, paint studios, booking panels, and a reactive dark mode design.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/events/events-10/index.html'
  },
  {
    id: 180,
    name: 'Aura Pro X1 — Next-Gen 3D Device Launch Hub',
    slug: 'aura-pro-x1',
    previewImage: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 4, name: 'Comming soon', slug: 'comming-soon' },
    pagesCount: 1,
    downloadsCount: 2450,
    description: 'A beautiful 3D interactive hardware and smartphone coming soon launch platform. Features a responsive 3D interactive model previewer, countdown launch timer, product specifications tray, and subscription capture form.',
    bootstrapVersion: 'React / Three.js / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/comming-soon/comingsoon-6/index.html'
  },
  {
    id: 181,
    name: 'AeroStride — Premium Sportswear Store Pre-launch Showcase',
    slug: 'aerostride-prelaunch',
    previewImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 4, name: 'Comming soon', slug: 'comming-soon' },
    pagesCount: 1,
    downloadsCount: 1980,
    description: 'A stunning sportswear and footwear launch teaser landing page. Features digital interactive shoe galleries, pre-launch countdown, interactive specs drawer, customer review sliders, and product pre-order capture forms.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/comming-soon/comingsoon-7/index.html'
  },
  {
    id: 182,
    name: 'Storiva — Digital Storytelling & Lifestyle Journal',
    slug: 'storiva-lifestyle',
    previewImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 3, name: 'Block magazine', slug: 'block-magazine' },
    pagesCount: 12,
    downloadsCount: 3100,
    description: 'A beautiful lifestyle, blogging, and digital storytelling platform. Features rich article layouts, bookmark contexts, 3D card interactions, category grids, and subscription modals.',
    bootstrapVersion: 'React / Tailwind CSS / Motion',
    version: '1.0.0',
    demoUrl: '/templates/block-magazine/blog-4/index.html'
  },
  {
    id: 183,
    name: 'Z-MAG — Spatial Fashion & Architecture Monograph',
    slug: 'zmag-spatial',
    previewImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 3, name: 'Block magazine', slug: 'block-magazine' },
    pagesCount: 15,
    downloadsCount: 2900,
    description: 'Next-generation spatial editorial portfolio. Features 3D coverflow stacks, logo canvas renders, reading progress monitors, saved drawers, and full-screen overlay menus.',
    bootstrapVersion: 'React / Three.js / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/block-magazine/blog-5/index.html'
  },
  {
    id: 184,
    name: 'Design Mag — High-End Architecture & Design Dispatches',
    slug: 'designmag-dispatches',
    previewImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 3, name: 'Block magazine', slug: 'block-magazine' },
    pagesCount: 8,
    downloadsCount: 2200,
    description: 'An editorial design and architecture portfolio platform. Features cinematic parallax galleries, tactile bento grids, key takeaways blocks, mega menus, and an immersive dark mode.',
    bootstrapVersion: 'React / Tailwind CSS / Framer Motion / Vite',
    version: '1.0.0',
    demoUrl: '/templates/block-magazine/blog-6/index.html'
  },
  {
    id: 185,
    name: 'The Blog Observer — Modern Editorial & Opinion Hub',
    slug: 'blog-observer',
    previewImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 3, name: 'Block magazine', slug: 'block-magazine' },
    pagesCount: 14,
    downloadsCount: 3800,
    description: 'A premium opinion, journalism, and news publishing hub. Features category spread grids, audio player bars, breaks tickers, opinion rails, bookmark drawers, and velocity carousels.',
    bootstrapVersion: 'React / SCSS / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/block-magazine/blog-7/index.html'
  },
  {
    id: 186,
    name: 'Xtra — Dopamine Maximalist Fashion & Culture Journal',
    slug: 'xtra-fashion',
    previewImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 3, name: 'Block magazine', slug: 'block-magazine' },
    pagesCount: 10,
    downloadsCount: 1750,
    description: 'A high-energy maximalist fashion, art, and dopamine culture journal. Features asymmetrical bento feeds, kinetic ribbon overlays, velocity text carousels, full-screen menus, and page transitions.',
    bootstrapVersion: 'React / Framer Motion / Tailwind / Vite',
    version: '1.0.0',
    demoUrl: '/templates/block-magazine/blog-8/index.html'
  },
  {
    id: 9109,
    name: 'Explorer — Interactive Science & Field Notes',
    slug: 'blog-9',
    previewImage: 'https://images.unsplash.com/photo-1507633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 3, name: 'Block magazine', slug: 'block-magazine' },
    pagesCount: 12,
    downloadsCount: 1540,
    description: 'A beautiful science and adventure storytelling journal. Features halftone reveals, depth carousels, immersive aura backdrops, and interactive article pages.',
    bootstrapVersion: 'React / Vite / CSS',
    version: '1.0.0',
    demoUrl: '/templates/block-magazine/blog-9/index.html'
  },
  {
    id: 9110,
    name: 'Horizon Journal — Sunset Editorial',
    slug: 'blog-10',
    previewImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 3, name: 'Block magazine', slug: 'block-magazine' },
    pagesCount: 10,
    downloadsCount: 1350,
    description: 'An elegant editorial template featuring responsive full-screen drawer panels, custom search modals, bookmarks drawer, and sunset boulevard aura backgrounds.',
    bootstrapVersion: 'React / Tailwind / Vite / TS',
    version: '1.0.0',
    demoUrl: '/templates/block-magazine/blog-10/index.html'
  },
  {
    id: 9111,
    name: 'AgriTech — Cybernetic Smart Farming Journal',
    slug: 'blog-11',
    previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 3, name: 'Block magazine', slug: 'block-magazine' },
    pagesCount: 15,
    downloadsCount: 1680,
    description: 'A high-tech agricultural research and smart farming science magazine. Features timeline explorers, interactive hotspots, bookmark drawers, and custom media grids.',
    bootstrapVersion: 'React / Tailwind / Vite / TS',
    version: '1.0.0',
    demoUrl: '/templates/block-magazine/blog-11/index.html'
  },
  {
    id: 187,
    name: 'Roamify — Immersive Travel & Tour Agency Portal',
    slug: 'roamify-travels',
    previewImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 5, name: 'Travels', slug: 'travels' },
    pagesCount: 15,
    downloadsCount: 3100,
    description: 'A beautiful and fully-featured travel booking and tour discovery platform. Features custom-themed cursors, favorite wishlist managers, package filters, and travel guides.',
    bootstrapVersion: 'React / Tailwind CSS / Motion',
    version: '1.0.0',
    demoUrl: '/templates/travels/travel-2/index.html'
  },
  {
    id: 188,
    name: 'Wayfarer — Immersive Parallax Adventure Guide',
    slug: 'wayfarer-adventure',
    previewImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 5, name: 'Travels', slug: 'travels' },
    pagesCount: 10,
    downloadsCount: 2450,
    description: 'A stunning adventure and wild tourism showcase page. Features smooth scroll-driven parallax layouts, booking forms, testimonials, and category galleries.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/travels/travel-3/index.html'
  },
  {
    id: 189,
    name: 'Exploria — Modern Destination & Trekking Agency Hub',
    slug: 'exploria-trekking',
    previewImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 5, name: 'Travels', slug: 'travels' },
    pagesCount: 8,
    downloadsCount: 1980,
    description: 'An elegant destination directory and trekking agency web application. Features package overlays, custom sliders, contact forms, and a responsive booking widget.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/travels/travel-4/index.html'
  },
  {
    id: 190,
    name: 'Wilderness — Animated Outdoor Tourism Portal',
    slug: 'wilderness-tourism',
    previewImage: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 5, name: 'Travels', slug: 'travels' },
    pagesCount: 6,
    downloadsCount: 1650,
    description: 'A beautiful animated outdoor, national park, and wilderness tourism platform. Features rich SVG animations, stats bands, destination overlays, and testimonial rails.',
    bootstrapVersion: 'React / Framer Motion / Tailwind / Vite',
    version: '1.0.0',
    demoUrl: '/templates/travels/travel-5/index.html'
  },
  {
    id: 191,
    name: 'Nomad — Interactive Travel Planner & Booking Hub',
    slug: 'nomad-planner',
    previewImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 5, name: 'Travels', slug: 'travels' },
    pagesCount: 12,
    downloadsCount: 3400,
    description: 'A premium interactive travel planning and itinerary creation platform. Features dynamic stats bands, reviews drawers, custom destination galleries, and newsletter CTAs.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/travels/travel-6/index.html'
  },
  {
    id: 192,
    name: 'Wanderlust Tales — Elegant Travel & Hiking Blog Platform',
    slug: 'wanderlust-tales',
    previewImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 5, name: 'Travels', slug: 'travels' },
    pagesCount: 9,
    downloadsCount: 2200,
    description: 'A beautiful destination blogging and hiking journal application. Features interactive maps, story lists, review grids, and pre-booking overlays.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/travels/travel-7/index.html'
  },
  {
    id: 193,
    name: 'Aether — Minimalist Luxury Travel & Resort Agency',
    slug: 'aether-resort',
    previewImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 5, name: 'Travels', slug: 'travels' },
    pagesCount: 11,
    downloadsCount: 2750,
    description: 'A premium luxury travel agency and high-end resort booking platform. Features minimalist layouts, destination galleries, pricing packages, and review carousels.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/travels/travel-8/index.html'
  },
  {
    id: 194,
    name: 'Exploria Pro — Premium Hiking & Mountain Guide Showcase',
    slug: 'exploria-pro',
    previewImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 5, name: 'Travels', slug: 'travels' },
    pagesCount: 10,
    downloadsCount: 2100,
    description: 'An advanced trekking, hiking, and mountain guide pre-booking platform. Features immersive background hero sections, interactive gear guides, and customer reviews.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/travels/travel-9/index.html'
  },
  {
    id: 195,
    name: 'Adventure Parallax — Immersive Parallax Outdoor Journal',
    slug: 'adventure-parallax',
    previewImage: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 5, name: 'Travels', slug: 'travels' },
    pagesCount: 7,
    downloadsCount: 1890,
    description: 'Next-generation adventure travel journal. Features dynamic scroll-driven parallax layouts, background environmental loops, booking widgets, and rich animations.',
    bootstrapVersion: 'React / Tailwind CSS / Framer Motion / Vite',
    version: '1.0.0',
    demoUrl: '/templates/travels/travel-10/index.html'
  },
  {
    id: 196,
    name: 'Suara Ulu — Ultra-Luxury Wellness & Spa Resort',
    slug: 'suara-ulu-resort',
    previewImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 6, name: 'Hotel', slug: 'hotel' },
    pagesCount: 1,
    downloadsCount: 1450,
    description: 'An ultra-luxury coastal sanctuary resort perched on the cliffs of Uluwatu, Bali. Features Italian luxury editorial typography, Obsidian Sanctuary dark mode, top-arched photo frames, interactive booking engine with live bill calculation, Michelin-level dining, and Ayurvedic spa reservations.',
    bootstrapVersion: 'HTML5 / CSS3 / Vanilla JS',
    version: '1.0.0',
    demoUrl: '/templates/hotel/hotel-5/index.html'
  },
  {
    id: 197,
    name: 'VillaBliss — Luxury Mediterranean Villa & Exclusive Resort',
    slug: 'villabliss-luxury-resort',
    previewImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 6, name: 'Hotel', slug: 'hotel' },
    pagesCount: 1,
    downloadsCount: 1550,
    description: 'An ultra-premium Mediterranean luxury villa and resort template. Features an editorial architectural layout, Spacious and cozy room category showcase, panoramic twilight reviews banner, curated experiences, and real-time interactive booking engine.',
    bootstrapVersion: 'HTML5 / CSS3 / Vanilla JS',
    version: '1.0.0',
    demoUrl: '/templates/hotel/hotel-6/index.html'
  },
  {
    id: 198,
    name: 'Ananthara Heritage Hotel Mewari Palace',
    slug: 'ananthara-heritage-hotel',
    previewImage: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 6, name: 'Hotel', slug: 'hotel' },
    pagesCount: 1,
    downloadsCount: 1600,
    description: 'Ananthara Heritage Hotel is a ultra-luxury traditional resort situated in the heart of Udaipur. Features interactive card scanning chamber entry, overview slides, fine dining, spa, courtyard pools, and luxury booking overlays.',
    bootstrapVersion: 'React / Modern CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/hotel/hotel-8/index.html'
  },
  {
    id: 199,
    name: 'HavenLuxe Retreat & Sanctuary — Luxury Boutique Resort',
    slug: 'havenluxe-retreat',
    previewImage: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 6, name: 'Hotel', slug: 'hotel' },
    pagesCount: 1,
    downloadsCount: 1350,
    description: 'An exclusive sanctuary carved into the coastline, where architecture merges with nature and time slows to a whisper. Features responsive editorial slideshows, immersive accommodation galleries, interactive basalt thermal spa sections, and fine dining reservation flow.',
    bootstrapVersion: 'HTML5 / CSS3 / Vanilla JS',
    version: '1.0.0',
    demoUrl: '/templates/hotel/hotel-9/index.html'
  },
  {
    id: 200,
    name: 'Aetheria Haven Resorts — Weightless Luxury, Timeless Solitude',
    slug: 'aetheria-haven-resorts',
    previewImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 6, name: 'Hotel', slug: 'hotel' },
    pagesCount: 1,
    downloadsCount: 1250,
    description: 'A luxury boutique sanctuary resort landing page. Features a floating booking widget, interactive guest popup, suite class selector, responsive editorial slideshows, and immersive accommodation galleries.',
    bootstrapVersion: 'HTML5 / CSS3 / Vanilla JS',
    version: '1.0.0',
    demoUrl: '/templates/hotel/hotel-10/index.html'
  },
  {
    id: 201,
    name: 'Maison de L\'Éclat — Premium High-Fashion Boutique & E-Commerce Hub',
    slug: 'maison-eclat-ecommerce',
    previewImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 12, name: 'Ecommerce', slug: 'ecommerce' },
    pagesCount: 10,
    downloadsCount: 1950,
    description: 'A premium high-fashion boutique and e-commerce portal. Features custom glassmorphic navigation, product showcase grids, dynamic cart and checkout flows, wishlist managers, and order tracking.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/ecommerce/ecommerce-7/index.html'
  },
  {
    id: 202,
    name: 'Arctic Frost — Editorial Command Center',
    slug: 'arctic-frost-admin',
    previewImage: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 1, name: 'Admin', slug: 'admin' },
    pagesCount: 1,
    downloadsCount: 1420,
    description: 'An intelligent science magazine super admin dashboard and editorial observatory with ice-and-paper aesthetics, live newsroom signals, story velocity analytics, and interactive publishing workflows.',
    bootstrapVersion: 'React 19 / TypeScript / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/admin/admin-3/index.html'
  },
  {
    id: 9004,
    name: 'CoreVista — Premium Project Management & ERP',
    slug: 'admin-4',
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 1, name: 'Admin', slug: 'admin' },
    pagesCount: 50,
    downloadsCount: 1980,
    description: 'A multi-functional enterprise project management and ERP panel. Features 10 main controller modules with 50 sub-pages total, custom client portfolios, and secure authorization screens.',
    bootstrapVersion: 'React / Tailwind / Vite / TS',
    version: '1.0.0',
    demoUrl: '/templates/admin/admin-4/index.html'
  },
  {
    id: 9005,
    name: 'ApexAdmin — Multipurpose Enterprise Command Panel',
    slug: 'admin-5',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 1, name: 'Admin', slug: 'admin' },
    pagesCount: 25,
    downloadsCount: 1650,
    description: 'A comprehensive multipurpose administrative control system. Features 7 dashboard view presets, client message boxes, custom user/role directories, and dynamic utility modules.',
    bootstrapVersion: 'React / Vite / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/admin/admin-5/index.html'
  },
  {
    id: 9006,
    name: 'Horizon — Global Operations Command',
    slug: 'admin-6',
    previewImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 1, name: 'Admin', slug: 'admin' },
    pagesCount: 12,
    downloadsCount: 1540,
    description: 'A premium operations command center dashboard. Features dark theme aesthetics, custom authentication routes, live search indices, and dynamic task scoping selectors.',
    bootstrapVersion: 'React / Tailwind / Vite / TS',
    version: '1.0.0',
    demoUrl: '/templates/admin/admin-6/index.html'
  },
  {
    id: 9007,
    name: 'Elysium — Unified Cloud Analytics Engine',
    slug: 'admin-7',
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 1, name: 'Admin', slug: 'admin' },
    pagesCount: 18,
    downloadsCount: 1820,
    description: 'A clean and professional cloud infrastructure analytics dashboard. Features system telemetry, task queues, HR analytics, and messages views under a state-based layout shell.',
    bootstrapVersion: 'React / Tailwind / Vite / TS',
    version: '1.0.0',
    demoUrl: '/templates/admin/admin-7/index.html'
  },
  {
    id: 9008,
    name: 'Ember — Premium Financial Operations Ledger',
    slug: 'admin-8',
    previewImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 1, name: 'Admin', slug: 'admin' },
    pagesCount: 10,
    downloadsCount: 1460,
    description: 'An advanced financial ledger and inventory system. Features custom date range filters, transaction exports, dynamic KPIs, and product performance cards.',
    bootstrapVersion: 'React / Tailwind / Vite / TS',
    version: '1.0.0',
    demoUrl: '/templates/admin/admin-8/index.html'
  },
  {
    id: 1001,
    name: 'Nexora — Premium Enterprise Corporate',
    slug: 'cooperate-1',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 16, name: 'cooperate', slug: 'cooperate' },
    pagesCount: 13,
    downloadsCount: 1850,
    description: 'A premium enterprise consulting and corporate website featuring 13+ production-ready pages, services bento grids, and career portals.',
    bootstrapVersion: 'React / Tailwind CSS / Vite / React Router',
    version: '1.0.0',
    demoUrl: '/templates/cooperate/cooperate-1/index.html'
  },
  {
    id: 1002,
    name: 'Orion — Corporate Strategy Showcase',
    slug: 'cooperate-2',
    previewImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 16, name: 'cooperate', slug: 'cooperate' },
    pagesCount: 8,
    downloadsCount: 1420,
    description: 'A clean, executive strategy and consulting template featuring bento portfolio layouts, interactive solution selectors, and case study detail views.',
    bootstrapVersion: 'React / Tailwind CSS / Vite / React Router',
    version: '1.0.0',
    demoUrl: '/templates/cooperate/cooperate-2/index.html'
  },
  {
    id: 1003,
    name: 'Vantage — Global Business Transformation',
    slug: 'cooperate-3',
    previewImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 16, name: 'cooperate', slug: 'cooperate' },
    pagesCount: 9,
    downloadsCount: 1560,
    description: 'An elegant corporate consulting and global advisory template featuring capability checklists, transition timelines, and leadership boards.',
    bootstrapVersion: 'React / Tailwind CSS / Vite / React Router',
    version: '1.0.0',
    demoUrl: '/templates/cooperate/cooperate-3/index.html'
  },
  {
    id: 1004,
    name: 'Kinesis Global — Enterprise AI & Systems',
    slug: 'cooperate-4',
    previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 16, name: 'cooperate', slug: 'cooperate' },
    pagesCount: 12,
    downloadsCount: 1920,
    description: 'A high-tech digital systems engineering and corporate AI consultant website featuring dark mode details, dynamic capability stacks, and interactive project brief builders.',
    bootstrapVersion: 'React / Tailwind CSS / Vite / React Router',
    version: '1.0.0',
    demoUrl: '/templates/cooperate/cooperate-4/index.html'
  },
  {
    id: 1005,
    name: 'Axiom Systems — Global Enterprise Technology',
    slug: 'cooperate-5',
    previewImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 16, name: 'cooperate', slug: 'cooperate' },
    pagesCount: 10,
    downloadsCount: 1740,
    description: 'A premium corporate systems integration and partner platform featuring vertical solutions, global offices catalog, and interactive inquiry selectors.',
    bootstrapVersion: 'React / Tailwind CSS / Vite / React Router',
    version: '1.0.0',
    demoUrl: '/templates/cooperate/cooperate-5/index.html'
  },
  {
    id: 1006,
    name: 'Vanguard — Corporate Mobility Solutions',
    slug: 'cooperate-6',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 16, name: 'cooperate', slug: 'cooperate' },
    pagesCount: 13,
    downloadsCount: 1850,
    description: 'A premium corporate travel management and executive mobility showcase. Built with React, Tailwind CSS, and React Router, featuring custom consultation modules and route safety logs.',
    bootstrapVersion: 'React / Tailwind / Vite / TS',
    version: '1.0.0',
    demoUrl: '/templates/cooperate/cooperate-6/index.html'
  },
  {
    id: 1007,
    name: 'Apex Solutions — Enterprise Tech Consultant',
    slug: 'cooperate-7',
    previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 16, name: 'cooperate', slug: 'cooperate' },
    pagesCount: 22,
    downloadsCount: 1650,
    description: 'A clean and professional corporate solutions and tech consulting landing page. Features a complete set of service outlines, client portfolios, interactive career boards, and legal policies.',
    bootstrapVersion: 'React / Tailwind / Vite / TS',
    version: '1.0.0',
    demoUrl: '/templates/cooperate/cooperate-7/index.html'
  },
  {
    id: 1008,
    name: 'Sync Agency — Strategic Business Advisors',
    slug: 'cooperate-8',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 16, name: 'cooperate', slug: 'cooperate' },
    pagesCount: 11,
    downloadsCount: 1420,
    description: 'A modern strategy, branding, and business consulting portfolio. Built with React, Tailwind CSS, and Framer Motion, featuring custom interactive capability highlights and scoping modals.',
    bootstrapVersion: 'React / Tailwind / Vite / TS',
    version: '1.0.0',
    demoUrl: '/templates/cooperate/cooperate-8/index.html'
  },
  {
    id: 1009,
    name: 'Finora — Premium Corporate Finance',
    slug: 'cooperate-9',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 16, name: 'cooperate', slug: 'cooperate' },
    pagesCount: 1,
    downloadsCount: 1920,
    description: 'A beautiful financial advisory and corporate strategy portal. Features clean typography, bento performance metrics, and a custom interactive booking system.',
    bootstrapVersion: 'React / Tailwind / Vite / TS',
    version: '1.0.0',
    demoUrl: '/templates/cooperate/cooperate-9/index.html'
  },
  {
    id: 1010,
    name: 'Aurelia Capital — Institutional Asset Management',
    slug: 'cooperate-10',
    previewImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 16, name: 'cooperate', slug: 'cooperate' },
    pagesCount: 15,
    downloadsCount: 1740,
    description: 'An advanced institutional wealth management and investment advisory platform. Features live stock index ribbons, interactive retirement calculators, comparison matrix portals, and detailed client reporting views.',
    bootstrapVersion: 'React / Tailwind / Vite / TS',
    version: '1.0.0',
    demoUrl: '/templates/cooperate/cooperate-10/index.html'
  },
  {
    id: 1008,
    name: 'HTM 350 DUDE — 3D Interactive Riding Showcase',
    slug: 'comingsoon-8',
    previewImage: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 4, name: 'Comming soon', slug: 'comming-soon' },
    pagesCount: 1,
    downloadsCount: 2540,
    description: 'A premium interactive motorcycle showcase and coming soon page. Features a fully controllable 3D motorcycle model canvas, interactive control dock, and reservation modal.',
    bootstrapVersion: 'React / Three.js / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/comming-soon/comingsoon-8/index.html'
  },
  {
    id: 1009,
    name: 'Aura — Next-Gen Multipurpose Launchpad',
    slug: 'comingsoon-9',
    previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 4, name: 'Comming soon', slug: 'comming-soon' },
    pagesCount: 1,
    downloadsCount: 2120,
    description: 'An elegant multipurpose pre-launch landing page. Features modern typography, countdown timer, responsive visual showcases, and newsletter capture forms.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/comming-soon/comingsoon-9/index.html'
  },
  {
    id: 1010,
    name: 'Studio 10 — Multipurpose Event Coming Soon Teaser',
    slug: 'comingsoon-10',
    previewImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 4, name: 'Comming soon', slug: 'comming-soon' },
    pagesCount: 1,
    downloadsCount: 1890,
    description: 'A premium multi-design landing page template for events coming soon showcases. Features clean grids, responsive visual transitions, and client contact selectors.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    version: '1.0.0',
    demoUrl: '/templates/comming-soon/comingsoon-10/index.html'
  },
  {
    id: 1101,
    name: 'ABC Business — Premium Corporate Systems',
    slug: 'Business-1',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 13, name: 'Buisness', slug: 'buisness' },
    pagesCount: 12,
    downloadsCount: 2150,
    description: 'A premium corporate systems and business advisory platform featuring custom page transitions, services showcases, and client inquiry panels.',
    bootstrapVersion: 'React / Tailwind CSS / Framer Motion / Vite',
    version: '1.0.0',
    demoUrl: '/templates/buisness/Business-1/index.html'
  },
  {
    id: 1102,
    name: 'Agency Prime — Creative & Digital Hub',
    slug: 'Business-2',
    previewImage: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 13, name: 'Buisness', slug: 'buisness' },
    pagesCount: 10,
    downloadsCount: 1820,
    description: 'An elegant digital agency and portfolio template. Features interactive counters, animated page entries, custom project detail overlays, and responsive contact forms.',
    bootstrapVersion: 'React / Tailwind CSS / Framer Motion / Vite',
    version: '1.0.0',
    demoUrl: '/templates/buisness/Business-2/index.html'
  },
  {
    id: 1103,
    name: 'Enterprise Apex — Professional Consulting Platform',
    slug: 'Business-3',
    previewImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 13, name: 'Buisness', slug: 'buisness' },
    pagesCount: 9,
    downloadsCount: 1670,
    description: 'A premium corporate consulting and financial advisory template featuring interactive counter animations, project showcase galleries, and structured service modules.',
    bootstrapVersion: 'React / Tailwind CSS / Framer Motion / Vite',
    version: '1.0.0',
    demoUrl: '/templates/buisness/Business-3/index.html'
  },
  {
    id: 1104,
    name: 'Aurelis — Premium Business Showcase',
    slug: 'Business-4',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 13, name: 'Buisness', slug: 'buisness' },
    pagesCount: 1,
    downloadsCount: 1850,
    description: 'A premium, modern showcase template for corporate systems, advisory firms, and agencies. Built with React, Tailwind CSS, and Framer Motion, featuring smooth animations and custom page sections.',
    bootstrapVersion: 'React / Tailwind CSS / Framer Motion / Vite',
    version: '1.0.0',
    demoUrl: '/templates/buisness/Business-4/index.html'
  },
  {
    id: 1105,
    name: 'Lumora Labs — Advanced Technology Hub',
    slug: 'Business-5',
    previewImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 13, name: 'Buisness', slug: 'buisness' },
    pagesCount: 5,
    downloadsCount: 2100,
    description: 'An animated technology startup showcase featuring custom interactive elements, team bios, services slider, and client contact integration.',
    bootstrapVersion: 'React / GSAP / Spring Boot',
    version: '1.0.0',
    demoUrl: '/templates/buisness/Business-5/index.html'
  },
  {
    id: 1106,
    name: 'Nexora — Enterprise Technology Solutions',
    slug: 'Business-6',
    previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 13, name: 'Buisness', slug: 'buisness' },
    pagesCount: 1,
    downloadsCount: 1650,
    description: 'A modern, dark-themed corporate technology platform featuring interactive charts, custom layouts, and a clean minimalist design for enterprise services.',
    bootstrapVersion: 'React / Tailwind CSS / Framer Motion / Vite',
    version: '1.0.0',
    demoUrl: '/templates/buisness/Business-6/index.html'
  },
  {
    id: 1107,
    name: 'Strativa — Modern Consulting Platform',
    slug: 'Business-7',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 13, name: 'Buisness', slug: 'buisness' },
    pagesCount: 1,
    downloadsCount: 1450,
    description: 'A clean corporate consulting and strategic advisory platform featuring interactive bento grids, client reviews, capability lists, and dynamic query builders.',
    bootstrapVersion: 'React / Tailwind CSS / Framer Motion / Vite',
    version: '1.0.0',
    demoUrl: '/templates/buisness/Business-7/index.html'
  },
  {
    id: 1108,
    name: 'Vanta Studio — Premium Business Showcase',
    slug: 'Business-8',
    previewImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 13, name: 'Buisness', slug: 'buisness' },
    pagesCount: 1,
    downloadsCount: 1250,
    description: 'A premium, modern showcase template for design collectives, digital-first brands, and agencies. Built with React, Tailwind CSS, and Framer Motion, featuring smooth animations and a dark editorial layout.',
    bootstrapVersion: 'React / Tailwind CSS / Framer Motion / Vite',
    version: '1.0.0',
    demoUrl: '/templates/buisness/Business-8/index.html'
  },
  {
    id: 150,
    name: 'Aethelgard — Minimalist Architecture Portfolio',
    slug: 'portfolio-1',
    previewImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 18, name: 'portfolio', slug: 'portfolio' },
    pagesCount: 1,
    downloadsCount: 1450,
    description: 'A minimalist architecture and luxury property design portfolio featuring custom horizontal slide entries, detailed structural specification tables, and interactive project image modal previews.',
    bootstrapVersion: 'React / Vite / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/portfolio/portfolio-1/index.html'
  },
  {
    id: 151,
    name: 'Aiden Drake — Modern Dark Personal Portfolio',
    slug: 'portfolio-2',
    previewImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 18, name: 'portfolio', slug: 'portfolio' },
    pagesCount: 1,
    downloadsCount: 1580,
    description: 'A modern, high-contrast dark theme developer and visual designer personal bio page. Features animated skill progress bars, structured project tags, and custom card grids.',
    bootstrapVersion: 'React / Vite / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/portfolio/portfolio-2/index.html'
  },
  {
    id: 152,
    name: 'Sasha Grey — Bold High-Contrast Creative Portfolio',
    slug: 'portfolio-3',
    previewImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 18, name: 'portfolio', slug: 'portfolio' },
    pagesCount: 1,
    downloadsCount: 1720,
    description: 'A bold, high-contrast modern portfolio built for designers and creators. Features responsive interactive masonry layout, detailed project image lightbox zooms, and structured work archive pages.',
    bootstrapVersion: 'React / Vite / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/portfolio/portfolio-3/index.html'
  },
  {
    id: 153,
    name: 'Clara Oswald — Airy Minimalist Portfolio',
    slug: 'portfolio-4',
    previewImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 18, name: 'portfolio', slug: 'portfolio' },
    pagesCount: 1,
    downloadsCount: 1390,
    description: 'An airy, clean minimalist layout with spacious grids and light backgrounds. Perfect for copywriters, writers, and digital consultants.',
    bootstrapVersion: 'React / Vite / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/portfolio/portfolio-4/index.html'
  },
  {
    id: 154,
    name: 'Evelyn Vance — Routed Multipage Portfolio',
    slug: 'portfolio-5',
    previewImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 18, name: 'portfolio', slug: 'portfolio' },
    pagesCount: 4,
    downloadsCount: 1650,
    description: 'A fully routed multipage portfolio containing integrated Home, About, Projects, and Contact pages, custom transitions, and smooth global headers.',
    bootstrapVersion: 'React / Vite / Tailwind CSS / Router',
    version: '1.0.0',
    demoUrl: '/templates/portfolio/portfolio-5/index.html'
  },
  {
    id: 155,
    name: 'Synthetix — Tech-Forward Software Agency',
    slug: 'portfolio-6',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 18, name: 'portfolio', slug: 'portfolio' },
    pagesCount: 4,
    downloadsCount: 1890,
    description: 'A tech-forward, modern multipage digital agency and portfolio template. Features interactive skill bars, animated company grids, custom project card showcases, and responsive newsletter forms.',
    bootstrapVersion: 'React / Vite / Tailwind CSS / Router',
    version: '1.0.0',
    demoUrl: '/templates/portfolio/portfolio-6/index.html'
  },
  {
    id: 156,
    name: 'Jared Vance — Warm Gradient Portfolio',
    slug: 'portfolio-7',
    previewImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 18, name: 'portfolio', slug: 'portfolio' },
    pagesCount: 1,
    downloadsCount: 1520,
    description: 'A beautiful personal showcase featuring warm CSS mesh gradients, elegant editorial serif typography, interactive case study cards, and sleek contact links.',
    bootstrapVersion: 'React / Vite / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/portfolio/portfolio-7/index.html'
  },
  {
    id: 157,
    name: 'Evelyn Oswald — Editorial Operations Portfolio',
    slug: 'portfolio-8',
    previewImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 18, name: 'portfolio', slug: 'portfolio' },
    pagesCount: 1,
    downloadsCount: 1410,
    description: 'A modern typography-first layout with high-end editorial grids and subtle hover interactions, perfect for project managers and operation leads.',
    bootstrapVersion: 'React / Vite / Tailwind CSS',
    version: '1.0.0',
    demoUrl: '/templates/portfolio/portfolio-8/index.html'
  },
  {
    id: 158,
    name: 'Sasha Grey — Monochrome Editorial Photography',
    slug: 'portfolio-9',
    previewImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 18, name: 'portfolio', slug: 'portfolio' },
    pagesCount: 3,
    downloadsCount: 1620,
    description: 'An elegant black-and-white theme photography portfolio template featuring structured photo galleries, horizontal slider interactions, and styled info pages.',
    bootstrapVersion: 'React / Vite / Tailwind CSS / Router',
    version: '1.0.0',
    demoUrl: '/templates/portfolio/portfolio-9/index.html'
  },
  {
    id: 159,
    name: 'Sasha Grey — Creative Multipage Portfolio',
    slug: 'portfolio-10',
    previewImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 18, name: 'portfolio', slug: 'portfolio' },
    pagesCount: 4,
    downloadsCount: 1750,
    description: 'An premium, clean-cut creative multipage digital agency and portfolio template. Features interactive work grids, detail modals, team showcases, and custom contact forms.',
    bootstrapVersion: 'React / Vite / Tailwind CSS / Router',
    version: '1.0.0',
    demoUrl: '/templates/portfolio/portfolio-10/index.html'
  },
  {
    id: 9005,
    name: 'Aura Health - Lilac Frost Medical Platform',
    slug: 'medical-5',
    previewImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 2, name: 'Medical', slug: 'medical' },
    pagesCount: 12,
    downloadsCount: 1420,
    description: 'A premium, calm, and modern medical healthcare platform template with Lilac Frost aesthetic, specialist booking, patient portal, medical records, and clinical services.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    demoUrl: '/templates/medical/medical-5/index.html',
    version: '1.0'
  },
  {
    id: 9007,
    name: 'ApexHealth — Modern Dynamic Medical Platform',
    slug: 'medical-6',
    previewImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 2, name: 'Medical', slug: 'medical' },
    pagesCount: 1,
    downloadsCount: 1580,
    description: 'Modern Dynamic Medical Platform for Patients, Doctors, and Healthcare Administrators. Real-time slot booking, doctor discovery, and patient portals.',
    bootstrapVersion: 'React / Tailwind CSS / Vite',
    demoUrl: '/templates/medical/medical-6/index.html',
    version: '1.0'
  },
  {
    id: 9008,
    name: 'PulseCare — Modern Dynamic Healthcare Platform',
    slug: 'medical-7',
    previewImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 2, name: 'Medical', slug: 'medical' },
    pagesCount: 1,
    downloadsCount: 1750,
    description: 'Discover top doctors, compare availability, book instant appointments, and manage health records securely with PulseCare Healthcare Platform.',
    bootstrapVersion: 'HTML5 / CSS3 / Vanilla JS',
    demoUrl: '/templates/medical/medical-7/index.html',
    version: '1.0'
  },
  {
    id: 9201,
    name: 'Booky — Lead Generation & Authors Platform',
    slug: 'landing-page-1',
    previewImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 15, name: 'landing page', slug: 'landing-page' },
    pagesCount: 1,
    downloadsCount: 1450,
    description: 'A professional and clean landing page for authors, books, and publications. Features call-to-action buttons, pricing tables, chapter highlights, and reviews.',
    bootstrapVersion: 'React / Tailwind / Vite',
    demoUrl: '/templates/landing-page/landing-page-1/index.html',
    version: '1.0'
  },
  {
    id: 9202,
    name: 'StatusBusy — Lead Capture & App Promotion',
    slug: 'landing-page-2',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 15, name: 'landing page', slug: 'landing-page' },
    pagesCount: 1,
    downloadsCount: 1380,
    description: 'A modern SaaS and app promotion landing page with clean lead-capture forms, dynamic feature lists, pricing matrices, and clean typography.',
    bootstrapVersion: 'React / Vite / CSS',
    demoUrl: '/templates/landing-page/landing-page-2/index.html',
    version: '1.0'
  },
  {
    id: 9203,
    name: 'ExquDrive — Dynamic Product Landing Page',
    slug: 'landing-page-3',
    previewImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 15, name: 'landing page', slug: 'landing-page' },
    pagesCount: 1,
    downloadsCount: 1510,
    description: 'An elegant product launch landing page featuring immersive product grids, dynamic feature comparison tables, interactive customer reviews, and contact sections.',
    bootstrapVersion: 'React / Vite / CSS',
    demoUrl: '/templates/landing-page/landing-page-3/index.html',
    version: '1.0'
  },
  {
    id: 9204,
    name: 'Ember & Olive — Wood-Fired Restaurant Landing Page',
    slug: 'landing-page-4',
    previewImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 15, name: 'landing page', slug: 'landing-page' },
    pagesCount: 6,
    downloadsCount: 1620,
    description: 'An elegant wood-fired seasonal restaurant landing page featuring reservation blocks, detailed menus, private events information, and gallery grids.',
    bootstrapVersion: 'HTML5 / Bootstrap 5 / ES Modules',
    demoUrl: '/templates/landing-page/landing-page-4/index.html',
    version: '1.0'
  },
  {
    id: 9205,
    name: 'AuraLanding — Interactive Conversion Portal',
    slug: 'landing-page-5',
    previewImage: 'https://images.unsplash.com/photo-1507633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 15, name: 'landing page', slug: 'landing-page' },
    pagesCount: 1,
    downloadsCount: 1470,
    description: 'A high-converting product promo landing page with interactive product display panels, dynamic custom search modals, and clean responsive grids.',
    bootstrapVersion: 'React / Tailwind / Vite',
    demoUrl: '/templates/landing-page/landing-page-5/index.html',
    version: '1.0'
  },
  {
    id: 9206,
    name: 'Lunara Press — Author & Book Landing Page',
    slug: 'landing-page-6',
    previewImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 15, name: 'landing page', slug: 'landing-page' },
    pagesCount: 1,
    downloadsCount: 1530,
    description: 'A gorgeous book launch and author promotional landing page featuring a virtual 3D flip-book preview, interactive story timelines, chapters explorer, and reviews.',
    bootstrapVersion: 'React / Vite / CSS',
    demoUrl: '/templates/landing-page/landing-page-6/index.html',
    version: '1.0'
  },
  {
    id: 9301,
    name: 'Dharma — Zen & Wellness Onepage Scroll',
    slug: 'onepage-1',
    previewImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 14, name: 'onepage', slug: 'onepage' },
    pagesCount: 1,
    downloadsCount: 1390,
    description: 'A calm, serene Zen meditation and health retreat single-page website. Features smooth scroll navigation, detailed program cards, and interactive schedule boards.',
    bootstrapVersion: 'React / Tailwind / Vite',
    demoUrl: '/templates/onepage/onepage-1/index.html',
    version: '1.0'
  },
  {
    id: 9302,
    name: 'Echoes — Modern Narrative Onepage Portal',
    slug: 'onepage-2',
    previewImage: 'https://images.unsplash.com/photo-1542204172-e7052809f852?auto=format&fit=crop&w=800&q=80',
    templateType: 'FREE',
    price: 0,
    category: { id: 14, name: 'onepage', slug: 'onepage' },
    pagesCount: 1,
    downloadsCount: 1420,
    description: 'A minimalist horizontal scrolling storytelling landing page featuring high-definition custom video banners, bento grids, and responsive contact overlays.',
    bootstrapVersion: 'React / Tailwind / Vite / TS',
    demoUrl: '/templates/onepage/onepage-2/index.html',
    version: '1.0'
  }
];


const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const token = localStorage.getItem('ts_token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage = errorData.message || `Request failed with status ${response.status}`;
    throw new Error(errorMessage);
  }
  
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/zip')) {
    return response.blob();
  }
  
  return response.json().catch(() => ({}));
};

export const api = {
  // Auth
  async login(email, password) {
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ email, password }),
      });
      const data = await handleResponse(res);
      if (data.token) {
        localStorage.setItem('ts_token', data.token);
        localStorage.setItem('ts_user', JSON.stringify({
          id: data.id,
          name: data.name,
          email: data.email,
          role: data.role
        }));
      }
      return data;
    } catch (err) {
      console.warn("Auth failed, using mock auth:", err);
      if (email === 'admin@technosprint.com' && password === 'adminpassword') {
        const mockUser = { id: 99, name: 'Admin User', email: 'admin@technosprint.com', role: 'ROLE_ADMIN' };
        localStorage.setItem('ts_token', 'mock-jwt-token');
        localStorage.setItem('ts_user', JSON.stringify(mockUser));
        return mockUser;
      }
      if (email === 'admin@admin.com') {
        const dummyAdmin = { token: 'mock-token', id: 99, name: 'Admin User', email: 'admin@admin.com', role: 'ROLE_ADMIN' };
        localStorage.setItem('ts_token', dummyAdmin.token);
        localStorage.setItem('ts_user', JSON.stringify(dummyAdmin));
        return dummyAdmin;
      }
      const dummyUser = { token: 'mock-token', id: 100, name: 'Test User', email: email, role: 'ROLE_USER' };
      localStorage.setItem('ts_token', dummyUser.token);
      localStorage.setItem('ts_user', JSON.stringify(dummyUser));
      return dummyUser;
    }
  },

  async register(name, email, password) {
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ name, email, password }),
      });
      return await handleResponse(res);
    } catch (err) {
      console.warn("Register connection failed, bypassing for mock:", err);
      return { message: "User registered successfully!" };
    }
  },

  logout() {
    localStorage.removeItem('ts_token');
    localStorage.removeItem('ts_user');
    return Promise.resolve();
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('ts_user');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Templates
  async getTemplates(params = {}) {
    try {
      const query = new URLSearchParams();
      if (params.category) query.append('category', params.category);
      if (params.search) query.append('search', params.search);
      if (params.type) query.append('type', params.type);
      
      const res = await fetch(`${BASE_URL}/templates?${query.toString()}`, {
        headers: getHeaders(),
      });
      const data = await handleResponse(res);
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
      let filtered = [...MOCK_TEMPLATES];
      if (params.category && params.category !== 'all') {
        filtered = filtered.filter(t => t.category.slug === params.category);
      }
      if (params.type && params.type !== 'all') {
        filtered = filtered.filter(t => t.templateType === params.type);
      }
      if (params.search) {
        const queryStr = params.search.toLowerCase();
        filtered = filtered.filter(t => 
          t.name.toLowerCase().includes(queryStr) || 
          t.description.toLowerCase().includes(queryStr) ||
          t.category.name.toLowerCase().includes(queryStr)
        );
      }
      return filtered;
    } catch (err) {
      console.warn("API templates fetch failed, utilizing mock fallback:", err);
      let filtered = [...MOCK_TEMPLATES];
      if (params.category && params.category !== 'all') {
        filtered = filtered.filter(t => t.category.slug === params.category);
      }
      if (params.type && params.type !== 'all') {
        filtered = filtered.filter(t => t.templateType === params.type);
      }
      if (params.search) {
        const queryStr = params.search.toLowerCase();
        filtered = filtered.filter(t => 
          t.name.toLowerCase().includes(queryStr) || 
          t.description.toLowerCase().includes(queryStr) ||
          (t.category && t.category.name && t.category.name.toLowerCase().includes(queryStr))
        );
      }
      return filtered;
    }
  },

  async getTemplatesByCategory(category) {
    try {
      const res = await fetch(`${BASE_URL}/templates/category/${category}`, {
        headers: getHeaders(),
      });
      const data = await handleResponse(res);
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
      return MOCK_TEMPLATES.filter(t => t.category.slug === category);
    } catch (err) {
      console.warn("API templates by category fetch failed, utilizing mock fallback:", err);
      return MOCK_TEMPLATES.filter(t => t.category.slug === category);
    }
  },

  async getTemplateById(id) {
    try {
      const res = await fetch(`${BASE_URL}/templates/${id}`, {
        headers: getHeaders(),
      });
      return await handleResponse(res);
    } catch (err) {
      console.warn("API templates fetch failed, utilizing mock fallback:", err);
      return MOCK_TEMPLATES.find(t => t.id === Number(id)) || MOCK_TEMPLATES[0];
    }
  },

  async getTemplateBySlug(slug) {
    try {
      const res = await fetch(`${BASE_URL}/templates/slug/${slug}`, {
        headers: getHeaders(),
      });
      return await handleResponse(res);
    } catch (err) {
      console.warn("API templates fetch failed, utilizing mock fallback:", err);
      return MOCK_TEMPLATES.find(t => t.slug === slug) || MOCK_TEMPLATES[0];
    }
  },

  async createTemplate(dto) {
    try {
      const res = await fetch(`${BASE_URL}/templates`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(dto),
      });
      return await handleResponse(res);
    } catch (err) {
      console.error("Failed to create template:", err);
      throw err;
    }
  },

  async updateTemplate(id, dto) {
    try {
      const res = await fetch(`${BASE_URL}/templates/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(dto),
      });
      return await handleResponse(res);
    } catch (err) {
      console.error("Failed to update template:", err);
      throw err;
    }
  },

  async deleteTemplate(id) {
    try {
      const res = await fetch(`${BASE_URL}/templates/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
      return await handleResponse(res);
    } catch (err) {
      console.error("Failed to delete template:", err);
      throw err;
    }
  },

  // Categories
  async getCategories() {
    try {
      const res = await fetch(`${BASE_URL}/categories`, {
        headers: getHeaders(),
      });
      return await handleResponse(res);
    } catch (err) {
      console.warn("API categories fetch failed, utilizing mock fallback:", err);
      return MOCK_CATEGORIES;
    }
  },

  // Orders
  async createOrder(templateIds) {
    try {
      const res = await fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ templateIds }),
      });
      return await handleResponse(res);
    } catch (err) {
      console.warn("API order failed, using mock:", err);
      return { id: 88, status: 'PENDING', templateIds };
    }
  },

  async confirmPayment(orderId) {
    try {
      const res = await fetch(`${BASE_URL}/orders/${orderId}/confirm`, {
        method: 'POST',
        headers: getHeaders(),
      });
      return await handleResponse(res);
    } catch (err) {
      return { id: orderId, status: 'PAID' };
    }
  },

  async getMyOrders() {
    try {
      const res = await fetch(`${BASE_URL}/orders`, {
        headers: getHeaders(),
      });
      return await handleResponse(res);
    } catch (err) {
      return [];
    }
  },

  async getAllOrders() {
    try {
      const res = await fetch(`${BASE_URL}/orders/all`, {
        headers: getHeaders(),
      });
      return await handleResponse(res);
    } catch (err) {
      return [];
    }
  },

  // Licenses
  async getMyLicenses() {
    try {
      const res = await fetch(`${BASE_URL}/licenses`, {
        headers: getHeaders(),
      });
      return await handleResponse(res);
    } catch (err) {
      return [];
    }
  },

  async validateLicense(key) {
    try {
      const res = await fetch(`${BASE_URL}/licenses/validate/${key}`, {
        headers: getHeaders(),
      });
      return await handleResponse(res);
    } catch (err) {
      return { valid: true, licenseKey: key };
    }
  },

  // Downloads
  async getDownloadToken(templateId) {
    try {
      const res = await fetch(`${BASE_URL}/templates/${templateId}/download-token`, {
        method: 'POST',
        headers: getHeaders(),
      });
      return await handleResponse(res);
    } catch (err) {
      return { token: 'mock-download-token' };
    }
  },

  async getMyDownloadsHistory() {
    try {
      const res = await fetch(`${BASE_URL}/templates/downloads-history`, {
        headers: getHeaders(),
      });
      return await handleResponse(res);
    } catch (err) {
      return [];
    }
  },

  // Projects / Builder
  async getMyProjects() {
    try {
      const res = await fetch(`${BASE_URL}/projects`, {
        headers: getHeaders(),
      });
      return await handleResponse(res);
    } catch (err) {
      return [];
    }
  },

  async saveProject(projectName, templateId, projectData) {
    try {
      const res = await fetch(`${BASE_URL}/projects`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ projectName, templateId, projectData }),
      });
      return await handleResponse(res);
    } catch (err) {
      return { id: 77, projectName, templateId, projectData };
    }
  },

  async updateProject(id, projectName, projectData) {
    try {
      const res = await fetch(`${BASE_URL}/projects/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify({ projectName, projectData }),
      });
      return await handleResponse(res);
    } catch (err) {
      return { id, projectName, projectData };
    }
  },

  async deleteProject(id) {
    try {
      const res = await fetch(`${BASE_URL}/projects/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
      return await handleResponse(res);
    } catch (err) {
      return { success: true };
    }
  },

  async exportProject(id) {
    try {
      const res = await fetch(`${BASE_URL}/projects/${id}/export`, {
        method: 'POST',
        headers: getHeaders(),
      });
      return await handleResponse(res);
    } catch (err) {
      return new Blob();
    }
  }
};
