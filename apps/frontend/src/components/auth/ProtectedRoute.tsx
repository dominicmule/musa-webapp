import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiresAuth?: boolean;
  requiresVerification?: boolean;
}

export function ProtectedRoute({ 
  children, 
  requiresAuth = true,
  requiresVerification = true 
}: ProtectedRouteProps) {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (requiresAuth && !currentUser) {
    return <Navigate to="/join-us" />;
  }

  if (requiresVerification && currentUser && !currentUser.emailVerified) {
    return <Navigate to="/verify-email" />;
  }

  return <>{children}</>;
}