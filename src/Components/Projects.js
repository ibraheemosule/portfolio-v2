import React from "react";
import Row from "react-bootstrap/Row";
import ProjectTemplate from "./projectTemplate/projectTemplate";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { projectImages } from "../Images/image";

const Project = (props) => {
  const { jsonplaceholderposts, starwars, bejamas } = projectImages;
  return (
    <Container fluid>
      <Row id="projects">
        <h3>
          <sup>____</sup> My Projects
        </h3>
        <CardDeck>
          <ProjectTemplate
            image={jsonplaceholderposts}
            link={"https://jsonplaceholderposts.netlify.app"}
            title={"Blog Posts"}
            text={`Created a a blog post with Vue.js using the fetched data from jsonplaceholder website`}
            tools={"Html, css, Javascript, Vue, Bootstrap"}
            darkMode={props.darkMode}
          />
          <ProjectTemplate
            image={starwars}
            link={"https://ios-starwars.netlify.app"}
            title={"Starwars Movie"}
            text={`A web application created using starwars api that shows the characters, planets and starships`}
            tools={"Html, css, Javascript, vue, starwars api, vuex"}
            darkMode={props.darkMode}
          />
          <ProjectTemplate
            image={bejamas}
            link={"https://ios-bejamas.netlify.app"}
            title={"A Products Landing Page"}
            text={`An products landing page created with react and pictures gotten from pexels. products can be sorted and filtered`}
            tools={"html, css, vue, tailwind"}
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
