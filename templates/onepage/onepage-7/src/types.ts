export interface PRDSection {
  id: string;
  title: string;
  badge: string;
  audience: 'all' | 'designers' | 'developers' | '3d-artists';
  summary: string;
  content: {
    heading: string;
    subheading?: string;
    paragraphs: string[];
    bulletPoints?: { title: string; desc: string }[];
    specs?: { label: string; value: string; note?: string }[];
    callout?: { type: 'note' | 'warning' | 'highlight'; text: string };
  }[];
}

export interface MaterialConfig {
  roughness: number;
  metalness: number;
  transmission: number;
  ior: number;
  thickness: number;
  chromaticAberration: number;
  distortion: number;
  wireframe: boolean;
  colorScheme: 'obsidian' | 'luminescence' | 'nebula' | 'solar';
  speed: number;
  audioReactivity: number;
}

export type ViewMode = 'website' | 'prd' | 'split';
