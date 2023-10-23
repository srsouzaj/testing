import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Tasks from "./components/Task";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Tasks />
  </React.StrictMode>
);
