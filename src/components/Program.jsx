import { useState } from "react";
import './../styles/program.css';
import programBansos from './../assets/program-bansos.jpg';
import programBeasiswa from './../assets/program-beasiswa.jpg';
import programBencana from './../assets/program-bencana.jpg';
import programKesehatan from './../assets/program-kesehatan.jpg';

function Program() {
    const [currentPage, setCurrentPage] = useState("program");
    return (
        <div className="program-container">
            {currentPage !== "program" && (
                <button onClick={() => setCurrentPage("program")} className="back-btn">←</button>
            )}

            {currentPage === "program" && (
                <>
                    <h1>Program Kami</h1>
                    <p>Penasaran kemana zakat ini akan disalurkan? Yuk cek program-program kami berikut!</p>

                    <div className="program-list">
                        <div className="program-card">
                            <h3>Program Bantuan Sosial</h3>
                            <img src={programBansos} alt="" />
                            <button onClick={() => setCurrentPage("zakat")} className="btn">Lihat Program</button>
                        </div>

                        <div className="program-card">
                            <h3>Program Bantuan Bencana</h3>
                            <img src={programBencana} alt="" />
                            <button onClick={() => setCurrentPage("jenisZakat")} className="btn">Lihat Program</button>
                        </div>

                        <div className="program-card">
                            <h3>Program Bantuan Kesehatan</h3>
                            <img src={programKesehatan} alt="" />
                            <button onClick={() => setCurrentPage("hitungZakat")} className="btn">Lihat Program</button>
                        </div>

                        <div className="program-card">
                            <h3>Program Bantuan Beasiswa</h3>
                            <img src={programBeasiswa} alt="" />
                            <button onClick={() => setCurrentPage("hitungZakat")} className="btn">Lihat Program</button>
                        </div>
                    </div>
                </>
            )}

            {currentPage === "zakat" && (
                <div className="program-page">
                    <h1>Jenis-Jenis Zakat</h1>
                </div>
            )}

            {currentPage === "jenisZakat" && (
                <div className="program-page">
                    <h1>Jenis-Jenis Zakat</h1>
                </div>
            )}

            {currentPage === "hitungZakat" && (
                <div className="program-page">
                    <h1>Cara Menghitung Zakat</h1>
                </div>
            )}
        </div>
    );
}

export default Program;
