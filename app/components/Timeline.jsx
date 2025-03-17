import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2014",
      content: (
        <div>
          <p
            className="text-neutral-200 text-xs md:text-xl font-normal mb-8">
            Aviation Diploma-Havanavardi danesh-e parvaz <br />Shiraz, Iran
          </p>
        </div>
      ),
    },
    {
      title: "2016",
      content: (
        <div>
          <p
            className="text-neutral-200 text-xs md:text-xl font-normal mb-8">
            Aircraft maintenance Associate degree Elmi karbordi <br />Bandar-e Abbas, Iran
          </p>
        </div>
      ),
    },
    {
      title: "Currently",
      content: (
        <div>
          <p
            className="text-neutral-200 text-xs md:text-xl font-normal mb-4">
            George brown college - Computer programming <br />Casa Loma, Toronto, Ontario
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">Started January 2023</p>
        </div>
      ),
    },
  ];
  return (
    (<div className="w-full">
      <Timeline data={data} />
    </div>)
  );
}
