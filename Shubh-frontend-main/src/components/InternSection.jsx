import React, { useState, useEffect, useRef } from 'react';
import '../styles/InternSection.css';
import profileImg from '../assets/img.png';
import arrowImg from '../assets/arrow1.png';

const slides = [
  {
    name: 'Priya Tiwari',
    content: `"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."`,
    role: 'Intern at Lanos',
    duration: 'Duration: 11/05/2024 to 11/05/2025',
    img: profileImg,
  },
  {
    name: 'Aman Sharma',
    content: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."`,
    role: 'Intern at Lanos',
    duration: 'Duration: 01/06/2024 to 01/06/2025',
    img: profileImg,
  },
  {
    name: 'Riya Singh',
    content: `"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."`,
    role: 'Intern at Lanos',
    duration: 'Duration: 15/07/2024 to 15/07/2025',
    img: profileImg,
  },
];

const InternSection = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const intervalRef = useRef(null);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [total]);

  return (
    <div className="intern-carousel">
      <section className="intern-section">
        <button className="carousel-arrow left" onClick={handlePrev} aria-label="Previous">
          <img src={arrowImg} alt="Left Arrow" className="arrow-img carousel-arrow-img-left" />
        </button>
        <div className="intern-left">
          <div className="intern-left-row">
            <div className="intern-profile-pic-wrapper">
              <img src={slides[current].img} alt={slides[current].name} className="intern-profile-pic" />
            </div>
          </div>
          <div className="intern-name">{slides[current].name}</div>
        </div>
        <div className="intern-center">
          <p className="intern-content">{slides[current].content}</p>
          <div className="intern-role">
            <span className="intern-role-title">{slides[current].role}</span><br />
            <span className="intern-role-duration">{slides[current].duration}</span>
          </div>
        </div>
        <div className="intern-right">
          <a href="#" className="intern-linkedin" aria-label="LinkedIn">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="#4B2067"/>
              <path d="M10.6667 13.3333H13.3333V22.6667H10.6667V13.3333ZM12 10.6667C12.7364 10.6667 13.3333 11.2636 13.3333 12C13.3333 12.7364 12.7364 13.3333 12 13.3333C11.2636 13.3333 10.6667 12.7364 10.6667 12C10.6667 11.2636 11.2636 10.6667 12 10.6667ZM15.3333 13.3333H18V14.6667H18.04C18.4267 13.96 19.2533 13.2267 20.4267 13.2267C22.4267 13.2267 22.6667 14.4933 22.6667 16.08V22.6667H20V16.6667C20 15.8133 20 14.6667 18.6667 14.6667C17.3333 14.6667 17.3333 15.8133 17.3333 16.6667V22.6667H15.3333V13.3333Z" fill="white"/>
            </svg>
          </a>
        </div>
        <button className="carousel-arrow right" onClick={handleNext} aria-label="Next">
          <img src={arrowImg} alt="Right Arrow" className="arrow-img carousel-arrow-img-right" />
        </button>
      </section>
      <div className="carousel-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot${current === idx ? ' active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default InternSection; 