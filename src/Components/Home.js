import React from "react";
import Navigate from "./Navigate";
import Inspiration from "./Inspiration";
import About from "./About";
import Skills from "./Skills";
import Project from "./Projects";
import WorkInterest from "./WorkInterest";
import Container from "react-bootstrap/Container";

const Home = (props) => {
  const { img, setImg, darkMode, setDarkMode } = props;
  return (
    <>
      <Navigate
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        img={img}
        setImg={setImg}
      />
      <Container>
        <Inspiration />
        <About img={img} setImg={setImg} />
        <Skills />
        <Project darkMode={darkMode} />
        <WorkInterest />
      </Container>
    </>
  );
};

export default Home;
