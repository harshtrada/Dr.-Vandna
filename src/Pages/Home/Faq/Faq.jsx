// import React from "react";
// import { Accordion, Card, useAccordionButton } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Faq.css"; // Make sure to import your CSS

// const CustomToggle = ({ children, eventKey }) => {
//   const decoratedOnClick = useAccordionButton(eventKey);

//   return (
//     <button
//       type="button"
//       style={{
//         backgroundColor: "transparent",
//         border: "none",
//         color: "inherit",
//         padding: 0,
//         width: "100%",
//       }}
//       onClick={decoratedOnClick}
//     >
//       {children}
//     </button>
//   );
// };

// const FAQSection = () => {
//   const faqs = [
//     {
//       question: "How does Dr. Anubha treat her patients?",
//       answer:
//         "Dr. Anubha understands and heals her patients in a unique manner, providing a welcoming and friendly environment.",
//     },
//     {
//       question: "How to contact Dr. Anubha Homeopathy Hospital?",
//       answer:
//         "You can contact the hospital at +91-88017 09712/ +91-91778 71574 or email at info@dranubha.com.",
//     },
//     {
//       question: "Does Homeopathy have side effects?",
//       answer:
//         "Due to the extremely diluted nature of homeopathic remedies, there is minimal risk of negative side effects.",
//     },
//   ];

//   return (
//     <>
//       <div style={{ marginTop: "5%",marginBottom:"5%"}}>
//         <h1>FAQs</h1>
//       </div>
//       <div
//         style={{ display: "flex", justifyContent: "center" }}
//       >
//         <Accordion defaultActiveKey="0" style={{ width: "85%" }}>
//           {faqs.map((faq, index) => (
//             <Card key={index}>
//               <Card.Header>
//                 <CustomToggle eventKey={index.toString()}>
//                   {faq.question}
//                 </CustomToggle>
//               </Card.Header>
//               <Accordion.Collapse eventKey={index.toString()}>
//                 <Card.Body>{faq.answer}</Card.Body>
//               </Accordion.Collapse>
//             </Card>
//           ))}
//         </Accordion>
//       </div>
//     </>
//   );
// };

// export default FAQSection;
import React from "react";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Faq.css"; // Ensure to import your CSS file

const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <button
      type="button"
      style={{
        backgroundColor: "transparent",
        border: "none",
        color: "inherit",
        padding: 0,
        width: "100%",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "How does Dr. Anubha treat her patients?",
      answer:
        "Dr. Anubha understands and heals her patients in a unique manner, providing a welcoming and friendly environment.",
    },
    {
      question: "How to contact Dr. Anubha Homeopathy Hospital?",
      answer:
        "You can contact the hospital at +91-88017 09712/ +91-91778 71574 or email at info@dranubha.com.",
    },
    {
      question: "Does Homeopathy have side effects?",
      answer:
        "Due to the extremely diluted nature of homeopathic remedies, there is minimal risk of negative side effects.",
    },
  ];

  return (
    <>
      <div className="section-title" style={{ marginTop: "5%", marginBottom: "5%" }}>
        <h1>FAQs</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Accordion defaultActiveKey="0" style={{ width: "85%" }}>
          {faqs.map((faq, index) => (
            <Card key={index}>
              <Card.Header>
                <CustomToggle eventKey={index.toString()}>
                  {faq.question}
                </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={index.toString()}>
                <Card.Body>{faq.answer}</Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default FAQSection;

// import React from 'react';
// import Accordion from 'react-bootstrap/Accordion';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import React from "react";
// import { Accordion, Card, useAccordionButton } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Faq.css";

// const CustomToggle = ({ children, eventKey }) => {
//   const decoratedOnClick = useAccordionButton(eventKey);

//   return (
//     <button
//       type="button"
//       style={{
//         backgroundColor: "transparent",
//         border: "none",
//         color: "#007bff",
//         padding: 0,
//       }}
//       onClick={decoratedOnClick}
//     >
//       {children}
//     </button>
//   );
// };

// const Faq = () => {
//   const faqs = [
//     {
//       question: "How does Dr. Anubha treat her patients?",
//       answer:
//         "Dr. Anubha understands and heals her patients in a unique manner, providing a welcoming and friendly environment.",
//     },
//     {
//       question: "How to contact Dr. Anubha Homeopathy Hospital?",
//       answer:
//         "You can contact the hospital at +91-88017 09712/ +91-91778 71574 or email at info@dranubha.com.",
//     },
//     {
//       question: "Does Homeopathy have side effects?",
//       answer:
//         "Due to the extremely diluted nature of homeopathic remedies, there is minimal risk of negative side effects.",
//     },
//   ];

//   return (
//     <Accordion defaultActiveKey="0">
//       {faqs.map((faq, index) => (
//         <Card key={index}>
//           <Card.Header>
//             <CustomToggle eventKey={index.toString()}>
//               {faq.question}
//             </CustomToggle>
//           </Card.Header>
//           <Accordion.Collapse eventKey={index.toString()}>
//             <Card.Body>{faq.answer}</Card.Body>
//           </Accordion.Collapse>
//         </Card>
//       ))}
//     </Accordion>
//   );
// };

// export default Faq;
