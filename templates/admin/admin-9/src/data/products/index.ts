export interface ProductItem {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  rating: number;
  image: string;
}

export const mockProducts: ProductItem[] = [
  { id: 'p1', name: 'Staging Sync Cluster Node', price: 3500.00, category: 'Database Licenses', stock: 12, rating: 4.8, image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=150' },
  { id: 'p2', name: 'SSL Certificates Renewal Keychain', price: 700.00, category: 'Credentials Packages', stock: 45, rating: 4.2, image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=150' },
  { id: 'p3', name: 'Webhook Slack Integration License', price: 49.00, category: 'APIs Subscriptions', stock: 99, rating: 4.5, image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=150' }
];
