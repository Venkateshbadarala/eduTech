"use client";

import { motion } from "framer-motion";
import  zoho from "@/public/Companies/zoho.png";

import { PiCheckCircleFill } from "react-icons/pi";

export default function ZohoHero() {
  return (
    <section
      className="
        relative overflow-hidden
        py-28 px-6
      "
    >

      {/* GRID */}
      <div
        className="
          absolute inset-0 opacity-30
          bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* BLURS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-(--color-primary)/20 rounded-full blur-3xl" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-(--color-secondary)/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >

          {/* BADGE */}
          <div
            className="
              inline-flex items-center gap-4
              md:px-8 md:py-4 py-2 px-4
              rounded-full

              border border-white/10
              bg-white/10
              backdrop-blur-xl

              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            "
          >

            <img
              src={zoho.src}
              alt="Zoho"
             
              className="object-contain h-12 w-12 md:h-32 md:w-32" 
            />

            

            <span className="text-(--color-black-1) md:text-lg text-sm">
              In collaboration with{" "}

              <span className="font-bold text-(--color-primary)">
                ZOHO
              </span>
            </span>
          </div>

          {/* TITLE */}
          <h1
            className="
              mt-10
              text-3xl md:text-5xl
              font-black
              leading-tight
              text-(--color-black-1)
            "
          >
            Upskill with{" "}

            <span
              className="
                bg-gradient-to-r
                from-(--color-primary)
                to-(--color-secondary)
                text-transparent bg-clip-text
              "
            >
              Zoho Certified
            </span>{" "}

            Programs
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              max-w-4xl mx-auto
              text-sm md:text-xl leading-relaxed
              text-(--color-gray-2)
            "
          >
            Industry-ready programs designed in
            collaboration with Zoho. Learn CRM,
            automation, analytics, cloud solutions,
            and business workflows through
            real-world projects and practical
            implementation.
          </p>

          {/* STATS */}
          <div
            className="
              mt-10
              flex flex-wrap items-center justify-center
              gap-8
              text-(--color-gray-1)
            "
          >

            <div className="flex items-center gap-2 text-black-1">
              <PiCheckCircleFill className="text-(--color-primary)" />

              18+ Courses
            </div>

            <div className="flex items-center gap-2 text-black-1">
              <PiCheckCircleFill className="text-(--color-primary)" />

              Zoho Certified
            </div>

            <div className="flex items-center gap-2 text-black-1">
              <PiCheckCircleFill className="text-(--color-primary)" />

              25k+ Learners
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}