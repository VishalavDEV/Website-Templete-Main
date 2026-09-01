export type ActiveTab =
  | 'home'
  | 'about'
  | 'solutions'
  | 'portfolio'
  | 'calculators'
  | 'insights'
  | 'performance'
  | 'portal'
  | 'discovery'
  | 'comparison'
  | 'advisors'
  | 'education'
  | 'reports'
  | 'contact'
  | 'admin';

export type Currency = 'USD' | 'INR' | 'EUR' | 'GBP';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  rate: number;
  formatMultiplier: number;
  unit: string;
}

export type RiskLevel =
  | 'Conservative'
  | 'Moderate'
  | 'Balanced'
  | 'Growth'
  | 'Aggressive'
  | 'High Yield';

export interface InvestmentSolution {
  id: string;
  title: string;
  category:
    | 'Equity'
    | 'Debt'
    | 'Mutual Funds'
    | 'Alternative'
    | 'Portfolio Management'
    | 'Wealth Management'
    | 'Retirement'
    | 'Institutional';
  tagline: string;
  overview: string;
  benefits: string[];
  riskLevel: RiskLevel;
  horizon: string;
  suitableFor: string;
  keyFeatures: string[];
  minInvestment: number;
  cagr5Y: string;
  aum: string;
  iconName: string;
  highlight?: boolean;
}

export interface InvestmentProduct {
  id: string;
  name: string;
  code: string;
  category: string;
  assetClass?: string;
  rating?: number;
  cagr1Y: number;
  cagr3Y: number;
  cagr5Y: number;
  return1Y?: number;
  return3Y?: number;
  return5Y?: number;
  riskScore: number;
  riskLevel: RiskLevel;
  minInvestment: number;
  expenseRatio: number;
  horizon: string;
  sharpeRatio: number;
  benchmark: string;
  exitLoad: string;
  managerExperience: string;
  suitability: string;
  fundSize: string;
  aum: number;
  nav?: number;
  type?: string;
  description?: string;
}

export type ProductComparisonItem = InvestmentProduct;

export interface PortfolioHolding {
  id: string;
  symbol: string;
  name: string;
  category: 'Equity' | 'Debt' | 'Alternative' | 'Cash' | 'Mutual Fund';
  allocationPct: number;
  units: number;
  buyPrice: number;
  currentPrice: number;
  investedValue: number;
  currentValue: number;
  dayChangePct: number;
  totalGainLoss: number;
  totalGainLossPct: number;
  riskRating: RiskLevel;
}

export interface Transaction {
  id: string;
  date: string;
  type: 'BUY' | 'SELL' | 'SIP' | 'DIVIDEND' | 'DEPOSIT' | 'WITHDRAWAL';
  assetName: string;
  symbol: string;
  units?: number;
  navOrPrice?: number;
  amount: number;
  status: 'Completed' | 'Processing' | 'Scheduled';
  txHash?: string;
}

export interface ClientProfile {
  id: string;
  name: string;
  email: string;
  accountNumber: string;
  clientType: 'Ultra HNI' | 'Private Wealth' | 'Institutional' | 'Growth';
  advisorName: string;
  totalPortfolioValue: number;
  totalInvestedAmount: number;
  cashBalance: number;
  riskScore: string;
  kycStatus: 'Verified' | 'Pending Review' | 'Needs Update';
  joinedYear: number;
}

export interface MarketIndex {
  symbol: string;
  name: string;
  value: number;
  change: number;
  changePercent: number;
  category: 'Equities' | 'Commodities' | 'Bonds' | 'Forex' | 'Crypto';
}

export interface ResearchArticle {
  id: string;
  title: string;
  category:
    | 'Macro Outlook'
    | 'Sector Deep Dive'
    | 'Equity Research'
    | 'Fixed Income'
    | 'ESG'
    | 'Global Strategy';
  date: string;
  author: string;
  authorRole: string;
  readTime: string;
  summary: string;
  content: string;
  assetClass: 'Equities' | 'Fixed Income' | 'Multi-Asset' | 'Alternatives';
  riskCategory: RiskLevel;
  trending?: boolean;
  downloadUrl?: string;
}

export interface Advisor {
  id: string;
  name: string;
  role: string;
  title: string;
  specialization: string;
  specialty: string;
  experienceYears: number;
  yearsExperience: number;
  bio: string;
  aumManaged: number;
  qualifications: string;
  certifications: string[];
  languages: string[];
  rating: number;
  reviewsCount: number;
  availableDays: string[];
  availableSlots: string[];
  avatarUrl: string;
}

export interface ConsultationBooking {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  advisorId: string;
  advisorName: string;
  requirement: string;
  consultationType: 'Video Call' | 'In-Person' | 'Phone Call';
  date: string;
  timeSlot: string;
  portfolioSize: string;
  notes?: string;
  status: 'Confirmed' | 'Pending' | 'Completed';
  createdAt: string;
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  type:
    | 'market'
    | 'portfolio'
    | 'dividend'
    | 'sip'
    | 'research'
    | 'appointment'
    | 'info';
  timestamp: string;
  read: boolean;
  linkTab?: ActiveTab;
}

export interface ReportDocument {
  id: string;
  title: string;
  category: string;
  period: string;
  fileSize: string;
  size: string;
  releaseDate: string;
  date: string;
  description: string;
  fileType: string;
  year: number;
}

export type ReportDoc = ReportDocument;

export interface EducationModule {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  description: string;
  topics: string[];
}

export interface GlobalOffice {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  region: string;
}
