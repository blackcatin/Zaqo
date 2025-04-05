import './styles/navbar.css';
import infaqImage from './assets/infaq.jpg';

function Navbar() {
	return (
		<nav>
			<div className="container-navbar">
				<a href="index.html">
					<h2>ZAQO.</h2>
				</a>
				<a href="">
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
				<div className="navbar-menu">
					<a href="#" id="menu-icon">
						<img src="images/menu-w.png" alt="menu-icon" />
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
