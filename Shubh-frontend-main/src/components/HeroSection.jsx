import React from 'react';
import "../styles/Herosection.css";
import Phool from"../assets/phool.png";

const HeroSection = () => {
  return (
    <section className="hero" role="banner" aria-label="Hero Section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering Youth with <span className="gradient">Future-Ready</span> Tech Skills
          </h1>
          <p className="hero-description">
            Join Lanos Tech Educations — Learn full-stack web development, Game Development, Cyber-Security, Artificial Intelligence & Machine Learning, AutoCAD and more with our eco-system of <br/><span className="gradient-animate">Training , Internship and Placement</span>.
          </p>

          <div className="hero-actions">
            <button className="scholarship-button" aria-label="Apply for Scholarship Exam">
             Ask Your First Question
            </button>
            <button className="explore-button" aria-label="Explore Courses">
              Explore Courses 📘
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <img src={Phool} alt="Decorative Flower" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
