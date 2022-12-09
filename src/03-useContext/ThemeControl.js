import React from "react";
import { useAppContext } from "./appContext";

export const ThemeControl = () => {
  let { theme, setTheme } = useAppContext();
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      ThemeControl
    </button>
  );
};
