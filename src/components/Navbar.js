import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>LOGO</h3>
			<div>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/page">Page</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<span>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
			</span>
			</div>
		</header>
	);
}

export default Navbar