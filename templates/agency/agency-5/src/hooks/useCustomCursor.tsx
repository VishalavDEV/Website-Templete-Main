import React, { createContext, useContext, useState, useEffect } from 'react';

export type CursorType = 'default' | 'pointer' | 'hover' | 'preview' | 'hidden';

interface CursorContextType {
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
  previewImage: string | null;
  setPreviewImage: (url: string | null) => void;
  previewText: string | null;
  setPreviewText: (text: string | null) => void;
  setCursorHover: (text?: string, image?: string) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorType: 'default',
  setCursorType: () => {},
  previewImage: null,
  setPreviewImage: () => {},
  previewText: null,
  setPreviewText: () => {},
  setCursorHover: () => {},
  resetCursor: () => {},
});

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [previewText, setPreviewText] = useState<string | null>(null);

  // Disable custom cursor on touch devices
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

  const setCursorHover = (text?: string, image?: string) => {
    if (isTouch) return;
    if (image) {
      setPreviewImage(image);
      setPreviewText(text || 'VIEW');
      setCursorType('preview');
    } else if (text) {
      setPreviewText(text);
      setCursorType('hover');
    } else {
      setCursorType('pointer');
    }
  };

  const resetCursor = () => {
    if (isTouch) return;
    setCursorType('default');
    setPreviewImage(null);
    setPreviewText(null);
  };

  return (
    <CursorContext.Provider
      value={{
        cursorType: isTouch ? 'hidden' : cursorType,
        setCursorType,
        previewImage,
        setPreviewImage,
        previewText,
        setPreviewText,
        setCursorHover,
        resetCursor,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCustomCursor = () => useContext(CursorContext);
