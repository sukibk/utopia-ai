import { useState } from "@types/react";
import { useDispatch } from "react-redux";
import { setTheme } from "../store/themeSlice.js";

export const useSwitchTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState();
  let darkModeChecker = localStorage.getItem("theme");
  const dispatch = useDispatch();

  const switchTheme = () => {
    const newTheme =
      localStorage.getItem("theme") === "light" ? "dark" : "light";
    dispatch(setTheme({ theme: newTheme }));
    document.body.setAttribute("data-theme", `${newTheme}`);
    console.log(document.getElementById("root"));
    localStorage.setItem("theme", `${newTheme}`);
  };
};
