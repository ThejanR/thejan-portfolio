import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active nav link on scroll
      const sections = document.querySelectorAll('section');
      let current = '';
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          current = section.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar" style={{
        background: scrolled ? 'rgba(10, 14, 23, 0.95)' : 'rgba(10, 14, 23, 0.8)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none'
      }}>
        <div className="nav-content container">
          <a href="#" className="logo">TR<span>.</span></a>
          <div className="nav-links">
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
            <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
            <a href="#education" className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}>Education</a>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
          </div>
          <button className="mobile-menu-btn" aria-label="Toggle Navigation" onClick={toggleMobileMenu}>
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="#about" className="mobile-link" onClick={closeMobileMenu}>About</a>
        <a href="#skills" className="mobile-link" onClick={closeMobileMenu}>Skills</a>
        <a href="#projects" className="mobile-link" onClick={closeMobileMenu}>Projects</a>
        <a href="#education" className="mobile-link" onClick={closeMobileMenu}>Education</a>
        <a href="#contact" className="mobile-link" onClick={closeMobileMenu}>Contact</a>
      </div>
    </>
  );
};

export default Navbar;
