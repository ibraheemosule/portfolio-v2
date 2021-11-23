import ProjectTemplate from "./projectTemplate/projectTemplate";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";
import { projectImages } from "../Images/image";

const AllProjects = props => {
  const {
    calculatorapp,
    jumpgame,
    softcompage,
    todolist,
    decideForMe,
    covidStats,
    ddlabs,
    revealbot,
    cyhermes,
    receiptGenerator,
    drugstoc,
    jsonplaceholderposts,
    bejamas,
    starwars,
    ecommerce,
    beatchain,
    githubtrends,
    bincom,
  } = projectImages;

  const { darkMode } = props;
  return (
    <>
      <div style={{ textAlign: "center", paddingTop: "7vh" }}>
        <Link to="/">Return Home</Link>
      </div>
      <Container style={{ marginTop: "7vh" }}>
        <CardDeck style={{ marginBottom: "7vh" }}>
          <ProjectTemplate
            image={githubtrends}
            link={"https://ios-githubtrends.netlify.app"}
            title={"A Replica of github trending page"}
            text={`A replica of github trends page built using typescript react and tailwind`}
            tools={"typescript, react, tailwind"}
            darkMode={props.darkMode}
          />

          <ProjectTemplate
            image={beatchain}
            link={"https://beatchain.netlify.app"}
            title={"A simple landing lage"}
            text={`A simple landing page that has a video which can be played by either clicking play or hovering on it.`}
            tools={"html, react, scss, javascript"}
            darkMode={props.darkMode}
          />
          <ProjectTemplate
            image={covidStats}
            link={"https://ios-firstTemplate.netlify.app/"}
            title={"Nigeria Covid Data"}
            text={`A web app for keeping track of covid stats in Nigeria`}
            tools={"html, css, vue, tailwind "}
            darkMode={darkMode}
          />
        </CardDeck>
        <CardDeck style={{ marginBottom: "7vh" }}>
          <ProjectTemplate
            image={bejamas}
            link={"https://ios-bejamas.netlify.app"}
            title={"A Products Landing Page"}
            text={`A products landing page created with react and pictures gotten from pexels. products can be sorted and filtered`}
            tools={"html, scss, react"}
            darkMode={props.darkMode}
          />

          <ProjectTemplate
            image={ecommerce}
            link={"https://ios-ecommerce.netlify.app"}
            title={"An Ecommerce Web App"}
            text={`An ecommerce web app created using vue, tailwind and pictures gotten from pexels api, and firebase user authentication added to it.`}
            tools={"html, css, vue, tailwind"}
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
        </CardDeck>
        <CardDeck style={{ marginBottom: "7vh" }}>
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
            darkMode={darkMode}
          />
          <ProjectTemplate
            image={drugstoc}
            link={"https://drugstoc.netlify.app"}
            title={"Lists Page"}
            text={`A List landing page where new lists can be added, filtered by price, sorted alphabetically and by price and items can be deleted from the list`}
            tools={"Vue, css, vuex"}
            darkMode={darkMode}
          />
        </CardDeck>
        <CardDeck style={{ marginBottom: "7vh" }}>
          <ProjectTemplate
            image={bincom}
            link={"https://ios-nyscpage.netlify.app/"}
            title={"nysc story"}
            text={`One of the first pages i built while learning DOM manipulation in javascript`}
            tools={"html, css, javascript"}
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
            image={softcompage}
            link={"https://ios-softcompage.netlify.app"}
            title={"Softcom Landing Page"}
            text={`Created a replica of https://softcom.ng landing page`}
            tools={"Html, css, Javascript"}
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
            image={jumpgame}
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
