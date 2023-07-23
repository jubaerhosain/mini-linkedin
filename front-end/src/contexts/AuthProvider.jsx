import { createContext, useState, useContext, useEffect } from "react";
import axiosInstance from "../config/axiosInstance";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthProvider() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const loadUserIfLoggedIn = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/auth`);
      console.log(response.data.data);

      if (response.data?.success) {
        setUser(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUserIfLoggedIn();
  }, []);

  async function register(data) {
    const response = await axiosInstance.post(`/auth/register`, data);

    if (response.data?.success) {
      loadUserIfLoggedIn();
    }

    return response;
  }

  async function login(data) {
    const response = await axiosInstance.post(`/auth/login`, data);

    if (response.data?.success) {
      loadUserIfLoggedIn();
    }

    return response;
  }

  async function logout() {
    const response = await axiosInstance.delete(`/auth/logout`);

    if (response.data?.success) {
      setUser(null);
    }

    return response;
  }

  return (
    <AuthContext.Provider value={{ loading, user, register, login, logout }}>{children}</AuthContext.Provider>
  );
}
