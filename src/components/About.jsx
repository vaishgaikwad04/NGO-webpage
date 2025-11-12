import React, { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-6 py-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-egoGreen font-semibold uppercase tracking-wide"
        >
          Who We Are
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug"
        >
          United Hearts for India — Brightening the Lives of <br className="hidden sm:block" />
          <span className="text-egoOrange">Children in Need of a Family</span>
        </motion.h2>
      </div>

      {/* Section Content */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-gray-700 leading-relaxed text-base sm:text-lg"
          >
            At <span className="font-semibold text-egoGreen">United Hearts for India</span>, we believe that every child deserves love, laughter, and a safe space to dream. Our volunteers come together to create a nurturing environment where orphaned and underprivileged children can heal, learn, and grow — not just survive, but truly thrive.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="space-y-2 text-gray-700 list-disc list-inside"
          >
            <li>Community-led learning centers for children</li>
            <li>Regular health and nutrition check-ups</li>
            <li>Mentorship and emotional support from volunteers</li>
          </motion.ul>

          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="border-l-4 border-egoGreen pl-4 italic text-gray-600"
          >
            “When a child smiles because of your kindness — that’s where hope begins.”
          </motion.blockquote>

          <div className="flex flex-wrap gap-4 mt-6">
           <motion.a
  href="https://www.instagram.com/unitedheartsforindiaofficial" // Instagram link
  className="bg-egoOrange hover:bg-egoOrange/90 text-white px-7 py-3 rounded-lg transition font-semibold shadow-md hover:shadow-lg"
  aria-label="Follow us on Instagram"
  whileHover={{ scale: 1.05 }}
>
  Join Us
</motion.a>

            <motion.a
              href="#donate"
              className="border border-egoOrange text-egoOrange hover:bg-egoGreen/10 px-7 py-3 rounded-lg transition font-semibold"
              aria-label="Donate"
              whileHover={{ scale: 1.05 }}
            >
              🤲 Donate
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="row-span-1 group">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              alt="children learning"
              className="w-full h-52 sm:h-56 md:h-60 object-cover rounded-2xl shadow-md"
              src="./four.jpg"
              loading="lazy"
            />
            {/* Text on Hover */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4">
              <h4 className="text-lg font-semibold">Children Learning</h4>
              <p className="mt-2 text-sm leading-relaxed">A place where children grow and thrive through education and love.</p>
            </div>
          </div>
          <div className="row-span-2 group">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              alt="art activity"
              className="w-full h-full object-cover rounded-2xl shadow-md"
              src="./two.jpg"
              loading="lazy"
            />
            {/* Text on Hover */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4">
              <h4 className="text-lg font-semibold">Art Activities</h4>
              <p className="mt-2 text-sm leading-relaxed">Fostering creativity and expression in every child.</p>
            </div>
          </div>
          <div className="row-span-1 group">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              alt="volunteers helping children"
              className="w-full h-52 sm:h-56 md:h-60 object-cover rounded-2xl shadow-md"
              src="./six.jpg"
              loading="lazy"
            />
            {/* Text on Hover */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4">
              <h4 className="text-lg font-semibold">Volunteers Helping</h4>
              <p className="mt-2 text-sm leading-relaxed">Support and mentorship from loving volunteers.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
