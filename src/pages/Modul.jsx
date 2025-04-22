import { useState } from "react";
import './../styles/modul.css';

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
                            <h3>Modul 2: Jenis-Jenis Zakat</h3>
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
            <div className="zakat-content">
                <h1>🕌 Jenis-Jenis Zakat</h1>

                <section className="sub-bab">
                <h2>1. Zakat Fitrah (زكاة الفطر)</h2>
                <p>
                📌 Zakat fitrah adalah zakat yang wajib ditunaikan oleh setiap Muslim menjelang Hari Raya Idulfitri sebagai bentuk penyucian jiwa dan solidaritas sosial.
                </p>
                <div className="zakat-info">
                <p><strong>🕓 Waktu Pelaksanaan:</strong> Dibayarkan mulai dari awal bulan Ramadan dan paling lambat sebelum pelaksanaan salat Idulfitri.</p>

                <p><strong>📏 Kadar:</strong></p>
                <ul>
                <li>Sebesar 1 sha’ atau sekitar 2.5 – 3 kg makanan pokok (beras, gandum, kurma, dll) per orang.</li>
                <li>Dapat dikonversi dalam bentuk uang sesuai dengan harga makanan pokok setempat.</li>
                </ul><br />

                <p><strong>👤 Subjek:</strong> Setiap Muslim, tanpa memandang usia dan status sosial, termasuk anak-anak dan orang dewasa.</p>

                <p><strong>🎯 Tujuan:</strong></p>
                <ul>
                <li>Membersihkan jiwa dari sifat buruk selama Ramadan.</li>
                <li>Membantu fakir miskin agar dapat merayakan Idulfitri dengan layak.</li>
                </ul>
                </div>

                </section>

                <section className="sub-bab">
                <h2>2. Zakat Mal (زكاة المال)</h2>
                <p>
                    Zakat mal adalah zakat atas harta benda yang dimiliki seseorang yang mencapai nisab dan haul. Jenis-jenisnya antara lain:
                </p>

                <div className="card">
                    <h3>A. Zakat Emas dan Perak</h3>
                    <ul>
                    <li><strong>Nisab:</strong> 85 gram emas / 595 gram perak.</li>
                    <li><strong>Kadar:</strong> 2.5% dari total harta.</li>
                    <li><strong>Syarat:</strong> Dimiliki selama 1 tahun dan produktif.</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>B. Zakat Uang, Tabungan, dan Deposito</h3>
                    <ul>
                    <li><strong>Nisab:</strong> Setara 85 gram emas.</li>
                    <li><strong>Kadar:</strong> 2.5%.</li>
                    <li><strong>Termasuk:</strong> Uang tunai, deposito, dll.</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>C. Zakat Perdagangan</h3>
                    <ul>
                    <li><strong>Nisab:</strong> Setara 85 gram emas dari nilai barang dagangan dan uang kas.</li>
                    <li><strong>Kadar:</strong> 2.5% setelah dikurangi utang.</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>D. Zakat Pertanian</h3>
                    <ul>
                    <li><strong>Nisab:</strong> 653 kg gabah kering.</li>
                    <li><strong>Kadar:</strong> 5% (pakai irigasi) atau 10% (air alami).</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>E. Zakat Peternakan</h3>
                    <ul>
                    <li><strong>Kambing:</strong> ≥ 40 ekor (zakat 1 ekor).</li>
                    <li><strong>Sapi:</strong> ≥ 30 ekor (zakat 1 ekor usia 1 tahun).</li>
                    <li><strong>Unta:</strong> ≥ 5 ekor (zakat sesuai tabel fiqih).</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>F. Zakat Hasil Tambang dan Laut</h3>
                    <ul>
                    <li><strong>Objek:</strong> Emas, batu bara, minyak bumi, mutiara, dll.</li>
                    <li><strong>Kadar:</strong> 2.5% – 20% tergantung bentuk hasil.</li>
                    <li><strong>Waktu:</strong> Saat hasil diperoleh.</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>G. Zakat Investasi dan Saham</h3>
                    <ul>
                    <li><strong>Nisab:</strong> Setara 85 gram emas dari nilai saham/keuntungan bersih.</li>
                    <li><strong>Kadar:</strong> 2.5% per tahun.</li>
                    </ul>
                </div>
                </section>

                <section className="section">
                <h2> 🧾 Perbedaan Utama Zakat Fitrah dan Zakat Mal</h2>
                <table className="zakat-table">
                    <thead>
                    <tr>
                        <th>Aspek</th>
                        <th>Zakat Fitrah</th>
                        <th>Zakat Mal</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Waktu</td>
                        <td>Menjelang Idulfitri</td>
                        <td>Kapan saja setelah haul & nisab terpenuhi</td>
                    </tr>
                    <tr>
                        <td>Objek</td>
                        <td>Jiwa (diri)</td>
                        <td>Harta</td>
                    </tr>
                    <tr>
                        <td>Kadar</td>
                        <td>2.5–3 kg makanan pokok</td>
                        <td>2.5% (umumnya)</td>
                    </tr>
                    <tr>
                        <td>Penerima</td>
                        <td>8 golongan (asnaf)</td>
                        <td>8 golongan (asnaf)</td>
                    </tr>
                    <tr>
                        <td>Sifat</td>
                        <td>Wajib untuk semua Muslim</td>
                        <td>Wajib bila syarat harta terpenuhi</td>
                    </tr>
                    </tbody>
                </table>
                </section>

                <section className="section-quote">
                <h2>📚 Dasar Hukum Zakat</h2>
                <blockquote>
                    <p><strong>HR. Bukhari dan Muslim</strong></p>
                    <p>“Islam dibangun di atas lima perkara: bersyahadat bahwa tiada Tuhan selain Allah… dan menunaikan zakat...”</p>
                </blockquote>
                </section>
            </div>
            )}


            {currentPage === "hitungZakat" && (
            <div>
                <h1>Cara Menghitung Zakat</h1>
                <div className="zakat-content">
                <div className="sub-bab">
                    <h2>1. Zakat Fitrah</h2>
                    <ul>
                    <li><strong>Kadar:</strong> 1 sha’ (sekitar 2.5 – 3 kg makanan pokok)</li>
                    <li><strong>Alternatif:</strong> Dapat dibayar dalam bentuk uang setara harga makanan pokok</li>
                    <li><strong>Contoh:</strong> <br />Jika harga beras Rp13.000/kg → 2.5 × Rp13.000 = <strong>Rp32.500</strong></li>
                    </ul>
                </div>

                <div className="sub-bab">
                    <h2>2. Zakat Penghasilan (Profesi)</h2>
                    <ul>
                    <li><strong>Nisab:</strong> Setara 85 gram emas</li>
                    <li><strong>Kadar:</strong> 2.5% dari penghasilan bersih</li>
                    <li><strong>Rumus:</strong> Zakat = 2.5% × Penghasilan Bersih</li>
                    <li><strong>Contoh:</strong> <br /> Penghasilan Rp10.000.000 → Zakat = 2.5% × 10jt = <strong>Rp250.000</strong></li>
                    </ul>
                </div>

                <div className="sub-bab">
                    <h2>3. Zakat Emas & Perak</h2>
                    <ul>
                    <li><strong>Nisab:</strong> Emas: 85 gram | Perak: 595 gram</li>
                    <li><strong>Kadar:</strong> 2.5% per tahun</li>
                    <li><strong>Rumus:</strong> Zakat = 2.5% × Total Nilai Emas/Perak</li>
                    <li><strong>Contoh:</strong><br /> 100 gr emas × Rp1.000.000 → Rp100.000.000 × 2.5% = <strong>Rp2.500.000</strong></li>
                    </ul>
                </div>

                <div className="sub-bab">
                    <h2>4. Zakat Perdagangan</h2>
                    <ul>
                    <li><strong>Nisab:</strong> Setara 85 gram emas</li>
                    <li><strong>Kadar:</strong> 2.5%</li>
                    <li><strong>Rumus:</strong> Zakat = 2.5% × (Modal + Keuntungan – Utang Dagang)</li>
                    <li><strong>Contoh:</strong><br /> (50jt + 20jt – 10jt) × 2.5% = <strong>Rp1.500.000</strong></li>
                    </ul>
                </div>

                <div className="sub-bab">
                    <h2>5. Zakat Pertanian</h2>
                    <ul>
                    <li><strong>Nisab:</strong> 653 kg gabah / 520 kg beras</li>
                    <li><strong>Kadar:</strong> 10% (tanpa irigasi) | 5% (dengan irigasi)</li>
                    <li><strong>Rumus:</strong> Zakat = 5% atau 10% × Hasil Panen</li>
                    <li><strong>Contoh:</strong><br /> Hasil 1.000 kg beras, zakat = 10% × 1.000 = <strong>100 kg</strong></li>
                    </ul>
                </div>

                <div className="sub-bab">
                    <h2>6. Zakat Ternak</h2>
                    <p>Perhitungan zakat ternak bergantung pada jenis dan jumlah ternak (kambing, sapi, unta), serta apakah telah mencapai nisab dan haul. Konsultasikan ke lembaga zakat untuk perhitungan yang tepat.</p>
                </div>
                </div>
            </div>
            )}

        </div>
    );
}

export default Modul;
