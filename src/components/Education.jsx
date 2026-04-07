const Education = () => {
    return (
        <section id="education" className="section">
            <div className="container">
                <div className="grid-2-col">
                    {/* Education */}
                    <div className="timeline-container fade-up">
                        <div className="section-heading">
                            <h2 className="section-title"><i className="fas fa-graduation-cap"></i> Education</h2>
                        </div>
                        <div className="glass-card timeline-card">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <span className="timeline-date">2024 &ndash; Present</span>
                                <h4>BSc (Hons) Computer Science</h4>
                                <p>Staffordshire University</p>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <span className="timeline-date">2023 &ndash; 2024</span>
                                <h4>Foundation in Computing</h4>
                                <p>ACBT Campus</p>
                            </div>
                        </div>
                    </div>

                    {/* Activities */}
                    <div className="timeline-container fade-up delay-2">
                        <div className="section-heading">
                            <h2 className="section-title"><i className="fas fa-chart-line"></i> Activities</h2>
                        </div>
                        <div className="glass-card timeline-card">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <h4>APIIT Computer Society</h4>
                                <p>Active member engaged in Internet of Things (IoT) and various innovation projects.</p>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <h4>School Cadet Platoon</h4>
                                <p>Served as a dedicated team leader and represented at the national level.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
