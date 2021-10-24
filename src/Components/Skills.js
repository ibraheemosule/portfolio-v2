import React from "react";
import Container from "react-bootstrap/Container";

const Skills = () => {
  const skills = [
    "html",
    "css",
    "bootstrap",
    "tailwind",
    "javascript",
    "typescript",
    "react",
    "vue",
    "nuxt",
    "wordpress",
  ];
  return (
    <div className="skills">
      <h3>
        <sup>____</sup> My Skills
      </h3>
      <Container>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: "60px",
          }}
        >
          {skills.map((value, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#0000ff44",
                borderRadius: "5px",
                padding: "5px 10px",
                margin: "10px",
              }}
            >
              <span style={{ fontWeight: 600 }}>{value}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Skills;
