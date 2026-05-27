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
import EY from "@/public/Companies/EY.png";
import IBM from "@/public/Companies/IBM.png";
import mindtree from "@/public/Companies/mindtree.jpg";
import zoho from "@/public/Companies/zoho.png";
import wipro from "@/public/Companies/wipro.png";
import tcs from "@/public/Companies/Tcs.webp";
import zerodha from "@/public/Companies/zerodha.png";
import razorpay from "@/public/Companies/razorpay.png";
import Capgemini from "@/public/Companies/capgemini.png";


const companies = [amazon, hcl, meta, microsoft, oracle, unity, EY, IBM, mindtree, zoho, tcs, zerodha, razorpay, Capgemini];

export default function Companies() {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // 🌊 PARALLAX ONLY FOR HEADING
  const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [1, 1, 0.6],
  );

  return (
    <section
      ref={container}
      className="relative pb-16   overflow-hidden rounded-xl  "
    >
      {/* 🔥 Heading (Parallax Applied) */}
      <motion.div
        style={{ y: headingY, opacity: headingOpacity }}
        className="text-center px-4"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-black-1 leading-tight relative z-10">
          Where our Learners{" "}
          <span className="text-secondary bg-clip-text">
            Evolves their career
          </span>
        </h2>

        <p className="text-gray-500 mt-5 max-w-6xl mx-auto text-md md:text-lg leading-relaxed relative">
          Our learners are advancing into dynamic professional environments
          where their expertise, adaptability, and industry-ready capabilities
          contribute to meaningful organizational growth and long-term career
          success.
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
                className="object-contain max-h-[50px] w-auto   hover:grayscale-0 hover:opacity-100 transition"
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
                className="object-contain max-h-[50px] w-auto  hover:grayscale-0 hover:opacity-100 transition"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
