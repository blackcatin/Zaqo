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
				<a class="a" href="index.html">
					Beranda
				</a>
				<a class="b" href="calculator.html">
					Kalkulator
				</a>
				<a class="c" href="modul.html">
					Pembelajaran
				</a>
				<div class="navbar-menu">
					<a href="#" id="menu-icon">
						<img src="images/menu-w.png" alt="menu-icon" />
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
