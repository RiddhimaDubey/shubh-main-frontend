import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import"../styles/Accordion.css";

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
     <div></div>
    );
  };

export default Accordion;
