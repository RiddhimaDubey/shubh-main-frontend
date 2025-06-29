import React from "react";
import "../styles/DropdownSec.css";
import PricingCards from"../components/PricingCards";


const DropdownSec = () => {
  return (
    <div className="dropdownSec">
    
     <div className="dropdownCircleOne"></div>
     <div className="dropdownCircleTwo"></div>
     <div className="translucentPanel">
     <PricingCards/>
     </div>
    
    </div>
  );
};

export default DropdownSec;

