import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./sass/style.scss";
import AppProvider from "./contexts/appContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
