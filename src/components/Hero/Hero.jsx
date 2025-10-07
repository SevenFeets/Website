import './Hero.css'

function hero() {
    return (
        <section className="hero-section">
            <div className="hero-wrapper">
                <div className="hero-picture">
                    <div className="profile-container">
                        <img src="public\img\my profile.png.jpg" alt="profile picture" />
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
                        Hello, my name is Yaroslav, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, delectus id molestiae, veniam maxime quaerat odit tempore corrupti quis tempora praesentium beatae reprehenderit repudiandae, illum facere quam impedit voluptatibus provident?
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