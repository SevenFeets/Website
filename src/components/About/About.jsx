import './About.css'
import Timeline from './Timeline'

function about() {
    return (
        <div className="about__wrapper">
            <div className="about__section" id='about'>
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>
                        Hello! I&apos;m a versatile developer with a strong foundation in both low-level and high-level programming.
                        My journey in programming started with parallel programming in C, and I&apos;ve since expanded my expertise
                        across various domains including web development, machine learning, and game development.
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