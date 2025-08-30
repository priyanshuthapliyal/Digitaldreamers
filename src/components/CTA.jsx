import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Grow Your Brand?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Let’s collaborate and take your brand to the next level with performance-driven creativity.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-[#f73002] text-white px-8 py-4 rounded-xl shadow hover:shadow-lg"
        >
          Get a Free Quote
        </motion.a>
      </div>
    </section>
  );
}
