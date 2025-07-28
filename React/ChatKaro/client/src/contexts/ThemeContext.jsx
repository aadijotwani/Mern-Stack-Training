import React, { useEffect, useState, createContext, useContext } from "react";

const ThemeContext = React.createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("ChatKaroTheme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ChatKaroTheme", theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
