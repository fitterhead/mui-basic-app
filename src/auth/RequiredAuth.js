import React from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function RequiredAuth({ children }) {
  const auth = useContext(AuthContext);
  console.log("auth", auth);
  const location = useLocation();

  if (!auth.isLogin) {
    return <Navigate to="/login" state={{ from: { location } }} replace />;
  }
  return children;
}

export default RequiredAuth;
