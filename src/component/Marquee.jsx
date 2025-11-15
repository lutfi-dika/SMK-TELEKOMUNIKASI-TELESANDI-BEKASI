import React from 'react';
import './Marquee.css';

const Marquee = () => {
    // Teks yang akan berjalan (diulang-ulang) BISA HEBAT JUARA
   const runningText = "👋 Selamat Datang DI SMK TELEKOMUNIKASI TELESANDI BEKASI | WE ARE NOT THE BEST BUT WE WANT TO BE EXCELLENT | BISA HEBAT JUARA";

    // Ulangi teks 10 kali untuk memastikan teks berjalan panjang
    const repeatedText = runningText.repeat(10); 

    return (
        <div className="running-text-container">
            {/* Area Logo (Posisi Tetap) */}
            <div className="logo-area">
                <img 
                    src="https://images.glints.com/unsafe/1200x0/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/8cd735f46545092c290127402f114308.jpg" 
                    alt="SMK TELEKOMUNIKASI TELESANDI BEKASI" 
                    className="logo-image" 
                />
            </div>

            {/* Area Teks Berjalan (Marquee) */}
            <div className="marquee-area">
                <div className="running-text">
                    {repeatedText}
                </div>
            </div>
        </div>
    );
};

export default Marquee;