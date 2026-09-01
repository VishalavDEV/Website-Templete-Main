export interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  region: 'Americas' | 'Europe & Middle East' | 'Asia-Pacific';
  address: string;
  postalCode: string;
  phone: string;
  email: string;
  specialization: string;
  coordinates: { x: number; y: number }; // percentage based for responsive SVG map
  headcount: number;
  timezone: string;
}

export const OFFICES: OfficeLocation[] = [
  {
    id: 'new-york',
    city: 'New York',
    country: 'United States',
    region: 'Americas',
    address: 'One Vanderbilt Avenue, 48th Floor',
    postalCode: 'NY 10017',
    phone: '+1 (212) 555-0190',
    email: 'ny.advisory@vantagefinancial.com',
    specialization: 'Global Headquarters, Corporate Finance, M&A Advisory',
    coordinates: { x: 28, y: 34 },
    headcount: 220,
    timezone: 'EST (UTC-5)',
  },
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe & Middle East',
    address: '100 Bishopsgate, 32nd Floor',
    postalCode: 'EC2N 4AG',
    phone: '+44 20 7946 0912',
    email: 'london.desk@vantagefinancial.com',
    specialization: 'EMEA Corporate Finance, Cross-Border Debt, Private Credit',
    coordinates: { x: 48, y: 28 },
    headcount: 165,
    timezone: 'GMT (UTC+0)',
  },
  {
    id: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    region: 'Asia-Pacific',
    address: 'Marina Bay Financial Centre, Tower 2',
    postalCode: '018983',
    phone: '+65 6789 0123',
    email: 'singapore@vantagefinancial.com',
    specialization: 'APAC Wealth Management, Sovereign Allocations, Fintech Desk',
    coordinates: { x: 78, y: 56 },
    headcount: 110,
    timezone: 'SGT (UTC+8)',
  },
  {
    id: 'dubai',
    city: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Europe & Middle East',
    address: 'DIFC Gate Precinct 4, Level 7',
    postalCode: 'PO Box 506500',
    phone: '+971 4 362 7000',
    email: 'dubai.desk@vantagefinancial.com',
    specialization: 'Family Office Advisory, Infrastructure Finance, Sovereign LPs',
    coordinates: { x: 61, y: 42 },
    headcount: 75,
    timezone: 'GST (UTC+4)',
  },
  {
    id: 'frankfurt',
    city: 'Frankfurt',
    country: 'Germany',
    region: 'Europe & Middle East',
    address: 'TaunusTurm, Taunustor 1',
    postalCode: '60310 Frankfurt am Main',
    phone: '+49 69 1234 5678',
    email: 'frankfurt@vantagefinancial.com',
    specialization: 'Industrial M&A, European Regulatory & Risk Treasury Desk',
    coordinates: { x: 51, y: 30 },
    headcount: 60,
    timezone: 'CET (UTC+1)',
  },
  {
    id: 'hong-kong',
    city: 'Hong Kong',
    country: 'China',
    region: 'Asia-Pacific',
    address: 'Two International Finance Centre, Central',
    postalCode: 'Hong Kong SAR',
    phone: '+852 2890 1234',
    email: 'hongkong@vantagefinancial.com',
    specialization: 'Cross-Border Capital Structuring & Multi-Family Governance',
    coordinates: { x: 81, y: 44 },
    headcount: 55,
    timezone: 'HKT (UTC+8)',
  },
  {
    id: 'toronto',
    city: 'Toronto',
    country: 'Canada',
    region: 'Americas',
    address: 'Brookfield Place, Bay-Wellington Tower',
    postalCode: 'ON M5J 2T3',
    phone: '+1 (416) 555-0144',
    email: 'toronto@vantagefinancial.com',
    specialization: 'Natural Resources, Energy Transition, Pension Fund Advisory',
    coordinates: { x: 26, y: 32 },
    headcount: 45,
    timezone: 'EST (UTC-5)',
  },
  {
    id: 'mumbai',
    city: 'Mumbai',
    country: 'India',
    region: 'Asia-Pacific',
    address: 'Bandra Kurla Complex, One BKC, C-Wing',
    postalCode: '400051',
    phone: '+91 22 6677 8899',
    email: 'mumbai@vantagefinancial.com',
    specialization: 'High-Growth Tech Financing, Infrastructure Debt & Trade FX',
    coordinates: { x: 70, y: 46 },
    headcount: 50,
    timezone: 'IST (UTC+5:30)',
  },
];
