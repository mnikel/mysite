import React from "react";

interface FigmaProps {
  className?: string;
}

export const Figma: React.FC<FigmaProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7.678 7.68"
    height="50"
    width="50"
  >
    <path
      d="M2.56 7.68A1.28 1.28 0 0 0 3.84 6.4V5.12H2.56a1.28 1.28 0 0 0 0 2.56z"
      fill="#0acf83"
      className="change_on_hover"
    />
    <path
      d="M1.28 3.84a1.28 1.28 0 0 1 1.28-1.28h1.28v2.56H2.56a1.28 1.28 0 0 1-1.28-1.28z"
      fill="#a259ff"
      className="change_on_hover"
    />
    <path
      d="M1.28 1.28A1.28 1.28 0 0 1 2.559 0h1.28v2.56H2.56a1.28 1.28 0 0 1-1.28-1.28z"
      fill="#f24e1e"
      className="change_on_hover"
    />
    <path
      d="M3.84 0h1.28a1.28 1.28 0 0 1 0 2.56H3.84z"
      fill="#ff7262"
      className="change_on_hover"
    />
    <path
      d="M6.4 3.84a1.28 1.28 0 0 1-2.56 0 1.28 1.28 0 0 1 2.56 0z"
      fill="#1abcfe"
      className="change_on_hover"
    />
  </svg>
);
