import React, { useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "./one.jpg", caption: "Art & Joy Workshop" },
  { src: "./two.jpg", caption: "Smiles That Inspire" },
  { src: "./three.jpg", caption: "Education for Every Child" },
  { src: "./four.jpg", caption: "Community Togetherness" },
  { src: "./five.jpg", caption: "A Day of Creativity" },
  { src: "./six.jpg", caption: "Health & Happiness" },
  { src: "./seven.jpg", caption: "Hope in Every Heart" },
  { src: "./eight.jpg", caption: "Building Futures" },
  { src: "./nine.jpg", caption: "Moments of Gratitude" },
  { src: "./ten.jpg", caption: "Inspiration in Action" },
  { src: "./eleven.jpg", caption: "Children of Change" },
  { src: "./twelve.jpg", caption: "Bright Smiles Ahead" },
  { src: "./thirteen.jpg", caption: "A New Beginning" },
];

export default function Gallery() {
  const [popup, setPopup] = useState({ open: false, img: "" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section
      id="gallery"
      className="relative container mx-auto px-4 py-10 sm:py-16 bg-gradient-to-br from-amber-50 via-white to-green-50"
    >
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
        <h3 className="text-egoGreen font-semibold uppercase tracking-wide">
          Gallery
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Moments of Joy
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          Every photo tells a story of hope, compassion, and change.
        </p>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className="px-1 sm:px-3">
            <div
              className="relative group overflow-hidden rounded-xl shadow-md sm:shadow-lg cursor-pointer"
              onClick={() => setPopup({ open: true, img: img.src })}
            >
              {/* FIXED MOBILE HEIGHT */}
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-[220px] xs:h-[260px] sm:h-[300px] md:h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-sm sm:text-lg font-semibold px-3 text-center">
                  {img.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Popup */}
      <AnimatePresence>
        {popup.open && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPopup({ open: false, img: "" })}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* FIXED MOBILE POPUP SIZE */}
              <img
                src={popup.img}
                className="max-w-[92vw] max-h-[80vh] object-contain rounded-xl"
                alt="popup"
              />

              <button
                onClick={() => setPopup({ open: false, img: "" })}
                className="absolute top-3 right-3 bg-white text-black p-2 rounded-full shadow-md text-xl"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
