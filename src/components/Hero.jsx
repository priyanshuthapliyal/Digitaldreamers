import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-r from-[#f73002] to-[#ff5a2d]">

      {/* Interactive Particles */}
      <Particles
        className="absolute inset-0 z-0"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 120, duration: 0.4 } },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff", distance: 150, opacity: 0.15 },
            move: { enable: true, speed: 1 },
            size: { value: 3 },
            opacity: { value: 0.6 },
          },
        }}
      />

      {/* Morphing Gradient Blobs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 30, 0], rotate: [0, 25, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-[#ff6a3d]/40 to-[#f73002]/40 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, -40, 0], rotate: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-r from-[#f73002]/35 to-[#ff8a50]/35 rounded-full blur-3xl z-0"
      />

      {/* Floating Sparkles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -600], x: [0, Math.random() * 100 - 50] }}
          transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, ease: "linear" }}
          className="absolute w-1 h-1 bg-white rounded-full opacity-70 z-0"
          style={{ top: Math.random() * window.innerHeight, left: Math.random() * window.innerWidth }}
        />
      ))}

      {/* Foreground Overlay for Readability */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      {/* Headline */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl z-20"
      >
        We Grow Your Brand Online
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl mb-8 max-w-2xl text-white drop-shadow-md z-20"
      >
        Brand shoots, graphic design, social media marketing, Instagram & Meta Ads, Google Ads, and complete social media management.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        className="bg-gradient-to-r from-[#ff5a2d] to-[#f73002] text-white font-bold px-8 py-4 rounded-full shadow-lg animate-pulse z-20"
      >
        Hire Us
      </motion.button>

    </section>
  );
}
