import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";
import Link from "next/link";

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-5xl mx-auto px-4 gap-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={`overflow-hidden ${item.className || ""}`}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Human Resource Management Console App",
    description:
      "Created a Java console application for managing employee sign-ups for the HR department, including data entry, storage, and retrieval.",
  },
  {
    title: "Flight Management Console App",
    description:
      "Developed a C# console app for an airline, enabling flight booking, vacation planning, and itinerary management.",
  },
  {
    title: "Learnhube Educational Website",
    description:
      "Built an educational website using PHP with features for courses, learning pathways, and interactive resources.",
  },
  {
    title: "TripMate – Full-Stack Web App for Travelers",
    header: (
      <Link href="/tripmate">
        <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-xl">
          <Image
            src="/campTripmate.png"
            alt="Tripmate"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </Link>
    ),
    className: "w-full md:col-span-2",
  },
  {
    title: "Vacation Planning Web Application",
    description:
      "A vacation planner using ASP.NET for booking hotels, cars, and flights, featuring discount logic and user/employee interfaces.",
  },
  {
    title: "Personal Restaurant Guide",
    description: `A mobile app for food lovers to discover and review restaurants with a neon-themed UI.
    
✨Key Features:
✅ Restaurant Discovery – Browse by category & location.
✅ Favorites & Reviews – Save spots & leave reviews.
✅ Interactive Map – Navigate restaurants visually.
✅ Dark Mode Neon UI – Stylish & modern.
✅ Offline Mode – Access saved details offline.

🚀Tech Stack:
Frontend: Jetpack Compose / XML  
Backend: Firebase / REST API  
Database: Room Database  
Platform: Android (Kotlin / Java)`,
  },
  {
    title: "ToDoTime – Advanced Task Management App",
    header: (
      <Link href="/todo">
        <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-xl">
          <Image
            src="/todo.png"
            alt="ToDoTime"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </Link>
    ),
    className: "w-full md:col-span-2",
  },
];
