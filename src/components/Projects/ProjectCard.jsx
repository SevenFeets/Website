function ProjectCard({ title, description, image, technologies, shadowColor, githubUrl, homepage }) {
    const handleReadMore = () => {
        // Prefer homepage if available, otherwise use GitHub URL
        const url = homepage || githubUrl;
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div
            className="project__card"
            style={{
                boxShadow: `0 4px 6px ${shadowColor || 'rgba(0, 255, 0, 0.2)'}`
            }}
        >
            <div className="project__image">
                <img src={image} alt={title} onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.target.src = 'https://via.placeholder.com/400x200?text=' + encodeURIComponent(title);
                }} />
            </div>
            <div className="project__content">
                <h3 className="project__title">{title}</h3>
                <p className="project__description">{description}</p>
                <div className="project__tech-stack">
                    {technologies && technologies.length > 0 ? (
                        technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                        ))
                    ) : (
                        <span className="tech-tag">GitHub</span>
                    )}
                </div>
                <button 
                    className="project__read-more" 
                    onClick={handleReadMore}
                    disabled={!githubUrl && !homepage}
                >
                    {homepage ? 'View Project →' : 'View on GitHub →'}
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;