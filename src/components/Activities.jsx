import React, { useState } from "react";
import { motion } from "framer-motion";

const items = [
  { title: "Friendship Day Baking Workshop", shortDesc: "On Friendship Day, we celebrated by hosting a Choco Chip Cookie Baking Workshop. It was a beautiful celebration of friendship, creativity, and community, with lots of fun, laughter, and delicious cookies!", img: "./twelve.jpg" },
  { title: "UHFI Sports Club Event", shortDesc: "What an incredible 5 days! The first event by UHFI Sports Club (July 20–24) organized by United Hearts for India was a huge success — all thanks to the amazing energy, teamwork, and purpose everyone brought to the field. Congrats to the champions — Rising Stars!", img: "./nine.jpg" },
  { title: "Gate Together Event", shortDesc: "A joyful gathering bringing people together for a fun-filled day of games, laughter, and creating memories. Join us for an unforgettable experience of unity and camaraderie.", img: "./seven.jpg" },
  { title: "Clothes Donation to Sanchalit Babasai Children’s Home", shortDesc: "We recently had the privilege of donating clothes to Sanchalit Babasai Children’s Home for AIDS-affected children and Matoshri Vruddhashram, a home for the elderly. Small acts of kindness can make a big difference!", img: "./a5.PNG" },
  { title: "Spreading Joy This Gudi Padwa", shortDesc: "This Gudi Padwa, we distributed 100+ sarees to women living on the streets and at public stations. The smiles, gratitude, and hope we witnessed remind us why kindness matters.", img: "./a4.PNG" },
  { title: "Celebrating Rakshabandhan", shortDesc: "This Rakshabandhan, we spent time with the wonderful kids of a small slum near MIDC. Our team distributed 200 books, 60 bottles, and 50 pouches for these children. We aim to give them the resources they need to lead a simple life.", img: "./a3.PNG" },
  { title: "Feeding and Supporting AIDS-Affected Children", shortDesc: "Our team at United Hearts for India recently organized a campaign at Sanchalit Babasai Children’s Home, feeding and supporting orphaned children affected by AIDS and other health conditions. This is just the beginning!", img: "./a2.PNG" },
  { title: "Feeding Campaign at Ghati Hospital", shortDesc: "On 26th January, we successfully conducted our first campaign, feeding 500-600 people outside Ghati Hospital. It was a heartwarming event and a step forward in our mission to make a difference.", img: "./a1.PNG" },
];

export default function Activities() {
  const itemsPerPage = 3; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleDotClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section id="activities" className="container mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-egoGreen font-semibold uppercase tracking-wide">
          What We Do
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
          Activities & Programs
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We organize creative, educational, and social programs to nurture children’s
          growth, confidence, and happiness in a safe environment.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {currentItems.map((it, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Image with overlay */}
            <div className="relative h-56 md:h-64 group">
              <img
                src={it.img}
                alt={`Image for ${it.title}: ${it.shortDesc}`}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
              {/* Hover text */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4">
                <h4 className="text-lg font-semibold">{it.title}</h4>
                <p className="mt-2 text-sm leading-relaxed">{it.shortDesc}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Dots Pagination Controls */}
      <div className="text-center mt-8">
        <div className="flex justify-center items-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index + 1)}
              className={`w-3 h-3 rounded-full bg-egoOrange transition-all ${
                currentPage === index + 1 ? "bg-orange-600" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
