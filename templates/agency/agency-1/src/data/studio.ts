export interface TeamMember {
  name: string;
  role: string;
  seed: string;
}

export const studio = {
  name: "Foldline",
  email: "hello@foldline.studio",
  phone: "+1 (415) 555-0134",
  addressLines: ["Pier 9, Studio 214", "San Francisco, CA 94111"],
  founded: 2019,
  manifesto:
    "We believe attention is earned in milliseconds and kept over years. Foldline exists for the brands willing to do both — designing identity, products and motion as one continuous act of respect for the person on the other side of the screen.",
};

export const team: TeamMember[] = [
  { name: "Sena Marsh", role: "Founder, Creative Director", seed: "foldline-team-sena" },
  { name: "Ilya Fenn", role: "Design Director, Motion", seed: "foldline-team-ilya" },
  { name: "Priya Nair", role: "Head of Product Design", seed: "foldline-team-priya" },
  { name: "Tomás Rivera", role: "Engineering Lead", seed: "foldline-team-tomas" },
  { name: "Ada Kowalczyk", role: "Brand Strategist", seed: "foldline-team-ada" },
  { name: "June Osei", role: "Producer", seed: "foldline-team-june" },
];

export const values: { title: string; body: string }[] = [
  {
    title: "Clarity over cleverness",
    body: "If a line needs explaining, it goes. Wit is welcome when it lands on the first read; puzzles are not.",
  },
  {
    title: "Craft is a courtesy",
    body: "Detail work — kerning, easing curves, empty states — is how we show respect for people we will never meet.",
  },
  {
    title: "Subtract before you style",
    body: "Most design problems are too-much problems. We remove until what remains has to work.",
  },
  {
    title: "Ship, then sharpen",
    body: "Real usage teaches faster than any review. We put work in front of humans early and stay to iterate.",
  },
];

export interface ProcessStep {
  index: string;
  title: string;
  duration: string;
  body: string;
}

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Listen",
    duration: "Weeks 1–2",
    body: "Stakeholder interviews, customer conversations and audit. We arrive with questions, not templates, and leave with the problem stated plainly.",
  },
  {
    index: "02",
    title: "Frame",
    duration: "Weeks 2–3",
    body: "Strategy, positioning and creative territories. One direction gets chosen for reasons everyone in the room can repeat.",
  },
  {
    index: "03",
    title: "Make",
    duration: "Weeks 3–8",
    body: "Design and engineering run in the same sprint. Prototypes in code, real content, weekly demos — no big reveals.",
  },
  {
    index: "04",
    title: "Launch & learn",
    duration: "Ongoing",
    body: "Ship, measure against the brief, iterate. Systems and documentation hand over so momentum survives us leaving.",
  },
];
