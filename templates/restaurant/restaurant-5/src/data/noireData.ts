import { NoireMenuItem, NoireEvent, NoireNightPanel, NoireGalleryItem, NoireConfig } from '../types';

import heroBg from '../assets/images/noire_hero_bg_1787117274796.jpg';
import roomInterior from '../assets/images/noire_room_interior_1787117401876.jpg';
import fireGrill from '../assets/images/noire_fire_grill_1787118022024.jpg';
import signatureSeabass from '../assets/images/noire_signature_seabass_1787118395954.jpg';

export const NOIRE_IMAGES = {
  heroBg,
  roomInterior,
  fireGrill,
  signatureSeabass,
  chefArjun: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=85',
  prawn: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
  blackGarlicChicken: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
  smokedPaneer: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
  octopus: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  ribeye: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
  tartare: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
  truffleMushroom: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
  darkChocolate: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80',
  cocktail1: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
  cocktail2: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
  nightlife: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
};

export const NOIRE_MENU_ITEMS: NoireMenuItem[] = [
  // 01 SMALL PLATES
  {
    id: 'sp-1',
    code: 'SP-01',
    name: 'CHARRED PRAWN',
    category: '01 SMALL PLATES',
    ingredients: 'chilli · citrus · coriander',
    price: '₹780',
    priceNum: 780,
    image: NOIRE_IMAGES.prawn,
    description: 'Tiger prawns seared over binchotan charcoal, tossed in fermented smoked chilli oil and hand-crushed kaffir lime.',
  },
  {
    id: 'sp-2',
    code: 'SP-02',
    name: 'BEEF TARTARE & SMOKED EGG',
    category: '01 SMALL PLATES',
    ingredients: 'hand-cut tenderloin · charred shallot · charcoal emulsion',
    price: '₹840',
    priceNum: 840,
    image: NOIRE_IMAGES.tartare,
    description: 'Hand-chopped aged tenderloin with pickled mustard seeds, bone marrow mayo, and oak-smoked cured egg yolk.',
  },
  {
    id: 'sp-3',
    code: 'SP-03',
    name: 'CHARRED BURRATA',
    category: '01 SMALL PLATES',
    ingredients: 'charred fig · roasted hazelnut · aged balsamic vinegar',
    price: '₹720',
    priceNum: 720,
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19655?auto=format&fit=crop&w=800&q=80',
    description: 'Creamy artisanal burrata flash-torched, served over wood-grilled mission figs and 15-year aged balsamic.',
  },

  // 02 FIRE
  {
    id: 'fr-1',
    code: 'FR-01',
    name: 'BLACK GARLIC CHICKEN',
    category: '02 FIRE',
    ingredients: 'roasted garlic · herbs · black pepper jus',
    price: '₹690',
    priceNum: 690,
    image: NOIRE_IMAGES.blackGarlicChicken,
    description: 'Corn-fed free range chicken marinated for 24 hours in aged black garlic paste, roasted over glowing embers.',
  },
  {
    id: 'fr-2',
    code: 'FR-02',
    name: 'PRIME RIBEYE 30-DAY DRY AGED',
    category: '02 FIRE',
    ingredients: 'charred bone marrow · smoked salt · tallow butter',
    price: '₹1,850',
    priceNum: 1850,
    image: NOIRE_IMAGES.ribeye,
    isSignature: true,
    description: '300g cut of Angus prime ribeye grilled on open wood fire, finished with whipped tallow butter.',
  },
  {
    id: 'fr-3',
    code: 'FR-03',
    name: 'SMOKED PANEER',
    category: '02 FIRE',
    ingredients: 'charcoal · pepper · cream · roasted fenugreek',
    price: '₹620',
    priceNum: 620,
    image: NOIRE_IMAGES.smokedPaneer,
    description: 'Hand-pressed cottage cheese smoked over applewood charcoal, served with reduced roasted fenugreek cream.',
  },

  // 03 SEA
  {
    id: 'se-1',
    code: 'SE-01',
    name: 'CHARRED SEA BASS',
    category: '03 SEA',
    ingredients: 'citrus · chilli · smoked butter',
    price: '₹1,150',
    priceNum: 1150,
    image: NOIRE_IMAGES.signatureSeabass,
    isSignature: true,
    description: 'Wild sea bass fillet with crispy blistered skin, emulsion of charred green chilli, and brown lemon butter.',
  },
  {
    id: 'se-2',
    code: 'SE-02',
    name: 'CHARRED OCTOPUS',
    category: '03 SEA',
    ingredients: 'smoked paprika · ink aioli · crispy potatoes',
    price: '₹1,280',
    priceNum: 1280,
    image: NOIRE_IMAGES.octopus,
    description: 'Spanish octopus leg slow-braised then glazed over open fire, served over squid ink aioli and sea salt potatoes.',
  },

  // 04 VEGETABLE
  {
    id: 'vg-1',
    code: 'VG-01',
    name: 'TRUFFLE MUSHROOM TART',
    category: '04 VEGETABLE',
    ingredients: 'wild mushrooms · black truffle · crisp pastry',
    price: '₹750',
    priceNum: 750,
    image: NOIRE_IMAGES.truffleMushroom,
    description: 'Slow-roasted wild maitake and chanterelle mushrooms on delicate rye tart shell with shaved black truffle.',
  },
  {
    id: 'vg-2',
    code: 'VG-02',
    name: 'COAL-ROASTED CAULIFLOWER',
    category: '04 VEGETABLE',
    ingredients: 'tahini glaze · pomegranate · toasted pine nuts',
    price: '₹640',
    priceNum: 640,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    description: 'Whole head of heirloom cauliflower roasted directly on white hot coals with black sesame tahini.',
  },

  // 05 SWEET
  {
    id: 'sw-1',
    code: 'SW-01',
    name: 'NOIR 70% DARK CHOCOLATE',
    category: '05 SWEET',
    ingredients: 'smoked salt · olive oil gelato · cocoa nib wafer',
    price: '₹580',
    priceNum: 580,
    image: NOIRE_IMAGES.darkChocolate,
    description: 'Valrhona single-origin dark chocolate ganache, sea salt flakes, and cold-pressed extra virgin olive oil gelato.',
  },
  {
    id: 'sw-2',
    code: 'SW-02',
    name: 'SMOKED VANILLA & FIG SOUFFLÉ',
    category: '05 SWEET',
    ingredients: 'bourbon vanilla · caramelized fig syrup',
    price: '₹620',
    priceNum: 620,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    description: 'Hot soufflé infused with oak-smoked Madagascan vanilla bean and served with warm mission fig reduction.',
  },
];

