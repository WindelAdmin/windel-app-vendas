import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme as getSystemColorScheme } from 'react-native';
import { useColorScheme as nativewind_useColorScheme } from 'nativewind';
import AsyncStorage from '@react-native-async-storage/async-storage';


type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

const THEME_KEY = '@user-theme';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = getSystemColorScheme(); 
  const [theme, setTheme] = useState<Theme>(systemScheme || 'light');
  const { setColorScheme } = nativewind_useColorScheme();

  useEffect(() => {
  
    const loadStoredTheme = async () => {
      const storedTheme = await AsyncStorage.getItem(THEME_KEY);
      if (storedTheme === 'light' || storedTheme === 'dark') {
        setTheme(storedTheme);
        setColorScheme(storedTheme);
      } else if (systemScheme) {
        setTheme(systemScheme);
        setColorScheme(systemScheme);
      }
    };

    loadStoredTheme();
  }, [systemScheme]);

  const toggleTheme = async () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    setColorScheme(nextTheme);
    await AsyncStorage.setItem(THEME_KEY, nextTheme); 
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
