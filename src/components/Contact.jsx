import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6 text-gray-900"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-12"
        >
          Have a project in mind? Let’s work together to make it a success.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          <input type="text" placeholder="Your Name" className="p-4 rounded-xl border border-gray-300 w-full focus:ring-2 focus:ring-[#f73002] outline-none" />
          <input type="email" placeholder="Your Email" className="p-4 rounded-xl border border-gray-300 w-full focus:ring-2 focus:ring-[#f73002] outline-none" />
          <textarea placeholder="Your Message" rows="5" className="p-4 rounded-xl border border-gray-300 w-full focus:ring-2 focus:ring-[#f73002] outline-none"></textarea>
          <button type="submit" className="bg-[#f73002] text-white py-4 px-8 rounded-xl font-semibold shadow-md hover:shadow-lg transition">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
