import React from "react";
import "./VisiMisiSection.css";

const VisiMisiSection = () => {
    return (
        <section id="visi" className="visi-misi-section">
            <h2>Visi & Misi Sekolah</h2>
            <div className="cards-container">
                {/* Visi */}
                <div className="card">
                    <h3>Visi</h3>
                    <p>
                        Menjadi sekolah yang bermutu dan unggul dalam ilmu pengetahuan dan teknologi
                        informasi berdasarkan iman dan taqwa, berkarakter bangsa, serta berbudaya lingkungan.
                    </p>
                </div>

                {/* Misi */}
                <div className="card">
                    <h3>Misi</h3>
                    <ul>
                        <li>Menyelenggarakan pendidikan di bidang teknologi telekomunikasi dan informasi</li>
                        <li>Mengembangkan kurikulum yang mendukung kebutuhan pengguna lulusan</li>
                        <li>Menciptakan suasana akademis yang dilandasi iman dan taqwa</li>
                        <li>Menghasilkan lulusan yang berkarakter bangsa dan berbudaya lingkungan</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default VisiMisiSection;
