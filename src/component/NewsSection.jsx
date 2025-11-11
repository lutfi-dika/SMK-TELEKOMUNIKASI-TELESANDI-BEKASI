import React from "react";
import "./NewsSection.css";

const news = [
    {
        title: "Kegiatan Peringatan Hari Kemerdekaan",
        date: "17 Agustus 2025",
        summary: "Siswa-siswi SMA Negeri 78 Jakarta mengikuti upacara bendera dan lomba untuk memperingati hari kemerdekaan Indonesia.",
        image: "https://images.unsplash.com/photo-1596496054940-9113b3c4b8d8?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Lomba Front End Developer Di PNJ",
        date: "2 Oktober 2025",
        summary: "Sekolah kami mendapatkan 2 peringkat sekaligus juara 2 dan juara 3 dalam bidang lomba Front End",
        image: "https://images.unsplash.com/photo-1562600807-2f5938eb3f02?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Kegiatan Donor Darah Siswa",
        date: "5 Juni 2025",
        summary: "Siswa dan guru SMA Negeri 78 Jakarta mengikuti kegiatan donor darah untuk membantu masyarakat sekitar.",
        image: "https://images.unsplash.com/photo-1581091870624-f154edfd20d0?auto=format&fit=crop&w=600&q=80"
    },
     {
        title: "Memperkanalkan Applikasi Untuk Ulangan",
        date: "5 Juni 2025",
        summary: "Telkom Dorong Digitalisasi Pendidikan Melalui PIJAR di SMK Telekomunikasi Telesandi Bekasi",
        image: "https://images.unsplash.com/photo-1581091870624-f154edfd20d0?auto=format&fit=crop&w=600&q=80"
    },
];

const NewsSection = () => {
    return (
        <section id="news" className="news-section">
            <h2>Berita Sekolah</h2>
            <div className="news-container">
                {news.map((item, index) => (
                    <div key={index} className="news-card">
                        <img src={item.image} alt={item.title} />
                        <div className="news-content">
                            <h3>{item.title}</h3>
                            <p className="news-date">{item.date}</p>
                            <p>{item.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewsSection;
