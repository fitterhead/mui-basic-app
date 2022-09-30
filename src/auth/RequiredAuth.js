import React from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function RequiredAuth({ children }) {
  const auth = useContext(AuthContext);
  console.log("auth", auth);
  const location = useLocation();
  console.log("auth state", location);

  if (!auth.isLogin) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location,
          backgroundLocation: location?.state?.backgroundLocation,
        }}
        replace
      />
    );
  }
  return children;
}

export default RequiredAuth;
