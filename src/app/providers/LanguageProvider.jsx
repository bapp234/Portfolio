import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'portfolio-language';

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(STORAGE_KEY);

  if (savedLanguage === 'en' || savedLanguage === 'vi') {
    return savedLanguage;
  }

  return 'vi';
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  function toggleLanguage() {
    setLanguage((currentLanguage) =>
      currentLanguage === 'vi' ? 'en' : 'vi'
    );
  }

  const value = useMemo(
    () => ({
      language,
      isVietnamese: language === 'vi',
      isEnglish: language === 'en',
      setLanguage,
      toggleLanguage,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }

  return context;
}