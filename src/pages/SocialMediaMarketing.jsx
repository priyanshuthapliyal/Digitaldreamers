import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, BarChart2, Target, TrendingUp, Smartphone, ThumbsUp, Award, Clock, X, ChevronRight, Check, Zap, ArrowUpRight, Sparkles } from "lucide-react";

export default function SocialMediaMarketing() {
  const [selectedService, setSelectedService] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: BarChart2,
      title: "Paid Advertising",
      description: "Data-driven ad campaigns across Meta, Instagram, and YouTube that deliver real results.",
      color: "from-blue-500 to-blue-600",
      features: ["Targeted ad campaigns", "A/B testing", "Conversion tracking", "ROI optimization"]
    },
    {
      icon: Target,
      title: "Audience Targeting",
      description: "Precise audience segmentation to reach your ideal customers with laser-focused campaigns.",
      color: "from-purple-500 to-indigo-600",
      features: ["Customer persona development", "Lookalike audiences", "Interest-based targeting", "Behavioral analysis"]
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Comprehensive social media strategies to grow your online presence and engagement.",
      color: "from-pink-500 to-rose-600",
      features: ["Content calendar", "Engagement strategy", "Influencer partnerships", "Community building"]
    },
    {
      icon: Smartphone,
      title: "Content Creation",
      description: "Eye-catching content designed specifically for social media platforms to maximize engagement.",
      color: "from-orange-500 to-amber-600",
      features: ["Visual storytelling", "Video production", "Graphic design", "Copywriting"]
    }
  ];

  const stats = [
    { value: "85%", label: "ROI Increase", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
    { value: "3x", label: "Engagement Boost", icon: ThumbsUp, color: "from-purple-500 to-pink-500" },
    { value: "24/7", label: "Campaign Monitoring", icon: Clock, color: "from-amber-500 to-orange-500" },
    { value: "100%", label: "Client Satisfaction", icon: Award, color: "from-emerald-500 to-teal-500" }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-6"
            >
              <Sparkles className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Transform Your Digital Presence
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Grow Your Brand with
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Social Media Excellence
              </span>
            </motion.h1>
            
            {/* Decorative red-orange lines with circle */}
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

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We craft data-driven social media strategies that deliver measurable results and help your brand stand out in the digital landscape.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="#services"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Animated Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-pink-500/10 to-rose-500/10 rounded-full filter blur-3xl -z-10"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} text-white flex items-center justify-center shadow-lg`}>
                  <stat.icon size={28} />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-4"
            >
              <Zap className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Our Services
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Comprehensive Social Media
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Marketing Solutions
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We offer end-to-end social media marketing services to help your brand thrive in the digital space.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedService(service)}
              >
                <div className="absolute top-6 right-6 text-gray-200 group-hover:text-blue-500 transition-colors duration-300">
                  <ArrowUpRight size={24} />
                </div>
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} text-white flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon size={26} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2.5">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2.5 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <button className="inline-flex items-center text-blue-600 font-medium group">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
          className="relative text-center bg-gradient-to-br from-white via-gray-50/50 to-white p-12 rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#f73002] via-purple-500 to-blue-500"></div>
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#f73002]/5 rounded-full"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500/5 rounded-full"></div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-800 via-[#f73002] to-gray-800 bg-clip-text text-transparent">
                Let's Drive Your Success Together
              </h2>
              
              {/* Decorative line under heading */}
              <motion.div 
                className="w-20 h-0.5 bg-gradient-to-r from-[#f73002] to-red-600 mx-auto mb-6 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </motion.div>
            
            <motion.p
              className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Contact us to discuss your social media marketing strategy and goals.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                href="https://wa.me/1234567890?text=Hi! I'm interested in your social media marketing services."
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
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
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

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              className="relative bg-white rounded-2xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                onClick={() => setSelectedService(null)}
              >
                <X size={28} />
              </button>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedService.color} text-white flex items-center justify-center mb-6 shadow-lg`}>
                    <selectedService.icon size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedService.title}</h3>
                  <p className="text-gray-600 mb-6">{selectedService.description}</p>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-lg mb-4 text-gray-800">Ideal for:</h4>
                    <ul className="space-y-3">
                      {["Startups", "Small Businesses", "E-commerce Stores", "Enterprise Brands"].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="ml-3 text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h4>
                    
                    <div className="space-y-6">
                      {selectedService.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5">
                            <span className="text-sm font-bold">{i + 1}</span>
                          </div>
                          <div className="ml-4">
                            <h5 className="font-semibold text-gray-900">{feature}</h5>
                            <p className="mt-1 text-gray-600 text-sm">
                              Detailed description of what this feature includes and how it benefits your business.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-10 pt-6 border-t border-gray-200">
                      <h5 className="text-lg font-semibold text-gray-900 mb-4">Ready to get started?</h5>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href="#contact"
                          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg text-center hover:opacity-90 transition-opacity flex-1 flex items-center justify-center gap-2"
                          onClick={() => setSelectedService(null)}
                        >
                          Get Started
                          <ArrowRight size={18} />
                        </a>
                        <button
                          className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex-1"
                          onClick={() => setSelectedService(null)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
