import React from "react";
import { useAppContext } from "./appContext";

export const Content = () => {
  let { theme } = useAppContext();
  return (
    <div style={{ color: theme === "dark" ? "black" : "red" }}>
      Test Content to test
    </div>
  );
};
