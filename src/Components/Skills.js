import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { images } from "../Images/image";
import Zoom from "react-reveal/Zoom";

const Skills = () => {
  const img = Object.values(images),
    index = Object.keys(images);
  return (
    <div className="skills">
      <h3>
        <sup>____</sup> My Skills
      </h3>
      <Container>
        <Zoom>
          <Row className="flex">
            {img.slice(1, 4).map((image, i) => (
              <Col keys={i}>
                <img src={image} alt="html" />
                <h4 style={{ fontWeight: 900 }}>
                  {index.slice(1, img.length)[i]}
                </h4>
              </Col>
            ))}
          </Row>

          <Row className="flex">
            {img.slice(4, 7).map((image, i) => (
              <Col keys={i}>
                <img src={image} alt="html" />
                <h4 style={{ fontWeight: 900 }}>
                  {index.slice(4, img.length)[i]}
                </h4>
              </Col>
            ))}
          </Row>
          <Row className="flex">
            {img.slice(7, img.length).map((image, i) => (
              <Col keys={i}>
                <img src={image} alt="html" />
                <h4 style={{ fontWeight: 900 }}>
                  {index.slice(7, img.length)[i]}
                </h4>
              </Col>
            ))}
          </Row>
        </Zoom>
      </Container>
    </div>
  );
};

export default Skills;
