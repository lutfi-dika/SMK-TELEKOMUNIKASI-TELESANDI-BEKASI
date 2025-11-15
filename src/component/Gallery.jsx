import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Gallery.css";

const images = [
    "https://lh5.googleusercontent.com/p/AF1QipOFoxvEbI3-olcyM1BNlFGrrzzynfPeA8z4sLO-=w2048-h2048-k-no",
    "https://rbasset.s3.ap-southeast-1.amazonaws.com/2024/12/14010606/IMG-20241213-WA0013-2048x1152.jpg",
    "https://akcdn.detik.net.id/community/media/visual/2023/06/15/tingkatkan-budaya-literasi-kini-pelajar-bisa-membaca-di-perpustakaan-keliling_169.jpeg?w=700&q=90",
    "https://beritacikarang.com/wp-content/uploads/2022/12/resize-telsbox-inovasi-siswa-smk-telesandi.jpeg.webp",
    "https://ik.trn.asia/uploads/2021/10/1633428099565.jpeg",
    "https://smktelekomunikasitelesandi.sch.id/public/storage/news/4GEVFkwG9ge4ySm6e40kSY8xUQhD5Wh1gnhKPqN0.jpg"
];

const GallerySection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // durasi animasi (ms)
            once: false,    // biar animasinya muncul lagi setiap scroll
            easing: "ease-in-out",
        });
    }, []);

    return (
        <section id="gallery" className="gallery-section">
            <h2 data-aos="fade-up">Galeri Kegiatan</h2>
            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        data-aos="fade-up"
                        data-aos-delay={index * 100} // jeda animasi tiap gambar
                    >
                        <img src={img} alt={`Kegiatan ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GallerySection;
