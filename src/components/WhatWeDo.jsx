import React, { useEffect, useRef } from 'react';
import '../styles/WhatWeDo.css';
import studentIcon from '../assets/one.png'; // Update with real path
import collegeIcon from '../assets/two.png';
import workIcon from '../assets/three.png';
import crystalImg from '../assets/Abstractglass.png'; // Update with real path

const WhatWeDo = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="wwd-wrapper">
      <div className="wwd-container">
        {/* Left Image */}
        <div className="wwd-image">
          <img src={crystalImg} alt="Decorative visual" />
        </div>

        {/* Text and Cards */}
        <div className="wwd-text-section">
          <h2 className="wwd-heading">What We Do</h2>
          <p className="wwd-description">
          At Lanos, we blend daily live coding classes with a gamified learning system where students earn XP, unlock levels, and gain industry-recognized certifications—all on one platform. Inspired by Solo Leveling, our mission is to make tech education engaging through live mentorship, interactive quests, and a strong community. Designed for School students, college students and working professionals, Lanos offers flexible live sessions, self-paced modules, and a vibrant support network.
          </p>

          <div className="wwd-card-grid">
            <div 
              className="wwd-card" 
              ref={(el) => (cardsRef.current[0] = el)}
            >
              <img src={studentIcon} alt="School Students" />
              <h3>School Students</h3>
              <p>
                Gamified lessons teach fundamentals via daily quests, quizzes, and dungeons—making coding fun and accessible for young learners.
              </p>
            </div>
            <div 
              className="wwd-card" 
              ref={(el) => (cardsRef.current[1] = el)}
            >
              <img src={collegeIcon} alt="College Students" />
              <h3>College Students</h3>
              <p>
                Full stack & DevOps training with real-world projects prepares college students for internships and careers in tech.
              </p>
            </div>
            <div 
              className="wwd-card" 
              ref={(el) => (cardsRef.current[2] = el)}
            >
              <img src={workIcon} alt="Working Professionals" />
              <h3>Working Professionals</h3>
              <p>
                Upskilling tracks with 1:1 mentorship and projects help busy pros advance their careers efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
