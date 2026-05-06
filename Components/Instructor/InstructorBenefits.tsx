"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Wallet,
  Globe,
  MonitorPlay,
  Users,
  Sparkles,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "High Earning Potential",
    desc: "Earn revenue through live classes, premium courses, mentorship programs, and workshops.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Teach students from across the world and build an international learning community.",
  },
  {
    icon: MonitorPlay,
    title: "Flexible Teaching",
    desc: "Conduct live or recorded sessions anytime based on your availability and comfort.",
  },
  {
    icon: Users,
    title: "Personal Brand Growth",
    desc: "Grow your online presence and become a recognized educator in your field.",
  },
  {
    icon: BookOpen,
    title: "Course Creation Tools",
    desc: "Access powerful tools to create engaging lessons, assignments, and quizzes.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship Opportunities",
    desc: "Guide students personally and help them achieve real career success.",
  },
  {
    icon: Sparkles,
    title: "Exclusive Community",
    desc: "Collaborate with industry experts and connect with top educators worldwide.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Instructor Badge",
    desc: "Get recognized with an official instructor profile and teaching certification.",
  },
];

export default function InstructorBenefits() {
  return (
    <section
      id="instructor-benefits"
      className="relative md:py-24 py-6 px-6 overflow-hidden"
    >
      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 " />

      {/* 🔥 BLUR */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-(--color-primary)/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-(--color-secondary)/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* 🔥 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p
            className="
              inline-block
              px-5 py-2
              rounded-full
              bg-(--color-primary-light)
              text-black-1
              font-semibold
              tracking-wide
              mb-5
            "
          >
            INSTRUCTOR BENEFITS
          </p>

          <h2
            className="
              text-4xl md:text-6xl
              font-black
              text-(--color-black-1)
              leading-tight
            "
          >
            Why Become an
            <span className="bg-gradient-to-r from-(--color-primary) to-(--color-secondary) text-transparent bg-clip-text">
              {" "}
              Instructor?
            </span>
          </h2>

          <p
            className="
              max-w-3xl
              mx-auto
              mt-6
              text-lg
              text-(--color-gray-2)
              leading-relaxed
            "
          >
            Share your knowledge, inspire learners worldwide, and
            grow your career with a modern teaching platform designed
            for passionate educators.
          </p>
        </motion.div>

        {/* 🔥 BENEFITS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {benefits.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  bg-white/80
                  backdrop-blur-2xl
                  border border-(--color-primary)/10
                  rounded-[30px]
                  p-7
                  shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                  hover:shadow-[0_20px_60px_rgba(0,102,255,0.12)]
                  transition-all duration-300
                "
              >
                {/* 🔥 ICON */}
                <div
                  className="
                    w-16 h-16
                    rounded-2xl
                    bg-gradient-to-r from-(--color-primary) to-(--color-secondary)
                    flex items-center justify-center
                    text-white
                    shadow-lg
                    mb-6
                    group-hover:scale-110
                    transition
                  "
                >
                  <Icon size={28} />
                </div>

                {/* 🔥 TITLE */}
                <h3
                  className="
                    text-xl
                    font-bold
                    text-(--color-black-1)
                    mb-4
                  "
                >
                  {item.title}
                </h3>

                {/* 🔥 DESC */}
                <p
                  className="
                    text-(--color-gray-2)
                    leading-relaxed
                  "
                >
                  {item.desc}
                </p>

                {/* 🔥 HOVER GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    bg-gradient-to-br
                    from-(--color-primary)/5
                    to-(--color-secondary)/5
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}