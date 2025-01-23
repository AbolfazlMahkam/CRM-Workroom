import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DarkModeprovider } from "./context/DarkMode.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeprovider>
      <App />
    </DarkModeprovider>
  </StrictMode>
);
