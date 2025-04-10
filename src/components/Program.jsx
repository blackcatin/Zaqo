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
                    <h1>Pengantar Zakat</h1>
                    <div className="zakat-content">
                    <section>
                        <h2>1. Konsep Dasar Zakat</h2>
                        <p className="zakat-text">
                        Zakat adalah salah satu rukun Islam yang wajib ditunaikan oleh setiap
                        Muslim yang memenuhi syarat. Secara bahasa, zakat berarti <em>bersih, tumbuh, dan berkembang</em>, 
                        sedangkan secara istilah, zakat adalah kewajiban mengeluarkan sebagian harta kepada kelompok 
                        yang berhak menerimanya sesuai ketentuan syariat Islam.
                        </p>
                        <ul className="zakat-list">
                        <li><strong>Zakat Fitrah:</strong> Wajib dikeluarkan sebelum Hari Raya Idulfitri.</li>
                        <li><strong>Zakat Mal:</strong> Berlaku untuk harta tertentu seperti emas, perak, hasil pertanian, 
                        peternakan, perdagangan, dan penghasilan jika telah mencapai nisab dan haul.</li>
                        </ul>
                    </section>
                    
                    <section>
                        <h2>2. Hukum Zakat</h2>
                        <p className="zakat-text">Zakat hukumnya <strong>wajib</strong> bagi Muslim yang memenuhi syarat:</p>
                        <ul className="zakat-list">
                        <li><strong>Islam</strong> – Hanya diwajibkan bagi umat Islam.</li>
                        <li><strong>Merdeka</strong> – Orang yang merdeka berkewajiban menunaikan zakat.</li>
                        <li><strong>Berakal dan Baligh</strong> – Diperuntukkan bagi yang sudah dewasa dan berakal sehat.</li>
                        <li><strong>Memiliki harta yang mencapai nisab dan haul</strong>.</li>
                        </ul>
                        <blockquote>
                        <p><strong>QS. At-Taubah: 103</strong></p>
                        <p>"Ambillah zakat dari sebagian harta mereka, dengan zakat itu kamu membersihkan dan menyucikan mereka..."</p>
                        </blockquote>
                    </section>
            
                    <section>
                        <h2>3. Manfaat Zakat dalam Kehidupan</h2>
                        <ul className="zakat-list">
                        <li><strong>Spiritual:</strong> Menyucikan harta dan jiwa dari sifat kikir.</li>
                        <li><strong>Sosial:</strong> Mengurangi kesenjangan ekonomi dan membantu fakir miskin.</li>
                        <li><strong>Ekonomi:</strong> Meningkatkan perputaran ekonomi dalam masyarakat.</li>
                        </ul>
                    </section>
            
                    <section className="kesimpulan">
                        <h2>Kesimpulan</h2>
                        <p className="zakat-text">
                        Zakat bukan sekadar kewajiban, tetapi juga merupakan instrumen sosial yang dapat menyejahterakan masyarakat. 
                        Dengan memahami dan menunaikan zakat, kita tidak hanya membersihkan harta tetapi juga berkontribusi dalam menciptakan 
                        keseimbangan ekonomi dan keadilan sosial.
                        </p>
                    </section>
                    </div>
                </div>
            )}

            {currentPage === "jenisZakat" && (
                <div className="program-page">
                    <h1>Jenis-Jenis Zakat</h1>
                    <p>Pelajari jenis-jenis zakat, seperti zakat fitrah, maal, profesi, dan lainnya.</p>
                </div>
            )}

            {currentPage === "hitungZakat" && (
                <div className="program-page">
                    <h1>Cara Menghitung Zakat</h1>
                    <p>Pahami bagaimana cara menghitung zakat dengan rumus yang tepat.</p>
                </div>
            )}
        </div>
    );
}

export default Program;
