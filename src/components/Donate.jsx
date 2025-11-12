import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Donate() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}! Your message has been received.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="donate"
      className="relative py-20 bg-gradient-to-br from-amber-50 via-white to-green-50 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-egoGreen font-semibold uppercase tracking-wide"
          >
            Support United Hearts for India
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
          >
            Every Kind Word Brings Hope 🌿
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-gray-600 max-w-xl mx-auto"
          >
            Your love, words, or even a small gesture can light up a child’s
            world. Let’s spread smiles together.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info / QR Code */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl text-center flex flex-col items-center shadow-xl hover:shadow-2xl transition"
          >
            <h3 className="text-egoGreen font-semibold text-lg">
              Scan & Support
            </h3>
            <h2 className="text-2xl font-bold mt-2 text-gray-800">
              Make a Difference
            </h2>
            <p className="mt-3 text-gray-600 max-w-sm">
              Contribute with kindness — every donation helps a child learn,
              grow, and dream.
            </p>

            {/* QR Code */}
            <div className="mt-6 p-4 bg-amber-50 rounded-xl shadow-inner hover:shadow-lg transition">
              <img
                src="https://th.bing.com/th?q=QR+Code+Icon.png&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock"
                alt="Scan to support"
                className="w-48 h-48 mx-auto rounded-lg"
              />
              <p className="text-sm text-gray-500 mt-2">
                Scan to know more or contribute
              </p>
            </div>
          </motion.div>

          {/* Message Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-xl flex flex-col space-y-4"
          >
            <h4 className="font-semibold text-lg text-gray-800">
              Share Your Message 
            </h4>
            <p className="text-gray-600 text-sm">
              Send your blessings, words of encouragement, or story to inspire
              the children.
            </p>

            <input
  required
  name="name"
  value={form.name}
  onChange={handleChange}
  placeholder="Your name"
  className="w-full border-b-2 border-gray-400 px-2 py-2 focus:outline-none focus:border-egoGreen transition"
/>

<input
  required
  name="email"
  value={form.email}
  onChange={handleChange}
  placeholder="Email"
  className="w-full border-b-2 border-gray-400 px-2 py-2 focus:outline-none focus:border-egoGreen transition"
/>

<textarea
  required
  name="message"
  value={form.message}
  onChange={handleChange}
  placeholder="Your message"
  className="w-full border-b-2 border-gray-400 px-2 py-2 h-32 resize-none focus:outline-none focus:border-egoGreen transition"
/>


            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-40 bg-egoOrange text-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Soft Decorative Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(233, 163, 50, 0.15),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.1),transparent_70%)] pointer-events-none" />
    </section>
  );
}
