import React from "react";
import { motion } from "framer-motion";
import { Film, Video, Play, Scissors, Zap, Phone, MessageCircle, Award, Clock, CheckCircle, Users, ThumbsUp, Calendar } from "lucide-react";

export default function VideoEditing() {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <div className="text-center mb-12 relative">
        <div className="relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#f73002]/30 to-transparent rounded-full"></div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
              Professional Video Editing
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 my-4">
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
          className="text-xl text-gray-700 mt-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transform your raw footage into captivating visual stories with our expert video editing services.
        </motion.p>
      </div>
      
      {/* Services Section with Side-by-Side Layout */}
      <div className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Services */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Video Editing Services</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto lg:mx-0 mb-8"></div>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  icon: Film,
                  title: "Social Media Videos",
                  description: "Engaging clips optimized for Instagram, TikTok, YouTube Shorts, and more"
                },
                {
                  icon: Play,
                  title: "YouTube Content",
                  description: "Professional editing for vlogs, tutorials, and channel content"
                },
                {
                  icon: Scissors,
                  title: "Commercial & Promo",
                  description: "High-impact videos that drive engagement and conversions"
                },
                {
                  icon: Zap,
                  title: "Quick Edits",
                  description: "Fast, high-quality edits when you're on a tight deadline"
                }
              ].map((service, index) => (
                <motion.div 
                  key={service.title}
                  className="flex items-start p-4 hover:bg-gray-50 rounded-xl transition-all"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="p-2 bg-blue-50 rounded-lg mr-4 flex-shrink-0">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Why Choose Us */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-inner border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Award,
                  title: "5+ Years Experience",
                  description: "Professional editors with extensive industry experience"
                },
                {
                  icon: Clock,
                  title: "Fast Turnaround",
                  description: "Quick delivery without compromising on quality"
                },
                {
                  icon: CheckCircle,
                  title: "Custom Solutions",
                  description: "Tailored specifically for your brand and audience"
                },
                {
                  icon: Users,
                  title: "Dedicated Support",
                  description: "Personalized attention and unlimited revisions"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
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
              Let's Elevate Your Video Content
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
            Contact us to discuss your video editing needs and bring your vision to life.
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
              href="https://wa.me/1234567890?text=Hi! I'm interested in your video editing services."
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
