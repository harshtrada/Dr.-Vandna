import "@fontsource/josefin-sans";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeopathy from "../../../Images/homeopathy.png";
import { useEffect } from "react"; // Add this import
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <section
        className="single-hero-slide text-white d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#011E1B", marginTop: "-1px" }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={12} sm={12} lg={6}>
              <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start" data-aos="zoom-in">
                {/* <h2>Better Life Through</h2> */}
                <h1>Meet The Dr. Vandna Kanani</h1>
                <p className="mb-xs-5">
                  With longevity and long-term wellness as the goal, I work
                  closely with my patients using cutting edge diagnostics and
                  treatments to design tailor-made plans to help them live long
                  and healthy lives.
                </p>
                <div className="banner-btn m-sm-auto">
                  <Link to="/login">
                    <button className="theme-btn btn-fill">Appointment</button>
                  </Link>
                  <button className="theme-btn btn-blank">Learn More</button>
                </div>
              </div>
            </Col>
            <Col md={12} sm={12} lg={6} className="mt-sm-5">
              <div className="hero-slide-right text-center text-lg-start mt-sm-5">
                <img src={homeopathy} alt="" className="heroTeeth" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div style={{ marginBottom: "-100px", marginTop: "40px" }}>
        <div
          className="about-content text-center"
          data-aos="zoom-in"
          style={{ marginBottom: "50px" }}
        >
          <h1>Shreeja homeopathy</h1>
          <p>
            Experience the convenience of having all your health solutions in one
            place with the homeocare, accessible anytime and anywhere you go.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;