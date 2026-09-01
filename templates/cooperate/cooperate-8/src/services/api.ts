import axios from 'axios';

// Base Axios instance
export const apiClient = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Mock service layer for API-ready structure
export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceCategory: string;
  projectSize?: string;
  timeline?: string;
  message: string;
}

export interface NewsletterPayload {
  email: string;
  categoryInterest?: string;
}

export interface JobApplicationPayload {
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  linkedinUrl?: string;
  experienceYears: number;
  coverLetter?: string;
  resumeFileName?: string;
}

export interface QuoteCalculationPayload {
  buildingType: 'commercial' | 'industrial' | 'residential';
  roofAreaSqFt: number;
  roofType: string;
  currentCondition: string;
  slope: 'flat' | 'low-slope' | 'steep';
  additionalServices: string[];
  contactInfo?: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
}

export interface AuthLoginPayload {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface AuthRegisterPayload {
  fullName: string;
  email: string;
  companyName: string;
  password: string;
  accountType: 'property_manager' | 'reit_executive' | 'contractor' | 'facility_director';
}

export const api = {
  // Contact & Inquiries
  submitContact: async (data: ContactPayload) => {
    // Simulating API latency
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      success: true,
      ticketId: `AUX-${Math.floor(100000 + Math.random() * 900000)}`,
      message: 'Thank you. An Aurox structural specialist will contact you within 2 business hours.',
      receivedData: data
    };
  },

  // Newsletter Subscription
  subscribeNewsletter: async (data: NewsletterPayload) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      success: true,
      message: 'Successfully subscribed to the Aurox Enterprise Technical Newsletter.'
    };
  },

  // Job Applications
  submitJobApplication: async (data: JobApplicationPayload) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      success: true,
      applicationId: `APP-${Date.now().toString().slice(-6)}`,
      message: 'Application received. Our HR and Field Safety team will review your credentials.'
    };
  },

  // Quote / Estimator
  calculateQuote: async (data: QuoteCalculationPayload) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    
    // Dynamic cost algorithm
    const baseRates: Record<string, number> = {
      'TPO Single-Ply Membrane': 5.50,
      'PVC Chemical-Resistant': 6.80,
      'EPDM Rubber System': 5.20,
      'Standing Seam Galvalume Metal': 10.50,
      'Fluid Silicone Cool Roof Coating': 3.75,
      'Structural Tear-Off & Deck Replacement': 8.50,
    };

    const rate = baseRates[data.roofType] || 6.00;
    const slopeMultiplier = data.slope === 'steep' ? 1.3 : data.slope === 'low-slope' ? 1.1 : 1.0;
    const conditionMultiplier = data.currentCondition === 'Severe Damage' ? 1.25 : 1.0;

    const baseCost = data.roofAreaSqFt * rate * slopeMultiplier * conditionMultiplier;
    const addOnCost = (data.additionalServices.length || 0) * (data.roofAreaSqFt * 0.45);
    const estimatedTotal = Math.round(baseCost + addOnCost);
    const estimatedRangeLow = Math.round(estimatedTotal * 0.92);
    const estimatedRangeHigh = Math.round(estimatedTotal * 1.15);

    return {
      success: true,
      estimateId: `EST-${Math.floor(100000 + Math.random() * 900000)}`,
      estimatedTotal,
      estimatedRangeLow,
      estimatedRangeHigh,
      projectedLifespanYears: data.roofType.includes('Metal') ? 50 : 30,
      estimatedWeeks: Math.max(2, Math.ceil(data.roofAreaSqFt / 40000))
    };
  },

  // Auth: Login
  login: async (data: AuthLoginPayload) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    if (data.email.toLowerCase().includes('error')) {
      throw new Error('Invalid credentials. Please verify your corporate email and password.');
    }
    return {
      success: true,
      token: `aurox_jwt_${Date.now()}`,
      user: {
        id: 'usr_8829',
        name: data.email.split('@')[0].replace('.', ' ').toUpperCase(),
        email: data.email,
        role: 'Client Facility Manager',
        company: 'Partner Enterprise Corp'
      }
    };
  },

  // Auth: Register
  register: async (data: AuthRegisterPayload) => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    return {
      success: true,
      message: 'Account successfully registered. Confirmation verification email sent.',
      user: {
        id: `usr_${Date.now().toString().slice(-4)}`,
        name: data.fullName,
        email: data.email,
        company: data.companyName,
        accountType: data.accountType
      }
    };
  },

  // Auth: Forgot Password
  forgotPassword: async (email: string) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    return {
      success: true,
      message: `Password reset instructions sent to ${email}.`
    };
  }
};
