import portraitImg from '../assets/images/portrait.jpg';
import philosophyImg from '../assets/images/philosophy.jpg';

import projectSeasonalImg from '../assets/images/project_seasonal.jpg';
import projectEmberImg from '../assets/images/project_ember.jpg';
import projectGardenImg from '../assets/images/project_garden.jpg';
import projectTidesImg from '../assets/images/project_tides.jpg';
import projectAutumnImg from '../assets/images/project_autumn.jpg';

import ingHerbsImg from '../assets/images/ing_herbs.jpg';
import ingRootsImg from '../assets/images/ing_roots.jpg';
import ingCitrusImg from '../assets/images/ing_citrus.jpg';
import ingMushroomsImg from '../assets/images/ing_mushrooms.jpg';
import ingFruitsImg from '../assets/images/ing_fruits.jpg';
import ingGreensImg from '../assets/images/ing_greens.jpg';

export const CHEF_PROFILE = {
  name: "Lucien Moreau",
  initials: "LM",
  title: "Executive Chef & Culinary Director",
  specialization: "Contemporary Seasonal Cuisine & Culinary Experience Design",
  experienceYears: "16+",
  location: "Lyon, France",
  tagline: "Every ingredient carries a story. Every dish gives it a voice.",
  intro: "A fictional culinary director with over sixteen years of experience developing contemporary dining concepts rooted in seasonality, craftsmanship, and memorable guest experiences.",
  quote: "A meal becomes memorable when technique disappears and feeling remains.",
  quoteContext: "Reflecting on sixteen years of menu development across European fine dining and concept design.",
  email: "hello@lucienmoreau.example",
  portrait: portraitImg,
  philosophyImg: philosophyImg,
};

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: "01",
    title: "SEASON",
    description: "Let the natural rhythm of ingredients guide the menu. Timing is everything; serving produce at its absolute peak yields emotional resonance."
  },
  {
    number: "02",
    title: "CRAFT",
    description: "Respect technique without letting it overpower the ingredient. High culinary skill serves to illuminate, never to disguise."
  },
  {
    number: "03",
    title: "MEMORY",
    description: "Create experiences that stay with people after the meal ends. True hospitality lingers in scent, texture, and communal atmosphere."
  }
];

export const PROJECTS = [
  {
    id: "seasonal-table",
    number: "01",
    title: "THE SEASONAL TABLE",
    year: "2025",
    type: "Contemporary Dining Concept",
    description: "A fictional dining concept built around changing seasonal menus and locally inspired ingredients.",
    longDescription: "The Seasonal Table reimagines classic multi-course dining around hyper-local micro-seasons. Rather than quarterly menu changes, dishes evolve weekly based on soil temperature, rainfall, and morning harvest. The kitchen operates in direct dialogue with local urban micro-farms.",
    image: projectSeasonalImg,
    keyIngredients: ["Slow-Poached White Asparagus", "Chervil Emulsion", "Smoked Trout Roe", "Crisp Sourdough Crumble"],
    approach: "Focus on delicate botanical poaching and contrasting textures of ocean and garden.",
    layoutType: "horizontal"
  },
  {
    id: "ember-orchard",
    number: "02",
    title: "EMBER & ORCHARD",
    year: "2024",
    type: "Open-Fire Culinary Experience",
    description: "A fictional food concept exploring fire, fruit, smoke, and seasonal produce.",
    longDescription: "Born from a summer residency, Ember & Orchard centers on primal wood-fire cooking paired with orchard fruits. By burning distinct hardwoods—apple, cherry, and oak—the smoke itself becomes a liquid spice that transforms charred proteins and caramelized stone fruits.",
    image: projectEmberImg,
    keyIngredients: ["Open-Fire Duck Breast", "Scorched Plum Glaze", "Wild Thyme Embers", "Smoked Fruit Puree"],
    approach: "Controlled smoke infusion using seasoned fruitwoods and dark glaze reduction.",
    layoutType: "vertical"
  },
  {
    id: "silent-garden",
    number: "03",
    title: "THE SILENT GARDEN",
    year: "2023",
    type: "Vegetable-Focused Tasting Concept",
    description: "A fictional culinary concept centered around texture, seasonality, and garden ingredients.",
    longDescription: "An 8-course plant-forward tasting menu where vegetables take center stage as primary proteins. Soil, root, leaf, and seed are explored through zero-waste fermentation, solar drying, and concentrated botanical broths.",
    image: projectGardenImg,
    keyIngredients: ["Roasted Heirloom Turnip", "Wild Sorrel Foam", "Fermented Garlic Glaze", "Crispy Garden Kale"],
    approach: "Elevating humble root tubers into complex Umami-rich central courses.",
    layoutType: "split"
  },
  {
    id: "tides-coast",
    number: "04",
    title: "TIDES OF THE COAST",
    year: "2022",
    type: "Coastal Dining Experience",
    description: "A fictional menu concept inspired by fictional coastal regions and marine ingredients.",
    longDescription: "Drawing inspiration from Atlantic shorelines, Tides of the Coast balances wild-caught line fish with halophyte sea vegetables. Crisp ocean salinity meets warm clarified butter and reduced kelp broths.",
    image: projectTidesImg,
    keyIngredients: ["Pan-Seared Wild Bass", "Rock Samphire", "Sea Fennel", "Kelp Dashi Broth"],
    approach: "Table-side warm broth pour and delicate crisp skin searing.",
    layoutType: "full-width"
  },
  {
    id: "autumn-no7",
    number: "05",
    title: "AUTUMN / NO. 7",
    year: "2021",
    type: "Limited Seasonal Menu",
    description: "A fictional short-term menu experience celebrating autumn ingredients.",
    longDescription: "A cozy, atmospheric pop-up menu celebrating the transition into fall. Earthy forest mushrooms, shaved black truffles, and rich chestnut reductions evoke crisp woodland walks.",
    image: projectAutumnImg,
    keyIngredients: ["Seared Chanterelles", "Black Truffle Shavings", "Brown Butter Chestnut Puree", "Juniper Jus"],
    approach: "Rich aromatic layerings of woodland umami and warm brown butter notes.",
    layoutType: "overlapping"
  }
];

