import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ArrowRight } from "react-bootstrap-icons";
import Link from "react-bootstrap/NavLink";
import AboutModal from "./projectTemplate/aboutModal";
import ImageZoom from "./projectTemplate/ImageZoom";

const About = (props) => {
  const [show, setShow] = useState(false);
  const { img, setImg } = props;
  return (
    <div className="about">
      <h3>
        <sup>____</sup> About Me
      </h3>
      <Row>
        <Col sm={8}>
          <p>
            I'm Ibrahim Sule, a Software Engineer (frontend), a WordPress
            Developer and a Cloud Engineering enthusiast. I specialize in
            websites, web applications, e-commerce, frontend development etc.
          </p>
        </Col>
      </Row>
      <Row>
        <Link>
          <Button variant="secondary" onClick={() => setShow(true)}>
            Read More
            <ArrowRight className="ml-1" />
          </Button>
        </Link>
      </Row>

      <AboutModal show={show} setShow={setShow} />
      <ImageZoom img={img} setImg={setImg} />
    </div>
  );
};

export default About;
