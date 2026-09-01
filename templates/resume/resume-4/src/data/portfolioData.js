// Structured portfolio data for Noah Everwood (Fictional Wildlife Photographer)

import heroImg from '../assets/images/hero_wilderness.jpg';
import portraitImg from '../assets/images/noah_portrait.jpg';
import projectGreenValley from '../assets/images/project_green_valley.jpg';
import projectWingsRidge from '../assets/images/project_wings_ridge.jpg';
import projectSilentRivers from '../assets/images/project_silent_rivers.jpg';

export const PROFILE_DATA = {
  name: "Noah Everwood",
  title: "Wildlife Photographer & Documentary Storyteller",
  tagline: "Stories from the places where the wild still speaks.",
  location: "Queenstown, New Zealand",
  experienceYears: "9+",
  documentedRegions: "18 Fictional Regions",
  specialty: "Wildlife Conservation & Environmental Stories",
  bioHeadline: "Behind the Lens",
  bioParagraphs: [
    "Noah Everwood is a fictional wildlife photographer and visual storyteller focused on documenting the relationship between wildlife, landscapes, and the people working to protect them.",
    "Over nine years in the field, Noah has braved extreme climates, remote wilderness corridors, and unpredictable mountain weather to capture unseen moments of natural resilience. His work bridges raw photojournalism with emotional environmental narratives.",
    "Rooted in Queenstown, New Zealand, Noah approaches every assignment with a deep commitment to non-invasive wildlife observation, ethical field protocols, and patience—allowing nature to tell its own story without disturbance."
  ],
  heroImage: heroImg,
  portraitImage: portraitImg,
};

export const PROJECTS_DATA = [
  {
    id: "green-valley",
    number: "01",
    title: "THE LAST GREEN VALLEY",
    year: "2025",
    type: "Environmental Documentary",
    location: "Silent Basin Corridor (Fictional)",
    image: projectGreenValley,
    description: "A fictional visual story exploring a remote valley where wildlife corridors and local communities coexist in delicate balance.",
    story: "Over a 60-day wilderness residency in the Silent Basin, Noah documented the daily movement patterns of native species through old-growth rainforests. The resulting photo essay highlights the ecological vital signs of an intact river ecosystem.",
    technical: "Medium format digital body, 24-70mm f/2.8 lens, natural morning ambient light, waterproof ground shelter.",
    exhibitions: "Fictional Wildlife Storytellers Expo (2025)"
  },
  {
    id: "wings-ridge",
    number: "02",
    title: "WINGS ABOVE THE RIDGE",
    year: "2024",
    type: "Wildlife Photography Series",
    location: "Southern Crest Range (Fictional)",
    image: projectWingsRidge,
    description: "A fictional project documenting migratory bird populations across isolated mountain regions during autumn thermal drafts.",
    story: "Perched on windy alpine ridges above cloud inversions, Noah spent weeks observing high-altitude avian thermals. The series captures dramatic aerial maneuvers and thermal soaring techniques of solitary mountain raptors.",
    technical: "Fast shutter telephoto prime, 500mm f/4 lens, high-speed burst tracking, carbon fiber gimbal head.",
    exhibitions: "Highland Avian Narrative Showcase (2024)"
  },
  {
    id: "silent-rivers",
    number: "03",
    title: "SILENT RIVERS",
    year: "2023",
    type: "Environmental Storytelling",
    location: "Silvermist Drainage System (Fictional)",
    image: projectSilentRivers,
    description: "A fictional visual study exploring changing freshwater ecosystems, glacial runoff, and riverbed flora.",
    story: "Focusing on pristine mountain tributaries, this story captures underwater light interactions, moss-covered granite, and macro water clarity. It underscores the fragility of alpine headwaters under climate variation.",
    technical: "Underwater housing unit, circular polarizer filter, 16-35mm ultra-wide, focus stacking techniques.",
    exhibitions: "Freshwater Conservation Arts Forum (2023)"
  },
  {
    id: "beyond-treeline",
    number: "04",
    title: "BEYOND THE TREELINE",
    year: "2022",
    type: "Long-form Documentary",
    location: "High Alpine Tundra (Fictional)",
    image: projectWingsRidge, // Visual reuse with custom filter
    description: "A fictional expedition documenting wildlife adaptation in extreme highland environments above 2,500 meters.",
    story: "Tracking mountain ungulates across windswept sub-alpine plateau, Noah recorded severe weather survival strategies during early autumn snowfalls.",
    technical: "Weather-sealed dual body setup, solar charging pack, lightweight field gear.",
    exhibitions: "Alpine Survival Photo Guild (2022)"
  },
  {
    id: "night-forest",
    number: "05",
    title: "THE NIGHT FOREST",
    year: "2021",
    type: "Photography Collection",
    location: "Shadowwood Sanctuary (Fictional)",
    image: projectSilentRivers, // Visual reuse with atmospheric twilight filter
    description: "A fictional nighttime wildlife series focused on unseen nocturnal forest ecosystems and bioluminescent flora.",
    story: "Using silent low-light trigger systems, Noah captured nocturnal creatures navigating dark canopy paths under starlight and moonlit dew.",
    technical: "Infrared low-light sensor, silent electronic shutter, dual fill warm LED accents.",
    exhibitions: "Nocturnal Earth Exhibition (2021)"
  }
];

