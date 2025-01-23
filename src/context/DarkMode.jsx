/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DarkModeContext = React.createContext();
const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };

    default:
      return state;
  }
};

export function DarkModeprovider({ children }) {
  const [state, dispatch] = React.useReducer(DarkModeReducer, {
    mode: "light",
  });

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };
  return (
    <DarkModeContext.Provider value={{ ...state, changeMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
