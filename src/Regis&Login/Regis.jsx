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
  const [role, setRole] = useState("murid");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const success = await register(name, email, password, role);
    if (success) {
      alert("Registrasi berhasil! Silakan login.");
      navigate("/login"); // ✅ otomatis ikut base URL
    } else {
      setError("Email sudah digunakan!");
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email Sekolah"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Kata Sandi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="murid">Murid</option>
          <option value="guru">Guru</option>
        </select>

        {error && <p className="error">{error}</p>}
        <button type="submit">Daftar</button>
      </form>
      <p>
        Sudah punya akun? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
