import React from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Phone, MessageCircle, Camera, Video, Image, Users } from "lucide-react";

export default function BrandShoots() {
  const services = [
    {
      icon: Camera,
      title: "Product Photography",
      description: "Crystal-clear images that showcase your products with professional lighting and stunning detail, perfect for e-commerce and catalogs.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Corporate & Team Portraits",
      description: "Modern headshots and dynamic team photos that reflect your company's culture and professionalism.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Image,
      title: "Lifestyle & Brand Shoots",
      description: "Authentic, in-context images that tell your brand's story and connect with your audience on a personal level.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Video,
      title: "Commercial Videography",
      description: "High-quality video content, from social media shorts to full brand films, designed to engage and convert.",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
                <div className="relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#f73002]/30 to-transparent rounded-full"></div>
                    
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                    whileInView={{ width: "120px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                />
                <motion.div 
                    className="w-2 h-2 bg-[#f73002] rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                />
                <motion.div 
                    className="h-0.5 bg-gradient-to-r from-transparent via-[#f73002] to-transparent rounded-full"
                    initial={{ width: "0px" }}
                    whileInView={{ width: "120px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                />
            </div>
          </div>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            Captivating visuals that tell your brand's story and connect with your audience on an emotional level.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            <HashLink
              smooth
              to="/#portfolio"
              className="px-8 py-4 bg-gradient-to-r from-[#f73002] to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
            >
              View Our Work
            </HashLink>
          </motion.div>
        </div>

        {/* --- UPDATED SERVICES SECTION --- */}
        <section className="mb-24">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Photography Services
          </motion.h2>
          
          {/* Grid changed to 2 columns on medium screens and up */}
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                // Card styling updated for a "bigger block" feel
                className="bg-gray-50 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Icon is larger and left-aligned */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} text-white flex items-center justify-center mb-6 shadow-md`}>
                  <service.icon size={40} />
                </div>
                {/* Text is larger and left-aligned */}
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-lg text-gray-600 flex-grow">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          className="relative text-center bg-white p-12 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          // ... (rest of CTA section is unchanged)
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#f73002] via-purple-500 to-blue-500"></div>
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#f73002]/5 rounded-full"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500/5 rounded-full"></div>
          
          <div className="relative z-10">
            <motion.h2 
              className="text-4xl font-bold mb-4 text-gray-900"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's Capture Your Brand's Essence
            </motion.h2>
            
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
              <a href="tel:+919876543210" className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#f73002] to-red-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                <Phone size={20} />
                <span className="relative z-10">Call Us</span>
              </a>
              <a href="https://api.whatsapp.com/send?phone=919876543210&text=Hi! I'm interested in your brand photography services." target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                <MessageCircle size={20} />
                <span className="relative z-10">WhatsApp</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}