import { createContext, ReactNode, useContext, useState } from "react";
import { TSupabaseAuthResposnse } from "@/types/User.types.ts";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (result: TSupabaseAuthResposnse) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] =
    useState<boolean>(checkAuthState);

  function login(result: TSupabaseAuthResposnse) {
    setIsAuthenticated(true);
    sessionStorage.setItem("user_token", result.session?.access_token);
    sessionStorage.setItem(
      "user_token_expire",
      String(result.session?.expires_at),
    );
  }

  function logout() {
    sessionStorage.removeItem("user_token");
    sessionStorage.removeItem("user_token_expire");
  }

  function checkAuthState() {
    // const token = sessionStorage.getItem("user_token");
    const time = sessionStorage.getItem("user_token_expire");
    return time !== null && Number(time) < Date.now();
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext is used outside of auth-Provider ");
  //to avoid using teh context outside of where it should be used
  return context;
}

export { AuthProvider, useAuth };
