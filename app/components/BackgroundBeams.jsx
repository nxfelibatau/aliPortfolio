"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import StickyScrollReveal from "./StickyScrollReveal";

export default function BackgroundBeamsDemo() {
  return (
    <div className="relative h-[100rem] w-full rounded-md bg-navy flex flex-col items-center justify-center antialiased">
      {/* پس‌زمینه باید پایین‌ترین لایه باشد */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>


      {/* کامپوننت StickyScrollReveal */}
      <div className="relative z-10 w-full">
        <StickyScrollReveal />
      </div>
    </div>
  );
}
