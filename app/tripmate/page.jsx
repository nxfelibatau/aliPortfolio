import React from "react";
import Image from "next/image";

export default function TripMate() {
  return (
    <div className="max-w-4xl mt-20 mx-auto bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      {/* عنوان اصلی */}
      <h1 className="text-3xl font-bold mb-6 text-center text-grass">
        TripMate – Full-Stack Web Application for Travelers
      </h1>

      {/* معرفی کلی */}
      <p className="mb-6 text-lg text-center">
        <strong>Overview:</strong> TripMate is a full-stack web application
        designed to connect solo travelers, backpackers, and individuals seeking
        companionship during their trips. The platform helps users find
        like-minded travelers, share experiences, and discover events happening
        worldwide. With an intuitive UI and a responsive design, TripMate
        enhances the way people interact while traveling.
      </p>

      {/* ویژگی‌ها */}
      <h2 className="text-2xl font-semibold text-grass mb-4 text-center">
        Key Features:
      </h2>
      <ul className="list-disc pl-8 space-y-3 text-lg">
        <li>✔️ <strong>Traveler Matching:</strong> Find and connect with travelers based on shared interests.</li>
        <li>✔️ <strong>Global Event Listings:</strong> Displays upcoming travel-related events worldwide.</li>
        <li>✔️ <strong>User Authentication:</strong> Secure sign-up and login using JWT authentication.</li>
        <li>✔️ <strong>Real-Time Messaging:</strong> Integrated chat system for instant communication.</li>
        <li>✔️ <strong>Customizable Profiles:</strong> Create and edit profiles showcasing travel history.</li>
        <li>✔️ <strong>Modern UI & Responsive Design:</strong> Seamless experience across devices.</li>
      </ul>

      {/* تکنولوژی‌های استفاده شده */}
      <h2 className="text-2xl font-semibold text-grass mt-6 mb-4 text-center">
        Tech Stack & Implementation:
      </h2>
      <ul className="list-disc pl-8 space-y-3 text-lg">
        <li>🛠 <strong>Frontend:</strong> React.js, Tailwind CSS</li>
        <li>🛠 <strong>Backend:</strong> Node.js, Express.js</li>
        <li>🛠 <strong>Database:</strong> MongoDB (NoSQL)</li>
        <li>🛠 <strong>API Integration:</strong> RESTful APIs</li>
        <li>🛠 <strong>Authentication:</strong> JWT-based secure login system</li>
        <li>🛠 <strong>Real-Time Communication:</strong> WebSockets for chat functionality</li>
      </ul>

      {/* گالری تصاویر */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 place-items-center">
        <Image src="/tripmate1.png" alt="TripMate Screenshot 1" width={350} height={550} className="rounded-xl shadow-lg" />
        <Image src="/tripmate2.png" alt="TripMate Screenshot 2" width={350} height={550} className="rounded-xl shadow-lg" />
        <Image src="/tripmate3.png" alt="TripMate Screenshot 3" width={350} height={550} className="rounded-xl shadow-lg" />
        <Image src="/tripmate4.png" alt="TripMate Screenshot 4" width={350} height={550} className="rounded-xl shadow-lg" />
        <Image src="/tripmate5.png" alt="TripMate Screenshot 5" width={350} height={550} className="rounded-xl shadow-lg" />
        <Image src="/tripmate6.png" alt="TripMate Screenshot 6" width={350} height={550} className="rounded-xl shadow-lg" />
      </div>
    </div>
  );
}
