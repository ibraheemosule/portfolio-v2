import { useEffect } from "react";
import "../styles/styles.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Inspiration = () => {
  useEffect(() => {
    let el = document.getElementsByClassName("animate"),
      x = 0,
      i = 0;
    const opacity = setInterval(() => {
      if (i < 1) {
        el[x].style.opacity = i;
        i += 0.1;
      } else {
        i = 0;
        ++x;
      }
      if (x === el.length) {
        for (let element of el) element.style.opacity = 1;
        clearInterval(opacity);
      }
    }, 50);
  }, []);
  return (
    <Row>
      <Col className="animation">
        <h1>
          <span className="animate">If </span>
          <span className="animate">You </span>
          <span className="animate">Can </span>
          <span className="animate">Imagine </span>
          <span className="animate">it, </span>
          <span className="animate">I </span>
          <span className="animate">Can </span>
          <span className="animate">Build </span>
          <span className="animate">It</span>
        </h1>
      </Col>
    </Row>
  );
};

export default Inspiration;
