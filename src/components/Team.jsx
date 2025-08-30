import React from "react";
import { motion } from "framer-motion";

export default function Team() {
  const members = [
    { name: "Priyanshu Thapliyal", role: "Founder & CEO", img: "https://via.placeholder.com/200" },
    { name: "Jane Doe", role: "Creative Director", img: "https://via.placeholder.com/200" },
    { name: "John Smith", role: "Marketing Lead", img: "https://via.placeholder.com/200" },
  ];

  return (
    <section id="team" className="relative py-24 px-6 bg-white">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {members.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="p-6 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition text-center"
          >
            <img src={m.img} alt={m.name} className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-semibold text-gray-900">{m.name}</h3>
            <p className="text-gray-600">{m.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
