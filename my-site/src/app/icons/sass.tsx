import React from "react";

interface SassProps {
  className?: string;
}

export const Sass: React.FC<SassProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Sass"
    role="img"
    viewBox="0 0 512 512"
    fill="#000000"
    height="50"
    width="50"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <rect width="512" height="512" rx="15%" fill="#c69"></rect>
      <path
        className="change_on_hover"
        d="M258,88c-96,33-158,100-152,140s66,72,93,93h0c-35,18-79,45-78,80,2,48,54,33,76,19s44-53,30-94c31-8,58,2,66,8,31,22,15,47,4,51s-4,6,3,4,22-12,22-29c0-43-46-63-103-48-33-35-78-51-76-89,1-14,6-50,95-95s152-27,144,14c-12,62-120,104-158,68-2-4-9-7-5,4,20,50,182,27,189-79C410,79,329,64,258,88ZM172,408c-25,8-24-8-23-14,3-17,17-38,59-59C220,373,193,402,172,408Z"
        fill="#ffffff"
      ></path>
    </g>
  </svg>
);
