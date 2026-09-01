import { createContext } from 'react';

export interface LayoutContextType {
  layoutMode: 'fluid' | 'boxed';
  setLayoutMode: (mode: 'fluid' | 'boxed') => void;
}

export const LayoutContext = createContext<LayoutContextType | undefined>(undefined);
