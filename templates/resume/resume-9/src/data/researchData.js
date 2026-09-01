// Fictional Professional Profile Data for Dr. Mira Ellison
// All institutions, publications, projects, awards, and data are strictly fictional demonstration content.

export const profileData = {
  name: "Dr. Mira Ellison",
  title: "Dr. Mira Ellison",
  profession: "Behavioral Researcher & Psychology Professional",
  specialization: "Human Behavior, Decision-Making & Cognitive Research",
  experienceYears: "11+",
  location: "Amsterdam, Netherlands",
  tagline: "Understanding how people think, decide, adapt, and connect.",
  taglineShort: "Understanding the patterns behind human decisions.",
  introduction: "A fictional behavioral researcher focused on how people think, make decisions, adapt to change, and interact with complex environments.",
  pullQuote: "Behavior is rarely random. Patterns emerge when we learn how to look.",
  portraitUrl: "/images/mira_portrait.jpg",
  biography: [
    "Dr. Mira Ellison is a fictional behavioral researcher specializing in decision-making dynamics, cognitive adaptation, and human interaction within complex systems. Her research explores the psychological mechanisms that influence how individuals evaluate risk, prioritize attention, and adjust their strategies when facing environmental uncertainty.",
    "Over eleven years of fictional inquiry, she has led interdisciplinary research initiatives at prominent fictional institutes across Northern Europe. Her methodological approach integrates qualitative observational synthesis, structured behavioral simulations, and contextual inquiry, bridging theoretical cognitive psychology with human-centered application.",
    "Committed to ethical research principles and transparent methodologies, Dr. Ellison advocates for responsible data interpretation and accessible scientific communication. Her work aims to foster clearer understanding of human agency in an increasingly automated and high-velocity digital world."
  ],
  metrics: [
    { value: "11+", label: "Years Experience", description: "Fictional Research & Inquiry" },
    { value: "32", label: "Fictional Studies", description: "Completed Inquiry Initiatives" },
    { value: "18", label: "Conference Talks", description: "Keynote & Panel Presentations" },
    { value: "14", label: "Academic Projects", description: "Interdisciplinary Collaborations" }
  ],
  disclaimerNote: "All numbers shown are fictional demonstration data."
};

export const researchAreas = [
  {
    id: "decision-making",
    title: "DECISION-MAKING",
    subtitle: "How people evaluate choices and uncertainty.",
    question: "How do individuals structure priority hierarchies under conditions of incomplete information?",
    methods: ["Choice architecture modeling", "Behavioral decision task simulations", "Contextual risk-framing surveys"],
    projectExample: "PROJECT 01: Choices Under Change",
    keyInterest: "Evaluating how choice overload and time pressure shift decision strategies from systematic comparison to heuristic shortcuts.",
    position: { top: "18%", left: "50%" }
  },
  {
    id: "cognitive-adaptation",
    title: "COGNITIVE ADAPTATION",
    subtitle: "How people adjust to changing environments.",
    question: "What structural cues trigger mental model updating when environmental rules unexpectedly alter?",
    methods: ["Task-switching tracking", "Environmental complexity mapping", "Cognitive flexibility assessments"],
    projectExample: "PROJECT 04: Decision Pathways",
    keyInterest: "Investigating the friction between established habits and novel environmental constraints.",
    position: { top: "50%", left: "82%" }
  },
  {
    id: "social-behavior",
    title: "SOCIAL BEHAVIOR",
    subtitle: "How groups influence individual decisions.",
    question: "How do subtle non-verbal signals and micro-interactions shape consensus in remote and hybrid teams?",
    methods: ["Dyadic interaction analysis", "Micro-gesture coding", "Normative influence tracking"],
    projectExample: "PROJECT 03: Small Signals",
    keyInterest: "Understanding how group cohesion forms through implicit behavioral cues rather than explicit instructions.",
    position: { top: "78%", left: "50%" }
  },
  {
    id: "human-technology",
    title: "HUMAN-TECHNOLOGY INTERACTION",
    subtitle: "How digital environments influence attention and behavior.",
    question: "In what ways do notification architectures reconfigure sustained focus and micro-break frequency?",
    methods: ["Digital workflow logging", "Interface friction audits", "Attention duration tracking"],
    projectExample: "PROJECT 05: Digital Habits",
    keyInterest: "Mapping the cognitive cost of digital interruptions and designing low-friction digital environments.",
    position: { top: "50%", left: "18%" }
  }
];

