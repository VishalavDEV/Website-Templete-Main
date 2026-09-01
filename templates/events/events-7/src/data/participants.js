export const PARTICIPANT_STATS = {
  totalRegistered: "25,000+",
  citiesCount: 68,
  countriesCount: 32,
  womenPercentage: "47%",
  menPercentage: "53%",
  firstTimeRunners: "38%",
  ageGroups: [
    { label: "18 - 29", percentage: "35%" },
    { label: "30 - 45", percentage: "45%" },
    { label: "46 - 60", percentage: "15%" },
    { label: "60+", percentage: "5%" }
  ]
};

export const PARTICIPANT_CATEGORIES = [
  { id: "all", name: "All Runners" },
  { id: "elite", name: "Elite Runners" },
  { id: "first-timer", name: "First-Time Runners" },
  { id: "corporate", name: "Corporate Teams" },
  { id: "students", name: "Student Runners" },
  { id: "seniors", name: "Senior Champions" }
];

export const RUNNER_STORIES = [
  {
    id: "arjun-first-half",
    name: "Arjun Mehta",
    category: "first-timer",
    race: "21.1 KM Half Marathon",
    location: "Chennai",
    quote: "Six months ago I couldn't run 3 KM. Today I'm training for my first half marathon.",
    story: "After a sedentary decade working desk jobs, Arjun took his first steps around Nageswara Rao Park in May. Today, with 400+ kilometers logged, he stands ready to claim his half marathon finisher medal.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
    bib: "VYR-2026-1048",
    targetTime: "2h 15m"
  },
  {
    id: "meera-city-run",
    name: "Meera Krishnan",
    category: "elite",
    race: "21.1 KM Half Marathon",
    location: "Bengaluru",
    quote: "I wanted to experience the city differently — one kilometer at a time.",
    story: "Meera is an avid trail runner returning to the asphalt for Vayora. For her, running through Chennai's historic coastal lanes bathed in dawn light is a spiritual experience.",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80",
    bib: "VYR-2026-0089",
    targetTime: "1h 24m"
  },
  {
    id: "morning-crew",
    name: "The Coastline Striders",
    category: "corporate",
    race: "10 KM City Run",
    location: "Chennai",
    quote: "A group of 14 tech colleagues. One shared goal. One unforgettable finish line.",
    story: "What started as an informal morning jog before standups turned into a 14-member corporate squad running Vayora to raise funds for local sports education.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    bib: "VYR-TEAM-042",
    targetTime: "52m Average"
  },
  {
    id: "senior-champion-david",
    name: "Col. David Selvam (Retd.)",
    category: "seniors",
    race: "21.1 KM Half Marathon",
    location: "Coimbatore",
    quote: "Age is just a number printed on your bib. Passion is what carries your legs.",
    story: "At 72, Colonel David is running his 35th half marathon. He inspires three generations of runners in his family who will all cross the line together in Chennai.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80",
    bib: "VYR-2026-0007",
    targetTime: "2h 30m"
  }
];
