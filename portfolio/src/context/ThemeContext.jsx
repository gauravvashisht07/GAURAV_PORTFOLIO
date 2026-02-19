/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Force dark theme only
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark", toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
