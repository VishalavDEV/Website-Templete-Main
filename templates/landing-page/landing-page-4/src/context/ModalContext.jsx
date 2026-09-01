import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [authModalState, setAuthModalState] = useState({ isOpen: false, initialPlan: 'growth' });
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [featureModalData, setFeatureModalData] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const openAuthModal = (plan = 'growth') => {
    setAuthModalState({ isOpen: true, initialPlan: plan });
  };

  const closeAuthModal = () => {
    setAuthModalState({ isOpen: false, initialPlan: 'growth' });
  };

  const openDemoModal = () => {
    setDemoModalOpen(true);
  };

  const closeDemoModal = () => {
    setDemoModalOpen(false);
  };

  const openFeatureModal = (feature) => {
    setFeatureModalData(feature);
  };

  const closeFeatureModal = () => {
    setFeatureModalData(null);
  };

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <ModalContext.Provider
      value={{
        authModalState,
        openAuthModal,
        closeAuthModal,
        demoModalOpen,
        openDemoModal,
        closeDemoModal,
        featureModalData,
        openFeatureModal,
        closeFeatureModal,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
