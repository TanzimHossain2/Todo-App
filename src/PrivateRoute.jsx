import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "./firebase";

const PrivateRoute = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-pulse flex space-x-4">
          <div className="bg-gray-300 h-8 w-48 rounded"></div>
          <div className="bg-gray-300 h-8 w-48 rounded"></div>
          <div className="bg-gray-300 h-8 w-48 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
