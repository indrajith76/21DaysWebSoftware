import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "../App";

export const mainRouter = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}></Route>)
);
