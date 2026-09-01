import { vantaImages } from './vantaImages';

export const vantaData = {
  hero: {
    headline: ['WE CREATE', 'BRANDS', 'PEOPLE', 'REMEMBER.'],
    paragraph: 'We reject generic grids. We construct bespoke visual identities, editorial layouts, motion assets, and interactive web environments for industry leaders.',
    cta: 'EXPLORE OUR ARCHIVES',
    images: [
      { url: vantaImages.hero[0], size: 'large' },
      { url: vantaImages.hero[1], size: 'medium' },
      { url: vantaImages.hero[2], size: 'small' }
    ]
  },
  work: [
    {
      category: 'BRAND SYSTEM',
      title: 'Metropolitan Art Center',
      image: vantaImages.gallery[0]
    },
    {
      category: 'DIGITAL CAMPAIGN',
      title: 'Helio Scrolling Experience',
      image: vantaImages.gallery[1]
    },
    {
      category: 'EDITORIAL PACKAGING',
      title: 'Sartorial Fragrances',
      image: vantaImages.gallery[2]
    }
  ],
  services: [
    { name: 'Brand Identity', desc: 'Custom logos, responsive color structures, and typography guides.' },
    { name: 'Art Direction', desc: 'Directing editorial photography campaigns and corporate identity films.' },
    { name: 'Interactive Art', desc: 'Bespoke web environments coded with advanced scroll logic and animations.' },
    { name: 'Package Design', desc: 'Tactile packaging boxes utilizing heavy-stock paper and embossing.' }
  ],
  process: [
    { step: '01 Discovery', title: 'Cultural Immersion', desc: 'We research macro cultural shifts affecting your sector before drawing ideas.' },
    { step: '02 Concept', title: 'Bespoke Aesthetic', desc: 'We draft three completely original visual directions for your team to review.' },
    { step: '03 Craft', title: 'Digital Assembly', desc: 'We construct every animation, page layout, and visual mark from scratch.' }
  ],
  clients: ['Omnicorp', 'Helio cells', 'Sartorial Co', 'Forge HQ', 'Aura Capital', 'Vesper Group'],
  about: {
    title: 'We Design for the Culturally Relevant Brands.',
    desc: 'Vanta Studio is an independent creative collective. We build digital-first identities that capture attention, inspire engagement, and reshape industries.'
  },
  team: [
    { name: 'Chloe Mercer', role: 'Creative Director', image: vantaImages.team[0] },
    { name: 'Julian Cross', role: 'Art Director', image: vantaImages.team[1] }
  ]
};
