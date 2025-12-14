import React from "react";
import { useParams, Link } from "react-router-dom";
import "./EskulDetail.css";

const eskulDetailData = [
  {
    id: 1,
    title: "Syntax Creative",
    desc: "Ekstrakurikuler pemrograman yang melatih siswa untuk memahami coding, membuat aplikasi, hingga memahami teknologi modern.",
    coach: "Bu Warda Azzahra s.pd",
    schedule: "Selasa& Kamis",
    image: "https://smktelekomunikasitelesandi.sch.id/public/storage/galeri-eskul/L2RbDgxtFaGLXFQwwVbEDKpwBMBCHgAyriwNGEsO.jpg"
  },
  {
    id: 2,
    title: "English Club",
    desc: "Ekstrakurikuler yang melatih kemampuan speaking, grammar, dan komunikasi bahasa Inggris.",
    coach: "Miss Rina",
    schedule: "Rabu",
    image: "https://smktelekomunikasitelesandi.sch.id/public/storage/galeri-eskul/rnl441B6AfBvRJE6QXu23sbtgZFBJ8KoKBHA7qZR.jpg"
  }
];

export default function EskulDetail() {
  const { id } = useParams();
  const detail = eskulDetailData.find((d) => d.id === Number(id));

  if (!detail) {
    return <h2 style={{ textAlign: "center" }}>Data Eskul Tidak Ditemukan</h2>;
  }

  return (
    <div className="eskul-detail-container">
      <Link to="/" className="back-btn">← Kembali</Link>


      <div className="detail-card">
        <img src={detail.image} alt={detail.title} className="detail-img" />

        <div className="detail-info">
          <h1>{detail.title}</h1>
          <p className="desc">{detail.desc}</p>

          <p><b>Pelatih:</b> {detail.coach}</p>
          <p><b>Jadwal:</b> {detail.schedule}</p>
        </div>
      </div>
    </div>
  );
}
