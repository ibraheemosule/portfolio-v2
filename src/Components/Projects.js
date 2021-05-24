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
  const { softcompage, todolist, jsonplaceholderposts } = projectImages;
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
            image={todolist}
            link={"https://ios-todolist.netlify.app"}
            title={"Todo List"}
            text={`A todo list that keeps track of your daily activities, 
            when it started and when completed`}
            tools={"Html, css, Javascript"}
            darkMode={props.darkMode}
          />
          <ProjectTemplate
            image={softcompage}
            link={"https://ios-softcompage.netlify.app"}
            title={"Softcom Landing Page"}
            text={`Created a replica of https://softcom.ng landing page`}
            tools={"Html, css, Javascript"}
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
