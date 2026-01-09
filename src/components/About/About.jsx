import './About.css'
import Timeline from './Timeline'

function about() {
    return (
        <div className="about__wrapper">
            <div className="about__section" id='about'>
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>
                    I am a Backend Developer with a "mechanical sympathy" for the code I write.

                    Starting my career in parallel programming with C, I learned early on how to squeeze every bit of performance out of a system. This technical curiosity led me to explore Machine Learning, Game Development, and Web Architecture. <br />

                    Having worked across the entire stack and various domains, I bring a unique perspective to backend engineering: I build with the precision of a low-level coder and the agility of a modern web developer.
                    </p>

                    <Timeline />

                    <div className="skills-container">
                        <div className="skill-category">
                            <h3>Low-Level Programming</h3>
                            <ul>
                                <li>C/C++</li>
                                <li>Parallel Programming</li>
                                <li>Computer Graphics</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3>Frontend Development</h3>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3>Backend Development</h3>
                            <ul>
                                <li>Node.js</li>
                                <li>Python</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3>Specialized Domains</h3>
                            <ul>
                                <li>Machine Learning</li>
                                <li>Unity Game Development</li>
                                <li>Computer Graphics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about;