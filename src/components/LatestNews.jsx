import { useRef } from 'react';
import './../styles/latestnews.css';
import newsData from '../data/newsData';
import NewsCard from './NewsCard';

function LatestNews() {
    const scrollAmount = 260 + 16;

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        if (scrollLeft === 0) {
            // ke ujung kanan
            scrollRef.current.scrollTo({
                left: scrollWidth,
                behavior: 'smooth',
            });
        } else {
            scrollRef.current.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - scrollAmount) {
            // looping
            scrollRef.current.scrollTo({
                left: 0,
                behavior: 'smooth',
            });
        } else {
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }

    }

    return (
        <div className="latest-news-container">
            <div className="latest-news-box">
                <h4>Berita Terbaru</h4>
                <ul className="latest-news-scroll" ref={scrollRef}>
                    {newsData.map((news, idx) => (
                        <NewsCard
                            key={idx}
                            index={idx}
                            title={news.title}
                            tag={news.tag}
                            image={news.image}
                        />
                    ))}
                </ul>
                <div className="scroll-buttons">
                    <button onClick={scrollLeft} className="scroll-btn">⟨</button>
                    <button onClick={scrollRight} className="scroll-btn">⟩</button>
                </div>
            </div>
        </div>
    );
}

export default LatestNews;
