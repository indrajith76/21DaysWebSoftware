import React, { createContext } from "react";
import "./input.css";
import { auth } from "./config/firebase";
const UserContext = createContext();

const App = () => {
  return <UserContext.Provider value={auth}>Hiu</UserContext.Provider>;
};

export default App;
