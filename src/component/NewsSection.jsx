import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./NewsSection.css";

const news = [
    {
        title: "Kegiatan Peringatan Hari Kemerdekaan",
        date: "17 Agustus 2025",
        summary:
            "Siswa-siswi SMK TELEKOMUNIKASI TELESANDI BEKASI mengikuti upacara bendera dan lomba untuk memperingati hari kemerdekaan Indonesia.",
        image:
            "https://images.unsplash.com/photo-1596496054940-9113b3c4b8d8?auto=format&fit=crop&w=600&q=80",
    },
    {
        title: "Lomba Front End Developer Di PNJ",
        date: "2 Oktober 2025",
        summary:
            "Sekolah kami mendapatkan 2 peringkat sekaligus juara 2 dan juara 3 dalam bidang lomba Front End.",
        image:
            "https://images.unsplash.com/photo-1562600807-2f5938eb3f02?auto=format&fit=crop&w=600&q=80",
    },
    {
        title: "Lomba UI/UX ",
        date: "5 Juni 2025",
        summary:
            "Siswa Telansadi meraih juara harapa 2",
        image:
            "https://images.unsplash.com/photo-1581091870624-f154edfd20d0?auto=format&fit=crop&w=600&q=80",
    },
     {
        title: "Lomba TELCUP ",
        date: "29 November 2025",
        summary:
            "SMK TELEKOMUNIKASI TELESANDI BEKASI mengadakan lomba Telscup 6.0 2025",
        image:
            "https://images.unsplash.com/photo-1581091870624-f154edfd20d0?auto=format&fit=crop&w=600&q=80",
    },
    {
        title: "Memperkenalkan Aplikasi Untuk Ulangan",
        date: "10 Oktober 2025",
        summary:
            "Telkom dorong digitalisasi pendidikan melalui PIJAR di SMK Telekomunikasi Telesandi Bekasi.",
        image:
            "https://images.unsplash.com/photo-1581091870624-f154edfd20d0?auto=format&fit=crop&w=600&q=80",
    },
];

const NewsSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // durasi animasi (ms)
            once: false, // biar animasi bisa muncul lagi saat discroll ulang
            easing: "ease-in-out",
        });
    }, []);

    return (
        <section id="news" className="news-section">
            <h2 data-aos="fade-up">Berita Sekolah</h2>
            <div className="news-container">
                {news.map((item, index) => (
                    <div
                        key={index}
                        className="news-card"
                        data-aos="fade-up"
                        data-aos-delay={index * 150} // jeda animasi antar card
                    >
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
