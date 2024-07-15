// // WhatsAppButton.jsx
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import './WhatsAppButton.css'

// const WhatsAppButton = () => {
//   const whatsappNumber = "YOUR_WHATSAPP_NUMBER"; // Replace with your WhatsApp number
//   const message = "Hello! I need some help."; // Replace with your default message

//   const handleClick = () => {
//     window.open(
//       `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
//       "_blank"
//     );
//   };

//   return (
//     <div className="whatsapp-button" onClick={handleClick}>
//       <FontAwesomeIcon icon={faWhatsapp} size="2x" color="#25D366" />
//     </div>
//   );
// };

// export default WhatsAppButton;

// src/components/WhatsAppButton/WhatsAppButton.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const whatsappNumber = "+918780642122"; 
  const message = "Hello Dr. Vandna!"; 

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <FontAwesomeIcon icon={faWhatsapp} size="3x" />
    </div>
  );
};

export default WhatsAppButton;
