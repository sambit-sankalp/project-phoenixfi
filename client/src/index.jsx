import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import Web3Provider from "../src/contexts/Web3provider"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Web3Provider>
    <App />
    </Web3Provider>
  </React.StrictMode>
);
