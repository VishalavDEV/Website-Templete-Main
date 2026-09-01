/// <reference types="vite/client" />

export type NoireCategory = '01 SMALL PLATES' | '02 FIRE' | '03 SEA' | '04 VEGETABLE' | '05 SWEET';

export interface NoireMenuItem {
  id: string;
  code: string;
  name: string;
  category: NoireCategory;
  ingredients: string;
  price: string;
  priceNum: number;
  image: string;
  description: string;
  isSignature?: boolean;
}

export interface NoireEvent {
  id: string;
  day: string;
  date: string;
  title: string;
  time: string;
  image: string;
  description: string;
}

export interface NoireNightPanel {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  image: string;
  tagline: string;
}

export interface NoireGalleryItem {
  id: string;
  title: string;
  caption: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'full';
  image: string;
}

export interface NoireReservationState {
  date: string;
  time: string;
  guests: string;
  name: string;
  phone: string;
  email: string;
  specialNote: string;
}

export interface NoireConfig {
  name: string;
  tagline: string;
  city: string;
  coordinates: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  closedDay: string;
  socials: {
    instagram: string;
    spotify: string;
    vimeo: string;
  };
}

