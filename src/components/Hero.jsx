import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="pt-20">
      <div className="relative">
        {/* Background Image with Overlay */}
        <div
          className="h-[85vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('./cover.jpg')`,
          }}
        >
          {/* Content */}
          <div className="container mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ opacity: 1, y: 0, ease: "easeOut", duration: 1.5 }}
              className="max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1 rounded-full text-xs md:text-xs uppercase tracking-wider mb-1 shadow-md">
                Together we can change lives
              </span>

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 hero-heading">
                Every Child Deserves <br className="hidden md:block" />
                <span className="text-egoOrange">Love, Home & Education</span>
              </h1>

              <p className="text-white/90 text-sm sm:text-base md:text-sm leading-relaxed text-gray-400 max-w-2xl mx-auto">
                At EGO Foundation, every orphaned child deserves warmth, care, and a chance to dream again. Join us in creating a world where no child feels forgotten.
              </p>

              <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-center gap-4">
                <a
                  href="#donate"
                  className="bg-egoOrange hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 transition px-6 py-3 text-white font-semibold shadow-lg text-sm md:text-base"
                  aria-label="Donate Now"
                >
                  Donate Now
                </a>
                <a
                  href="https://www.instagram.com/unitedheartsforindiaofficial" // Updated to Instagram link
                  className="border border-white/50 hover:bg-white/10 transition px-6 py-3 text-white font-semibold text-sm md:text-base"
                  aria-label="Explore Our Instagram"
                  target="_blank"  // Open Instagram link in new tab
                  rel="noopener noreferrer" // Security best practice
                >
                  🙌 Explore Our Work
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
