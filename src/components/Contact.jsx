const Contact = () => {
    return (
        <>
            <section id="contact" className="section">
                <div className="container">
                    <div className="section-heading fade-up text-center">
                        <h2 className="section-title">Get In Touch</h2>
                        <div className="title-line centered-line"></div>
                        <p className="contact-subtitle mt-4">Currently seeking opportunities. My inbox is always open!</p>
                    </div>
                    
                    <div className="glass-card contact-card fade-up">
                        <div className="contact-grid">
                            <a href="tel:+94764103544" className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="contact-info">
                                    <span className="label">Phone</span>
                                    <span className="value">+94 76 410 3544</span>
                                </div>
                            </a>
                            
                            <a href="mailto:dilankathejan@gmail.com" className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-info">
                                    <span className="label">Email</span>
                                    <span className="value">dilankathejan@gmail.com</span>
                                </div>
                            </a>

                            <a href="https://github.com/ThejanR" target="_blank" rel="noopener noreferrer" className="contact-item">
                                <div className="contact-icon">
                                    <i className="fab fa-github"></i>
                                </div>
                                <div className="contact-info">
                                    <span className="label">GitHub</span>
                                    <span className="value">github.com/ThejanR</span>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/thejan-rathnayake-/" target="_blank" rel="noopener noreferrer" className="contact-item">
                                <div className="contact-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <div className="contact-info">
                                    <span className="label">LinkedIn</span>
                                    <span className="value">thejan-rathnayake-</span>
                                </div>
                            </a>
                            
                            <div className="contact-item" style={{ cursor: 'default' }}>
                                <div className="contact-icon">
                                    <i className="fas fa-map-pin"></i>
                                </div>
                                <div className="contact-info">
                                    <span className="label">Location</span>
                                    <span className="value">Kandy, Sri Lanka</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="contact-cta">
                            <a href="mailto:dilankathejan@gmail.com" className="btn btn-primary pulse-btn">Say Hello <i className="fas fa-paper-plane"></i></a>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <div className="footer-content">
                        <a href="#" className="logo">TR<span>.</span></a>
                        <p>Designed & Developed by <strong>Thejan Rathnayake</strong></p>
                        <div className="social-links">
                            <a href="mailto:dilankathejan@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
                            <a href="https://github.com/ThejanR" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/thejan-rathnayake-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>&copy; 2026 Thejan Rathnayake. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Contact;
