import React from 'react';
import '../styles/ XpPath.css';
import learnIcon from '../assets/four.png';
import xpIcon from '../assets/five.png';
import unlockIcon from '../assets/six.png';
import certifyIcon from '../assets/seven.png';

const steps = [
  {
    icon: learnIcon,
    title: 'Learn',
    description: 'Attend daily mentor led sessions or catch up with recordings at your own pace. Every lesson is aligned to XP quests, ensuring hands on practice from Day 1.'
  },
  {
    icon: xpIcon,
    title: 'Earn XP',
    description: 'Tackle daily coding challenges, quizzes, and project assignments to rack up XP. 10 XP per lesson, 50 XP per quiz, 200 XP for capstone quests.'
  },
  {
    icon: unlockIcon,
    title: 'Unlock Modules',
    description: 'Hit Level 15 to unlock JavaScript modules; reach Level 50 for DevOps; and conquer boss battles to open premium tracks like React & AWS.'
  },
  {
    icon: certifyIcon,
    title: 'Get Certified',
    description: 'Defeat monthly “boss battles” (capstone projects) to claim badges and showcase them on your portfolio.'
  }
];

const XpPath = () => {
  return (
    <section className="xp-section">
      <div className="xp-container">
        {steps.map((step, index) => (
          <div className="xp-card" key={index}>
            <div className="xp-icon">
              <img src={step.icon} alt={step.title} />
            </div>
            <div className="xp-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default XpPath;
