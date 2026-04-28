import { useReducer } from "react";
import { settingsReducer, initialState } from "./settingsReducer";
import { SettingsContext } from "./settingsContext";

export const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(settingsReducer, initialState);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
};
