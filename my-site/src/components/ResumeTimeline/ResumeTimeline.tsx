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
          primary: '#4EC9B0',
          secondary: "fff",
          cardBgColor: '#4EC9B0',
          titleColor: '#4EC9B0',
          titleColorActive: '#DA7FD6',        }}
        mode="VERTICAL_ALTERNATING"
        slideShow={true}
        scrollable
        enableOutline
      />
    </div>
  );
};

export default ResumeTimeline;
