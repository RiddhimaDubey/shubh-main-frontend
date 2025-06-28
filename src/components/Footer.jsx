import '../styles/Footer.css';
import logo from '../assets/LanosLOGO2.png';
import bgCircle from '../assets/Footerdecor.png'; // updated radial image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      {/* Rotating background image */}
      <img src={bgCircle} alt="Footer background" className="footer-bg-circle" />

      <div className="footer-content">
        <div className="column logo-col">
          <img src={logo} alt="LANOS Logo" className="logo" />
        </div>
        <div className='column-box'>
        <div className="column">
          <h3>About Us?</h3>
          <ul>
            <li>Our Mission</li>
            <li>Our Story</li>
            <li>Team</li>
          </ul>
        </div>

        <div className="column">
          <h3>Courses</h3>
          <ul>
            <li>All Courses</li>
            <li>Popular Courses</li>
            <li>New Courses</li>
          </ul>
        </div>

        <div className="column">
          <h3>Follow Us on</h3>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://twitter.com" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="https://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
        </div>

        <div className="column">
          <h3>Contact Us</h3>
          <ul>
            <li>Customer Support</li>
            <li>Feedback</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="column">
          <h3>Legal</h3>
          <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
