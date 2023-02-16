import React from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./input.css";
import { router } from "./routes/routes";

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </>
  );
};

export default App;
