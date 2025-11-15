import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutSection..css";

const AboutSection = () => {
    const imageUrl =
        "https://images.glints.com/unsafe/1200x0/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/8cd735f46545092c290127402f114308.jpg";
    // ganti dengan URL gambar sekolahmu

    // 🔹 Jalankan animasi AOS
    useEffect(() => {
        AOS.init({
            duration: 1200, // durasi animasi (ms)
            once: false, // animasi hanya jalan sekali
        });
    }, []);

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                {/* Teks muncul dari kiri */}
                <div className="about-text" data-aos="fade-right">
                    <h2>Tentang Sekolah</h2>
                    <p>
                        SMK Telekomunikasi Telesandi Bekasi didirikan pada tahun 2008 oleh
                        Yayasan Global Jaya Mandiri dengan tujuan menyediakan pendidikan
                        kejuruan berkualitas di bidang teknologi informasi dan
                        telekomunikasi. Sekolah ini berlokasi di Jalan KH. Mochammad,
                        Mekarsari, Tambun Selatan, Bekasi, Jawa Barat.
                    </p>
                    <p>
                        Dengan fasilitas yang memadai seperti laboratorium komputer, studio
                        multimedia, dan peralatan telekomunikasi modern, sekolah ini
                        berkomitmen menghasilkan lulusan yang kompeten dan siap bersaing di
                        dunia kerja.
                    </p>
                </div>

                {/* Gambar muncul dari kanan */}
                <div className="about-image" data-aos="fade-left">
                    <img src={imageUrl} alt="Sekolah SMK Telekomunikasi Telesandi Bekasi" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
