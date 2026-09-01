import React, { createContext, useContext, useEffect, useState } from 'react';

interface IntroContextType {
  showIntro: boolean;
  isPlaying: boolean;
  skipIntro: () => void;
  replayIntro: () => void;
  finishIntro: () => void;
}

const IntroContext = createContext<IntroContextType | undefined>(undefined);

export const IntroProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    const hasSeen = sessionStorage.getItem('strata_intro_seen');
    return hasSeen !== 'true';
  });

  const [isPlaying, setIsPlaying] = useState<boolean>(showIntro);

  useEffect(() => {
    if (!showIntro) {
      setIsPlaying(false);
    }
  }, [showIntro]);

  const skipIntro = () => {
    sessionStorage.setItem('strata_intro_seen', 'true');
    setShowIntro(false);
    setIsPlaying(false);
  };

  const finishIntro = () => {
    sessionStorage.setItem('strata_intro_seen', 'true');
    setShowIntro(false);
    setIsPlaying(false);
  };

  const replayIntro = () => {
    setShowIntro(true);
    setIsPlaying(true);
  };

  return (
    <IntroContext.Provider value={{ showIntro, isPlaying, skipIntro, replayIntro, finishIntro }}>
      {children}
    </IntroContext.Provider>
  );
};

export const useIntro = (): IntroContextType => {
  const context = useContext(IntroContext);
  if (!context) throw new Error('useIntro must be used within IntroProvider');
  return context;
};
