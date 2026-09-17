import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

const demoUsers = [
  { email: "student@workbridge.com", password: "123456", role: "STUDENT", name: "Rahul Kumar" },
  { email: "employer@workbridge.com", password: "123456", role: "EMPLOYER", name: "Ananya Enterprises" },
  { email: "admin@workbridge.com", password: "123456", role: "ADMIN", name: "WorkBridge Admin" }
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("wb_user")) || null; } catch { return null; }
  });

  useEffect(() => {
    if (user) localStorage.setItem("wb_user", JSON.stringify(user));
    else localStorage.removeItem("wb_user");
  }, [user]);

  const login = async (email, password) => {
    const demo = demoUsers.find(u => u.email === email && u.password === password);
    if (!demo) throw new Error("Invalid email or password. Use a demo account shown below.");
    const session = { id: Date.now(), email: demo.email, role: demo.role, name: demo.name, token: "demo-jwt-token" };
    setUser(session);
    return session;
  };

  const register = async ({ name, email, password, role }) => {
    const session = { id: Date.now(), email, role, name, token: "demo-jwt-token" };
    setUser(session);
    return session;
  };

  const logout = () => setUser(null);

  const value = useMemo(() => ({ user, login, register, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
