"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Users,
  BookOpen,
  BadgeCheck,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import InstructorForm from "../Form/InstructorForm";
import { useState } from "react";

export default function InstructorHero() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <section className="relative overflow-hidden py-28 px-6">
      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 " />

      {/* 🔥 GRID */}
      <div
        className="
          absolute inset-0 opacity-20
          bg-[linear-gradient(rgba(0,102,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.08)_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* 🔥 BLUR EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-(--color-primary)/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[150px] right-[-120px] w-[400px] h-[400px] bg-(--color-secondary)/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* 🔥 BADGE */}
          <div
            className="
              inline-flex items-center gap-3
              bg-white/80 backdrop-blur-xl
              border border-(--color-primary)/10
              px-5 py-3 rounded-full
              shadow-md mb-8
            "
          >
            <div className="w-3 h-3 rounded-full bg-(--color-primary) animate-pulse" />

            <span className="text-sm tracking-wide text-(--color-black-1) font-medium">
              JOIN OUR GLOBAL TEACHING NETWORK
            </span>
          </div>

          {/* 🔥 TITLE */}
          <h1
            className="
              text-5xl md:text-7xl
              font-black
              leading-[1.05]
              text-(--color-black-1)
            "
          >
            Teach.
            <br />
            <span className="bg-gradient-to-r from-(--color-primary) to-(--color-secondary) text-transparent bg-clip-text">
              Inspire.
            </span>
            <br />
            Lead the Future.
          </h1>

          {/* 🔥 DESCRIPTION */}
          <p
            className="
              mt-8
              text-lg md:text-xl
              leading-relaxed
              text-(--color-gray-2)
              max-w-2xl
            "
          >
            Empower thousands of learners through engaging online classes,
            mentorship sessions, and practical learning experiences. Build your
            authority, grow your audience, and make a real impact.
          </p>

          {/* 🔥 BUTTONS */}
          <div className="flex flex-wrap gap-5 mt-10">
            <button
              type="button"
              onClick={() => setOpenForm(true)}
              className="
                group
                px-8 py-4
                rounded-2xl
                bg-gradient-to-r from-(--color-primary) to-(--color-secondary)
                text-(--color-white)
                font-semibold
                shadow-[0_15px_40px_rgba(0,102,255,0.25)]
                hover:scale-105
                transition-all duration-300
              "
            >
              <span className="flex items-center gap-3">
                Start Teaching
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </span>
            </button>
            <InstructorForm
              isOpen={openForm}
              onClose={() => setOpenForm(false)}
            />

            <button
              onClick={() => {
                document.getElementById("instructor-benefits")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="
                px-8 py-4
                rounded-2xl
                bg-white/80 backdrop-blur-xl
                border border-(--color-primary)/10
                text-(--color-black-1)
                font-semibold
                hover:border-(--color-primary)
                hover:shadow-lg
                transition-all duration-300
              "
            >
              Explore Instructor Benefits
            </button>
          </div>

          {/* 🔥 FEATURES */}
          <div className="grid sm:grid-cols-2 gap-4 mt-12">
            {[
              "Flexible teaching hours",
              "Global student reach",
              "Live & recorded sessions",
              "Instructor certification",
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex items-center gap-3
                  bg-white/70
                  backdrop-blur-xl
                  border border-(--color-primary)/10
                  rounded-2xl
                  px-5 py-4
                  shadow-sm
                "
              >
                <BadgeCheck className="text-(--color-primary)" size={20} />

                <span className="text-(--color-black-1) font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* 🔥 MAIN CARD */}
          <div
            className="
              relative
              bg-white/70 backdrop-blur-2xl
              border border-white/50
              rounded-[40px]
              md:p-8 p-4
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
            "
          >
            {/* 🔥 TOP BAR */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-(--color-primary) to-(--color-secondary) flex items-center justify-center text-white">
                  <GraduationCap size={28} />
                </div>

                <div>
                  <h3 className="font-bold text-xl text-(--color-black-1)">
                    Instructor Dashboard
                  </h3>

                  <p className="text-(--color-gray-2)">
                    Live Teaching Analytics
                  </p>
                </div>
              </div>

              <div className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Active
              </div>
            </div>

            {/* 🔥 STATS */}
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  icon: Users,
                  title: "12K+",
                  subtitle: "Students",
                },
                {
                  icon: BookOpen,
                  title: "120+",
                  subtitle: "Courses",
                },
                {
                  icon: PlayCircle,
                  title: "950+",
                  subtitle: "Live Sessions",
                },
                {
                  icon: Sparkles,
                  title: "4.8/5",
                  subtitle: "Instructor Rating",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    className="
                      bg-white/80
                      border border-(--color-primary)/10
                      rounded-3xl
                      md:p-6 p-4
                      shadow-sm
                    "
                  >
                    <div className="w-12 h-12 rounded-2xl bg-(--color-primary) flex items-center justify-center mb-4">
                      <Icon className="text-white" size={24} />
                    </div>

                    <h4 className="text-2xl md:text-3xl font-black text-(--color-black-1)">
                      {item.title}
                    </h4>

                    <p className="text-(--color-gray-2) mt-1">
                      {item.subtitle}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 🔥 FLOATING CARD */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="
              absolute -top-8 -right-8
              bg-white
              rounded-3xl
              p-5
              shadow-2xl
              border border-(--color-primary)/10
              hidden md:block
            "
          >
            <p className="text-(--color-gray-2) text-sm">Monthly Earnings</p>

            <h3 className="text-3xl font-black text-(--color-primary)">
              ₹85K+
            </h3>
          </motion.div>

          {/* 🔥 FLOATING CARD 2 */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="
              absolute -bottom-10 -left-10
              bg-white
              rounded-3xl
              px-6 py-5
              shadow-2xl
              border border-(--color-primary)/10
              hidden md:flex
              items-center gap-4
            "
          >
            <div className="w-14 h-14 rounded-2xl bg-(--color-secondary)/10 flex items-center justify-center">
              <Users className="text-(--color-secondary)" />
            </div>

            <div>
              <h4 className="font-bold text-(--color-black-1)">New Students</h4>

              <p className="text-(--color-gray-2)">+2,450 enrolled this week</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
