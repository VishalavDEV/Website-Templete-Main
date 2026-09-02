export type CursorType =
  | 'default'
  | 'pointer'
  | 'project'
  | 'button'
  | 'text'
  | 'image'
  | 'link'
  | 'article'
  | 'cta'
  | 'drag';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  client: string;
  year: string;
  image: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
  description: string;
  tags: string[];
  metrics?: string;
  awards?: string[];
  accentColor: string;
}

export interface Service {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
  accent: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  deliverables: string[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  projectRef: string;
  year: string;
}

export interface ClientLogo {
  name: string;
  category: string;
  symbol: string;
}

export interface InquiryData {
  services: string[];
  projectType: string;
  scale: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
}

export interface ClientStory {
  id: number;
  client: string;
  person: string;
  role: string;
  industry: string;
  project: string;
  projectSlug: string;
  quote: string;
  story: string;
  image: string;
  featured?: boolean;
}

export interface ArticleSectionContent {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  leadParagraph?: string;
  paragraphs: string[];
}

export interface ArticleDetailContent {
  introParagraphs: string[];
  tableOfContents: { id: string; number: string; title: string }[];
  problemHeadline: string;
  problemParagraphs: string[];
  problemPullQuote: string;
  inlineImage: {
    url: string;
    caption: string;
    alt: string;
  };
  attentionHeadline: string;
  attentionItems: { number: string; title: string; explanation: string }[];
  visualBreakText: string;
  motionHeadline: string;
  motionParagraphs: string[];
  principles: { number: string; title: string; description: string }[];
  statementQuote: {
    line1: string;
    line2: string;
  };
  conclusionHeadline: string;
  conclusionParagraphs: string[];
  conclusionFinalQuote: string;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  category: 'Design' | 'Strategy' | 'Technology' | 'Branding' | 'Culture';
  description: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  author: string;
  tags?: string[];
  excerpt?: string;
  detail?: Partial<ArticleDetailContent>;
}

export interface EditorialTopic {
  id: string;
  name: string;
  subtitle: string;
  articleCount: number;
  description: string;
}

export interface JobPosition {
  id: string | number;
  number: string;
  title: string;
  department: 'Design' | 'Technology' | 'Strategy' | 'Motion' | 'Production' | 'Content';
  type: string;
  location: string;
  experience: string;
  tagline: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  image: string;
}

export interface JobApplicationState {
  jobId: string | number;
  jobTitle: string;
  name: string;
  email: string;
  portfolio: string;
  linkedin: string;
  introduction: string;
  resumeFileName: string | null;
}
