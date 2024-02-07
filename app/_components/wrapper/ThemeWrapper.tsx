"use client";

import React from "react";
import useTheme from "@/app/_hooks/useTheme";

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <html lang="en" data-theme={theme === 0 ? "light" : "dark"}>
      {children}
    </html>
  );
};

export default ThemeWrapper;
