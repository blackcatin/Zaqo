import { useState } from 'react';
import './../styles/home.css';
import Hero from '../components/Hero';
import Program from '../components/Program';
import Layanan from '../components/Layanan';
import HeadlineNews from '../components/HeadlineNews';
import Footer from '../layouts/Footer';

function Home() {
	const [currentPage, setCurrentPage] = useState('hero');

	return (
		<>
			<Hero />
			<Program />
			<Layanan />
			<HeadlineNews />
			<Footer />
		</>
	)
}

export default Home;
