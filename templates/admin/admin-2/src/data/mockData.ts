import { Story, AttentionItem, TimelineEvent, MediaItem, Collection, Author, NotificationItem } from '../types';

export const INITIAL_AUTHORS: Author[] = [
  {
    id: 'auth_1',
    name: 'Dr. Maya Lin',
    role: 'Senior Astrophysics Editor',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    bio: 'Former CERN visiting researcher, specializing in gravitational wave astronomy and deep cosmological horizons.',
    articlesCount: 42,
    activeAssignments: 3,
    expertiseTags: ['Astrophysics', 'Cosmology', 'Relativity']
  },
  {
    id: 'auth_2',
    name: 'Daniel Vance',
    role: 'Staff Writer, Quantum Physics',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    bio: 'Science journalist covering quantum coherence in biology, topological matter, and next-generation cryogenics.',
    articlesCount: 28,
    activeAssignments: 2,
    expertiseTags: ['Quantum Mechanics', 'Superconductivity', 'Nanotech']
  },
  {
    id: 'auth_3',
    name: 'Elena Rostova',
    role: 'Features Editor, Neuroscience',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    bio: 'Investigative science author focusing on synaptic plasticity, memory encoding, and cognitive resilience.',
    articlesCount: 35,
    activeAssignments: 4,
    expertiseTags: ['Neurobiology', 'Cognitive Science', 'Biophysics']
  },
  {
    id: 'auth_4',
    name: 'Marcus Thorne',
    role: 'Earth Systems Specialist',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    bio: 'Field paleoclimatologist and science communicator studying deep-ocean core proxies and ice-sheet dynamics.',
    articlesCount: 19,
    activeAssignments: 1,
    expertiseTags: ['Paleoclimatology', 'Oceanography', 'Glaciology']
  },
  {
    id: 'auth_5',
    name: 'Dr. Kenji Sato',
    role: 'History of Science Curator',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    bio: 'Archivist and historian at Cambridge University Press, deciphering early modern astronomical folios and alchemy texts.',
    articlesCount: 51,
    activeAssignments: 2,
    expertiseTags: ['Scientific Manuscripts', 'Early Optics', 'Renaissance Cartography']
  }
];

