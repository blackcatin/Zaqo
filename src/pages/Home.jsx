import {useState} from 'react';
import './../styles/home.css';
import Hero from '../components/Hero';
import Program from '../components/Program';
import Layanan from '../components/Layanan';

function Home() {
	const [currentPage, setCurrentPage] = useState('hero');

	return (
		<>
			<Hero />;
			<Program />;
			<Layanan />
		</>
	)
}

export default Home;
