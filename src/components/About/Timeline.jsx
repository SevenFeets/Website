function Timeline() {
    const experiences = [
        {
            date: "2023 - Present",
            title: "Software Developer",
            company: "Company Name",
            description: "Working on full-stack development using React and Node.js"
        },
        {
            date: "2021 - 2023",
            title: "Frontend Developer",
            company: "Previous Company",
            description: "Developed responsive web applications using modern JavaScript frameworks"
        },
        {
            date: "2019 - 2021",
            title: "Junior Developer",
            company: "First Company",
            description: "Started career with C++ development and computer graphics"
        }
    ];

    return (
        <div className="timeline-container">
            {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-date">{exp.date}</div>
                        <h3 className="timeline-title">{exp.title}</h3>
                        <h4 className="timeline-company">{exp.company}</h4>
                        <p className="timeline-description">{exp.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Timeline; 