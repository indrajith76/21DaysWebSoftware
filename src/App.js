import React from "react";
import { RouterProvider } from "react-router-dom";
import "./input.css";
import { router } from "./routes/routes"; 

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
