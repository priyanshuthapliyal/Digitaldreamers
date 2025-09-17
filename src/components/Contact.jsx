import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission and redirect to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default browser reload

    // Your WhatsApp number from the .env file
    const phoneNumber = process.env.REACT_APP_WHATSAPP_NUMBER;

    // Create the message string from the form data
    const message = `
*New Inquiry from Digital Dreamers Website*

*Name:* ${formData.name}
*Email:* ${formData.email}

*Message:*
${formData.message}
    `;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);

    // Create the final WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Optional: Clear the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6 text-gray-900"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-12"
        >
          Have a project in mind? Let’s work together to make it a success.
        </motion.p>

        {/* Updated form with the new handleSubmit function */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          <input 
            type="text" 
            name="name" // Make sure name attribute matches state key
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
            className="p-4 rounded-xl border border-gray-300 w-full focus:ring-2 focus:ring-[#f73002] outline-none" 
          />
          <input 
            type="email" 
            name="email" // Make sure name attribute matches state key
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required 
            className="p-4 rounded-xl border border-gray-300 w-full focus:ring-2 focus:ring-[#f73002] outline-none" 
          />
          <textarea 
            name="message" // Make sure name attribute matches state key
            placeholder="Your Message" 
            rows="5" 
            value={formData.message}
            onChange={handleChange}
            required 
            className="p-4 rounded-xl border border-gray-300 w-full focus:ring-2 focus:ring-[#f73002] outline-none"
          ></textarea>
          
          <button 
            type="submit" 
            className="bg-[#f73002] text-white py-4 px-8 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
          >
            Send Message on WhatsApp
          </button>

        </motion.form>
      </div>
    </section>
  );
}