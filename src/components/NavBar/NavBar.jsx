import { useState } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            {/* Logo Section */}
            <div className="logo">
                <a href="#home">Lenerman Yaroslav</a>
            </div>

            {/* Social Media Icons */}
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/lenerman-yaroslav/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#f39c12] transition-colors duration-300">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/SevenFeets" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#f39c12] transition-colors duration-300">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>

            {/* Hamburger Button */}
            <button
                className="hamburger"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                onClick={toggleMenu}
            >
                ☰
            </button>

            {/* Navigation Links */}
            <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
                <li>
                    <a href="#home" className="nav-link">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" className="nav-link">
                        About
                    </a>
                </li>
                <li>
                    <a href="#projects" className="nav-link">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" className="nav-link">
                        Contact
                    </a>
                </li>

            </ul>


        </nav>
    );
}

export default Navbar;
