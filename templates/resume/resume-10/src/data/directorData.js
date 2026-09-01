export const directorProfile = {
  name: "ELIAS ROWAN",
  shortName: "ER",
  title: "FILM DIRECTOR & VISUAL STORYTELLER",
  specialization: "Narrative Film, Visual Direction & Cinematic Storytelling",
  experienceYears: "13+ Years",
  location: "Toronto, Canada",
  tagline: "Every frame begins with a question.",
  shortBio: "A fictional film director focused on original narrative storytelling, visual composition, and emotionally driven cinematic experiences.",
  extendedBio: "Elias Rowan crafts deeply human narrative cinema characterized by patient visual composition, architectural spatial awareness, and rich emotional resonance. Over 13 years of independent and studio direction, Rowan has explored how silence, memory, and physical landscape reflect inner psychological states.",
  idCode: "ID / ER-013",
  status: "ACTIVE",
  currentFocus: "VISUAL NARRATIVE",
  email: "hello@eliasrowan.example",
  linkedin: "https://linkedin.com/in/eliasrowan-fictional",
  vimeo: "https://vimeo.com/eliasrowan-fictional"
};

export const creativePhilosophy = {
  sectionLabel: "ACT I / THE IDEA",
  title: "Before the Camera Starts Rolling",
  quote: "A story becomes cinematic when what is left unsaid matters as much as what is spoken.",
  abstractImage: "/assets/philosophy.jpg",
  topics: [
    "Visual storytelling",
    "Character perspective",
    "Silence and pacing",
    "Composition & lighting dynamics",
    "Emotional atmosphere",
    "Collaborative filmmaking"
  ],
  principles: [
    {
      id: "FRAME",
      title: "FRAME",
      subtitle: "Geometric Purpose",
      description: "Every image should contribute to the story. The edges of the screen define what exists and what is kept in shadow."
    },
    {
      id: "RHYTHM",
      title: "RHYTHM",
      subtitle: "Emotional Cadence",
      description: "Pacing shapes what the audience feels. Editing is not just cutting time; it is sculpting breathing space."
    },
    {
      id: "PERSPECTIVE",
      title: "PERSPECTIVE",
      subtitle: "Subjective Optics",
      description: "The camera changes how a story is understood. Where we place the lens dictates empathy, tension, and revelation."
    }
  ]
};

