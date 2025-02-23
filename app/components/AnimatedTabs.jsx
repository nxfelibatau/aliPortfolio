"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-grass">
          <p>Frontend Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-grass">
          <p>Backend tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Databases",
      value: "databases",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-grass">
          <p>Databases tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Tools and DevOps",
      value: "tools",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-grass">
          <p>Tools and DevOps tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Others",
      value: "others",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-grass">
          <p>Other skills tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-grass">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    (<div
      className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>)
  );
}

const DummyContent = () => {
  return (
    (<Image
      src="/mac.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />)
  );
};
