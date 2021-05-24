import React from "react";
import "../styles/styles.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { images } from "../Images/image";

const Navigate = (props) => {
  const { Link } = Nav,
    { Brand, Toggle, Collapse } = Navbar,
    { setDarkMode, darkMode, setImg } = props;

  const Toggler = () => {
    setDarkMode(() => !darkMode);
    if (darkMode) {
      document.getElementsByTagName("html")[0].style.backgroundColor =
        "#343534";
    } else {
      document.getElementsByTagName("html")[0].style.backgroundColor =
        "rgb(211, 211, 211)";
    }
  };
  return (
    <Navbar className="navFirst" expand="lg">
      <Toggle href="#my-app" aria-controls="my-app" />
      <Collapse id="my-app">
        <Nav className="mr-auto ml-auto">
          <Link exact to="/">
            Home
          </Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </Nav>
      </Collapse>
      <div className="logo-button">
        <button onClick={Toggler}>
          <span className="light">D</span>
          <span className="dark">L</span>
        </button>
        <Brand>
          <img onClick={() => setImg(true)} src={images.avi} alt="my avi" />
        </Brand>
      </div>
    </Navbar>
  );
};

export default Navigate;
