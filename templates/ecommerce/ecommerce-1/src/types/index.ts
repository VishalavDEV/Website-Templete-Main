export interface ShadeOption {
  id: string;
  name: string;
  colorHex: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  shades: ShadeOption[];
  ingredients: string[];
  description: string;
  flavorNotes?: string;
}

export interface CartItem {
  product: Product;
  selectedShade: ShadeOption;
  quantity: number;
}

export interface FeatureTooltip {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  position: { x: number; y: number }; // percentage positions
}

export interface SocialPost {
  id: string;
  username: string;
  views: string;
  likes: string;
  caption: string;
  image: string;
  shadeName: string;
}
