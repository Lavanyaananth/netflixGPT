import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // lot of things will happen twice, react does extra rendering
  // <StrictMode>
  <App />
  // </StrictMode>
);
