import React, { useState } from "react";
import { useAuth } from "../content/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!register(name, email, password))
      return alert("Email sudah dipakai / milik guru");
    navigate("/login");
  };

  return (
    <div className="form-container">
      <form onSubmit={submit}>
        <h2>Register Murid</h2>
        <input placeholder="Nama" onChange={(e)=>setName(e.target.value)} />
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        <button>Daftar</button>
        <p>Sudah punya akun? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
