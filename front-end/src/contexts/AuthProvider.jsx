import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

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
      const response = await axios.get(`/api/users/`);
      if (response.success) {
        setUser(response.data);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUserIfLoggedIn();
  }, []);

  async function login(data) {
    const response = await axios.post(`/api/users`, data);

    if (response.success) {
      loadUserIfLoggedIn();
    }

    return response;
  }

  async function logout() {
    const response = await axios.delete(`/api/users`);

    if (response.success) {
      setUser(null);
    }

    return response;
  }

  return <AuthContext.Provider value={{ loading, user, login, logout }}>{children}</AuthContext.Provider>;
}
