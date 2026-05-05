"use client";

import {
  UserCheck,
  BookOpen,
  Layers,
  Lightbulb,
  HeartHandshake,
  TrendingUp,
  Crown,
  Users,
} from "lucide-react";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Expert Mentorship",
    desc: "Learn from industry professionals with real-world insights and guidance.",
    icon: UserCheck,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Comprehensive Curriculum",
    desc: "Master in-demand skills with structured, career-focused content.",
    icon: BookOpen,
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Flexible Learning",
    desc: "Self-paced + live sessions tailored to your schedule.",
    icon: Layers,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Hands-On Projects",
    desc: "Build real-world projects and gain practical experience.",
    icon: Lightbulb,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Personalized Guidance",
    desc: "Get 1:1 support, feedback, and mentorship throughout.",
    icon: HeartHandshake,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Career Growth",
    desc: "Upskill and unlock new career opportunities with confidence.",
    icon: TrendingUp,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Premium Resources",
    desc: "Access curated materials, videos, and interactive learning.",
    icon: Crown,
    color: "from-orange-600 to-red-500",
  },
  {
    title: "Community Support",
    desc: "Collaborate, network, and grow with a strong learner community.",
    icon: Users,
    color: "from-fuchsia-500 to-pink-500",
  },
];

export default function WhyChooseSection() {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // 🌊 PARALLAX EFFECTS
  const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["60px", "-60px"]);

  // 🫧 Floating background
  const bubbleY1 = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const bubbleY2 = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]);

  return (
    <section
      ref={container}
      className="relative md:py-16 px-6 overflow-hidden py-4 
      "
    >
      {/* 🫧 PARALLAX BUBBLES */}
      <motion.div
        style={{ y: bubbleY1 }}
        className="absolute top-10 left-10 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: bubbleY2 }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"
      />

      {/* 🔥 HEADER (PARALLAX) */}
      <motion.div
        style={{ y: headingY }}
        className="text-center  max-w-3xl mx-auto relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text uppercase">
          cornixe
          </span>
          ?
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          We provide everything you need to succeed in your learning journey —
          from mentorship to real-world experience.
        </p>
      </motion.div>

      {/* 🔥 GRID */}
      <motion.div
        style={{ y: cardsY }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10"
      >
        {features.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateX: 5,
                rotateY: -5,
              }}
              className="
                group relative
                bg-white backdrop-blur-xl
                border border-white
                rounded-2xl p-6
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]
                transition-all duration-300
              "
            >
              {/* 🔥 ICON */}
              <div
                className={`
                  w-14 h-14 flex items-center justify-center
                  rounded-xl mb-4
                  bg-gradient-to-r ${item.color}
                  text-white shadow-md
                  group-hover:scale-110 transition
                `}
              >
                <Icon size={24} />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>

              {/* ✨ HOVER GLOW */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/5 to-purple-500/5 transition" />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}