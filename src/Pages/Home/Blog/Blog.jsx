import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import './Blog.css';

const Blog = (props) => {
    const {title, img, span1, span2} = props.blog;
    useEffect(() => {
        AOS.init({
                duration: 1000,
            });
        AOS.refresh();
      }, []);
    return (
        <Col md={6} lg={6} sm={12} xl={4}>
            <div className="single-blog-card" data-aos="fade-right">
                <div className="card-thumb">
                    <img src={img} alt="" />
                </div>
                <div className="card-content text-start">
                    <h3>{title}</h3>
                    <div className="card-meta d-flex justify-content-between">
                        <span>{span1}</span>
                        <span>{span2}</span>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Blog;