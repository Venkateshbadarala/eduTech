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


export default function AlumniCompanies() {
  return (
    <section className="py-20 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-black-1 leading-tight relative ">
          Our <span className="text-secondary bg-clip-text">Alumni</span> Thrive At
        </h2>

        <p className="mt-4 text-gray-2 text-lg max-w-4xl mx-auto">
          Our learners have launched successful careers at
          leading global companies, driving innovation across
          technology, engineering, consulting, and business.
        </p>
      </div>
<div className="overflow-hidden ">
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
      <div className="overflow-hidden mt-6 ">
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