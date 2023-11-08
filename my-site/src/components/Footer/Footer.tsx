import React from "react";
import { Mail, Github, Linkedin, X } from "../../app/icons";
import { contactInfo, ContactInfo, homeData } from "../data/data";
import ContactForm from "../ContactForm/ContactForm";

function Footer({ contactInfo }: ContactInfo) {
  return (
    <footer className="flex items-center justify-center w-full bg-background shadow-footer py-4 flex-wrap" id="contact">
      <div className="w-1/3">
        <ContactForm />
      </div>
      <div className="w-1/3">
        <h1>{homeData.footer}</h1>
      </div>
      <div className="flex items-center justify-center gap w-1/3">
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
      <div className="w-full flex items-center justify-center mt-auto">
        <p className="text-string bottom-0">All rights reserved by mnikel</p>
      </div>
    </footer>
  );
}

export default Footer;