export const selectedFilms = [
  {
    id: "film-01",
    filmNumber: "FILM 01",
    title: "THE QUIET BETWEEN STORMS",
    year: "2026",
    genre: "Fictional Drama",
    role: "Writer & Director",
    runtime: "114 MINS",
    studio: "Northline Pictures",
    poster: "/assets/film1.jpg",
    stills: [
      "/assets/film1.jpg",
      "/assets/philosophy.jpg"
    ],
    synopsis: "A fictional story about a remote coastal town and three people confronting the choices they avoided for years as a severe tempest approaches.",
    layoutType: "full-poster",
    creativeApproach: "Using ultra-wide anamorphic lenses and natural ambient grey coastal lighting to mirror the characters' internal isolation.",
    visualNotes: "Desaturated cool blues, deep ocean slate greys, and stark architectural framing along rocky clifftops.",
    cast: ["Julian Vance", "Mara Sterling", "Kaelen Voss"],
    crew: {
      cinematography: "Helena Rostova",
      editing: "Marcus Vance",
      score: "Evelyn Thorne"
    },
    screenplaySnippet: `EXT. COASTAL CLIFF - DAY

The wind carries mist across black basalt rocks. ELIAS (40s) stands at the edge, jacket collar turned up. The sea churns below.

ELIAS
(quietly, to himself)
It doesn't end when the water recedes.`
  },
  {
    id: "film-02",
    filmNumber: "FILM 02",
    title: "NORTHBOUND LIGHT",
    year: "2024",
    genre: "Fictional Coming-of-Age Drama",
    role: "Director",
    runtime: "98 MINS",
    studio: "Framehouse Studio",
    poster: "/assets/film2.jpg",
    stills: [
      "/assets/film2.jpg",
      "/assets/film4.jpg"
    ],
    synopsis: "A fictional story following a young photographer traveling through changing northern landscapes, seeking rare solar phenomena while coming to terms with estranged family roots.",
    layoutType: "film-strip",
    creativeApproach: "Handheld 35mm film aesthetic with organic golden hour backlighting, capturing raw landscapes and spontaneous emotional beats.",
    visualNotes: "Warm sunset ambers contrasting against cold mountain snowscapes and dense evergreen pine silhouettes.",
    cast: ["Claire Laurent", "David Chen", "Soren Lindqvist"],
    crew: {
      cinematography: "Oliver Hayes",
      editing: "Elias Rowan",
      score: "Aris Thorne"
    },
    screenplaySnippet: `INT. VINTAGE CAMPER VAN - TWILIGHT

Dust motes drift through amber light. CLAIRE (22) holds her 35mm camera to her eye, adjusting the focus ring on the pine horizon outside.

CLAIRE
Light only stays still if you capture it before it shifts.`
  },
  {
    id: "film-03",
    filmNumber: "FILM 03",
    title: "THE DISTANCE OF WATER",
    year: "2023",
    genre: "Fictional Mystery Drama",
    role: "Writer & Director",
    runtime: "106 MINS",
    studio: "Silverline Narrative Collective",
    poster: "/assets/film3.jpg",
    stills: [
      "/assets/film3.jpg",
      "/assets/philosophy.jpg"
    ],
    synopsis: "A fictional story about memory, family secrets, and an unexplained disappearance in a quiet lakeside community where calm waters conceal deep tensions.",
    layoutType: "split-screen",
    creativeApproach: "Deep focus cinematography with symmetry and reflection dynamics, emphasizing the duality between surface reality and hidden truth.",
    visualNotes: "Mirror-like water surfaces, moody forest greens, deep mist layers, and soft morning reflections.",
    cast: ["Nora Sterling", "Adrian Cross", "Elena Rostova"],
    crew: {
      cinematography: "Tariq Mansoor",
      editing: "Maya Lin",
      score: "Johan Vance"
    },
    screenplaySnippet: `EXT. LAKESIDE DOCK - MORNING

Fog hangs low over glass-like water. A solitary rowboat drifts five yards off the end of the wooden pier.

NORA
(O.S.)
Some memories don't sink. They just float until someone notices.`
  },
  {
    id: "film-04",
    filmNumber: "FILM 04",
    title: "SEVEN MINUTES OF SUMMER",
    year: "2021",
    genre: "Fictional Short Film",
    role: "Director",
    runtime: "22 MINS",
    studio: "Open Frame Studio",
    poster: "/assets/film4.jpg",
    stills: [
      "/assets/film4.jpg",
      "/assets/film2.jpg"
    ],
    synopsis: "A fictional short film exploring one quiet afternoon on a sunlit porch that quietly changes a family's future forever.",
    layoutType: "minimal-floating",
    creativeApproach: "Intimate close-ups, naturalistic sound design of rustling leaves and distant cicadas, patient real-time pacing.",
    visualNotes: "Soft dappled sunlight, warm cedar wood tones, sun-bleached linen fabrics, and gentle lens flares.",
    cast: ["Hannah Miller", "Thomas Reed", "Leo Miller"],
    crew: {
      cinematography: "Elias Rowan",
      editing: "Elias Rowan",
      score: "Nathalie Duprès"
    },
    screenplaySnippet: `EXT. PORCH BENCH - AFTERNOON

Sunlight filters through grapevines. HANNAH rests her hand gently on THOMAS's wrist. Seven minutes pass without a word spoken.

THOMAS
(softly)
We'll remember this porch.`
  },
  {
    id: "film-05",
    filmNumber: "FILM 05",
    title: "THE LAST ROOM",
    year: "2019",
    genre: "Fictional Psychological Drama",
    role: "Director",
    runtime: "88 MINS",
    studio: "Framehouse Studio",
    poster: "/assets/film5.jpg",
    stills: [
      "/assets/film5.jpg",
      "/assets/film1.jpg"
    ],
    synopsis: "A fictional narrative set inside an old apartment building where every resident remembers the exact same evening event completely differently.",
    layoutType: "interactive-storyboard",
    creativeApproach: "High-contrast chiaroscuro shadows, long corridor tracker shots, and rhythmic sound cues that question subjective memory.",
    visualNotes: "Rich sepia charcoals, amber hallway lanterns, long geometric shadows, and aged plaster textures.",
    cast: ["Victor Moreau", "Sylvia Vance", "Ian Holm-Fictional"],
    crew: {
      cinematography: "Darius K.",
      editing: "Marcus Vance",
      score: "Elias Rowan & Evelyn Thorne"
    },
    screenplaySnippet: `INT. APARTMENT CORRIDOR - NIGHT

Light spills under Door 4B. VICTOR stands in the shadows of the staircase, holding an unread letter.

VICTOR
Everyone who lived here left behind a different version of the door.`
  }
];

