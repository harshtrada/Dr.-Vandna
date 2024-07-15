import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Details.css";

const Details = () => {
  return (
    <>
      <section className="Dentist-details-sec">
        <Container>
          <Row>
            <Col md={7} lg={8}>
              <div className="single-Dentist-details">
                <h2>
                  Dr. Vandna <span>(BHMS)</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue;
                  and equal blame belongs to those who fail in their duty
                  through weakness of will, which is the same as saying through
                  shrinking from toil and pain. These cases are perfectly simple
                  and easy.
                </p>
              </div>
              <div className="Dentist-award">
                <h3>Homeopathy Associations</h3>
                <ul className="p-0">
                  <li>American Homeopathy Association</li>
                  <li>Academy of General Homeopathy</li>
                  <li>Carolina Homeopathy Society</li>
                  <li>Academy of General Homeopathy</li>
                  <li>American Association of Women Homeopathy</li>
                </ul>
              </div>
            </Col>
            <Col md={5} lg={4}>
              <div className="Dentist-profile text-center">
                <div className="profile-img"></div>
                <p>
                  Name: <strong>Dr. Vandna</strong>
                </p>
                <p>
                  Specialization: <strong>Homeopathy</strong>
                </p>
                <p>
                  Phone: <strong>+91 87806 42122</strong>
                </p>
                <div className="doctors-social">
                  <a href=".#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href=".#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href=".#">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pb-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="achivement-img-bg"></div>
            </Col>
            <Col lg={6}>
              <div className="expertDentist-txt mt-5 mt-lg-0">
                <h2>Experienced Dr. Vandna</h2>
                <p>
                  Smiling comes naturally to Dr. Vandna, author of Dr Vandnaclinic . He
                  has embraced Cosmetic Dr. Vandna and has redesigned the smiles
                  for thev thousands of patients.
                </p>
                <p>
                Dr. Vandna believes in providing her patients with more than
                  just world class Homeopathy care. He also helps patients recognize
                  the vital connection between Homeopathy health and whole body
                  health. A graduate of the University of California’s School of
                  Dr. Vandna, Dr. Vandna is a leader in the movement to bring
                  environmental sanity and well-being into the Homeopathy world for
                  future.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Details;
