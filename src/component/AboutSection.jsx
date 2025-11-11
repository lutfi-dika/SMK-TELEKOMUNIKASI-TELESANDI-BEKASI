import React from "react";
import "./AboutSection..css"

const AboutSection = () => {
    const imageUrl = "https://images.glints.com/unsafe/1200x0/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/8cd735f46545092c290127402f114308.jpg";
    // ganti dengan URL gambar sekolahmu

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-text">
                    <h2>Tentang Sekolah</h2>
                    <p>
                        SMK Telekomunikasi Telesandi Bekasi didirikan pada tahun 2008
                        oleh Yayasan Global Jaya Mandiri dengan tujuan menyediakan pendidikan
                        kejuruan berkualitas di bidang teknologi informasi dan telekomunikasi.
                        Sekolah ini berlokasi di Jalan KH. Mochammad, Mekarsari, Tambun Selatan,
                        Bekasi, Jawa Barat.

                    </p>
                    <p>
                        Dengan fasilitas yang memadai seperti laboratorium komputer,
                        studio multimedia, dan peralatan telekomunikasi modern, sekolah
                        ini berkomitmen menghasilkan lulusan yang kompeten dan siap bersaing
                        di dunia kerja.
                    </p>
                </div>
                <div className="about-image">
                    <img src={imageUrl} alt="Sekolah SMA Negeri 78 Jakarta" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
