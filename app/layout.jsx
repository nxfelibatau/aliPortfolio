"use client";
import { useState } from "react";
import "./globals.css";
import Link from "next/link";
// import Image from "next/image";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: "500",
  subsets: ["latin"], // Specify the subset here
  display: "swap", // Optional: to use font swap
  preload: true, // Preload the font
  fallback: ['Arial', 'sans-serif'], // Fallback fonts
});

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <html lang="en" className={kanit.className}>
      <body className="bg-navy">
        <header className="z-50">
          <nav className="bg-[#ACF0D1] dark:bg-[#1B2A49] fixed w-full z-20 top-0 start-0 border-b dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <p className="font-bold text-xl text-navy">Ali Hooshmand</p>
              </Link>
              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky"
                  aria-expanded={isMenuOpen} // Controls the menu state
                  onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } items-center justify-between w-full md:flex md:w-auto md:order-1`}
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 md:p-0 gap-4 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                  <li>
                    <Link
                      href="/"
                      className="block py-2 px-3 md:text-[#1B2A49] hover:text-white md:hover:bg-[#ACF0D1] md:hover:text-[#243c6d] hover:bg-[#1B2A49] dark:text-white rounded md:bg-transparent md:p-0"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="block py-2 px-3 md:text-[#1B2A49] hover:text-white md:hover:bg-[#ACF0D1] md:hover:text-[#243c6d] hover:bg-[#1B2A49] dark:text-white rounded md:bg-transparent md:p-0"
                      aria-current="page"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="block py-2 px-3 md:text-[#1B2A49] hover:text-white md:hover:bg-[#ACF0D1] md:hover:text-[#243c6d] hover:bg-[#1B2A49] dark:text-white rounded md:bg-transparent md:p-0"
                      aria-current="page"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/awards"
                      className="block py-2 px-3 md:text-[#1B2A49] hover:text-white md:hover:bg-[#ACF0D1] md:hover:text-[#243c6d] hover:bg-[#1B2A49] dark:text-white rounded md:bg-transparent md:p-0"
                      aria-current="page"
                    >
                      Awards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block md:hidden py-2 px-3 md:text-[#1B2A49] hover:text-white md:hover:bg-[#ACF0D1] md:hover:text-[#243c6d] hover:bg-[#1B2A49] dark:text-white rounded md:bg-transparent md:p-0"
                      aria-current="page"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
