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
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-class hover:bg-keyword focus:outline-none"
        onClick={handleClick}
      >
        Toggle Timeline
      </button>
      {showTimeline && (
        <div className="mt-4">
          <ResumeTimeline />
        </div>
      )}
    </div>
  );
}

export default AboutMeToggleButton;
