import { NavLink } from 'react-router-dom';
import instagram from './../assets/icon/instagram.png';
import facebook from './../assets/icon/facebook.png';
import youtube from './../assets/icon/youtube.png';
import './../styles/footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <div className="footer-about">
                    <h3>ZAQO.</h3>
                    <p>
                        ZAQO adalah lembaga amil zakat nasional milik masyarakat Indonesia
                        yang mengelola zakat, infak, sedekah, serta dana kemanusiaan lainnya melalui
                        serangkaian program terintegrasi di bidang pendidikan, kesehatan, ekonomi, dan lingkungan,
                        untuk mewujudkan kebahagiaan masyarakat yang membutuhkan.
                    </p>
                    <div className="footer-contact">
                        <table>
                            <tr>
                                <td><strong>Kantor Pusat:</strong></td>
                                <td>:</td>
                                <td>Jl.Semesta Teknik No.0 Bandung</td>
                            </tr>
                            <tr>
                                <td><strong>Telp:</strong></td>
                                <td>:</td>
                                <td>022-732-3400</td>
                            </tr>
                            <tr>
                                <td><strong>Whatsapp:</strong></td>
                                <td>:</td>
                                <td>0815 7300 1555</td>
                            </tr>
                            <tr>
                                <td><strong>Email:</strong> </td>
                                <td>:</td>
                                <td>zaqoofficial@hotmail.com</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className="footer-nav">
                    <h4>Navigasi</h4>
                    <NavLink to="">Beranda</NavLink>
                    <NavLink to="">Program</NavLink>
                    <NavLink to="">Pembelajaran</NavLink>
                    <NavLink to="">Kalkulator</NavLink>
                    <NavLink to="">Berita</NavLink>
                </div>

                <div className="footer-sosmed">
                    <h4>Social Media</h4>
                    <NavLink to=""><img src={facebook} alt="Facebook" /><h6>@zaqoofficial</h6></NavLink>
                    <NavLink to=""><img src={instagram} alt="Instagram" /><h6>@zaqoofficial</h6></NavLink>
                    <NavLink to=""><img src={youtube} alt="YouTube" /><h6>@zaqoofficial</h6></NavLink>
                </div>
            </div>

            <div className="footer-warning">
                <p>⚠️ Dana yang didonasikan melalui Rumah Zakat bukan bersumber dan bukan untuk tujuan pencucian uang (money laundry), termasuk terorisme maupun tindak kejahatan lainnya.</p>
            </div>

            <div className="footer-bottom">
                <p className="footer-copyright">
                    &copy; Copyright 2025 ZAQO.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
