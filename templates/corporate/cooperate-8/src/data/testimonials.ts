export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  location: string;
  isPrimaryFeatured?: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-01",
    quote: "Vertexa didn't just deliver a platform. They changed how our organization operates.",
    author: "Eleanor Sterling",
    role: "Chief Information & Digital Officer",
    company: "Global Logistics Alliance",
    industry: "Logistics & Supply Chain",
    location: "London, United Kingdom",
    isPrimaryFeatured: true
  },
  {
    id: "test-02",
    quote: "In thirty years of enterprise software procurement, Vertexa is the only engineering partner that delivered ahead of schedule with zero architectural debt. Their rigor is unmatched.",
    author: "Julian Thorne",
    role: "Global Head of Quantitative Risk",
    company: "Apex Global Capital",
    industry: "Financial Services",
    location: "New York, USA"
  },
  {
    id: "test-03",
    quote: "The unified clinical data platform Vertexa built transformed our physicians' daily workflow. Critical diagnostic context is now available in milliseconds, directly improving patient outcomes.",
    author: "Dr. Evelyn Vance",
    role: "Chief Medical Information Officer",
    company: "Centennial Health Network",
    industry: "Healthcare",
    location: "Chicago, USA"
  },
  {
    id: "test-04",
    quote: "During our highest-volume global retail peak, Vertexa's composable headless architecture processed 14x normal volume without a single dropped cart or server hitch.",
    author: "Claire Moreau",
    role: "Chief Digital Officer",
    company: "Aura Luxury Brands",
    industry: "Retail & Commerce",
    location: "Paris, France"
  },
  {
    id: "test-05",
    quote: "Vertexa connected 140 industrial plants into a single predictive digital twin. What was once reactive firefighting is now autonomous precision maintenance.",
    author: "Henrik Lindqvist",
    role: "VP of Global Manufacturing Operations",
    company: "Nordic Industrial Group",
    industry: "Manufacturing",
    location: "Stockholm, Sweden"
  }
];
