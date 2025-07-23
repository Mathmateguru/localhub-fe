import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useUserContext();

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoutes;
