import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme as getSystemColorScheme } from 'react-native';
import { useColorScheme as nativewind_useColorScheme } from 'nativewind';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = getSystemColorScheme(); 
  const [theme, setTheme] = useState<Theme>(systemScheme || 'light');
  const { setColorScheme } = nativewind_useColorScheme();

  useEffect(() => {
    if (systemScheme) {
      setTheme(systemScheme);
      setColorScheme(systemScheme);
    }
  }, [systemScheme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    setColorScheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
