import React from "react";
import { motion } from "framer-motion";
import { FaChild, FaHandsHelping, FaClipboardList, FaDonate } from "react-icons/fa";

export default function Impact() {
  const stats = [
    { icon: <FaChild aria-label="Children Icon" />, label: "Children Helped", value: "320+" },
    { icon: <FaHandsHelping aria-label="Volunteers Icon" />, label: "Active Volunteers", value: "85+" },
    { icon: <FaClipboardList aria-label="Programs Icon" />, label: "Programs Conducted", value: "12" },
    { icon: <FaDonate aria-label="Donate Icon" />, label: "Funds Raised", value: "₹12L+" }
  ];

  return (
    <section id="impact" className="relative py-20 bg-gray-200 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h3 className="text-egoGreen font-semibold uppercase tracking-wide">
            Our Impact
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Numbers That Tell a Story
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Small steps lead to big changes — together, we’re creating hope, happiness, and a brighter future for children.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.07, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              aria-labelledby={`stat-${i}`}
            >
              <div
                className="text-4xl text-egoOrange mb-4 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              >
                {s.icon}
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900" id={`stat-${i}`}>
                {s.value}
              </div>
              <div className="text-sm md:text-base text-gray-700 mt-2 font-medium">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emotional Closing Line */}
        <div className="text-center mt-12 text-gray-700 italic max-w-xl mx-auto">
          “Every smile we create is a step closer to a better world.”
        </div>
      </div>

      {/* Decorative Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-32"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.25,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ fill: "#fefcf7" }}
          />
        </svg>
      </div>
    </section>
  );
}
