import { useSwitchTheme } from "../../hooks/switchTheme.js";
import styles from "../Navigation/Main/Desktop/Navigation.module.css";
import DayNightToggle from "react-day-and-night-toggle";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const ThemeSwitcher = () => {
  const { isDarkMode, switchTheme } = useSwitchTheme();

  return <DayNightToggle onChange={switchTheme} checked={isDarkMode} />;
};
