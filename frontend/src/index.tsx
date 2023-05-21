import React from "react";
import { createRoot } from "react-dom/client";

const app: HTMLElement | null = document.getElementById("app");
if (!app) {
  throw new Error("Unable to find HTML DOM entrypoint");
}
const root = createRoot(app);

root.render(
  <React.StrictMode>
    <div>Hello from React</div>
  </React.StrictMode>
);
