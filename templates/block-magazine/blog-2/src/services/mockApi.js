import articlesData from '../data/articles.json';
import authorsData from '../data/authors.json';
import categoriesData from '../data/categories.json';
import collectionData from '../data/collection.json';
import archiveData from '../data/archive.json';
import questionsData from '../data/questions.json';

const STORAGE_SAVED_KEY = 'elemental_saved_stories_v1';
const STORAGE_NEWSLETTER_KEY = 'elemental_newsletter_subscribers_v1';

// Helper for simulated network delay
const delay = (ms = 40) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Articles API
 */
export async function getArticles() {
  await delay(30);
  const savedIds = getSavedStoryIdsLocal();
  return articlesData.map((art) => ({
    ...art,
    saved: savedIds.includes(art.id)
  }));
}

export async function getArticleBySlug(slug) {
  await delay(40);
  const article = articlesData.find((a) => a.slug === slug);
  if (!article) return null;
  const author = authorsData.find((au) => au.id === article.authorId);
  const relatedStories = articlesData.filter((a) =>
    article.relatedStoryIds?.includes(a.id)
  );
  const moreStories = articlesData
    .filter((a) => a.id !== article.id && !article.relatedStoryIds?.includes(a.id))
    .slice(0, 4);

  const savedIds = getSavedStoryIdsLocal();

  return {
    ...article,
    author,
    relatedStories,
    moreStories,
    saved: savedIds.includes(article.id)
  };
}

export async function getFeaturedStories() {
  await delay(30);
  const savedIds = getSavedStoryIdsLocal();
  return articlesData
    .filter((a) => a.featured)
    .map((art) => ({ ...art, saved: savedIds.includes(art.id) }));
}

export async function getLeadStory() {
  await delay(20);
  const savedIds = getSavedStoryIdsLocal();
  const lead = articlesData.find((a) => a.lead) || articlesData[0];
  const author = authorsData.find((au) => au.id === lead.authorId);
  return {
    ...lead,
    author,
    saved: savedIds.includes(lead.id)
  };
}

export async function getLatestStories(limit = 7) {
  await delay(30);
  const savedIds = getSavedStoryIdsLocal();
  const list = articlesData
    .filter((a) => !a.lead)
    .slice(0, limit)
    .map((art) => ({
      ...art,
      author: authorsData.find((au) => au.id === art.authorId),
      saved: savedIds.includes(art.id)
    }));
  return list;
}

export async function getArticlesByCategory(categorySlug) {
  await delay(40);
  const savedIds = getSavedStoryIdsLocal();
  return articlesData
    .filter(
      (a) =>
        a.categorySlug === categorySlug ||
        a.topics.some((t) => t.toLowerCase().includes(categorySlug.toLowerCase()))
    )
    .map((art) => ({
      ...art,
      author: authorsData.find((au) => au.id === art.authorId),
      saved: savedIds.includes(art.id)
    }));
}

/**
 * Categories API
 */
export async function getCategories() {
  await delay(20);
  return categoriesData;
}

export async function getCategoryBySlug(slug) {
  await delay(20);
  return categoriesData.find((c) => c.slug === slug) || null;
}

/**
 * Authors API
 */
export async function getAuthors() {
  await delay(30);
  return authorsData;
}

export async function getAuthorBySlug(slug) {
  await delay(30);
  const author = authorsData.find((au) => au.slug === slug);
  if (!author) return null;
  const articles = articlesData.filter((a) => a.authorId === author.id);
  return {
    ...author,
    articles
  };
}

/**
 * Collection & Archive API
 */
export async function getCollection() {
  await delay(30);
  return collectionData;
}

export async function getCollectionItemById(id) {
  await delay(20);
  const item = collectionData.find((c) => c.id === id);
  if (!item) return null;
  const relatedStory = articlesData.find((a) => a.id === item.relatedStoryId);
  return { ...item, relatedStory };
}

export async function getArchive() {
  await delay(30);
  return archiveData;
}

export async function getQuestions() {
  await delay(20);
  return questionsData.map((q) => ({
    ...q,
    relatedStory: articlesData.find((a) => a.id === q.relatedStoryId)
  }));
}

/**
 * Search API
 */
export async function searchStories(query = '', category = 'all', sort = 'newest') {
  await delay(50);
  const q = query.trim().toLowerCase();
  const savedIds = getSavedStoryIdsLocal();

  let results = articlesData.map((art) => ({
    ...art,
    author: authorsData.find((au) => au.id === art.authorId),
    saved: savedIds.includes(art.id)
  }));

  if (category && category !== 'all') {
    results = results.filter((a) => a.categorySlug === category);
  }

  if (q) {
    results = results.filter((a) => {
      const matchTitle = a.title.toLowerCase().includes(q);
      const matchDek = a.dek.toLowerCase().includes(q);
      const matchExcerpt = a.excerpt.toLowerCase().includes(q);
      const matchAuthor = a.author?.name.toLowerCase().includes(q);
      const matchTopics = a.topics.some((t) => t.toLowerCase().includes(q));
      const matchCategory = a.category.toLowerCase().includes(q);
      return (
        matchTitle ||
        matchDek ||
        matchExcerpt ||
        matchAuthor ||
        matchTopics ||
        matchCategory
      );
    });
  }

  if (sort === 'oldest') {
    results.reverse();
  }

  return results;
}

/**
 * Bookmarking / Saved Stories System (localStorage)
 */
function getSavedStoryIdsLocal() {
  try {
    const raw = localStorage.getItem(STORAGE_SAVED_KEY);
    return raw ? JSON.parse(raw) : ['art-1', 'art-2', 'art-4', 'art-8'];
  } catch {
    return ['art-1', 'art-2', 'art-4', 'art-8'];
  }
}

export async function getSavedStories() {
  await delay(30);
  const ids = getSavedStoryIdsLocal();
  return articlesData
    .filter((a) => ids.includes(a.id))
    .map((art) => ({
      ...art,
      author: authorsData.find((au) => au.id === art.authorId),
      saved: true
    }));
}

export async function toggleSaveStory(storyId) {
  await delay(20);
  try {
    let ids = getSavedStoryIdsLocal();
    let isNowSaved = false;
    if (ids.includes(storyId)) {
      ids = ids.filter((id) => id !== storyId);
      isNowSaved = false;
    } else {
      ids.push(storyId);
      isNowSaved = true;
    }
    localStorage.setItem(STORAGE_SAVED_KEY, JSON.stringify(ids));
    window.dispatchEvent(new CustomEvent('elemental_saved_change', { detail: { ids } }));
    return { success: true, saved: isNowSaved, totalSaved: ids.length };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export function isStorySaved(storyId) {
  const ids = getSavedStoryIdsLocal();
  return ids.includes(storyId);
}

/**
 * Newsletter Mock System
 */
export async function subscribeNewsletter(email) {
  await delay(400); // realistic network delay
  if (!email || !email.includes('@') || !email.includes('.')) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  try {
    const raw = localStorage.getItem(STORAGE_NEWSLETTER_KEY);
    const list = raw ? JSON.parse(raw) : [];
    if (list.includes(email.toLowerCase().trim())) {
      return {
        success: false,
        error: 'This email is already subscribed to The Weekly Element.'
      };
    }
    list.push(email.toLowerCase().trim());
    localStorage.setItem(STORAGE_NEWSLETTER_KEY, JSON.stringify(list));
    return {
      success: true,
      message: 'Welcome to The Weekly Element. Check your inbox for Issue 01.'
    };
  } catch (err) {
    return { success: false, error: 'Subscription error. Please try again.' };
  }
}