export const projects = [
  {
    id: "project-01",
    code: "PROJECT 01",
    title: "CHOICES UNDER CHANGE",
    year: "2025",
    focus: "Decision-Making",
    description: "A fictional research project exploring how people adapt their choices when familiar environments change.",
    methods: ["Surveys", "Behavioral simulations", "Structured interviews"],
    summary: "This study simulated 450 choice scenarios across varied environmental conditions to examine decision latency, strategy shifting, and post-choice confidence when rules shift mid-task.",
    visual: "/images/research_nodes.jpg",
    details: {
      hypothesis: "Individuals maintain obsolete decision heuristics for an average of 3.4 choice cycles after environment rules alter.",
      findings: "Adaptive speed increases by 42% when environmental feedback is immediate and visually distinct, rather than delayed.",
      fictionalDataset: "N = 450 simulated participants across 3 experimental condition modules."
    }
  },
  {
    id: "project-02",
    code: "PROJECT 02",
    title: "THE ATTENTION LANDSCAPE",
    year: "2024",
    focus: "Human Attention",
    description: "A fictional study examining how environmental complexity influences attention patterns.",
    methods: ["Visual gaze mapping", "Cognitive load assessment", "Contextual noise control"],
    summary: "Analyzed visual focus duration and task switching frequency across high-density vs minimalist workspace configurations.",
    visual: "/images/attention_landscape.jpg",
    details: {
      hypothesis: "Visual noise in peripheral fields reduces continuous focus intervals by up to 35%.",
      findings: "Participants in low-clutter visual environments demonstrated 28% lower self-reported mental exhaustion during multi-step tasks.",
      fictionalDataset: "N = 180 observational focus tracking sessions."
    }
  },
  {
    id: "project-03",
    code: "PROJECT 03",
    title: "SMALL SIGNALS",
    year: "2023",
    focus: "Social Behavior",
    description: "A fictional research project exploring subtle social cues in collaborative environments.",
    methods: ["Observational video coding", "Inter-rater reliability metrics", "Interaction synchronization analysis"],
    summary: "Mapped non-verbal micro-gestures during group decision-making sessions to identify early behavioral predictors of team consensus.",
    visual: "/images/social_signals.jpg",
    details: {
      hypothesis: "Micro-nodding and turn-taking synchrony serve as stronger indicators of true agreement than spoken consensus statements.",
      findings: "High-performing collaborative groups exhibit distinct non-verbal turn-taking cadences prior to reaching major agreement milestones.",
      fictionalDataset: "64 group decision recordings coded across 12 behavioral dimensions."
    }
  },
  {
    id: "project-04",
    code: "PROJECT 04",
    title: "DECISION PATHWAYS",
    year: "2022",
    focus: "Cognitive Processes",
    description: "A fictional project studying how people structure decisions under uncertainty.",
    methods: ["Heuristic tree mapping", "Longitudinal choice logs", "Retrospective protocol analysis"],
    summary: "Charted the cognitive branching pathways individuals generate when evaluating high-ambiguity choices with incomplete information.",
    visual: "/images/research_nodes.jpg",
    details: {
      hypothesis: "People default to binary elimination trees when presented with more than 5 simultaneous options under time pressure.",
      findings: "Structuring options into hierarchical categories reduces decision regret and speeds evaluation without reducing outcome satisfaction.",
      fictionalDataset: "N = 310 decision tree protocols analyzed."
    }
  },
  {
    id: "project-05",
    code: "PROJECT 05",
    title: "DIGITAL HABITS",
    year: "2021",
    focus: "Human-Technology Interaction",
    description: "A fictional behavioral research project exploring digital interaction patterns.",
    methods: ["In-situ behavioral logging", "Trigger mapping", "Workflow interruption analysis"],
    summary: "Investigated notification response cadences, micro-break habits, and tab-switching loops among remote knowledge workers.",
    visual: "/images/attention_landscape.jpg",
    details: {
      hypothesis: "Unplanned digital interruptions break deep focus loops for an average recovery window of 18 minutes.",
      findings: "Batch-notification delivery reduced reactive switching events by 54% while maintaining subjective connectivity metrics.",
      fictionalDataset: "N = 120 participant digital activity streams."
    }
  }
];

