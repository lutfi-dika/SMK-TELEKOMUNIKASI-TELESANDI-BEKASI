import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Mengirim...");

        try {
            const response = await fetch("https://formspree.io/f/mzzknglv", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Pesan berhasil dikirim!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("Terjadi kesalahan, silakan coba lagi.");
            }
        } catch (error) {
            setStatus("Terjadi kesalahan, silakan coba lagi.");
            console.error(error);
        }
    };

    return (
        <section id="Contact" className="contact-section">
            <div className="contact-container">
                <h2>Hubungi Kami</h2>
                <p>Silakan isi formulir di bawah ini untuk menghubungi kami.</p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Nama Lengkap</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Masukkan nama Anda"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Alamat Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Masukkan email Anda"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">Pesan</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Tulis pesan Anda..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit">Kirim Pesan</button>
                </form>

                {status && <p className="form-status">{status}</p>}
            </div>
        </section>
    );
};

export default Contact;
