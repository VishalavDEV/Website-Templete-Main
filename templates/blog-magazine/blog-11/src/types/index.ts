export type ArticleCategory = 'Agriculture' | 'Technology' | 'AI' | 'Innovation' | 'Stories';

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: ArticleCategory;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readingTime: string;
  image: string;
  featured?: boolean;
  heroFeatured?: boolean;
  tags: string[];
  content: {
    lead: string;
    sections: {
      heading?: string;
      body: string[];
      quote?: {
        text: string;
        author: string;
      };
      image?: {
        url: string;
        caption: string;
        credit: string;
      };
    }[];
    stats?: {
      label: string;
      value: string;
      description: string;
    }[];
  };
}

export interface MagazineIssue {
  id: string;
  issueNumber: string;
  title: string;
  monthYear: string;
  coverImage: string;
  theme: string;
  description: string;
  articleSlugs: string[];
  pdfUrl?: string;
}

export interface SensorHotspot {
  id: string;
  name: string;
  category: 'SOIL' | 'WATER' | 'CROP' | 'WEATHER' | 'YIELD';
  x: number; // percentage from left (0 - 100)
  y: number; // percentage from top (0 - 100)
  shortDesc: string;
  telemetry: {
    status: 'OPTIMAL' | 'WARNING' | 'ALERT';
    metricName: string;
    value: string;
    trend: string;
    insight: string;
  };
}

export interface TimelineStep {
  time: string;
  title: string;
  stage: string;
  image: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface TechnologyCardData {
  id: string;
  title: string;
  badge: string;
  iconName: string;
  shortDesc: string;
  fullDetail: string;
  image: string;
  stats: string;
}
