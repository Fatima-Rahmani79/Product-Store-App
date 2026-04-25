export const initialState = {
  theme: "light",
  viewMode: "grid",
};

export const settingsReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    case "TOGGLE_VIEW":
      return {
        ...state,
        viewMode: state.viewMode === "grid" ? "list" : "grid",
      };

    default:
      return state;
  }
};
