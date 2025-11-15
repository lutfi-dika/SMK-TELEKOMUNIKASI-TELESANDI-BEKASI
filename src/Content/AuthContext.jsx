import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const register = async (name, email, password, role) => {
        const existingUser = JSON.parse(localStorage.getItem("user_" + email));

        if (existingUser) {
            return false; // email sudah terdaftar
        }

        const newUser = { name, email, password, role };
        localStorage.setItem("user_" + email, JSON.stringify(newUser));
        setUser(newUser);
        return true;
    };

    const login = async (email, password) => {
        const storedUser = JSON.parse(localStorage.getItem("user_" + email));
        if (storedUser && storedUser.password === password) {
            setUser(storedUser);
            localStorage.setItem("user", JSON.stringify(storedUser));
            return true;
        }
        return false;
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
