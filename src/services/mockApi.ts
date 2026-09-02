import { Project, Service, Testimonial, InsightArticle, ContactFormData, ContactSubmissionRecord } from '../types';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { insightArticles } from '../data/insights';

const INQUIRIES_STORAGE_KEY = 'horizon_inquiries_v1';
const NEWSLETTER_STORAGE_KEY = 'horizon_newsletter_v1';

// Helper to simulate realistic network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  // Get all projects with optional category filter and search
  async getProjects(category?: string, search?: string): Promise<Project[]> {
    await delay(350);
    let results = [...projects];

    if (category && category !== 'ALL') {
      results = results.filter(p => p.category === category);
    }

    if (search && search.trim() !== '') {
      const q = search.toLowerCase();
      results = results.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.servicesProvided.some(s => s.toLowerCase().includes(q))
      );
    }

    return results;
  },

  // Get project by slug
  async getProjectBySlug(slug: string): Promise<Project | null> {
    await delay(250);
    const found = projects.find(p => p.slug === slug);
    return found || null;
  },

  // Get all services
  async getServices(): Promise<Service[]> {
    await delay(200);
    return [...services];
  },

  // Get service by slug
  async getServiceBySlug(slug: string): Promise<Service | null> {
    await delay(200);
    const found = services.find(s => s.slug === slug);
    return found || null;
  },

  // Get testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    await delay(150);
    return [...testimonials];
  },

  // Get all insights articles
  async getInsights(category?: string): Promise<InsightArticle[]> {
    await delay(250);
    if (category && category !== 'ALL') {
      return insightArticles.filter(a => a.category === category);
    }
    return [...insightArticles];
  },

  // Get single insight by slug
  async getInsightBySlug(slug: string): Promise<InsightArticle | null> {
    await delay(200);
    const found = insightArticles.find(a => a.slug === slug);
    return found || null;
  },

  // Submit contact / project brief inquiry
  async submitContactForm(formData: ContactFormData): Promise<{
    success: boolean;
    referenceId: string;
    message: string;
    record: ContactSubmissionRecord;
  }> {
    // Simulate real backend processing time (750ms - 1100ms)
    await delay(850);

    // Basic validation
    if (!formData.name || !formData.email || formData.services.length === 0) {
      throw new Error('Please fill in your name, email, and at least one service required.');
    }

    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const referenceId = `HZ-2026-${randomSuffix}`;

    const record: ContactSubmissionRecord = {
      ...formData,
      id: 'sub-' + Date.now(),
      referenceId,
      submittedAt: new Date().toISOString(),
      status: 'Received'
    };

    // Save to localStorage
    try {
      const existingRaw = localStorage.getItem(INQUIRIES_STORAGE_KEY);
      const existing: ContactSubmissionRecord[] = existingRaw ? JSON.parse(existingRaw) : [];
      existing.unshift(record);
      localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(existing));
    } catch (e) {
      console.warn('Could not persist inquiry to localStorage', e);
    }

    return {
      success: true,
      referenceId,
      message: "Thanks — we've received your inquiry. Our partners will review your brief and get back to you within 24 hours.",
      record
    };
  },

  // Get submission history from localStorage
  getSubmissionHistory(): ContactSubmissionRecord[] {
    try {
      const raw = localStorage.getItem(INQUIRIES_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  // Subscribe to newsletter
  async subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
    await delay(600);
    
    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      throw new Error('Please enter a valid email address.');
    }

    try {
      const existingRaw = localStorage.getItem(NEWSLETTER_STORAGE_KEY);
      const existing: string[] = existingRaw ? JSON.parse(existingRaw) : [];
      if (existing.includes(email.toLowerCase())) {
        return {
          success: true,
          message: "You're already subscribed to HORIZON Dispatch."
        };
      }
      existing.push(email.toLowerCase());
      localStorage.setItem(NEWSLETTER_STORAGE_KEY, JSON.stringify(existing));
    } catch (e) {
      console.warn('Could not persist newsletter subscriber', e);
    }

    return {
      success: true,
      message: "You're on the list. Welcome to HORIZON Dispatch."
    };
  }
};
