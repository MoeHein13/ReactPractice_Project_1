import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/ReactPractice_Project_1/Practice-React-1/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
