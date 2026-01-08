import './Hero.css'

function hero() {
    // Use the same pattern as project images - direct path without encoding
    // Project images work with spaces, so this should work too
    const profileImageSrc = '/img/my profile.png.jpg';

    return (
        <section className="hero-section">
            <div className="hero-wrapper">
                <div className="hero-picture">
                    <div className="profile-container">
                        <img 
                            src={profileImageSrc} 
                            alt="profile picture"
                            onError={(e) => {
                                console.error('Profile image failed to load. Trying alternatives...');
                                const currentSrc = e.target.src;
                                // Try different encoding variations
                                if (currentSrc.includes(' ')) {
                                    e.target.src = currentSrc.replace(/ /g, '%20');
                                } else if (!currentSrc.includes('%20')) {
                                    e.target.src = '/img/my%20profile.png.jpg';
                                } else {
                                    // Last resort: try without the .png part
                                    e.target.src = '/img/my%20profile.jpg';
                                }
                            }}
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