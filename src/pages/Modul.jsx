import { useState } from "react";
import './../styles/modul.css';
import infaqImage from './../assets/infaq.jpg';

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
                <div>
                    <h1>Pengantar Zakat</h1>
                    <div className="zakat-content">
                        <div className="sub-bab">
                            <h2>1. Konsep Dasar Zakat</h2>
                            <p>
                            Zakat adalah salah satu rukun Islam yang wajib ditunaikan oleh setiap
                        Muslim yang memenuhi syarat. Secara bahasa, zakat berarti <em>bersih, tumbuh, dan berkembang</em>, 
                        sedangkan secara istilah, zakat adalah kewajiban mengeluarkan sebagian harta kepada kelompok 
                        yang berhak menerimanya sesuai ketentuan syariat Islam.
                            </p>
                        </div>

                        <div className="quote-card">
                            <p className="arabic-text">مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ</p>
                            <p className="translation-text">“Barang siapa yang menunjukkan kepada kebaikan, maka ia akan mendapatkan pahala seperti orang yang melakukannya.”</p>
                            <p className="source-text">(HR. Muslim, no. 1893)</p>
                        </div>

                        <div className="sub-bab">
                            <h2>2. Hukum Zakat</h2>
                            <p >Zakat hukumnya <strong>wajib</strong> bagi Muslim yang memenuhi syarat:</p>
                            <ul className="zakat-list">
                            <li><strong>Islam</strong> – Hanya diwajibkan bagi umat Islam.</li>
                            <li><strong>Merdeka</strong> – Orang yang merdeka berkewajiban menunaikan zakat.</li>
                            <li><strong>Berakal dan Baligh</strong> – Diperuntukkan bagi yang sudah dewasa dan berakal sehat.</li>
                            <li><strong>Memiliki harta yang mencapai nisab dan haul</strong>.</li>
                            </ul>
                        </div>

                        <div className="blockquote">
                            <p><strong>QS. At-Taubah: 103</strong></p>
                            <p>"Ambillah zakat dari sebagian harta mereka, dengan zakat itu kamu membersihkan dan menyucikan mereka..."</p>
                        </div>

                        <div className="sub-bab">
                            <h2>3. Manfaat Zakat</h2>
                           <ul className="zakat-list">
                           <li><strong>Spiritual:</strong> Menyucikan harta dan jiwa dari sifat kikir.</li>
                            <li><strong>Sosial:</strong> Mengurangi kesenjangan ekonomi dan membantu fakir miskin.</li>
                            <li><strong>Ekonomi:</strong> Meningkatkan perputaran ekonomi dalam masyarakat.</li>
                           </ul>
                        </div>
                    </div>
                </div>
            )}


            {currentPage === "jenisZakat" && (
                <div >
                    <h1>Jenis-Jenis Zakat</h1>
                    <div className="zakat-content">
                        <div className="sub-bab">
                            <h2>1. Konsep Dasar Zakat</h2>
                            <p>
                            Zakat adalah salah satu rukun Islam yang wajib ditunaikan oleh setiap
                        Muslim yang memenuhi syarat. Secara bahasa, zakat berarti <em>bersih, tumbuh, dan berkembang</em>, 
                        sedangkan secara istilah, zakat adalah kewajiban mengeluarkan sebagian harta kepada kelompok 
                        yang berhak menerimanya sesuai ketentuan syariat Islam.
                            </p>
                        </div>

                        <div className="quote-card">
                            <p className="arabic-text">مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ</p>
                            <p className="translation-text">“Barang siapa yang menunjukkan kepada kebaikan, maka ia akan mendapatkan pahala seperti orang yang melakukannya.”</p>
                            <p className="source-text">(HR. Muslim, no. 1893)</p>
                        </div>

                        <div className="sub-bab">
                            <h2>2. Hukum Zakat</h2>
                            <p >Zakat hukumnya <strong>wajib</strong> bagi Muslim yang memenuhi syarat:</p>
                            <ul className="zakat-list">
                            <li><strong>Islam</strong> – Hanya diwajibkan bagi umat Islam.</li>
                            <li><strong>Merdeka</strong> – Orang yang merdeka berkewajiban menunaikan zakat.</li>
                            <li><strong>Berakal dan Baligh</strong> – Diperuntukkan bagi yang sudah dewasa dan berakal sehat.</li>
                            <li><strong>Memiliki harta yang mencapai nisab dan haul</strong>.</li>
                            </ul>
                        </div>

                        <div className="blockquote">
                            <p><strong>QS. At-Taubah: 103</strong></p>
                            <p>"Ambillah zakat dari sebagian harta mereka, dengan zakat itu kamu membersihkan dan menyucikan mereka..."</p>
                        </div>

                        <div className="sub-bab">
                            <h2>3. Manfaat Zakat</h2>
                           <ul>
                           <li><strong>Spiritual:</strong> Menyucikan harta dan jiwa dari sifat kikir.</li>
                            <li><strong>Sosial:</strong> Mengurangi kesenjangan ekonomi dan membantu fakir miskin.</li>
                            <li><strong>Ekonomi:</strong> Meningkatkan perputaran ekonomi dalam masyarakat.</li>
                           </ul>
                        </div>
                    </div>
                </div>
            )}

            {currentPage === "hitungZakat" && (
                <div>
                    <h1>Cara Menghitung Zakat</h1>
                    <div className="zakat-content">
                        <div className="sub-bab">
                            <h2>1. Konsep Dasar Zakat</h2>
                            <p>
                            Zakat adalah salah satu rukun Islam yang wajib ditunaikan oleh setiap
                        Muslim yang memenuhi syarat. Secara bahasa, zakat berarti <em>bersih, tumbuh, dan berkembang</em>, 
                        sedangkan secara istilah, zakat adalah kewajiban mengeluarkan sebagian harta kepada kelompok 
                        yang berhak menerimanya sesuai ketentuan syariat Islam.
                            </p>
                        </div>

                        <div className="quote-card">
                            <p className="arabic-text">مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ</p>
                            <p className="translation-text">“Barang siapa yang menunjukkan kepada kebaikan, maka ia akan mendapatkan pahala seperti orang yang melakukannya.”</p>
                            <p className="source-text">(HR. Muslim, no. 1893)</p>
                        </div>

                        <div className="sub-bab">
                            <h2>2. Hukum Zakat</h2>
                            <p >Zakat hukumnya <strong>wajib</strong> bagi Muslim yang memenuhi syarat:</p>
                            <ul className="zakat-list">
                            <li><strong>Islam</strong> – Hanya diwajibkan bagi umat Islam.</li>
                            <li><strong>Merdeka</strong> – Orang yang merdeka berkewajiban menunaikan zakat.</li>
                            <li><strong>Berakal dan Baligh</strong> – Diperuntukkan bagi yang sudah dewasa dan berakal sehat.</li>
                            <li><strong>Memiliki harta yang mencapai nisab dan haul</strong>.</li>
                            </ul>
                        </div>

                        <div className="blockquote">
                            <p><strong>QS. At-Taubah: 103</strong></p>
                            <p>"Ambillah zakat dari sebagian harta mereka, dengan zakat itu kamu membersihkan dan menyucikan mereka..."</p>
                        </div>

                        <div className="sub-bab">
                            <h2>3. Manfaat Zakat</h2>
                           <ul>
                           <li><strong>Spiritual:</strong> Menyucikan harta dan jiwa dari sifat kikir.</li>
                            <li><strong>Sosial:</strong> Mengurangi kesenjangan ekonomi dan membantu fakir miskin.</li>
                            <li><strong>Ekonomi:</strong> Meningkatkan perputaran ekonomi dalam masyarakat.</li>
                           </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modul;
