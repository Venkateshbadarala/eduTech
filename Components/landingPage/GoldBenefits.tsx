"use client";

import { motion } from "framer-motion";

import {
  PiCertificateFill,
  PiTrophyFill,
  PiBriefcaseFill,
  PiLinkedinLogoFill,
  PiUsersThreeFill,
  PiFilesFill,
} from "react-icons/pi";

export default function GoldBenefits() {

  const benefits = [
    {
      icon: PiCertificateFill,
      title: "20+ Certificates",
      desc: "Industry-recognized certifications across premium programs.",
    },

    {
      icon: PiTrophyFill,
      title: "Letters Of Recommendation",
      desc: "Boost your profile with verified recommendation letters.",
    },

    {
      icon: PiBriefcaseFill,
      title: "Top Internship Opportunities",
      desc: "Get access to internships from leading companies and startups.",
    },

    {
      icon: PiLinkedinLogoFill,
      title: "LinkedIn & Resume Optimization",
      desc: "Professional branding support to improve hiring visibility.",
    },

    {
      icon: PiUsersThreeFill,
      title: "Mock Sessions & Aptitude Training",
      desc: "Prepare for interviews with assessments and live practice.",
    },

    {
      icon: PiFilesFill,
      title: "Premium Test Materials",
      desc: "Access exclusive aptitude and placement preparation content.",
    },
  ];

  return (
    <section
      className="
        relative overflow-hidden
        py-8 px-6
        bg-(--color-light)
      "
    >

      {/* 🔥 GRID */}
      <div
        className="
          absolute inset-0 opacity-30
          bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* 🔥 BLURS */}
      <div className="absolute top-20 left-20 w-52 h-52 bg-(--color-primary)/20 rounded-full blur-3xl" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-(--color-secondary)/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* 🔥 HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center"
        >

          {/* BADGE */}
          <div
            className="
              inline-flex items-center gap-3
              border border-white/10
              bg-white/10 backdrop-blur-xl
              rounded-full
              px-6 py-3
            "
          >

            <div
              className="
                w-2.5 h-2.5
                rounded-full
                bg-(--color-primary)
                animate-pulse
              "
            />

            <span
              className="
                tracking-wide
                text-(--color-black-1)
                font-medium
              "
            >
              GOLD BENEFITS
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-8
              text-4xl md:text-6xl
              font-black
              leading-tight
              text-(--color-black-1)
            "
          >
            Unlock Premium
            <br />

            <span
              className="
                bg-gradient-to-r
                from-(--color-primary)
               
                to-(--color-secondary)
                text-transparent bg-clip-text
              "
            >
              Career Advantages
            </span>
          </h2>

          {/* DESC */}
          <p
            className="
              mt-6
              max-w-3xl mx-auto
              text-(--color-gray-2)
              leading-relaxed
              text-lg
            "
          >
            Everything you need to stand out —
            certifications, internships, placement
            preparation, LinkedIn branding, and
            premium career resources in one
            ecosystem.
          </p>
        </motion.div>

        {/* 🔥 BENEFITS */}
        <div
          className="
            relative mt-20
            grid md:grid-cols-2
            rounded-[38px]
            overflow-hidden
            border border-white/10
            bg-white/10
            backdrop-blur-2xl
          "
        >

          {/* CENTER LINE */}
          <div
            className="
              hidden md:block
              absolute top-0 left-1/2
              w-px h-full
              bg-gradient-to-b
              from-transparent
              via-(--color-primary-light)
              to-transparent
              opacity-40
            "
          />

          {/* HORIZONTAL LINES */}
          <div
            className="
              hidden md:block
              absolute top-1/3 left-0
              w-full h-px
              bg-gradient-to-r
              from-transparent
              via-(--color-primary-light)
              to-transparent
              opacity-40
            "
          />

          <div
            className="
              hidden md:block
              absolute top-2/3 left-0
              w-full h-px
              bg-gradient-to-r
              from-transparent
              via-(--color-primary-light)
              to-transparent
              opacity-40
            "
          />

          {benefits.map((item, index) => {

            const Icon = item.icon;

            return (
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
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  relative group
                  px-8 py-14
                  text-center
                "
              >

                {/* HOVER */}
                <div
                  className="
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition duration-500
                    bg-gradient-to-br
                    from-(--color-primary)/5
                    to-(--color-secondary)/5
                  "
                />

                {/* ICON */}
                <div
                  className="
                    relative z-10
                    w-20 h-20
                    mx-auto
                    rounded-3xl
                    border border-white/10
                    bg-white/10
                    backdrop-blur-xl
                    flex items-center justify-center
                    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                  "
                >

                  <Icon
                    size={38}
                    className="text-(--color-primary)"
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    relative z-10
                    mt-8
                    text-2xl
                    font-bold
                    text-(--color-black-1)
                  "
                >
                  {item.title}
                </h3>

                {/* DESC */}
                <p
                  className="
                    relative z-10
                    mt-4
                    max-w-sm mx-auto
                    text-(--color-gray-2)
                    leading-relaxed
                  "
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}