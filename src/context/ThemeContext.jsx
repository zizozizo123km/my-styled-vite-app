import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

// Define the context structure
const ThemeContext = createContext();

// Define the custom hook for easy access
export const useTheme = () => useContext(ThemeContext);

// Define the provider component
export const ThemeProvider = ({ children }) => {
  // State to hold the current theme ('light' or 'dark')
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to 'light'
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    // Check system preference if no local storage item exists
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Effect to apply the theme class to the document element
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Store the theme preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};