export const INGREDIENTS = [
  {
    id: "wild-herbs",
    name: "Wild Herbs",
    image: ingHerbsImg,
    inspiration: "Hand-foraged wild thyme, chervil, and elderflower bringing floral, peppery top notes.",
    season: "Spring / Early Summer",
    texture: "Crisp, delicate, aromatic",
    flavorDirection: "Herbaceous & Floral",
    relatedConcept: "The Seasonal Table"
  },
  {
    id: "root-vegetables",
    name: "Root Vegetables",
    image: ingRootsImg,
    inspiration: "Heirloom golden beets and watermelon radishes providing grounding earthy sweetness.",
    season: "Autumn / Winter",
    texture: "Dense, crunchy when raw, velvety when roasted",
    flavorDirection: "Earthy & Mineral",
    relatedConcept: "The Silent Garden"
  },
  {
    id: "citrus-botanicals",
    name: "Citrus & Botanicals",
    image: ingCitrusImg,
    inspiration: "Finger lime caviar, blood orange, and bergamot peel offering vivid acidity and essential oils.",
    season: "Late Winter",
    texture: "Juicy, popping, vibrant rind",
    flavorDirection: "Bright Acidic Accent",
    relatedConcept: "The Seasonal Table"
  },
  {
    id: "forest-mushrooms",
    name: "Forest Mushrooms",
    image: ingMushroomsImg,
    inspiration: "Wild golden chanterelles and black morels gathered from pine wood forests.",
    season: "Mid Autumn",
    texture: "Fleshy, tender, woodsy",
    flavorDirection: "Umami & Pine Smoke",
    relatedConcept: "Autumn / No. 7"
  },
  {
    id: "stone-fruits",
    name: "Heirloom Stone Fruits",
    image: ingFruitsImg,
    inspiration: "Charred fresh figs, white peaches, and wild blackberries paired with open flame.",
    season: "High Summer",
    texture: "Succulent, caramelized, jammy",
    flavorDirection: "Sweet Smoke & Honeyed Acid",
    relatedConcept: "Ember & Orchard"
  },
  {
    id: "coastal-greens",
    name: "Coastal Greens",
    image: ingGreensImg,
    inspiration: "Sea fennel, rock samphire, and marine botanicals harvested near ocean tide lines.",
    season: "Year-Round",
    texture: "Succulent, saline crunch",
    flavorDirection: "Briny & Mineral Clean",
    relatedConcept: "Tides of the Coast"
  }
];

