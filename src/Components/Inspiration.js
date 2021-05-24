import React from "react";
import { useEffect } from "react";
import "../styles/styles.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Inspiration = () => {
  useEffect(() => {
    let el = document.getElementsByClassName("animate");

    const run = function () {
      let x = 0;
      if (x < el.length) {
        let i = 0;
        const opacity = setInterval(() => {
          if (i < 1) {
            el[x].style.opacity = i;
            i += 0.1;
          }
        }, 50);
        const interval = setInterval(() => {
          x++;
          i = 0;
          if (x > el.length - 1) {
            clearInterval(interval);
            clearInterval(opacity);
            for (let n = 0; n < el.length; n++) el[n].style.opacity = 1;
          }
        }, 500);
      }
    };
    run();
  }, []);
  return (
    <Row>
      <Col className="animation">
        <h1>
          <span className="animate">If </span>{" "}
          <span className="animate">You </span>
          <span className="animate">Can </span>
          <span className="animate">Imagine</span>{" "}
          <span className="animate">it, </span>
          <br />
          <span className="animate">I </span>
          <span className="animate">Can</span>{" "}
          <span className="animate">Build </span>
          <span className="animate">It</span>
        </h1>
      </Col>
    </Row>
  );
};

export default Inspiration;
