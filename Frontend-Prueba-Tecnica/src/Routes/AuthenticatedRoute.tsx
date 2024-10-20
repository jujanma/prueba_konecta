import React from "react";
import { useAuth } from "../Context/Auth/AuthContext";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";

interface AuthenticatedRouteProps {
  element: React.ReactNode;
  allowedRoles?: string[];
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({ element, allowedRoles }) => {
  const { isAuthenticated } = useAuth();
  const userRole = localStorage.getItem("userRole");

  if (!isAuthenticated) {
    return <Login />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole!)) {
    return <Error />;
  }

  return <>{element}</>;
};

export default AuthenticatedRoute;