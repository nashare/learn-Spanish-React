import { Navigate } from 'react-router-dom';

interface ProtectedRouteCategProps {
    isAuthenticated: boolean;
    children: JSX.Element;
}

export const ProtectedRouteCateg = ({ isAuthenticated, children }: ProtectedRouteCategProps) => {

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};