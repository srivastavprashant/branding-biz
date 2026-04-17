import { createContext, useState, useEffect, useCallback } from 'react';

export const ThemeContext = createContext();

function getInitialTheme() {
  try {
    const stored = localStorage.getItem('bb-theme');
    if (stored === 'dark' || stored === 'light') return stored;
  } catch (_) { /* localStorage unavailable */ }
  return 'dark'; // dark-first site
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('bb-theme', theme);
    } catch (_) { /* localStorage unavailable */ }
  }, [theme]);

  // Stable reference — won't cause unnecessary re-renders in consumers
  const toggle = useCallback(() => {
    setTheme(t => t === 'dark' ? 'light' : 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
