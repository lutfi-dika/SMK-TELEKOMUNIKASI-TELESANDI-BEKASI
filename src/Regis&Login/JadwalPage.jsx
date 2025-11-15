import React, { useState } from "react";
import "./Dashboard.css";

const JadwalPage = ({ jadwalList = [] }) => {
    const [kelas, setKelas] = useState(jadwalList.length > 0 ? jadwalList[0].kelas : "");

    const handleKelasChange = (e) => setKelas(e.target.value);
    const jadwalKelas = jadwalList.filter(j => j.kelas === kelas);

    return (
        <div className="jadwal-container">
            <h2 className="jadwal-title">📅 Jadwal Pelajaran</h2>

            <div className="kelas-select-wrapper">
                <label htmlFor="kelas">Pilih Kelas:</label>
                <select id="kelas" value={kelas} onChange={handleKelasChange}>
                    {[...new Set(jadwalList.map(j => j.kelas))].map(k => (
                        <option key={k} value={k}>{k}</option>
                    ))}
                </select>
            </div>

            <div className="jadwal-cards-wrapper">
                {jadwalKelas.length === 0 ? (
                    <p>Belum ada jadwal.</p>
                ) : (
                    jadwalKelas.map((j, idx) => (
                        <div key={idx} className="jadwal-card">
                            <h3>{j.mapel}</h3>
                            <p><strong>Kelas:</strong> {j.kelas}</p>
                            <p><strong>Guru:</strong> {j.guru}</p>
                            <p><strong>Hari & Jam:</strong> {j.waktu}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default JadwalPage;
