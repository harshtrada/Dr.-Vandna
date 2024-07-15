
// import React from "react";
// import { Col, Container, NavLink, Row } from "react-bootstrap";
// import "./Footer.css";
// import logo from "../../../Images/icon-footer-dark1.png";
// import SocialIcons from "./SocialIcons";

// const Footer = () => {
//   return (
//     <div className="footer-bg">
//       <Container style={{display:"flex",justifyContent:"space-evenly"}}>
//         <Row className="text-white">
//           <Col xs={12} md={3} className="mb-4">
//             <div className="footer-logo-container">
//               <a href="/">
//                 <img src={logo} alt="Logo" height="120" />
//               </a>
//               <SocialIcons />
//             </div>
//           </Col>
//           <Col xs={12} md={3} className="mb-4">
//             <div className="single-footer-widget">
//               <div className="widget-title">
//                 <h2>Practices</h2>
//               </div>
//               <div className="widget-content">
//                 <NavLink className="footer-link">For Patients</NavLink>
//                 <NavLink className="footer-link">FAQ's</NavLink>
//                 <NavLink className="footer-link">About</NavLink>
//                 <NavLink className="footer-link">Contact Us</NavLink>
//                 <NavLink className="footer-link">Blog</NavLink>
//               </div>
//             </div>
//           </Col>
//           <Col xs={12} md={3} className="mb-4">
//             <div className="single-footer-widget">
//               <div className="widget-title">
//                 <h2>Treatments</h2>
//               </div>
//               <div className="widget-content">
//                 <NavLink className="footer-link">Diabetes</NavLink>
//                 <NavLink className="footer-link">Thyroid</NavLink>
//                 <NavLink className="footer-link">Asthma</NavLink>
//                 <NavLink className="footer-link">Sinusitis</NavLink>
//                 <NavLink className="footer-link">Arthritis</NavLink>
//                 <NavLink className="footer-link">Migraine</NavLink>
//               </div>
//             </div>
//           </Col>
//           <Col xs={12} md={3} className="mb-4">
//             <div className="single-footer-widget">
//               <div className="widget-title">
//                 <h2>Our Address</h2>
//               </div>
//               <div className="widget-content">
//                 <p>71, Shankar Nagar Society, Lalita Chokdi, Katargam, Surat-395004</p>
//                 <NavLink className="footer-link">Email: dr.vandnaclinic@gmail.com</NavLink>
//                 <NavLink className="footer-link">+91 87806 42122</NavLink>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <div className="footer-copy-right text-center text-white">
//         <p className="mb-0">
//           &copy; 2024 - <span className="developer">Dr-Vandna</span> | All Rights Reserved
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;


// import React from "react";
// import { Col, Container, NavLink, Row } from "react-bootstrap";
// import "./Footer.css";
// import logo from "../../../Images/icon-footer-dark1.png";
// import SocialIcons from "./SocialIcons";

// const Footer = () => {
//   return (
//     <div className="footer-bg">
//       <Container>
//         <Row className="text-white">
//           <Col xs={12} md={3} className="mb-4">
//             <div className="footer-logo-container">
//               <a href="/">
//                 <img src={logo} alt="Logo" height="120" />
//               </a>
//               <SocialIcons />
//             </div>
//           </Col>
//           <Col xs={12} md={3} className="mb-4">
//             <div className="single-footer-widget">
//               <div className="widget-title">
//                 <h2>Practices</h2>
//               </div>
//               <div className="widget-content">
//                 <NavLink className="footer-link">For Patients</NavLink>
//                 <NavLink className="footer-link">FAQ's</NavLink>
//                 <NavLink className="footer-link">About</NavLink>
//                 <NavLink className="footer-link">Contact Us</NavLink>
//                 <NavLink className="footer-link">Blog</NavLink>
//               </div>
//             </div>
//           </Col>
//           <Col xs={12} md={3} className="mb-4">
//             <div className="single-footer-widget">
//               <div className="widget-title">
//                 <h2>Treatments</h2>
//               </div>
//               <div className="widget-content">
//                 <NavLink className="footer-link">Diabetes</NavLink>
//                 <NavLink className="footer-link">Thyroid</NavLink>
//                 <NavLink className="footer-link">Asthma</NavLink>
//                 <NavLink className="footer-link">Sinusitis</NavLink>
//                 <NavLink className="footer-link">Arthritis</NavLink>
//                 <NavLink className="footer-link">Migraine</NavLink>
//               </div>
//             </div>
//           </Col>
//           <Col xs={12} md={3} className="mb-4">
//             <div className="single-footer-widget">
//               <div className="widget-title">
//                 <h2>Our Address</h2>
//               </div>
//               <div className="widget-content">
//                 <p>71, Shankar Nagar Society, Lalita Chokdi, Katargam, Surat-395004</p>
//                 <NavLink className="footer-link">Email: dr.vandnaclinic@gmail.com</NavLink>
//                 <NavLink className="footer-link">+91 87806 42122</NavLink>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <div className="footer-copy-right text-center text-white">
//         <p className="mb-0">
//           &copy; 2024 - <span className="developer">Dr-Vandna</span> | All Rights Reserved
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import "./Footer.css";
import logo from "../../../Images/icon-footer-dark1.png";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className="footer-bg">
      <Container>
        <Row className="text-white">
          <Col xs={12} md={6} lg={3} className="mb-4">
            <div className="footer-logo-container">
              <a href="/">
                <img src={logo} alt="Logo" height="120" />
              </a>
              <SocialIcons />
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-4">
            <div className="single-footer-widget">
              <div className="widget-title">
                <h2>Practices</h2>
              </div>
              <div className="widget-content">
                <NavLink className="footer-link">For Patients</NavLink>
                <NavLink className="footer-link">FAQ's</NavLink>
                <NavLink className="footer-link">About</NavLink>
                <NavLink className="footer-link">Contact Us</NavLink>
                <NavLink className="footer-link">Blog</NavLink>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-4">
            <div className="single-footer-widget">
              <div className="widget-title">
                <h2>Treatments</h2>
              </div>
              <div className="widget-content">
                <NavLink className="footer-link">Diabetes</NavLink>
                <NavLink className="footer-link">Thyroid</NavLink>
                <NavLink className="footer-link">Asthma</NavLink>
                <NavLink className="footer-link">Sinusitis</NavLink>
                <NavLink className="footer-link">Arthritis</NavLink>
                <NavLink className="footer-link">Migraine</NavLink>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-4">
            <div className="single-footer-widget">
              <div className="widget-title">
                <h2>Our Address</h2>
              </div>
              <div className="widget-content">
                <p>71, Shankar Nagar Society, Lalita Chokdi, Katargam, Surat-395004</p>
                <NavLink className="footer-link">Email: dr.vandnaclinic@gmail.com</NavLink>
                <NavLink className="footer-link">+91 87806 42122</NavLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-copy-right text-center text-white">
        <p className="mb-0">
          &copy; 2024 - <span className="developer">Dr-Vandna</span> | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

