import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const textArray = ["Software Developer", "Web Developer", "Tech Enthusiast"];
  
  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let timerId;

    const type = () => {
      const currentText = textArray[textIndex];
      
      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }
      
      setText(currentText.substring(0, charIndex));
      
      typingSpeed = isDeleting ? 50 : 100;
      
      if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2000; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typingSpeed = 500; // Pause before typing next word
      }
      
      timerId = setTimeout(type, typingSpeed);
    };
    
    timerId = setTimeout(type, 1000); // Initial delay
    
    return () => clearTimeout(timerId); // Cleanup
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <span className="greeting fade-up">Hello World, I'm</span>
        <h1 className="title fade-up delay-1">Thejan Rathnayake</h1>
        <h2 className="role fade-up delay-2">
          Aspiring <span className="highlight typing-text">{text}</span><span className="cursor">|</span>
        </h2>
        <p className="intro fade-up delay-3">
          Passionate about building scalable software solutions using modern technologies. 
          Constantly learning and driven by the thrill of solving complex problems.
        </p>
        <div className="hero-btns fade-up delay-4">
          <a href="#projects" className="btn btn-primary">
            View Projects <i className="fas fa-arrow-right"></i>
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
          <a href="/CV.pdf" target="_blank" className="btn btn-secondary">
            <i className="fas fa-download" style={{ marginRight: '5px' }}></i> Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
