import React, { createContext, useContext, useState, ReactNode } from 'react';

interface QuoteModalContextType {
  isOpen: boolean;
  openQuoteModal: (preselectedService?: string) => void;
  closeQuoteModal: () => void;
  preselectedService: string;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export const QuoteModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const openQuoteModal = (serviceName?: string) => {
    if (serviceName) setPreselectedService(serviceName);
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteModalContext.Provider value={{ isOpen, openQuoteModal, closeQuoteModal, preselectedService }}>
      {children}
    </QuoteModalContext.Provider>
  );
};

export const useQuoteModal = () => {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
};
