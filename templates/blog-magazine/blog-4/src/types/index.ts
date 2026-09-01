export interface Author {
  id: string;
  slug: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  location: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  featuredArticleId?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  iconName: string;
  color: string;
  accentColor: string;
  featuredImage: string;
}

export interface ArticleContentSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'quote' | 'highlight' | 'list' | 'image';
  content?: string;
  quoteAuthor?: string;
  quoteRole?: string;
  listItems?: string[];
  imageUrl?: string;
  imageCaption?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  category: string; // category slug
  authorId: string;
  date: string;
  publishedAt: string; // ISO format for Spring Boot parity
  readingTime: string; // e.g. "5 min read"
  views: number;
  image: string;
  tags: string[];
  featured: boolean;
  trending?: boolean;
  editorPick?: boolean;
  content: ArticleContentSection[];
}

export type SortOption = 'latest' | 'oldest' | 'most-read' | 'reading-time';

export interface ArticleFilters {
  searchQuery?: string;
  category?: string;
  tag?: string;
  authorId?: string;
  sortBy?: SortOption;
  page?: number;
  pageSize?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
