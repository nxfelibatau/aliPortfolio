"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-grass">
          <p>Frontend Tab</p>
          <DummyContent src="/FrontEnd.webp" alt="Frontend Development" />
        </div>
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-grass">
          <p>Backend Tab</p>
          <DummyContent src="/BackEnd.webp" alt="Backend Development" />
        </div>
      ),
    },
    {
      title: "Databases",
      value: "databases",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-grass">
          <p>Databases Tab</p>
          <DummyContent src="/mac.png" alt="Databases" />
        </div>
      ),
    },
    {
      title: "Tools and DevOps",
      value: "tools",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-grass">
          <p>Tools and DevOps Tab</p>
          <DummyContent src="/DevopsandTools.webp" alt="DevOps and Tools" />
        </div>
      ),
    },
    {
      title: "Mobile App Development",
      value: "mobile",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-grass">
          <p>Mobile App Development Tab</p>
          <DummyContent src="/swift.webp" alt="Mobile Development" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative md:flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40 hidden">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={1000}
      height={1000}
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
