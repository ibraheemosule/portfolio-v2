import React from "react";
import Col from "react-bootstrap/Col";

const SocialIcons = (props) => {
  const { Social, link, platform } = props;
  return (
    <Col xs={2}>
      <a href={link} target="_blank" rel="noreferrer" alt={platform}>
        {Social}
      </a>
    </Col>
  );
};
export default SocialIcons;
