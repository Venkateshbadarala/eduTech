"use client";

import { motion } from "framer-motion";

import {
  Briefcase,
  User,
  BookOpen,
} from "lucide-react";

const services = [
  {
    title: "Training",

    description:
      "Professionally guided learning designed to bridge emerging talent with real industry expectations and execution standards.",

    icon: (
      <BookOpen
        size={28}
        className="text-white"
      />
    ),
  },

  {
    title: "Internship",

    description:
      "Gain practical exposure through experience-driven internship opportunities aligned with real-time industry workflow. Designed to enhance execution skills, adaptability, and workplace confidence.",

    icon: (
      <Briefcase
        size={28}
        className="text-white"
      />
    ),
  },

  {
    title: "Placement Support",

    description:
      "Comprehensive placement assistance focused on strengthening employability and career positioning. Helping individuals navigate opportunities with preparation and professional direction.",

    icon: (
      <User
        size={28}
        className="text-white"
      />
    ),
  },
];

export default function Services() {
  return (
    <section
      className="
        relative
        px-6
        py-16 md:py-24
        overflow-hidden
      "
    >
      {/* BLUR EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 🔥 HEADING */}
        <div className="text-center max-w-6xl">
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
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="
             text-sm tracking-widest text-white font-semibold bg-gradient-to-r from-primary to-secondary inline-block px-6 py-1 rounded-full shadow-lg
            "
          >
            Empowering Careers
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-4
              text-3xl md:text-5xl
              font-black
              leading-tight
              text-black-1
            "
          >
            Our{" "}

            <span
              className="
                bg-gradient-to-r
                from-primary
                to-secondary
                text-transparent
                bg-clip-text
              "
            >
              Services
            </span>
          </motion.h2>

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
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="
             text-gray-500 mt-5 max-w-6xl mx-auto text-md md:text-lg leading-relaxed relative
            "
          >
            Delivering industry-focused
            learning, practical exposure, and
            career-oriented opportunities
            designed to help students build
            skills, gain experience, and grow
            with confidence in the professional
            world.
          </motion.p>
        </div>

        {/* 🔥 CARDS */}
        <div
          className="
            mt-16
            grid md:grid-cols-3
            gap-8
          "
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                group
                relative
                overflow-hidden

                rounded-[30px]

                border border-black/5
                bg-white

                p-8

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
                  from-primary/5
                  via-transparent
                  to-secondary/5
                "
              />

              {/* ICON */}
              <div
                className="
                  relative z-10

                  w-16 h-16
                  rounded-2xl

                  bg-gradient-to-r
                  from-primary
                  to-secondary

                  flex items-center justify-center

                  shadow-lg
                "
              >
                {service.icon}
              </div>

              {/* TITLE */}
              <h3
                className="
                  relative z-10

                  mt-8
                  text-2xl
                  font-bold
                  text-black-1
                "
              >
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  relative z-10

                  mt-5
                  text-gray-2
                  leading-relaxed
                  text-base
                "
              >
                {service.description}
              </p>

              {/* BOTTOM LINE */}
              <div
                className="
                  relative z-10

                  mt-8
                  w-16 h-1
                  rounded-full

                  bg-gradient-to-r
                  from-primary
                  to-secondary
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}