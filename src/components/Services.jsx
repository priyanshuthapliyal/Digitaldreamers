import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCamera,
  FaPaintBrush,
  FaChartLine,
  FaInstagram,
  FaGoogle,
  FaUsers,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCamera />,
    title: "Brand Shoots",
    description: "High-quality photography & video to make your brand shine.",
    link: "/services/brand-shoots",
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphic Design",
    description: "Creative designs for social media, ads, and branding.",
    link: "/services/graphic-design",
  },
  {
    icon: <FaChartLine />,
    title: "Social Media Marketing",
    description: "Performance-driven campaigns across Meta & Google.",
    link: "/services/social-media-marketing",
  },
  {
    icon: <FaInstagram />,
    title: "Instagram Marketing",
    description: "Grow reach, followers, and engagement organically.",
    link: "/services/instagram-marketing",
  },
  {
    icon: <FaGoogle />,
    title: "Google Ads",
    description: "Search, Display, and YouTube ads that convert.",
    link: "/services/google-ads",
  },
  {
    icon: <FaUsers />,
    title: "Social Media Management",
    description: "End-to-end content, calendars & reporting.",
    link: "/services/social-media-management",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6 bg-white">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
        Our Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ scale: 1.04 }}
            className="p-6 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition text-center"
          >
            <Link to={s.link}>
              <div className="text-[#f73002] text-4xl mb-4">{s.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                {s.title}
              </h3>
              <p className="text-gray-600">{s.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
