import axios from 'axios';
import { servicesData, ServiceItem } from '../data/services';
import { solutionsData, SolutionItem } from '../data/solutions';
import { industriesData, IndustryItem } from '../data/industries';
import { caseStudiesData, CaseStudyItem } from '../data/caseStudies';
import { teamData, TeamMember } from '../data/team';
import { blogData, BlogPost } from '../data/blog';
import { jobsData, JobItem } from '../data/jobs';
import { resourcesData, ResourceItem } from '../data/resources';

// Create configured Axios instance
export const apiClient = axios.create({
  baseURL: ((import.meta as any).env && (import.meta as any).env.VITE_API_URL) || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for unified error formatting
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Simulated network latency helper
const simulateDelay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

// Contact Form API
export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
}

export const submitContactForm = async (payload: ContactPayload) => {
  await simulateDelay(600);
  // In production: return (await apiClient.post('/contact', payload)).data;
  return {
    success: true,
    message: `Thank you ${payload.name}! Your message has been received. Our solutions team will contact you within 24 hours.`,
    data: payload
  };
};

// Newsletter Subscription API
export const subscribeNewsletter = async (email: string) => {
  await simulateDelay(400);
  // In production: return (await apiClient.post('/newsletter/subscribe', { email })).data;
  return {
    success: true,
    message: 'You have been successfully subscribed to Straventa Tech Insights.'
  };
};

// Job Application API
export interface JobApplicationPayload {
  jobId: string;
  fullName: string;
  email: string;
  phone: string;
  portfolioUrl?: string;
  linkedinUrl?: string;
  experienceYears: number | string;
  coverNote?: string;
  resumeFileName?: string;
}

export const submitJobApplication = async (payload: JobApplicationPayload) => {
  await simulateDelay(800);
  // In production: return (await apiClient.post(`/careers/${payload.jobId}/apply`, payload)).data;
  return {
    success: true,
    message: `Application submitted successfully for ${payload.fullName}. Our talent team will review your profile shortly!`,
    applicationId: `NX-APP-${Math.floor(100000 + Math.random() * 900000)}`
  };
};

// Services API
export const getServices = async (): Promise<ServiceItem[]> => {
  await simulateDelay(150);
  return servicesData;
};

export const getServiceBySlug = async (slug: string): Promise<ServiceItem | undefined> => {
  await simulateDelay(150);
  return servicesData.find((s) => s.slug === slug);
};

// Solutions API
export const getSolutions = async (): Promise<SolutionItem[]> => {
  await simulateDelay(150);
  return solutionsData;
};

export const getSolutionBySlug = async (slug: string): Promise<SolutionItem | undefined> => {
  await simulateDelay(150);
  return solutionsData.find((s) => s.slug === slug);
};

// Industries API
export const getIndustries = async (): Promise<IndustryItem[]> => {
  await simulateDelay(150);
  return industriesData;
};

export const getIndustryBySlug = async (slug: string): Promise<IndustryItem | undefined> => {
  await simulateDelay(150);
  return industriesData.find((ind) => ind.slug === slug);
};

// Case Studies API
export const getCaseStudies = async (): Promise<CaseStudyItem[]> => {
  await simulateDelay(150);
  return caseStudiesData;
};

export const getCaseStudyBySlug = async (slug: string): Promise<CaseStudyItem | undefined> => {
  await simulateDelay(150);
  return caseStudiesData.find((cs) => cs.slug === slug);
};

// Team API
export const getTeam = async (): Promise<TeamMember[]> => {
  await simulateDelay(150);
  return teamData;
};

export const getTeamMemberBySlug = async (slug: string): Promise<TeamMember | undefined> => {
  await simulateDelay(150);
  return teamData.find((m) => m.slug === slug);
};

// Blog API
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  await simulateDelay(150);
  return blogData;
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  await simulateDelay(150);
  return blogData.find((post) => post.slug === slug);
};

// Jobs API
export const getJobs = async (): Promise<JobItem[]> => {
  await simulateDelay(150);
  return jobsData;
};

export const getJobById = async (jobId: string): Promise<JobItem | undefined> => {
  await simulateDelay(150);
  return jobsData.find((j) => j.jobId === jobId || j.id === jobId);
};

