import React, { useState } from "react";
import { useAuth } from "../content/AuthContext";
import "./Dashboard.css";

const TugasPage = ({ tugasList = [], onKumpulTugas }) => {
    const { user } = useAuth();
    const [selectedTugas, setSelectedTugas] = useState(null);
    const [jawaban, setJawaban] = useState("");
    const [file, setFile] = useState(null);

    const handleOpenForm = (tugas) => {
        setSelectedTugas(tugas);
    };

    const handleCloseForm = () => {
        setSelectedTugas(null);
        setJawaban("");
        setFile(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!jawaban.trim()) {
            alert("❌ Harap isi jawaban terlebih dahulu!");
            return;
        }
        if (onKumpulTugas && selectedTugas) {
            onKumpulTugas(
                selectedTugas.id,
                user?.name || "Murid Tidak Dikenal",
                {
                    jawaban,
                    fileName: file ? file.name : "Tidak ada file",
                }
            );
            alert("✅ Tugas berhasil dikirim!");
        }
        handleCloseForm();
    };

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">📘 Daftar Tugas <span> {user?.name || "Murid"} 👋 </span></h2>

            {tugasList.length === 0 ? (
                <p>Tidak ada tugas saat ini.</p>
            ) : (
                <div className="dashboard-cards-wrapper-tugas">
                    {tugasList.map((tugas) => (
                        <div key={tugas.id} className="tugas-card">
                            <h3>{tugas.title}</h3>
                            <p>{tugas.desc}</p>
                            <p><strong>Guru:</strong> {tugas.guru}</p>
                            <p><strong>Status:</strong> {tugas.status || "Belum dikumpulkan"}</p>

                            {/* Tombol Kirim Jawaban */}
                            {!(tugas.submissions || []).some(
                                (s) => s.namaMurid === user?.name
                            ) && (
                                    <button
                                        className="kirim-btn"
                                        onClick={() => handleOpenForm(tugas)}
                                    >
                                        Kirim Jawaban
                                    </button>
                                )}

                            {/* Tampilkan jawaban jika sudah dikumpulkan */}
                            {(tugas.submissions || [])
                                .filter((s) => s.namaMurid === user?.name)
                                .map((sub, idx) => (
                                    <div key={idx} className="mt-2">
                                        <p><strong>Jawaban:</strong> {sub.jawaban}</p>
                                        <p><strong>File:</strong> {sub.fileName}</p>
                                        <p><small>Dikirim pada: {sub.waktu}</small></p>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
            )}

            {/* Modal Kirim Jawaban */}
            {selectedTugas && (
                <div className="dashboard-modal">
                    <div className="dashboard-modal-content">
                        <h2>Kirim Jawaban: {selectedTugas.title}</h2>
                        <form onSubmit={handleSubmit}>
                            <textarea
                                value={jawaban}
                                onChange={(e) => setJawaban(e.target.value)}
                                placeholder="Tulis jawabanmu di sini..."
                                required
                            />
                            <input
                                type="file"
                                accept=".pdf,.jpg,.png,.docx"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            <div className="modal-buttons">
                                <button type="submit">Kirim</button>
                                <button type="button" className="close-btn" onClick={handleCloseForm}>Batal</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TugasPage;
