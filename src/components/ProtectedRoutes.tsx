
import React from "react";
import { Navigate } from "react-router";
import { useUserContext } from "../contexts/userContext";


interface ProtectedRoutesProps {
  children: React.ReactNode;
}
const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
const {isAuthenticated} = useUserContext();
    
  return  isAuthenticated ? children : <Navigate to="/signin" replace />;
};

export default ProtectedRoutes;
