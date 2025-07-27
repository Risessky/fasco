



"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import insta1 from "@/public/images/insta1.png";
import insta2 from "@/public/images/insta2.png";
import insta3 from "@/public/images/insta3.png";
import insta4 from "@/public/images/insta4.png";
import insta5 from "@/public/images/insta5.png";
import insta6 from "@/public/images/insta6.png";

const images = [insta1, insta2, insta3, insta4, insta5, insta6];

export default function FollowUS() {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.clientWidth * index,
        behavior: "smooth",
      });
    }
  }, [index]);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="flex flex-col items-center px-4">
      <h2 className="font-volkhov text-[48px] text-grayDark mb-6 text-center max-md:text-[36px]">
        Follow Us On Instagram
      </h2>
      <p className="text-gray max-w-[614px] text-center mb-16">
        Follow us on Instagram to explore our latest collections, behind-the-scenes moments, exclusive deals, style inspiration, and stay connected every day.
      </p>

      {/* desktop grid */}
      <div className="hidden sm:flex flex-wrap justify-center gap-4 pb-16">
        {images.map((img, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className={`relative w-[256px] ${
              i % 2 === 1 ? "h-[380px]" : "h-[308px]"
            }`}
          >
            <Image
              src={img}
              alt=""
              fill
              className="object-cover rounded-lg"
              placeholder="blur"
            />
          </motion.div>
        ))}
      </div>

      {/* mobile slider */}
      <div
        ref={sliderRef}
        className="sm:hidden flex overflow-x-hidden pb-16 snap-x snap-mandatory w-5/6"
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="relative min-w-full aspect-[3/4] snap-start shrink-0 px-2"
          >
            <Image
              src={img}
              alt=""
              fill
              className="object-cover rounded-lg"
              placeholder="blur"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
