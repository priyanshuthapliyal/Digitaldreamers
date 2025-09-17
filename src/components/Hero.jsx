import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
// To use tsparticles, you might need to install and load the engine
// import { loadFull } from "tsparticles";
// import { loadSlim } from "tsparticles-slim";

export default function Hero() {
  // const particlesInit = async (main) => {
  //   await loadSlim(main);
  // };

  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach(video => {
      if (video) {
        video.play().catch(error => {
          console.warn("Autoplay was prevented for a video.", error);
        });
      }
    });
  }, []);

  const videoSources = ['/videos/food3.mp4','/videos/food2.mp4','/videos/jewellery3.mp4','/videos/apparel2.mp4','/videos/interior1.mp4','/videos/interior4.mp4',];
  

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-r from-[#f73002] to-[#ff5a2d] px-4">

      {/* BACKGROUND LAYER (z-0) */}
      <Particles id="tsparticles" className="absolute inset-0 z-0" options={{ background: { color: { value: "transparent" } }, fpsLimit: 60, interactivity: { events: { onHover: { enable: true, mode: "repulse" } }, modes: { repulse: { distance: 120, duration: 0.4 } } }, particles: { color: { value: "#ffffff" }, links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.15, width: 1 }, move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false, }, number: { density: { enable: true, area: 800 }, value: 80 }, opacity: { value: 0.6 }, shape: { type: "circle" }, size: { value: { min: 1, max: 3 } }, }, detectRetina: true, }} />
      <motion.div animate={{ x: [0, 50, 0], y: [0, 30, 0], rotate: [0, 25, 0], scale: [1, 1.2, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-[#ff6a3d]/40 to-[#f73002]/40 rounded-full blur-3xl z-0" />
      <motion.div animate={{ x: [0, -50, 0], y: [0, -40, 0], rotate: [0, -20, 0], scale: [1, 1.1, 1] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-r from-[#f73002]/35 to-[#ff8a50]/35 rounded-full blur-3xl z-0" />
      {[...Array(40)].map((_, i) => ( <motion.div key={i} animate={{ y: [0, -window.innerHeight], x: [0, Math.random() * 200 - 100] }} transition={{ duration: Math.random() * 15 + 10, repeat: Infinity, ease: "linear" }} className="absolute w-1 h-1 bg-white rounded-full opacity-70 z-0" style={{ top: Math.random() * window.innerHeight, left: Math.random() * window.innerWidth }} /> ))}
      <div className="absolute inset-0 w-full h-full grid grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2 z-0">
        {videoSources.map((src, index) => ( <video key={index} ref={el => videoRefs.current[index] = el} src={src} autoPlay loop muted playsInline className="w-full h-full object-cover" style={{ opacity: 0.1, mixBlendMode: 'overlay' }} /> ))}
      </div>
      
      {/* OVERLAY for Readability (z-10) */}
      <div className="absolute inset-0 bg-black/15 z-10"></div>
      
      {/* FOREGROUND CONTENT (z-20) */}
      <div className="relative z-20 flex flex-col items-center">
        <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 1 }} className="text-6xl md:text-8xl font-bold mb-4 text-white drop-shadow-2xl">
          Digital Dreamers
        </motion.h1>
        <motion.h2 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="text-2xl md:text-3xl font-medium mb-8 text-white/90 drop-shadow-lg">
          Turning Your Digital Dreams into Market Realities
        </motion.h2>
        <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.0, duration: 1 }} className="text-lg md:text-xl mb-10 max-w-3xl text-white/90 drop-shadow-md">
          We are a full-service digital marketing agency dedicated to elevating your brand's online presence. From stunning brand shoots and graphic design to data-driven Meta & Google Ads, we craft the perfect strategy to help you succeed.
        </motion.p>
        <motion.button
          onClick={handleScrollToContact}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px rgb(255,255,255,0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#f73002] font-bold px-8 py-4 rounded-full shadow-lg cursor-pointer"
        >
          Let's Grow Together
        </motion.button>
      </div>
    </section>
  );
}