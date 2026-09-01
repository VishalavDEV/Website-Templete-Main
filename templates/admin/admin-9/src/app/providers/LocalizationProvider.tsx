/* src/app/providers/LocalizationProvider.tsx */
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es' | 'fr';

const translations: Record<Language, Record<string, string>> = {
  en: {
    dashboard: 'Dashboard',
    users: 'Portal Users',
    settings: 'Portal Settings',
    logout: 'Log Out',
    welcome: 'Welcome back',
    search_placeholder: 'Search templates, components...',
    theme_light: 'Switch to light mode',
    theme_dark: 'Switch to dark mode',
  },
  es: {
    dashboard: 'Panel de Control',
    users: 'Usuarios del Portal',
    settings: 'Configuración del Portal',
    logout: 'Cerrar Sesión',
    welcome: 'Bienvenido de nuevo',
    search_placeholder: 'Buscar plantillas, componentes...',
    theme_light: 'Cambiar a modo claro',
    theme_dark: 'Cambiar a modo oscuro',
  },
  fr: {
    dashboard: 'Tableau de bord',
    users: 'Utilisateurs du Portail',
    settings: 'Paramètres du Portail',
    logout: 'Se Déconnecter',
    welcome: 'Bon retour',
    search_placeholder: 'Rechercher des modèles, composants...',
    theme_light: 'Passer au mode clair',
    theme_dark: 'Passer au mode sombre',
  },
};

type LocalizationContextType = {
  locale: Language;
  setLocale: (locale: Language) => void;
  t: (key: string) => string;
};

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export function LocalizationProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Language>(() => {
    return (localStorage.getItem('locale') as Language) || 'en';
  });

  const changeLocale = (lang: Language) => {
    setLocale(lang);
    localStorage.setItem('locale', lang);
  };

  const t = (key: string) => {
    return translations[locale][key] || key;
  };

  return (
    <LocalizationContext.Provider value={{ locale, setLocale: changeLocale, t }}>
      {children}
    </LocalizationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LocalizationContext);
  if (!context) throw new Error('useTranslation must be used within LocalizationProvider');
  return context;
}
