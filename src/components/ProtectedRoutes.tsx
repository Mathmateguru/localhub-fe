
import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";


interface ProtectedRoutesProps {
  children: React.ReactNode;
}
const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
const {isAuthenticated} = useUserContext();

console.log(isAuthenticated, 'isAuthenticated in ProtectedRoutes');

    if (!isAuthenticated) {
        return <Navigate to="/signin" replace />;
    }

    
  return <>{children}</>;
};

export default ProtectedRoutes;