export const GALLERY_DATA = [
  {
    id: "gal-1",
    title: "Valley Mist at First Light",
    subtitle: "Silent Basin, Fictional Region",
    image: projectGreenValley,
    meta: "ISO 200 | 35mm | f/8 | 1/250s",
    caption: "Morning fog drifting through old-growth beech canopy as the valley wakes."
  },
  {
    id: "gal-2",
    title: "Alpine Raptor in Flight",
    subtitle: "Southern Crest Peaks",
    image: projectWingsRidge,
    meta: "ISO 400 | 500mm | f/4 | 1/2000s",
    caption: "Soaring at 2,400 meters elevation during peak evening thermal drafts."
  },
  {
    id: "gal-3",
    title: "Glacial Water Clarity",
    subtitle: "Silvermist Tributary",
    image: projectSilentRivers,
    meta: "ISO 100 | 24mm | f/11 | 1/15s",
    caption: "Granite riverbed smoothed over centuries of crystal-clear alpine runoff."
  },
  {
    id: "gal-4",
    title: "Highland Horizon",
    subtitle: "Aurora Highlands Range",
    image: heroImg,
    meta: "ISO 100 | 16mm | f/9 | 1/500s",
    caption: "Distant mountain reflections on silent waters before dawn."
  }
];

export const FIELD_EXPERIENCE = [
  {
    period: "2023 — PRESENT",
    role: "Lead Documentary Photographer",
    organization: "Wild Horizon Collective",
    type: "Fictional Environmental Storytelling Org",
    description: "Leading multi-week wilderness field assignments, producing visual documentaries, and overseeing expedition logistics for non-profit nature conservation narratives.",
    highlights: [
      "Directing long-form photography projects across remote reserves",
      "Mentoring junior field photographers on low-impact field ethics",
      "Curating visual asset archives for global environmental education"
    ]
  },
  {
    period: "2020 — 2023",
    role: "Documentary Photographer",
    organization: "Terra Story Institute",
    type: "Fictional Visual Research Org",
    description: "Documented seasonal wildlife migration patterns and freshwater ecosystem health across 6 fictional biodiversity hot spots.",
    highlights: [
      "Produced 12 cover photo essays on ecosystem restoration",
      "Collaborated with field biologists to map wildlife migration paths",
      "Developed silent camera trap systems for rare species monitoring"
    ]
  },
  {
    period: "2018 — 2020",
    role: "Wildlife Photography Contributor",
    organization: "Open Earth Journal",
    type: "Fictional Environmental Publication",
    description: "Contributed monthly photo essays, editorial features, and wilderness field notes covering temperate rainforest ecosystems.",
    highlights: [
      "Authored 18 published visual stories on habitat protection",
      "Captured exclusive imagery of highland bird nesting behaviors",
      "Awarded Contributor of the Year (Fictional Award)"
    ]
  },
  {
    period: "2016 — 2018",
    role: "Field Photography Assistant",
    organization: "North Range Expeditions",
    type: "Fictional Wilderness Production Team",
    description: "Assisted senior natural history photographers with heavy field gear management, backcountry safety, equipment maintenance, and image cataloging.",
    highlights: [
      "Managed remote weather-proof camping & solar battery stations",
      "Logged over 250 days in sub-alpine field conditions",
      "Mastered wilderness survival & wilderness first aid protocols"
    ]
  }
];

export const EXPEDITIONS = [
  {
    id: "exp-1",
    name: "Aurora Highlands",
    coordinates: { x: 22, y: 30 },
    year: "2025",
    duration: "45 Days",
    focus: "Sub-polar Wildlife & Glacial Valleys",
    visual: heroImg,
    summary: "A high-latitude expedition documenting winter wildlife adaptations, sub-polar vegetation, and glacial retreat in isolation."
  },
  {
    id: "exp-2",
    name: "Verdant Basin",
    coordinates: { x: 45, y: 55 },
    year: "2024",
    duration: "30 Days",
    focus: "Ancient Canopy & River Corridors",
    visual: projectGreenValley,
    summary: "Exploring dense temperate forest canopy layers and tracking rare arboreal species along pristine river corridors."
  },
  {
    id: "exp-3",
    name: "Silver Coast Range",
    coordinates: { x: 75, y: 38 },
    year: "2023",
    duration: "60 Days",
    focus: "Marine Birds & Seacoast Cliffs",
    visual: projectWingsRidge,
    summary: "Seacoast cliffside monitoring of migratory seabird colonies nesting along dramatic wave-swept rock formations."
  },
  {
    id: "exp-4",
    name: "Northern Mosslands",
    coordinates: { x: 35, y: 78 },
    year: "2022",
    duration: "25 Days",
    focus: "Peatland Ecosystems & Wetland Flora",
    visual: projectSilentRivers,
    summary: "A specialized botanical and amphibian visual research project across untouched peat bogs and silent moss wetlands."
  },
  {
    id: "exp-5",
    name: "Ember Valley",
    coordinates: { x: 68, y: 72 },
    year: "2021",
    duration: "40 Days",
    focus: "Geothermal Micro-climates & Fauna",
    visual: projectGreenValley,
    summary: "Investigating unique thermal stream microclimates and winter refuge behaviors of highland bird species."
  }
];

