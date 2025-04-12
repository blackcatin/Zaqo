import { useState, useEffect } from 'react';
import './../styles/news.css';
import programBansos from './../assets/program-bansos.jpg';
import programBeasiswa from './../assets/program-beasiswa.jpg';
import programBencana from './../assets/program-bencana.jpg';
import programBencana2 from './../assets/program-bencana2.jpg';
import programKesehatan from './../assets/program-kesehatan.jpg';

const newsData = [
    {
        title: "Gempa 6,7 SR Di Bali, Para Korban Mendapat Bantuan Dari Zakat",
        description: "Program bantuan zakat untuk korban gempa bumi mulai disalurkan ke titik-titik terdampak...",
        image: programBencana2,
        tag: "Bencana",
    },
    {
        title: "Beasiswa Yatim Piatu 2024 Resmi Dibuka",
        description: "Pendaftaran beasiswa kini tersedia untuk siswa SD-SMA yang kehilangan orang tua akibat pandemi...",
        image: programBeasiswa,
        tag: "Pendidikan",
    },
    {
        title: "Distribusi Bansos Ramadhan Capai 70%",
        description: "Kementerian menyebutkan 70% bantuan sosial telah tersalurkan ke daerah-daerah pelosok...",
        image: programBansos,
        tag: "Bansos",
    },
    {
        title: "Layanan Kesehatan Gratis Bagi Lansia",
        description: "Program layanan kesehatan gratis mulai berjalan di 5 provinsi dengan fasilitas homecare...",
        image: programKesehatan,
        tag: "Kesehatan",
    },
];

function News() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % newsData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const headline = newsData[currentIndex];

    return (
        <div className="news-container">
            <h2>Zaqo News</h2>
            <div className="news-box">
                <div className="headline-container">
                    <div className="headline-title">
                        <span className='tag'>{headline.tag}</span>
                        <h3>{headline.title}</h3>
                        <p>{headline.description}</p>
                    </div>
                    <img src={headline.image} alt={headline.title} />
                </div>
                <div className="news-cards">
                    <h4>TERPOPULER</h4>
                    <ul>
                        {newsData.map((news, idx) => (
                            <li key={idx} className='news-card'>
                                <span className='index'>{String(idx + 1).padStart(2, '0')}</span>
                                <div>
                                    <p className='title'>{news.title}</p>
                                    <p className='tag'>{news.tag}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default News;