export const filmStripFrames = [
  {
    frameId: "FRAME 01",
    total: "24",
    title: "Coastal Horizon",
    year: "2026",
    film: "The Quiet Between Storms",
    image: "/assets/film1.jpg",
    caption: "Establishing extreme wide shot of basalt coastline at dawn."
  },
  {
    frameId: "FRAME 04",
    total: "24",
    title: "Prism Refraction",
    year: "2025",
    film: "Visual Study No. 3",
    image: "/assets/philosophy.jpg",
    caption: "Abstract lens study on geometric light dispersion."
  },
  {
    frameId: "FRAME 09",
    total: "24",
    title: "Northern Highway",
    year: "2024",
    film: "Northbound Light",
    image: "/assets/film2.jpg",
    caption: "Anamorphic wide tracking shot following solitary traveler."
  },
  {
    frameId: "FRAME 14",
    total: "24",
    title: "Lake Fog Silence",
    year: "2023",
    film: "The Distance of Water",
    image: "/assets/film3.jpg",
    caption: "Mirror reflection composition with low-slung mist."
  },
  {
    frameId: "FRAME 18",
    total: "24",
    title: "Golden Hour Porch",
    year: "2021",
    film: "Seven Minutes of Summer",
    image: "/assets/film4.jpg",
    caption: "Natural sunlight backlighting intimate moment."
  },
  {
    frameId: "FRAME 22",
    total: "24",
    title: "Chiaroscuro Corridor",
    year: "2019",
    film: "The Last Room",
    image: "/assets/film5.jpg",
    caption: "High contrast hallway shot exploring perspective depth."
  }
];

