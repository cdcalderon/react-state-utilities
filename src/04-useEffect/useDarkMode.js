import React, { useEffect, useState } from "react";

const initiallyDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export const useDarkMode = () => {
  let [dark, setDark] = useState(initiallyDark);

  const listener = (event) => {
    setDark(event.matches);
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", listener);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", listener);
    };
  }, []);

  return dark;
};

//  window
//    .matchMedia("(prefers-color-scheme: dark)")
//    .addEventListener("change", listener);