export const EXPERTISE_SKILLS = [
  {
    category: "FIELD PHOTOGRAPHY",
    icon: "Camera",
    skills: [
      "Wildlife Observation & Behavior",
      "Natural Light & Weather Mastery",
      "Long Telephoto Composition",
      "Low-Impact Remote Field Planning"
    ]
  },
  {
    category: "DOCUMENTARY NARRATIVE",
    icon: "BookOpen",
    skills: [
      "Visual Story Architecture",
      "Field Interview Direction",
      "Environmental Essay Sequencing",
      "In-depth Conservation Research"
    ]
  },
  {
    category: "POST-PRODUCTION",
    icon: "Sliders",
    skills: [
      "Raw Processing & Color Calibration",
      "Non-destructive Image Editing",
      "Visual Portfolio Curation",
      "Digital Asset Archive Management"
    ]
  },
  {
    category: "FIELD OPERATIONS",
    icon: "Compass",
    skills: [
      "Remote Wilderness Logistics",
      "Backcountry Expedition Safety",
      "Weather-sealed Equipment Care",
      "Cross-disciplinary Team Leadership"
    ]
  }
];

export const EDUCATION_DATA = [
  {
    period: "2013 — 2016",
    degree: "Bachelor of Visual Storytelling",
    institution: "Southern Institute of Creative Media",
    type: "Fictional Institution",
    description: "Focus: Documentary Photography, Environmental Journalism & Visual Communication. Graduated with Honors."
  },
  {
    period: "2017",
    degree: "Advanced Field Storytelling Program",
    institution: "Wilderness Media Academy",
    type: "Fictional Academy",
    description: "Intensive 6-month backcountry documentary training, ethics in wildlife photojournalism, and expedition logistics."
  },
  {
    period: "2019",
    degree: "Environmental Visual Research Program",
    institution: "Pacific Story Lab",
    type: "Fictional Research Lab",
    description: "Specialized fellowship studying ecological storytelling, biodiversity mapping, and non-invasive wildlife tracking."
  }
];

export const PUBLICATIONS_DATA = [
  {
    year: "2025",
    publication: "Wild Terrain Quarterly",
    storyTitle: "The Last Green Valley",
    type: "Cover Feature & 14-Page Visual Essay",
    note: "Fictional Publication"
  },
  {
    year: "2024",
    publication: "Field Notes Journal",
    storyTitle: "Wings Above the Ridge",
    type: "Avian Study Photo Spread",
    note: "Fictional Publication"
  },
  {
    year: "2023",
    publication: "Earthline Stories",
    storyTitle: "Silent Rivers",
    type: "Freshwater Conservation Feature",
    note: "Fictional Publication"
  }
];

export const RECOGNITION_DATA = [
  {
    year: "2025",
    award: "Visual Storytelling Award",
    organization: "Global Nature Narrative Forum",
    category: "Environmental Documentary Category",
    note: "Fictional Recognition"
  },
  {
    year: "2024",
    award: "Field Documentary Recognition",
    organization: "Environmental Media Assembly",
    category: "Wildlife Portfolio Honors",
    note: "Fictional Recognition"
  },
  {
    year: "2022",
    award: "Emerging Visual Storyteller",
    organization: "Wild Lens Collective",
    category: "Conservation Photojournalism",
    note: "Fictional Recognition"
  }
];

export const VALUES_DATA = [
  {
    title: "RESPECT",
    tagline: "Approaching wildlife and natural environments responsibly.",
    description: "The welfare of wildlife and integrity of natural habitats always supersede the desire for an image. We practice strict non-interference."
  },
  {
    title: "PATIENCE",
    tagline: "Allowing stories to unfold naturally over time.",
    description: "True nature stories cannot be staged or rushed. Days of quiet waiting yield authentic moments of undisrupted wild behavior."
  },
  {
    title: "RESPONSIBILITY",
    tagline: "Using visual storytelling to encourage environmental awareness.",
    description: "Photography serves a higher purpose: connecting people emotionally with remote ecosystems so they are inspired to preserve them."
  }
];
