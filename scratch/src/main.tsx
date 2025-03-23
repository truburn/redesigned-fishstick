import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import theme from '@styles/theme.ts';
import GlobalStyles from "@styles/GlobalStyles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    <App />
    </ThemeProvider>
  </StrictMode>,
);
