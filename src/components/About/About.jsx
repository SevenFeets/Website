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
                                <li>Assembly</li>
                                <li>Parallel Programming</li>
                                <li>Computer Graphics</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3>Frontend Development</h3>
                            <ul>
                                <li>React</li>
                                <li>TypeScript</li>
                                <li>JavaScript</li>
                                <li>Vite</li>
                                <li>Tailwind CSS</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3>Backend Development</h3>
                            <ul>
                                <li>FastAPI</li>
                                <li>Nest.js</li>
                                <li>Node.js</li>
                                <li>Python</li>
                                <li>RESTful API</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3>Databases</h3>
                            <ul>
                                <li>PostgreSQL</li>
                                <li>MySQL</li>
                                <li>Redis</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3>Infrastructure & DevOps</h3>
                            <ul>
                                <li>Docker</li>
                                <li>Terraform</li>
                                <li>GitHub Actions</li>
                                <li>Vercel</li>
                                <li>Railway</li>
                                <li>Firebase</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3>Embedded Systems & Hardware</h3>
                            <ul>
                                <li>Jetson Nano / Raspberry Pi</li>
                                <li>Camera Modules</li>
                                <li>GPS L76X Modules</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3>Machine Learning & AI</h3>
                            <ul>
                                <li>YOLO ML</li>
                                <li>Computer Vision</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about;