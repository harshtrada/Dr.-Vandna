import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import expertDentist from '../../../Images/experienceddentist.png';
import './Dentist.css';

const Dentist = () => {
    return (
        <section className='expert-dentist'>
            <Container style={{marginTop:"-100px"}}>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <img src={expertDentist} alt="expertDentist" className="img-fluid" />
                    </Col>
                    <Col lg={6}>
                        <div className="expertDentist-txt mt-5 mt-lg-0">
                            <h1>Our Vision</h1>
                            <p className="my-3">The vision of Dr. Vandna is to transfigure the way individualities manage their particular health and heartiness, empowering them to lead healthier and further fulfilling lives. We fantasize a future where everyone has access to substantiated health information, tools, and coffers that enable them to make informed opinions about their well- being.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Dentist;