export type WorkCategory = "Branding" | "Digital" | "Motion";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: WorkCategory;
  year: number;
  summary: string;
  services: string[];
  seed: string;
  tint: "peach" | "lavender" | "lavsoft";
  challenge: string;
  approach: string;
  outcome: string;
  quote: { text: string; name: string; role: string };
  facts: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "meridian-roasters",
    title: "A coffee brand with morning energy",
    client: "Meridian Roasters",
    category: "Branding",
    year: 2026,
    summary:
      "Identity, packaging and voice for a specialty roaster stepping out of wholesale and onto the shelf.",
    services: ["Brand identity", "Packaging", "Art direction", "Tone of voice"],
    seed: "foldline-meridian-coffee",
    tint: "peach",
    challenge:
      "Meridian had twelve years of wholesale credibility and almost no shelf presence. Their beans won awards; their bags disappeared between louder competitors. The founders wanted a brand that could carry them into retail without abandoning the cafés that built them.",
    approach:
      "We rebuilt the identity around the moment the brand is actually used — the first pour. A sunrise arc mark, a warm paper stock and a naming system keyed to roast time give every bag a place in a single readable range. Wholesale partners got their own quiet co-branding lockup so nobody lost face on the shelf.",
    outcome:
      "The relaunch landed Meridian in 140 retail doors within two quarters, and their direct subscription grew 3× in the first six months. The range now reads as one family from light to dark — which was always how the founders talked about it.",
    quote: {
      text: "Foldline understood that our brand had to feel like the first sip, not the tasting notes.",
      name: "Dana Okafor",
      role: "Co-founder, Meridian Roasters",
    },
    facts: [
      { label: "Retail doors", value: "+140" },
      { label: "Subscription growth", value: "3x in 6 months" },
      { label: "Range SKUs unified", value: "18" },
    ],
  },
  {
    slug: "loom-and-co",
    title: "Slow furniture, fast checkout",
    client: "Loom & Co",
    category: "Digital",
    year: 2025,
    summary:
      "An e-commerce experience for handcrafted furniture that makes deliberation feel like part of the product.",
    services: ["UX design", "Web engineering", "Design system"],
    seed: "foldline-loom-furniture",
    tint: "lavender",
    challenge:
      "Loom & Co sells pieces people think about for weeks. Their old site treated that consideration as friction to be optimized away, pushing urgency tactics that felt wrong for furniture meant to outlive trends. Conversion was fine; trust was not.",
    approach:
      "We designed for the long decision. Material close-ups at true scale, honest lead times on every page, a saved-room planner instead of a cart timer. Underneath it sits a component library the internal team now ships with, so craft in the code matches craft in the workshop.",
    outcome:
      "Returns dropped by a third once expectations matched reality, and the saved-room planner became the highest-converting feature on the site. Average session length went up — deliberately.",
    quote: {
      text: "They designed patience into the product. Our customers noticed before we did.",
      name: "Jonas Reinholt",
      role: "CEO, Loom & Co",
    },
    facts: [
      { label: "Returns", value: "-34%" },
      { label: "Planner-to-order rate", value: "41%" },
      { label: "Components shipped", value: "62" },
    ],
  },
  {
    slug: "northlight-health",
    title: "Care you can read at a glance",
    client: "Northlight Health",
    category: "Digital",
    year: 2025,
    summary:
      "Redesigning a patient portal around the five tasks people actually need at difficult moments.",
    services: ["Research", "Product design", "Accessibility"],
    seed: "foldline-northlight-health",
    tint: "lavsoft",
    challenge:
      "Northlight's portal had 90 features and five users. Patients logging in after a diagnosis faced a wall of menus when what they needed was one result, one appointment, one answer. Support calls told the story: wayfinding, not capability, was broken.",
    approach:
      "We shadowed intake nurses, mapped the emotional state of each visit type, then cut the surface area in half. Every screen now answers one question fully. Type sizes, contrast and target sizes exceed WCAG AA because tired eyes are the baseline user, not the edge case.",
    outcome:
      "Task success in usability testing rose from 61% to 94%. Support volume for wayfinding fell by half within a quarter of rollout, freeing the call center for questions that actually need a person.",
    quote: {
      text: "For the first time, the portal feels like it was built for patients instead of around a system.",
      name: "Priya Raman",
      role: "Chief Digital Officer, Northlight Health",
    },
    facts: [
      { label: "Task success", value: "61% → 94%" },
      { label: "Wayfinding calls", value: "-52%" },
      { label: "WCAG level", value: "AA+" },
    ],
  },
  {
    slug: "paper-planes-films",
    title: "A studio identity that moves first",
    client: "Paper Planes Films",
    category: "Motion",
    year: 2026,
    summary:
      "Motion identity and title system for a documentary studio whose work lives between stillness and flight.",
    services: ["Motion identity", "Title design", "Toolkit"],
    seed: "foldline-paperplanes-film",
    tint: "peach",
    challenge:
      "Every Paper Planes film looked different — deliberate, until their end cards made each premiere feel like a different company. They needed motion baked into the identity itself, not sprinkled on afterward.",
    approach:
      "We built the mark as a behavior, not a shape: a folded plane that unfolds from any frame edge. A tempo system derived from each film's own footage sets its pacing, so titles belong to the movie they introduce. Editors received a toolkit, not a style frame.",
    outcome:
      "Three festival premieres shipped with the new system before the brand book was even finalized. The unfold has become the thing audiences recognize before the name appears.",
    quote: {
      text: "The identity moves the way our films move. Nothing else we considered came close.",
      name: "Marta Silvestri",
      role: "Creative Director, Paper Planes Films",
    },
    facts: [
      { label: "Premieres on system", value: "3" },
      { label: "Toolkit scenes", value: "24" },
      { label: "Delivery", value: "6 weeks" },
    ],
  },
  {
    slug: "verdant-bank",
    title: "A bank that sounds like a person",
    client: "Verdant Bank",
    category: "Branding",
    year: 2024,
    summary:
      "Rebranding a regional bank from institutional distance to neighborhood plain-spokenness.",
    services: ["Brand strategy", "Identity", "Guidelines", "Rollout"],
    seed: "foldline-verdant-bank",
    tint: "lavender",
    challenge:
      "Verdant had the trust of three generations and the visual language of a utility company. Younger customers routed around branches entirely, and the brand gave them no reason not to.",
    approach:
      "We kept the heritage green but rebuilt everything around it: a warmer palette drawn from the region's landscape, a voice that explains products like a good branch manager would, and photography of real staff rather than stock handshakes. Every template the marketing team touches was redesigned, not just the logo.",
    outcome:
      "New account openings among under-30s doubled within a year. Internally, the rebrand did quiet work too — staff surveys ranked pride in the brand at its highest recorded level.",
    quote: {
      text: "It still looks like us. It finally sounds like us too.",
      name: "Alan Whitfield",
      role: "President, Verdant Bank",
    },
    facts: [
      { label: "Under-30 accounts", value: "2x YoY" },
      { label: "Templates redesigned", value: "130+" },
      { label: "Branch rollouts", value: "22" },
    ],
  },
  {
    slug: "kiln-ceramics",
    title: "Firing schedule as campaign",
    client: "Kiln Ceramics",
    category: "Motion",
    year: 2024,
    summary:
      "Launch site and film series for a ceramics studio that lets process be the marketing.",
    services: ["Campaign", "Site design", "Film direction"],
    seed: "foldline-kiln-ceramics",
    tint: "lavsoft",
    challenge:
      "Kiln's pieces sell out in hours, yet almost nobody outside the studio had seen how they're made. The founders resisted polished advertising — the making itself was the story worth telling.",
    approach:
      "We built the launch around a live firing calendar: films cut to the rhythm of the kiln, temperature data rendered as typography, drop notifications tied to actual openings rather than manufactured scarcity. The website behaves like a viewing gallery with a gift shop at the end.",
    outcome:
      "Each drop now sells through in minutes without discount pressure, and the firing films have brought wholesale inquiries from museums. Process became the moat.",
    quote: {
      text: "Foldline pointed the camera at what we already loved and made it legible.",
      name: "Tom Adeyemi",
      role: "Founder, Kiln Ceramics",
    },
    facts: [
      { label: "Drop sell-through", value: "<10 min" },
      { label: "Films in series", value: "5" },
      { label: "Wholesale leads", value: "+9 museums" },
    ],
  },
];

export const categories: ("All" | WorkCategory)[] = [
  "All",
  "Branding",
  "Digital",
  "Motion",
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function nextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
