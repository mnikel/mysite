"use client";
import React, { useState } from "react";
import ResumeTimeline from "../ResumeTimeline/ResumeTimeline";
function AboutMeToggleButton() {
  const [showTimeline, setShowTimeline] = useState(false);

  const handleClick = () => {
    setShowTimeline(!showTimeline);
  };

  return (
    <div>
      {/* TUTAJ JSLI BEDZIE TO CHRONO, TO ZROBIC Z TEGO MODAL, BY NIE ZABURZAL DESIGNU.
      ALBO NAPISAC FAKTYCZNIE SAMEMU I ULOZYC OD POCZATKU. */}
      <button
        className=""
        onClick={handleClick}
      >
        Toggle Timeline
      </button>
      {showTimeline && (
        <div className="">
          <ResumeTimeline />
        </div>
      )}
    </div>
  );
}

export default AboutMeToggleButton;
