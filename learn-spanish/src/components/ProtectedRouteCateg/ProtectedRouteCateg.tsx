import { Navigate } from 'react-router-dom';
import { User } from "../../models/user";

interface ProtectedRouteCategProps {
    user: User;
    children: JSX.Element;
}

export const ProtectedRouteCateg = ({ user, children }: ProtectedRouteCategProps) => {

    if (!user.isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};