export const researchNotes = [
  {
    id: "note-01",
    number: "NOTE 01",
    quote: "People often describe decisions as logical after the decision has already been made.",
    annotation: "Post-hoc rationalization is a foundational cognitive mechanism to preserve personal narrative coherence and lower internal tension.",
    category: "Decision Psychology"
  },
  {
    id: "note-02",
    number: "NOTE 02",
    quote: "Attention is shaped not only by importance, but by context.",
    annotation: "Environmental salience and immediate visual cues regularly override pre-planned priorities in high-stimulus environments.",
    category: "Cognitive Focus"
  },
  {
    id: "note-03",
    number: "NOTE 03",
    quote: "Behavior becomes easier to understand when environments are considered alongside individuals.",
    annotation: "Analyzing an individual in isolation misses structural affordances and subtle environmental pressures.",
    category: "Contextual Dynamics"
  },
  {
    id: "note-04",
    number: "NOTE 04",
    quote: "Uncertainty doesn't stop decision-making; it changes how people seek confirmation.",
    annotation: "When baseline certainty drops, information search shifts from optimal evaluation to quick reassurance seeking.",
    category: "Choice Architecture"
  },
  {
    id: "note-05",
    number: "NOTE 05",
    quote: "Collaborative friction is often a communication mismatch, not an alignment failure.",
    annotation: "Micro-signals in group work frequently reveal implicit expectation gaps rather than fundamental disagreement.",
    category: "Social Interaction"
  }
];

export const experienceData = [
  {
    period: "2023 — PRESENT",
    role: "Lead Behavioral Researcher",
    organization: "Human Insight Laboratory",
    location: "Amsterdam, Netherlands",
    type: "Fictional Research Center",
    summary: "Directing interdisciplinary behavioral inquiry initiatives focused on cognitive adaptation, environmental decision-making, and organizational dynamics.",
    responsibilities: [
      "Leading fictional behavioral research initiatives across Northern European study cohorts.",
      "Designing multi-method research frameworks integrating quantitative choice metrics and qualitative synthesis.",
      "Managing cross-functional research teams and mentoring associate behavioral specialists.",
      "Conducting qualitative analysis on decision pathways in high-complexity environments.",
      "Presenting fictional research findings at academic symposia and public research forums."
    ]
  },
  {
    period: "2020 — 2023",
    role: "Senior Research Specialist",
    organization: "Cognitive Patterns Institute",
    location: "Utrecht, Netherlands",
    type: "Fictional Academic Institute",
    summary: "Coordinated multi-site decision-making research, developing standardized qualitative coding taxonomies for observational study data.",
    responsibilities: [
      "Coordinated 8 multi-phase behavioral inquiry projects exploring decision heuristics under stress.",
      "Developed qualitative coding taxonomies adopted across 4 research project modules.",
      "Authored 6 fictional journal manuscripts on cognitive adaptation and environmental friction."
    ]
  },
  {
    period: "2017 — 2020",
    role: "Behavioral Research Associate",
    organization: "Open Behavior Collective",
    location: "Rotterdam, Netherlands",
    type: "Fictional Research Collective",
    summary: "Designed participant task protocols, performed statistical modeling on interaction logs, and authored research briefs for public policy discussions.",
    responsibilities: [
      "Designed controlled laboratory decision tasks for over 600 study participants.",
      "Synthesized observational video recordings into structured behavioral event timelines.",
      "Collaborated with interdisciplinary designers to test low-friction communication interfaces."
    ]
  },
  {
    period: "2015 — 2017",
    role: "Research Analyst",
    organization: "Context Research Studio",
    location: "Amsterdam, Netherlands",
    type: "Fictional Consultancy Studio",
    summary: "Conducted field interviews, synthesized qualitative field notes, and assisted in exploratory behavioral surveys for social inquiry projects.",
    responsibilities: [
      "Conducted 120+ in-depth semi-structured qualitative interviews.",
      "Coded field transcriptions for recurring behavioral themes and decision friction points.",
      "Prepared baseline research summaries for interdisciplinary team reviews."
    ]
  }
];

