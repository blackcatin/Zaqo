import { useState } from "react";
import './../styles/layanan.css';
import chatIcon from './../assets/chat-icon.png';
import newsIcon from './../assets/news-icon.png';
import calculatorIcon from './../assets/calculator-icon.png';

function Layanan() {
    const [currentPage, setCurrentPage] = useState("layanan");
    return (
        <div className="layanan-container">
            {currentPage !== "layanan" && (
                <button onClick={() => setCurrentPage("layanan")} className="back-btn">←</button>
            )}

            {currentPage === "layanan" && (
                <>
                    <h1>Layanan Kami</h1>
                    <p></p>

                    <div className="layanan-list">
                        <div className="layanan-card">
                            <h3>Donature Care</h3>
                            <img src={chatIcon} alt="" />
                            <button onClick={() => setCurrentPage("zakat")} className="btn">Lihat Program</button>
                        </div>

                        <div className="layanan-card">
                            <h3>Berita Donasi</h3>
                            <img src={newsIcon} alt="" />
                            <button onClick={() => setCurrentPage("jenisZakat")} className="btn">Lihat Program</button>
                        </div>

                        <div className="layanan-card">
                            <h3>Kalkulator Zakat</h3>
                            <img src={calculatorIcon} alt="" />
                            <button onClick={() => setCurrentPage("hitungZakat")} className="btn">Lihat Program</button>
                        </div>

                        <div className="layanan-card">
                            <h3>Kalkulator Zakat</h3>
                            <img src={calculatorIcon} alt="" />
                            <button onClick={() => setCurrentPage("hitungZakat")} className="btn">Lihat Program</button>
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
