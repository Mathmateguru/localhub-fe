import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";
import SideBar from "./Sidebar/Sidebar";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useUserContext();

  return isAuthenticated ? (
    <div  className='flex space-x-4'>
      <SideBar/>
      <Outlet />
    </div>
  ) : <Navigate to="/signin" replace />;
};

export default ProtectedRoutes;
