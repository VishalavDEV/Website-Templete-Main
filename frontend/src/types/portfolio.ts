export type PhotoCategory = 'All' | 'Editorial' | 'Architecture' | 'Portrait' | 'Street' | 'Minimal';

export interface ExifData {
  camera: string;
  lens: string;
  focalLength: string;
  aperture: string;
  shutterSpeed: string;
  iso: string;
}

export interface Photo {
  id: string;
  title: string;
  category: Exclude<PhotoCategory, 'All'>;
  imageUrl: string;
  aspectRatio: 'tall' | 'wide' | 'square' | 'standard';
  location: string;
  year: string;
  description: string;
  exif: ExifData;
  series?: string;
  featured?: boolean;
}

export interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  priceRange: string;
  duration: string;
  deliverables: string[];
  popular?: boolean;
  tag: string;
}

export interface GearItem {
  category: 'Cameras' | 'Optics' | 'Lighting' | 'Analog';
  model: string;
  specs: string;
  badge: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Publication {
  name: string;
  accolade: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  imageUrl: string;
  cameraInfo: string;
}
