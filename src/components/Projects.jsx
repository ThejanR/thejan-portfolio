const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-heading fade-up">
                    <h2 className="section-title">Featured Work</h2>
                    <div className="title-line"></div>
                </div>
                
                <div className="projects-grid">
                    {/* Project 1 */}
                    <div className="glass-card project-card fade-up">
                        <div className="project-header">
                            <i className="fas fa-mug-hot project-icon"></i>
                            <div className="project-links">
                                <a href="https://github.com/ThejanR" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository"><i className="fab fa-github"></i></a>
                                <a href="#" aria-label="Live Demo"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3>Coffee Shop Platform</h3>
                            <p className="description">Dynamic website featuring comprehensive menu management and order processing capabilities.</p>
                            <div className="tech-stack">
                                <span>HTML</span><span>CSS</span><span>PHP</span><span>MySQL</span><span>Laravel</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="glass-card project-card fade-up delay-1">
                        <div className="project-header">
                            <i className="fas fa-mobile-alt project-icon"></i>
                            <div className="project-links">
                                <a href="https://github.com/ThejanR" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3>Coffee Shop Mobile App</h3>
                            <p className="description">Mobile application enabling customer user profiles, seamless ordering, and interactive menu browsing.</p>
                            <div className="tech-stack">
                                <span>Kotlin</span><span>Flutter</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="glass-card project-card fade-up delay-2">
                        <div className="project-header">
                            <i className="fas fa-book project-icon"></i>
                            <div className="project-links">
                                <a href="https://github.com/ThejanR" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3>Library Management System</h3>
                            <p className="description">Robust system designed for tracking book borrowing, managing fines, and maintaining member records.</p>
                            <div className="tech-stack">
                                <span>C#</span><span>MySQL</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="glass-card project-card fade-up delay-3">
                        <div className="project-header">
                            <i className="fas fa-hospital-user project-icon"></i>
                            <div className="project-links">
                                <a href="https://github.com/ThejanR" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3>Hospital Management System</h3>
                            <p className="description">Responsive front-end application built for streamlining appointment scheduling and hospital product management.</p>
                            <div className="tech-stack">
                                <span>HTML</span><span>CSS</span><span>JavaScript</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
