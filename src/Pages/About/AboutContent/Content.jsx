import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Content.css";

const Content = () => {
  return (
    <section className="about-content-sec">
      <Container>
        <Row>
          <Col md={12} lg={{ order: 2 }} className="text-center">
            <div className="section-title">
              <h1>How We Started?</h1>
            </div>
            <p className="w-50 m-auto content-inner">
              During the first COVID epidemic surge,Dr. Vandna( Author) is stranded on a Pacific Ocean islet for
              nearly 100 days. This experience led to the idea of a Digital
              Health Locker( DHL) to securely store case and family health
              records online, known as an Electronic Health Record( EHR).
            </p>
            <br />
            <p className="w-50 m-auto content-inner">
              As doctors , they aimed to optimize patient care by creating a
              SMART digital health record( EHR) that saves time for both cases
              and doctors. They honored the need for a stoner-friendly
              interface, which redounded in the birth of Vandna Clinic.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Content;
