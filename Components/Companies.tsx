"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import amazon from "@/public/Companies/amazon.png";
import hcl from "@/public/Companies/hcl.png";
import meta from "@/public/Companies/meta.png";
import microsoft from "@/public/Companies/Microsoft.png";
import capgemini from "@/public/Companies/capgemini.png";
import cognizant from "@/public/Companies/Cognizant.png";
import oracle from "@/public/Companies/oracle.png";
import unity from "@/public/Companies/Unity.png";

const companies = [
  amazon,
  hcl,
  meta,
  microsoft,
  oracle,
  unity,
];

export default function Companies() {
  return (
    <section className="py-10  overflow-hidden px-10 relative">

      {/* 🔥 Heading */}
      <div className="text-center mb-12">
  <h2 className="text-4xl md:text-5xl font-bold text-(--color-black-1) leading-tight">
    Where Our Students{" "}
    <span className="bg-gradient-to-r from-(--color-primary) to-(--color-secondary) text-transparent bg-clip-text">
      Build Their Careers
    </span>
  </h2>

  <p className="text-(--color-gray-2) mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
    Our learners are shaping their future at leading global companies.
    Explore the organizations where their skills and ambition are making an impact.
  </p>
</div>

      {/* 🔥 Fade edges */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-(--color-white) to-transparent z-10" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-(--color-white) to-transparent z-10" />

      {/* 🔥 ROW 1 */}
      <div className="overflow-hidden rotate-[-2deg]">
        <motion.div
          className="flex gap-10 w-max items-center"
          animate={{ x: ["0%", "-30%"] }} // ✅ FIXED
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...companies, ...companies].map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-(--color-white) shadow-md rounded-xl px-6 py-4 flex items-center justify-center 
                         min-w-[140px] h-[80px] border border-(--color-gray-1) 
                         hover:shadow-xl transition"
            >
              <Image
                src={logo}
                alt="company"
                className="object-contain max-h-[40px] w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🔥 ROW 2 */}
      <div className="overflow-hidden mt-10 rotate-[2deg]">
        <motion.div
          className="flex gap-10 w-max items-center"
          animate={{ x: ["-30%", "0%"] }} // ✅ FIXED
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...companies, ...companies].map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-(--color-white) shadow-md rounded-xl px-6 py-4 flex items-center justify-center 
                         min-w-[140px] h-[80px] border border-(--color-gray-1)
                         hover:shadow-xl transition"
            >
              <Image
                src={logo}
                alt="company"
                className="object-contain max-h-[40px] w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}