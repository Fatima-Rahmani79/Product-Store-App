import { createTheme } from "@mui/material";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#4985a7" }, // indigo modern
            secondary: { main: "#49bdab" },

            background: {
              default: "rgba(182, 229, 226, 0.23)",
              paper: "rgba(250, 250, 250, 0.37)",
            },

            text: {
              primary: "#0f172a",
              secondary: "#64748b",
            },
          }
        : {
            primary: { main: "#1fb69f" },
            secondary: { main: "#1b5476" },

            background: {
              default: "#0f172a",
              paper: "#1e293b",
            },

            text: {
              primary: "#f1f5f9",
              secondary: "#94a3b8",
            },
          }),
    },

    shape: {
      borderRadius: 8,
    },

    typography: {
      fontFamily: "Inter, sans-serif",
      h5: { fontWeight: 700 },
      h6: { fontWeight: 600 },
      button: { textTransform: "none" },
    },

    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            fontWeight: 600,
          },
        },
      },
    },
  });
