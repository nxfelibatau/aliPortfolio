import React from "react";
import Image from "next/image";

export default function Todo() {
  return (
    <div className="max-w-2xl mt-20 mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-grass">
        ToDoTime – Task Management App
      </h1>
      <p className="mb-4">
        <strong>Overview:</strong> ToDoTime is an intuitive task management app
        built for iOS using SwiftUI. It helps users efficiently organize,
        prioritize, and track tasks while maintaining a smooth and visually
        appealing experience.
      </p>

      <h2 className="text-xl font-semibold text-grass mb-2">Key Features:</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Task Creation & Management:</strong> Easily add, edit, delete,
          and complete tasks.
        </li>
        <li>
          <strong>Custom Categories:</strong> Group tasks under preset or custom
          categories (e.g., Work, Health, Study).
        </li>
        <li>
          <strong>Task Priority & Status:</strong> Assign High, Medium, or Low
          priority and track progress (Ongoing, On Hold, Done).
        </li>
        <li>
          <strong>Swipe to Complete:</strong> Mark a task as completed with a
          simple right swipe.
        </li>
        <li>
          <strong>Task Scheduling:</strong> Set dates and times for better time
          management.
        </li>
        <li>
          <strong>Beautiful UI & Smooth Animations:</strong> Designed with
          SwiftUI for a modern and dynamic experience.
        </li>
        <li>
          <strong>Launch Screen:</strong> Includes a sleek intro screen with
          branding and developer details.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-grass mt-4 mb-2">
        Tech Stack & Implementation:
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Frontend:</strong> SwiftUI, Combine
        </li>
        <li>
          <strong>Data Management:</strong> Core Data for local task storage
        </li>
        <li>
          <strong>Design & UX:</strong> Fluid animations, interactive elements,
          and responsive layouts
        </li>
        <li>
          <strong>Navigation:</strong> Custom back button handling for seamless
          screen transitions
        </li>
      </ul>

      {/* تصاویر */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Image
          src="/mobile1.png"
          alt="ToDoTime App Screenshot 1"
          width={200}
          height={400}
          className="rounded-xl"
        />
        <Image
          src="/mobile2.png"
          alt="ToDoTime App Screenshot 2"
          width={200}
          height={400}
          className="rounded-xl"
        />
        <Image
          src="/mobile3.png"
          alt="ToDoTime App Screenshot 3"
          width={200}
          height={400}
          className="rounded-xl"
        />
        <Image
          src="/todo.png"
          alt="ToDoTime App Main Screen"
          width={200}
          height={400}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
