import React from "react";

interface HtmlProps {
  className?: string;
}

export const Html: React.FC<HtmlProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="50"
    width="50"
    viewBox="0 0 32 32"
  >
    <path
      d="M4.46 28.802L1.892.001h28.216l-2.57 28.797L15.982 32z"
      fill="#e44d26"
      className="change_on_hover"
    />
    <path
      d="M25.337 26.964l2.197-24.608H16v27.197z"
      fill="#f16529"
      className="change_on_hover"
    />
    <path
      d="M15.988 5.888H7.142l.953 10.682H16v-3.532h-4.674l-.323-3.617H16V5.888zM16 22.2l-.015.004-3.934-1.062-.25-2.817H8.253l.495 5.546 7.236 2 .016-.005z"
      fill="#ebebeb"
    />
    <path
      d="M15.988 16.57h4.35l-.4 4.58-3.94 1.063v3.675l7.242-2.007.97-10.845H16zm8.764-9.734l.084-.948h-8.85V9.42h8.532l.07-.794z"
      fill="#fff"
    />
  </svg>
);
