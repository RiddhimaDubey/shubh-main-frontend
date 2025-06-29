import React, { useEffect, useRef, useState } from 'react';
import '../styles/TestimonialCarousel.css';
import Student from '../assets/image.png';
import Voice from'../assets/Voice.png';
const originalTestimonials = [
  {
    name: 'Priya Tiwari',
    role: 'College Student',
    stars: 5,
    text: 'I went from Level 0 to Level 30 in under two months—and landed a summer internship at a top startup! The live classes and quests kept me motivated every day.',
    image: Student,
  },
  {
    name: 'Rohan Cheater',
    role: 'College Student',
    stars: 4,
    text: "The gamified quests made coding fun. I beat the 'Debugging Boss Battle' and finally understood JavaScript loops.",
    image: Student,
  },
  {
    name: 'Ananya Paandaan',
    role: 'College Student',
    stars: 5,
    text: 'Lanos’ live mentor support and Solo Leveling–style badges transformed my career in just three months.',
    image: Student,
  },
];

// Duplicate to create loop effect
const testimonials = [...originalTestimonials, ...originalTestimonials, ...originalTestimonials];

const CARD_WIDTH = 363;

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(timeoutRef.current);
  }, []);

  const startAutoSlide = () => {
    timeoutRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 3000);
  };

  // Ensure only 0–2 dot indexes for 3 main cards
  const activeDot = currentIndex % originalTestimonials.length;

  return (
    <div className="testimonial-carousel-container">
      <h2 className="carousel-heading">
        See How Lanos Learners Are Leveling Up Their Careers
      </h2>
      <div className="testimonial-carousel-wrapper">
        <div
          className="testimonial-carousel-track"
          style={{ transform: `translateX(-${currentIndex * CARD_WIDTH}px)` }}
        >
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-top">
                <img src={item.image} alt={item.name} className="testimonial-img" />
                <div className="testimonial-user-details">
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                  <div className="stars">
                    {'★'.repeat(item.stars)}{'☆'.repeat(5 - item.stars)}
                  </div>
                </div>
              </div>
              <div className="testimonial-bottom">
                <img src={Voice} className="quote-icon" alt="quote" />
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Three Dots */}
      <div className="testimonial-carousel-dots">
        {originalTestimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === activeDot ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
