import { useParams, useNavigate } from 'react-router-dom';
import newsData from '../data/newsData';
import './../styles/newsdetail.css'
import Footer from '../layouts/Footer';

function slugify(str) {
    return str.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
}

function NewsDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const news = newsData.find(n => slugify(n.title) === slug);

    if (!news) {
        return <div>Berita Tidak Ditemukan</div>;
    }

    return (
        <>
            <div className="news-detail">
                <button className='news-detail-btn' onClick={() => navigate(-1)} style={{ marginBottom: '1rem' }}>
                    ← Kembali
                </button>
                <h2>{news.title}</h2>
                <img src={news.image} alt={news.title} style={{ maxWidth: '100%', borderRadius: '8px' }} />
                <p><strong>Tag:</strong> {news.tag}</p>
                <p>{news.description}</p>
                <p>{news.fullDescription}</p>
            </div>
            <Footer />
        </>
    );
}

export default NewsDetail;
