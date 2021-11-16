import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// polyfills
if (typeof (window as any).global === "undefined") {
  (window as any).global = window;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
