"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import "boxicons/css/boxicons.min.css"; // Ensure the CSS is imported properly

const content = [
  {
    title: "Introduction",
    description:
      "I'm Ali Hooshmandghasrodasshti, a Computer Programming and Analysis student at George Brown College. My journey in the tech industry is fueled by a deep passion for computers and a desire to create innovative solutions from scratch. Through my studies and hands-on experiences, I've honed my skills in web and app development, working with various languages and technologies. I'm excited to share my projects and aspirations with you.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Introduction
      </div>
    ),
  },
  {
    title: "Educational Background",
    description:
      "I am currently pursuing a degree in Computer Programming and Analysis at George Brown College. This program has equipped me with a solid foundation in programming languages, software development methodologies, and problem-solving techniques. Additionally, it has further enhanced my skills in database analysis, web development, application development, and web application design. You can check my educational background page to get more familiar with my academic journey in detail.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Educational Background
      </div>
    ),
  },
  {
    title: "Professional Goals:",
    description:
      "My professional goal is to excel in the tech industry by leveraging my skills in programming, analysis, and development. I aim to secure a role where I can contribute to innovative projects, collaborate with talented teams, and continue learning and growing in my field.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Professional Goals
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <>
      <div className="p-10 mt-5">
        <StickyScroll content={content} />
      </div>
    </>
  );
}
