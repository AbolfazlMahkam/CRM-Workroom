import React from "react";
import { DarkModeContext } from "../context/DarkMode";

export const useDarkMode = () => {
  const context = React.useContext(DarkModeContext);

  if (context === undefined) {
    throw new Error("useDarkMode() must be used Inside a DarkModeProvider");
  }

  return context;
};