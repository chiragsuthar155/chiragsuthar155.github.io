import React from "react";

import { createRoot } from "react-dom/client";

import App from "./App";
import Dark from "./Dark";
import Animals from "./Animals";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    {/* <Dark /> */}
    {/* <Animals /> */}
  </React.StrictMode>
);