export const INITIAL_STORIES: Story[] = [
  {
    id: 'story_1',
    title: 'The Astronomer Who Counted Invisible Stars',
    subtitle: 'How Henrietta Leavitt unlocked the standard candles of cosmic distance',
    excerpt: 'Before we understood that the Milky Way was merely one of billions of island universes, a quiet calculator at Harvard Observatory discovered the clockwork pulsing of Cepheid variables.',
    category: 'Cosmology',
    author: {
      id: 'auth_1',
      name: 'Dr. Maya Lin',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      role: 'Senior Astrophysics Editor'
    },
    status: 'published',
    heroImage: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1200&auto=format&fit=crop&q=80',
    heroCaption: 'Deep-sky astrophotography of star-forming nebulae in the Carina arm.',
    readTime: '9 min read',
    publishedAt: '2026-08-19T09:42:00Z',
    createdAt: '2026-08-14T11:20:00Z',
    updatedAt: '2026-08-19T09:42:00Z',
    views: 48920,
    completionRate: 84,
    saves: 3410,
    shares: 1290,
    isFeatured: true,
    tags: ['Astrophysics', 'History', 'Spectroscopy', 'Galaxies'],
    factCheckedBy: 'Kenji Sato',
    reviewerNotes: 'Verified photographic plate coordinates and Leavitt’s 1912 circular citations.',
    content: `When Henrietta Swan Leavitt began examining glass photographic plates at the Harvard College Observatory in 1893, astronomers believed our Milky Way was the totality of existence. Everything else was merely glowing interstellar vapor.

Working as one of the legendary 'Harvard Computers,' Leavitt was tasked with cataloging variable stars in the Small and Large Magellanic Clouds. With painstaking precision, she measured the subtle shifts in star brightness recorded on hundreds of 8-by-10-inch glass negatives using a magnifying loupe and a wire micrometer.

By 1908, she noticed a profound pattern: the brighter a Cepheid variable star was inherently, the longer its period of pulsation. Because all the stars in the Small Magellanic Cloud were roughly the same distance from Earth, their apparent brightness was directly proportional to their true luminosity.

This Period-Luminosity relationship provided humanity with its first 'standard candle'—a cosmic measuring stick that allowed Edwin Hubble, a decade later, to prove that the Andromeda Nebula was not a cloud of gas within our galaxy, but an entirely distinct cosmic realm 2.5 million light-years away.`
  },
  {
    id: 'story_2',
    title: 'The Chemistry of Everyday Bread',
    subtitle: 'From Maillard cascades to gluten lattices: the thermodynamic wonder of baking',
    excerpt: 'Every loaf of sourdough is a controlled microbiological ecosystem where enzymatic cleavage meets complex polysaccharide crosslinking.',
    category: 'History of Science',
    author: {
      id: 'auth_2',
      name: 'Daniel Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      role: 'Staff Writer, Quantum Physics'
    },
    status: 'review',
    heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&auto=format&fit=crop&q=80',
    heroCaption: 'Macro photograph of crust formation and carbon dioxide cavitation bubbles.',
    readTime: '6 min read',
    createdAt: '2026-08-19T09:18:00Z',
    updatedAt: '2026-08-19T09:18:00Z',
    views: 0,
    completionRate: 0,
    saves: 0,
    shares: 0,
    isFeatured: false,
    tags: ['Biochemistry', 'Food Science', 'Fermentation'],
    reviewerNotes: 'Waiting on nutritional chemical structural diagram verification.',
    content: `Bread making is humanity's oldest biochemical synthesis. When flour and water unite, inactive enzymes known as alpha- and beta-amylases spring to life, dismantling complex starches into maltose and glucose.

Simultaneously, two storage proteins—gliadin and glutenin—intertwine to form an elastic matrix capable of holding microscopic pockets of carbon dioxide generated by wild yeasts. When baked at 220°C, the Maillard reaction triggers hundreds of aromatic flavor compounds that define the human culinary memory.`
  },
  {
    id: 'story_3',
    title: 'Medicine Before the Microscope',
    subtitle: 'How Renaissance physicians mapped epidemics through hydrology and scent',
    excerpt: 'Long before Pasteur and Koch isolated bacteria, medieval botanists developed surprisingly rigorous empirical frameworks to curb contagion.',
    category: 'History of Science',
    author: {
      id: 'auth_5',
      name: 'Dr. Kenji Sato',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
      role: 'History of Science Curator'
    },
    status: 'approved',
    heroImage: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=1200&auto=format&fit=crop&q=80',
    heroCaption: 'Original 1543 anatomical woodcut from Andreas Vesalius’s De Humani Corporis Fabrica.',
    readTime: '11 min read',
    createdAt: '2026-08-18T14:30:00Z',
    updatedAt: '2026-08-19T08:31:00Z',
    views: 0,
    completionRate: 0,
    saves: 0,
    shares: 0,
    isFeatured: false,
    tags: ['History', 'Epidemiology', 'Botany'],
    factCheckedBy: 'Elena Rostova',
    reviewerNotes: 'All manuscript citations verified from the Bodleian digital archives.',
    content: `In the 14th century, disease was conceptualized as an imbalance in the bodily humors or the result of 'miasma'—noxious air rising from stagnant swamps and decaying organic matter.

While the microscopic culprits remained invisible, early Italian municipal doctors instituted quarantine stations (the Venetian *quarantena*, meaning 40 days) and isolated potable wells from refuse runoff. Their empirical interventions saved tens of thousands of lives centuries before germ theory was formally codified.`
  },
  {
    id: 'story_4',
    title: 'The Quantum Signature of Avian Magnetoreception',
    subtitle: 'How cryptochrome proteins in robin retinas harness radical pair entanglements',
    excerpt: 'Migratory songbirds navigate thousands of miles by literally visualizing Earth’s geomagnetic lines using room-temperature quantum entanglement.',
    category: 'Quantum Physics',
    author: {
      id: 'auth_2',
      name: 'Daniel Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      role: 'Staff Writer, Quantum Physics'
    },
    status: 'scheduled',
    scheduledFor: '2026-08-20T14:00:00Z',
    heroImage: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=1200&auto=format&fit=crop&q=80',
    heroCaption: 'European Robin (Erithacus rubecula) equipped with radical-pair magnetoreceptors.',
    readTime: '8 min read',
    createdAt: '2026-08-17T16:00:00Z',
    updatedAt: '2026-08-19T10:12:00Z',
    views: 120,
    completionRate: 91,
    saves: 45,
    shares: 28,
    isFeatured: false,
    tags: ['Quantum Biology', 'Zoology', 'Entanglement'],
    factCheckedBy: 'Dr. Maya Lin',
    reviewerNotes: 'Approved for Thursday afternoon newsletter distribution.',
    content: `In the eye of the European Robin lies a light-sensitive pigment called cryptochrome-4 (Cry4). When blue light hits this protein, it triggers an ultrafast electron transfer across a chain of four tryptophan amino acids, producing a pair of spatially separated radicals whose quantum spin states remain entangled.

Because the lifetime of this entangled state is sensitive to the angle of Earth’s feeble magnetic field, the bird perceives magnetic contours overlaid directly across its visual field as gradients of light and shade.`
  },
  {
    id: 'story_5',
    title: 'Synaptic Pruning: The Brain’s Master Sculptor',
    subtitle: 'Microglia do not merely clean debris—they chisel our neural architectures',
    excerpt: 'During adolescence, the brain eliminates up to 40% of its synaptic junctions to sharpen memory retention and optimize energetic throughput.',
    category: 'Neuroscience',
    author: {
      id: 'auth_3',
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      role: 'Features Editor, Neuroscience'
    },
    status: 'published',
    heroImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&auto=format&fit=crop&q=80',
    heroCaption: 'Confocal fluorescence microscopy of dendritic spine pruning in hippocampal neurons.',
    readTime: '7 min read',
    publishedAt: '2026-08-18T10:00:00Z',
    createdAt: '2026-08-15T09:00:00Z',
    updatedAt: '2026-08-18T10:00:00Z',
    views: 31200,
    completionRate: 79,
    saves: 2180,
    shares: 840,
    isFeatured: false,
    tags: ['Neuroscience', 'Cell Biology', 'Memory'],
    factCheckedBy: 'Dr. Kenji Sato',
    content: `A human infant is born with roughly 86 billion neurons, but the dense thicket of connections between them is raw and untamed. Over the first two decades of life, our microglial immune cells act as microscopic arborists, engulfing inactive synapses marked by complement proteins.`
  },
  {
    id: 'story_6',
    title: 'Deep Trenches of the Mariana: Bioluminescence in Perpetual Night',
    subtitle: 'Life under 1,000 atmospheres of pressure with zero sunlight',
    excerpt: 'At the bottom of the Challenger Deep, organisms rely on luciferin oxidation and piezophilic enzyme stabilization to flourish in extreme cold.',
    category: 'Deep Biology',
    author: {
      id: 'auth_4',
      name: 'Marcus Thorne',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      role: 'Earth Systems Specialist'
    },
    status: 'scheduled',
    scheduledFor: '2026-08-21T09:00:00Z',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80',
    heroCaption: 'Bioluminescent siphonophore captured by deep-sea submersible at 6,200m depth.',
    readTime: '10 min read',
    createdAt: '2026-08-16T13:00:00Z',
    updatedAt: '2026-08-19T08:00:00Z',
    views: 95,
    completionRate: 88,
    saves: 32,
    shares: 15,
    isFeatured: false,
    tags: ['Marine Biology', 'Oceanography', 'Extremophiles'],
    reviewerNotes: 'Submersible camera footage stills added to media repository.',
    content: `Six miles beneath the Pacific Ocean surface, hydrostatic pressure exceeds eight tons per square inch. At these crushing depths, conventional cell membranes would solidify and enzymes would denature.

Yet hadal zone amphipods and snailfishes maintain cellular integrity using high concentrations of trimethylamine N-oxide (TMAO), while communicating through rhythmic flashes of cold blue luciferase luminescence.`
  },
  {
    id: 'story_7',
    title: 'The Gravitational Wave Symphony of Colliding Neutron Stars',
    subtitle: 'How LIGO and Virgo decoded the cosmic r-process forge of gold and platinum',
    excerpt: 'When two dead stars spiral into each other at half the speed of light, spacetime itself ripples across billions of light years.',
    category: 'Cosmology',
    author: {
      id: 'auth_1',
      name: 'Dr. Maya Lin',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      role: 'Senior Astrophysics Editor'
    },
    status: 'published',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80',
    heroCaption: 'Numerical relativity simulation of spacetime curvature during a kilonova merger.',
    readTime: '12 min read',
    publishedAt: '2026-08-16T15:00:00Z',
    createdAt: '2026-08-12T10:00:00Z',
    updatedAt: '2026-08-16T15:00:00Z',
    views: 64200,
    completionRate: 86,
    saves: 4890,
    shares: 2150,
    isFeatured: false,
    tags: ['Astrophysics', 'General Relativity', 'Kilonova'],
    factCheckedBy: 'Daniel Vance',
    content: `On August 17, 2017, the twin laser interferometers of the Laser Interferometer Gravitational-Wave Observatory detected a faint 100-second chirp in spacetime designated GW170817. Two seconds later, the Fermi gamma-ray telescope caught a burst of radiation from the exact same quadrant of the sky.`
  },
  {
    id: 'story_8',
    title: 'Ancient Antarctic Ice Cores and the 800,000-Year Climate Pulse',
    subtitle: 'Trapped bubbles in Dome C ice cylinders reveal carbon dioxide equilibrium thresholds',
    excerpt: 'By vaporizing micro-bubbles preserved in three-kilometer deep ice columns, geochemists have reconstructed eight full glacial cycles.',
    category: 'Earth & Climate',
    author: {
      id: 'auth_4',
      name: 'Marcus Thorne',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      role: 'Earth Systems Specialist'
    },
    status: 'draft',
    heroImage: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=1200&auto=format&fit=crop&q=80',
    heroCaption: 'Cross section of polar ice core showing annual snowfall dust stratigraphy.',
    readTime: '8 min read',
    createdAt: '2026-08-19T07:45:00Z',
    updatedAt: '2026-08-19T08:15:00Z',
    views: 0,
    completionRate: 0,
    saves: 0,
    shares: 0,
    isFeatured: false,
    tags: ['Glaciology', 'Climate History', 'Isotope Geochemistry'],
    reviewerNotes: 'Drafting the section on Milankovitch orbital eccentricity resonances.',
    content: `EPICA Dome C in East Antarctica is one of the most desolate places on Earth. Yet beneath its frozen plateau lies an unbroken atmospheric archive stretching across 800 millennia.`
  },
  {
    id: 'story_9',
    title: 'CRISPR-Guided Epigenetic Switches in Cereal Crop Resilience',
    subtitle: 'Modifying DNA methylation without altering the underlying base pairs',
    excerpt: 'Targeted dCas9 enzymes are enabling agronomists to switch on drought-tolerant pathways in staple crops without genetic transgenes.',
    category: 'Deep Biology',
    author: {
      id: 'auth_3',
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      role: 'Features Editor, Neuroscience'
    },
    status: 'review',
    heroImage: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&auto=format&fit=crop&q=80',
    heroCaption: 'Fluorescent tag tracking epigenetic marker repositioning in wheat stomatal guard cells.',
    readTime: '9 min read',
    createdAt: '2026-08-18T18:00:00Z',
    updatedAt: '2026-08-19T06:00:00Z',
    views: 10,
    completionRate: 95,
    saves: 2,
    shares: 1,
    isFeatured: false,
    tags: ['Genetics', 'Agriculture', 'Epigenetics'],
    reviewerNotes: 'Needs peer-review attribution check on the Zurich laboratory results.',
    content: `Unlike conventional genetic engineering which splices foreign DNA or edits genomic nucleotides, epigenetic editing attaches chemical tags—such as methyl or acetyl groups—to the histone proteins around which DNA is wound.`
  }
];

