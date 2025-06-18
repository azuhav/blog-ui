import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get("/api/auth-status", {
        withCredentials: true,
      });
      setIsAuthenticated(response.data.isAuthenticated);
    } catch (error) {
      setIsAuthenticated(false);
      throw new Error(error.response?.data?.error || "Status check failed.");
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "/api/login",
        { email, password },
        { withCredentials: true }
      );
      if (response.data.isAuthenticated) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      setIsAuthenticated(false);
      throw new Error(error.response?.data?.error || "Login failed.");
    }
  };

  const logout = async () => {
    try {
      await axios.post("/api/logout", {}, { withCredentials: true });
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const value = {
    isAuthenticated,
    login,
    logout,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
