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
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const handleClosePopup = () => setPopup({ open: false, img: "" });

  return (
    <section
      id="gallery"
      className="relative container mx-auto px-6 py-20 bg-gradient-to-br from-amber-50 via-white to-green-50"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h3 className="text-egoGreen font-semibold uppercase tracking-wide">
          Gallery
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Moments of Joy
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Every photo tells a story of hope, compassion, and change.
        </p>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="px-3"
          >
            <div
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => setPopup({ open: true, img: img.src })}
              role="button"
              aria-label={`View larger version of image: ${img.caption}`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold px-4 text-center">
                  {img.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>

      {/* Popup */}
      <AnimatePresence>
        {popup.open && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClosePopup}
            role="dialog"
            aria-labelledby="popupImage"
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={popup.img}
                alt="popup"
                className="max-w-3xl max-h-[80vh] object-contain rounded-xl shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
              <button
                onClick={handleClosePopup}
                className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow-lg"
                aria-label="Close popup"
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
