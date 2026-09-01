import {
  Project,
  ProjectCategory,
  Service,
  TeamMember,
  Testimonial,
  Client,
  Article,
  FAQ,
  ProjectInquiry,
  SearchResultItem,
} from '../types';

import projectsData from '../data/projects.json';
import servicesData from '../data/services.json';
import teamData from '../data/team.json';
import testimonialsData from '../data/testimonials.json';
import clientsData from '../data/clients.json';
import articlesData from '../data/articles.json';
import faqsData from '../data/faqs.json';
import { saveProjectInquiry } from './storage';

const delay = (ms: number = 300) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockApi = {
  // Projects
  async getProjects(category?: ProjectCategory): Promise<Project[]> {
    await delay(250);
    const list = projectsData as Project[];
    if (!category || category === 'ALL') {
      return list;
    }
    return list.filter((p) => p.category === category);
  },

  async getProjectById(id: string): Promise<Project | null> {
    await delay(200);
    const found = (projectsData as Project[]).find((p) => p.id === id);
    return found || null;
  },

  async getFeaturedProjects(): Promise<Project[]> {
    await delay(150);
    return (projectsData as Project[]).filter((p) => p.featured);
  },

  // Services
  async getServices(): Promise<Service[]> {
    await delay(200);
    return servicesData as Service[];
  },

  async getServiceById(id: string): Promise<Service | null> {
    await delay(200);
    const found = (servicesData as Service[]).find((s) => s.id === id);
    return found || null;
  },

  // Team
  async getTeam(): Promise<TeamMember[]> {
    await delay(150);
    return teamData as TeamMember[];
  },

  async getTeamMemberById(id: string): Promise<TeamMember | null> {
    await delay(150);
    const found = (teamData as TeamMember[]).find((t) => t.id === id);
    return found || null;
  },

  // Testimonials & Clients
  async getTestimonials(): Promise<Testimonial[]> {
    await delay(150);
    return testimonialsData as Testimonial[];
  },

  async getClients(): Promise<Client[]> {
    await delay(150);
    return clientsData as Client[];
  },

  // Articles / Insights
  async getArticles(category?: string): Promise<Article[]> {
    await delay(200);
    const list = articlesData as Article[];
    if (!category || category === 'ALL') {
      return list;
    }
    return list.filter((a) => a.category.toLowerCase() === category.toLowerCase());
  },

  async getArticleById(id: string): Promise<Article | null> {
    await delay(200);
    const found = (articlesData as Article[]).find((a) => a.id === id);
    return found || null;
  },

  // FAQs
  async getFAQs(category?: string): Promise<FAQ[]> {
    await delay(150);
    const list = faqsData as FAQ[];
    if (!category || category === 'ALL') {
      return list;
    }
    return list.filter((f) => f.category.toLowerCase() === category.toLowerCase());
  },

  // Project Brief Form Submission
  async submitProjectBrief(data: Omit<ProjectInquiry, 'id' | 'createdAt' | 'status'>): Promise<{ success: boolean; inquiryId: string }> {
    await delay(600); // Simulate network latency

    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const year = new Date().getFullYear();
    const inquiryId = `PROJECT-${year}-${randomDigits}`;

    const newInquiry: ProjectInquiry = {
      ...data,
      id: inquiryId,
      createdAt: new Date().toISOString(),
      status: 'RECEIVED',
    };

    saveProjectInquiry(newInquiry);
    return { success: true, inquiryId };
  },

  // Global Search
  async searchAll(query: string): Promise<SearchResultItem[]> {
    if (!query.trim()) return [];
    await delay(100);
    const q = query.toLowerCase().trim();
    const results: SearchResultItem[] = [];

    // Search projects
    (projectsData as Project[]).forEach((p) => {
      if (
        p.title.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.services.some((s) => s.toLowerCase().includes(q))
      ) {
        results.push({
          id: p.id,
          title: p.title,
          subtitle: `${p.client} — ${p.category}`,
          type: 'project',
          url: `/work/${p.id}`,
          category: p.category,
        });
      }
    });

    // Search services
    (servicesData as Service[]).forEach((s) => {
      if (
        s.title.toLowerCase().includes(q) ||
        s.tagline.toLowerCase().includes(q) ||
        s.capabilities.some((c) => c.toLowerCase().includes(q))
      ) {
        results.push({
          id: s.id,
          title: s.title,
          subtitle: s.tagline,
          type: 'service',
          url: `/services/${s.id}`,
        });
      }
    });

    // Search articles
    (articlesData as Article[]).forEach((a) => {
      if (
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
      ) {
        results.push({
          id: a.id,
          title: a.title,
          subtitle: `${a.category} • by ${a.author}`,
          type: 'article',
          url: `/insights/${a.id}`,
          category: a.category,
        });
      }
    });

    // Search team
    (teamData as TeamMember[]).forEach((t) => {
      if (
        t.name.toLowerCase().includes(q) ||
        t.role.toLowerCase().includes(q) ||
        t.specialty.toLowerCase().includes(q)
      ) {
        results.push({
          id: t.id,
          title: t.name,
          subtitle: `${t.role} — ${t.specialty}`,
          type: 'team',
          url: `/studio#team`,
        });
      }
    });

    return results;
  },
};
