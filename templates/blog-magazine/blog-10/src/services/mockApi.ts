import articlesData from '../data/articles.json';
import categoriesData from '../data/categories.json';
import issuesData from '../data/issues.json';
import photoEssaysData from '../data/photoEssays.json';
import fieldNotesData from '../data/fieldNotes.json';
import interactiveStoriesData from '../data/interactiveStories.json';
import authorsData from '../data/authors.json';
import {
  Article,
  CategoryInfo,
  MagazineIssue,
  PhotoEssay,
  FieldNote,
  InteractiveStory,
  Author,
  SearchResult,
  CategorySlug
} from '../types';

const delay = (ms: number = 180) => new Promise((resolve) => setTimeout(resolve, ms));

const castArticles = articlesData as unknown as Article[];
const castCategories = categoriesData as unknown as CategoryInfo[];
const castIssues = issuesData as unknown as MagazineIssue[];
const castPhotoEssays = photoEssaysData as unknown as PhotoEssay[];
const castFieldNotes = fieldNotesData as unknown as FieldNote[];
const castInteractiveStories = interactiveStoriesData as unknown as InteractiveStory[];
const castAuthors = authorsData as unknown as Author[];

export const mockApi = {
  // Articles
  async getArticles(category?: string, limit?: number): Promise<Article[]> {
    await delay();
    let result = [...castArticles];
    if (category) {
      result = result.filter(
        (a) => a.category.toLowerCase() === category.toLowerCase()
      );
    }
    if (limit) {
      result = result.slice(0, limit);
    }
    return result;
  },

  async getArticleBySlug(slug: string): Promise<Article | null> {
    await delay();
    const found = castArticles.find((a) => a.slug === slug);
    return found || null;
  },

  async getLeadStory(): Promise<Article> {
    await delay();
    return castArticles.find((a) => a.leadStory) || castArticles[0];
  },

  async getFeaturedStories(limit: number = 6): Promise<Article[]> {
    await delay();
    return castArticles.filter((a) => a.featured || a.editorsPick).slice(0, limit);
  },

  async getRelatedArticles(slug: string, limit: number = 3): Promise<Article[]> {
    await delay();
    const current = castArticles.find((a) => a.slug === slug);
    if (!current) return castArticles.slice(0, limit);

    if (current.relatedArticleSlugs && current.relatedArticleSlugs.length > 0) {
      const explicitRelated = castArticles.filter((a) =>
        current.relatedArticleSlugs?.includes(a.slug)
      );
      if (explicitRelated.length >= limit) return explicitRelated.slice(0, limit);
    }

    // fallback to same category or any other
    const sameCat = castArticles.filter(
      (a) => a.slug !== slug && a.category === current.category
    );
    const others = castArticles.filter(
      (a) => a.slug !== slug && a.category !== current.category
    );
    return [...sameCat, ...others].slice(0, limit);
  },

  // Categories
  async getCategories(): Promise<CategoryInfo[]> {
    await delay();
    return [...castCategories];
  },

  async getCategoryBySlug(slug: string): Promise<CategoryInfo | null> {
    await delay();
    const found = castCategories.find(
      (c) => c.slug.toLowerCase() === slug.toLowerCase()
    );
    return found || null;
  },

  // Magazine Issues
  async getIssues(): Promise<MagazineIssue[]> {
    await delay();
    return [...castIssues];
  },

  async getCurrentIssue(): Promise<MagazineIssue> {
    await delay();
    return castIssues.find((i) => i.isCurrent) || castIssues[0];
  },

  async getIssueBySlug(slug: string): Promise<MagazineIssue | null> {
    await delay();
    const found = castIssues.find((i) => i.slug === slug);
    return found || null;
  },

  // Photo Essays
  async getPhotoEssays(limit?: number): Promise<PhotoEssay[]> {
    await delay();
    if (limit) return castPhotoEssays.slice(0, limit);
    return [...castPhotoEssays];
  },

  async getPhotoEssayBySlug(slug: string): Promise<PhotoEssay | null> {
    await delay();
    const found = castPhotoEssays.find((pe) => pe.slug === slug);
    return found || null;
  },

  // Field Notes
  async getFieldNotes(category?: string, limit?: number): Promise<FieldNote[]> {
    await delay();
    let result = [...castFieldNotes];
    if (category) {
      result = result.filter(
        (fn) => fn.category.toLowerCase() === category.toLowerCase()
      );
    }
    if (limit) {
      result = result.slice(0, limit);
    }
    return result;
  },

  async getFieldNoteBySlug(slug: string): Promise<FieldNote | null> {
    await delay();
    const found = castFieldNotes.find((fn) => fn.slug === slug);
    return found || null;
  },

  // Interactive Stories
  async getInteractiveStories(): Promise<InteractiveStory[]> {
    await delay();
    return [...castInteractiveStories];
  },

  async getInteractiveStoryBySlug(slug: string): Promise<InteractiveStory | null> {
    await delay();
    const found = castInteractiveStories.find((is) => is.slug === slug);
    return found || null;
  },

  // Authors
  async getAuthors(): Promise<Author[]> {
    await delay();
    return [...castAuthors];
  },

  async getAuthorById(id: string): Promise<Author | null> {
    await delay();
    const found = castAuthors.find((a) => a.id === id);
    return found || null;
  },

  // Search
  async searchContent(query: string, categoryFilter?: string): Promise<SearchResult[]> {
    await delay();
    const q = query.trim().toLowerCase();
    if (!q && !categoryFilter) return [];

    const results: SearchResult[] = [];

    // Search Articles
    castArticles.forEach((art) => {
      const matchQuery =
        !q ||
        art.title.toLowerCase().includes(q) ||
        art.subtitle.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q) ||
        art.author.name.toLowerCase().includes(q) ||
        art.tags.some((t) => t.toLowerCase().includes(q));

      const matchCategory =
        !categoryFilter ||
        categoryFilter === 'all' ||
        art.category.toLowerCase() === categoryFilter.toLowerCase();

      if (matchQuery && matchCategory) {
        results.push({
          type: 'article',
          id: art.id,
          slug: art.slug,
          title: art.title,
          subtitle: art.subtitle,
          category: art.categoryName,
          image: art.heroImage,
          date: art.date,
          meta: `${art.categoryName} · ${art.readingTime}`,
          url: `/story/${art.slug}`
        });
      }
    });

    // Search Photo Essays
    castPhotoEssays.forEach((pe) => {
      const matchQuery =
        !q ||
        pe.title.toLowerCase().includes(q) ||
        pe.subtitle.toLowerCase().includes(q) ||
        pe.location.toLowerCase().includes(q) ||
        pe.photographer.name.toLowerCase().includes(q);

      const matchCategory =
        !categoryFilter ||
        categoryFilter === 'all' ||
        categoryFilter.toLowerCase() === 'photography';

      if (matchQuery && matchCategory) {
        results.push({
          type: 'photo-essay',
          id: pe.id,
          slug: pe.slug,
          title: pe.title,
          subtitle: pe.subtitle,
          category: 'PHOTOGRAPHY',
          image: pe.coverImage,
          date: pe.date,
          meta: `Photo Essay · ${pe.location}`,
          url: `/photo/${pe.slug}`
        });
      }
    });

    // Search Field Notes
    castFieldNotes.forEach((fn) => {
      const matchQuery =
        !q ||
        fn.title.toLowerCase().includes(q) ||
        fn.summary.toLowerCase().includes(q) ||
        fn.keyPoints.some((kp) => kp.toLowerCase().includes(q));

      const matchCategory =
        !categoryFilter ||
        categoryFilter === 'all' ||
        fn.category.toLowerCase() === categoryFilter.toLowerCase();

      if (matchQuery && matchCategory) {
        results.push({
          type: 'field-note',
          id: fn.id,
          slug: fn.slug,
          title: fn.title,
          subtitle: fn.summary,
          category: fn.categoryName,
          image: fn.image,
          date: fn.date,
          meta: `Field Note · ${fn.readingTime}`,
          url: `/field-note/${fn.slug}`
        });
      }
    });

    // Search Issues
    castIssues.forEach((iss) => {
      const matchQuery =
        !q ||
        iss.title.toLowerCase().includes(q) ||
        iss.subtitle.toLowerCase().includes(q) ||
        iss.month.toLowerCase().includes(q) ||
        iss.theme.toLowerCase().includes(q);

      if (matchQuery && (!categoryFilter || categoryFilter === 'all')) {
        results.push({
          type: 'issue',
          id: iss.id,
          slug: iss.slug,
          title: `${iss.month} ${iss.year}: ${iss.title}`,
          subtitle: iss.subtitle,
          category: 'MAGAZINE',
          image: iss.coverImage,
          date: `${iss.month} ${iss.year}`,
          meta: `Issue · ${iss.storyCount} Stories`,
          url: `/magazine/${iss.slug}`
        });
      }
    });

    return results;
  },

  // Newsletter Subscription (Mock Persistence)
  async subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
    await delay(350);
    try {
      const existing = JSON.parse(localStorage.getItem('terra_subscribers') || '[]');
      if (!existing.includes(email)) {
        existing.push(email);
        localStorage.setItem('terra_subscribers', JSON.stringify(existing));
      }
      return {
        success: true,
        message: "You're on the list. Welcome to TERRA."
      };
    } catch {
      return {
        success: true,
        message: "You're on the list. Welcome to TERRA."
      };
    }
  }
};
