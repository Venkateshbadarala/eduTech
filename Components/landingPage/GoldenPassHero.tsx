"use client";

import { motion } from "framer-motion";

import {
  Crown,
  Sparkles,
  Download,
  ArrowRight,
  Star,
  ShieldCheck,
} from "lucide-react";

export default function GoldenPassHero() {

  const plans = [
    {
      title: "Tech Starter",
      courses: "12+ Courses",
      gradient:
        "from-(--color-primary) to-(--color-primary-light)",
    },

    {
      title: "MBA Lite",
      courses: "7+ Courses",
      gradient:
        "from-(--color-secondary) to-pink-400",
    },

    {
      title: "More Access",
      courses: "2+ Bonus Packs",
      gradient:
        "from-violet-500 to-(--color-primary-light)",
    },
  ];

  return (
    <section
      className="
        relative overflow-hidden
        py-12 md:py-20
        px-5 md:px-8
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
      <div
        className="
          absolute top-20 left-10
          w-72 h-72
          bg-(--color-primary)/20
          rounded-full blur-3xl
        "
      />

      <div
        className="
          absolute bottom-10 right-10
          w-72 h-72
          bg-(--color-secondary)/20
          rounded-full blur-3xl
        "
      />

      {/* 🔥 CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto">

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative overflow-hidden
            rounded-[38px]
            border border-white/10
            bg-white/10
            backdrop-blur-2xl
            shadow-[0_20px_80px_rgba(0,0,0,0.12)]
          "
        >

          {/* 🔥 TOP OVERLAY */}
          <div
            className="
              absolute inset-0
              bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent,rgba(255,255,255,0.03))]
            "
          />

          {/* 🔥 FLOAT CARD */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
              hidden lg:flex
              absolute top-10 right-1/4
              z-20
              items-center gap-4
              px-5 py-4
              rounded-2xl
              border border-white/10
              bg-white/10
              backdrop-blur-xl
              shadow-xl
            "
          >

            <div
              className="
                w-12 h-12
                rounded-2xl
                flex items-center justify-center
                bg-(--color-primary)/20
              "
            >
              <ShieldCheck
                className="text-(--color-primary)"
                size={24}
              />
            </div>

            <div>
              <h3 className="font-bold text-(--color-black-1)">
                Lifetime Premium
              </h3>

              <p className="text-sm text-(--color-gray-2)">
                20+ Programs Included
              </p>
            </div>
          </motion.div>

          {/* 🔥 CONTENT */}
          <div
            className="
              grid lg:grid-cols-[1fr_240px]
            "
          >

            {/* 🔥 LEFT */}
            <div
              className="
                relative z-10
                px-6 md:px-16
                py-10 md:py-6
              "
            >

              {/* 🔥 BADGE */}
              <div
                className="
                  inline-flex items-center gap-3
                  border border-white/10
                  bg-white/10 backdrop-blur-xl
                  rounded-full
                  px-5 py-3
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
                    text-sm font-medium
                    tracking-wide
                    text-(--color-black-1)
                  "
                >
                  PREMIUM MEMBERSHIP ACCESS
                </span>
              </div>

              {/* 🔥 TITLE */}
              <div className="mt-6">

                <h1
                  className="
                    text-5xl md:text-7xl
                    font-black
                    leading-[1]
                    tracking-tight
                    text-(--color-black-1)
                  "
                >
                  Learn Without
                  <br />

                  <span
                    className="
                      bg-gradient-to-r
                      from-(--color-primary)
                      
                      to-(--color-secondary)
                      text-transparent bg-clip-text
                    "
                  >
                    Any Limits
                  </span>
                </h1>

                {/* 🔥 SUBTITLE */}
                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-base md:text-lg
                    leading-relaxed
                    text-(--color-gray-2)
                  "
                >
                  Access premium tech, management,
                  analytics, AI, and career-focused
                  programs with one powerful
                  membership designed for students
                  and professionals.
                </p>
              </div>

              {/* 🔥 PLANS */}
              <div
                className="
                  mt-8
                  grid md:grid-cols-3
                  gap-5
                "
              >

                {plans.map((plan, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -6,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className={`
                      relative overflow-hidden
                      rounded-3xl
                      p-6
                      border border-white/10
                      bg-gradient-to-br ${plan.gradient}
                      shadow-[0_12px_40px_rgba(0,0,0,0.14)]
                    `}
                  >

                    {/* SHINE */}
                    <div
                      className="
                        absolute top-0 left-0
                        w-full h-full
                        bg-[linear-gradient(120deg,rgba(255,255,255,0.16),transparent)]
                      "
                    />

                    <div className="relative z-10">

                      <div
                        className="
                          w-12 h-12
                          rounded-2xl
                          bg-white/20
                          backdrop-blur-xl
                          flex items-center justify-center
                        "
                      >
                        <Sparkles
                          size={20}
                          className="text-white"
                        />
                      </div>

                      <h3
                        className="
                          mt-2
                          text-2xl
                          font-bold
                          text-white
                        "
                      >
                        {plan.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-white/90
                          font-medium
                        "
                      >
                        {plan.courses}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 🔥 INFO */}
              <div
                className="
                  mt-5
                  border-t border-white/10
                  pt-4
                "
              >

                <h2
                  className="
                    text-3xl md:text-4xl
                    font-bold
                    text-(--color-black-1)
                  "
                >
                  Unlock{" "}

                  <span
                    className="
                      bg-gradient-to-r
                      from-(--color-primary)
                      to-(--color-secondary)
                      text-transparent bg-clip-text
                    "
                  >
                    20+ Courses
                  </span>
                </h2>

                <p
                  className="
                    mt-4
                    max-w-2xl
                    leading-relaxed
                    text-(--color-gray-2)
                  "
                >
                  Get access to premium learning,
                  internships, certifications,
                  placement support, live sessions,
                  mentorship, and career guidance —
                  all in one ecosystem.
                </p>
              </div>

              {/* 🔥 BUTTONS */}
              <div
                className="
                  mt-12
                  flex flex-wrap items-center
                  gap-5
                "
              >

                {/* DOWNLOAD */}
                <button
                  className="
                    flex items-center gap-3
                    border border-white/10
                    bg-white/10
                    backdrop-blur-xl
                    hover:bg-white/20
                    text-(--color-black-1)
                    px-7 py-4
                    rounded-2xl
                    font-semibold
                    transition-all duration-300
                  "
                >
                  <Download size={20} />

                  Download Brochure
                </button>

                {/* JOIN */}
                <button
                  className="
                    group
                    relative overflow-hidden
                    flex items-center gap-3
                    px-9 py-4
                    rounded-2xl
                    font-semibold
                    text-white
                 bg-secondary
                    hover:scale-[1.03]
                    transition-all duration-300
                    shadow-[0_10px_35px_rgba(0,102,255,0.22)]
                  "
                >

                  <span className="relative z-10">
                    Join Golden Pass
                  </span>

                  <ArrowRight
                    size={20}
                    className="
                      relative z-10
                      group-hover:translate-x-1
                      transition
                    "
                  />

                  {/* HOVER */}
                  <div
                    className="
                      absolute inset-0
                      bg-white/10
                      opacity-0
                      group-hover:opacity-100
                      transition
                    "
                  />
                </button>
              </div>
            </div>

            {/* 🔥 RIGHT PANEL */}
            <div
              className="
                relative
                overflow-hidden
                bg-gradient-to-b
                from-(--color-primary)
               
                to-(--color-secondary)
                flex items-center justify-center
              "
            >

              {/* CUTS */}
              <div
                className="
                  absolute -left-6 top-0
                  w-12 h-12
                  bg-white/10
                  rounded-full
                "
              />

              <div
                className="
                  absolute -left-6 bottom-0
                  w-12 h-12
                  bg-white/10
                  rounded-full
                "
              />

              {/* STARS */}
              {[...Array(14)].map(
                (_, i) => (
                  <Star
                    key={i}
                    size={10}
                    className="
                      absolute text-white/40
                    "
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                  />
                )
              )}

              {/* TEXT */}
              <div
                className="
                  relative z-10
                  rotate-90
                "
              >

                <h2
                  className="
                    text-4xl md:text-5xl
                    font-black
                    tracking-[0.4em]
                    text-white
                    whitespace-nowrap
                  "
                >
                  LIFE - TIME
                </h2>

                <p
                  className="
                    mt-6
                    text-3xl
                    font-black
                    tracking-[0.35em]
                    text-white/90
                    whitespace-nowrap
                  "
                >
                  ACCESS
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}