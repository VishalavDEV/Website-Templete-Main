import articlesData from '../data/articles.json';
import authorsData from '../data/authors.json';
import categoriesData from '../data/categories.json';
import issuesData from '../data/issues.json';
import photoEssaysData from '../data/photoEssays.json';
import fieldNotesData from '../data/fieldNotes.json';
import featuredData from '../data/featured.json';

const delay = (ms = 180) => new Promise(resolve => setTimeout(resolve, ms));

const BOOKMARKS_KEY = 'atlas_bookmarks_v1';
const NEWSLETTER_KEY = 'atlas_newsletter_subs_v1';

export async function getArticles(category = null) {
  await delay(150);
  if (!category || category === 'all') {
    return [...articlesData];
  }
  return articlesData.filter(a => a.category.toLowerCase() === category.toLowerCase());
}

export async function getArticleBySlug(slug) {
  await delay(180);
  const article = articlesData.find(a => a.slug === slug);
  if (!article) return null;

  // Augment with author details and next/previous
  const author = authorsData.find(au => au.id === article.authorId);
  const currentIndex = articlesData.findIndex(a => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articlesData[currentIndex - 1] : null;
  const nextArticle = currentIndex < articlesData.length - 1 ? articlesData[currentIndex + 1] : null;
  const relatedArticles = articlesData
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return {
    ...article,
    authorDetails: author,
    prevArticle: prevArticle ? { title: prevArticle.title, slug: prevArticle.slug, category: prevArticle.category } : null,
    nextArticle: nextArticle ? { title: nextArticle.title, slug: nextArticle.slug, category: nextArticle.category } : null,
    related: relatedArticles
  };
}

export async function getFeaturedStories() {
  await delay(120);
  const lead = articlesData.find(a => a.slug === featuredData.lead) || articlesData[0];
  const secondary = featuredData.secondary
    .map(slug => articlesData.find(a => a.slug === slug))
    .filter(Boolean);
  const curated = featuredData.curated
    .map(slug => articlesData.find(a => a.slug === slug))
    .filter(Boolean);
  const editorsPicks = featuredData.editorsPicks
    .map(slug => articlesData.find(a => a.slug === slug))
    .filter(Boolean);

  return {
    lead,
    secondary,
    curated,
    editorsPicks
  };
}

export async function getCategories() {
  await delay(100);
  return [...categoriesData];
}

export async function getCategoryBySlug(slug) {
  await delay(160);
  const category = categoriesData.find(c => c.slug.toLowerCase() === slug.toLowerCase());
  if (!category) return null;

  const categoryArticles = articlesData.filter(a => a.category.toLowerCase() === slug.toLowerCase());
  const featured = categoryArticles.find(a => a.featured) || categoryArticles[0];
  const latest = categoryArticles.filter(a => a.id !== featured?.id);
  const relatedPhotos = photoEssaysData.filter(p => p.slug.includes(slug) || Math.random() > 0.5).slice(0, 2);

  return {
    ...category,
    featuredStory: featured,
    articles: latest,
    photoStories: relatedPhotos,
    allArticles: categoryArticles
  };
}

export async function getIssues() {
  await delay(140);
  return [...issuesData];
}

export async function getIssueBySlug(slug) {
  await delay(160);
  const issue = issuesData.find(i => i.slug === slug);
  if (!issue) return null;

  // Augment with full story objects
  const fullStories = issue.stories.map(s => {
    const full = articlesData.find(a => a.slug === s.slug);
    return full || s;
  });

  return {
    ...issue,
    stories: fullStories
  };
}

export async function getAuthors() {
  await delay(120);
  return [...authorsData];
}

export async function getAuthorById(id) {
  await delay(150);
  const author = authorsData.find(a => a.id === id);
  if (!author) return null;
  const authorArticles = articlesData.filter(a => a.authorId === id);
  return {
    ...author,
    articles: authorArticles
  };
}

export async function getPhotoEssays() {
  await delay(140);
  return [...photoEssaysData];
}

export async function getPhotoEssayBySlug(slug) {
  await delay(160);
  const essay = photoEssaysData.find(p => p.slug === slug);
  if (!essay) return null;

  const related = photoEssaysData.filter(p => p.id !== essay.id).slice(0, 3);
  return {
    ...essay,
    related
  };
}

export async function getFieldNotes() {
  await delay(120);
  return [...fieldNotesData];
}

export async function getFieldNoteBySlug(slug) {
  await delay(150);
  return fieldNotesData.find(fn => fn.slug === slug) || null;
}

export async function searchContent(query = '', category = 'all') {
  await delay(200);
  const q = query.trim().toLowerCase();

  let matchedArticles = articlesData.filter(a => {
    const matchCat = category === 'all' || a.category.toLowerCase() === category.toLowerCase();
    if (!matchCat) return false;
    if (!q) return true;
    return (
      a.title.toLowerCase().includes(q) ||
      a.subtitle.toLowerCase().includes(q) ||
      a.author.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      (a.location && a.location.toLowerCase().includes(q))
    );
  });

  let matchedEssays = photoEssaysData.filter(p => {
    if (!q) return category === 'all' || category === 'photography';
    return (
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.photographer.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q)
    );
  });

  let matchedNotes = fieldNotesData.filter(fn => {
    const matchCat = category === 'all' || fn.category.toLowerCase() === category.toLowerCase();
    if (!matchCat) return false;
    if (!q) return true;
    return (
      fn.title.toLowerCase().includes(q) ||
      fn.dek.toLowerCase().includes(q) ||
      fn.author.toLowerCase().includes(q)
    );
  });

  let matchedIssues = issuesData.filter(i => {
    if (!q) return category === 'all';
    return (
      i.title.toLowerCase().includes(q) ||
      i.month.toLowerCase().includes(q) ||
      i.year.includes(q) ||
      i.subtitle.toLowerCase().includes(q)
    );
  });

  return {
    articles: matchedArticles,
    photoEssays: matchedEssays,
    fieldNotes: matchedNotes,
    issues: matchedIssues,
    totalCount: matchedArticles.length + matchedEssays.length + matchedNotes.length + matchedIssues.length
  };
}

export async function subscribeToNewsletter(email) {
  await delay(400);
  if (!email || !email.includes('@')) {
    throw new Error('Please enter a valid email address.');
  }

  try {
    const existing = JSON.parse(localStorage.getItem(NEWSLETTER_KEY) || '[]');
    if (!existing.includes(email)) {
      existing.push(email);
      localStorage.setItem(NEWSLETTER_KEY, JSON.stringify(existing));
    }
  } catch (e) {
    console.warn('Storage not available', e);
  }

  return { success: true, message: "You're on the list. Welcome to ATLAS." };
}

export function getBookmarks() {
  try {
    const stored = localStorage.getItem(BOOKMARKS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export async function getBookmarkedArticles() {
  await delay(120);
  const ids = getBookmarks();
  return articlesData.filter(a => ids.includes(a.id));
}

export function toggleBookmark(articleId) {
  try {
    const current = getBookmarks();
    let updated;
    if (current.includes(articleId)) {
      updated = current.filter(id => id !== articleId);
    } else {
      updated = [...current, articleId];
    }
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}
