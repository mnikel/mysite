import React from "react";
import { Mail, Github, Linkedin, X } from "../../app/icons";
import { ContactInfo, homeData } from "../data/data";
import ContactForm from "../ContactForm/ContactForm";

function Footer({ contactInfo }: ContactInfo) {
  return (
    <footer className="" id="contact">
      <div className="">
        <ContactForm />
      </div>
      <div className="">
        <h1>{homeData.footer}</h1>
      </div>
      <div className="">
        <a href={`mailto:${contactInfo[0]}`} aria-label="E-mail">
          <Mail className="contact_icons" />
        </a>
        <a href={contactInfo[1]} aria-label="Github" target="_blank">
          <Github className="contact_icons" />
        </a>
        <a href={contactInfo[2]} aria-label="LinkedIn" target="_blank">
          <Linkedin className="contact_icons" />
        </a>
        <a href={contactInfo[3]} aria-label="X" target="_blank">
          <X className="contact_icons" />
        </a>
      </div>
      <div className="">
        <p className="text-string bottom-0">All rights reserved by mnikel</p>
      </div>
    </footer>
  );
}

export default Footer;
