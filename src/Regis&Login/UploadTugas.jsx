import React, { useState } from "react";

const UploadTugas = ({ onSend }) => {
    const [judul, setJudul] = useState("");
    const [deskripsi, setDeskripsi] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const tugasBaru = {
            id: Date.now(),
            judul,
            deskripsi,
            guru: "Pak Budi",
            tanggalKirim: new Date().toLocaleDateString(),
        };
        onSend(tugasBaru);
        setJudul("");
        setDeskripsi("");
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Kirim Tugas</h2>
            <input
                type="text"
                placeholder="Judul tugas"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                className="block w-full p-2 mb-2 border rounded"
                required
            />
            <textarea
                placeholder="Deskripsi tugas"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                className="block w-full p-2 mb-2 border rounded"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Kirim
            </button>
        </form>
    );
};

export default UploadTugas;
