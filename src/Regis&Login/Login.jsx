import React, { useState, useEffect } from "react";
import { useAuth } from "../content/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔄 kalau user sudah login, otomatis pindah ke dashboard
  useEffect(() => {
    if (user) {
      if (user.role === "murid") {
        navigate("/dashboard-murid", { replace: true });
      } else if (user.role === "guru") {
        navigate("/dashboard-guru", { replace: true });
      }
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const success = await login(email, password);

    if (success) {
      if (user?.role === "murid") {
        navigate("/dashboard-murid");
      } else if (user?.role === "guru") {
        navigate("/dashboard-guru");
      } else {
        navigate("/"); // fallback aman
      }
    } else {
      setError("Email atau kata sandi salah!");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        {error && <p className="error">{error}</p>}
        <button type="submit">Masuk</button>
      </form>
      <p>
        Belum punya akun? <Link to="/register">Daftar</Link>
      </p>
    </div>
  );
};

export default Login;
