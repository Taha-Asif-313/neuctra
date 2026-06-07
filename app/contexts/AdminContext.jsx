import React, { createContext, useContext, useState, useEffect } from "react";
import { authix } from "../utils/neuctraAuthix";

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


useEffect(() => {
  const initUser = async () => {
    try {
      setLoading(true);
      // 1️⃣ Check session
      const sessionRes = await authix.checkUserSession();

      if (!sessionRes?.user?.id) {
        // No active session - cleanup client state
        await authix.logout();
        throw new Error("No active session");
      }

      const userId = sessionRes.user.id;

      // 2️⃣ Fetch full profile
      const profileRes = await authix.getUserProfile({ userId });

      if (!profileRes?.user) {
        // Profile not found despite having session - cleanup
        await authix.logoutUser();
        throw new Error("User profile not found");
      }

      // 3️⃣ Save user
      setUser(profileRes.user);
    } catch (err) {
      console.warn("Auth init failed:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  initUser();
}, []);

  const handleLogin = (username, password) => {
    // Simple authentication (in production, use proper auth)
    if (username === "admin" && password === "admin123") {
      setIsAdmin(true);
      localStorage.setItem("blogAdminSession", "true");
      return true;
    }
    return false;
  };

  const handleLogout = async () => {
    setIsAdmin(false);
    await authix.logoutUser();
  };


  const value = {
    isAdmin,
    user,
    setUser,
    loading,
    blogs,
    handleLogin,
    handleLogout,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export default AdminContext;
