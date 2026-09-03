const getDynamicBasename = () => {
  let p = window.location.pathname;
  if (p.endsWith('/index.html')) p = p.slice(0, -11);
  if (p.endsWith('/')) p = p.slice(0, -1);
  return p;
};

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/jetbrains-mono";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={getDynamicBasename()}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
