import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false);

   const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("item"))|| []
   );



  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    localStorage.setItem("item", JSON.stringify(favorites));
  }, [theme,favorites]);

  const setThemeMode = (mode) => setTheme(mode);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setThemeMode,
         setFavorites,
        favorites,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
const useThemeHook = () => {
  const { theme } = useContext(ThemeContext);
  return [theme];
};
export { ThemeProvider, ThemeContext, useThemeHook };
