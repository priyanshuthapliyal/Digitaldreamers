import React from "react";
import { motion } from "framer-motion";
import { Search, Monitor, Youtube, Target, TrendingUp, MessageCircle, Phone, Star, Users, Award, Zap, Facebook, Instagram, ThumbsUp, Share2 } from "lucide-react";

export default function Ads() {
  const services = [
    // Google Ads Services
    {
      icon: Search,
      title: "Google Search Ads",
      description: "Target users actively searching for your products with keyword-optimized campaigns that drive immediate results.",
      highlight: "97% Click-Through Rate",
      platform: "google"
    },
    {
      icon: Monitor,
      title: "Display Network",
      description: "Build brand awareness with visually compelling banner ads across Google's vast display network.",
      highlight: "2M+ Impressions",
      platform: "google"
    },
    {
      icon: Youtube,
      title: "YouTube Ads",
      description: "Engage audiences with video content that converts, from skippable ads to YouTube Shorts campaigns.",
      highlight: "85% View Rate",
      platform: "google"
    },
    {
      icon: Target,
      title: "Shopping Ads",
      description: "Showcase your products directly in search results with rich product listings and competitive pricing.",
      highlight: "450% ROAS",
      platform: "google"
    },
    // Meta Ads Services
    {
      icon: Facebook,
      title: "Facebook Ads",
      description: "Reach your ideal audience with highly targeted ads on the world's largest social network.",
      highlight: "1.9B Daily Users",
      platform: "meta"
    },
    {
      icon: Instagram,
      title: "Instagram Ads",
      description: "Engage users with visually stunning ads in Stories, Feed, Reels, and Explore.",
      highlight: "500M+ Daily Stories",
      platform: "meta"
    },
    {
      icon: ThumbsUp,
      title: "Engagement Campaigns",
      description: "Boost interactions, page likes, and post engagement with targeted social campaigns.",
      highlight: "3x Higher Engagement",
      platform: "meta"
    },
    {
      icon: Share2,
      title: "Lead Generation",
      description: "Capture high-quality leads directly through social media with optimized lead forms.",
      highlight: "60% Lower Cost Per Lead",
      platform: "meta"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#f73002]/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-[#f73002]/10 rounded-full blur-xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-20 h-20 bg-green-500/10 rounded-full blur-xl"
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 4 }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto py-20 px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">

          <motion.div
            className="mb-12 relative"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background accent */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#f73002]/30 to-transparent rounded-full"></div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#FBBC05] bg-clip-text text-transparent drop-shadow-sm">
                Google
              </span>
              <span className="text-gray-800"> & </span>
              <span className="bg-gradient-to-r from-[#4267B2] via-[#898F9C] to-[#00A2E8] bg-clip-text text-transparent drop-shadow-sm">
                Meta
              </span>
              <span className="text-gray-800"> Ads</span>
            </h1>
            
            <div className="relative mt-3">
              <h2 className="text-4xl md:text-5xl font-bold leading-normal pb-4">
                <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                  Performance-Driven Advertising
                </span>
              </h2>
              
              {/* Enhanced decorative elements */}
              <div className="flex items-center justify-center gap-2 mt-2">
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
          </motion.div>
          
          <motion.p
            className="text-gray-700 leading-relaxed text-xl max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Maximize your ROI with our comprehensive paid advertising solutions across Google and Meta platforms. Our 
            <span className="font-bold text-blue-600"> data-driven approach</span> and 
            <span className="font-bold text-blue-600"> certified expertise</span> deliver campaigns that 
            drive real business results across all digital channels.
          </motion.p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 40, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, rotateX: 5, scale: 1.02 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Colorful top section */}
              <div className={`h-32 bg-gradient-to-br ${
                service.platform === 'google' ? 
                  (index % 2 === 0 ? 'from-blue-500 to-blue-600' : 'from-green-500 to-green-600') :
                  (index % 2 === 0 ? 'from-blue-700 to-indigo-600' : 'from-purple-500 to-pink-600')
              } relative overflow-hidden`}>
                {/* Geometric patterns */}
                <div className="absolute inset-0">
                  <motion.div 
                    className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-lg"
                    animate={{ rotate: [0, 45, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute top-1/2 right-6 transform -translate-y-1/2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <service.icon className="text-white/40" size={48} />
                  </motion.div>
                </div>
                
              </div>
              
              {/* Main icon - positioned in content area */}
              <div className="absolute top-24 left-6">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border-2 border-gray-100">
                  <service.icon className="text-[#f73002]" size={32} />
                </div>
              </div>
              
              {/* Content section */}
              <div className="pt-16 pb-6 px-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 pr-4">{service.title}</h3>
                  <span className="text-xs font-semibold text-white bg-[#f73002] px-3 py-1.5 rounded-full whitespace-nowrap">
                    {service.highlight}
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-sm mb-4">{service.description}</p>
                
                {/* Bottom action area */}
                <div className="pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">Expert Management</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="relative text-center bg-gradient-to-br from-white via-gray-50/50 to-white p-12 rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Background decoration */}
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
              
              {/* Decorative line under heading */}
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
              Contact us to discuss your Google Ads strategy and goals.
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
                href="https://wa.me/1234567890?text=Hi! I'm interested in your Google Ads services."
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
    </div>
  );
}
