import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

export default function FullPageBackground() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full 
      bg-gradient-to-b from-[#f73002] via-[#e63900] to-[#ff4c23] 
      overflow-hidden"
    >
      {/* Particles */}
      <Particles
        className="absolute inset-0"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
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

      {/* Floating gradient blobs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 30, 0], rotate: [0, 25, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-[#e63900]/40 to-[#f73002]/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, -40, 0], rotate: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-r from-[#f73002]/35 to-[#ff4c23]/35 rounded-full blur-3xl"
      />

      {/* Floating sparkles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -800], x: [0, Math.random() * 100 - 50] }}
          transition={{ duration: Math.random() * 15 + 5, repeat: Infinity, ease: "linear" }}
          className="absolute w-1 h-1 bg-white rounded-full opacity-70"
          style={{ top: Math.random() * window.innerHeight, left: Math.random() * window.innerWidth }}
        />
      ))}
    </div>
  );
}
