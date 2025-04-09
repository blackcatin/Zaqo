import {useState} from 'react';
import Hero from '../components/Hero';
import './../styles/home.css';

function Home() {
	const [currentPage, setCurrentPage] = useState('hero');

	return <Hero />;
}

export default Home;
