import { createContext } from 'react';

export interface ModalContextType {
  openModal: (content: React.ReactNode, title?: string) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);
