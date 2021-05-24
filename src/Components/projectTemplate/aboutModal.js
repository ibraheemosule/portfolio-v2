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
            My name is Sule, Ibrahim Omameigbe, a Front-End Developer and a
            graduate of University of Lagos (BSc Petroleum and Gas Engineering).
          </p>
          <p style={{ fontWeight: 500 }}>
            I gravitated into frontend Development due to my developed passion
            for it and my eagerness to improve users internet experience. I
            believe as a frontend Developer, I stand a better chance of adding
            value to the society through creativity and internet usability and
            help young developers aspiring to have a career in this field.
          </p>
          <p style={{ fontWeight: 500 }}>
            Since I started my frontend dev journey, i have engaged myself in
            series of projects which can be found in the projects section Also,
            I've engaged in various remote internships such as HNGi7, wejapa
            internship, bincom internship etc. and also an active member of the
            facebook Dev group, Lagos branch.
          </p>
          <p style={{ fontWeight: 500 }}>
            When i'm not coding, i'm either engaging in football, surfing the
            internet, or playing fifa.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AboutModal;
