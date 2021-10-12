import React from "react";
import Card from "react-bootstrap/Card";
import { ArrowRight } from "react-bootstrap-icons";

const ProjectTemplate = (props) => {
  const { image, link, title, text, tools, darkMode } = props;
  const { Title, Body, Text, Link, Footer } = Card;
  return (
    <Card
      style={{ backgroundColor: darkMode ? "#343534" : "rgb(211, 211, 211)" }}
      border="primary"
    >
      <Card.Img
        src={image}
        style={{
          borderBottom: darkMode
            ? "2px solid rgb(211, 211, 211)"
            : "2px solid #343534",
          width: "100",
          height: "auto",
        }}
        variant="top"
      />
      <Body>
        <Title>
          {title}
          <hr
            style={{
              width: "15%",
              borderWidth: "1px",
              marginLeft: "0",
              borderBottom: darkMode
                ? "2px solid rgb(211, 211, 211)"
                : "2px solid #343534",
            }}
          />
        </Title>
        <h6>{tools}</h6>
        <Text className="font-weight-light">{text}</Text>
      </Body>
      <Footer>
        <Link href={link} target="_blank">
          See Project
          <ArrowRight variant="primary" className="ml-1" />
        </Link>
      </Footer>
    </Card>
  );
};

export default ProjectTemplate;
