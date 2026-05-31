"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  PiUsersThreeBold,
  PiVideoCameraBold,
  PiCertificateBold,
  PiBriefcaseBold,
  PiChatCircleDotsBold,
  PiChalkboardTeacherBold,
} from "react-icons/pi";

const stats = [
  {
    icon: <PiUsersThreeBold size={22} />,
    title: "Completion Rate",
    value: "91%",
  },

  {
    icon: <PiVideoCameraBold size={22} />,
    title: "Live Engagement",
    value: "95%",
  },

  {
    icon: <PiBriefcaseBold size={22} />,
    title: "Student Satisfaction",
    value: "93%",
  },
];

const features = [
  {
    title: "LIVE Interactive Sessions",

    description:
      "Join immersive LIVE interactive sessions where learning meets real-world execution with mentors and industry experts.",

    icon: <PiVideoCameraBold size={22} />,

    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1200&auto=format&fit=crop",

    direction: "left",
  },

  {
    title: "Expert Industry Mentors",

    description:
      "Learn directly from experienced mentors from top companies with practical guidance, career advice, and mentorship.",

    icon: <PiChalkboardTeacherBold size={22} />,

    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",

    direction: "right",
  },

  {
    title: "Industry Ratified Certifications",

    description:
      "Boost your career prospects with industry-recognized certifications valued by recruiters and companies.",

    icon: <PiCertificateBold size={22} />,

    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",

    direction: "left",
  },

  {
    title: "Portfolio Worthy Projects",

    description:
      "Build real-world projects that showcase your practical expertise and strengthen your professional portfolio.",

    icon: <PiBriefcaseBold size={22} />,

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",

    direction: "right",
  },

  {
    title: "Active Community",

    description:
      "Become part of a thriving student community with networking, collaboration, events, and continuous support.",

    icon: <PiChatCircleDotsBold size={22} />,

    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",

    direction: "left",
  },
];

