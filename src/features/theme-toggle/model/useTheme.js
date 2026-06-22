import { useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-theme';

function getInitialTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme) {
    return savedTheme;
  }

  return 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark'
    );
  }

  return {
    theme,
    toggleTheme,
  };
}