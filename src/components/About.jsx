import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-129418cb2dfe"
            alt="About"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">About Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            At <span className="text-[#f73002] font-semibold">My Digital Dreamers</span>, we help brands grow
            through creativity, strategy, and innovation.
          </p>
          <p className="text-lg text-gray-600">
            From brand shoots to social campaigns, we craft experiences that connect with your audience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
