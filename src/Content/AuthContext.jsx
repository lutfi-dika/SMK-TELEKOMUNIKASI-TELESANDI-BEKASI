import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

// ✅ AKUN GURU BAWAAN
const GURU_DEFAULT = [
  {
    name: "Pak Guru",
    email: "guru@sekolah.id",
    password: "123456",
    role: "guru",
  },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // auto login
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // ❌ tidak boleh pakai email guru
    if (
      GURU_DEFAULT.some((g) => g.email === email) ||
      users.some((u) => u.email === email)
    ) {
      return false;
    }

    const newUser = {
      name,
      email,
      password,
      role: "murid", // ✅ otomatis murid
    };

    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    return true;
  };

  const login = (email, password) => {
    // 1️⃣ cek guru dulu
    const guru = GURU_DEFAULT.find(
      (g) => g.email === email && g.password === password
    );
    if (guru) {
      setUser(guru);
      localStorage.setItem("user", JSON.stringify(guru));
      return guru;
    }

    // 2️⃣ cek murid
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const murid = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!murid) return null;

    setUser(murid);
    localStorage.setItem("user", JSON.stringify(murid));
    return murid;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
