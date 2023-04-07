import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/themeSlice.js";
import { useEffect } from "react";

export const useSwitchTheme = () => {
  const themeChecker = localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState();
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.theme.theme);

  useEffect(() => {
    if (themeChecker) {
      if (themeChecker === "dark") setIsDarkMode(true);
      else setIsDarkMode(false);
    } else setIsDarkMode(true);
  }, [theme]);

  const switchTheme = () => {
    setIsDarkMode((prevValue) => !prevValue);
    const newTheme = themeChecker === "light" ? "dark" : "light";
    dispatch(setTheme({ theme: newTheme }));
    document.body.setAttribute("data-theme", `${newTheme}`);
    localStorage.setItem("theme", `${newTheme}`);
  };

  return { isDarkMode, switchTheme };
};

// Old Code
// -------------------------------------------------------------------------
// const [isDarkMode, setIsDarkMode] = useState();
// let darkModeChecker = localStorage.getItem("theme");
// const dispatch = useDispatch();
//
// const switchTheme = () => {
//   const newTheme =
//     localStorage.getItem("theme") === "light" ? "dark" : "light";
//   dispatch(setTheme({ theme: newTheme }));
//   document.body.setAttribute("data-theme", `${newTheme}`);
//   console.log(document.getElementById("root"));
//   localStorage.setItem("theme", `${newTheme}`);
// };
//
// useEffect(() => {
//   if (darkModeChecker === "light") {
//     setIsDarkMode(false);
//   } else setIsDarkMode(true);
// }, []);
// -------------------------------------------------------------------------
