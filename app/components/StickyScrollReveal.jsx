"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: " Passion for Technology",
    description:
      "Passion for TechnologyTechnology is more than just a tool; it is a bridge to the future. My passion for technology stems from its limitless potential to solve real-world problems, enhance human capabilities, and drive innovation. I am committed to exploring, learning, and mastering the evolving landscape of artificial intelligence, machine learning, and computer vision to make a meaningful impact.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Keep learning
      </div>
    ),
  },
  {
    title: "Commitment to Excellence",
    description:
      "With a strong foundation in programming, data science, and system architecture, I continuously push the boundaries of my knowledge. I believe that true innovation comes from perseverance, adaptability, and a relentless pursuit of excellence. Every project I undertake is a step toward building smarter, more efficient, and impactful technologies.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        keep pushing boundaries
      </div>
    ),
  },
  {
    title: " Vision for the Future",
    description:
      "I aspire to contribute to the advancement of intelligent systems that empower individuals and businesses. By leveraging deep learning, automation, and data-driven insights, I aim to develop solutions that simplify complex tasks, enhance efficiency, and promote technological accessibility for everyone.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        keep building
      </div>
    ),
  },
  {
    title: "Driving Change through Innovation",
    description:
      "My mission is to bridge the gap between cutting-edge research and practical applications. Whether through developing AI-driven models, optimizing computer vision algorithms, or teaching others about technology, I strive to create solutions that leave a lasting imprint on the industry. By fostering collaboration and embracing challenges, I aim to be at the forefront of technological transformation.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        future belongs to those who innovate!
      </div>
    ),
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="p-10 mt-20">
      <StickyScroll content={content} />
    </div>
  );
}
