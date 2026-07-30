"use client";

import { motion } from "framer-motion";
import zoho4 from "@/public/Companies/zoho.png";
import Logo from "@/public/logo.png";
import { PiCheckCircleFill } from "react-icons/pi";
import { Link } from "lucide-react";
import zoho1 from "@/public/zoho/zoho book.jpeg";
import Image from "next/image";

const zoho = [
  {
    id: 1,
    src: zoho1,
    alt: "Zoho Books",
    title: "Zoho Books",
  },
];

export default function ZohoHero() {
  return (
    <section className="relative overflow-hidden py-28 px-6">
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Badge */}
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
            <span className="text-(--color-black-1) md:text-lg text-sm">
              In collaboration with{" "}
              <span className="font-bold text-(--color-primary)">ZOHO</span>
            </span>
          </div>

          {/* Heading */}
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

          {/* Description */}
          <p
            className="
              mt-8
              max-w-6xl mx-auto
              text-sm md:text-lg leading-relaxed
              text-(--color-gray-2)
            "
          >
            Industry-ready programs designed in collaboration with Zoho.
          </p>

          {/* Logos */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <img
              src={Logo.src}
              alt="Cornixe"
              className="object-contain h-28 w-28 md:h-62 md:w-62"
            />

            <Link className="h-10 w-10 md:h-12 md:w-12" />

            <img
              src={zoho4.src}
              alt="Zoho"
              className="object-contain h-28 w-28 md:h-62 md:w-62"
            />
          </div>

          {/* Stats */}
          <div
            className="
              mt-10
              flex flex-wrap
              items-center
              justify-center
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

          {/* Single Centered Card */}
          <div className="mt-16 flex justify-center">
            {zoho.map((item) => (
              <div
                key={item.id}
                className="
                  w-full
                  max-w-md
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-md
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  border
                  border-gray-100
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  group
                "
              >
                <div className="w-32 h-32 md:w-44 md:h-44 flex items-center justify-center">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={180}
                    height={180}
                    className="
                      object-contain
                      w-full
                      h-full
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}