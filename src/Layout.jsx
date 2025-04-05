import React, {useState} from 'react';
import './styles/navbar.css';
import infaqImage from './assets/infaq.jpg';
import menuIcon from './assets/menu-w.png';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav>
			<div className="container-navbar">
				<a href="index.html">
					<h2>ZAQO.</h2>
				</a>
				<a href="" className="navbar-logo">
					<img src={infaqImage} alt="cek" />
				</a>
				<a className="a" href="index.html">
					Beranda
				</a>
				<a className="b" href="calculator.html">
					Kalkulator
				</a>
				<a className="c" href="modul.html">
					Pembelajaran
				</a>
			</div>
			<div className="navbar-menu">
				<a className="menu-button" onClick={() => setIsOpen(!isOpen)}>
					<img src={menuIcon} alt="menu-icon" className="menu-icon" />
				</a>
			</div>
			<div className={`side-navbar ${isOpen ? 'open' : ''}`}>
				<div className="navbar-nav">
					<a href="index.html">
						<h2>ZAQO.</h2>
					</a>
					<a href="" className="navbar-nav-logo">
						<img src={infaqImage} alt="cek" />
					</a>
					<a className="a" href="index.html">
						Beranda
					</a>
					<a className="b" href="calculator.html">
						Kalkulator
					</a>
					<a className="c" href="modul.html">
						Pembelajaran
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
