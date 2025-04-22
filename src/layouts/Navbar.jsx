import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './../styles/navbar.css';
import infaqImage from './../assets/infaq.jpg';
import menuIcon from './../assets/menu-w.png';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav>
			<div className="container-navbar">
				<NavLink to="/" className="zaqo-title">
					ZAQO.
				</NavLink>
				<NavLink to="/" className="navbar-logo">
					<img src={infaqImage} alt="cek" />
				</NavLink>
				<NavLink className={({ isActive }) => (isActive ? 'a active' : 'a')} to="/">
					Beranda
				</NavLink>
				<NavLink className={({ isActive }) => (isActive ? 'b active' : 'b')} to="/calculator">
					Kalkulator
				</NavLink>
				<NavLink className={({ isActive }) => (isActive ? 'c active' : 'c')} to="/modul">
					Pembelajaran
				</NavLink>
				<NavLink className={({ isActive }) => (isActive ? 'd active' : 'c')} to="/newsportal">
					Berita
				</NavLink>
			</div>

			<div className="navbar-menu">
				<button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
					<img src={menuIcon} alt="menu-icon" className="menu-icon" />
				</button>
			</div>

			<div className={`side-navbar ${isOpen ? 'open' : ''}`}>
				<div className="navbar-nav">
					<NavLink to="/">
						<h2>ZAQO.</h2>
					</NavLink>
					<NavLink to="/" className="navbar-nav-logo">
						<img src={infaqImage} alt="cek" />
					</NavLink>
					<NavLink className="a" to="/">
						Beranda
					</NavLink>
					<NavLink className="b" to="/calculator">
						Kalkulator
					</NavLink>
					<NavLink className="c" to="/modul">
						Pembelajaran
					</NavLink>
					<NavLink className="c" to="/newsportal">
						Berita
					</NavLink>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
