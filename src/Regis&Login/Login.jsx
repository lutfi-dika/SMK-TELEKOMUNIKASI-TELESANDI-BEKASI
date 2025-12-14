import React, { useState } from "react";
import { useAuth } from "../content/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const user = login(email, password);
    if (!user) return setError("Email / password salah");
    user.role === "guru"
      ? navigate("/dashboard-guru")
      : navigate("/dashboard-murid");
  };

  return (
    <div className="form-container">
      <form onSubmit={submit}>
        <h2>Login</h2>
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        {error && <p className="error">{error}</p>}
        <button>Masuk</button>
        <p>Belum punya akun? <Link to="/register">Daftar</Link></p>
      </form>
    </div>
  );
};

export default Login;
