import React, { createContext, useContext, useEffect, useState } from "react";
import { userObserver } from "./firebase-config";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("item")) || []
  );

  const [incele, setincele] = useState([]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    localStorage.setItem("item", JSON.stringify(favorites));
  }, [theme, favorites]);

  const setThemeMode = (mode) => setTheme(mode);
  const [currentUser, setCurrentUser] = useState();
  const [navi, setNavi] = useState("");

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        setNavi,
        currentUser,
        navi,
        theme,
        setThemeMode,
        setFavorites,
        favorites,
        setincele,
        incele,
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