export const NOIRE_NIGHT_PANELS: NoireNightPanel[] = [
  {
    id: 'panel-01',
    number: '01',
    title: 'DINNER',
    subtitle: '19:00 — 23:00',
    image: NOIRE_IMAGES.heroBg,
    tagline: 'Gastronomy cooked over live wood fire, paired with architectural ambiance.',
  },
  {
    id: 'panel-02',
    number: '02',
    title: 'DRINKS',
    subtitle: '19:00 — 01:00',
    image: NOIRE_IMAGES.cocktail1,
    tagline: 'Artisanal nocturnal cocktails featuring house-clarified spirits and smoky infusions.',
  },
  {
    id: 'panel-03',
    number: '03',
    title: 'MUSIC',
    subtitle: '21:30 — 01:00',
    image: NOIRE_IMAGES.nightlife,
    tagline: 'Deep melodic house and vinyl selections curated by resident sound designers.',
  },
  {
    id: 'panel-04',
    number: '04',
    title: 'PRIVATE TABLE',
    subtitle: 'BY RESERVATION',
    image: NOIRE_IMAGES.roomInterior,
    tagline: 'Exclusive 12-seat soundproof dining suite overlooking Chennai skyline.',
  },
];

export const NOIRE_CONFIG: NoireConfig = {
  name: 'NOIRÉ',
  tagline: 'URBAN SUPPER CLUB',
  city: 'CHENNAI',
  coordinates: '13.0827° N / 80.2707° E',
  address: 'NO. 42 KHAADER NAWAZ KHAN ROAD, NUNGAMBAKKAM, CHENNAI 600006',
  phone: '+91 44 8920 1100',
  email: 'reservations@noire-supperclub.com',
  hours: '19:00 — 01:00',
  closedDay: 'CLOSED MONDAYS',
  socials: {
    instagram: 'https://instagram.com/noire.supperclub',
    spotify: 'https://spotify.com',
    vimeo: 'https://vimeo.com',
  },
};

// Helper function to format dynamic event dates relative to current week
const getNextDayOfWeek = (dayOfWeekIndex: number): string => {
  const today = new Date();
  const resultDate = new Date(today);
  const currentDay = today.getDay();
  let distance = dayOfWeekIndex - currentDay;
  if (distance < 0) distance += 7;
  resultDate.setDate(today.getDate() + distance);
  const monthStr = resultDate.toLocaleString('default', { month: 'short' }).toUpperCase();
  return `${resultDate.getDate()} ${monthStr}`;
};

export const NOIRE_EVENTS: NoireEvent[] = [
  {
    id: 'evt-1',
    day: 'FRIDAY',
    date: getNextDayOfWeek(5),
    title: 'LIVE FIRE DINNER',
    time: '19:30',
    image: NOIRE_IMAGES.fireGrill,
    description: 'A 7-course tasting menu prepared exclusively over open binchotan charcoal hearths.',
  },
  {
    id: 'evt-2',
    day: 'SATURDAY',
    date: getNextDayOfWeek(6),
    title: 'AFTER DARK SESSION',
    time: '21:00',
    image: NOIRE_IMAGES.cocktail2,
    description: 'Late night mixology showcase with guest bartenders from Tokyo and London.',
  },
  {
    id: 'evt-3',
    day: 'SUNDAY',
    date: getNextDayOfWeek(0),
    title: "CHEF'S TABLE",
    time: '19:00',
    image: NOIRE_IMAGES.chefArjun,
    description: 'Chef Arjun Rao hosts an intimate 10-guest interactive culinary breakdown.',
  },
];

export const NOIRE_GALLERY: NoireGalleryItem[] = [
  {
    id: 'gal-1',
    title: 'THE ROOM',
    caption: 'Architectural concrete & moody spotlighting',
    aspect: 'landscape',
    image: NOIRE_IMAGES.roomInterior,
  },
  {
    id: 'gal-2',
    title: 'THE TABLE',
    caption: 'Curated stoneware and dark linen',
    aspect: 'portrait',
    image: NOIRE_IMAGES.signatureSeabass,
  },
  {
    id: 'gal-3',
    title: 'THE FIRE',
    caption: 'Live open hearth kitchen',
    aspect: 'square',
    image: NOIRE_IMAGES.fireGrill,
  },
  {
    id: 'gal-4',
    title: 'THE NIGHT',
    caption: 'Nocturnal ambiance overlooking Chennai',
    aspect: 'full',
    image: NOIRE_IMAGES.heroBg,
  },
];
