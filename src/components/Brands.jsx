import React from "react";
import { motion } from "framer-motion";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Brand data
const brands = [
  { name: "logo", src: "1.jpg" }, { name: "logo2", src: "2.jpg" }, { name: "logo3", src: "3.jpg" },
  { name: "logo4", src: "4.png" }, { name: "logo5", src: "5.jpg" }, { name: "logo6", src: "6.png" },
  { name: "logo7", src: "7.png" }, { name: "logo8", src: "8.png" }, { name: "logo9", src: "9.png" },
  { name: "logo10", src: "10.jpg" }, { name: "logo11", src: "11.jpg" }, { name: "logo12", src: "12.jpg" },
  { name: "logo13", src: "13.jpg" }, { name: "logo14", src: "14.png" }, { name: "logo15", src: "15.png" },
  { name: "logo16", src: "16.png" }, { name: "logo17", src: "17.png" }, { name: "logo18", src: "18.png" },
  { name: "logo19", src: "19.png" },
];

export default function Brands() {
  return (
    <section className="relative py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="max-w-7xl mx-auto">
        {/* Header section remains the same */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Brands We’ve Worked With
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#f73002] to-orange-500 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to have partnered with a diverse range of innovative companies, helping them achieve their goals.
          </p>
        </motion.div>

       {/* --- 3D COVERFLOW CAROUSEL WITH SMOOTHER TRANSITION --- */}
       <Swiper
          // --- NEW PROPERTY FOR SMOOTHNESS ---
          speed={1000} // This controls the transition duration (in ms)

          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="mySwiper3D"
        >
          {/* SwiperSlide mapping remains the same... */}
          {brands.map((brand, index) => (
            <SwiperSlide key={index} style={{ width: '300px', height: '200px' }}>
              <div className="flex items-center justify-center h-full bg-white rounded-lg shadow-lg">
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="max-h-24 max-w-[200px] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}