// Resources API
export const getResources = async (): Promise<ResourceItem[]> => {
  await simulateDelay(150);
  return resourcesData;
};

// Auth API Mocking
export interface LoginPayload {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export const loginUser = async (payload: LoginPayload) => {
  await simulateDelay(700);
  if (payload.password.length < 6) {
    throw new Error('Invalid credentials. Password must be at least 6 characters.');
  }
  return {
    success: true,
    user: {
      name: payload.email.split('@')[0],
      email: payload.email,
      role: 'Client Representative',
      token: 'mock-jwt-token-straventa-enterprise-2026'
    }
  };
};

export interface RegisterPayload {
  fullName: string;
  email: string;
  companyName: string;
  password: string;
  termsAccepted: boolean;
}

export const registerUser = async (payload: RegisterPayload) => {
  await simulateDelay(800);
  return {
    success: true,
    message: 'Registration successful! Verification link sent to your corporate email.'
  };
};

export const forgotPassword = async (email: string) => {
  await simulateDelay(500);
  return {
    success: true,
    message: `Password reset instructions have been dispatched to ${email}.`
  };
};

// Unified Search API
export interface UnifiedSearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: string;
}

export const searchAll = async (query: string): Promise<UnifiedSearchResult[]> => {
  if (!query || query.trim().length === 0) return [];
  const q = query.toLowerCase().trim();
  const results: UnifiedSearchResult[] = [];

  servicesData.forEach((s) => {
    if (s.title.toLowerCase().includes(q) || s.shortDescription.toLowerCase().includes(q)) {
      results.push({
        id: s.id,
        title: s.title,
        description: s.shortDescription,
        url: `/services/${s.slug}`,
        type: 'Service'
      });
    }
  });

  caseStudiesData.forEach((c) => {
    if (c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q) || c.industry.toLowerCase().includes(q)) {
      results.push({
        id: c.id,
        title: c.title,
        description: c.summary,
        url: `/case-studies/${c.slug}`,
        type: 'Case Study'
      });
    }
  });

  solutionsData.forEach((sol) => {
    if (sol.title.toLowerCase().includes(q) || sol.description.toLowerCase().includes(q)) {
      results.push({
        id: sol.id,
        title: sol.title,
        description: sol.description,
        url: `/solutions/${sol.slug}`,
        type: 'Solution'
      });
    }
  });

  jobsData.forEach((j) => {
    if (j.title.toLowerCase().includes(q) || j.department.toLowerCase().includes(q) || j.location.toLowerCase().includes(q)) {
      results.push({
        id: j.id,
        title: j.title,
        description: `${j.department} · ${j.location} · ${j.type}`,
        url: `/careers/${j.jobId}`,
        type: 'Job'
      });
    }
  });

  blogData.forEach((b) => {
    if (b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q) || b.tags.some((t) => t.toLowerCase().includes(q))) {
      results.push({
        id: b.id,
        title: b.title,
        description: b.excerpt,
        url: `/blog/${b.slug}`,
        type: 'Insight'
      });
    }
  });

  return results;
};

export const searchAllContent = async (query: string) => {
  if (!query || query.trim().length === 0) return { services: [], caseStudies: [], blog: [], jobs: [], solutions: [] };
  const q = query.toLowerCase().trim();

  const services = servicesData.filter(
    (s) => s.title.toLowerCase().includes(q) || s.shortDescription.toLowerCase().includes(q)
  );
  const caseStudies = caseStudiesData.filter(
    (c) => c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q) || c.industry.toLowerCase().includes(q)
  );
  const blog = blogData.filter(
    (b) => b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q) || b.tags.some(t => t.toLowerCase().includes(q))
  );
  const jobs = jobsData.filter(
    (j) => j.title.toLowerCase().includes(q) || j.department.toLowerCase().includes(q) || j.location.toLowerCase().includes(q)
  );
  const solutions = solutionsData.filter(
    (sol) => sol.title.toLowerCase().includes(q) || sol.description.toLowerCase().includes(q)
  );

  return { services, caseStudies, blog, jobs, solutions };
};

