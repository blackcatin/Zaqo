import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './../styles/program.css';
import programBansos from './../assets/program-bansos.jpg';
import programBeasiswa from './../assets/program-beasiswa.jpg';
import programBencana from './../assets/program-bencana.jpg';
import programKesehatan from './../assets/program-kesehatan.jpg';

function Program() {
    const [currentPage] = useState("program");
    const navigate = useNavigate();

    return (
        <div className="program-container">

            {currentPage === "program" && (
                <>
                    <h2>Program Kami</h2>
                    <p>Penasaran kemana zakat ini akan disalurkan? Yuk cek program-program kami berikut!</p>

                    <div className="program-list">
                        <div className="program-card">
                            <h3>Program Bantuan Sosial</h3>
                            <img src={programBansos} alt="" />
                            <button onClick={() => navigate(`/news/program-bantuan-sosial-untuk-masyarakat-kurang-mampu`)} className="btn" >Lihat Program</button>
                        </div>

                        <div className="program-card">
                            <h3>Program Bantuan Bencana</h3>
                            <img src={programBencana} alt="" />
                            <button onClick={() => navigate(`/news/program-bantuan-bencana`)} className="btn">Lihat Program</button>
                        </div>

                        <div className="program-card">
                            <h3>Program Bantuan Kesehatan</h3>
                            <img src={programKesehatan} alt="" />
                            <button onClick={() => navigate(`/news/program-bantuan-kesehatan-untuk-desa-pelosok`)} className="btn">Lihat Program</button>
                        </div>

                        <div className="program-card">
                            <h3>Program Bantuan Beasiswa</h3>
                            <img src={programBeasiswa} alt="" />
                            <button onClick={() => navigate(`/news/program-bantuan-beasiswa-untuk-anak-anak-yatim-piatu`)} className="btn">Lihat Program</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Program;
