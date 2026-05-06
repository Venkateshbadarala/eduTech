"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Briefcase,
  Smartphone,
  Wallet,
  Rocket,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Official Recognition",
    desc: "Get a verified ambassador certificate and recognition letter from our organization.",
  },
  {
    icon: Briefcase,
    title: "Flexible Remote Role",
    desc: "Manage ambassador activities alongside your academics with flexible schedules.",
  },
  {
    icon: Smartphone,
    title: "Personal Brand Growth",
    desc: "Build your online presence, leadership profile, and networking opportunities.",
  },
  {
    icon: Wallet,
    title: "Performance Rewards",
    desc: "Earn exciting incentives, bonuses, goodies, and exclusive ambassador perks.",
  },
  {
    icon: Award,
    title: "Professional Recommendation",
    desc: "Receive recommendation letters and career support for future opportunities.",
  },
  {
    icon: Rocket,
    title: "Career Opportunities",
    desc: "Unlock internship access, mentorship programs, and pre-placement opportunities.",
  },
];

export default function AmbassadorBenefits() {
  return (
    <div className="px-4 md:px-10 lg:px-20">
 <section
      className="
        relative overflow-hidden
        py-24 
        bg-gradient-to-br
        from-(--color-primary)
        to-(--color-black-1)
        rounded-3xl
      "
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />

      {/* 🔥 GRID PATTERN */}
      <div
        className="
          absolute inset-0 opacity-[0.05]
          bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* 🔥 HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative  text-center mb-20"
      >
        <div
          className="
            inline-flex items-center gap-2
            px-5 py-2 rounded-full
            bg-white/10 border border-white/10
            backdrop-blur-xl
            text-(--color-white)
            text-sm font-semibold tracking-wide
            mb-6
          "
        >
          ✨ Ambassador Benefits
        </div>

        <h2
          className="
            text-3xl md:text-6xl
            font-black
            text-(--color-white)
            leading-tight
          "
        >
          What You’ll
          <span className="block text-cyan-300">
            Gain From This Program
          </span>
        </h2>

        <p
          className="
            text-(--color-gray-1)
            mt-6
            md:text-lg
            text-md
            max-w-3xl
            mx-auto
            leading-relaxed
          "
        >
          Become a student leader, grow your professional network,
          unlock exclusive opportunities, and gain real-world experience
          while representing our brand on your campus.
        </p>
      </motion.div>

      {/* 🔥 BENEFITS GRID */}
      <div className="relative  grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:px-0">
        {benefits.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                group relative
                overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                md:p-8 p-4
                shadow-[0_10px_50px_rgba(0,0,0,0.25)]
                hover:border-primary/40
                transition-all duration-500
              "
            >
              {/* 🔥 CARD GLOW */}
              <div
                className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br
                  from-primary/10
                  to-secondary/5
                "
              />

              {/* 🔥 ICON */}
              <div
                className="
                  relative 
                  w-16 h-16
                  rounded-2xl
                  flex items-center justify-center
                  bg-gradient-to-br
                  from-primary/10
                  to-secondary/5
                  border border-white/10
                  shadow-lg
                  mb-6
                "
              >
                <Icon
                  size={30}
                  className="text-white"
                />
              </div>

              {/* 🔥 TITLE */}
              <h3
                className="
                  relative 
                  md:text-2xl
                  text-xl
                  font-bold
                  text-(--color-white)
                  leading-snug
                "
              >
                {item.title}
              </h3>

              {/* 🔥 DESC */}
              <p
                className="
                  relative 
                  mt-4
                  text-(--color-gray-1)
                  leading-relaxed
                  md:text-[16px]
                  text-[14px]
                "
              >
                {item.desc}
              </p>

              {/* 🔥 HOVER LINE */}
              <div
                className="
                  absolute bottom-0 left-0
                  h-1 w-0
                  bg-gradient-to-r
                  from-cyan-300
                  to-blue-400
                  group-hover:w-full
                  transition-all duration-500
                "
              />
            </motion.div>
          );
        })}
      </div>
    </section>
    </div>
   
  );
}