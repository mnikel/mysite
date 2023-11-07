import React from "react";
import {Mail, Github, Linkedin, X} from "../../app/icons"
function Footer() {
  return (
    <footer>
      <div>
        <a href={''} aria-label="E-mail">
          <Mail className="" />
        </a>
        <a href={''} aria-label="Github">
          <Github className="" />
        </a>
        <a href={''} aria-label="LinkedIn">
          <Linkedin className="" />
        </a>
        <a href={''} aria-label="X">
          <X className="" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
