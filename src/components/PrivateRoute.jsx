import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const authentications = useContext(AuthContext);
    const { currentUser, loading } = authentications;

    if (loading) {
        return <p className="text-center text-2xl">Loading...</p>
    }

    if (currentUser) {
        return children;
    }

    return <Navigate to="/sign-in"></Navigate>
};

export default PrivateRoute;
