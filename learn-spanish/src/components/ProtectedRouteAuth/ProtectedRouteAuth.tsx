import { Navigate } from 'react-router-dom';

interface ProtectedRouteAuthProps {
    isAuthenticated: boolean;
    children: JSX.Element;
}

export const ProtectedRouteAuth = ({ isAuthenticated, children }: ProtectedRouteAuthProps): JSX.Element => {

    if (isAuthenticated) {
        return <Navigate to="/categories" replace />;
    }

    return children;
};