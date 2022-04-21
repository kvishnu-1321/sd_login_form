import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BaseContextProvider } from "./BaseContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <BaseContextProvider>
      <App />
    </BaseContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
