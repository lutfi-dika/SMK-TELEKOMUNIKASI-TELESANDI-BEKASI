import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);
    const closeMenu = () => setOpen(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">SMK TELESANDI</div>

                {/* Menu Links */}
                <ul className={`nav-links ${open ? "open" : ""}`}>
                    {/* Close button untuk mobile */}
                    <li className="close-btn" onClick={closeMenu}>×</li>

                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#visi" onClick={closeMenu}>Visi & Misi</a></li>
                    <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
                    <li><a href="#news" onClick={closeMenu}>Berita</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>

                {/* Hamburger menu */}
                <div className={`hamburger ${open ? "active" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
