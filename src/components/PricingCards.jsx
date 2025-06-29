import React, { useState } from 'react';
import '../styles/PricingCards.css';
import premiumBg from '../assets/Cardss.png'; // Adjust path if needed

const PricingCards = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const togglePlan = () => {
    setIsYearly(!isYearly);
  };

  const handleEnrollClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div className='container-main'>
      {/* Toggle Switch */}
      <div className='window-small'>
      <div className="plan-toggle">
        <span>{isYearly ? 'Yearly' : 'Monthly'}</span>
        <label className="switch">
          <input type="checkbox" checked={isYearly} onChange={togglePlan} />
          <span className="slider round"></span>
        </label>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-wrapper">
        {/* Free Tier */}
        <div className="free-tier-card">
          <div className="free-tier-header">
            <h2 className="free-tier-title">Free Tier</h2>
            <p className="free-tier-price">{isYearly ? '0 ₹ /Year' : '0 ₹ /Month'}</p>
          </div>
          <div className="free-tier-body">
            <ul className="free-tier-features">
              <li>Access Levels 0–20</li>
              <li>Basic Quests & Quizzes</li>
              <li>Community Forums</li>
              <li>IDE Access</li>
            </ul>
            <p className="free-tier-note">No credit card required</p>
            <button className="free-tier-button" onClick={handleEnrollClick}>
              Enroll Now
            </button>
          </div>
        </div>

        {/* Premium Tier */}
        <div className="premium-tier-card">
          <div
            className="premium-tier-header"
            style={{ backgroundImage: `url(${premiumBg})` }}
          >
            <h2 className="premium-tier-title">Premium Tier</h2>
            <p className="premium-tier-price">
              {isYearly ? '9999 ₹ /Year' : '999 ₹ /Month'}
            </p>
          </div>
          <div className="premium-tier-body">
            <ul className="premium-tier-features">
              <li>All benefits in Free tier plus</li>
              <li>Full Access Levels 0–100</li>
              <li>Daily Live Class</li>
              <li>1:1 Mentorship</li>
              <li>Exclusive Quests & Boss Battles</li>
              <li>Priority Support & Virtual Store Credits</li>
            </ul>
            <button className="premium-tier-button">
              {isYearly ? 'Subscribe Now' : 'Subscribe Monthly'}
            </button>
          </div>
        </div>
      </div>
      </div>
      {/* Enrollment Modal */}
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
