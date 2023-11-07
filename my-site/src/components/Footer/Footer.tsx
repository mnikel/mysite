import React from "react";
import {Mail, Github, Linkedin, X} from "../../app/icons"
function Footer() {
  return (
    <footer className="w-full bg-background shadow-footer mt-12 py-4 fixed bottom-0">
      <div className="flex items-center justify-center gap-2">
        <a href={''} aria-label="E-mail">
          <Mail className="contact_icons" />
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
      <div className="flex items-center justify-center gap-2">
        <p className="text-string">All rights reserved by mnikel </p>
      </div>
    </footer>
  );
}

export default Footer;
