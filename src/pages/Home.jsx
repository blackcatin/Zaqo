import {useState} from 'react';
import Hero from '../components/Hero';
import './../styles/home.css';
import Program from '../components/Program';

function Home() {
	const [currentPage, setCurrentPage] = useState('hero');

	return (
		<>
			<Hero />;
			<Program />;
		</>
	)
}

export default Home;
