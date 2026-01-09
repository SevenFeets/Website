function Timeline() {
    const experiences = [
        {
            date: "2025 - Present",
            title: "Looking for a job position",
            company: "",
            description: "Creating meaningful and complex projects.",
            isSpecial: true
        },
        {
            date: "2020 - 2025",
            title: "Computer Science Degree",
            company: "Afeka college of engineering",
            description: "Created the most complex and POC military project using hardware and software"
        },
        {
            date: "2013 - 2016",
            title: "IDF navi secret service",
            company: "",
            description: "Developed Technology environment using C, python and assembly for control systems."
        },
        {
            date: "2011 - 2013",
            title: "Practical electronics engineer",
            company: "",
            description: "Created a basketball project using board wiring and c code."
        }
    ];

    return (
        <div className="timeline-container">
            {experiences.map((exp, index) => (
                <div key={index} className={`timeline-item ${exp.isSpecial ? 'timeline-item-special' : ''}`}>
                    <div className={`timeline-content ${exp.isSpecial ? 'timeline-content-special' : ''}`}>
                        <div className="timeline-date">{exp.date}</div>
                        <h3 className="timeline-title">{exp.title}</h3>
                        {exp.company && <h4 className="timeline-company">{exp.company}</h4>}
                        <p className="timeline-description">{exp.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Timeline; 