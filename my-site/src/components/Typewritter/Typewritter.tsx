import React from "react";

function Typewriter() {
  return (
    <>
      <div>
        <div className="w-max">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl font-bold">
            <span className="text-yellowbracket">&#123; </span>
            <span className="text-keyword">marcinnikel</span>
            <span className="text-yellowbracket"> &#125;</span>
          </h1>
        </div>
        <div className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
          <p className="text-class">
            To get inside, click the name or press return...
          </p>
        </div>
      </div>
    </>
  );
}

export default Typewriter;
