import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext({
  cursorVariant: 'default',
  cursorText: '',
  setCursorState: (variant, text = '') => {},
});

export const CursorProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');

  const setCursorState = (variant, text = '') => {
    setCursorVariant(variant);
    setCursorText(text);
  };

  return (
    <CursorContext.Provider value={{ cursorVariant, cursorText, setCursorState }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
