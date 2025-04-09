import {Children, useState} from 'react';
import './../styles/hero.css';
// import {TiChevronLeftOutline, TiChevronRighttOutline} from 'https://cdn.skypack.dev/react-icons/ti';

function Hero() {
	const [currentPage, setCurrentPage] = useState('hero');
	const cards = [
		{id: 1, title: 'Card 1', content: 'Ini konten kartu 1'},
		{id: 2, title: 'Card 2', content: 'Ini konten kartu 2'},
		{id: 3, title: 'Card 3', content: 'Ini konten kartu 3'},
		{id: 4, title: 'Card 4', content: 'Ini konten kartu 4'},
		{id: 5, title: 'Card 5', content: 'Ini konten kartu 5'},
	];

	const [current, setCurrent] = useState(0);
	const angle = 360 / cards.length;

	const handlePrev = () => {
		setCurrent(prev => (prev - 1 + cards.length) % cards.length);
	};

	const handleNext = () => {
		setCurrent(prev => (prev + 1) % cards.length);
	};

	return (
		<div className="hero-container">
			<div className="hero-main">
				<h1>ZAQO.</h1>
				<h3>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi facere alias quis, eum
					debitis consequatur pariatur tempore voluptas quam expedita!
				</h3>
				<div className="hero-button">
					<button className="kalkulator-button">Kalkulator</button>
					<button className="pembelajaran-button">Pembelajaran</button>
				</div>
			</div>
			<div className="carousel-wrapper">
				<div
					className="carousel"
					style={{transform: `translateZ(-300px) rotateY(-${current * angle}deg)`}}
				>
					{cards.map((card, i) =>
						<div
							key={card.id}
							className="carousel-card"
							style={{transform: `rotateY(${i * angle}deg) translateZ(300px)`}}
						>
							<h2>
								{card.title}
							</h2>
							<p>
								{card.content}
							</p>
						</div>
					)}
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
