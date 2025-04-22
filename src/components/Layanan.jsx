import { Link } from 'react-router-dom';
import './../styles/layanan.css';
import chatIcon from './../assets/chat-icon.png';
import newsIcon from './../assets/news-icon.png';
import calculatorIcon from './../assets/calculator-icon.png';
import modulIcon from './../assets/modul-icon.png';

function Layanan() {
    return (
        <div className="layanan-container">

            <h2>Layanan Kami</h2>
            <p></p>

            <div className="layanan-list">
                <a
                    href="https://wa.me/6281216547789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="layanan-card"
                >
                    <img src={chatIcon} alt="Chat Icon" />
                    <div className="layanan-card-detail">
                        <h3>Donature Care</h3>
                        <h5>Mari berbincang lebih lengkap terkait program & layanan kami.</h5>
                    </div>
                </a>


                <Link className="layanan-card" to="/newsportal">
                    <img src={newsIcon} alt="" />
                    <div className="layanan-card-detail">
                        <h3>Berita Donasi</h3>
                        <h5>Ikuti berita donasi dan berita lainnya terkait zakat!</h5>
                    </div>
                </Link>

                <Link className="layanan-card" to="/calculator">
                    <img src={calculatorIcon} alt="" />
                    <div className="layanan-card-detail">
                        <h3>Kalkulator Zakat</h3>
                        <h5>Hitung secara akurat zakat yang akan dibayar dengan mudah!</h5>
                    </div>
                </Link>

                <Link className="layanan-card" to="/modul">
                    <img src={modulIcon} alt="" />
                    <div className="layanan-card-detail">
                        <h3>Modul Pembelajaran</h3>
                        <h5>Tertarik dengan zakat? Mari belajar dengan modul lengkap</h5>
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default Layanan;
