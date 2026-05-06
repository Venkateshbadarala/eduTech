"use client";

import { useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import Logo from "@/public/AboutImage.png";
import image from "@/public/AboutImage1.png";

export default function AboutSection() {
  return (
    <section className="py-25 md:py-20 px-4 md:px-10 lg:px-16  overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* ================= LEFT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* SMALL TAG */}
          <p className="text-primary font-semibold mb-3 tracking-wide uppercase">
            Where It All Began
          </p>

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl xl:text-4xl font-bold text-gray-900 leading-tight">
            Empowering the <span className="text-secondary">Next Generation</span>
            <br />
            of Global Innovators
          </h2>

          {/* IMAGE */}
          <div className="mt-8 rounded-3xl overflow-hidden shadow-lg bg-white">
            <Image
              src={Logo}
              alt="Learning"
              width={700}
              height={500}
              className="w-full h-[250px] sm:h-[320px] md:h-[380px] object-cover"
            />
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-6 leading-relaxed text-sm md:text-base">
            At Cornixe, we believe learning should go beyond theory.
            Our platform bridges education with real-world application
            through immersive projects, expert mentorship, and
            career-focused guidance. We empower learners to build
            practical skills, gain confidence, and unlock opportunities
            that shape a brighter future.
          </p>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >

          {/* IMAGE COLLAGE */}
          <div className="relative bg-white rounded-3xl p-5 md:p-6 shadow-lg overflow-hidden">
            <div className="grid grid-cols-2 gap-4">

        

              {/* LARGE IMAGE */}
              <div className="col-span-2 overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt="education"
                  width={700}
                  height={400}
                  className="w-full h-[250px] sm:h-[320px] md:h-[380px]  object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            {/* DECORATIVE CIRCLE */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary rounded-full blur-3xl opacity-50" />
          </div>

          {/* ================= STATS ================= */}
          <div className="grid grid-cols-2 gap-4">

            <StatCard
              value={25000}
              suffix="+"
              label="Students Enrolled"
            />

            <StatCard
              value={4.8}
              suffix="/5"
              label="Satisfaction Rate"
            />

            <StatCard
              value={50000}
              suffix="+"
              label="Project Completion"
            />

            <StatCard
              value={5}
              suffix="/5"
              label="Faculty Rating"
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= STAT CARD ================= */

function StatCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [startCount, setStartCount] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setStartCount(true)}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      className="
        bg-white
        rounded-2xl
        p-5 md:p-6
        shadow-md hover:shadow-xl
        transition duration-300
      "
    >
      {/* COUNT */}
      <h3 className="text-2xl md:text-4xl font-bold text-primary">
        {startCount && (
          <CountUp
            end={value}
            duration={2.5}
            separator=","
            decimals={value % 1 !== 0 ? 1 : 0}
          />
        )}
        {suffix}
      </h3>

      {/* LABEL */}
      <p className="text-gray-2 text-md md:text-lg font-medium mt-2">
        {label}
      </p>
    </motion.div>
  );
}