export type Gender = 'women' | 'men' | 'accessories';

export type ProductColor = {
  name: string;
  hex: string;
  image?: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  gender: Gender;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  description: string;
  images: {
    primary: string;
    secondary: string;
    lifestyle?: string;
  };
  colors: ProductColor[];
  sizes: string[];
  material: string;
  care: string;
  stock: number;
  badge?: 'NEW SEASON' | 'ESSENTIAL' | 'LIMITED' | 'BESTSELLER';
  featured?: boolean;
  newArrival?: boolean;
  bestSeller?: boolean;
  mood?: 'MINIMAL' | 'EFFORTLESS' | 'EVENING' | 'EVERYDAY' | 'STATEMENT';
};

export type FilterState = {
  gender: Gender | 'all';
  category: string;
  subcategory: string;
  colors: string[];
  sizes: string[];
  materials: string[];
  priceRange: [number, number];
  sortBy: 'featured' | 'newest' | 'price-low' | 'price-high' | 'bestsellers';
  searchQuery: string;
  inStockOnly: boolean;
};

export type CartItem = {
  product: Product;
  selectedColor: ProductColor;
  selectedSize: string;
  quantity: number;
};

export type WishlistItem = {
  product: Product;
  addedAt: string;
};

export type CollectionItem = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  secondaryImage: string;
  tag: string;
  productSlugs: string[];
};
