"use client";

import { createContext, useContext, useEffect, useState } from "react";

enum Theme {
  "light",
  "dark",
}

type ThemeContextType = {
  theme: Theme;
  handleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>({
  theme: Theme.light,
  handleTheme: () => {},
});

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState(Theme.dark);

  useEffect(() => {
    const savedTheme: any = localStorage.getItem("theme");
    const prevTheme = JSON.parse(savedTheme);
    setTheme(prevTheme);
  }, []);

  const handleTheme = () => {
    const newTheme = theme === Theme.light ? Theme.dark : Theme.light;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme.toString());
  };

  const value = { theme, handleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null) throw new Error("Failed to access ThemeContext.");

  return context;
};

export default useTheme;
