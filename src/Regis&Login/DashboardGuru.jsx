import React, { useState } from "react";
import { useAuth } from "../content/AuthContext";
import "./Dashboard.css";

const DashboardGuru = ({ tugasList = [], onTambahTugas, jadwalList = [], onTambahJadwal, onEditJadwal, onHapusJadwal }) => {
    const { user } = useAuth();
    const [showFormTugas, setShowFormTugas] = useState(false);
    const [judul, setJudul] = useState("");
    const [desc, setDesc] = useState("");

    const [showFormJadwal, setShowFormJadwal] = useState(false);
    const [kelas, setKelas] = useState("");
    const [mapel, setMapel] = useState("");
    const [waktu, setWaktu] = useState("");
    const [editId, setEditId] = useState(null);

    // ===== Tugas =====
    const handleSubmitTugas = (e) => {
        e.preventDefault();
        if (!judul.trim() || !desc.trim()) return alert("Isi semua kolom!");
        onTambahTugas({ title: judul, desc, guru: user?.name });
        setJudul(""); setDesc(""); setShowFormTugas(false);
    }

    // ===== Jadwal =====
    const handleSubmitJadwal = (e) => {
        e.preventDefault();
        if (!kelas.trim() || !mapel.trim() || !waktu.trim()) return alert("Isi semua kolom!");
        if (editId) {
            onEditJadwal(editId, { kelas, mapel, waktu });
        } else {
            onTambahJadwal({ kelas, mapel, guru: user?.name, waktu });
        }
        setKelas(""); setMapel(""); setWaktu(""); setEditId(null); setShowFormJadwal(false);
    }

    const handleEditClick = (jadwal) => {
        setKelas(jadwal.kelas); setMapel(jadwal.mapel); setWaktu(jadwal.waktu);
        setEditId(jadwal.id); setShowFormJadwal(true);
    }

    const handleHapusClick = (id) => {
        if (window.confirm("Yakin ingin menghapus jadwal ini?")) onHapusJadwal(id);
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1 className="dashboard-title">Halo, {user?.name || "Guru"} 👋</h1>
                <p className="dashboard-subtitle">Dashboard Guru</p>
            </div>

            <div className="dashboard-cards-row">
                <div className="dashboard-card card-white clickable" onClick={() => setShowFormTugas(true)}>
                    <div className="dashboard-card-icon">➕</div>
                    <h3 className="dashboard-card-title">Tambah Tugas</h3>
                    <p className="dashboard-card-value">Klik untuk menambah tugas baru</p>
                </div>

                <div className="dashboard-card card-white clickable" onClick={() => setShowFormJadwal(true)}>
                    <div className="dashboard-card-icon">📅</div>
                    <h3 className="dashboard-card-title">Kelola Jadwal</h3>
                    <p className="dashboard-card-value">Tambah/Edit Jadwal</p>
                </div>
            </div>

            {/* Modal Tugas */}
            {showFormTugas && (
                <div className="dashboard-modal">
                    <div className="dashboard-modal-content">
                        <h2>Tambah Tugas Baru</h2>
                        <form onSubmit={handleSubmitTugas}>
                            <input type="text" placeholder="Judul Tugas" value={judul} onChange={e => setJudul(e.target.value)} required />
                            <textarea placeholder="Deskripsi Tugas" value={desc} onChange={e => setDesc(e.target.value)} required />
                            <div className="modal-buttons">
                                <button type="submit">Kirim</button>
                                <button type="button" className="close-btn" onClick={() => setShowFormTugas(false)}>Batal</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal Jadwal */}
            {showFormJadwal && (
                <div className="dashboard-modal">
                    <div className="dashboard-modal-content">
                        <h2>{editId ? "Edit Jadwal" : "Tambah Jadwal"}</h2>
                        <form onSubmit={handleSubmitJadwal}>
                            <input type="text" placeholder="Kelas" value={kelas} onChange={e => setKelas(e.target.value)} required />
                            <input type="text" placeholder="Mata Pelajaran" value={mapel} onChange={e => setMapel(e.target.value)} required />
                            <input type="text" placeholder="Hari & Jam" value={waktu} onChange={e => setWaktu(e.target.value)} required />
                            <div className="modal-buttons">
                                <button type="submit">Simpan</button>
                                <button type="button" className="close-btn" onClick={() => setShowFormJadwal(false)}>Batal</button>
                            </div>
                        </form>

                        {/* List Jadwal */}
                        <ul>
                            {jadwalList.map(j => (
                                <li key={j.id}>
                                    {j.kelas} - {j.mapel} ({j.waktu})
                                    <button onClick={() => handleEditClick(j)}>Edit</button>
                                    <button onClick={() => handleHapusClick(j.id)}>Hapus</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DashboardGuru;
