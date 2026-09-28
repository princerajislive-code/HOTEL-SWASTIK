import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeMode } from '../types';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('swastik_theme_mode');
      if (saved === 'day' || saved === 'night') {
        return saved;
      }
    } catch {
      // ignore
    }
    // Default to night for ultra-luxury hotel experience or day based on hour
    const hour = new Date().getHours();
    return (hour >= 6 && hour < 18) ? 'day' : 'night';
  });

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
    try {
      localStorage.setItem('swastik_theme_mode', mode);
    } catch {
      // ignore
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'day' ? 'night' : 'day');
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'day') {
      root.classList.remove('theme-night');
      root.classList.add('theme-day');
      document.body.style.backgroundColor = '#F7F3EC';
      document.body.style.color = '#1C1917';
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', '#F7F3EC');
    } else {
      root.classList.remove('theme-day');
      root.classList.add('theme-night');
      document.body.style.backgroundColor = '#0F0F10';
      document.body.style.color = '#F7F3EC';
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', '#0F0F10');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
