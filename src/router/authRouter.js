import {
  Route,
  Router,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../screens/Authentication/Login";
import Signup from "../screens/Authentication/Signup";

export const authRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Route>
  )
);
