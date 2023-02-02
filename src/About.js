import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const About = () => {
  return (
    <div className="about">
      <p>
        My name is <b>Akinrimisi Tolulope S</b>. I'm a web developer who is
        getting himself acquinted with web developement technologies such as:
        HTML CSS & JS, React, Python and so on.
      </p>
      <p>You can follow me via my social media handles</p>
      
      <div className="fontAwe">
        <a href="https://twitter.com/Akinlope" rel="noreferrer" target={"_blank"}>
          <FontAwesomeIcon icon={faTwitter} className="faTw" />
        </a>

        <a href="https://www.instagram.com/its.tolulope" rel="noreferrer" target={"_blank"}>
          <FontAwesomeIcon icon={faInstagram} className="faIg" />
        </a>
        <a href="https://github.com/akinlope" rel="noreferrer" target={"_blank"}>
          <FontAwesomeIcon icon={faGithub} className="faGh" />
        </a>

        <a href="mailto:akinrimisitt@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} className="faGm"/>
        </a>
      </div>
    </div>
  );
};

export default About;