export const INITIAL_ATTENTION_ITEMS: AttentionItem[] = [
  {
    id: 'att_1',
    title: 'Review headline clarity for Lead Story',
    description: 'Ensure "The Astronomer Who Counted Invisible Stars" meets archival naming conventions and avoids ambiguous jargon.',
    type: 'headline_review',
    priority: 'critical',
    relatedStoryId: 'story_1',
    relatedStoryTitle: 'The Astronomer Who Counted Invisible Stars',
    assignee: 'Alex Thorne',
    snoozed: false,
    completed: false,
    createdAt: '2026-08-19T08:15:00Z'
  },
  {
    id: 'att_2',
    title: 'Approve Carina Nebula lead astrophotography',
    description: 'Verify 300 DPI print-ready high dynamic range color profiling and ESO image rights attribution.',
    type: 'image_approval',
    priority: 'high',
    relatedStoryId: 'story_1',
    relatedStoryTitle: 'The Astronomer Who Counted Invisible Stars',
    assignee: 'Dr. Kenji Sato',
    snoozed: false,
    completed: false,
    createdAt: '2026-08-19T08:45:00Z'
  },
  {
    id: 'att_3',
    title: 'Resolve Harvard Observatory plate attribution',
    description: 'Plate Series B-32127 needs formal citation in metadata to comply with Smithsonian Open Access.',
    type: 'attribution',
    priority: 'high',
    relatedStoryId: 'story_3',
    relatedStoryTitle: 'Medicine Before the Microscope',
    assignee: 'Daniel Vance',
    snoozed: false,
    completed: false,
    createdAt: '2026-08-19T09:05:00Z'
  },
  {
    id: 'att_4',
    title: 'Approve Story: "The Chemistry of Everyday Bread"',
    description: 'Staff submission ready for final peer sign-off. Cross-checked with Food Microbiology journal references.',
    type: 'story_approval',
    priority: 'medium',
    relatedStoryId: 'story_2',
    relatedStoryTitle: 'The Chemistry of Everyday Bread',
    assignee: 'Dr. Maya Lin',
    snoozed: false,
    completed: false,
    createdAt: '2026-08-19T09:20:00Z'
  },
  {
    id: 'att_5',
    title: 'Assign senior reviewer for Quantum Avian piece',
    description: 'Story ready for embargo scheduling. Requires reviewer with biophysics credentials.',
    type: 'assign_reviewer',
    priority: 'critical',
    relatedStoryId: 'story_4',
    relatedStoryTitle: 'The Quantum Signature of Avian Magnetoreception',
    assignee: 'Unassigned',
    snoozed: false,
    completed: false,
    createdAt: '2026-08-19T09:35:00Z'
  }
];

