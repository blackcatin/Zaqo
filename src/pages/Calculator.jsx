import { useState } from "react";
import './../styles/home.css';


function Calculator() {
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
                </>
            )}

            {currentPage === "zakat" && (
                <div className="modul-page">
                    <h1>Pengantar Zakat</h1>
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

export default Calculator;
