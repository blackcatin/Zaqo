import './styles/modul.css';
import infaqImage from './assets/infaq.jpg';


function Modul() {
    return (
        <div className="modul-container">
            <h1>Modul Pembelajaran</h1>
            <p>Temukan berbagai materi pembelajaran tentang zakat dan perhitungan zakat dengan mudah.</p>

            <div className="modul-list">
                <div className="modul-card">
                    <h3>Modul 1: Pengantar Zakat</h3>
                    <p>Pahami konsep dasar zakat, hukum, dan manfaatnya dalam kehidupan.</p>
                    <a href="/modul/zakat" className="btn">Baca Modul</a>
                </div>

                <div className="modul-card">
                    <h3>Modul 2: Jenis-jenis Zakat</h3>
                    <p>Pelajari jenis-jenis zakat, seperti zakat fitrah, maal, profesi, dan lainnya.</p>
                    <a href="/modul/jenis-zakat" className="btn">Baca Modul</a>
                </div>

                <div className="modul-card">
                    <h3>Modul 3: Cara Menghitung Zakat</h3>
                    <p>Pahami bagaimana cara menghitung zakat dengan rumus yang tepat.</p>
                    <a href="/modul/hitung-zakat" className="btn">Baca Modul</a>
                </div>
            </div>
        </div>
    );
}

export default Modul;
