import React from "react";
import { useNavigate } from "react-router-dom";
import "./EskulSection.css";

const baseProducts = [
  {
    id: 1,
    name: "Syntax Creative",
    description: "Ekstrakurikuler Pemrograman",
    level: "Populer",
    image: "https://smktelekomunikasitelesandi.sch.id/public/storage/galeri-eskul/L2RbDgxtFaGLXFQwwVbEDKpwBMBCHgAyriwNGEsO.jpg"
  },
  {
    id: 2,
    name: "English Club",
    description: "Ekstrakurikuler Bahasa Inggris",
    level: "Favorit",
    image: "https://smktelekomunikasitelesandi.sch.id/public/storage/galeri-eskul/rnl441B6AfBvRJE6QXu23sbtgZFBJ8KoKBHA7qZR.jpg"
  },
  {
    id: 3,
    name: "Bengkel Matematika",
    description: "Ekstrakurikuler Matematika",
    level: "Prestasi",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6a"
  },
  {
    id: 4,
    name: "Brigas Tels",
    description: "Ekstrakurikuler Paskibra",
    level: "Wajib",
    image: "https://smktelekomunikasitelesandi.sch.id/public/storage/galeri-eskul/i4JysOUgYACr0PjVfAsvMPytrH76o7nyPh7sqJuy.jpg"
  },
  {
    id: 5,
    name: "Tels Futsal",
    description: "Ekstrakurikuler Futsal",
    level: "Favorit",
    image: "https://images.unsplash.com/photo-1601925260485-8c187e6e81fa"
  },
  {
    id: 6,
    name: "Hadroh Al-Latif",
    description: "Ekstrakurikuler Hadroh",
    level: "Aktif",
    image: "https://smktelekomunikasitelesandi.sch.id/public/storage/galeri-eskul/yQHOLKd6Em4lJEABJ6TNEwqoWACqOTsu0aljh2dv.jpg"
  },
  {
    id: 7,
    name: "Kesenian Tels",
    description: "Ekstrakurikuler Seni",
    level: "Populer",
    image: "https://smktelekomunikasitelesandi.sch.id/public/storage/galeri-eskul/EVTFOQAaT43xGDuZMgF3kX0Pc5NBrYNMVOFeUrqW.jpg"
  },
  {
    id: 8,
    name: "PMR Tels",
    description: "Palang Merah Remaja",
    level: "Kreatif",
    image: "https://smktelekomunikasitelesandi.sch.id/public/storage/galeri-eskul/jI9nOZts0Zlctrjxu76pzmBEzXaarh1P5635Zgl4.jpg"
  },
  {
    id: 9,
    name: "Mandarin Tels",
    description: "Ekstrakurikuler Bahasa Mandarin",
    level: "Budaya",
    image: "https://smktelekomunikasitelesandi.sch.id/public/storage/galeri-eskul/7E8ok4DnHZg2cf6pyv2pVinK5HYYQyO49OYbErga.jpg"
  },
  {
    id: 10,
    name: "Setara Tels",
    description: "Ekstrakurikuler Seni Tradisonal",
    level: "Aktif",
    image: "https://smktelekomunikasitelesandi.sch.id/public/storage/galeri-eskul/LUOkJkjhmjY0svFKrEcaVO1fhaFLK8fsRZnHNOvC.jpg"
  },
  {
    id: 11,
    name: "Tomcat Squad",
    description: "Ekstrakurikuler Komputer Jaringan",
    level: "Aktif",
    image: ""
  },
  {
    id: 12,
    name: "Tarung Drajat",
    description: "Ekstrakurikuler Seni Bela Diri",
    level: "Aktif",
    image: "https://smktelekomunikasitelesandi.sch.id/public/storage/galeri-eskul/XWCks8f7ISdHcaRUCmqXULAkjwqgc8Zb2w8NaBQU.jpg"
  },
  {
    id: 13,
    name: "VoltTels",
    description: "Ekstrakurikuler Voli",
    level: "Aktif",
    image: ""
  },
  {
    id: 14,
    name: "Pramuka",
    description: "Ekstrakurikuler Pramuka",
    level: "Wajib",
    image: ""
  },
  {
    id: 15,
    name: "PIK-R",
    description: "Ekstrakurikuler PIK-R",
    level: "Favorit",
    image: "https://smktelekomunikasitelesandi.sch.id/public/storage/galeri-eskul/rJ8cFBvk4mYTQPxACCASVDnvu5Bp9youfk5aYx17.jpg"
  },
  {
    id: 16,
    name: "Seni Media",
    description: "Ekstrakurikuler Seni Media",
    level: "Wajib",
    image: "https://smktelekomunikasitelesandi.sch.id/public/storage/galeri-eskul/AIKf8bHyXvady83NtvyPYPCOtDrPcmRwHRnkKZfC.jpg"
  },
];

// Gandakan otomatis sampai 25 barang
const products = [...baseProducts];

while (products.length < 25) {
  const index = products.length % baseProducts.length;
  products.push({
    ...baseProducts[index],
    id: products.length + 1,
  });
}

export default function EskulSection() {
  const navigate = useNavigate();

  return (
    <section className="discount-section">
      <h2 className="discount-title">Ekstrakurikuler Sekolah</h2>

      <div className="discount-scroll">
        {products.map((p) => (
          <div className="discount-card" key={p.id}>
            <div className="img-box">
              <img src={p.image || "https://via.placeholder.com/300"} alt={p.name} />
            </div>

            <div className="info-box">
              <h3>{p.name}</h3>
              <p className="info-desc">{p.description}</p>

              <button
                className="buy-btn"
                onClick={() => navigate(`/eskul/${p.id}`)}
              >
                Liat Selengkap nya
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
