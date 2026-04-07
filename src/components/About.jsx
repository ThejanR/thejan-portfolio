const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-heading fade-up">
                    <h2 className="section-title">About Me</h2>
                    <div className="title-line"></div>
                </div>
                
                <div className="glass-card about-card fade-up">
                    <div className="about-icon">
                        <i className="fas fa-user-astronaut"></i>
                    </div>
                    <div className="about-text">
                        <p>
                            I am an aspiring software developer with a solid background in database systems, programming, and problem solving. 
                            I am highly competent in languages such as C#, Java, Python, and SQL, and I hold a strong interest in diving deep into web, mobile, and backend development.
                        </p>
                        <div className="location-badge mt-4">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Based in <strong>Kandy, Sri Lanka</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
