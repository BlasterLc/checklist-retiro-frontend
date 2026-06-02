import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { RetiroProvider } from "./context/RetiroContext";

import "./index.css";
import "./styles/main.scss";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(

  <RetiroProvider>

    <BrowserRouter>

      <App />

    </BrowserRouter>

  </RetiroProvider>

);