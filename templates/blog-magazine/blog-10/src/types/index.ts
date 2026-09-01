export type CategorySlug =
  | 'wildlife'
  | 'planet'
  | 'science'
  | 'space'
  | 'history'
  | 'culture'
  | 'exploration'
  | 'photography';

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  articlesCount: number;
  location: string;
}

export interface BodySection {
  id: string;
  heading?: string;
  content: string[];
  image?: {
    url: string;
    alt: string;
    caption: string;
    credit?: string;
    aspectRatio?: 'wide' | 'tall' | 'square';
  };
  pullQuote?: {
    quote: string;
    author?: string;
  };
  callout?: {
    title: string;
    text: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: CategorySlug;
  categoryName: string;
  author: Author;
  date: string;
  readingTime: string;
  heroImage: string;
  heroImageAlt: string;
  heroCaption?: string;
  heroCredit?: string;
  excerpt: string;
  location?: string;
  featured?: boolean;
  leadStory?: boolean;
  editorsPick?: boolean;
  issueSlug?: string;
  tags: string[];
  bodySections: BodySection[];
  relatedArticleSlugs?: string[];
}

export interface MagazineIssue {
  id: string;
  slug: string;
  month: string;
  year: number;
  title: string;
  subtitle: string;
  coverImage: string;
  editorNote: string;
  editorName: string;
  featuredStories: {
    title: string;
    category: string;
    slug: string;
    readingTime: string;
  }[];
  storyCount: number;
  theme: string;
  isCurrent: boolean;
  downloadSize?: string;
}

export interface PhotoItem {
  id: string;
  url: string;
  caption: string;
  location: string;
  photographer: string;
  cameraSettings?: string;
  date?: string;
}

export interface PhotoEssay {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  photographer: Author;
  location: string;
  coverImage: string;
  intro: string;
  photos: PhotoItem[];
  date: string;
  readingTime: string;
}

export interface FieldNote {
  id: string;
  slug: string;
  title: string;
  category: CategorySlug;
  categoryName: string;
  author: Author;
  date: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  summary: string;
  keyPoints: string[];
  content: string;
  location?: string;
}

export interface InteractiveStage {
  step: number;
  title: string;
  subtitle: string;
  metricLabel: string;
  metricValue: string;
  description: string;
  image: string;
  audioAmbience?: string;
  scientificInsight: string;
}

export interface InteractiveStory {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: CategorySlug;
  heroImage: string;
  stages: InteractiveStage[];
  summary: string;
  totalStages: number;
}

export interface CategoryInfo {
  id: string;
  slug: CategorySlug;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  accentColor: string;
  iconName: string;
  storyCount: number;
}

export interface SearchResult {
  type: 'article' | 'photo-essay' | 'field-note' | 'issue';
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category?: string;
  image: string;
  date: string;
  meta: string;
  url: string;
}
