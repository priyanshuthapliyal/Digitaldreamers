import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.2, // This will make child elements animate in sequence
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-24">
      <motion.div
        className="max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the component is in view
        variants={containerVariants}
      >
        <motion.h1
          className="text-5xl font-bold text-[#f73002] mb-6"
          variants={itemVariants}
        >
          Our Story
        </motion.h1>

        <motion.p
          className="text-xl text-gray-700 leading-relaxed mb-12"
          variants={itemVariants}
        >
          At <span className="font-semibold">DigitalDreamers</span>, we believe that every great brand has a story waiting to be told. We are a passionate team of creators, strategists, and innovators dedicated to transforming your digital presence into a powerful engine for growth.
        </motion.p>

        {/* --- Founder/Team Image --- */}
        {/* SUGGESTION: Replace this with an actual photo of your founder or team for authenticity */}
        <motion.div
          className="my-16 rounded-2xl shadow-xl overflow-hidden aspect-video"
          variants={itemVariants}
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1471"
            alt="The Digital Dreamers Team"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          variants={itemVariants}
        >
          From a Spark to a Flame
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed mb-8 text-left"
          variants={itemVariants}
        >
          The journey of MyDigitalDreamers began with our founder, Sagrika. After completing her MBA, she dove into the corporate world, where she managed large-scale marketing projects. She saw firsthand how many incredible businesses, despite having brilliant products, struggled to connect with their audience online. There was a clear gap between their real-world quality and their digital footprint.
        </motion.p>
        
        <motion.p
          className="text-lg text-gray-700 leading-relaxed text-left"
          variants={itemVariants}
        >
          Driven by a vision to offer a more personal, strategy-focused, and genuinely passionate service, she took the leap. MyDigitalDreamers was founded on a simple principle: to be the dedicated partner that closes that gap, turning a brand's potential into its digital reality.
        </motion.p>

        <motion.div 
          className="my-12 border-l-4 border-[#f73002] pl-6 py-4 text-left"
          variants={itemVariants}
        >
          <p className="text-2xl italic text-gray-800 font-serif">
            "We don't just build campaigns; we build connections. Our success is measured by the growth and success of the brands we partner with."
          </p>
        </motion.div>

        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          variants={itemVariants}
        >
          Our Approach
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          variants={itemVariants}
        >
          We blend data-driven strategy with boundless creativity. Whether it's a stunning brand shoot, a high-conversion ad campaign, or comprehensive social media management, our approach is always tailored, transparent, and relentlessly focused on achieving your goals.
        </motion.p>

      </motion.div>
    </section>
  );
}