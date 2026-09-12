import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); // Start with dark as default
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    let initialTheme = 'dark'; // default

    if (savedTheme) {
      initialTheme = savedTheme;
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      initialTheme = 'light';
    }

    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  // Apply theme whenever it changes
  useEffect(() => {
    if (!mounted) return;
    
    localStorage.setItem('portfolio-theme', theme);
    applyTheme(theme);
  }, [theme, mounted]);

  const applyTheme = (themeValue) => {
    const html = document.documentElement;
    
    if (themeValue === 'dark') {
      html.classList.add('dark');
      html.style.colorScheme = 'dark';
    } else {
      html.classList.remove('dark');
      html.style.colorScheme = 'light';
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
