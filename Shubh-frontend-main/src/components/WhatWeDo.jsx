import React, { useState, useEffect, useRef } from 'react';
import '../styles/WhatWeDo.css';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';
import crystalImg from '../assets/Abstractglass.png';

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [translateY, setTranslateY] = useState(0);
  const [cardsRef, visibleCards] = useStaggeredAnimation(3, 200);
  const [trainingCount, setTrainingCount] = useState(0);
  const [internshipCount, setInternshipCount] = useState(0);
  const [placementCount, setPlacementCount] = useState(0);

  const animateCounter = (target, setter, duration = 2000) => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(target * progress);
      setter(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (visibleCards.has(0)) animateCounter(2700, setTrainingCount);
    if (visibleCards.has(1)) animateCounter(1800, setInternshipCount);
    if (visibleCards.has(2)) animateCounter(20, setPlacementCount);
  }, [visibleCards]);

  // Parallax scroll effect for image
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.min(Math.max((windowHeight - sectionRect.top) / (sectionRect.height + windowHeight), 0), 1);
      const maxTranslate = 300;
      const newTranslateY = maxTranslate * scrollProgress;
      setTranslateY(newTranslateY);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="wwd-wrapper" ref={sectionRef}>
      <div className="wwd-container">
        {/* Left Image */}
        <div
          className="wwd-image fade-in"
          style={{
            position: 'relative',
            left: 0,
            top: 0,
            transform: `translateY(${translateY}px)`,
            transition: 'transform 0.2s linear',
          }}
        >
          <img ref={imageRef} src={crystalImg} alt="Decorative visual" />
        </div>

        {/* Text and Cards */}
        <div className="wwd-text-section fade-in">
          <h2 className="wwd-heading">About Lanos Tech Educations</h2>
          <p className="wwd-description">
          Lanos Tech Educations is the dedicated educational division of LANOS IT SOLUTIONS PRIVATE LIMITED, founded by visionary entrepreneur Mr. Pavan Karoliya. Based in Sagar, Madhya Pradesh, we are not just an institute—we are building a complete tech ecosystem that transforms raw talent into industry-ready professionals.
          <br /><br />
          
          At Lanos, we go beyond traditional teaching. Our approach is rooted in a powerful, student-first model:

          </p>

          <div className="wwd-card-grid" ref={cardsRef}>
            <div className={`wwd-card ${visibleCards.has(0) ? 'fade-in' : ''}`}>
              <h3>T</h3>
              <p>
                Over <span className="counter">{trainingCount}+</span> students from Sagar have successfully completed Training from Lanos
              </p>
            </div>
            <div className={`wwd-card ${visibleCards.has(1) ? 'fade-in' : ''}`}>
              <h3>I</h3>
              <p>
                We've proudly offered internship opportunities to <span className="counter">{internshipCount}+</span> learners
              </p>
            </div>
            <div className={`wwd-card ${visibleCards.has(2) ? 'fade-in' : ''}`}>
              <h3>P</h3>
              <p>
                <span className="counter">{placementCount}+</span> students begin their professional journey through direct placements—an ever-growing number.
              </p>
            </div>
          </div>
          
          <p className="wwd-description">
            Lanos Tech Educations stands as a trusted name in Central India's skill development space, equipping youth with practical, future-ready skills in Full Stack Development, Artificial Intelligence, AutoCAD, Game Development, and more.
            <br /><br />
            We're here to help students imagine, build, and lead with confidence—starting right where they are.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
