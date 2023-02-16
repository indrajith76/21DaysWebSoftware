import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { authRouter } from "./router/authRouter";
import { RouterProvider } from "react-router-dom";
import { auth } from "./config/firebase";
import { mainRouter } from "./router/mainRouter";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={auth.currentUser ? mainRouter : authRouter} />
  </React.StrictMode>
);
