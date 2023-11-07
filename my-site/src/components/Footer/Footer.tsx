import React from "react";
import { Mail, Github, Linkedin, X } from "../../app/icons";
import { contactInfo, ContactInfo } from "../data/data";
function Footer({ contactInfo }: ContactInfo) {
  return (
    <footer className="w-full bg-background shadow-footer mt-12 py-4 fixed bottom-0">
      <div className="flex items-center justify-center gap-2">
        <a href={`mailto:${contactInfo[0]}`} aria-label="E-mail">
          <Mail className="contact_icons" />
        </a>
        <a href={contactInfo[1]} aria-label="Github" target="_blank">
          <Github className="" />
        </a>
        <a href={contactInfo[2]} aria-label="LinkedIn" target="_blank">
          <Linkedin className="" />
        </a>
        <a href={contactInfo[3]} aria-label="X" target="_blank">
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
