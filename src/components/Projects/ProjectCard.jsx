function ProjectCard({ title, description, image, technologies, shadowColor }) {
    return (
        <div
            className="project__card"
            style={{
                boxShadow: `0 4px 6px ${shadowColor || 'rgba(0, 255, 0, 0.2)'}`
            }}
        >
            <div className="project__image">
                <img src={image} alt={title} />
            </div>
            <div className="project__content">
                <h3 className="project__title">{title}</h3>
                <p className="project__description">{description}</p>
                <div className="project__tech-stack">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>
                <button className="project__read-more">Read more →</button>
            </div>
        </div>
    );
}

export default ProjectCard;