import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../styles/hero.css';
import newsData from '../data/newsData';

function slugify(str) {
	return str.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
}

function Hero() {
	const featuredNews = newsData.slice(0, 5);
	const [current, setCurrent] = useState(0);
	const angle = 360 / featuredNews.length;
	const navigate = useNavigate();

	const handlePrev = () => {
		setCurrent(prev => (prev - 1 + featuredNews.length) % featuredNews.length);
	};

	const handleNext = () => {
		setCurrent(prev => (prev + 1) % featuredNews.length);
	};

	return (
		<div className="hero-container">
			<div className="hero-main">
				<h1>ZAQO.</h1>
				<h3>
					ZAQO adalah lembaga amil zakat nasional milik masyarakat Indonesia
					yang mengelola zakat, infak, sedekah, serta dana kemanusiaan lainnya melalui
					serangkaian program terintegrasi di bidang pendidikan, kesehatan, ekonomi, dan lingkungan,
					untuk mewujudkan kebahagiaan masyarakat yang membutuhkan.
				</h3>
				<div className="hero-button">
					<button className="kalkulator-button"><Link to="/calculator">KALKULATOR</Link></button>
					<button className="pembelajaran-button"><Link to="/modul">PEMBELAJARAN</Link></button>
				</div>
			</div>
			<div className="carousel-wrapper">
				<div
					className="carousel"
					style={{ transform: `translateZ(-300px) rotateY(-${current * angle}deg)` }}
				>
					{featuredNews.map((news, i) => (
						<div
							key={news.id ?? i}
							className="carousel-card"
							style={{ transform: `rotateY(${i * angle}deg) translateZ(240px)` }}
							onClick={() => navigate(`/news/${slugify(news.title)}`)}
						>
							<h2>{news.tag}</h2>
							<img className="carousel-image" src={news.image} alt={news.title} />
						</div>
					))}
				</div>
				<div className="controls">
					<button onClick={handlePrev}>⟨</button>
					<button onClick={handleNext}>⟩</button>
				</div>
			</div>
		</div>
	);
}
export default Hero;
