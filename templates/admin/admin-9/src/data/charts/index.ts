export interface ChartDataset {
  label: string;
  values: number[];
}

export const mockMonthlyValues = [120, 250, 180, 490, 310, 520, 410, 680, 590, 710, 890, 1020];
export const mockWeeklyValues = [4500, 6200, 3100, 9500, 5800, 8000, 11000];
export const mockCategories = ['Organic Search', 'Direct Traffic', 'Social Referral', 'Paid Advertising'];
export const mockPercentages = [42, 38, 56, 29];

export const mockGeographicData = [
  { country: 'United States', visitors: '14,250', code: 'US' },
  { country: 'United Kingdom', visitors: '4,820', code: 'UK' },
  { country: 'France', visitors: '3,110', code: 'FR' },
  { country: 'Germany', visitors: '2,900', code: 'DE' }
];
