import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  // Food
  { id: "f1", category: "food", title: "Gourmet Burger Campaign", videoSrc: "/videos/food1.mp4" },
  { id: "f2", category: "food", title: "Artisan Pasta Shoot", videoSrc: "/videos/food2.mp4" },
  { id: "f3", category: "food", title: "Fresh Salad Menu", videoSrc: "/videos/food3.mp4" },
  { id: "f4", category: "food", title: "Summer Drinks Promotion", videoSrc: "/videos/food4.mp4" },
  // Jewellery
  { id: "j1", category: "jewellery", title: "Diamond Ring Showcase", videoSrc: "/videos/jewellery1.mp4" },
  { id: "j2", category: "jewellery", title: "Earrings Collection", videoSrc: "/videos/jewellery2.mp4" },
  { id: "j3", category: "jewellery", title: "Necklace Showcase", videoSrc: "/videos/jewellery3.mp4" },
  { id: "j4", category: "jewellery", title: "Bracelet Collection", videoSrc: "/videos/jewellery4.mp4" },
  //interioranddecor
  { id: "i1", category: "interior", title: "Interior Design", videoSrc: "/videos/interior1.mp4" },
  { id: "i2", category: "interior", title: "Interior Design", videoSrc: "/videos/interior2.mp4" },
  { id: "i3", category: "interior", title: "Interior Design", videoSrc: "/videos/interior3.mp4" },
  { id: "i4", category: "interior", title: "Interior Design", videoSrc: "/videos/interior4.mp4" },
  { id: "i5", category: "interior", title: "Interior Design", videoSrc: "/videos/interior5.mp4" },
  //skincare
  { id: "s1", category: "skincare", title: "Skincare Design", videoSrc: "/videos/skincare1.mp4" },
  { id: "s2", category: "skincare", title: "Skincare Design", videoSrc: "/videos/skincare2.mp4" },
  { id: "s3", category: "skincare", title: "Skincare Design", videoSrc: "/videos/skincare3.mp4" },
  { id: "s4", category: "skincare", title: "Skincare Design", videoSrc: "/videos/skincare4.mp4" },
  //apparel
  { id: "a1", category: "apparel", title: "Apparel Design", videoSrc: "/videos/apparel1.mp4" },
  { id: "a2", category: "apparel", title: "Apparel Design", videoSrc: "/videos/apparel2.mp4" },
  { id: "a3", category: "apparel", title: "Apparel Design", videoSrc: "/videos/apparel3.mp4" },
  { id: "a4", category: "apparel", title: "Apparel Design", videoSrc: "/videos/apparel4.mp4" },
];

const categories = [
  { id: "food", name: "Food" },
  { id: "jewellery", name: "Jewellery" },
  { id: "apparel", name: "Apparel" },
  { id: "skincare", name: "Skin Care" },
  { id: "interior", name: "Interior & Decor" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const filteredProjects = projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Portfolio
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#f73002] to-orange-500 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We bring brands to life through captivating visuals. Explore a selection of our work across various industries.
          </p>
        </motion.div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-colors duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-[#f73002] to-orange-500 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Animated Video Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeInOut" }}
                className="aspect-square bg-white/50 rounded-2xl overflow-hidden shadow-lg"
              >
                <video
                  src={p.videoSrc}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Button to full portfolio */}
        <div className="text-center mt-16">
          <Link
            to="/full-portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f73002] to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            View Full Portfolio
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
