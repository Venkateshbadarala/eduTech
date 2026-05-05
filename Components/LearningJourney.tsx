"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Journey from "@/public/Journey1.png";

export default function LearningJourney() {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // 🌊 PARALLAX LAYERS
  const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["50px", "-80px"]);
const dotCircleRef = useRef<HTMLDivElement | null>(null);
  const bubbleY1 = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const bubbleY2 = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]);

  return (
    <section
      ref={container}
      className="relative md:py-10 text-center px-6 overflow-hidden  py-4"
    >
      {/* 🫧 FLOATING BACKGROUND */}
      <motion.div
        style={{ y: bubbleY1 }}
        className="absolute top-10 left-30 w-60 h-60 bg-light rounded-full "
      />
      <motion.div
        style={{ y: bubbleY2 }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-light/20 rounded-full "
      />

      <motion.div
        ref={dotCircleRef}
        style={{ y: bubbleY2 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-32 right-10 w-48 h-48 border-2 border-dashed border-light rounded-full"
      />

      {/* 🔥 HEADING */}
      <motion.h2
        style={{ y: headingY }}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-black-1 leading-tight relative z-10"
      >
        Transform Your Future with{" "}
        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text uppercase">
          cornixe Edtech
        </span>
      </motion.h2>

      {/* 🔥 TEXT */}
      <motion.p
        style={{ y: textY }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-gray-500 mt-5 max-w-2xl mx-auto text-md md:text-lg leading-relaxed relative z-10"
      >
        Step into a smarter way of learning — where industry-driven courses,
        expert mentorship, and real-world projects come together to help you
        build skills, gain confidence, and achieve your career goals faster.
      </motion.p>

      {/* 🔥 IMAGE PARALLAX */}
      <motion.div
        style={{ y: imageY }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center  relative z-10"
      >
        <div className="relative">
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-blue-300/20 blur-3xl rounded-full scale-110" />

          <Image
            src={Journey}
            alt="Learning Journey"
            width={1000}
            height={500}
            className=" relative"
          />
        </div>
      </motion.div>
    </section>
  );
}