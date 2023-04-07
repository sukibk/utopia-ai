import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Root.scss";
import { store } from "./store/index.js";
import { Provider } from "react-redux";
import { IconContext } from "react-icons";
import { Toaster } from "react-hot-toast";
import "../.mirrorful/theme.css";
import "../.mirrorful/darktheme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* Used to display notification on auth change */}
    <Toaster
      toastOptions={{
        style: {
          backgroundColor: "var(--color-background-secondary)",
          color: "var(--color-text-primary)",
        },
      }}
    />
    <IconContext.Provider value={{ className: "custom-icons" }}>
      {" "}
      {/* Used for icons in the app - external library */}
      <Provider store={store}>
        <App />
      </Provider>
    </IconContext.Provider>
  </>
);
