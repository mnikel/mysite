"use client";
import React from "react";
import { Chrono } from "react-chrono";
import { ResumeData } from "../data/data";

const ResumeTimeline = () => {
  return (
    <div style={{ width: "1000px", height: "1000px" }}>
      <Chrono
        items={ResumeData}
        theme={{
          primary: '#DA7FD6',
          secondary: "yelllow",
          cardBgColor: '#4EC9B0',
          titleColor: '#fff',
          titleColorActive: '#DA7FD6',        }}
        mode="VERTICAL_ALTERNATING"
        slideShow={true}
        scrollable={{ scrollbar: true }}
        enableOutline
        cardHeight={100}
        slideItemDuration={3000}
        timelinePointShape={"diamond"}
/>
    </div>
  );
};

export default ResumeTimeline;
