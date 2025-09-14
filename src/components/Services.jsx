import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
    FaCamera,
    FaPaintBrush,
    FaChartLine,
    FaInstagram,
    FaVideo,
    FaUsers,
} from "react-icons/fa";

const services = [
    {
        icon: <FaCamera size={32} />,
        title: "Brand Shoots",
        description: "High-quality photography & video to make your brand shine.",
        link: "/services/brand-shoots",
        gradient: "from-[#f73002] to-orange-500",
    },
    {
        icon: <FaPaintBrush size={32} />,
        title: "Graphic Design",
        description: "Creative designs for social media, ads, and branding.",
        link: "/services/graphic-design",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: <FaChartLine size={32} />,
        title: "Paid Advertising",
        description: "Performance-driven campaigns across Google & Meta platforms.",
        link: "/services/Ads",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: <FaInstagram size={32} />,
        title: "Social Media Marketing",
        description: "Paid campaigns to grow audience and boost engagement.",
        link: "/services/social-media-marketing",
        gradient: "from-pink-500 via-red-500 to-yellow-500",
    },
    {
        icon: <FaVideo size={32} />,
        title: "Video Editing",
        description: "Professional video editing services for all your content needs.",
        link: "/services/video-editing",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        icon: <FaUsers size={32} />,
        title: "Social Media Management",
        description: "End-to-end content, strategy & community management.",
        link: "/services/social-media-management",
        gradient: "from-slate-700 to-slate-900",
    },
];

// NEW MagneticButton Component for the "super cool" effect
const MagneticButton = ({ children }) => {
    const ref = React.useRef(null);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="mt-auto"
        >
            {children}
        </motion.div>
    );
};


export default function Services() {
    return (
        <section id="services" className="relative py-24 px-6 bg-slate-50 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Our Services
                    </h2>
                     <motion.div 
                        className="w-24 h-1 bg-gradient-to-r from-[#f73002] to-orange-500 mx-auto mb-6 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    />
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We offer a comprehensive suite of creative and marketing services designed to elevate your brand and deliver results.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Link to={s.link}>
                                <div className={`group relative h-full bg-gradient-to-br ${s.gradient} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col text-center items-center`}>
                                    <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#f73002]/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative z-10 flex flex-col items-center h-full">
                                        <div className="w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                            {s.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 drop-shadow-md">
                                            {s.title}
                                        </h3>
                                        <p className="opacity-80 mb-6 flex-grow">{s.description}</p>
                                        
                                        {/* Using the new MagneticButton component */}
                                        <MagneticButton>
                                            <div className="inline-flex items-center font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                                                Learn More
                                                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                            </div>
                                        </MagneticButton>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}