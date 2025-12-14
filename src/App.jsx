import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import Marquee from "./component/Marquee";
import AboutSection from "./component/AboutSection";
import VisiMisiSection from "./component/VisiMisiSection";
import GallerySection from "./component/Gallery";
import EskulSection from "./component/EskulSection";
import NewsSection from "./component/NewsSection";
import ContactSection from "./component/Contact";
import CTASection from "./component/CTASection";
import Footer from "./component/Footer";

import Login from "./Regis&Login/Login";
import Register from "./Regis&Login/Regis";
import DashboardMurid from "./Regis&Login/DashboardMurid";
import DashboardGuru from "./Regis&Login/DashboardGuru";
import TugasPage from "./Regis&Login/TugasPage";
import JadwalPage from "./Regis&Login/JadwalPage";

import PrivateRoute from "./content/PrivateRoute";
import { AuthProvider } from "./content/AuthContext";

import EskulDetail from "./detail/EskulDetail";

import "./App.css";

function App() {
  const BASE_URL = import.meta.env.BASE_URL;

  // ========== STATE TUGAS ==========
  const [tugasList, setTugasList] = useState(() => {
    const saved = localStorage.getItem("tugasList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tugasList", JSON.stringify(tugasList));
  }, [tugasList]);

  const handleTambahTugas = (tugasBaru) => {
    const newTugas = {
      id: Date.now(),
      title: tugasBaru.title,
      desc: tugasBaru.desc,
      tanggal: new Date().toLocaleString(),
      guru: tugasBaru.guru || "Guru",
      status: "Belum dikumpulkan",
      submissions: [],
    };
    setTugasList((prev) => [...prev, newTugas]);
  };

  const handleKumpulTugas = (idTugas, namaMurid, file) => {
    setTugasList((prev) =>
      prev.map((tugas) =>
        tugas.id === idTugas
          ? {
            ...tugas,
            submissions: [
              ...(tugas.submissions || []),
              { namaMurid, file, waktu: new Date().toLocaleString() },
            ],
            status: "Sudah dikumpulkan",
          }
          : tugas
      )
    );
  };

  // ========== STATE JADWAL ==========
  const [jadwalList, setJadwalList] = useState(() => {
    const saved = localStorage.getItem("jadwalList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("jadwalList", JSON.stringify(jadwalList));
  }, [jadwalList]);

  const handleTambahJadwal = (jadwalBaru) => {
    const newJadwal = { id: Date.now(), ...jadwalBaru };
    setJadwalList((prev) => [...prev, newJadwal]);
  };

  const handleEditJadwal = (id, dataBaru) => {
    setJadwalList((prev) =>
      prev.map((j) => (j.id === id ? { ...j, ...dataBaru } : j))
    );
  };

  const handleHapusJadwal = (id) => {
    setJadwalList((prev) => prev.filter((j) => j.id !== id));
  };

  // ========== LOADING ==========
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-logo"></div>
        <h1 className="loading-text">Sedang Memuat...</h1>
      </div>
    );
  }

  return (
    <Router basename={BASE_URL}>
      <AuthProvider>
        <Navbar />

        <Routes>
          {/* ================== HOME ================== */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Marquee />
                <AboutSection />
                <VisiMisiSection />
                <GallerySection />
                <EskulSection />
                <NewsSection />
                <ContactSection />
                <CTASection />
                <Footer />
              </>
            }
          />

          {/* ========== DETAIL ESKUL BARU ========== */}
          <Route path="/eskul/:id" element={<EskulDetail />} />

          {/* ================== AUTH ================== */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ================== DASHBOARD GURU ================== */}
          <Route
            path="/dashboard-guru"
            element={
              <PrivateRoute role="guru">
                <DashboardGuru
                  tugasList={tugasList}
                  onTambahTugas={handleTambahTugas}
                  jadwalList={jadwalList}
                  onTambahJadwal={handleTambahJadwal}
                  onEditJadwal={handleEditJadwal}
                  onHapusJadwal={handleHapusJadwal}
                />
              </PrivateRoute>
            }
          />

          {/* ================== DASHBOARD MURID ================== */}
          <Route
            path="/dashboard-murid"
            element={
              <PrivateRoute role="murid">
                <DashboardMurid
                  tugasList={tugasList}
                  jadwalList={jadwalList}
                  onKumpulTugas={handleKumpulTugas}
                />
              </PrivateRoute>
            }
          />

          {/* ================== TUGAS ================== */}
          <Route
            path="/tugas"
            element={
              <PrivateRoute role="murid">
                <TugasPage
                  tugasList={tugasList}
                  onKumpulTugas={handleKumpulTugas}
                />
              </PrivateRoute>
            }
          />

          {/* ================== JADWAL ================== */}
          <Route
            path="/jadwal"
            element={
              <PrivateRoute role="murid">
                <JadwalPage jadwalList={jadwalList} />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
