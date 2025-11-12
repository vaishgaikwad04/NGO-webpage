import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["home", "about", "activities", "impact"];

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md shadow-md z-50 transition-colors">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Home Link */}
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="United Hearts for India Home"
        >
          {/* Logo Image */}
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <img
              src="https://dcassetcdn.com/design_img/10133/22993/22993_303487_10133_image.jpg"
              alt="United Hearts for India Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold">United Hearts for India</h1>
            <p className="text-xs text-gray-500">Empowering Growth for Orphans</p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700" role="navigation">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="relative text-gray-700 transition-colors 
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 
                         after:w-0 after:h-[2px] after:bg-egoOrange after:transition-all 
                         hover:after:w-full hover:text-egoOrange"
              aria-label={`Navigate to ${link.charAt(0).toUpperCase() + link.slice(1)}`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
          <a
            href="#donate"
            className="bg-egoOrange text-white px-5 py-2 rounded-md hover:bg-orange-600 transition"
            aria-label="Donate Now"
          >
            Donate
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle mobile menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md z-40 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="navigation"
        aria-hidden={!open}
        onClick={() => setOpen(false)} // Close the menu if clicked outside
      >
        <div className="flex justify-end p-6">
          <button
            className="text-2xl"
            onClick={() => setOpen(false)}
            aria-label="Close mobile menu"
          >
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-6 mt-10 text-gray-700 text-sm">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setOpen(false)} // Close menu on item click
              className="relative text-gray-700 transition-colors 
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 
                         after:w-0 after:h-[2px] after:bg-egoOrange after:transition-all 
                         hover:after:w-full hover:text-egoOrange"
              aria-label={`Navigate to ${link.charAt(0).toUpperCase() + link.slice(1)}`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
          <a
            href="#donate"
            className="bg-egoOrange text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
            onClick={() => setOpen(false)} // Close menu on donate button click
            aria-label="Donate Now"
          >
            Donate
          </a>
        </nav>
      </div>
    </header>
  );
}
