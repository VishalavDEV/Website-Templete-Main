import { Story, TaskItem, PulseEvent, NotificationItem, HistoryItem, SavedView, CollectionItem, SettingsData } from '../types';

export const initialStories: Story[] = [
  {
    id: 'story-1',
    title: 'The Astronomer Who Counted Invisible Stars',
    excerpt: 'Using gravitational microlensing arrays, Dr. Aris Thorne mapped dark matter clusters in the Perseus arm with unprecedented precision.',
    content: 'Full editorial research manuscript on invisible star clusters and dark matter microlensing arrays...',
    author: 'Maya Lin',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    category: 'Discoveries',
    status: 'Published',
    publishedDate: '2026-08-19 09:42',
    reads: 42850,
    completionRate: 84,
    saves: 3420,
    shares: 1890,
    returningReaders: 62,
    reviewer: 'Daniel Vance',
    thumbnail: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600',
    isFeatured: true,
    signals: 'Rising',
    tags: ['Astrophysics', 'Dark Matter', 'Perseus']
  },
  {
    id: 'story-2',
    title: 'The Chemistry of Everyday Bread and Microbial Symphony',
    excerpt: 'An investigation into wild sourdough fermentations reveals how ancient lactobacillus strains sculpt modern gastronomic flavor profiles.',
    content: 'Comprehensive report on sourdough microbiology and regional flour fermentation chemistry...',
    author: 'Daniel Vance',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    category: 'Medicine',
    status: 'Review',
    reads: 0,
    completionRate: 0,
    saves: 0,
    shares: 0,
    returningReaders: 0,
    reviewer: 'Elena Rostova',
    thumbnail: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600',
    isFeatured: false,
    signals: 'Stable',
    tags: ['Microbiology', 'Gastronomy', 'Fermentation']
  },
  {
    id: 'story-3',
    title: 'Medicine Before the Microscope: Renaissance Pharmacology',
    excerpt: 'Unpublished apothecary notes from 16th-century Padua shed light on botanical analgesics lost to modern clinical history.',
    content: 'Detailed archival transcriptions of botanical remedies and early compound extractions...',
    author: 'Elena Rostova',
    authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
    category: 'Medicine',
    status: 'Scheduled',
    scheduledDate: '2026-08-20 08:00',
    reads: 0,
    completionRate: 0,
    saves: 0,
    shares: 0,
    returningReaders: 0,
    reviewer: 'Maya Lin',
    thumbnail: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600',
    isFeatured: false,
    signals: 'High',
    tags: ['Pharmacology', 'History', 'Botany']
  },
  {
    id: 'story-4',
    title: 'Quantum Entanglement in Photosynthetic Light Harvesting',
    excerpt: 'New spectroscopic data confirms that green sulfur bacteria exploit quantum coherence to achieve near-100% excitation transfer.',
    content: 'In-depth analysis of photosynthetic reaction centers and quantum biological pathways...',
    author: 'Maya Lin',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    category: 'Discoveries',
    status: 'Approved',
    reads: 0,
    completionRate: 0,
    saves: 0,
    shares: 0,
    returningReaders: 0,
    reviewer: 'Daniel Vance',
    thumbnail: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=600',
    isFeatured: false,
    signals: 'Rising',
    tags: ['Quantum Biology', 'Photosynthesis', 'Spectroscopy']
  },
  {
    id: 'story-5',
    title: 'Deep Sea Thermal Vents and the Origin of Metabolic Cycles',
    excerpt: 'Submersible expeditions to the Arctic Mid-Ocean Ridge uncover pristine serpentinizing mineral catalysts resembling primordial enzymes.',
    content: 'Expedition logs and geochemical assays from the Aurora hydrothermal vent field...',
    author: 'Daniel Vance',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    category: 'Environment',
    status: 'Draft',
    reads: 0,
    completionRate: 0,
    saves: 0,
    shares: 0,
    returningReaders: 0,
    reviewer: 'Elena Rostova',
    thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600',
    isFeatured: false,
    signals: 'Stable',
    tags: ['Oceanography', 'Geochemistry', 'Origins']
  },
  {
    id: 'story-6',
    title: 'Silicon-Neural Interfaces: The Bioelectric Threshold',
    excerpt: 'Implantable graphene electrode arrays demonstrate bidirectional synaptic transmission without glial scarring over 500 days.',
    content: 'Clinical trial outcomes and electrophysiological recordings from cortical arrays...',
    author: 'Elena Rostova',
    authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
    category: 'Technology',
    status: 'Published',
    publishedDate: '2026-08-18 14:15',
    reads: 31200,
    completionRate: 79,
    saves: 2890,
    shares: 1420,
    returningReaders: 58,
    reviewer: 'Maya Lin',
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600',
    isFeatured: false,
    signals: 'Rising',
    tags: ['Neurotech', 'Graphene', 'Interfaces']
  },
  {
    id: 'story-7',
    title: 'The Cartography of Arctic Tundra Carbon Sinks',
    excerpt: 'Airborne hyperspectral LiDAR reveals rapid thaw slump emissions across the Yamal Peninsula.',
    content: 'Geospatial survey of permafrost degradation and methane efflux measurements...',
    author: 'Maya Lin',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    category: 'Environment',
    status: 'Archived',
    publishedDate: '2026-07-10 11:00',
    reads: 18400,
    completionRate: 71,
    saves: 1100,
    shares: 650,
    returningReaders: 45,
    reviewer: 'Daniel Vance',
    thumbnail: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600',
    isFeatured: false,
    signals: 'Stable',
    tags: ['Climate', 'Permafrost', 'LiDAR']
  }
];

