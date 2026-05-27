"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Play,
  Megaphone,
  Users,
  GraduationCap,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";

import CampusImage from "@/public/AboutImage.png";

const responsibilities = [
  {
    icon: <Megaphone size={22} />,
    title: "Brand Promotion",
    desc: "Promote the CORNIXE brand among students and campus communities.",
  },

  {
    icon: <CalendarDays size={22} />,
    title: "Campus Events",
    desc: "Organize and support workshops, seminars, and college activities.",
  },

  {
    icon: <GraduationCap size={22} />,
    title: "Program Awareness",
    desc: "Create awareness about programs, internships, and certifications.",
  },

  {
    icon: <Users size={22} />,
    title: "Community Engagement",
    desc: "Drive student registrations and increase engagement on campus.",
  },

  {
    icon: <BadgeCheck size={22} />,
    title: "Company Representation",
    desc: "Represent the company professionally on campus and social media.",
  },
];

export default function CampusAmbassadorSection() {
  return (
    <section
      className="
        relative overflow-hidden
        w-full
        py-14 md:py-24
        px-6 md:px-12 lg:px-20
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
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            {/* HEADING */}
            <div className="flex items-start gap-5">
              <div
                className="
                  w-2 md:w-3
                  h-28 md:h-36
                  rounded-full
                  bg-gradient-to-b
                  from-primary
                  to-secondary
                  mt-2
                "
              />

              <div>
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.1,
                  }}
                  className="
                    text-sm uppercase
                    tracking-[0.3em]
                    text-primary
                    font-bold
                  "
                >
                  Student Leadership Program
                </motion.p>

                <h2
                  className="
                    mt-4
                    text-4xl md:text-6xl
                    font-black
                    text-black-1
                    leading-tight
                    tracking-tight
                  "
                >
                  What is a Campus
                  <br />

                  <span
                    className="
                      bg-gradient-to-r
                      from-primary
                      to-secondary
                      text-transparent bg-clip-text
                    "
                  >
                    Ambassador?
                  </span>
                </h2>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              className="
                mt-10
                text-gray-2
                text-lg md:text-xl
                leading-[2rem]
                max-w-2xl
              "
            >
              A Campus Ambassador is a student representative who promotes
              company programs, events, internships, workshops, and learning
              opportunities inside their college or university while building
              leadership, networking, and communication skills.
            </motion.p>

            {/* FEATURES */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              className="
                flex flex-wrap
                gap-4
                mt-10
              "
            >
              {[
                "Leadership Skills",
                "Networking",
                "Internship Access",
                "Community Building",
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    px-5 py-3
                    rounded-2xl

                    border border-white/10
                    bg-white/10
                    backdrop-blur-xl

                    text-black-1
                    font-semibold

                    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                  "
                >
                  {item}
                </div>
              ))}
            </motion.div>

           
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            {/* MAIN CARD */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="
                relative
                rounded-[2.5rem]
                overflow-hidden

                border border-white/20
                bg-white/10
                backdrop-blur-2xl

                shadow-[0_25px_100px_rgba(0,0,0,0.18)]
              "
            >
              <Image
                src={CampusImage}
                alt="Campus Ambassador"
                className="
                  w-full h-auto
                  object-cover
                "
                priority
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-transparent
                  to-transparent
                "
              />

              {/* PLAY BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  absolute inset-0
                  flex items-center justify-center
                "
              >
                <div
                  className="
                    relative
                    w-28 h-28
                    rounded-full

                    bg-white

                    shadow-[0_20px_60px_rgba(0,0,0,0.25)]

                    flex items-center justify-center
                  "
                >
                  <div
                    className="
                      absolute inset-0
                      rounded-full
                      animate-ping
                      bg-primary/30
                    "
                  />

                  <Play
                    className="
                      relative z-10
                      text-primary
                      fill-primary
                      ml-1
                    "
                    size={42}
                  />
                </div>
              </motion.button>
            </motion.div>

            {/* FLOATING CARD 1 */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="
                absolute -top-6 -left-6

                rounded-3xl
                border border-white/10
                bg-white/10
                backdrop-blur-2xl

                px-6 py-5

                shadow-[0_15px_50px_rgba(0,0,0,0.12)]
              "
            >
              <p className="text-sm text-gray-2">
                Campus Leaders
              </p>

              <h4
                className="
                  mt-1
                  text-3xl
                  font-black
                  text-black-1
                "
              >
                500+
              </h4>
            </motion.div>

            {/* FLOATING CARD 2 */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="
                absolute -bottom-6 -right-6

                rounded-3xl
                border border-white/10
                bg-white/10
                backdrop-blur-2xl

                px-6 py-5

                shadow-[0_15px_50px_rgba(0,0,0,0.12)]
              "
            >
              <p className="text-sm text-gray-2">
                Student Reach
              </p>

              <h4
                className="
                  mt-1
                  text-3xl
                  font-black
                  text-black-1
                "
              >
                50K+
              </h4>
            </motion.div>
          </motion.div>
        </div>
         {/* RESPONSIBILITIES */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              className="mt-14"
            >
              <h3
                className="
                  text-2xl md:text-3xl pt-6
                  font-black
                  text-black-1
                "
              >
                Key Responsibilities
              </h3>

              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                {responsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -6,
                    }}
                    className="
                      group
                      relative overflow-hidden

                      rounded-3xl
                      border border-white/10
                      bg-white/10
                      backdrop-blur-2xl

                      p-5

                      shadow-[0_15px_50px_rgba(0,0,0,0.08)]

                      transition-all duration-500
                    "
                  >
                    {/* HOVER GRADIENT */}
                    <div
                      className="
                        absolute inset-0
                        opacity-0
                        group-hover:opacity-100
                        transition duration-500

                        bg-gradient-to-br
                        from-primary/10
                        via-transparent
                        to-secondary/10
                      "
                    />

                    <div className="relative z-10">
                      <div
                        className="
                          w-14 h-14
                          rounded-2xl

                          bg-gradient-to-r
                          from-primary
                          to-secondary

                          flex items-center justify-center

                          text-white
                          shadow-lg
                        "
                      >
                        {item.icon}
                      </div>

                      <h4
                        className="
                          mt-5
                          text-lg
                          font-bold
                          text-black-1
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                          mt-3
                          text-sm
                          leading-relaxed
                          text-gray-2
                        "
                      >
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
      </div>
    </section>
  );
}