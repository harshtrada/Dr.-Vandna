import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FakeDoctors } from "../../FakeData/Dentist";
import Doctors from "../../Pages/Home/Doctors/Doctors";
import './Dentist.css'; 

const Dentist = () => {
  return (
    <section className="doctor-wrapper">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="section-title">
              <h1 className="mb-5 mb-sm-dent">Youtube Videos by Dr. Vandana</h1>
            </div>
          </Col>
        </Row>
        <Row style={{ marginBottom: "20px" }}>
          <Col xs={12} md={6} style={{ marginBottom: "20px" }}>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/IVkIVESoEZ8?si=fNJ6yNFcnAcm66XL"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/qoT8BjOB9n0?si=SWcIf2_Xl8905HwQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} style={{ marginBottom: "20px" }}>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/yp79LIgoOnA?si=m5hgLImeYnwVYNjz"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/HtWI68tbIy0?si=aG9N1HIMd0QElxuh"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Dentist;