export const initialTasks: TaskItem[] = [
  {
    id: 'task-1',
    title: 'Review headline and subhead for Quantum Entanglement piece',
    priority: 'CRITICAL',
    status: 'pending',
    category: 'Editorial',
    relatedStoryId: 'story-4',
    assignee: 'Maya Lin',
    createdAt: '10 mins ago'
  },
  {
    id: 'task-2',
    title: 'Approve high-resolution electron micrograph for Sourdough chemistry',
    priority: 'HIGH',
    status: 'pending',
    category: 'Media',
    relatedStoryId: 'story-2',
    assignee: 'Daniel Vance',
    createdAt: '25 mins ago'
  },
  {
    id: 'task-3',
    title: 'Resolve citation attribution for 16th-century Padua apothecary notes',
    priority: 'HIGH',
    status: 'pending',
    category: 'Research',
    relatedStoryId: 'story-3',
    assignee: 'Elena Rostova',
    createdAt: '1 hour ago'
  },
  {
    id: 'task-4',
    title: 'Assign peer reviewer for Deep Sea Thermal Vents manuscript',
    priority: 'NORMAL',
    status: 'pending',
    category: 'Assignments',
    relatedStoryId: 'story-5',
    assignee: 'Alex Vance',
    createdAt: '3 hours ago'
  }
];

export const initialPulseEvents: PulseEvent[] = [
  {
    id: 'pulse-1',
    time: '09:42',
    timestamp: Date.now() - 120000,
    type: 'PUBLISHED',
    title: 'STORY PUBLISHED',
    description: 'The Astronomer Who Counted Invisible Stars',
    targetId: 'story-1'
  },
  {
    id: 'pulse-2',
    time: '09:18',
    timestamp: Date.now() - 1440000,
    type: 'SUBMISSION',
    title: 'SUBMISSION RECEIVED',
    description: 'The Chemistry of Everyday Bread',
    targetId: 'story-2'
  },
  {
    id: 'pulse-3',
    time: '08:56',
    timestamp: Date.now() - 2760000,
    type: 'ARCHIVE',
    title: 'ARCHIVE UPDATED',
    description: 'Newton Collection cataloged with 4 new manuscripts'
  },
  {
    id: 'pulse-4',
    time: '08:31',
    timestamp: Date.now() - 4260000,
    type: 'REVIEW',
    title: 'REVIEW COMPLETED',
    description: 'Medicine Before the Microscope passed peer review',
    targetId: 'story-3'
  }
];

export const initialNotifications: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Review Assigned',
    message: 'Daniel Vance assigned you to peer review "Quantum Entanglement".',
    time: '12m ago',
    read: false,
    type: 'assignment',
    linkId: 'story-4'
  },
  {
    id: 'notif-2',
    title: 'Story Published',
    message: '"The Astronomer Who Counted Invisible Stars" went live successfully.',
    time: '45m ago',
    read: false,
    type: 'published',
    linkId: 'story-1'
  },
  {
    id: 'notif-3',
    title: 'Reader Milestone',
    message: 'Subscriber engagement crossed 40,000 active daily readers.',
    time: '2h ago',
    read: true,
    type: 'milestone'
  }
];

export const initialHistory: HistoryItem[] = [
  {
    id: 'hist-1',
    action: 'You published a story: "The Astronomer Who Counted Invisible Stars"',
    timestamp: 'Today, 09:42',
    category: 'Publishing'
  },
  {
    id: 'hist-2',
    action: 'You assigned Daniel Vance as reviewer for Sourdough chemistry',
    timestamp: 'Today, 09:15',
    category: 'Editorial'
  },
  {
    id: 'hist-3',
    action: 'You scheduled publication for Renaissance Pharmacology',
    timestamp: 'Yesterday, 17:30',
    category: 'Schedule'
  },
  {
    id: 'hist-4',
    action: 'You archived the Cartography of Arctic Tundra collection',
    timestamp: '2 days ago',
    category: 'Archive'
  }
];

export const initialSavedViews: SavedView[] = [
  {
    id: 'view-1',
    name: 'My Review Queue',
    filters: { status: 'Review' }
  },
  {
    id: 'view-2',
    name: 'Stories Publishing Today',
    filters: { status: 'Scheduled' }
  },
  {
    id: 'view-3',
    name: 'High Engagement',
    filters: { category: 'Discoveries' }
  },
  {
    id: 'view-4',
    name: 'Unassigned Drafts',
    filters: { status: 'Draft' }
  }
];

export const initialCollections: CollectionItem[] = [
  {
    id: 'col-1',
    name: 'Newton Collection',
    storyCount: 14,
    editor: 'Maya Lin',
    updatedAt: '2026-08-15',
    description: 'Archival optical manuscripts and calculus correspondence from Trinity College.'
  },
  {
    id: 'col-2',
    name: 'Galileo Observatory',
    storyCount: 22,
    editor: 'Daniel Vance',
    updatedAt: '2026-08-18',
    description: 'Telescopic logs, planetary ephemerides, and Inquisition trial transcripts.'
  },
  {
    id: 'col-3',
    name: 'Quantum Pioneers',
    storyCount: 9,
    editor: 'Elena Rostova',
    updatedAt: '2026-08-10',
    description: 'Early Copenhagen interpretation papers and Solvay conference recordings.'
  }
];

export const initialSettings: SettingsData = {
  publicationName: 'Arctic Frost Science & Media',
  editorialLead: 'Alex Vance',
  autoReviewAssignment: true,
  defaultCategory: 'Discoveries',
  emailNotifications: true,
  slackWebhook: 'https://hooks.slack.com/services/arctic/frost/newsroom',
  retentionDays: 90,
  strictPeerReview: true
};
