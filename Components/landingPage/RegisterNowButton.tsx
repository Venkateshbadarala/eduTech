"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
  PiArrowRightBold,
  PiCertificateBold,
  PiBriefcaseBold,
  PiUsersThreeBold,
} from "react-icons/pi";

import zoho from "@/public/Companies/zoho.png";
import InpatPortal from "./InpatPortal";

const stats = [
  {
    icon: <PiCertificateBold size={24} />,
    value: 15,
    suffix: "+",
    label: "Zoho Certified Programs",
  },

  {
    icon: <PiBriefcaseBold size={24} />,
    value: 50,
    suffix: "+",
    label: "Industry Projects",
  },

  {
    icon: <PiUsersThreeBold size={24} />,
    value: 10000,
    suffix: "+",
    label: "Learners Empowered",
  },
];

export default function RegisterNowSection() {
  const [openPortal, setOpenPortal] = useState(false);

  return (
    <>
      <section className="relative  lg:py-20 pb-20 px-6">
        {/* BLURS */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div
            className="
              relative overflow-hidden

              rounded-[40px]
bg-white/50

              border border-primary/10

              p-8 md:p-14

              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
            "
          >
            {/* BACKGROUND GRADIENT */}
            <div
              className="
                absolute inset-0

               
              "
            />

            <div className="relative z-10 text-center">
              {/* BADGE */}
              <div
                className="
                  inline-flex items-center gap-2

                  px-5 py-2
                  rounded-full

                  bg-gradient-to-r
                  from-primary
                  to-secondary

                  text-white
                  text-sm
                  font-semibold

                  shadow-lg
                "
              >
                🚀 Zoho Registration Open
              </div>

              {/* HEADING */}
              <h2
                className="
                   mt-4
              text-3xl md:text-5xl
              font-black
              leading-tight
              text-black-1
                "
              >
                Authorised{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-primary
                    to-secondary
                    bg-clip-text
                    text-transparent
                  "
                >
                  Training Centre
                </span>{" "}
                by Zoho 
              </h2>

              {/* TAGLINE */}
              <p
                className="
                    text-gray-2 mt-5 max-w-6xl mx-auto text-md md:text-lg leading-relaxed relative
                "
              >
                Learn through industry-focused Zoho programs
                covering CRM, Creator, Analytics, Books,
                Desk, and enterprise business solutions.
                Gain practical experience, work on real-world
                projects, and earn recognized certifications
                to accelerate your professional growth.
              </p>

              {/* ZOHO LOGO */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="mt-10 flex justify-center"
              >
                <img
                  src={zoho.src}
                  alt="Zoho"
                  className="
                    object-contain
                    h-24 md:h-32
                    w-auto
                    mix-blend-multiply
                  "
                />
              </motion.div>

              
              {/* CTA BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => setOpenPortal(true)}
                className="
                  group

                  mt-12

                  inline-flex
                  items-center gap-3

                  px-10 py-4
                  rounded-2xl

                  bg-gradient-to-r
                  from-primary
                  to-secondary

                  text-white
                  font-semibold

                  shadow-[0_15px_50px_rgba(0,0,0,0.15)]
                "
              >
                Enroll In Zoho Certification

                <PiArrowRightBold
                  size={18}
                  className="
                    group-hover:translate-x-1
                    transition
                  "
                />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      <InpatPortal
        isOpen={openPortal}
        onClose={() => setOpenPortal(false)}
      />
    </>
  );
}