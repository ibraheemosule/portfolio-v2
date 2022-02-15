import React from "react";
import Row from "react-bootstrap/Row";
import ProjectTemplate from "./projectTemplate/projectTemplate";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import * as _ from "../Images/image";

const Project = props => {
  return (
    <Container fluid>
      <Row id="projects">
        <h3>
          <sup>____</sup> My Projects
        </h3>
        <CardDeck>
          <ProjectTemplate
            image={_.bejamas}
            link={"https://ios-bejamas.netlify.app"}
            title={"A Products Landing Page"}
            text={`A products landing page created with react and pictures gotten from pexels. products can be sorted and filtered`}
            tools={"html, scss, react"}
            darkMode={props.darkMode}
          />

          <ProjectTemplate
            image={_.formpl}
            link={"https://formpl.vercel.app"}
            title={"Formpl"}
            text={`Created a templates layout with over 25k array list fetched from the backend, templates can be filtered and sorted`}
            tools={
              "React, typescript, javascript, redux toolkit with typescript"
            }
            darkMode={props.darkMode}
          />
          <ProjectTemplate
            image={_.weatherapp}
            link={"https://ios-weatherapp.netlify.app/"}
            title={"Weather App"}
            text={`A weather app that shows the next 5 days weather forecast of a city`}
            tools={"vue, typescript, composition api"}
            darkMode={props.darkMode}
          />
        </CardDeck>
      </Row>
      <Row>
        <Link style={{ color: "white" }} to="/AllProjects">
          <Button variant="secondary">
            View More Projects
            <ArrowRight className="ml-1" />
          </Button>
        </Link>
      </Row>
    </Container>
  );
};

export default Project;
