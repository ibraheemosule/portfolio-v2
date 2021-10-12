import React from "react";
import Modal from "react-bootstrap/Modal";

const AboutModal = (props) => {
  const { show, setShow } = props;
  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">About Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontWeight: 500 }}>
            My name is Ibrahim Sule, a Front-End Developer and a graduate of
            University of Lagos (BSc Petroleum and Gas Engineering).
          </p>
          <p style={{ fontWeight: 500 }}>
            I gravitated into frontend Development due to my developed passion
            for it and my eagerness to improve users internet experience. I
            believe as a frontend Developer, I stand a better chance of adding
            value to the society by creating web applications that solves real
            life problems and helping young developers reach their potentials.
          </p>
          <p style={{ fontWeight: 500 }}>
            When i'm not coding, i'm either engaging in football, surfing the
            internet, or playing video games.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AboutModal;
