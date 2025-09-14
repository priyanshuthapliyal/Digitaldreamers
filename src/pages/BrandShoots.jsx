import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Camera, Video, Image, Users, Award, Clock, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function BrandShoots() {
    const [selectedImage, setSelectedImage] = useState(null);

    const services = [
        {
            icon: Camera,
            title: "Product Photography",
            description: "Showcase your products with professional images that highlight quality and details.",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: Users,
            title: "Team Portraits",
            description: "Professional headshots and team photos that reflect your company culture.",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: Image,
            title: "Lifestyle Shoots",
            description: "Authentic images that tell your brand's story in a natural, engaging way.",
            color: "from-pink-500 to-pink-600"
        },
        {
            icon: Video,
            title: "Commercial Videos",
            description: "High-quality video content for social media, websites, and advertisements.",
            color: "from-red-500 to-red-600"
        }
    ];

    const portfolioItems = [
        { id: 1, category: 'product', src: '/images/portfolio/social-media-post-1.png' },
        { id: 2, category: 'portrait', src: '/images/portfolio/social-media-post-2.jpg' },
        { id: 3, category: 'lifestyle', src: '/images/portfolio/social-media-post-3.jpg' },
        { id: 4, category: 'commercial', src: '/images/portfolio/commercial-1.jpg' },
        { id: 5, category: 'product', src: '/images/portfolio/product-2.jpg' },
        { id: 6, category: 'portrait', src: '/images/portfolio/portrait-2.jpg' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-20 relative">
                <div className="relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#f73002]/30 to-transparent rounded-full"></div>
                    
                    <motion.h1
                        className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="bg-gradient-to-r from-[#f73002] to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                            Elevate Your Brand with Professional Photography
                        </span>
                    </motion.h1>

                    <div className="flex items-center justify-center gap-2 mb-10">
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
                </div>

                <motion.p
                    className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Captivating visuals that tell your brand's story and connect with your audience on an emotional level.
                </motion.p>

                <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <motion.a
                        href="#portfolio"
                        className="px-8 py-4 bg-gradient-to-r from-[#f73002] to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View Our Work
                    </motion.a>
                </motion.div>
            </div>

            {/* Services Section */}
            <section className="mb-24">
                <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} text-white flex items-center justify-center mb-4`}>
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Portfolio Gallery */}
            <section id="portfolio" className="mb-24">
                <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="relative group overflow-hidden rounded-2xl cursor-pointer aspect-square bg-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedImage(item)}
                        >
                            <img 
                                src={item.src} 
                                alt={`Portfolio item ${item.id}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-medium">View Project</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <motion.div
                id="contact"
                className="relative text-center bg-gradient-to-br from-white via-gray-50/50 to-white p-12 rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#f73002] via-purple-500 to-blue-500"></div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#f73002]/5 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500/5 rounded-full"></div>
                
                <div className="relative z-10">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-800 via-[#f73002] to-gray-800 bg-clip-text text-transparent">
                            Let's Capture Your Brand's Essence
                        </h2>
                        
                        <motion.div 
                            className="w-20 h-0.5 bg-gradient-to-r from-[#f73002] to-red-600 mx-auto mb-6 rounded-full"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "80px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                        />
                    </motion.div>
                    
                    <motion.p
                        className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Ready to elevate your brand with stunning visuals? Contact us today to discuss your photography and videography needs.
                    </motion.p>
                    
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.a
                            href="tel:+919876543210"
                            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#f73002] to-red-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                            <Phone size={20} />
                            <span className="relative z-10">Call Us</span>
                        </motion.a>
                        
                        <motion.a
                            href="https://wa.me/919876543210?text=Hi! I'm interested in your brand photography services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
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
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <span className="flex items-center gap-1.5">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            Available Now
                        </span>
                        <span>•</span>
                        <span>Free Consultation</span>
                    </motion.div>
                </div>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X size={32} />
                        </button>
                        
                        <motion.div 
                            className="relative"
                            layoutId={`card-${selectedImage.id}`}
                        >
                             <img 
                                src={selectedImage.src} 
                                alt={`Portfolio item ${selectedImage.id}`}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg" 
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}