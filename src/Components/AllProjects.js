import React from "react";
import ProjectTemplate from "./projectTemplate/projectTemplate";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import { projectImages } from "../Images/image";

const AllProjects = (props) => {
  const {
    calculatorapp,
    jumpgame,
    softcompage,
    todolist,
    jsonplaceholderposts,
    decideForMe,
    vonth,
    firstTemplate,
    ddlabs,
    revealbot,
    cyhermes,
    receiptGenerator,
  } = projectImages;

  const { darkMode } = props;
  return (
    <>
      <div style={{ textAlign: "center", paddingTop: "7vh" }}>
        <Link to="/">Return Home</Link>
      </div>
      <Container style={{ marginTop: "7vh" }}>
        <Zoom>
          <CardDeck style={{ marginBottom: "7vh" }}>
            <ProjectTemplate
              image={jsonplaceholderposts}
              link={"https://jsonplaceholderposts.netlify.app"}
              title={"Posts Blog"}
              text={`Created a posts page with vue.js using data 
              fetched from jsonplaceholderapi`}
              tools={"Html, css, scss, javascript, vue"}
              darkMode={darkMode}
            />

            <ProjectTemplate
              image={todolist}
              link={"https://ios-todolist.netlify.app"}
              title={"Todo List"}
              text={`A todo list that keeps track of your daily activities, 
              when it started and when completed`}
              tools={"Html, css, Javascript"}
              darkMode={darkMode}
            />
            <ProjectTemplate
              image={softcompage}
              link={"https://ios-softcompage.netlify.app"}
              title={"Softcom Landing Page"}
              text={`Created a replica of https://softcom.ng landing page`}
              tools={"Html, css, Javascript"}
              darkMode={darkMode}
            />
          </CardDeck>
          <CardDeck style={{ marginBottom: "7vh" }}>
            <ProjectTemplate
              image={jumpgame}
              link={"https://ios-jumpgame.netlify.app"}
              title={"Jump Game"}
              text={`Created a jump game with css animations and vanilla javascript`}
              tools={"Html, css, Javascript"}
              darkMode={darkMode}
            />
            <ProjectTemplate
              image={ddlabs}
              link={"https://ddlabs.netlify.app"}
              title={"Ddlabs Task"}
              text={`Given a frontend task to replicate a landing page design using react`}
              tools={"Html, css, bootstrap, Javascript, react"}
              darkMode={darkMode}
            />
            <ProjectTemplate
              image={decideForMe}
              link={"https://ios-decideforme.netlify.app"}
              title={"A React Todo"}
              text={`Created another todo using react and added the random selection option`}
              tools={"html, css, react, scss"}
              darkMode={darkMode}
            />
          </CardDeck>
          <CardDeck style={{ marginBottom: "7vh" }}>
            <ProjectTemplate
              image={calculatorapp}
              link={"https://ios-calculatorapp.netlify.app"}
              title={"Calculator"}
              text={`Created a simple web app calculator using 
              css grid and vanilla js`}
              tools={"Html, css, Javascript"}
              darkMode={darkMode}
            />
            <ProjectTemplate
              image={vonth}
              link={"https://vonth.com.ng"}
              title={"Vonth News Media"}
              text={`A blog website for news update created for a client as Astract9 Designs 
              (images were provided by the client)`}
              tools={"Wordpress"}
              darkMode={darkMode}
            />
            <ProjectTemplate
              image={receiptGenerator}
              link={"https://ios-receiptGenerator.netlify.app"}
              title={"Receipt Generator"}
              text={`A receipt generator web app created for generating receipts for transactions made`}
              tools={"html, css, javascript"}
              darkMode={darkMode}
            />
          </CardDeck>
          <CardDeck style={{ marginBottom: "7vh" }}>
            <ProjectTemplate
              image={revealbot}
              link={"https://ios-revealbot.netlify.app/"}
              title={"Frontend mentors task"}
              text={`Created a replica of the revealbot homepage on frontend mentors`}
              tools={"Html, css"}
              darkMode={darkMode}
            />
            <ProjectTemplate
              image={cyhermes}
              link={"https://cyhermestask.netlify.app/"}
              title={"Cyhermes Task"}
              text={`Given a frontend task to replicate a landing page design using vue`}
              tools={"html, css, bootstrap, vue"}
              darkMode={darkMode}
            />
            <ProjectTemplate
              image={firstTemplate}
              link={"https://ios-firsttemplate.netlify.app/"}
              title={"HNGi7 Task"}
              text={`Tasked to create a desktop-view template`}
              tools={"html, css, netlify"}
              darkMode={darkMode}
            />
          </CardDeck>
        </Zoom>
        <div style={{ textAlign: "center", marginTop: "7vh" }}>
          <Link to="/">Return Home</Link>
        </div>
      </Container>
    </>
  );
};

export default AllProjects;
