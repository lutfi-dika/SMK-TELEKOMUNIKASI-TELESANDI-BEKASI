import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./VisiMisiSection.css";

const VisiMisiSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // durasi animasi (ms)
            once: false,    // biar muncul lagi tiap discroll
            easing: "ease-in-out", // efek halus
        });
    }, []);

    return (
        <section id="visi" className="visi-misi-section">
            <h2 data-aos="fade-up">Visi & Misi Sekolah</h2>

            <div className="cards-container">
                {/* Visi */}
                <div className="card" data-aos="fade-right">
                    <h3>Visi</h3>
                    <p>
                        Menjadi sekolah yang bermutu dan unggul dalam ilmu pengetahuan dan teknologi
                        informasi berdasarkan iman dan taqwa, berkarakter bangsa, serta berbudaya lingkungan.
                    </p>
                </div>

                {/* Misi */}
                <div className="card" data-aos="fade-left">
                    <h3>Misi</h3>
                    <ul>
                        <li data-aos="fade-up" data-aos-delay="100">
                            Menyelenggarakan pendidikan di bidang teknologi telekomunikasi dan informasi
                        </li>
                        <li data-aos="fade-up" data-aos-delay="200">
                            Mengembangkan kurikulum yang mendukung kebutuhan pengguna lulusan
                        </li>
                        <li data-aos="fade-up" data-aos-delay="300">
                            Menciptakan suasana akademis yang dilandasi iman dan taqwa
                        </li>
                        <li data-aos="fade-up" data-aos-delay="400">
                            Menghasilkan lulusan yang berkarakter bangsa dan berbudaya lingkungan
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default VisiMisiSection;
