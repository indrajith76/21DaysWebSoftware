import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp"; 
import Dashboard from '../pages/Dashboard/Dashboard';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard/>
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);