export const methodologyCategories = [
  {
    id: "qualitative",
    title: "QUALITATIVE RESEARCH",
    description: "Deep inquiry into human context, subjective experience, and behavioral nuance.",
    methods: [
      { name: "In-Depth Interviews", detail: "Semi-structured protocols for capturing complex mental models." },
      { name: "Observational Studies", detail: "In-situ field recording of natural decision behavior." },
      { name: "Thematic Analysis", detail: "Rigorous inductive coding of qualitative transcripts." },
      { name: "Research Synthesis", detail: "Integrating diverse qualitative streams into actionable frameworks." }
    ]
  },
  {
    id: "behavioral",
    title: "BEHAVIORAL STUDIES",
    description: "Controlled tasks and mapping methodologies for isolating choice mechanisms.",
    methods: [
      { name: "Decision Analysis", detail: "Evaluating trade-off hierarchies and heuristic selection." },
      { name: "Behavioral Mapping", detail: "Diagramming physical & digital user movement pathways." },
      { name: "Survey Design", detail: "Constructing non-leading instrument scales for preference measurement." },
      { name: "Pattern Recognition", detail: "Identifying recurrent choice loops across study cohorts." }
    ]
  },
  {
    id: "data",
    title: "DATA INTERPRETATION",
    description: "Translating research observations into clear conceptual models and visual charts.",
    methods: [
      { name: "Research Visualization", detail: "Crafting clear diagrammatic representations of research pathways." },
      { name: "Comparative Analysis", detail: "Benchmarking behavior across varied environmental conditions." },
      { name: "Trend Identification", detail: "Tracking macro shifts in decision-making over time." },
      { name: "Insight Communication", detail: "Distilling complex inquiry data for non-specialist stakeholders." }
    ]
  },
  {
    id: "professional",
    title: "PROFESSIONAL PRACTICE",
    description: "Leadership, academic dissemination, and collaborative research ethics.",
    methods: [
      { name: "Research Leadership", detail: "Directing interdisciplinary teams with intellectual clarity." },
      { name: "Workshop Facilitation", detail: "Guiding participatory research synthesis sessions." },
      { name: "Academic Writing", detail: "Authoring precise, high-clarity research manuscripts." },
      { name: "Public Speaking", detail: "Delivering engaging keynotes on behavioral inquiry." }
    ]
  }
];

