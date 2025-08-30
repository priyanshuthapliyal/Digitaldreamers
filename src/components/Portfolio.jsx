import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    { title: "Fashion Brand Shoot", img: "https://via.placeholder.com/600x400" },
    { title: "Food Campaign", img: "https://via.placeholder.com/600x400" },
    { title: "Fitness Launch", img: "https://via.placeholder.com/600x400" },
  ];

  return (
    <section id="portfolio" className="relative py-24 px-6 bg-white">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition"
          >
            <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="text-gray-600 mt-1">Shoot + Edit + Campaign</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
