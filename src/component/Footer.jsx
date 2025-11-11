import React from 'react';
import './Footer.css'; // Import file CSS untuk styling

const Footer = () => {
    // Data link media sosial dan navigasi bisa diatur di sini
    const socialLinks = [
        { name: "Instagram", url: "https://www.instagram.com/303.andika" },
        { name: "GitHub", url: "https://github.com/lutfi-dika" },
    ];

    const quickLinks = [
        { name: "Home", url: "#home" },
        { name: "About", url: "#about" },
        { name: "Visi & Misi", url: "#visi" },
        { name: "GAllery", url: "#gallery" },
        { name: "Berita", url: "#news" },
        { name: "Contact", url: "#Contact" },
    ];

    return (
        <footer className="main-footer">
            <div className="footer-container">
                
                {/* Kolom 1: Informasi Singkat & Branding */}
                <div className="footer-col footer-branding">
                    <h3 className="footer-logo">SMK TELESANDI</h3>
                    <p className="footer-tagline">
                       Menyediakan pengalaman belajar modern di SMK Telekomunikasi Telesandi Bekasi.
                    </p>
                </div>

                {/* Kolom 2: Navigasi Cepat */}
                <div className="footer-col footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.url}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Kolom 3: Media Sosial */}
                <div className="footer-col footer-social">
                    <h4>Follow Me</h4>
                    <ul>
                        {socialLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Baris Hak Cipta */}
            <div className="footer-bottom">
                <p>
                    &copy; {new Date().getFullYear()} Lutfi Dika. All rights reserved. 
                    Dibuat dengan ❤️
                </p>
            </div>
        </footer>
    );
};

export default Footer;