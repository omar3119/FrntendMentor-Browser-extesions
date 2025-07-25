import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./Context";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
