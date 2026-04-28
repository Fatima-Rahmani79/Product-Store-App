import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { getTheme } from "./theme/theme";
import { useSettings } from "./hooks/useSettings";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const { state } = useSettings();
  const theme = getTheme(state.theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster position="bottom-center" />

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
