export interface Dish {
  title: string;
  price: string;
  desc: string;
  ingredients: string;
  pairing?: string;
  img: string;
  category?: string;
  dietary?: string;
  badge?: string;
  badgeClass?: string;
}

export interface GalleryItem {
  title: string;
  category: string;
  categoryLabel: string;
  spanClass: string;
  img: string;
  fullImg: string;
}

export interface Testimonial {
  quote: string;
  stars: number;
  author: string;
  meta: string;
}
