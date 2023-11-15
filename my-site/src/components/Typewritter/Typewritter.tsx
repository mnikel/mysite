"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

function Typewriter() {
  const redirectToMainSite = (): void => {
    window.location.href = "/home";
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        redirectToMainSite();
      }
    };
    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <>
      <div className="my-10 flex flex-col items-center">
        <Link href="/home">
          <h1
            className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-9xl font-bold py-6"
            onClick={redirectToMainSite}
          >
            <span className="text-yellowbracket">&#123; </span>
            <span className="text-keyword">marcinnikel</span>
            <span className="text-yellowbracket"> &#125;</span>
          </h1>
        </Link>
        {/* ZMIENIC BACKGROUND NA MATRIX SPADAJACY KOD. MOZE ANIMACJA KROLIKA WSKAKUJACEGO DO DZIURY. */}

        <div className="w-max m-40 py-10 flex justify-center items-center">
          <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-6xl text-class font-extrabold py-2 animate-jump-in animate-duration-1000 animate-delay-[9000ms] animate-ease-in">
            <span className="text-class">
              To get inside take the blue pill or clik return...
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Typewriter;
