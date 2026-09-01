import axios from 'axios';
import { Author, Category, Comment, Post } from '../types';
import { MOCK_AUTHORS, MOCK_CATEGORIES, MOCK_COMMENTS, MOCK_POSTS } from '../data/mockData';

// Base API URL from environment variables or empty string for mock fallback
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

// Configure axios instance if needed
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Helper for simulated delay when using mock data
const delay = (ms = 350) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * API Service Layer designed for Java Spring Boot REST endpoints.
 * When VITE_API_BASE_URL is configured, calls real endpoints.
 * Otherwise, falls back gracefully to high-quality MOCK data.
 */

export async function getPosts(): Promise<Post[]> {
  if (API_BASE_URL) {
    try {
      const response = await apiClient.get<Post[]>('/api/posts');
      return response.data;
    } catch (error) {
      console.warn('Failed to fetch from Spring Boot backend, falling back to mock data:', error);
    }
  }
  await delay();
  return MOCK_POSTS;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (API_BASE_URL) {
    try {
      const response = await apiClient.get<Post>(`/api/posts/slug/${slug}`);
      return response.data;
    } catch (error) {
      console.warn('Failed to fetch post by slug from backend, checking mock data:', error);
    }
  }
  await delay();
  const post = MOCK_POSTS.find(p => p.slug === slug);
  return post || null;
}

export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  if (API_BASE_URL) {
    try {
      const response = await apiClient.get<Post[]>(`/api/posts/category/${categorySlug}`);
      return response.data;
    } catch (error) {
      console.warn('Backend fetch failed, using mock filter:', error);
    }
  }
  await delay();
  if (categorySlug === 'all') return MOCK_POSTS;
  return MOCK_POSTS.filter(p => p.category.slug.toLowerCase() === categorySlug.toLowerCase());
}

export async function getPostsByAuthor(authorId: string): Promise<Post[]> {
  if (API_BASE_URL) {
    try {
      const response = await apiClient.get<Post[]>(`/api/posts/author/${authorId}`);
      return response.data;
    } catch (error) {
      console.warn('Backend fetch failed, using mock filter:', error);
    }
  }
  await delay();
  return MOCK_POSTS.filter(p => p.author.id === authorId);
}

export async function searchPosts(query: string): Promise<Post[]> {
  if (API_BASE_URL) {
    try {
      const response = await apiClient.get<Post[]>(`/api/posts/search`, { params: { q: query } });
      return response.data;
    } catch (error) {
      console.warn('Backend search failed, using mock search:', error);
    }
  }
  await delay();
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return MOCK_POSTS.filter(
    p =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.category.name.toLowerCase().includes(q)
  );
}

export async function getCategories(): Promise<Category[]> {
  if (API_BASE_URL) {
    try {
      const response = await apiClient.get<Category[]>('/api/categories');
      return response.data;
    } catch (error) {
      console.warn('Backend categories fetch failed, using mock categories:', error);
    }
  }
  await delay();
  return MOCK_CATEGORIES;
}

export async function getAuthors(): Promise<Author[]> {
  if (API_BASE_URL) {
    try {
      const response = await apiClient.get<Author[]>('/api/authors');
      return response.data;
    } catch (error) {
      console.warn('Backend authors fetch failed, using mock authors:', error);
    }
  }
  await delay();
  return MOCK_AUTHORS;
}

export async function getAuthorById(id: string): Promise<Author | null> {
  if (API_BASE_URL) {
    try {
      const response = await apiClient.get<Author>(`/api/authors/${id}`);
      return response.data;
    } catch (error) {
      console.warn('Backend author fetch failed:', error);
    }
  }
  await delay();
  return MOCK_AUTHORS.find(a => a.id === id) || null;
}

export async function getCommentsForPost(postId: string): Promise<Comment[]> {
  if (API_BASE_URL) {
    try {
      const response = await apiClient.get<Comment[]>(`/api/posts/${postId}/comments`);
      return response.data;
    } catch (error) {
      console.warn('Backend comments fetch failed:', error);
    }
  }
  await delay();
  return MOCK_COMMENTS.filter(c => c.postId === postId);
}

export async function addComment(postId: string, content: string, authorName: string): Promise<Comment> {
  if (API_BASE_URL) {
    try {
      const response = await apiClient.post<Comment>(`/api/posts/${postId}/comments`, { content, authorName });
      return response.data;
    } catch (error) {
      console.warn('Backend add comment failed, simulating local add:', error);
    }
  }
  await delay(400);
  const newComment: Comment = {
    id: `comm-${Date.now()}`,
    postId,
    authorName: authorName.trim() || 'Anonymous Reader',
    authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    content,
    publishedDate: 'Just now',
    likes: 0
  };
  MOCK_COMMENTS.unshift(newComment);
  return newComment;
}

export async function subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  if (API_BASE_URL) {
    try {
      await apiClient.post('/api/newsletter/subscribe', { email });
      return { success: true, message: 'Successfully subscribed to Chronicle & Co.' };
    } catch (error) {
      console.warn('Backend newsletter subscription failed:', error);
    }
  }
  await delay(500);
  if (!email || !email.includes('@')) {
    throw new Error('Please provide a valid email address.');
  }
  return { success: true, message: 'Thank you for subscribing to our weekly dispatch.' };
}