export const directingProcess = {
  sectionLabel: "ACT III / PROCESS",
  title: "From Script to Screen",
  subtitle: "A disciplined 5-phase approach to visual narrative architecture.",
  phases: [
    {
      number: "PHASE 01",
      name: "THE QUESTION",
      subtitle: "Story Exploration & Core Intent",
      description: "Uncovering the emotional core of the narrative. Every project starts by framing the single essential question the characters must confront.",
      details: ["Script breakdown & character psychology", "Core thematic statement definition", "Soundscape mood mapping"],
      image: "/assets/philosophy.jpg"
    },
    {
      number: "PHASE 02",
      name: "THE WORLD",
      subtitle: "Atmosphere & Spatial Language",
      description: "Designing the physical universe. Location scouting, color palette curation, and establishing spatial rules that reflect character states.",
      details: ["Architectural location alignment", "Custom visual lookbooks & color bibles", "Production design collaboration"],
      image: "/assets/film3.jpg"
    },
    {
      number: "PHASE 03",
      name: "THE FRAME",
      subtitle: "Composition & Storyboarding",
      description: "Translating script beats into visual optics. Determining lens choices, camera movement cadence, and shot geometry.",
      details: ["Full cinematic shot listing", "Optical focal length selection", "Precision scene storyboarding"],
      image: "/assets/film5.jpg"
    },
    {
      number: "PHASE 04",
      name: "THE SET",
      subtitle: "Performance & Directorial Guidance",
      description: "Cultivating an environment of trust where actors can uncover unscripted truth, supported by precise technical execution.",
      details: ["Actor collaboration & scene rehearsal", "Set discipline & lighting synchronization", "Blocking & movement choreography"],
      image: "/assets/film4.jpg"
    },
    {
      number: "PHASE 05",
      name: "THE EDIT",
      subtitle: "Rhythm, Sound & Final Cut",
      description: "Refining time and emotion in the cutting room. Balancing rhythm, silence, sound design, and color grading to complete the story.",
      details: ["Pacing & structural rhythm edit", "Spatial sound design & score mix", "Fine color grading & film texture"],
      image: "/assets/film1.jpg"
    }
  ]
};

export const careerExperience = [
  {
    period: "2022 — PRESENT",
    role: "Creative Director & Film Director",
    company: "Northline Pictures",
    companyType: "Fictional Independent Production Studio",
    location: "Toronto, Canada",
    contributions: [
      "Directing feature-length fictional narrative projects from initial concept through festival distribution.",
      "Leading multidisciplinary creative teams including cinematographers, production designers, and sound engineers.",
      "Establishing studio visual direction and narrative standards for original original IP.",
      "Spearheading high-budget narrative commissions and visual identity projects."
    ]
  },
  {
    period: "2018 — 2022",
    role: "Director & Creative Producer",
    company: "Framehouse Studio",
    companyType: "Fictional Narrative Film Lab",
    location: "Toronto, Canada",
    contributions: [
      "Directed award-winning fictional short films and psychological drama projects.",
      "Managed pre-production workflow, casting directors, and international location units.",
      "Collaborated closely with screenwriters to develop original character-driven screenplays."
    ]
  },
  {
    period: "2015 — 2018",
    role: "Associate Director",
    company: "Silverline Narrative Collective",
    companyType: "Fictional Media Guild",
    location: "Montreal, Canada",
    contributions: [
      "Assisted senior film directors on feature narrative sets, managing 2nd unit camera teams.",
      "Supervised storyboarding, shot lists, and daily production schedules.",
      "Curated visual reference archives and director treatment decks."
    ]
  },
  {
    period: "2013 — 2015",
    role: "Visual Storytelling Assistant",
    company: "Open Frame Studio",
    companyType: "Fictional Creative House",
    location: "Toronto, Canada",
    contributions: [
      "Supported editorial post-production suites and color grading passes.",
      "Coordinated casting tapes, location scout catalogs, and script revisions.",
      "Produced digital storyboard animatics for pre-visualization."
    ]
  }
];

