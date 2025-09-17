import { HashLink } from "react-router-hash-link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/#", label: "Home" }, // Added a Home link
  { to: "/about", label: "About" },
  { to: "/#services", label: "Services" },
  { to: "/#portfolio", label: "Portfolio" },
  { to: "/#team", label: "Team" },
  { to: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/#");

  // This effect will run once to set up the scroll observer
  useEffect(() => {
    const sections = links
      .map((link) => {
        // We need to get the ID from the link's `to` property
        const id = link.to.split("#")[1];
        if (id) {
          return document.getElementById(id);
        }
        return null;
      })
      .filter((section) => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reconstruct the link's `to` property to match our links array
            const linkTo = `/${entry.target.id === "" ? "" : "#" + entry.target.id}`;
            setActiveLink(linkTo);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // This triggers when the section is in the middle of the screen
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []); // Empty dependency array ensures this runs only once

  const handleLinkClick = () => {
    setOpen(false);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 flex items-center justify-between rounded-2xl bg-white/80 backdrop-blur-lg border border-gray-200/80 shadow-lg px-6 py-4">
          <HashLink to="/#" className="text-xl font-bold text-gray-900">
            <span className="text-[#f73002]">My</span>DigitalDreamers
          </HashLink>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>

          {/* --- Desktop Menu --- */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.to}>
                <HashLink
                  smooth
                  to={link.to}
                  className={`relative text-base font-medium transition-colors duration-300 ${
                    activeLink === link.to
                      ? "text-[#f73002]"
                      : "text-gray-700 hover:text-[#f73002]"
                  } after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#f73002] after:transition-transform after:duration-300 ${
                    activeLink === link.to
                      ? "after:scale-x-100"
                      : "after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {link.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* --- Animated Mobile Menu --- */}
      <AnimatePresence>
        {open && (
          <motion.ul
            className="md:hidden mt-2 mx-4 flex flex-col items-center gap-4 rounded-2xl bg-white/95 backdrop-blur border border-gray-200 shadow-lg px-4 py-6"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {links.map((link) => (
              <li key={link.to}>
                <HashLink
                  smooth
                  to={link.to}
                  onClick={handleLinkClick}
                  className={`text-lg transition ${
                    activeLink === link.to
                      ? "text-[#f73002] font-semibold"
                      : "text-gray-700 font-medium"
                  }`}
                >
                  {link.label}
                </HashLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}