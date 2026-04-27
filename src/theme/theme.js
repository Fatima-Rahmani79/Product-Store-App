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
              paper: "#0d2d61ac",
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

      /* ✅ این بخش اضافه شد */
      MuiMenu: {
        styleOverrides: {
          paper: ({ theme }) => ({
            backgroundColor:
              theme.palette.mode === "dark" ? "#1e1e1e" : "#ffffff",
            color: theme.palette.text.primary,
            borderRadius: 8,
            marginTop: 4,
          }),
        },
      },

      MuiMenuItem: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 6,
            margin: "2px 6px",

            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.05)",
            },

            "&.Mui-selected": {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(0,0,0,0.08)",
            },

            "&.Mui-selected:hover": {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.16)"
                  : "rgba(0,0,0,0.12)",
            },
          }),
        },
      },
    },
  });
