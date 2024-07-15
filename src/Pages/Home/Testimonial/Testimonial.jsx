import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import client from "../../../Images/testi1.png";
import "./Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./CustomArrows";

const testimonials = [
  {
    name: "Sukuntala",
    quote:
      "I’m undergoing treatment for PCOS in homeopathy. In a very short time, I’m relieved. I’m not using other medicines, but I still feel very relaxed. I’m very much happy and satisfied. Best homeopathy hospital in Hyderabad. I’m very much happy with the result.",
  },
  {
    name: "T. Radhika",
    quote:
      "I have been suffering from back pain for the past two years. The pain used to come down for some time and again became severe. I visited Dr. Vandna homeopathy clinic and started my treatment. I am very happy now; my pain has reduced. I used to take the help of a walking stick, and now I can walk without it after 3 months of treatment. I am grateful to Dr. Vandna.",
  },
  {
    name: "M. Srinivas Rao",
    quote:
      "I’ve been suffering from thyroid and back pain for a while now. My problems returned despite allopathy treatment. After starting treatment with Dr. Vandna, within a month, my back pain reduced and my thyroid levels returned to normal. I feel much healthier and better. Thank you so much to my doctor, Dr. Vandna, who gave me such great relief.",
  },
  {
    name: "Ankita",
    quote:
      "My name is Ankita, and I have suffered from diabetes. After 2 years of homeopathy treatment from Dr. Vandna, my diabetes got controlled while using homeopathic medicine. Thanks so much to one of the top homeopathy hospitals.",
  },
  {
    name: "Md. Jani Begum",
    quote:
      "I have been suffering from a dust allergy problem for many years. I took various treatments but did not get much relief. I started taking treatment at Dr. Vandna homeopathy clinic in Hyderabad on the recommendation of my relatives. I feel much better thanks to the doctors there, especially Dr. Vandna.",
  },
  {
    name: "Swapana",
    quote:
      "My name is Swapana. I have been suffering from asthma for the last 14 years and have taken allopathy medication for the last 10 years but did not get complete relief. After six months of starting treatment at Dr. Vandna homeopathy hospital, I got relief. Now I can breathe without using any inhalers. I will recommend Dr. Vandna homeopathy to anyone.",
  },
  {
    name: "Anjali",
    quote:
      "Homeopathy treatment is one of the best treatments for skin allergies. Dr. Vandna is taking excellent care of the patient. My daughter is very happy now, and she is improving a lot. Thanks to Dr. Vandna madam.",
  },
  {
    name: "Sankita",
    quote:
      "I am suffering from sinusitis problems. While searching for a homeopathy hospital in Hyderabad, I consulted doctors at Dr. Vandna homeopathy. The doctors explained why I must take regular treatment, and I’m pleased with the result.",
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="testimonial-wrapper" style={{marginTop:"-120px"}}>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="section-title">
              <h1>Testimonials</h1>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div className="testimonial-item-wrapper" key={testimonial.id}>
                <div className="testimonial-item">
                  <div className="testimonial-content">
                    <p className="quote">{testimonial.quote}</p>
                  </div>
                  <div className="testimonial-meta">
                    <h4 className="name">{testimonial.name}</h4>
                    <p className="position">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          {/* <Col md={6} lg={4} sm={12}>
            <div className="client-box text-center" data-aos="fade-right">
              <div className="client-img">
                <img src={client} alt="" />
              </div>
              <h3 className="mt-4">Aliceano Colby</h3>
              <span>CEO of Prime IT</span>
            </div>
          </Col>
          <Col md={6} lg={8} sm={12}>
            <div className="review-item text-start" data-aos="zoom-out">
              <h5>Awesome Work</h5>
              <p>
                “They really took my individual case to heart. Their team is
                very helpful. They all work together in an impressive way to
                make sure that my needs were met and I walked out pain free.”
              </p>
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
