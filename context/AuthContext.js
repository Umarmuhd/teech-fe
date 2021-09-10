import { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import { NEXT_URL } from "@/config/index";
import axios from "axios";

import { toast } from "react-toastify";

// initial state
const intialState = {
  user: null,
  error: null,
  login: () => {},
  signup: () => {},
  logout: () => {},
};

// create context
const AuthContext = createContext(intialState);

// context provider
const Provider = ({ children }) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  // router
  const router = useRouter();

  useEffect(() => checkIfUserLoggedIn(), []);

  //Signup
  const signup = async (credentials) => {
    const { name, email, password } = credentials;

    try {
      const res = await fetch(`${NEXT_URL}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
        toast.success("Success");
        router.push("/");
      } else {
        toast.error(data.error);
        return null;
      }
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  //Login
  const login = async (credentials) => {
    const { email, password } = credentials;

    try {
      const res = await fetch(`${NEXT_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
        toast.success(data.message);
        router.push("/");
      } else {
        toast.error(data.error);
        return null;
      }
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  // Logout
  const logout = async () => {
    try {
      await axios.post(`${NEXT_URL}/api/logout`);
      setUser(null);
      // router.push("/");
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const checkIfUserLoggedIn = async () => {
    try {
      const res = await axios.post(`${NEXT_URL}/api/user`);
      setUser(res.data.user);
    } catch (error) {
      setUser(null);
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, Provider };
