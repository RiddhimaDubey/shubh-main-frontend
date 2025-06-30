import React from 'react';
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
    background: backgroundImage1
  },
  {
    title: 'Frontend Development',
    image: frontendImg,
    background: backgroundImage1
  },
  {
    title: 'Backend Development',
    image: backendImg,
    background: backgroundImage1
  },
  {
    title: 'AI and Machine Learning',
    image: aimlImg,
    background: backgroundImage2
  },
  {
    title: 'AR and VR Development',
    image: arvrImg,
    background: backgroundImage2
  }
];

const LearningCards = () => {
  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div
          className="learning-card"
          key={index}
          style={{
            backgroundImage: `url(${card.background})`
          }}
        >
          <img src={card.image} alt={card.title} className="books-image" />
          <h3 className="card-title">{card.title}</h3>
          <p className="card-link">Know more 
          
          </p>
        </div>
      ))}
    </div>
  );
};

export default LearningCards;
