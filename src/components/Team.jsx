import React from "react";
import { motion } from "framer-motion";

export default function Team() {
  const members = [
    {
      name: "Sagrika",
      role: "Founder & CEO",
      img: "/images/Profile/Sagrika.jpeg",
      fun: "👑 Runs the empire, approves the chaos, and still looks flawless.",
    },
    {
      name: "Dikshant",
      role: "Cinematographer / Video Editor",
      img: "/images/Profile/Dikshant.jpeg",
      fun: "🎥 Sees life through a lens and secretly wishes reality had color grading.",
    },
    {
      name: "Bharti",
      role: "Social Media Manager",
      img: "/images/Profile/Bharti.jpeg",
      fun: "📱 Turns caffeine into viral content and hashtags into magic spells.",
    },
    {
      name: "Rohit",
      role: "Video Editor",
      img: "/images/Profile/Rohit.jpeg",
      fun: "✂️ Edits faster than your Wi-Fi and saves the day with Ctrl+Z.",
    },
  ];

  return (
    <section id="team" className="relative py-28 px-6 bg-white">
      <h2 className="text-5xl font-bold mb-16 text-center text-gray-900">
        Meet Our Team
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {members.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform overflow-hidden flex flex-col"
          >
            {/* Vertical Portrait Image */}
            <div className="h-80 w-full overflow-hidden">
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="flex-1 flex flex-col justify-center p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-900">{m.name}</h3>
              <p className="text-lg text-gray-600">{m.role}</p>
              {/* Highlight founder with special color */}
              <p
                className={`mt-3 italic text-sm leading-relaxed ${
                  m.name === "Sagrika"
                    ? "text-pink-600 font-semibold"
                    : "text-orange-500"
                }`}
              >
                {m.fun}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
