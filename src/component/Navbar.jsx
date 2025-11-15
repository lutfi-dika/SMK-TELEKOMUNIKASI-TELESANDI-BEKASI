import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../content/AuthContext";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // 🔹 Scroll ke bagian tertentu
    const handleScroll = (id) => {
        // Jika di halaman lain, pindah ke home dulu baru scroll
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const section = document.getElementById(id);
                if (section) section.scrollIntoView({ behavior: "smooth" });
            }, 300);
        } else {
            const section = document.getElementById(id);
            if (section) section.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    };

    // 🔹 Logout + redirect ke home
    const handleLogout = () => {
        logout();
        navigate("/"); // langsung ke home
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo */}
                <div className="logo" onClick={() => navigate("/")}>
                    SMK TELESANDI
                </div>

                {/* Navigation Links */}
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><a onClick={() => handleScroll("home")}>Home</a></li>
                    <li><a onClick={() => handleScroll("about")}>About</a></li>
                    <li><a onClick={() => handleScroll("visi")}>Visi Misi</a></li>
                    <li><a onClick={() => handleScroll("gallery")}>Gallery</a></li>
                    <li><a onClick={() => handleScroll("news")}>Berita</a></li>
                    <li><a onClick={() => handleScroll("Contact")}>Contact</a></li>

                    {/* 🔐 Kondisi login */}
                    {!user ? (
                        <>
                            <li>
                                <button
                                    className="login-btn"
                                    onClick={() => {
                                        navigate("/login");
                                        setMenuOpen(false);
                                    }}
                                >
                                    Login
                                </button>
                            </li>
                            <li>
                                <button
                                    className="regis-btn"
                                    onClick={() => {
                                        navigate("/register");
                                        setMenuOpen(false);
                                    }}
                                >
                                    Register
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link
                                    to={user.role === "guru" ? "/dashboard-guru" : "/dashboard-murid"}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <button className="logout-btn" onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>
                        </>
                    )}
                </ul>

                {/* 🔹 Hamburger menu (mobile only) */}
                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "✖" : "☰"}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
