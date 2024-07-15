import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Achivement.css";

const Achivement = () => {
  return (
    <section className="achivement-wrap text-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6} lg={6} sm={12}>
            <div className="section-title" style={{}}>
              <h1>Our Vision</h1>
            </div>
            <div className="achivement-txt mx-5">
              <p>
                The vision of Homeopathy is to transfigure the way
                individualities manage their particular health and heartiness,
                empowering them to lead healthier and further fulfilling lives.
                We fantasize a future where everyone has access to substantiated
                health information, tools, and coffers that enable them to make
                informed opinions about their well- being.
              </p>
              {/* <div className="more-tool">
                <Link to="/login">
                  <button className="theme-btn btn-fill">Appoinment</button>
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=7HhdN9_MgE8"
                  className="watchBtn"
                >
                  <button className="theme-btn btn-unfill">
                    <FontAwesomeIcon className="play-btn" icon={faPlayCircle} />
                    <span>Watch Vedio</span>
                  </button>
                </a>
              </div> */}
            </div>
          </Col>
          <Col md={6} lg={6} sm={12}>
            <Row className="achivement-funfact text-white">
              <Col sm={6} className="text-center">
                <div className="single-funfact">
                  <span>22 +</span>
                  <p>Patients</p>
                </div>
              </Col>
              <Col sm={6} className="text-center">
                <div className="single-funfact">
                  <span>75 +</span>
                  <p>Homeopathy</p>
                </div>
              </Col>
              <Col sm={6} className="text-center">
                <div className="single-funfact">
                  <span>25 +</span>
                  <p>Awards</p>
                </div>
              </Col>
              <Col sm={6} className="text-center">
                <div className="single-funfact">
                  <span>28 +</span>
                  <p>Branch</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Achivement;
