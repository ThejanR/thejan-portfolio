import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // Intersection Observer for Fade-Up Animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const fadeElements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    }
  }, []);

  return (
    <>
      {/* Background Elements for aesthetics */}
      <div className="bg-mesh"></div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  )
}

export default App
