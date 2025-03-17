"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const pdfFiles = [
  "/DeanLetter1.pdf",
  "/DeanLetter2.pdf",
  "/DeanLetter3.pdf",
  "/DeanLetter4.pdf",
  "/DeanLetter5.pdf",
];

export default function ThreeDCardDemo() {
  return (
    <div className="flex flex-wrap gap-5 mt-20 justify-center">
      {pdfFiles.map((pdf, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="relative group/card w-auto sm:w-[30rem] h-auto rounded-xl">
            <CardItem translateZ="100" className="w-full">
              <iframe
                src={pdf}
                className="h-[28rem] w-full rounded-xl "
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
