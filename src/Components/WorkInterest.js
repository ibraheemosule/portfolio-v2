import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SocialIcons from "./projectTemplate/SocialIcons";
import { Facebook } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import { Whatsapp } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";

const WorkInterest = () => (
  <div className="about">
    <h3>
      <sup>____</sup> Work Interest
    </h3>
    <Row>
      <Col sm={8}>
        <p>
          I'm interested in a working for a company that promotes employee's
          growth, provides a flexible work enviroment and values employee's
          welfare. Also, I fancy working on freelance WordPress projects and
          exciting web apps projects.
        </p>
      </Col>
    </Row>
    <Row style={{ marginTop: "10vh" }}>
      <Col sm={8}>
        <h3>
          <sup>____</sup> Contact
        </h3>
      </Col>
    </Row>
    <Row id="contact" style={{ textAlign: "center", marginTop: "4vh" }}>
      <SocialIcons
        Social={<Facebook size={30} />}
        link={"https://www.facebook.com/ibraheemsulay/"}
        platform={"Facebook"}
      />
      <SocialIcons
        Social={<Twitter size={30} />}
        link={"https://www.twitter.com/ibraheemsulay/"}
        platform={"Twitter"}
      />
      <SocialIcons
        Social={<Github size={30} />}
        link={"https://www.github.com/ibraheemsulay/"}
        platform={"Github"}
      />
      <SocialIcons
        Social={<Envelope size={30} />}
        link={"mailto:ibraheemsulay@gmail.com"}
        platform={"Mail"}
      />
      <SocialIcons
        Social={<Whatsapp size={30} />}
        link={"https://wa.me/+2348067153177"}
        platform={"Whatsapp"}
      />
      <SocialIcons
        Social={<Linkedin size={30} />}
        link={"https://www.linkedin.com/in/ibrahim-sule-23478919a"}
        platform={"Linkedin"}
      />
    </Row>
  </div>
);

export default WorkInterest;
