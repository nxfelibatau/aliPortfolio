"use client";
import ParticlesComponent from "./components/ui/particleComponent";
import React from "react";
import { Cover } from "./components/ui/Cover";
import BackgroundBeams from "./components/BackgroundBeams";
import FlipWords from "./components/FlipWords";
import MacBookScroll from "./components/MacBookScroll";
import "./globals.css"

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
          <div className="absolute inset-0 z-0">
            <BackgroundBeams />
          </div>
        </div>
        <div className="hidden md:block mt-100">
          <MacBookScroll/>
        </div>
      </div>
    </>
  );
}
