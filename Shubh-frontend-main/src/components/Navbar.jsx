
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
// import SearchBar from "./SearchBar";
import { FaBars, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from  "../assets/LanosLOGO2.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="perent">

        <nav className="navbar">
        <img src={Logo} alt="logo" />
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>

        </nav>
        <div className="icons">
          <div className="icon" onClick={() => navigate("/about")}><FaBars /></div>
          <div className="icon" onClick={() => navigate("/signup")}><FaUser /></div> {/* ✅ Update this line */}
        </div>
        
      
    </div>
  );
};

export default Navbar;
