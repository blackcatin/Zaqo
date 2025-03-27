import './styles/navbar.css';

function Navbar() {
	return (
		<nav>
			<div className="container-navbar">
				<img className="navbar-icon" src="assets" alt="" />
				<h1>LOGO</h1>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
