import { useAuth } from "@/context/AuthContext.tsx";
import { Navigate } from "react-router";
import { ReactNode } from "react";

interface ProtectedRouteProp {
  children: ReactNode;
  requiredRoles: string[];
}

export function ProtectedRoute({
  children,
  requiredRoles,
}: ProtectedRouteProp) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    console.log(children);
    console.log(requiredRoles);
    return <Navigate to="/login" replace />;
  }

  return children;
}