export const INITIAL_TIMELINE: TimelineEvent[] = [
  {
    id: 'tl_1',
    timestamp: '2026-08-19T09:42:00Z',
    timeLabel: '09:42',
    type: 'story_published',
    title: 'Story Published',
    subtitle: 'The Astronomer Who Counted Invisible Stars',
    targetId: 'story_1',
    targetType: 'story',
    actor: {
      name: 'Alex Thorne',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
      role: 'Editor-in-Chief'
    }
  },
  {
    id: 'tl_2',
    timestamp: '2026-08-19T09:18:00Z',
    timeLabel: '09:18',
    type: 'story_submitted',
    title: 'Story Submitted',
    subtitle: 'The Chemistry of Everyday Bread',
    targetId: 'story_2',
    targetType: 'story',
    actor: {
      name: 'Daniel Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      role: 'Staff Writer'
    }
  },
  {
    id: 'tl_3',
    timestamp: '2026-08-19T08:56:00Z',
    timeLabel: '08:56',
    type: 'media_added',
    title: 'Media Added',
    subtitle: 'Newton Archive Folio 44B High-Res Scan',
    targetId: 'media_1',
    targetType: 'media',
    actor: {
      name: 'Dr. Kenji Sato',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
      role: 'History Curator'
    }
  },
  {
    id: 'tl_4',
    timestamp: '2026-08-19T08:31:00Z',
    timeLabel: '08:31',
    type: 'review_completed',
    title: 'Review Completed',
    subtitle: 'Medicine Before the Microscope',
    targetId: 'story_3',
    targetType: 'story',
    actor: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      role: 'Features Editor'
    }
  },
  {
    id: 'tl_5',
    timestamp: '2026-08-18T17:00:00Z',
    timeLabel: 'Yesterday',
    type: 'featured_updated',
    title: 'Featured Story Updated',
    subtitle: 'Main masthead assigned to Henrietta Leavitt feature',
    targetId: 'story_1',
    targetType: 'story',
    actor: {
      name: 'Alex Thorne',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
      role: 'Editor-in-Chief'
    }
  }
];

