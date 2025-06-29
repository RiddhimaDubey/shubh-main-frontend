import { useNavigate } from "react-router-dom";

import "../styles/Home.css";

// import Cards from "../components/Cards";
import Accordion from"../components/Accordion";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import DropdownSec from "../components/DropdownSec";
import LearningCard from "../components/LearningCard";
import WhatWeDo from"../components/WhatWeDo";
import XpPath from "../components/XpPath";
import TestimonialCarousel from "../components/TestimonialCarousel";
// import Dashboard from"../components/Dashboard";
import Timeline from "../components/Timeline";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection/>
      <WhatWeDo/>
      < XpPath/>
      <Accordion/>
      <DropdownSec/>
      <TestimonialCarousel/>
      {/* <Dashboard/> */}
      <Timeline/>
      {/* <Cards /> */}
      <LearningCard />
      <Footer/>
    </div>
  );
};

export default Home;
