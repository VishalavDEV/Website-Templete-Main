export type CategoryId = 
  | 'electronics'
  | 'fashion'
  | 'home'
  | 'beauty'
  | 'grocery'
  | 'sports'
  | 'kids'
  | 'travel'
  | 'automotive'
  | 'books'
  | 'pets';

export interface SubCategory {
  id: string;
  name: string;
  count?: number;
}

export interface Category {
  id: CategoryId;
  name: string;
  slug: string;
  tagline: string;
  iconName: string;
  image: string;
  subcategories: SubCategory[];
  featuredSubcategory?: string;
  showcaseHeading?: string;
  showcaseCta?: string;
}

export interface Brand {
  id: string;
  name: string;
  logoText: string;
  tagline: string;
  category: CategoryId;
  featured?: boolean;
}

export interface ProductSpecification {
  [key: string]: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: CategoryId;
  subcategory: string;
  price: number;
  originalPrice: number;
  discount: number; // percentage e.g. 20
  rating: number;
  reviewCount: number;
  description: string;
  images: string[];
  colors?: { name: string; hex: string }[];
  sizes?: string[];
  specifications: ProductSpecification;
  features: string[];
  stock: number;
  badge?: 'NEW' | 'BESTSELLER' | 'SALE' | 'LIMITED' | 'ORVANA SHELF';
  featured?: boolean;
  newArrival?: boolean;
  bestSeller?: boolean;
  sale?: boolean;
  flashDeal?: boolean;
  under999?: boolean;
  tags?: string[];
  editCategory?: 'DESK EDIT' | 'HOME EDIT' | 'TRAVEL EDIT' | 'SELF CARE EDIT' | 'WEEKEND EDIT';
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface OrderItem {
  product: Product;
  quantity: number;
  price: number;
  color?: string;
  size?: string;
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  status: 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered';
  estimatedDelivery: string;
  shippingAddress: {
    fullName: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
  };
  paymentMethod: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  message: string;
}

export interface FilterState {
  category: string;
  subcategory: string;
  brands: string[];
  priceRange: [number, number];
  minRating: number;
  discountOnly: boolean;
  inStockOnly: boolean;
  searchQuery: string;
  customSpecs: Record<string, string>;
}
