import ProjectTemplate from "./projectTemplate/projectTemplate";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";
import * as _ from "../Images/image";

const AllProjects = props => {
  const { darkMode } = props;
  return (
    <>
      <div style={{ textAlign: "center", paddingTop: "7vh" }}>
        <Link to="/">Return Home</Link>
      </div>
      <Container style={{ marginTop: "7vh" }}>
        <CardDeck style={{ marginBottom: "7vh" }}>
          <ProjectTemplate
            image={_.githubtrends}
            link={"https://ios-githubtrends.vercel.app"}
            title={"A Replica of github trending page"}
            text={`A replica of github trends page built using typescript react and tailwind`}
            tools={"typescript, react, tailwind"}
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
            darkMode={darkMode}
          />
          <ProjectTemplate
            image={_.covidStats}
            link={"https://ios-firstTemplate.netlify.app/"}
            title={"Nigeria Covid Data"}
            text={`A web app for keeping track of covid stats in Nigeria`}
            tools={"html, css, vue, tailwind "}
            darkMode={darkMode}
          />
        </CardDeck>
        <CardDeck style={{ marginBottom: "7vh" }}>
          <ProjectTemplate
            image={_.bejamas}
            link={"https://ios-bejamas.netlify.app"}
            title={"A Products Landing Page"}
            text={`A products landing page created with react and pictures gotten from pexels. products can be sorted and filtered`}
            tools={"html, scss, react"}
            darkMode={props.darkMode}
          />

          <ProjectTemplate
            image={_.ecommerce}
            link={"https://ios-ecommerce.netlify.app"}
            title={"An Ecommerce Web App"}
            text={`An ecommerce web app created using vue, tailwind and pictures gotten from pexels api, and firebase user authentication added to it.`}
            tools={"html, css, vue, composition api, tailwind"}
            darkMode={props.darkMode}
          />
          <ProjectTemplate
            image={_.starwars}
            link={"https://ios-starwars.netlify.app"}
            title={"Starwars Movie"}
            text={`A web application created using starwars api that shows the characters, planets and starships`}
            tools={"Html, css, Javascript, vue, starwars api, vuex"}
            darkMode={props.darkMode}
          />
        </CardDeck>
        <CardDeck style={{ marginBottom: "7vh" }}>
          <ProjectTemplate
            image={_.jsonplaceholderposts}
            link={"https://jsonplaceholderposts.netlify.app"}
            title={"Blog Posts"}
            text={`Created a a blog post with Vue.js using the fetched data from jsonplaceholder website`}
            tools={"Html, css, Javascript, Vue, Bootstrap"}
            darkMode={props.darkMode}
          />

          <ProjectTemplate
            image={_.todolist}
            link={"https://ios-todolist.netlify.app"}
            title={"Todo List"}
            text={`A todo list that keeps track of your daily activities, 
              when it started and when completed`}
            tools={"Html, css, Javascript"}
            darkMode={darkMode}
          />
          <ProjectTemplate
            image={_.drugstoc}
            link={"https://drugstoc.netlify.app"}
            title={"Lists Page"}
            text={`A List landing page where new lists can be added, filtered by price, sorted alphabetically and by price and items can be deleted from the list`}
            tools={"Vue, css, vuex"}
            darkMode={darkMode}
          />
        </CardDeck>
        <CardDeck style={{ marginBottom: "7vh" }}>
          <ProjectTemplate
            image={_.weatherapp}
            link={"https://ios-weatherapp.netlify.app/"}
            title={"Weather App"}
            text={`A weather app that shows the next 5 days weather forecast of a city`}
            tools={"vue, typescript, composition api"}
            darkMode={darkMode}
          />
          <ProjectTemplate
            image={_.ddlabs}
            link={"https://ddlabs.netlify.app"}
            title={"Ddlabs Task"}
            text={`Given a frontend task to replicate a landing page design using react`}
            tools={"Html, css, bootstrap, Javascript, react"}
            darkMode={darkMode}
          />
          <ProjectTemplate
            image={_.decideForMe}
            link={"https://ios-decideforme.netlify.app"}
            title={"A React Todo"}
            text={`Created another todo using react and added the random selection option`}
            tools={"html, css, react, scss"}
            darkMode={darkMode}
          />
        </CardDeck>
        <CardDeck style={{ marginBottom: "7vh" }}>
          <ProjectTemplate
            image={_.beatchain}
            link={"https://beatchain.netlify.app"}
            title={"A simple landing lage"}
            text={`A simple landing page that has a video which can be played by either clicking play or hovering on it.`}
            tools={"html, react, scss, javascript"}
            darkMode={props.darkMode}
          />
          <ProjectTemplate
            image={_.dashboard}
            link={"https://proexe.vercel.app"}
            title={"Proexe dashboard"}
            text={`Created a dashboard with react and redux. users can be added, removed and have their details editted.`}
            tools={"react, javascript, redux"}
            darkMode={darkMode}
          />
          <ProjectTemplate
            image={_.receiptGenerator}
            link={"https://ios-receiptGenerator.netlify.app"}
            title={"Receipt Generator"}
            text={`A receipt generator web app created for generating receipts for transactions made`}
            tools={"html, css, javascript"}
            darkMode={darkMode}
          />
        </CardDeck>
        <CardDeck style={{ marginBottom: "7vh" }}>
          <ProjectTemplate
            image={_.calculatorapp}
            link={"https://ios-calculatorapp.netlify.app"}
            title={"Calculator"}
            text={`Created a simple web app calculator using 
              css grid and vanilla js`}
            tools={"Html, css, Javascript"}
            darkMode={darkMode}
          />
          <ProjectTemplate
            image={_.softcompage}
            link={"https://ios-softcompage.netlify.app"}
            title={"Softcom Landing Page"}
            text={`Created a replica of https://softcom.ng landing page`}
            tools={"Html, css, Javascript"}
            darkMode={darkMode}
          />
          <ProjectTemplate
            image={_.jumpgame}
            link={"https://ios-jumpgame.netlify.app"}
            title={"Jump Game"}
            text={`Created a jump game with css animations and vanilla javascript`}
            tools={"Html, css, Javascript"}
            darkMode={darkMode}
          />
        </CardDeck>

        <div style={{ textAlign: "center", marginTop: "7vh" }}>
          <Link to="/">Return Home</Link>
        </div>
      </Container>
    </>
  );
};

export default AllProjects;