export default function GoldenPassBenefits() {
  return (
    <section
      className="
        relative overflow-hidden
        py-24 px-6
        
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
      <div className="absolute top-20 left-20 w-72 h-72 bg-(--color-primary)/20 rounded-full blur-3xl" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-(--color-secondary)/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center">

          <h2
            className="
              text-4xl md:text-6xl
              font-black
              text-(--color-black-1)
              leading-tight
            "
          >
            How{" "}

            <span
              className="
                bg-gradient-to-r
                from-(--color-primary)
                to-(--color-secondary)
                text-transparent bg-clip-text
              "
            >
              Golden Pass
            </span>{" "}

            Has Impacted Learners
          </h2>

          <p
            className="
              mt-5
              text-lg
              text-(--color-gray-2)
              max-w-3xl mx-auto
            "
          >
            Experience mentorship, certifications,
            projects, and interactive learning
            designed for real career growth.
          </p>
        </div>

        {/* STATS */}
        <div
          className="
            mt-14
            grid md:grid-cols-3
            gap-6
          "
        >

          {stats.map((item, i) => (
            <motion.div
              key={i}
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
                delay: i * 0.1,
              }}
              className="
                relative overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white
                shadow-[0_15px_60px_rgba(0,0,0,0.15)]
                backdrop-blur-2xl
                p-8
                text-center
                hover:-translate-y-2
                transition-all duration-500
              "
            >

              {/* TOP GLOW */}
              <div
                className="
                  absolute inset-0
                  bg-white
                  shadow-[0_15px_60px_rgba(0,0,0,0.15)]
                "
              />

              <div className="relative z-10">

                <div
                  className="
                    mx-auto
                    w-16 h-16
                    rounded-2xl
                    bg-gradient-to-r
                    from-(--color-primary)
                    to-(--color-secondary)
                    flex items-center justify-center
                    text-white
                    shadow-xl
                  "
                >
                  {item.icon}
                </div>

                <h3
                  className="
                    mt-6
                    text-lg
                    font-semibold
                    text-(--color-black-1)
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-4xl
                    font-black
                    bg-gradient-to-r
                    from-(--color-primary)
                    to-(--color-secondary)
                    text-transparent bg-clip-text
                  "
                >
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECOND HEADING */}
        <div className="text-center mt-28">

          <h2
            className="
              text-4xl md:text-5xl
              font-black
              text-(--color-black-1)
            "
          >
            Uncover What Our{" "}

            <span
              className="
                bg-gradient-to-r
                from-(--color-primary)
                to-(--color-secondary)
                text-transparent bg-clip-text
              "
            >
              Golden Pass
            </span>{" "}

            Offers
          </h2>
        </div>

        {/* FEATURES */}
        <div className="mt-20 space-y-10">

          {features.map((feature, index) => {

            const reverse =
              feature.direction === "right";

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: reverse ? 80 : -80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                className={`
                  group
                  relative overflow-hidden
                  rounded-[36px]
                  border border-white/10
                  bg-white/10
                  backdrop-blur-2xl
                  min-h-[350px]
                  grid lg:grid-cols-2
                  items-center
                `}
              >

                {/* BACKGROUND */}
                <div
                  className="
                    absolute inset-0
                    bg-white
                    shadow-[0_15px_60px_rgba(0,0,0,0.15)]
                  "
                />

                {/* IMAGE SECTION */}
                <div
                  className={`
                    relative h-full min-h-[320px]
                    overflow-hidden
                    ${
                      reverse
                        ? "lg:order-2"
                        : ""
                    }
                  `}
                >

                  {/* BIG IMAGE */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="
                      absolute inset-0
                    "
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                   
                      className="
                        object-cover
                      "
                    />
                  </motion.div>

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-r
                      from-black/40
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* FLOAT CARD */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                    }}
                    className="
                      absolute bottom-6 left-6
                      px-5 py-4
                      rounded-2xl
                      bg-white/10
                      backdrop-blur-2xl
                      border border-white/10
                    "
                  >
                    <div
                      className="
                        flex items-center gap-3
                      "
                    >

                      <div
                        className="
                          w-12 h-12
                          rounded-xl
                          bg-gradient-to-r
                          from-(--color-primary)
                          to-(--color-secondary)
                          flex items-center justify-center
                          text-white
                        "
                      >
                        {feature.icon}
                      </div>

                      <div>
                        <h4
                          className="
                            text-white
                            font-bold
                          "
                        >
                          Premium Feature
                        </h4>

                        <p
                          className="
                            text-white/70
                            text-sm
                          "
                        >
                          Exclusive access
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* CONTENT */}
                <div
                  className={`
                    relative z-10
                    p-10 md:p-14
                    ${
                      reverse
                        ? "lg:order-1"
                        : ""
                    }
                  `}
                >

                  {/* ICON */}
                  <div
                    className="
                      w-16 h-16
                      rounded-2xl
                      bg-gradient-to-r
                      from-(--color-primary)
                      to-(--color-secondary)
                      flex items-center justify-center
                      text-white
                      shadow-2xl
                    "
                  >
                    {feature.icon}
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-8
                      text-3xl md:text-4xl
                      font-black
                      text-(--color-black-1)
                      leading-tight
                    "
                  >
                    {feature.title}
                  </h3>

                  {/* DESC */}
                  <p
                    className="
                      mt-6
                      text-lg
                      leading-relaxed
                      text-(--color-gray-2)
                    "
                  >
                    {feature.description}
                  </p>

                  {/* TAGS */}
                  <div
                    className="
                      mt-8
                      flex flex-wrap gap-3
                    "
                  >

                    {[
                      "Career Growth",
                      "Mentorship",
                      "Hands-On",
                    ].map((tag, i) => (
                      <div
                        key={i}
                        className="
                          px-4 py-2
                          rounded-full
                          bg-white/10
                          border border-white/10
                          text-sm font-medium
                          text-(--color-black-1)
                          backdrop-blur-xl
                        "
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}