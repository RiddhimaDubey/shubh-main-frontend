import React from 'react';
import '../styles/Timeline.css';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import branch from '../assets/branch.png';

const Timeline = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);
  const [stepsRef, visibleSteps] = useStaggeredAnimation(3, 200);

  return (
    <section className="timeline-section" ref={sectionRef}>
      <div className="timeline-container">
        <div className={`timeline-header ${isSectionVisible ? 'fade-in' : ''}`}>
          <h2 className="timeline-title">Your Success Journey</h2>
          <p className="timeline-subtitle">From enrollment to placement - we guide you every step</p>
        </div>
        
        <div className="timeline-content">
          <div className="timeline-left" ref={stepsRef}>
            <div className={`timeline-step ${visibleSteps.has(0) ? 'step-visible' : ''}`}>
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Enroll in Carefully Crafted Courses</h3>
                <div className="step-features">
                  <span className="feature-tag">⚛️ Frontend Bootcamp</span>
                  <span className="feature-tag">🧠 DSA Mastery</span>
                  <span className="feature-tag">🔧 Backend Development</span>
                  <span className="feature-tag">🎨 UI/UX Design</span>
                </div>
              </div>
            </div>

            <div className={`timeline-step ${visibleSteps.has(1) ? 'step-visible' : ''}`}>
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Get Training for Job-Ready Profile</h3>
                <div className="step-features">
                  <span className="feature-tag">🚀 Live Projects</span>
                  <span className="feature-tag">🎤 Mock Interviews</span>
                  <span className="feature-tag">💬 Soft Skills</span>
                  <span className="feature-tag">⚡ Hackathons</span>
                </div>
              </div>
            </div>

            <div className={`timeline-step ${visibleSteps.has(2) ? 'step-visible' : ''}`}>
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Be Job Ready & Get Placed</h3>
                <div className="step-features">
                  <span className="feature-tag">🎯 Guaranteed Placement</span>
                  <span className="feature-tag">💼 Interview Prep</span>
                  <span className="feature-tag">📋 Portfolio Building</span>
                  <span className="feature-tag">🤝 Hiring Partners</span>
                </div>
              </div>
            </div>
            
            <div className={`timeline-cta ${isSectionVisible ? 'fade-in-delay-3' : ''}`}>
              <button className="start-button">
                <span>Start Your Journey</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className={`timeline-right ${isSectionVisible ? 'fade-in-delay-2' : ''}`}>
            <div className="image-wrapper">
              <img src={branch} alt="Success Journey" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
