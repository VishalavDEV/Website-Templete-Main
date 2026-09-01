import { Article, Author, Category, ArticleFilters, PaginatedResult } from '../types';
import { articles } from '../data/articles';
import { categories } from '../data/categories';
import { authors } from '../data/authors';

/**
 * ArticleService encapsulates all data fetching.
 * Designed to mirror Java Spring Boot REST API controllers:
 * e.g., @GetMapping("/api/v1/articles"), @GetMapping("/api/v1/articles/{slug}")
 */
export const articleService = {
  /**
   * Fetch all articles with optional filtering, sorting, and pagination
   */
  async getArticles(filters: ArticleFilters = {}): Promise<PaginatedResult<Article>> {
    // Simulating realistic API network latency
    await new Promise((resolve) => setTimeout(resolve, 60));

    let result = [...articles];

    // Filter by search query
    if (filters.searchQuery && filters.searchQuery.trim() !== '') {
      const q = filters.searchQuery.toLowerCase().trim();
      result = result.filter(
        (art) =>
          art.title.toLowerCase().includes(q) ||
          (art.subtitle && art.subtitle.toLowerCase().includes(q)) ||
          art.excerpt.toLowerCase().includes(q) ||
          art.tags.some((t) => t.toLowerCase().includes(q)) ||
          art.category.toLowerCase().includes(q)
      );
    }

    // Filter by category
    if (filters.category && filters.category !== 'all') {
      result = result.filter((art) => art.category.toLowerCase() === filters.category!.toLowerCase());
    }

    // Filter by tag
    if (filters.tag && filters.tag !== 'all') {
      result = result.filter((art) =>
        art.tags.some((t) => t.toLowerCase() === filters.tag!.toLowerCase())
      );
    }

    // Filter by author
    if (filters.authorId) {
      result = result.filter((art) => art.authorId === filters.authorId);
    }

    // Sort
    const sortBy = filters.sortBy || 'latest';
    if (sortBy === 'latest') {
      result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    } else if (sortBy === 'oldest') {
      result.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
    } else if (sortBy === 'most-read') {
      result.sort((a, b) => b.views - a.views);
    } else if (sortBy === 'reading-time') {
      result.sort((a, b) => parseInt(a.readingTime) - parseInt(b.readingTime));
    }

    const total = result.length;
    const page = filters.page || 1;
    const pageSize = filters.pageSize || 9;
    const totalPages = Math.ceil(total / pageSize);

    const startIndex = (page - 1) * pageSize;
    const paginatedData = result.slice(startIndex, startIndex + pageSize);

    return {
      data: paginatedData,
      total,
      page,
      pageSize,
      totalPages: totalPages === 0 ? 1 : totalPages
    };
  },

  /**
   * Get single article by slug
   */
  async getArticleBySlug(slug: string): Promise<Article | null> {
    await new Promise((resolve) => setTimeout(resolve, 40));
    const found = articles.find((a) => a.slug === slug);
    return found || null;
  },

  /**
   * Get hero featured article
   */
  async getHeroArticle(): Promise<Article> {
    await new Promise((resolve) => setTimeout(resolve, 30));
    return articles.find((a) => a.featured) || articles[0];
  },

  /**
   * Get top featured articles for the featured section
   */
  async getFeaturedArticles(limit = 3): Promise<Article[]> {
    await new Promise((resolve) => setTimeout(resolve, 30));
    return articles.filter((a) => a.featured).slice(0, limit);
  },

  /**
   * Get trending articles
   */
  async getTrendingArticles(limit = 6): Promise<Article[]> {
    await new Promise((resolve) => setTimeout(resolve, 30));
    return articles.filter((a) => a.trending).slice(0, limit);
  },

  /**
   * Get editor's pick articles
   */
  async getEditorPicks(limit = 4): Promise<Article[]> {
    await new Promise((resolve) => setTimeout(resolve, 30));
    return articles.filter((a) => a.editorPick).slice(0, limit);
  },

  /**
   * Get related articles
   */
  async getRelatedArticles(currentSlug: string, category: string, limit = 3): Promise<Article[]> {
    await new Promise((resolve) => setTimeout(resolve, 40));
    const matchingCategory = articles.filter(
      (a) => a.slug !== currentSlug && a.category === category
    );
    if (matchingCategory.length >= limit) {
      return matchingCategory.slice(0, limit);
    }
    const other = articles.filter((a) => a.slug !== currentSlug && a.category !== category);
    return [...matchingCategory, ...other].slice(0, limit);
  },

  /**
   * Get all categories with article count
   */
  async getCategories(): Promise<(Category & { articleCount: number })[]> {
    await new Promise((resolve) => setTimeout(resolve, 30));
    return categories.map((cat) => {
      const count = articles.filter((a) => a.category === cat.slug).length;
      return {
        ...cat,
        articleCount: count
      };
    });
  },

  /**
   * Get category by slug
   */
  async getCategoryBySlug(slug: string): Promise<(Category & { articleCount: number }) | null> {
    await new Promise((resolve) => setTimeout(resolve, 30));
    const cat = categories.find((c) => c.slug === slug);
    if (!cat) return null;
    const count = articles.filter((a) => a.category === cat.slug).length;
    return {
      ...cat,
      articleCount: count
    };
  },

  /**
   * Get all authors with article count
   */
  async getAuthors(): Promise<(Author & { articleCount: number })[]> {
    await new Promise((resolve) => setTimeout(resolve, 30));
    return authors.map((auth) => {
      const count = articles.filter((a) => a.authorId === auth.id).length;
      return {
        ...auth,
        articleCount: count
      };
    });
  },

  /**
   * Get author by slug
   */
  async getAuthorBySlug(slug: string): Promise<(Author & { articleCount: number; articles: Article[] }) | null> {
    await new Promise((resolve) => setTimeout(resolve, 30));
    const auth = authors.find((a) => a.slug === slug);
    if (!auth) return null;
    const authorArticles = articles.filter((a) => a.authorId === auth.id);
    return {
      ...auth,
      articleCount: authorArticles.length,
      articles: authorArticles
    };
  },

  /**
   * Get author by ID
   */
  getAuthorByIdSync(id: string): Author | undefined {
    return authors.find((a) => a.id === id);
  },

  /**
   * Get category by slug sync helper
   */
  getCategoryBySlugSync(slug: string): Category | undefined {
    return categories.find((c) => c.slug === slug);
  },

  /**
   * Get all unique tags
   */
  async getAllTags(): Promise<string[]> {
    const tagSet = new Set<string>();
    articles.forEach((a) => a.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet);
  }
};
