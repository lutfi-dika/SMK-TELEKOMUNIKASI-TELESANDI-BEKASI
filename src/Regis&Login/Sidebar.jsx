import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { useAuth } from "../content/AuthContext";

const Sidebar = ({ role }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    return (
        <aside className="sidebar">
            <h3>{role === "guru" ? "Guru Panel" : "Murid Panel"}</h3>
            <ul>
                {role === "guru" ? (
                    <>
                        <li><Link to="/dashboard-guru">Tambah Tugas</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/dashboard-murid">Tugas</Link></li>
                    </>
                )}
                {/* <li><Link to="/">Home</Link></li>
                <li><button onClick={logout}>Logout</button></li> */}
            </ul>
        </aside>
    );
};

export default Sidebar;
