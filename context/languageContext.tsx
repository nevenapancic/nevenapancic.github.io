/** @format */

'use client';

import React, { useState, createContext, useContext, useEffect } from 'react';

type Language = 'en' | 'sr';

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const localLanguage = window.localStorage.getItem(
      'language'
    ) as Language | null;

    if (localLanguage) {
      setLanguage(localLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'sr' : 'en';
    setLanguage(newLanguage);
    window.localStorage.setItem('language', newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      'useLanguage must be used within a LanguageContextProvider'
    );
  }

  return context;
}
