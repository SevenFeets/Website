import ProjectCard from "./ProjectCard";
import './Projects.css'

function project() {

    const projects = [
        {
            title: "CineMate - Movie Recommendation",
            description: "Web application that provides movie recommendations to users based on their ratings on movies.",
            image: "/path/to/your/image.jpg",
            shadowColor: "rgba(65, 88, 208, 0.3)",
            technologies: ["React", "Node", "Machine Learning", "TypeScript", "MongoDB", "Docker", "Flask", "Python", "Express.js", "Tailwind", "Next.js"]
        },
        {
            title: "Live Chat Web App",
            description: "A real-time communication capabilities for users within a web interface.",
            image: "/path/to/your/image.jpg",
            shadowColor: "rgba(200, 80, 192, 0.3)",
            technologies: ["React", "Node", "JS", "MongoDB", "Socket.IO", "Express.js", "Tailwind", "Vite"]
        },
        {
            title: "Game Development Project",
            description: "Description of project 3 goes here.",
            image: "/path/to/your/image.jpg",
            shadowColor: "rgba(255, 204, 112, 0.3)",
            technologies: ["Unity", "C#", "3D Modeling", "Game Design"]
        }
    ];

    return (
        <div className="project__wrapper" >
            <section id="projects">
                <h2 className="projects-title">
                    My Projects
                </h2>

                <div className="project__grid" >
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default project;