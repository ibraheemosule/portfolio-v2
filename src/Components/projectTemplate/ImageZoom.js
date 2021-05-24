import React from "react";
import { images } from "../../Images/image";
import Modal from "react-bootstrap/Modal";

const Image = (props) => {
  const { img, setImg } = props;
  return (
    <div style={{ borderRadius: "50%", backgroundColor: "transparent" }}>
      <Modal
        style={{ backgroundColor: "transparent" }}
        size="md"
        show={img}
        onHide={() => setImg(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            src={images.avi}
            alt="myself"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Image;
