import React, { useState } from 'react';
import '../styles/LearningCard.css';
import backgroundImage1 from '../assets/Group.png';
import backgroundImage2 from '../assets/Grouptwo.png';
import booksImg from '../assets/Book.png';
import frontendImg from '../assets/calculator.png';
import backendImg from '../assets/Book.png';
import aimlImg from '../assets/phool.png';
import arvrImg from '../assets/dimag.png';

const cardData = [
  {
    title: 'Full Stack Web Development',
    image: booksImg,
    background: backgroundImage1,
    description: 'Master both frontend and backend technologies to build complete web applications.'
  },
  {
    title: 'Frontend Development',
    image: frontendImg,
    background: backgroundImage1,
    description: 'Create stunning user interfaces with modern frameworks and responsive design.'
  },
  {
    title: 'Backend Development',
    image: backendImg,
    background: backgroundImage1,
    description: 'Build robust server-side applications and APIs with scalable architecture.'
  },
  {
    title: 'AI and Machine Learning',
    image: aimlImg,
    background: backgroundImage2,
    description: 'Explore artificial intelligence and machine learning algorithms for smart solutions.'
  },
  {
    title: 'AR and VR Development',
    image: arvrImg,
    background: backgroundImage2,
    description: 'Create immersive experiences with augmented and virtual reality technologies.'
  }
];

const LearningCards = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleKnowMore = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div
          className={`learning-card ${expandedCard === index ? 'expanded' : ''}`}
          key={index}
          style={{
            backgroundImage: `url(${card.background})`
          }}
        >
          <img src={card.image} alt={card.title} className="books-image" />
          <h3 className="card-title">{card.title}</h3>
          {expandedCard === index && (
            <p className="card-description">{card.description}</p>
          )}
          <p 
            className="card-link" 
            onClick={() => handleKnowMore(index)}
          >
            {expandedCard === index ? 'Show less' : 'Know more'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LearningCards;
