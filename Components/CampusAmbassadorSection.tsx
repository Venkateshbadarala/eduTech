

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

import CampusImage from "@/public/AboutImage.png";

export default function CampusAmbassadorSection() {
  return (
    <section className="w-full  md:py-20 py-10 px-6 md:px-12 lg:px-20 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/30 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative ">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <div className="flex items-start gap-5 mb-8">
            <div className="w-2 h-28 rounded-full bg-gradient-to-b from-primary to-secondary mt-2" />

            <div>
              <h2 className="text-5xl md:text-6xl font-black text-black-1 leading-tight tracking-tight">
                What is a Campus
                <br />
                Ambassador?
              </h2>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#5B5567] text-xl leading-[2.1rem] max-w-2xl"
          >
            A Campus Ambassador is a student leader who represents your
            organization inside their college campus. They connect students with
            exciting opportunities, workshops, internships, and industry-driven
            learning experiences while building leadership skills, networking,
            and earning exclusive rewards.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <div className="bg-white shadow-md rounded-2xl px-5 py-3 text-[#111827] font-semibold">
              Leadership Skills
            </div>

            <div className="bg-white shadow-md rounded-2xl px-5 py-3 text-[#111827] font-semibold">
              Networking
            </div>

            <div className="bg-white shadow-md rounded-2xl px-5 py-3 text-[#111827] font-semibold">
              Internship Access
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.18)] border border-white/40"
          >
            <Image
              src={CampusImage}
              alt="Campus Ambassador"
              className="w-full h-auto object-cover"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Play Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-28 h-28 rounded-full bg-white shadow-2xl flex items-center justify-center">
                <Play
                  className="text-orange-500 fill-orange-500 ml-1"
                  size={42}
                />
              </div>
            </motion.button>
          </motion.div>

          {/* Floating Mini Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-6 -left-6 bg-white rounded-2xl px-5 py-4 shadow-xl"
          >
            <p className="text-sm text-gray-500">Campus Leaders</p>
            <h4 className="text-2xl font-bold text-[#111827]">500+</h4>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-6 -right-6 bg-white rounded-2xl px-5 py-4 shadow-xl"
          >
            <p className="text-sm text-gray-500">Student Reach</p>
            <h4 className="text-2xl font-bold text-[#111827]">50K+</h4>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

