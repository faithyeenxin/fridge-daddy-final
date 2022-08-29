import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <App />
  </React.Fragment>
);

// could not use StrictMode as it would cause double posting into airTable database
// <React.StrictMode>
//     <App />
//   </React.StrictMode>
