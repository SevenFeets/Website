import { useState, useEffect } from 'react';
import ProjectCard from "./ProjectCard";
import './Projects.css'

// GitHub username - can be set via environment variable or directly here
// To use environment variable, create a .env file with: VITE_GITHUB_USERNAME=yourusername
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'SevenFeets';

// Color palette for project cards
const shadowColors = [
    "rgba(65, 88, 208, 0.3)",
    "rgba(200, 80, 192, 0.3)",
    "rgba(255, 204, 112, 0.3)",
    "rgba(0, 255, 150, 0.3)",
    "rgba(255, 100, 100, 0.3)",
    "rgba(100, 200, 255, 0.3)",
    "rgba(255, 150, 0, 0.3)",
    "rgba(150, 100, 255, 0.3)"
];

// Custom images for specific repositories
// Map repository names (as they appear on GitHub) to custom image paths
// IMPORTANT: Use the exact repository name from GitHub, not the formatted title
const customImages = {
    'ARCIS-ML': '/img/ARCIS_logo.jpg',
    'credit-card-fraud-detection': '/img/creditcard.jpg',
    'AI_Packman': '/img/packman.jpg',
    'air-line-manager': '/img/Airline manager.jpg',
    'BusinessManager': '/img/businessManager.jpg',
    // Note: clinic_multi_tennat image not found in public/img folder
    // Add more custom images here as needed
    // 'repository-name': '/img/custom-image.jpg',
};

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch repositories
                const reposResponse = await fetch(
                    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
                );

                if (!reposResponse.ok) {
                    throw new Error(`Failed to fetch repositories: ${reposResponse.statusText}`);
                }

                const repos = await reposResponse.json();

                // Format project title - handle underscores, hyphens, and camelCase
                const formatTitle = (name) => {
                    // Replace underscores and hyphens with spaces
                    let formatted = name.replace(/[_-]/g, ' ');
                    // Handle camelCase by adding spaces before capital letters
                    formatted = formatted.replace(/([a-z])([A-Z])/g, '$1 $2');
                    // Capitalize first letter of each word
                    formatted = formatted.replace(/\b\w/g, l => l.toUpperCase());
                    return formatted;
                };

                // Filter out forks, archived repos, and the Website repository (current project)
                const filteredRepos = repos.filter(repo => 
                    !repo.fork && 
                    !repo.archived && 
                    repo.name.toLowerCase() !== 'website'
                );

                // Debug: Log all repository names to help with custom image mapping
                console.log('Available repositories:', filteredRepos.map(repo => repo.name));

                // Fetch languages for each repository
                const projectsWithLanguages = await Promise.all(
                    filteredRepos.map(async (repo, index) => {
                        try {
                            // Fetch languages for this repo
                            const langResponse = await fetch(repo.languages_url);
                            const languages = langResponse.ok ? await langResponse.json() : {};
                            
                            // Get top languages (sorted by bytes)
                            const topLanguages = Object.keys(languages)
                                .sort((a, b) => languages[b] - languages[a])
                                .slice(0, 8); // Limit to top 8 languages

                            // Combine topics and languages for technologies
                            const technologies = [
                                ...(repo.topics || []),
                                ...topLanguages.filter(lang => !repo.topics?.includes(lang))
                            ].slice(0, 10); // Limit to 10 technologies

                            // Generate a shadow color based on index
                            const shadowColor = shadowColors[index % shadowColors.length];

                            // Check for custom image first, then use GitHub social preview
                            const image = customImages[repo.name] || 
                                `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`;
                            
                            // Debug: Log repository name and image path
                            if (customImages[repo.name]) {
                                console.log(`Using custom image for repository "${repo.name}": ${customImages[repo.name]}`);
                            }

                            return {
                                title: formatTitle(repo.name),
                                description: repo.description || 'No description available.',
                                image: image,
                                shadowColor: shadowColor,
                                technologies: technologies.length > 0 ? technologies : ['GitHub'],
                                githubUrl: repo.html_url,
                                homepage: repo.homepage
                            };
                        } catch (err) {
                            console.error(`Error fetching languages for ${repo.name}:`, err);
                            
                            const shadowColor = shadowColors[index % shadowColors.length];
                            // Check for custom image first, then use GitHub social preview
                            const image = customImages[repo.name] || 
                                `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`;
                            
                            // Debug: Log repository name and image path
                            if (customImages[repo.name]) {
                                console.log(`Using custom image for repository "${repo.name}": ${customImages[repo.name]}`);
                            }
                            
                            return {
                                title: formatTitle(repo.name),
                                description: repo.description || 'No description available.',
                                image: image,
                                shadowColor: shadowColors[index % shadowColors.length],
                                technologies: repo.topics?.length > 0 ? repo.topics : ['GitHub'],
                                githubUrl: repo.html_url,
                                homepage: repo.homepage
                            };
                        }
                    })
                );

                setProjects(projectsWithLanguages);
            } catch (err) {
                console.error('Error fetching repositories:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (GITHUB_USERNAME && GITHUB_USERNAME !== 'YOUR_GITHUB_USERNAME') {
            fetchRepositories();
        } else {
            setLoading(false);
            setError('Please set your GitHub username in the Projects.jsx file');
        }
    }, []);

    if (loading) {
        return (
            <div className="project__wrapper">
                <section id="projects">
                    <h2 className="projects-title">My Projects</h2>
                    <div style={{ textAlign: 'center', color: '#fff', padding: '2rem' }}>
                        Loading projects...
                    </div>
                </section>
            </div>
        );
    }

    if (error) {
        return (
            <div className="project__wrapper">
                <section id="projects">
                    <h2 className="projects-title">My Projects</h2>
                    <div style={{ textAlign: 'center', color: '#ff6b6b', padding: '2rem' }}>
                        Error: {error}
                    </div>
                </section>
            </div>
        );
    }

    if (projects.length === 0) {
        return (
            <div className="project__wrapper">
                <section id="projects">
                    <h2 className="projects-title">My Projects</h2>
                    <div style={{ textAlign: 'center', color: '#fff', padding: '2rem' }}>
                        No projects found.
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="project__wrapper">
            <section id="projects">
                <h2 className="projects-title">
                    My Projects
                </h2>

                <div className="project__grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Projects;