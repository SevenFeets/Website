import './Hero.css'

function hero() {
    return (
        <section id="home" className="hero-section">
            <div className="hero-wrapper">
                <div className="hero-picture">
                    <div className="profile-container">
                        <img 
                            src="/img/my-profile.jpg" 
                            alt="profile picture"
                        />
                        <div className="glow-effect"></div>
                    </div>
                    <h2 className="hero-role">
                        Software Developer
                    </h2>
                </div>
                <div className="hero-body">
                    <h1 className="hero-title">
                        Welcome to my<br />portfolio Website
                    </h1>
                    <div className="hero-statement">
                        <span>Hi, I’m Yaroslav. I’m a Backend Developer </span> dedicated to architecting scalable, high-efficiency systems. Beyond writing clean code, I’m driven by a mission to build purposeful technology that solves real-world problems and empowers users.


                    </div>
                    <div className="cta-buttons">
                        <a href="#projects" className="cta-button primary">View Projects</a>
                        <a href="#contact" className="cta-button secondary">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default hero;