import React from 'react';
import '../styles/Timeline.css';
import branch from '../assets/branch.png';

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-left">
        <div className="timeline-step">
          <div className="dot" />
          <h3>Be Job ready and get placed</h3>
          <ul>
            <li>Guaranteed Placement Assistance</li>
            <li>Interview Prep with Industry Experts</li>
            <li>Job Referrals & Portfolio Building</li>
            <li>Connect with Hiring Partners</li>
          </ul>
        </div>

        <div className="timeline-step">
          <div className="dot" />
          <h3>Get Training for a Job ready profile</h3>
          <ul>
            <li>Live Projects with Mentorship</li>
            <li>Mock Interviews & Resume Reviews</li>
            <li>Soft Skills & Communication Training</li>
            <li>Coding Challenges & Hackathons</li>
          </ul>
        </div>

        <div className="timeline-step">
          <div className="dot" />
          <h3>Enroll in our Carefully crafted courses</h3>
          <ul>
            <li>Frontend Development Bootcamp</li>
            <li>Data Structures & Algorithms Mastery</li>
            <li>Backend Development with Node.js</li>
            <li>UI/UX Design with Figma & Adobe XD</li>
          </ul>
        </div>

        <button className="start-button">Start</button>
      </div>

      <div className="timeline-right">
        <img src={branch} alt="branch" />
      </div>
    </div>
  );
};

export default Timeline;
