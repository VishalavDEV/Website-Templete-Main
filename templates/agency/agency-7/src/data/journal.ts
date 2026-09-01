import { JournalArticle } from '../types';

export const journalArticles: JournalArticle[] = [
  {
    id: 'designing-for-attention',
    title: 'Designing for Attention: The Ergonomics of Modern Interfaces',
    excerpt: 'In an era of cognitive overload, true design craft lies in reducing noise, honoring negative space, and guiding user focus with optical precision.',
    readTime: '6 min read',
    date: 'August 18, 2026',
    author: {
      name: 'Maya Chen',
      role: 'Creative Director',
      avatar: '/src/assets/images/team_lead_portrait_1787886403043.jpg'
    },
    category: 'Design Philosophy',
    coverImage: '/src/assets/images/design_attention_1787880412477.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Modern digital interfaces have reached a tipping point. Notifications, popups, neon highlights, and hyperactive animations compete relentlessly for user focus. But the most memorable digital products achieve authority through restraint and rhythmic visual clarity.'
      },
      {
        type: 'heading',
        text: 'The Principle of Spatial Rhythm'
      },
      {
        type: 'paragraph',
        text: 'Just as music relies on silence between notes, visual interfaces require deliberate negative space to create contrast. When every element demands equal attention, nothing is seen. By establishing a strict mathematical vertical cadence (such as an 8pt base grid paired with fluid clamp scaling), layouts become effortlessly scannable.'
      },
      {
        type: 'quote',
        text: 'Craft in digital design is not about how much detail you can pack into a viewport, but how gracefully you can eliminate unnecessary cognitive friction.'
      },
      {
        type: 'paragraph',
        text: 'When we designed Aether, we intentionally stripped away traditional borders and replaced them with micro-contrast surfaces and generous padding. The result was a 48% increase in decision-making speed among complex spatial analysts.'
      }
    ]
  },
  {
    id: 'why-interfaces-need-rhythm',
    title: 'Why Interfaces Need Rhythm: The Musicality of UI Design',
    excerpt: 'Exploring how typographic scales, visual weight, and kinetic transitions mimic acoustic harmonies in spatial layout composition.',
    readTime: '8 min read',
    date: 'July 29, 2026',
    author: {
      name: 'Arjun Rao',
      role: 'Lead Product Designer',
      avatar: '/src/assets/images/team_strategist_portrait_1787886454193.jpg'
    },
    category: 'UI/UX Ergonomics',
    coverImage: '/src/assets/images/service_ui_ux_design_1787881454335.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'When you interact with an exceptional application, your eyes move naturally across the canvas without strain. This effortless flow is not accidental — it is the direct outcome of rhythmic visual composition.'
      },
      {
        type: 'heading',
        text: 'Harmonic Typographic Scales'
      },
      {
        type: 'paragraph',
        text: 'We apply mathematical ratios to font sizes, line heights, and padding parameters. Using a Major Third (1.25) or Perfect Fourth (1.333) scale establishes optical hierarchy that feels intrinsically natural to the human eye.'
      }
    ]
  },
  {
    id: 'future-of-digital-craft',
    title: 'The Future of Digital Craft: 3D Spatial Canvas & Generative Systems',
    excerpt: 'As 2D browser boundaries dissolve into spatial viewports, how designers must rethink spatial depth, lighting, and real-time shader dynamics.',
    readTime: '7 min read',
    date: 'June 14, 2026',
    author: {
      name: 'Leo Martin',
      role: 'Lead Creative Developer',
      avatar: '/src/assets/images/team_dev_portrait_1787886419155.jpg'
    },
    category: 'Creative Technology',
    coverImage: '/src/assets/images/service_creative_3d_1787881502863.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'The static web page is evolving into an interactive 3D spatial canvas. WebGL, WebGPU, and real-time shader engines allow us to craft digital experiences with physical lighting, material refractions, and fluid physics.'
      },
      {
        type: 'heading',
        text: 'Performance as an Aesthetic Requirement'
      },
      {
        type: 'paragraph',
        text: 'A 3D experience that stutters or drops frames fails instantly, regardless of visual sophistication. True craft requires maintaining 60 frames per second on mobile viewports through sub-pixel optimization and lazy geometry streaming.'
      }
    ]
  },
  {
    id: 'designing-with-motion',
    title: 'Designing With Motion: Choreographing Micro-Interactions',
    excerpt: 'Motion is not decorative filler — it is functional communication that signals spatial relationship, state change, and system feedback.',
    readTime: '5 min read',
    date: 'May 02, 2026',
    author: {
      name: 'Elena Park',
      role: 'Head of UX Strategy',
      avatar: '/src/assets/images/team_designer_portrait_1787886436203.jpg'
    },
    category: 'Interaction Design',
    coverImage: '/src/assets/images/service_prototyping_1787881485704.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'When a button expands or a panel slides smoothly into view, motion provides spatial context. It tells the user where elements came from and where they will return.'
      }
    ]
  },
  {
    id: 'building-better-design-systems',
    title: 'Building Better Design Systems: Tokens, Scale & Governance',
    excerpt: 'How to scale product design across global engineering teams without losing visual coherence or speed.',
    readTime: '9 min read',
    date: 'April 19, 2026',
    author: {
      name: 'Arjun Rao',
      role: 'Lead Product Designer',
      avatar: '/src/assets/images/team_strategist_portrait_1787886454193.jpg'
    },
    category: 'Design Systems',
    coverImage: '/src/assets/images/service_design_system_1787881469264.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'A design system is a living product. We share hard-earned principles on structuring design tokens for seamless Figma-to-code synchronization.'
      }
    ]
  }
];
