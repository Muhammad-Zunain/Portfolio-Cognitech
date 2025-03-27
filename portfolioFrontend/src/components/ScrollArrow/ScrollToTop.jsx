import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 30; 
    const scrollInterval = setInterval(() => {
      if (window.scrollY === 0) clearInterval(scrollInterval);
      window.scrollBy(0, scrollStep);
    }, 10);
  };
  

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 0 }} 
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 90 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex items-center justify-center w-14 h-14"
      >
        <motion.div
          className="absolute w-16 h-16 bg-purple-700 rounded-full opacity-50 animate-ping"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        ></motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute w-16 h-16 bg-purple-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out"
        >
          <FaArrowUp className="text-white text-2xl" />
        </motion.div>
      </motion.button>
    </div>
  );
}