export const publications = [
  {
    id: "pub-2025",
    year: "2025",
    title: "Patterns of Choice in Changing Environments",
    journal: "Journal of Human Context Studies",
    journalType: "Fictional Publication",
    volume: "Vol. 14, Issue 2",
    pages: "pp. 112–134",
    doi: "10.0000/jhcs.2025.0142",
    abstract: "This fictional paper investigates how human choice structures adapt when baseline environmental conditions undergo rapid structural alteration. Utilizing a series of 450 simulated choice tasks, we demonstrate that individuals retain obsolete decision heuristics across multiple choice cycles prior to rule updating. We propose a three-stage model of cognitive adaptation that accounts for decision latency and confidence recovery.",
    keywords: ["Choice Architecture", "Heuristic Updating", "Environmental Shift", "Cognitive Flexibility"],
    bibtex: `@article{ellison2025patterns,\n  author = {Ellison, Mira},\n  title = {Patterns of Choice in Changing Environments},\n  journal = {Journal of Human Context Studies},\n  year = {2025},\n  volume = {14},\n  number = {2},\n  pages = {112--134}\n}`
  },
  {
    id: "pub-2024",
    year: "2024",
    title: "Attention, Context, and Everyday Decisions",
    journal: "Behavioral Inquiry Review",
    journalType: "Fictional Publication",
    volume: "Vol. 29, Issue 4",
    pages: "pp. 204–228",
    doi: "10.0000/bir.2024.0294",
    abstract: "Examining the interplay between visual environmental complexity and continuous focal duration, this paper presents findings from 180 observational tracking sessions. Results indicate that ambient visual noise significantly degrades sustained focus intervals and accelerates self-reported mental exhaustion, highlighting the necessity of contextual design in work environments.",
    keywords: ["Visual Attention", "Contextual Salience", "Focus Duration", "Cognitive Fatigue"],
    bibtex: `@article{ellison2024attention,\n  author = {Ellison, Mira},\n  title = {Attention, Context, and Everyday Decisions},\n  journal = {Behavioral Inquiry Review},\n  year = {2024},\n  volume = {29},\n  number = {4},\n  pages = {204--228}\n}`
  },
  {
    id: "pub-2023",
    year: "2023",
    title: "Small Signals in Collaborative Environments",
    journal: "Contemporary Research Notes",
    journalType: "Fictional Publication",
    volume: "Vol. 8, Issue 1",
    pages: "pp. 45–62",
    doi: "10.0000/crn.2023.0081",
    abstract: "Non-verbal signaling plays a crucial yet under-measured role in group consensus formation. Through micro-gesture analysis of 64 collaborative decision recordings, this study isolates specific turn-taking cadences and non-verbal synchronies that reliably predict consensus outcomes prior to explicit verbal agreement.",
    keywords: ["Social Micro-Cues", "Dyadic Synchrony", "Group Consensus", "Observational Coding"],
    bibtex: `@article{ellison2023small,\n  author = {Ellison, Mira},\n  title = {Small Signals in Collaborative Environments},\n  journal = {Contemporary Research Notes},\n  year = {2023},\n  volume = {8},\n  number = {1},\n  pages = {45--62}\n}`
  },
  {
    id: "pub-2022",
    year: "2022",
    title: "Mapping Decision Pathways",
    journal: "Human Systems Journal",
    journalType: "Fictional Publication",
    volume: "Vol. 19, Issue 3",
    pages: "pp. 88–109",
    doi: "10.0000/hsj.2022.0193",
    abstract: "Under conditions of ambiguous risk, decision-makers construct cognitive branching trees to prune choices. This paper maps 310 decision protocol logs to identify common structural topologies in decision pathways, offering actionable insights for low-friction decision architecture design.",
    keywords: ["Decision Trees", "Risk Ambiguity", "Cognitive Pruning", "Protocol Analysis"],
    bibtex: `@article{ellison2022mapping,\n  author = {Ellison, Mira},\n  title = {Mapping Decision Pathways},\n  journal = {Human Systems Journal},\n  year = {2022},\n  volume = {19},\n  number = {3},\n  pages = {88--109}\n}`
  },
  {
    id: "pub-2021",
    year: "2021",
    title: "Digital Habit Loops in Modern Work Environments",
    journal: "Contextual Dynamics Quarterly",
    journalType: "Fictional Publication",
    volume: "Vol. 5, Issue 2",
    pages: "pp. 140–165",
    doi: "10.0000/cdq.2021.0052",
    abstract: "An empirical investigation into notification response dynamics across remote knowledge workers. The paper highlights the cognitive overhead associated with unscheduled digital context-switching and proposes batched notification schedules as a low-friction mitigation strategy.",
    keywords: ["Digital Habits", "Context Switching", "Notification Friction", "Workplace Psychology"],
    bibtex: `@article{ellison2021digital,\n  author = {Ellison, Mira},\n  title = {Digital Habit Loops in Modern Work Environments},\n  journal = {Contextual Dynamics Quarterly},\n  year = {2021},\n  volume = {5},\n  number = {2},\n  pages = {140--165}\n}`
  }
];

