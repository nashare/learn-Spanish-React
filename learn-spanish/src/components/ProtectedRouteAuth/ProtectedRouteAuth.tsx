import { Navigate } from 'react-router-dom';
import { User } from "../../models/user";

interface ProtectedRouteAuthProps {
    user: User;
    children: JSX.Element;
}

export const ProtectedRouteAuth = ({ user, children }: ProtectedRouteAuthProps) => {

    if (user.isAuthenticated) {
        return <Navigate to="/categories" replace />;
    }

    return children;
};