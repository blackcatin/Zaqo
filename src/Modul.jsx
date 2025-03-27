import { useState } from "react";
import './styles/modul.css';
import infaqImage from './assets/infaq.jpg';


function Modul() {
    const [currentPage, setCurrentPage] = useState("modul"); 
    return (
        <div className="modul-container">
            {currentPage !== "modul" && (
                <button onClick={() => setCurrentPage("modul")} className="back-btn">←</button>
            )}

            {currentPage === "modul" && (
                <>
                    <h1>Modul Pembelajaran</h1>
                    <p>Temukan berbagai materi pembelajaran tentang zakat dan perhitungan zakat dengan mudah.</p>

                    <div className="modul-list">
                        <div className="modul-card">
                            <h3>Modul 1: Pengantar Zakat</h3>
                            <p>Pahami konsep dasar zakat, hukum, dan manfaatnya dalam kehidupan.</p>
                            <button onClick={() => setCurrentPage("zakat")} className="btn">Baca Modul</button>
                        </div>

                        <div className="modul-card">
                            <h3>Modul 2: Jenis-jenis Zakat</h3>
                            <p>Pelajari jenis-jenis zakat, seperti zakat fitrah, maal, profesi, dan lainnya.</p>
                            <button onClick={() => setCurrentPage("jenisZakat")} className="btn">Baca Modul</button>
                        </div>

                        <div className="modul-card">
                            <h3>Modul 3: Cara Menghitung Zakat</h3>
                            <p>Pahami bagaimana cara menghitung zakat dengan rumus yang tepat.</p>
                            <button onClick={() => setCurrentPage("hitungZakat")} className="btn">Baca Modul</button>
                        </div>
                    </div>
                </>
            )}

            {currentPage === "zakat" && (
                <div className="modul-page">
                    <h1>Pengantar Zakat</h1>
                    <p>Ini adalah halaman untuk modul pengantar zakat.</p>
                </div>
            )}

            {currentPage === "jenisZakat" && (
                <div className="modul-page">
                    <h1>Jenis-Jenis Zakat</h1>
                    <p>Pelajari jenis-jenis zakat, seperti zakat fitrah, maal, profesi, dan lainnya.</p>
                </div>
            )}

            {currentPage === "hitungZakat" && (
                <div className="modul-page">
                    <h1>Cara Menghitung Zakat</h1>
                    <p>Pahami bagaimana cara menghitung zakat dengan rumus yang tepat.</p>
                </div>
            )}
        </div>
    );
}

export default Modul;
