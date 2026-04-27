import { createTheme } from "@mui/material";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#4f46e5" }, // indigo modern
            secondary: { main: "#06b6d4" },

            background: {
              default: "#f8fafc",
              paper: "#ffffff",
            },

            text: {
              primary: "#0f172a",
              secondary: "#64748b",
            },
          }
        : {
            primary: { main: "#818cf8" },
            secondary: { main: "#22d3ee" },

            background: {
              default: "#0f172a",
              paper: "#1e293b", // مهم: کارت ها جدا میشن
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
