import React from "react";
import "../globals.css";
import BentoGrid from "../components/BentoGrid";
import AnimatedTestimonials from "../components/AnimatedTestimonials";

export default function projects() {
  return (
    <section className="mt-20 bg-[#1B2A49]">
      <div className="container mx-auto md:my-20">
        <BentoGrid/>
      </div>
      <div className="flex mt-10 justify-center">
       <p className="text-xl font-bold md:text-3xl lg:text-5xl  text-grass"> Volunteer Projects</p>
      </div>
       <AnimatedTestimonials/>
    </section>
  );
}
