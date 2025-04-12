import { useState } from "react";
import './../styles/layanan.css';
import chatIcon from './../assets/chat-icon.png';
import newsIcon from './../assets/news-icon.png';
import calculatorIcon from './../assets/calculator-icon.png';
import modulIcon from './../assets/modul-icon.png';

function Layanan() {
    const [currentPage, setCurrentPage] = useState("layanan");
    return (
        <div className="layanan-container">
            {currentPage !== "layanan" && (
                <button onClick={() => setCurrentPage("layanan")} className="back-btn">←</button>
            )}

            {currentPage === "layanan" && (
                <>
                    <h2>Layanan Kami</h2>
                    <p></p>

                    <div className="layanan-list">
                        <div className="layanan-card">
                            <img src={chatIcon} alt="" />
                            <div className="layanan-card-detail">
                                <h3>Donature Care</h3>
                                <h5>Mari berbincang lebih lengkap terkait program & layanan kami.</h5>
                            </div>
                        </div>

                        <div className="layanan-card">
                            <img src={newsIcon} alt="" />
                            <div className="layanan-card-detail">
                                <h3>Berita Donasi</h3>
                                <h5>Ikuti berita donasi dan berita lainnya terkait zakat!</h5>
                            </div>
                        </div>

                        <div className="layanan-card">
                            <img src={calculatorIcon} alt="" />
                            <div className="layanan-card-detail">
                                <h3>Kalkulator Zakat</h3>
                                <h5>Hitung secara akurat zakat yang akan dibayar dengan mudah!</h5>
                            </div>
                        </div>

                        <div className="layanan-card">
                            <img src={modulIcon} alt="" />
                            <div className="layanan-card-detail">
                                <h3>Modul Pembelajaran</h3>
                                <h5>Tertarik dengan zakat? Mari belajar dengan modul lengkap</h5>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {currentPage === "zakat" && (
                <div className="layanan-page">
                    <h1>Jenis-Jenis Zakat</h1>
                </div>
            )}

            {currentPage === "jenisZakat" && (
                <div className="layanan-page">
                    <h1>Jenis-Jenis Zakat</h1>
                </div>
            )}

            {currentPage === "hitungZakat" && (
                <div className="layanan-page">
                    <h1>Cara Menghitung Zakat</h1>
                </div>
            )}
        </div>
    );
}

export default Layanan;
