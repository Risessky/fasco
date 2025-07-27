"use client";

import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0},
  visible: (customDelay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: customDelay, duration: 0.8, ease: "easeOut" },
  }),
};

export default function FadeInDiv({ children, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={delay}
      variants={imageVariants}
    >
      {children}
    </motion.div>
  );
}
