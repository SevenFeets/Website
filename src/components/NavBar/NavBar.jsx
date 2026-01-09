import { useState } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // Close mobile menu if open
        setMenuOpen(false);
    };

    const downloadCV = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = '/cv/Yaroslav Lenerman cv full stack oriented.pdf';
        link.download = 'Yaroslav_Lenerman_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <nav className="navbar">
            {/* Logo Section */}
            <div className="logo">
                <a href="#home" onClick={scrollToTop}>Lenerman Yaroslav</a>
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

            {/* CV Download Button */}
            <button 
                className="cv-button" 
                onClick={downloadCV}
                aria-label="Download CV"
            >
                <span className="cv-button-text">CV</span>
            </button>

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
                    <a href="#home" className="nav-link" onClick={scrollToTop}>
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
