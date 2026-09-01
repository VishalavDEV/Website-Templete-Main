export interface Article {
  slug: string;
  title: string;
  dek: string;
  date: string;
  readingTime: string;
  author: string;
  seed: string;
  tint: "peach" | "lavender" | "lavsoft";
  body: { type: "p" | "h2" | "quote" | "li"; text: string; lede?: boolean }[];
}

export const articles: Article[] = [
  {
    slug: "quiet-power-of-editorial-grids",
    title: "The quiet power of editorial grids",
    dek: "Borrowing from magazines is not nostalgia. Asymmetric grids solve attention problems that card grids create.",
    date: "2026-06-12",
    readingTime: "5 min",
    author: "Sena Marsh",
    seed: "foldline-journal-grids",
    tint: "peach",
    body: [
      {
        type: "p",
        text: "Every product team eventually meets the same wall: six features, six equal cards, and nothing for the eye to hold onto. The grid is fair. The page is forgettable.",
        lede: true,
      },
      {
        type: "p",
        text: "Magazines solved this decades ago under a constraint websites forgot: the reader can leave. Editorial designers answer with hierarchy — one dominant element, a clear second, and supporting material that knows its place. Asymmetry is not decoration; it is a ranking device.",
      },
      { type: "h2", text: "Hierarchy is a promise" },
      {
        type: "p",
        text: "When a layout makes one thing unmistakably primary, it promises the reader where to start. That promise reduces effort more than any microcopy can. We treat every homepage as an argument with a single opening sentence.",
      },
      {
        type: "p",
        text: "The practical moves are unglamorous: vary column spans deliberately, let white space do grouping work before borders do, and resist the urge to center everything. A two-thirds/one-third split has survived ninety years of print for a reason.",
      },
      { type: "h2", text: "What this looks like in practice" },
      {
        type: "li",
        text: "Give each section one job and one dominant element.",
      },
      { type: "li", text: "Use space, not boxes, to group related content." },
      { type: "li", text: "Break the grid once per page — intentionally." },
      {
        type: "quote",
        text: "A layout is persuasive when it knows what it wants the reader to think about first.",
      },
      {
        type: "p",
        text: "None of this requires abandoning component thinking. It requires remembering that components compose into pages, and pages make arguments.",
      },
    ],
  },
  {
    slug: "motion-is-a-brand-asset",
    title: "Motion is a brand asset, not decoration",
    dek: "If your identity only exists in still frames, half of how people experience it is undocumented.",
    date: "2026-04-28",
    readingTime: "6 min",
    author: "Ilya Fenn",
    seed: "foldline-journal-motion",
    tint: "lavender",
    body: [
      {
        type: "p",
        text: "Ask to see a brand book and you will get logos, colors, type. Ask how the brand behaves when it moves — on load, on tap, between screens — and most teams shrug. Yet motion is often the first thing a user perceives and the last thing they remember.",
        lede: true,
      },
      { type: "h2", text: "Behavior beats shape" },
      {
        type: "p",
        text: "Two companies can share a palette and feel nothing alike because of timing. One eases like a held breath; the other snaps like a receipt printer. Neither choice is wrong. Undocumented, both drift within a quarter.",
      },
      {
        type: "p",
        text: "We now ship motion principles alongside color tokens: durations, easing personalities, and — more importantly — reasons. An animation must communicate hierarchy, tell a story, or acknowledge an action. If it cannot say which, we cut it.",
      },
      { type: "h2", text: "Respect is part of the system" },
      {
        type: "p",
        text: "Reduced-motion support belongs in the spec, not in a retrofit. A brand that ignores vestibular disorders is declaring who it builds for. Our default: every choreography ships with a static sibling.",
      },
      {
        type: "quote",
        text: "Document the movement the way you document the mark. Future-you will inherit intent instead of guesses.",
      },
    ],
  },
  {
    slug: "designing-trust-into-healthcare",
    title: "Designing trust into healthcare products",
    dek: "Patients do not need delight at difficult moments. They need to feel competent using the thing.",
    date: "2026-02-03",
    readingTime: "7 min",
    author: "Priya Nair",
    seed: "foldline-journal-health",
    tint: "lavsoft",
    body: [
      {
        type: "p",
        text: "Healthcare interfaces are used at the worst moments of people's lives: after a diagnosis, before surgery, waiting on results. Designing for that state changes every decision. Clarity stops being a virtue and becomes a duty of care.",
        lede: true,
      },
      { type: "h2", text: "One question per screen" },
      {
        type: "p",
        text: "The portal patterns that tested best with patients share a discipline: each screen answers exactly one question fully. Results look like results, not rows in a table built for clinicians. Wayfinding disappears because there is nowhere to get lost.",
      },
      {
        type: "p",
        text: "We cut Northlight's portal surface area in half and task success rose by a third. Subtraction was the feature.",
      },
      { type: "h2", text: "Accessibility is the baseline user" },
      {
        type: "li",
        text: "Assume tired eyes: contrast and target sizes exceed WCAG AA.",
      },
      { type: "li", text: "Assume anxiety: never surprise with modals or timers." },
      {
        type: "li",
        text: "Assume interruption: save and restore state without being asked.",
      },
      {
        type: "quote",
        text: "Trust is not a tone of voice in healthcare. It is the accumulated evidence that nothing here will waste your strength.",
      },
    ],
  },
  {
    slug: "why-we-prototype-in-code",
    title: "Why we prototype in code",
    dek: "Static comps hide the truth about products. Motion, states and data are where designs succeed or fail.",
    date: "2025-11-19",
    readingTime: "4 min",
    author: "Sena Marsh",
    seed: "foldline-journal-code",
    tint: "peach",
    body: [
      {
        type: "p",
        text: "A flat mockup is a rumor about software. It cannot stutter on a slow phone, mis-handle a long German word, or show what happens when the list is empty. Prototyping in code moves those discoveries from launch week to week two.",
        lede: true,
      },
      { type: "h2", text: "Cheap enough to be honest" },
      {
        type: "p",
        text: "Our prototypes are ugly on purpose. Unstyled buttons and placeholder data keep stakeholders debating behavior instead of border radii. The polish pass comes only after the flows survive contact with real content.",
      },
      {
        type: "li",
        text: "Real data shapes reveal real layout failures early.",
      },
      { type: "li", text: "State matrices get exercised, not imagined." },
      { type: "li", text: "Handoff friction drops because the artifact runs." },
      {
        type: "quote",
        text: "The fastest way to find out a design is wrong is to build it badly, quickly.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
