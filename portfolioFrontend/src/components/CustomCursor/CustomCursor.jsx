import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  
  // Use motion values for smooth animations
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Smooth transition effect
  const smoothX = useSpring(cursorX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(cursorY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Detect hover on clickable elements
  useEffect(() => {
    const addHoverEffect = () => setHovered(true);
    const removeHoverEffect = () => setHovered(false);

    document.querySelectorAll("a, button, .hover-effect").forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      document.querySelectorAll("a, button, .hover-effect").forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  return (
    <>

      <motion.div
        className="cursor-outline"
        style={{
          x: smoothX,
          y: smoothY,
          scale: hovered ? 1.8 : 1,
          backgroundColor: hovered ? "rgba(255, 255, 255,.3)" : "transparent",
          border: hovered ? "0px solid #fff" : "",
        }}
      />

      <motion.div
        className="cursor-dot"
        style={{
          x: smoothX,
          y: smoothY,
        //   scale: hovered ? 0.9 : 1,
        //   backgroundColor: hovered ? "rgba(110, 18, 153,.9 )" : "",
        // width: hovered ? "20px" : "12px",
        // height: hovered ? "20px" : "12px",
        }}

      />
    </>
  );
};

export default CustomCursor;
