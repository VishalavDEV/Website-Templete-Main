import articles from '../data/articles.json';
import tools from '../data/tools.json';
import models from '../data/models.json';
import companies from '../data/companies.json';
import rankings from '../data/rankings.json';
import issues from '../data/issues.json';
import authors from '../data/authors.json';
import config from '../data/site-config.json';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const simulateNetwork = async (data, latency = 80) => {
  await delay(latency);
  return data;
};

const USER_PROFILE_KEY = 'fi_user_profile';
const DEFAULT_PROFILE = {
  name: 'Alex Vance',
  email: 'alex.vance@future-intelligence.io',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
  tier: 'Pro Member',
  memberSince: 'October 2024',
  notifications: true,
  newsletterSubscribed: true,
  interests: ['AI Agents', 'Quantum Computing', 'Foundation Models', 'Robotics']
};

export const mockStore = {
  getArticles: () => simulateNetwork(articles),
  getArticleBySlug: async (slug) => {
    const data = await simulateNetwork(articles);
    return data.find(a => a.slug === slug);
  },
  getFeaturedArticles: async () => {
    const data = await simulateNetwork(articles);
    return data.filter(a => a.isFeatured);
  },
  
  getTools: () => simulateNetwork(tools),
  getToolById: async (id) => {
    const data = await simulateNetwork(tools);
    return data.find(t => t.id === id);
  },

  getModels: () => simulateNetwork(models),
  getModelById: async (id) => {
    const data = await simulateNetwork(models);
    return data.find(m => m.id === id);
  },

  getCompanies: () => simulateNetwork(companies),
  getCompanyById: async (id) => {
    const data = await simulateNetwork(companies);
    return data.find(c => c.id === id);
  },

  getRankings: () => simulateNetwork(rankings),
  
  getIssues: () => simulateNetwork(issues),
  getIssueById: async (id) => {
    const data = await simulateNetwork(issues);
    return data.find(i => i.id === id);
  },

  getAuthors: () => simulateNetwork(authors),
  getAuthorById: async (id) => {
    const data = await simulateNetwork(authors);
    return data.find(a => a.id === id);
  },

  getConfig: () => config,
  
  // Newsletter & Membership Subscription Service
  subscribe: async (email, tier = 'Pro Member') => {
    await delay(350);
    if (!email || !email.includes('@') || !email.includes('.')) {
      throw new Error('Please provide a valid email address.');
    }
    
    // Save to user profile in localStorage
    const current = mockStore.getUserProfile();
    const updated = {
      ...current,
      email: email,
      tier: tier,
      newsletterSubscribed: true
    };
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(updated));
    return { success: true, message: `Subscribed successfully as ${tier}`, profile: updated };
  },

  // User Profile
  getUserProfile: () => {
    try {
      const saved = localStorage.getItem(USER_PROFILE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
    } catch (e) {
      return DEFAULT_PROFILE;
    }
  },

  updateUserProfile: (updates) => {
    const current = mockStore.getUserProfile();
    const updated = { ...current, ...updates };
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(updated));
    return updated;
  }
};
