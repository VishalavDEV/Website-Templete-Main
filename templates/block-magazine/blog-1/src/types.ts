export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socialUrl?: string;
  twitter?: string;
  linkedin?: string;
  articleCount?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  count?: number;
}

export interface Comment {
  id: string;
  postId: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  publishedDate: string;
  likes: number;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[]; // paragraphs for rich reading
  author: Author;
  category: Category;
  tags: string[];
  imageUrl: string;
  publishedDate: string;
  readTime: string;
  views: number;
  featured?: boolean;
  trending?: boolean;
  likes: number;
}