export const INITIAL_MEDIA: MediaItem[] = [
  {
    id: 'media_1',
    title: 'Newton Optics Manuscript Folio 44B',
    caption: 'Handwritten geometric diagrams on prism chromatic dispersion (1672).',
    credit: 'Cambridge University Library / CC BY 4.0',
    url: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=1200&auto=format&fit=crop&q=80',
    dimensions: '3840 × 2400',
    format: 'TIFF',
    sizeKb: 14200,
    tags: ['Optics', 'Isaac Newton', 'Manuscript', 'Archive'],
    uploadedAt: '2026-08-19T08:56:00Z',
    usedInStoryCount: 2
  },
  {
    id: 'media_2',
    title: 'Carina Nebula Starburst Field',
    caption: 'Multi-wavelength deep infrared imaging of young massive stars.',
    credit: 'ESO / NASA STScI Archive',
    url: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1200&auto=format&fit=crop&q=80',
    dimensions: '4096 × 2160',
    format: 'WEBP',
    sizeKb: 3450,
    tags: ['Astrophotography', 'Nebula', 'Carina', 'Cosmology'],
    uploadedAt: '2026-08-18T14:12:00Z',
    usedInStoryCount: 3
  },
  {
    id: 'media_3',
    title: 'Hippocampal Dendritic Spine Density',
    caption: 'Two-photon laser scanning of mouse CA1 pyramidal neuron spines.',
    credit: 'Max Planck Institute for Brain Research',
    url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&auto=format&fit=crop&q=80',
    dimensions: '2560 × 1600',
    format: 'PNG',
    sizeKb: 5600,
    tags: ['Neuroscience', 'Microscopy', 'Synapses'],
    uploadedAt: '2026-08-17T11:40:00Z',
    usedInStoryCount: 1
  },
  {
    id: 'media_4',
    title: 'European Robin Radical Pair Compass',
    caption: 'High-speed macro capture of migratory subject in orientation testing funnel.',
    credit: 'Oxford Quantum Biology Lab',
    url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=1200&auto=format&fit=crop&q=80',
    dimensions: '3200 × 2000',
    format: 'JPG',
    sizeKb: 2890,
    tags: ['Birds', 'Quantum Biology', 'Migration'],
    uploadedAt: '2026-08-17T15:20:00Z',
    usedInStoryCount: 1
  },
  {
    id: 'media_5',
    title: 'Deep Trench Snailfish Bioluminescence',
    caption: 'Hadal ecosystem survey specimen observed at 6,400 meters.',
    credit: 'JAMSTEC Shinkai Submersible Archive',
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80',
    dimensions: '3840 × 2160',
    format: 'JPG',
    sizeKb: 4120,
    tags: ['Abyss', 'Marine Biology', 'Hadal Zone'],
    uploadedAt: '2026-08-16T09:10:00Z',
    usedInStoryCount: 2
  }
];

