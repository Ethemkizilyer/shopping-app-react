import React, { useContext} from "react";
import { Navigate, Outlet } from "react-router-dom";

import { ThemeContext } from "../Context/ThemeProvider";

const PrivateRouter = () => {
  const { currentUser } = useContext(ThemeContext);
  //  console.log(user)
  return currentUser != "" ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