export const CAREER_TIMELINE = [
  {
    courseLabel: "STARTER",
    period: "2009 — 2012",
    role: "Commis Chef",
    organization: "Maison Rivière",
    note: "Fictional restaurant",
    location: "Lyon, France",
    responsibilities: "Mastered classical saucier techniques, butchery, and high-volume fine dining prep.",
    contribution: "Pioneered a daily herb preservation system that reduced prep waste by 30%."
  },
  {
    courseLabel: "FIRST COURSE",
    period: "2012 — 2015",
    role: "Chef de Partie",
    organization: "The Copper Room",
    note: "Fictional restaurant",
    location: "Paris, France",
    responsibilities: "Managed the fish and hot appetizer stations; coordinated daily direct farmer deliveries.",
    contribution: "Developed the restaurant's signature smoked seafood appetizer program."
  },
  {
    courseLabel: "MAIN COURSE",
    period: "2015 — 2019",
    role: "Sous Chef",
    organization: "Atelier Serein",
    note: "Fictional culinary studio",
    location: "Bordeaux, France",
    responsibilities: "Led kitchen brigading of 14 chefs, spearheaded seasonal menu R&D and private tasting events.",
    contribution: "Co-authored seasonal tasting menus that earned regional culinary acclaim."
  },
  {
    courseLabel: "SIGNATURE",
    period: "2019 — 2023",
    role: "Head Chef",
    organization: "Lumen Dining House",
    note: "Fictional restaurant",
    location: "Lyon, France",
    responsibilities: "Full creative autonomy over menu design, supplier networks, wine pairings, and staff mentoring.",
    contribution: "Achieved record dining guest satisfaction ratings and featured in European culinary journals."
  },
  {
    courseLabel: "PRESENT",
    period: "2023 — CURRENT",
    role: "Executive Chef & Culinary Director",
    organization: "Orchard & Ember Collective",
    note: "Fictional organization",
    location: "Lyon, France",
    responsibilities: "Directing culinary vision, pop-up concepts, hospitality consultation, and bespoke event design.",
    contribution: "Successfully launched 3 fictional immersive pop-up concepts across Europe."
  }
];

export const EXPERTISE_CATEGORIES = [
  {
    title: "CULINARY DIRECTION",
    items: ["Menu Development", "Concept Creation", "Seasonal Planning", "Guest Experience"],
    percentage: 95
  },
  {
    title: "KITCHEN LEADERSHIP",
    items: ["Team Development", "Kitchen Operations", "Training", "Service Coordination"],
    percentage: 92
  },
  {
    title: "TECHNIQUE",
    items: ["Modern Cooking", "Open-Fire Cooking", "Fermentation", "Plating & Presentation"],
    percentage: 96
  },
  {
    title: "CREATIVE",
    items: ["Food Storytelling", "Culinary Research", "Experience Design", "Visual Direction"],
    percentage: 94
  }
];

export const EDUCATION = [
  {
    degree: "Professional Culinary Arts Diploma",
    institution: "École Culinaire Nouvelle",
    note: "Fictional institution",
    year: "2007 — 2009",
    details: "Specialization in French Classical Foundations, Saucier Arts, and Kitchen Management."
  },
  {
    degree: "Advanced Culinary Leadership Program",
    institution: "Institute of Modern Gastronomy",
    note: "Fictional institution",
    year: "2016",
    details: "Executive training in multi-concept dining, sustainable supply chains, and staff psychology."
  },
  {
    degree: "Contemporary Food Design Workshop",
    institution: "European Culinary Studio",
    note: "Fictional program",
    year: "2018",
    details: "Intensive laboratory on sensory experience design, botanical extraction, and food optics."
  }
];

export const RECOGNITION = [
  {
    year: "2025",
    title: "Contemporary Culinary Vision Award",
    organization: "European Dining Forum",
    note: "Fictional organization",
    description: "Awarded for groundbreaking work in zero-waste seasonal tasting menu design."
  },
  {
    year: "2023",
    title: "Creative Menu Innovation Recognition",
    organization: "International Culinary Assembly",
    note: "Fictional organization",
    description: "Honored for narrative storytelling through regional botanicals."
  },
  {
    year: "2021",
    title: "Rising Culinary Leadership Award",
    organization: "Modern Kitchen Collective",
    note: "Fictional organization",
    description: "Recognized for exemplary kitchen culture and mentorship standards."
  }
];

export const TALKS = [
  {
    title: "FOOD, MEMORY & PLACE",
    event: "Creative Food Forum",
    year: "2025",
    summary: "Keynote lecture on how regional scents and ingredients evoke deep personal memories during fine dining service."
  },
  {
    title: "SEASONALITY AS DESIGN",
    event: "Modern Culinary Assembly",
    year: "2024",
    summary: "Workshop exploring dynamic menu architecture that adapts to weekly weather patterns and local micro-climates."
  },
  {
    title: "BUILDING CREATIVE KITCHEN CULTURES",
    event: "Kitchen Leadership Symposium",
    year: "2023",
    summary: "Panel session discussing sustainable work hours, psychological safety, and collaborative menu development."
  }
];
