import React from "react";
import { FlipWords } from "./ui/flip-words";

export default function FlipWordsDemo() {
  const words = ["Frontend Expertise", "Backend Development", "Database Design", "Tools & Frameworks","DevOps Ninja","Full Stack Developer","Smooth Integration","Optimizing Database","DevOps Automation","Reliable Web Apps"];

  return (
    (<div className=" flex justify-center items-center px-4">
      <div
        className="text-4xl mx-auto font-normal text-white">
        <FlipWords words={words} /> <br />
      </div>
    </div>)
  );
}
