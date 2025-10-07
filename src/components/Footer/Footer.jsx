import './Footer.css';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <section className="section__footer">
            <footer className="footer">
                <p>&copy; 2024 Yaroslav Lenerman. All rights reserved.</p>
            </footer>
            <div className="footer__btn">
                <button onClick={scrollToTop} className="btn">Back to Top</button>
            </div>
        </section>
    );
}

export default Footer;