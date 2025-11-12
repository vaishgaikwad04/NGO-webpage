import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold">United Hearts for India</h4>
          <p className="text-sm mt-2 text-white/90">
            Empowering Growth for Orphans — volunteer-led initiatives to support children in need.
          </p>
        </div>

        <div>
          <h5 className="font-semibold">Quick links</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#about">About</a></li>
            <li><a href="#activities">Activities</a></li>
            <li><a href="#donate">Donate</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="text-sm mt-2">Aurangabad, Maharashtra</p>
          <p className="text-sm">info@ngo.foundation</p>
          <div className="flex gap-3 mt-4 text-white">
            {/* Instagram link */}
            <a href="https://www.instagram.com/unitedheartsforindiaofficial" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-egoOrange transition-colors" />
            </a>
            <a href="https://www.facebook.com/unitedheartsforindiaofficial" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-egoOrange transition-colors" />
            </a>
            <a href="https://www.youtube.com/channel/UCXf9z2sJSjsA6MxyJ8A2A7A" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-egoOrange transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 bg-black/20 text-sm">
        © {new Date().getFullYear()} United Hearts for India Foundation. All rights reserved  | Developed by Vaishnavi.
      </div>
    </footer>
  );
}
