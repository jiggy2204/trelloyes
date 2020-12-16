import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import STORE from "./STORE.js";

ReactDOM.render(
  <React.StrictMode>
    <App store={STORE} />
  </React.StrictMode>,
  document.getElementById("root")
);
