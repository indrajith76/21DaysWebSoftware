import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//   },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);
