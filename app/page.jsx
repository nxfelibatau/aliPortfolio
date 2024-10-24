"use client";
import ParticlesComponent from "./components/ui/particleComponent";
import React from "react";
import { Cover } from "./components/ui/Cover";

export default function Home() {
  return (
    <>
      <div className="mt-16">
        <ParticlesComponent />
        <div>
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-52 relative z-1 py-6 bg-clip-text text-transparent bg-gradient-to-b from-[#ACF0D1] via-[#ACF0D1] to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Build amazing websites <br /> with <Cover>Yasi</Cover>
          </h1>
        </div>
      </div>
    </>
  );
}
