import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/PricingCards.css';
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

const PricingCards = () => {
  const [showForm, setShowForm] = useState(false);
  const [flipped, setFlipped] = useState([false, false]);

  const handleFlip = (index, value) => {
    setFlipped((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleEnrollClick = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  const cardData = [
    { 
      title:'Master Full Stack Web Development',
      features: [
       
        'Java SE with DSA',
        'Java EE ',
        'Java Microservices ',
        'Backend Deployment with DevOps',
        'HTML, CSS, JS',
        'React.js',
        'Next.js',
        'React Native',
        'TypeScript',
        'AngularJS ',
        'Frontend Deployment ',
        'Final Exam & Certifications',
      ],
      back: `The Full Stack Web Development course at Lanos takes you on a complete journey from backend to frontend, preparing you to build real-world applications with confidence. You'll begin by learning how to design backend systems, followed by mastering Java SE with Data Structures and Algorithms to strengthen your problem-solving abilities. As you progress, you'll dive into enterprise-level backend development with Java EE and build scalable applications using Microservices architecture. The course also covers DevOps tools for deploying backend systems efficiently. On the frontend, you'll learn the basics with HTML, CSS, and JavaScript, then advance to modern frameworks like React.js, Next.js, AngularJS, and even React Native for mobile app development. With TypeScript, you'll write cleaner and more reliable code. Finally, you'll learn how to deploy your frontend projects and validate your skills through an exam and certification, making you job-ready and industry-relevant.
      ll explore natural language processing (NLP), computer vision, and transfer learning, followed by hands-on experience in deploying your AI models using Flask, Streamlit, Docker, and MLOps tools. By the end, youll be able to build and deploy your own You'll explore natural language processing (NLP), computer vision, and transfer learning, followed by hands-on experience in deploying your AI models using Flask, Streamlit, Docker, and MLOps tools. By the end, you'll not only understand how AI works—you'll be able to build  `
    },
    {
      title: ' AI & Machine Learning Mastery',
      features: [
        'Mathematics for AI ',
        'Data Science Toolkit ',
        'Exploratory Data Analysis (EDA) & Data Wrangling',
        'Machine Learning Core ',
        'Model Evaluation & Optimization ',
        'Deep Learning ',
        'Framework Mastery ',
        'Natural Language Processing ',
        'Computer Vision ',
        'Model Deployment ',
        'MLOps & Version Control ',
        'Capstone Projects ',
      ],
      back: `The AI and Machine Learning course at Lanos is designed to take you from zero to expert, guiding you through the complete journey of building intelligent systems from scratch—just like industry professionals and AI innovators do. You'll begin with deep Python programming and essential mathematics including linear algebra, probability, and calculus—the backbone of all AI logic. As you progress, you'll master real-world data handling, visualization, and cleaning using powerful tools like Pandas, NumPy, and Seaborn. The course then dives into core machine learning algorithms—supervised, unsupervised, and reinforcement learning—before unlocking advanced deep learning concepts like CNNs, RNNs, and attention mechanisms using TensorFlow and PyTorch. You'll explore natural language processing (NLP), computer vision, and transfer learning, followed by hands-on experience in deploying your AI models using Flask, Streamlit, Docker, and MLOps tools. By the end, you'll not only understand how AI works—you'll be able to build and deploy your own 
      ll explore natural language processing (NLP), computer vision, and transfer learning, followed by hands-on experience in deploying your AI models using Flask, Streamlit, Docker, and MLOps tools. By the end, youll be able to build and deploy your own You'll explore natural language processing (NLP)Capstone Projects (Self-Built AI like Image Classifier, Chatbot, AI Art Generator)\nEnd with your imagination turned into a working AI model`
    }
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-wrapper">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="flip-card"
            onMouseEnter={() => handleFlip(idx, true)}
            onMouseLeave={() => handleFlip(idx, false)}
          >
            <motion.div
              className="flip-card-inner"
              animate={{ rotateY: flipped[idx] ? 180 : 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`flip-card-front card ${idx === 0 ? 'card--free' : 'card--premium'}`}
                   style={{ backfaceVisibility: 'hidden' }}>
                <div className="card-header">
                  {idx === 0 && <FaJava className="java-icon" />}
                  {idx === 1 && <FaPython className="java-icon" />}
                  <h2 className="card-title">{card.title}</h2>
                </div>
                <div className="card-body">
                  <ul className="card-features">
                    {card.features.map((feature, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: feature.replace(/\n/g, '<br/>') }} />
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`flip-card-back card ${idx === 0 ? 'card--free' : 'card--premium'}`}
                   style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <div className="card-back-content">
                  <p>{card.back}</p>
                  <button className="card-button" onClick={handleEnrollClick}>
                    Enroll Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Enrollment Form</h2>
            <form className="enrollment-form">
              <label>
                Name:
                <input type="text" required />
              </label>
              <label>
                Email:
                <input type="email" required />
              </label>
              <label>
                Phone:
                <input type="tel" />
              </label>
              <button type="submit">Submit</button>
              <button type="button" onClick={handleClose}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingCards;
