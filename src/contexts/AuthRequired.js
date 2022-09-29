import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function AuthRequired({ children }) {
  const { isLogin } = useContext(AuthContext);
  const location = useLocation();

  if (!isLogin) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default AuthRequired;
