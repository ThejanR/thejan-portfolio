const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="section-heading fade-up">
                    <h2 className="section-title">My Technical Arsenal</h2>
                    <div className="title-line"></div>
                </div>
                
                <div className="skills-grid">
                    {/* Category 1 */}
                    <div className="glass-card skill-category fade-up">
                        <div className="skill-category-header">
                            <i className="fas fa-code"></i>
                            <h3>Programming</h3>
                        </div>
                        <div className="skill-tags">
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">C#</span>
                            <span className="skill-tag">Java</span>
                            <span className="skill-tag">JavaScript</span>
                            <span className="skill-tag">PHP</span>
                            <span className="skill-tag">Kotlin</span>
                            <span className="skill-tag">Dart</span>
                        </div>
                    </div>
                    {/* Category 2 */}
                    <div className="glass-card skill-category fade-up delay-1">
                        <div className="skill-category-header">
                            <i className="fas fa-laptop-code"></i>
                            <h3>Web & Frameworks</h3>
                        </div>
                        <div className="skill-tags">
                            <span className="skill-tag">HTML</span>
                            <span className="skill-tag">CSS</span>
                            <span className="skill-tag">Flutter</span>
                            <span className="skill-tag">Laravel</span>
                        </div>
                    </div>
                    {/* Category 3 */}
                    <div className="glass-card skill-category fade-up delay-2">
                        <div className="skill-category-header">
                            <i className="fas fa-database"></i>
                            <h3>Databases</h3>
                        </div>
                        <div className="skill-tags">
                            <span className="skill-tag">MySQL</span>
                            <span className="skill-tag">SQL</span>
                        </div>
                    </div>
                    {/* Category 4 */}
                    <div className="glass-card skill-category fade-up delay-3">
                        <div className="skill-category-header">
                            <i className="fas fa-tools"></i>
                            <h3>Tools</h3>
                        </div>
                        <div className="skill-tags">
                            <span className="skill-tag">GitHub</span>
                            <span className="skill-tag">VS Code</span>
                            <span className="skill-tag">Visual Studio</span>
                            <span className="skill-tag">Android Studio</span>
                            <span className="skill-tag">Figma</span>
                            <span className="skill-tag">Postman</span>
                            <span className="skill-tag">AWS</span>
                        </div>
                    </div>
                    {/* Category 5 */}
                    <div className="glass-card skill-category fade-up delay-4">
                        <div className="skill-category-header">
                            <i className="fas fa-brain"></i>
                            <h3>Soft Skills</h3>
                        </div>
                        <div className="skill-tags alt-tags">
                            <span className="skill-tag">Problem Solving</span>
                            <span className="skill-tag">Teamwork</span>
                            <span className="skill-tag">Communication</span>
                            <span className="skill-tag">Time Management</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
