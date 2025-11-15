import React from "react";
import { useAuth } from "../content/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const DashboardMurid = ({ tugasList = [], jadwalList = [] }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Halo, {user?.name || "Murid"} 👋</h1>
        <p className="dashboard-subtitle">Dashboard Murid</p>
      </div>

      <div className="dashboard-cards-wrapper">
        <div className="dashboard-cards-row">
          <div className="dashboard-card murid card-white clickable" onClick={() => navigate("/tugas")}>
            <div className="dashboard-card-icon">📝</div>
            <h3 className="dashboard-card-title">Tugas Terbaru</h3>
            <p className="dashboard-card-value">{tugasList.length}</p>
            <small className="text-sm">Jumlah tugas baru</small>
          </div>

          <div className="dashboard-card murid card-white clickable" onClick={() => navigate("/jadwal")}>
            <div className="dashboard-card-icon">📅</div>
            <h3 className="dashboard-card-title">Jadwal Pelajaran</h3>
            <p className="dashboard-card-value">{jadwalList.length}</p>
            <small className="text-sm">Jumlah mata pelajaran hari ini</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMurid;
