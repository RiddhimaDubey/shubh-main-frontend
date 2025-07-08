// FAQ Section component with six rectangles (Rectangle 535 to Rectangle 540) as per design requirements
import React, { useState } from 'react';
import '../styles/FAQSection.css';

const faqData = [
  {
    id: 535,
    question: '1. Who are these courses for?',
    answer: 'These courses are designed for students, professionals, and anyone interested in upskilling or starting a new career path.',
    style: { height: 72 },
  },
  {
    id: 536,
    question: '2. Do I need prior experience to enroll?',
    answer: 'No prior experience is required. Our courses are structured to accommodate beginners as well as those with some background.',
    style: { height: 72 },
  },
  {
    id: 537,
    question: '3. What kind of support do you provide during training?',
    answer: 'We provide mentorship, doubt-clearing sessions, and access to a community forum for ongoing support throughout your training.',
    style: { height: 72 },
  },
  {
    id: 538,
    question: '4. Will I receive a certificate after course completion?',
    answer: 'Yes, you will receive a certificate upon successful completion of the course and its requirements.',
    style: { height: 72 },
  },
  {
    id: 539,
    question: '5. What is placement assistance?',
    answer: 'Placement assistance includes resume building, interview preparation, and connecting you with potential employers.',
    style: { height: 72 },
  },
  {
    id: 540,
    question: '6. How long does it take to get placed?',
    answer: 'It depends on your learning pace and commitment, but most students get placed within 3 to 6 months of completing their course and training.',
    style: { height: 125 },
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">FAQs</h2>
      {faqData.map((item, idx) => (
        <div
          key={item.id}
          className={`faq-rectangle${openIndex === idx ? ' open' : ''}`}
          style={{ minHeight: item.style.height }}
          onClick={() => handleToggle(idx)}
        >
          <div className="faq-row">
            <span className="faq-question">{item.question}</span>
            <span className={`faq-chevron${openIndex === idx ? ' rotated' : ''}`}>▼</span>
          </div>
          {openIndex === idx && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection; 