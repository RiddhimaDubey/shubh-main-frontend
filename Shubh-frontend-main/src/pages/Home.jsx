import { useNavigate } from "react-router-dom";

import "../styles/Home.css";

// import Cards from "../components/Cards";
import Accordion from"../components/Accordion";
import FAQSection from "../components/FAQSection";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import DropdownSec from "../components/DropdownSec";
// import LearningCard from "../components/LearningCard";
import WhatWeDo from"../components/WhatWeDo";
// import XpPath from "../components/XpPath";
import TestimonialCarousel from "../components/TestimonialCarousel";
// import Dashboard from"../components/Dashboard";
import Timeline from "../components/Timeline";
import ContactForm from "../components/ContactForm";
import PricingCards from "../components/PricingCards";
import InternSection from "../components/InternSection";
import PlacedStudents from "../components/PlacedStudents";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection/>
      <WhatWeDo/>
       <TestimonialCarousel/>
      {/* < XpPath/> */}
      <Accordion/>
   
      <DropdownSec/>
     
      {/* <Dashboard/> */}
      <Timeline/>
      <ContactForm/>
      <PlacedStudents/>
      <InternSection/>                                                              
      {/* <Cards /> */}
      {/* <LearningCard /> */}
      <FAQSection/>
      <Footer/>
    </div>
  );
};

export default Home;
