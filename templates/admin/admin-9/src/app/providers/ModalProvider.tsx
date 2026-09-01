/* src/app/providers/ModalProvider.tsx */
import React, { createContext, useContext, useState, useCallback } from 'react';
import { Modal } from '../../components/ui/Modal';

interface ModalOptions {
  title: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

type ModalContextType = {
  openModal: (options: ModalOptions) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState<ModalOptions | null>(null);

  const openModal = useCallback((options: ModalOptions) => {
    setConfig(options);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {config && (
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          title={config.title}
          footer={config.footer}
        >
          {config.content}
        </Modal>
      )}
    </ModalContext.Provider>
  );
}

export function useGlobalModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useGlobalModal must be used within ModalProvider');
  return context;
}