export const INITIAL_COLLECTIONS: Collection[] = [
  {
    id: 'col_1',
    title: 'The Newton Archive & Early Optics',
    slug: 'newton-archive-optics',
    description: 'High-resolution manuscript scans, prism experiment diaries, and correspondence with the Royal Society.',
    coverImage: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=1200&auto=format&fit=crop&q=80',
    storyCount: 6,
    curator: 'Dr. Kenji Sato',
    updatedDate: 'August 19, 2026',
    featured: true,
    stories: ['story_3']
  },
  {
    id: 'col_2',
    title: 'Quantum Biology: Coherence in Warm Wet Systems',
    slug: 'quantum-biology',
    description: 'Exploring photosystem energy transfer, radical pair compasses, and enzymatic tunneling in living organisms.',
    coverImage: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=1200&auto=format&fit=crop&q=80',
    storyCount: 8,
    curator: 'Daniel Vance',
    updatedDate: 'August 18, 2026',
    featured: true,
    stories: ['story_4']
  },
  {
    id: 'col_3',
    title: 'Cosmic Scales: From Parsecs to Redshifts',
    slug: 'cosmic-scales',
    description: 'The historic evolution of astronomical distance ladders, standard candles, and expanding universe metrics.',
    coverImage: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1200&auto=format&fit=crop&q=80',
    storyCount: 11,
    curator: 'Dr. Maya Lin',
    updatedDate: 'August 19, 2026',
    featured: true,
    stories: ['story_1', 'story_7']
  },
  {
    id: 'col_4',
    title: 'Abyssal Biology & Extreme Geochemistry',
    slug: 'abyssal-extremophiles',
    description: 'Hydrothermal vents, piezophilic enzyme chemistry, and non-photosynthetic chemosynthesis.',
    coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80',
    storyCount: 5,
    curator: 'Marcus Thorne',
    updatedDate: 'August 15, 2026',
    featured: false,
    stories: ['story_6']
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif_1',
    title: 'New Story Submitted for Review',
    description: 'Daniel Vance submitted "The Chemistry of Everyday Bread"',
    time: '25 min ago',
    read: false,
    type: 'review',
    linkTarget: 'editorial_reviews'
  },
  {
    id: 'notif_2',
    title: 'Scheduled Release Completed',
    description: '"The Astronomer Who Counted Invisible Stars" went live to 48,000 subscribers.',
    time: '1 hour ago',
    read: false,
    type: 'publish',
    linkTarget: 'content_all'
  },
  {
    id: 'notif_3',
    title: 'Editorial Fact-Check Signed Off',
    description: 'Dr. Kenji Sato verified manuscript folios in "Medicine Before the Microscope".',
    time: '2 hours ago',
    read: true,
    type: 'editorial',
    linkTarget: 'editorial_reviews'
  },
  {
    id: 'notif_4',
    title: 'System Export Ready',
    description: 'Weekly subscriber retention metrics compiled successfully.',
    time: 'Yesterday',
    read: true,
    type: 'system',
    linkTarget: 'audience_analytics'
  }
];
