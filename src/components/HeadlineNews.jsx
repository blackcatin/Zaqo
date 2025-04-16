import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './../styles/headlinenews.css';
import newsData from '../data/newsData';

function slugify(str) {
    return str.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
}

function HeadlineNews() {
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
                <Link to={`/news/${slugify(headline.title)}`} className="headline-link">
                    <div className="headline-container">
                        <div className="headline-title">
                            <span className='tag'>{headline.tag}</span>
                            <h3>{headline.title}</h3>
                            <p>{headline.description}</p>
                        </div>
                        <img src={headline.image} alt={headline.title} />
                    </div>
                </Link>
                <div className="popular-news-cards">
                    <h4>TERPOPULER</h4>
                    <ul>
                        {newsData.map((news, idx) => (
                            <Link to={`/news/${slugify(news.title)}`} key={idx}>
                                <li className='popular-news-card'>
                                    <span className='index'>{String(idx + 1).padStart(2, '0')}</span>
                                    <div>
                                        <p className='title'>{news.title}</p>
                                        <p className='tag'>{news.tag}</p>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeadlineNews;