export const educationData = [
  {
    degree: "Doctorate in Behavioral Science",
    institution: "Amsterdam Institute of Human Research",
    location: "Amsterdam, Netherlands",
    period: "2013 — 2017",
    type: "Fictional Institution",
    dissertation: "Dissertation: Cognitive Flexibility & Heuristic Updating in High-Velocity Environment Shifts.",
    advisor: "Prof. Emeritus E. Vance (Fictional)"
  },
  {
    degree: "Master of Cognitive & Behavioral Studies",
    institution: "European School of Social Research",
    location: "Utrecht, Netherlands",
    period: "2011 — 2013",
    type: "Fictional Institution",
    thesis: "Thesis: Non-Verbal Synchronization and Micro-Cues in Group Problem Solving.",
    honors: "Graduated with High Honors (Fictional)"
  },
  {
    degree: "Bachelor of Psychology & Human Behavior",
    institution: "Northern European College",
    location: "Leiden, Netherlands",
    period: "2008 — 2011",
    type: "Fictional Institution",
    focus: "Focus: Experimental Psychology & Research Design Methodologies."
  }
];

export const teachingData = [
  {
    year: "2025",
    title: "Understanding Everyday Decisions",
    event: "Human Behavior Forum",
    location: "Amsterdam",
    type: "Fictional Keynote",
    description: "Keynote presentation examining the subtle psychological scaffolding that shapes daily choices under time constraints."
  },
  {
    year: "2024",
    title: "Attention in a Changing World",
    event: "Cognitive Research Assembly",
    location: "Stockholm (Virtual)",
    type: "Fictional Symposium",
    description: "Invited lecture on environmental visual noise and strategies for preserving deep focus in hyper-connected settings."
  },
  {
    year: "2023",
    title: "Designing Better Behavioral Studies",
    event: "Research Methods Conference",
    location: "Copenhagen",
    type: "Fictional Workshop",
    description: "Full-day methodology workshop on non-leading survey construction and qualitative video coding reliability."
  },
  {
    year: "2022",
    title: "The Psychology of Digital Workflows",
    event: "European Behavioral Symposium",
    location: "Berlin",
    type: "Fictional Presentation",
    description: "Panel discussion exploring cognitive friction points and micro-break dynamics in modern digital tools."
  }
];

export const recognitionData = [
  {
    year: "2025",
    title: "Research Communication Recognition",
    organization: "Behavioral Research Assembly",
    type: "Fictional Organization",
    summary: "Recognized for excellence in translating complex behavioral study frameworks into accessible public knowledge."
  },
  {
    year: "2023",
    title: "Emerging Research Leadership Award",
    organization: "Human Inquiry Collective",
    type: "Fictional Organization",
    summary: "Awarded for interdisciplinary research coordination and commitment to open scientific methodologies."
  },
  {
    year: "2021",
    title: "Innovation in Research Methods Recognition",
    organization: "Contemporary Studies Forum",
    type: "Fictional Organization",
    summary: "Honored for pioneering qualitative coding protocols in video-based dyadic interaction analysis."
  }
];

export const valuesData = [
  {
    id: "curiosity",
    title: "CURIOSITY",
    tagline: "Ask better questions before searching for answers.",
    description: "Rigorous inquiry starts not with rigid assumptions, but with genuine openness to observing how human behavior unfolds in complex real-world settings.",
    icon: "Compass"
  },
  {
    id: "clarity",
    title: "CLARITY",
    tagline: "Make complex ideas understandable.",
    description: "Scientific insight achieves its fullest potential when communicated with precision, simplicity, and visual legibility without sacrificing depth.",
    icon: "Sparkles"
  },
  {
    id: "responsibility",
    title: "RESPONSIBILITY",
    tagline: "Treat people, information, and research with care.",
    description: "Research involves human lives. Ethical rigor, participant respect, and transparent reporting guide every stage of investigation.",
    icon: "ShieldCheck"
  }
];
