"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import amazon from "@/public/Companies/amazon.png";
import hcl from "@/public/Companies/hcl.png";
import meta from "@/public/Companies/meta.png";
import microsoft from "@/public/Companies/Microsoft.png";
import oracle from "@/public/Companies/oracle.png";
import unity from "@/public/Companies/Unity.png";

const companies = [amazon, hcl, meta, microsoft, oracle, unity];

export default function Companies() {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // 🌊 PARALLAX ONLY FOR HEADING
  const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 0.6]);

  return (
    <section
      ref={container}
      className="relative py-16 px-6 md:px-16 overflow-hidden rounded-xl  "
    >
      {/* 🔥 Heading (Parallax Applied) */}
      <motion.div
        style={{ y: headingY, opacity: headingOpacity }}
        className="text-center "
      >
        <h2 className="text-3xl md:text-5xl font-bold text-(--color-black-1) leading-tight">
          Where our Learners{" "}
          <span className="bg-gradient-to-r from-(--color-primary) to-(--color-secondary) text-transparent bg-clip-text">
            Evolves their career
          </span>
        </h2>

        <p className="text-(--color-gray-2) mt-5 max-w-2xl mx-auto text-md md:text-lg leading-relaxed">
          Our learners are advancing into dynamic professional environments where their expertise, adaptability, and
industry-ready capabilities contribute to meaningful organizational growth and long-term career success.

        </p>
      </motion.div>

      {/* 🔥 ROW 1 */}
      <div className="overflow-hidden rotate-[-2deg]">
        <motion.div
          className="flex gap-10 w-max items-center py-4"
          animate={{ x: ["0%", "-30%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...companies, ...companies].map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-(--color-white) shadow-md rounded-xl px-6 py-4 flex items-center justify-center 
                         md:min-w-[140px] md:h-[120px] sm:min-w-[50px] sm:h-[60px] border border-(--color-gray-1) 
                         hover:shadow-xl transition"
            >
              <Image
                src={logo}
                alt="company"
                className="object-contain max-h-[50px] w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🔥 ROW 2 */}
      <div className="overflow-hidden mt-10 rotate-[2deg]">
        <motion.div
          className="flex gap-10 w-max items-center py-4"
          animate={{ x: ["-30%", "0%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...companies, ...companies].map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-(--color-white) shadow-md rounded-xl px-6 py-4 flex items-center justify-center 
                          md:min-w-[140px] md:h-[120px] sm:min-w-[50px] sm:h-[60px] border border-(--color-gray-1)
                         hover:shadow-xl transition"
            >
              <Image
                src={logo}
                alt="company"
                className="object-contain max-h-[50px] w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}