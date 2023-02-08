import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RPSContextProvider } from "./context/RPSContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RPSContextProvider>
      <App />
    </RPSContextProvider>
  </React.StrictMode>
);
