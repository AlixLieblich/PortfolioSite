import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const divStyle = {
  display: "inline-block"
}

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 0
      }}
  />
);

export default function SocialFollow() {
  return (
    <div style={divStyle}>
      <br></br>
      <br></br>
      <ColoredLine />
      <h3>Let's Connect!</h3>
      <a
        href="https://www.linkedin.com/in/alixandra-lieblich-572060125/"
        className="linkedIn social"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      <a
        href="https://github.com/AlixLieblich"
        className="github social"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://twitter.com/AlixLieblich" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <h3>Built with 💙 with React</h3>
    </div>
  );
}
