import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import homeopathy from "../../../Images/homeopathy.jpeg";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="about-wrapper">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <div className="about-left">
              <img src={homeopathy} alt="donto" className="img-fluid donto" />
              
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="about-right mt-5 mt-lg-0">
              <div className="about-content text-start" data-aos="zoom-in">
                <h1>Welcome to a Family</h1>
                <p>
                  Welcome to our family at Shreeja homeopathy. We are dedicated
                  to providing more than just medical care; we offer a
                  supportive and nurturing environment where you are embraced as
                  part of our extended family. Our consultations are designed to
                  be comprehensive yet personal, ensuring we understand your
                  individual health needs and preferences. With a foundation of
                  trust and compassion, built over years of serving our
                  community, we prioritize your comfort and well-being.
                  Together, we work towards achieving positive health outcomes,
                  focusing on evidence-based treatments and continuous support.
                  Join us in our commitment to your long-term health and
                  happiness.
                </p>
                {/* <a href='/page/about'>About Us</a> */}
              </div>
              <div className="fun-fact-sec" data-aos="fade-right">
                <div className="single-fun">
                  <span>500</span>
                  <span>+</span>
                  <p>Happy Patients</p>
                </div>
                <div className="single-fun sp-fun" data-aos="fade-right">
                  <span>88</span>
                  <span>+</span>
                  <p>Qualified Doctors</p>
                </div>
                <div className="single-fun" data-aos="fade-left">
                  <span>25</span>
                  <span>+</span>
                  <p>Years Experience</p>
                </div>
                <div className="single-fun sp-fun" data-aos="fade-left">
                  <span>50</span>
                  <span>+</span>
                  <p>Dental Awards</p>
                </div>
                <span className="line"></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
