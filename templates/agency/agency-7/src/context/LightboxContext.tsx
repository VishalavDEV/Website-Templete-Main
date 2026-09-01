import React, { createContext, useContext, useState } from 'react';

export interface LightboxImage {
  url: string;
  title?: string;
  caption?: string;
}

interface LightboxContextType {
  isOpen: boolean;
  currentImage: LightboxImage | null;
  imagesList: LightboxImage[];
  currentIndex: number;
  openLightbox: (images: LightboxImage[] | LightboxImage, startIndex?: number) => void;
  closeLightbox: () => void;
  nextImage: () => void;
  prevImage: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imagesList, setImagesList] = useState<LightboxImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (images: LightboxImage[] | LightboxImage, startIndex = 0) => {
    const list = Array.isArray(images) ? images : [images];
    setImagesList(list);
    setCurrentIndex(startIndex >= 0 && startIndex < list.length ? startIndex : 0);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    if (imagesList.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % imagesList.length);
  };

  const prevImage = () => {
    if (imagesList.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length);
  };

  const currentImage = imagesList[currentIndex] || null;

  return (
    <LightboxContext.Provider
      value={{
        isOpen,
        currentImage,
        imagesList,
        currentIndex,
        openLightbox,
        closeLightbox,
        nextImage,
        prevImage,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightbox = (): LightboxContextType => {
  const context = useContext(LightboxContext);
  if (!context) throw new Error('useLightbox must be used within LightboxProvider');
  return context;
};
