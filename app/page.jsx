"use client";
import ParticlesComponent from "./components/ui/particleComponent";
import React from "react";
import { Cover } from "./components/ui/Cover";
import BackgroundBeams from "./components/BackgroundBeams";
import FlipWords from "./components/FlipWords";
import MacBookScroll from "./components/MacBookScroll";
import "./globals.css";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <>
      <div className="mt-16">
        <ParticlesComponent />
        {/* صفحه اول */}
        <div style={{ height: "67vh" }}>
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-52 relative z-10 py-6 bg-clip-text text-transparent bg-gradient-to-b from-[#ACF0D1] via-[#ACF0D1] to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Welcome to
            <br />
            <div className="mt-3">
              <Cover>My portfolio</Cover>
            </div>
          </h1>
          <div>
            <FlipWords />
          </div>
        </div>

        {/* صفحه دوم */}
        <div className="relative ">
          {/* پس‌زمینه صفحه دوم */}
          <div className="hidden md:block absolute inset-0 z-0">
            <BackgroundBeams />
          </div>
        </div>
        {/* صفحه سوم */}
        <div className="hidden md:block mt-100">
          <MacBookScroll />
        </div>
        {/* صفحه چهارم */}
        <div>
          <Timeline />
          <div className="flex flex-col items-center">
            <p className="md:text-5xl text-xl text-grass">Resume</p>
            <p className="md:text-xl text-sm mt-2 text-center text-white">
              Download my resume to learn more about my professional background
              and experiences.
            </p>
            <a href="/AliHooshmandResume.pdf" download>
              <button className="px-4 hover:bg-grass m-5 py-2 text-white rounded-lg hover:text-navy font-semibold bg-transparent border border-white transition">
                Download Resume
              </button>
            </a>
          </div>
        </div>
        
        {/* فرم لینک‌ها */}
        <div className="flex flex-col items-center mt-10 p-5 bg-gray-900 rounded-lg text-white">
          <p className="md:text-3xl text-xl text-grass font-semibold">Connect with me</p>
          <div className="mt-4">
            <a href="https://www.linkedin.com/in/ali-hooshmandghasrodashti-22b5b32b3/" target="_blank" rel="noopener noreferrer" className="block text-lg text-blue-400 hover:underline">LinkedIn</a>
            <a href="https://github.com/Alihooshmand97" target="_blank" rel="noopener noreferrer" className="block text-lg text-blue-400 hover:underline mt-2">GitHub</a>
          </div>
        </div>
      </div>
    </>
  );
}
