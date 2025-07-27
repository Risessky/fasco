"use client";

import { motion } from "framer-motion";

const trackingInExpandFwdBottomVariants = {
  hidden: {
    opacity: 0,
    letterSpacing: "-0.5em",
    translateZ: -100, // Not directly supported; simulated with scale
    y: 100,
  },
  visible: {
    opacity: 1,
    letterSpacing: "normal",
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
};

export default function TrackingInExpandFwdBottom({
  children,
  className = "",
}) {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={trackingInExpandFwdBottomVariants}
      className={className}
    >
      {children}
    </motion.span>
  );
}
