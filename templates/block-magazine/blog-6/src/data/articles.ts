import { PRIMARY_IMAGES, FALLBACK_PATTERNS } from './assets';

export interface ArticleData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categoryTheme: 'blue' | 'violet' | 'coral' | 'lime' | 'amber';
  readTime: string;
  publishDate: string;
  issueVol: string;
  tag?: string;
  isTrending?: boolean;
  coverImage: string;
  imageCaption?: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  audioTrack?: {
    duration: string;
    narrator: string;
  };
  quote: {
    text: string;
    author: string;
  };
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      secondaryImage?: string;
      imageCaption?: string;
    }[];
    conclusion: string;
  };
}

export const ARTICLES_DATA: Record<string, ArticleData> = {
  'neural-renaissance': {
    id: 'neural-renaissance',
    slug: 'neural-renaissance',
    title: 'The Neural Renaissance: How Spatial Computing & Photonic Crystals Redefine Built Reality',
    subtitle: 'Exploring the boundary between structural mechanics and perceptual illusion in next-generation architectural surfaces and ambient display skins.',
    category: 'Spatial Realism',
    categoryTheme: 'blue',
    readTime: '9 min read',
    publishDate: 'August 22, 2026',
    issueVol: 'Issue 08 Special',
    tag: 'Cover Feature',
    isTrending: true,
    coverImage: PRIMARY_IMAGES.neuralRenaissance,
    imageCaption: 'Photonic glass pavilion installation exploring real-time light refraction.',
    author: {
      name: 'Dr. Linnea Holst',
      role: 'Principal Spatial Theorist at Studio Morphic',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80',
      bio: 'Dr. Linnea Holst investigates the phenomenology of transparent architecture and generative optic environments.',
    },
    audioTrack: {
      duration: '7:45 min',
      narrator: 'Studio Synthesized Voice 04',
    },
    quote: {
      text: 'When photons are guided through microscopic crystal matrices, a wall ceases to be a barrier and transforms into a living aperture of light.',
      author: 'Dr. Linnea Holst',
    },
    content: {
      intro: 'In an era where the digital overlay has merged irrevocably with our physical perimeter, architecture is no longer static concrete and steel. We are witnessing the dawn of computational materials: surfaces that compute, breathe, and adapt their opacity in response to human presence and celestial cycles.',
      sections: [
        {
          heading: '1. Beyond Static Enclosures: The Kinetic Surface',
          body: [
            'For centuries, architectural durability was defined by permanence. A stone column stood invariant against wind and sun. Today, through nanoscale photonic arrays, structural surfaces can alter their refractive index at will, allowing buildings to harvest solar energy dynamically while morphing from opaque monoliths into crystal-clear panoramas.',
            'This shift fundamentally redefines our cognitive relationship with space. The room is no longer an inert container, but a responsive medium that actively orchestrates daylight and acoustic serenity.',
          ],
          secondaryImage: PRIMARY_IMAGES.heroPavilion,
          imageCaption: 'Parametric cantilevered glass structure overlooking the Nordic fjords.',
        },
        {
          heading: '2. The Optical Geometry of Spatial Computing',
          body: [
            'With the maturation of lightweight spatial headsets and retinal projection, our built environments must accommodate dual layers of reality: physical mass and synthetic light fields. Spatial architects are now designing spaces with deliberate optical anchor points—tactile geometries designed specifically to harmonize with generative holographic layers.',
            'The result is a harmonious equilibrium: tactile textures ground human sensation, while virtual dimensions expand cognitive possibilities without sensory clutter.',
          ],
          secondaryImage: PRIMARY_IMAGES.generativeGlass,
          imageCaption: 'Prismatic light dispersion test across spatial surfaces.',
        },
      ],
      conclusion: 'As we step deeper into the Spatial Era, the divide between nature, human dwelling, and computational logic dissolves into a singular, weightless symphony.',
    },
  },
  'typography-4d': {
    id: 'typography-4d',
    slug: 'typography-4d',
    title: 'Typography in 4D: Kinetic Kerning for Variable Reality Headsets',
    subtitle: 'Type is no longer flat. In spatial depth, letters breathe, react to gaze angles, and adjust optical density in real-time.',
    category: 'Typography',
    categoryTheme: 'violet',
    readTime: '6 min read',
    publishDate: 'August 20, 2026',
    issueVol: 'No. 42 / Essay',
    coverImage: PRIMARY_IMAGES.typography4D,
    imageCaption: 'Experimental spatial type specimen projecting multidimensional glyphs.',
    author: {
      name: 'Jean-Luc Dubois',
      role: 'Head of Typography at VariableType Lab',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80',
      bio: 'Jean-Luc Dubois designs variable font families optimized for volumetric display engines.',
    },
    audioTrack: {
      duration: '5:12 min',
      narrator: 'Studio Synthesized Voice 02',
    },
    quote: {
      text: 'In spatial typography, readability is not a two-dimensional grid—it is an orbital dance between viewer focus and optical perspective.',
      author: 'Jean-Luc Dubois',
    },
    content: {
      intro: 'When typography entered the digital domain in the late 20th century, it was trapped behind flat glass monitors. Today, variable font axes extend beyond weight and width into spatial z-depth, rotational shear, and gaze-reactive tracking.',
      sections: [
        {
          heading: '1. The Z-Axis Variable Axis',
          body: [
            'Traditional kerning pairs calculate horizontal whitespace between glyphs. In volumetric space, we must calculate parallax displacement. As a reader walks around a floating block of text, glyph strokes must automatically taper and adjust their depth bevel to prevent legibility breakdown.',
          ],
          secondaryImage: PRIMARY_IMAGES.neuralRenaissance,
          imageCaption: 'Optical variable axes tested across disparate spatial lighting conditions.',
        },
      ],
      conclusion: '4D typography restores the tactile poetry of chiselled letterforms while unleashing dynamic computational responsiveness.',
    },
  },
  'photosynthetic-timber': {
    id: 'photosynthetic-timber',
    slug: 'photosynthetic-timber',
    title: 'Photosynthetic Timber & Carbon-Negative Pavilions in Scandinavia',
    subtitle: 'Bio-engineered mass timber structures embedded with cyanobacteria cultures that actively sequester carbon dioxide while releasing pure oxygen.',
    category: 'Architecture',
    categoryTheme: 'lime',
    readTime: '4 min read',
    publishDate: 'August 18, 2026',
    issueVol: 'Issue 08 Fieldwork',
    coverImage: PRIMARY_IMAGES.photosyntheticTimber,
    imageCaption: 'Mass timber cultural center built using carbon-negative laminated spruce.',
    author: {
      name: 'Soren Lindqvist',
      role: 'Principal Ecological Architect at Nordic Bio-Form',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
      bio: 'Soren designs regenerative public infrastructure across Northern Europe.',
    },
    quote: {
      text: 'The buildings of tomorrow will not consume our planetary reserves; they will heal our atmosphere with every sunrise.',
      author: 'Soren Lindqvist',
    },
    content: {
      intro: 'The timber revolution has transcended glulam and CLT. In northern Sweden, a new generation of living architectural pavilions is demonstrating how engineered biological materials can turn civic buildings into atmospheric purifiers.',
      sections: [
        {
          heading: '1. Cultivating Living Facades',
          body: [
            'By micro-infusing timber grain with resilient cyanobacterial cultures protected by permeable silicate coatings, the wood remains structurally inert while its outer microscopic layer conducts photosynthesis throughout the summer months.',
          ],
        },
      ],
      conclusion: 'A radical synthesis of forestry craftsmanship and biotechnology is transforming modern cities into regenerative forests.',
    },
  },
  'acoustic-topologies': {
    id: 'acoustic-topologies',
    slug: 'acoustic-topologies',
    title: 'The Sound of Silence: Acoustic Geometry in Non-Euclidean Concert Halls',
    subtitle: 'Parametric acoustic baffles create intimate auditory bubbles in vast subterranean amphitheaters.',
    category: 'Spatial Sound',
    categoryTheme: 'coral',
    readTime: '7 min read',
    publishDate: 'August 15, 2026',
    issueVol: 'Issue 08 Essay',
    tag: 'Acoustics',
    coverImage: PRIMARY_IMAGES.acousticTopologies,
    imageCaption: 'Subterranean concert hall with parametric wood diffuser ceiling.',
    author: {
      name: 'Maya Al-Mansoor',
      role: 'Acoustic Sculptor & Sound Designer',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&q=80',
      bio: 'Maya designs immersive sound architectures for concert halls and spatial environments worldwide.',
    },
    quote: {
      text: 'Silence is not the absence of sound, but the perfect equilibrium of reflective geometric harmony.',
      author: 'Maya Al-Mansoor',
    },
    content: {
      intro: 'Sound waves are sculptors of emotion. When architectural geometry rejects conventional rectangular boxes in favor of non-Euclidean parametric curvatures, music breathes with unprecedented clarity.',
      sections: [
        {
          heading: '1. Parametric Diffusion in Underground Spaces',
          body: [
            'By utilizing algorithmic voronoi tessellations across ceiling baffles, acoustic reflections are scattered with surgical precision, eliminating flutter echoes without deadening the organic resonance of acoustic instruments.',
          ],
        },
      ],
      conclusion: 'The architecture of sound elevates listening from a passive reception into a sacred spatial pilgrimage.',
    },
  },
  'generative-glass': {
    id: 'generative-glass',
    slug: 'generative-glass',
    title: 'Generative Glass: Algorithmic Refraction in Modern Facade Design',
    subtitle: 'Computational optics meet architectural glazing, creating facades that dynamically bend solar rays into interior illumination paths.',
    category: 'AI Synthetics',
    categoryTheme: 'blue',
    readTime: '5 min read',
    publishDate: 'August 12, 2026',
    issueVol: 'Issue 08 Case Study',
    coverImage: PRIMARY_IMAGES.generativeGlass,
    imageCaption: 'Algorithmic glass facade refracting daylight into kinetic illumination patterns.',
    author: {
      name: 'Kaelen Thorne',
      role: 'Computational Glazing Architect',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=240&q=80',
      bio: 'Kaelen researches dynamic optical systems and generative solar architecture at ETH Zurich.',
    },
    quote: {
      text: 'Glass is no longer passive transparency; it is an active computational lens for the city.',
      author: 'Kaelen Thorne',
    },
    content: {
      intro: 'Through algorithmic surface modulation, architectural glass can now selectively focus, disperse, and direct light deep into dense urban cores, transforming dark corridors into naturally illuminated sanctuaries.',
      sections: [
        {
          heading: '1. Prismatic Dispersion and Thermal Management',
          body: [
            'By precisely embossing microscopic prismatic grooves into laminated solar glass, direct thermal radiation is reflected while ambient visible light is directed 40 meters inward toward central atriums.',
          ],
        },
      ],
      conclusion: 'Generative glazing bridges the gap between passive solar engineering and breathtaking visual spectacle.',
    },
  },
};
