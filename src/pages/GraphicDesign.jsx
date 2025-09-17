import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ChevronLeft, ChevronRight, Award, Monitor, Megaphone, Film, Package, FileText } from "lucide-react";

// --- THE FIX, PART 1 ---
// The CollageGrid component is moved outside. It now receives props.
const CollageGrid = ({ portfolioItems, carouselImages, currentIndex, setCurrentIndex, goToPrev, goToNext }) => {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                {React.createElement(item.icon, { className: "text-white", size: 28 })}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.category}</h3>
              <p className="text-gray-600 text-sm">{item.title}</p>
            </motion.div>
          ))}
        </div>
  
        {/* Image Carousel */}
        <div className="relative w-full max-w-5xl mx-auto mb-24 overflow-hidden rounded-2xl shadow-2xl">
          {/* Main Carousel */}
          <motion.div 
            className="relative w-full aspect-video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={carouselImages[currentIndex]}
                alt={`Portfolio item ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-contain bg-white p-4"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              />
            </AnimatePresence>
            
            {/* Navigation Arrows */}
            <button 
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
};


export default function GraphicDesign() {
  // Your original portfolio items data
  const portfolioItems = [
    {
      id: 1,
      category: "Branding & Identity",
      title: "Logos & Business Identity",
      description: "Comprehensive branding solutions including logos, brand guidelines, business cards, and packaging that create a memorable brand identity.",
      color: "from-indigo-500 to-purple-600",
      icon: Award,
      images: [
        { src: "/images/portfolio/branding-1.jpg", alt: "Logo design" },
        { src: "/images/portfolio/branding-2.jpg", alt: "Brand guidelines" },
        { src: "/images/portfolio/branding-3.jpg", alt: "Business cards" },
        { src: "/images/portfolio/branding-4.jpg", alt: "Branded packaging" }
      ]
    },
    {
      id: 2,
      category: "Digital & Web Design",
      title: "Websites & UI/UX",
      description: "Responsive websites, intuitive app interfaces, and engaging social media graphics that enhance digital presence.",
      color: "from-blue-500 to-indigo-600",
      icon: Monitor,
      images: [
        { src: "/images/portfolio/web-1.jpg", alt: "Website design" },
        { src: "/images/portfolio/web-2.jpg", alt: "Mobile app interface" },
        { src: "/images/portfolio/web-3.jpg", alt: "Dashboard UI" },
        { src: "/images/portfolio/web-4.jpg", alt: "Social media templates" }
      ]
    },
    {
      id: 3,
      category: "Advertising & Marketing",
      title: "Campaigns & Branding",
      description: "Effective advertising materials including banners, billboards, infographics, and email designs that drive engagement.",
      color: "from-yellow-500 to-orange-500",
      icon: Megaphone,
      images: [
        { src: "/images/portfolio/ads-1.jpg", alt: "Digital banner ads" },
        { src: "/images/portfolio/ads-2.jpg", alt: "Billboard design" },
        { src: "/images/portfolio/ads-3.jpg", alt: "Infographic" },
        { src: "/images/portfolio/ads-4.jpg", alt: "Email campaign" }
      ]
    },
    {
      id: 4,
      category: "Motion Graphics",
      title: "Animations & Videos",
      description: "Dynamic motion graphics, explainer videos, GIFs, and title sequences that bring your message to life.",
      color: "from-purple-500 to-pink-500",
      icon: Film,
      images: [
        { src: "/images/portfolio/motion-1.jpg", alt: "Explainer video" },
        { src: "/images/portfolio/motion-2.jpg", alt: "Animated logo" },
        { src: "/images/portfolio/motion-3.jpg", alt: "Title sequence" },
        { src: "/images/portfolio/motion-4.jpg", alt: "Social media GIF" }
      ]
    },
    {
      id: 5,
      category: "Product & Packaging",
      title: "Labels & Merchandise",
      description: "Creative product packaging, labels, boxes, and merchandise visuals that enhance brand identity.",
      color: "from-green-500 to-teal-500",
      icon: Package,
      images: [
        { src: "/images/portfolio/packaging-1.jpg", alt: "Product label" },
        { src: "/images/portfolio/packaging-2.jpg", alt: "Box design" },
        { src: "/images/portfolio/packaging-3.jpg", alt: "Product mockup" },
        { src: "/images/portfolio/packaging-4.jpg", alt: "Merchandise design" }
      ]
    },
    {
      id: 6,
      category: "Print Design",
      title: "Posters, Flyers & Brochures",
      description: "Eye-catching print materials including posters, flyers, brochures, magazines, and book covers that make a lasting impression.",
      color: "from-red-500 to-pink-600",
      icon: FileText,
      images: [
        { src: "/images/portfolio/print-1.jpg", alt: "Event poster design" },
        { src: "/images/portfolio/print-2.jpg", alt: "Product brochure" },
        { src: "/images/portfolio/print-3.jpg", alt: "Magazine layout" },
        { src: "/images/portfolio/print-4.jpg", alt: "Book cover design" }
      ]
    }
  ];

  // Your original carousel images data
  const carouselImages = [
    "/images/portfolio/website-banner-1.png",
    "/images/portfolio/website-banner-2.png",
    "/images/portfolio/social-media-post-1.png",
    "/images/portfolio/social-media-post-2.png",
    "/images/portfolio/social-media-post-3.png",
    "/images/portfolio/1.png"
  ];
  
  // Your original state and logic
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#f73002]/5 py-12">
      {/* Your original animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-[#f73002]/10 rounded-full blur-xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#f73002]/30 to-transparent rounded-full"></div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Design Portfolio
            </h1>
            
            <div className="flex items-center justify-center gap-2 my-2">
              <motion.div 
                className="h-0.5 bg-gradient-to-r from-transparent via-[#f73002] to-transparent rounded-full"
                initial={{ width: "0px" }}
                animate={{ width: "120px" }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />
              <motion.div 
                className="w-2 h-2 bg-[#f73002] rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              />
              <motion.div 
                className="h-0.5 bg-gradient-to-r from-transparent via-[#f73002] to-transparent rounded-full"
                initial={{ width: "0px" }}
                animate={{ width: "120px" }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />
            </div>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our collection of creative works across various design disciplines.
            </p>
          </div>
        </motion.div>

        {/* --- THE FIX, PART 2 --- */}
        {/* Pass all the necessary data and functions as props */}
        <CollageGrid 
            portfolioItems={portfolioItems}
            carouselImages={carouselImages}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            goToPrev={goToPrev}
            goToNext={goToNext}
        />
      </div>

      {/* Your original CTA Section */}
      <motion.div
        className="relative text-center bg-gradient-to-br from-white via-gray-50/50 to-white p-8 rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#f73002] via-purple-500 to-blue-500"></div>
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#f73002]/5 rounded-full"></div>
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500/5 rounded-full"></div>
        
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-800 via-[#f73002] to-gray-800 bg-clip-text text-transparent">
              Let's Drive Your Success Together
            </h2>
            
            <motion.div 
              className="w-20 h-0.5 bg-gradient-to-r from-[#f73002] to-red-600 mx-auto mb-6 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "80px" }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </motion.div>
          
          <motion.p
            className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Contact us to discuss your graphic design and branding needs.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.a
              href="tel:+1234567890"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#f73002] to-red-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              <Phone size={20} />
              <span className="relative z-10">Call Us</span>
            </motion.a>
            
            <motion.a
              href="https://wa.me/1234567890?text=Hi! I'm interested in your graphic design services."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              <MessageCircle size={20} />
              <span className="relative z-10">WhatsApp</span>
            </motion.a>
          </motion.div>
          
          <motion.div
            className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available Now
            </span>
            <span>•</span>
            <span>Free Consultation</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}