export const productionToolkit = [
  {
    category: "STORY",
    label: "NARRATIVE & SCRIPT",
    skills: [
      { name: "Narrative Development", level: "Mastery" },
      { name: "Screenwriting Concepts", level: "Expert" },
      { name: "Character Perspective", level: "Mastery" },
      { name: "Story Structure", level: "Expert" },
      { name: "Dialogue Polish", level: "Advanced" }
    ]
  },
  {
    category: "DIRECTION",
    label: "VISUAL & PERFORMANCE",
    skills: [
      { name: "Visual Direction", level: "Mastery" },
      { name: "Scene Planning", level: "Mastery" },
      { name: "Performance Direction", level: "Expert" },
      { name: "Creative Leadership", level: "Mastery" },
      { name: "Blocking Choreography", level: "Expert" }
    ]
  },
  {
    category: "PRODUCTION",
    label: "SET & WORKFLOW",
    skills: [
      { name: "Pre-Production Planning", level: "Expert" },
      { name: "Shot Development", level: "Mastery" },
      { name: "Team Collaboration", level: "Mastery" },
      { name: "Production Coordination", level: "Expert" },
      { name: "Location Integration", level: "Advanced" }
    ]
  },
  {
    category: "POST-PRODUCTION",
    label: "EDIT & SOUND",
    skills: [
      { name: "Editorial Direction", level: "Mastery" },
      { name: "Visual Rhythm", level: "Mastery" },
      { name: "Story Refinement", level: "Expert" },
      { name: "Sound Collaboration", level: "Expert" },
      { name: "Color Bible Supervision", level: "Expert" }
    ]
  }
];

export const educationList = [
  {
    degree: "Master of Visual Narrative",
    institution: "Toronto Institute of Cinematic Arts",
    institutionType: "Fictional Graduate Film Program",
    period: "2011 — 2013",
    focus: "Specialization in Cinematic Spatial Geometry & Directorial Craft"
  },
  {
    degree: "Bachelor of Film & Media Arts",
    institution: "Northern School of Creative Studies",
    institutionType: "Fictional Academic Institution",
    period: "2008 — 2011",
    focus: "Double concentration in Cinematography & Film History"
  },
  {
    degree: "Advanced Directing Workshop",
    institution: "Modern Screen Lab",
    institutionType: "Fictional Directing Intensive",
    period: "2016",
    focus: "Masterclass on Actor Directing & Anamorphic Lens Systems"
  }
];

export const creativeConversations = [
  {
    year: "2025",
    title: "Visual Silence in Modern Storytelling",
    forum: "Independent Narrative Forum",
    location: "Toronto, CA",
    summary: "Keynote presentation on how unscripted pauses and spatial framing build psychological tension in contemporary cinema."
  },
  {
    year: "2024",
    title: "Directing Emotion Through Space",
    forum: "Contemporary Film Assembly",
    location: "Vancouver, CA",
    summary: "Panel discussion exploring the relationship between production design, lens choice, and audience empathy."
  },
  {
    year: "2023",
    title: "The Director's Perspective",
    forum: "Visual Storytelling Conference",
    location: "Montreal, CA",
    summary: "Masterclass breakdown of scene construction from initial screenplay notes to final sound mix."
  }
];

export const awardsList = [
  {
    year: "2025",
    award: "Visual Narrative Achievement",
    organization: "Future Film Assembly",
    project: "The Quiet Between Storms"
  },
  {
    year: "2024",
    award: "Directing Excellence Recognition",
    organization: "Independent Cinema Forum",
    project: "Northbound Light"
  },
  {
    year: "2021",
    award: "Emerging Visual Storyteller",
    organization: "Narrative Arts Collective",
    project: "Seven Minutes of Summer"
  }
];

export const directorsNote = {
  title: "A DIRECTOR'S NOTE",
  quote: "I am interested in the moments before people understand what they feel.",
  statement: "Cinema is the art of giving physical form to interior human experiences. Whether working with massive coastal landscapes or quiet interior rooms, my commitment is to honor the question at the core of every frame.",
  values: [
    {
      title: "CURIOSITY",
      description: "Follow questions without immediately demanding obvious answers. Trust the audience to feel the unspoken."
    },
    {
      title: "OBSERVATION",
      description: "Notice the small, unscripted moments and spatial gestures that shape larger human stories."
    },
    {
      title: "COLLABORATION",
      description: "A film becomes infinitely stronger when dedicated creative perspectives challenge and refine the vision."
    }
  ]
};

export const disclaimerText = "All names, films, studios, people, organizations, events, awards, institutions, stories, and visuals are fictional demonstration content for Elias Rowan's portfolio demonstration.";
