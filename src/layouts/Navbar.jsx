import React, {useState} from 'react';
import {Link} from 'react-router-dom'; // WAJIB: ganti <a> ke <Link>
import './../styles/navbar.css';
import infaqImage from './../assets/infaq.jpg';
import menuIcon from './../assets/menu-w.png';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav>
			<div className="container-navbar">
				<Link to="/">
					<h2 className="zaqo-title">ZAQO.</h2>
				</Link>
				<Link to="/" className="navbar-logo">
					<img src={infaqImage} alt="cek" />
				</Link>
				<Link className="a" to="/">
					Beranda
				</Link>
				<Link className="b" to="/calculator">
					Kalkulator
				</Link>
				<Link className="c" to="/modul">
					Pembelajaran
				</Link>
			</div>

			<div className="navbar-menu">
				<button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
					<img src={menuIcon} alt="menu-icon" className="menu-icon" />
				</button>
			</div>

			<div className={`side-navbar ${isOpen ? 'open' : ''}`}>
				<div className="navbar-nav">
					<Link to="/">
						<h2>ZAQO.</h2>
					</Link>
					<Link to="/" className="navbar-nav-logo">
						<img src={infaqImage} alt="cek" />
					</Link>
					<Link className="a" to="/">
						Beranda
					</Link>
					<Link className="b" to="/calculator">
						Kalkulator
					</Link>
					<Link className="c" to="/modul">
						Pembelajaran
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
