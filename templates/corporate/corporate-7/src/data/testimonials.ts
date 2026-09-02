export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  projectType: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "James Carter",
    role: "CTO",
    company: "FinSecure Bank",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "Straventa delivered a robust AI solution that transformed our fraud detection process. Their team is exceptional!",
    projectType: "AI & Machine Learning"
  },
  {
    id: "test-2",
    name: "Priya Nair",
    role: "Head of IT",
    company: "HealthPlus",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "Their cloud migration strategy reduced our costs by 36% and improved system reliability significantly.",
    projectType: "Cloud Solutions"
  },
  {
    id: "test-3",
    name: "Michael Brown",
    role: "Director",
    company: "RetailMart",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "Outstanding technical expertise, proactive communication, and on-time delivery.",
    projectType: "Data Analytics"
  },
  {
    id: "test-4",
    name: "Sarah Jenkins",
    role: "VP of Digital Engineering",
    company: "AeroTech Solutions",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "Working with Straventa felt like an extension of our internal engineering squad. They hit every milestone ahead of schedule.",
    projectType: "Software Development"
  },
  {
    id: "test-5",
    name: "David Kim",
    role: "Chief Information Security Officer",
    company: "Novis Financial Group",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "Their Zero-Trust implementation and security hardening gave our board complete confidence ahead of our SOC 2 Type II audit.",
    projectType: "Cybersecurity"
  }
];
