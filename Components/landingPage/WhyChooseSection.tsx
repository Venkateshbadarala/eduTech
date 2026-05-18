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
    title: "Strategic Industry Mentorship",
    desc: "Guidance from experienced professionals focused on practical learning and career direction.",
    icon: UserCheck,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Professionally Curated Learning Framework",
    desc: "Structured learning designed to align with modern industry expectations and evolving skill demands.",
    icon: BookOpen,
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Adaptive Learning Experience",
    desc: "A flexible learning environment built to support individual pace, accessibility, and growth.",
    icon: Layers,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Experiential Execution Modules",
    desc: "Practical exposure designed to strengthen real-world application and execution capability.",
    icon: Lightbulb,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Individualized Career Direction",
    desc: "Personalized support focused on helping learners progress with clarity and confidence.",
    icon: HeartHandshake,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Professional Advancement Pathways",
    desc: "Career-focused development designed to accelerate long-term professional growth.",
    icon: TrendingUp,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Elite Learning Assets",
    desc: "Access to high-value resources crafted to enhance learning quality and professional readiness.",
    icon: Crown,
    color: "from-orange-600 to-red-500",
  },
  {
    title: "Collaborative Growth Network",
    desc: "A supportive ecosystem that encourages learning, connection, and collective professional development.",
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
        className="text-center  max-w-6xl  mx-auto relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Why Learners Trust{" "}
          <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text uppercase">
            cornixe
          </span>
          ?
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          CORNIXE delivers an integrated career-focused ecosystem combining
          industry-led training, experiential internships, and strategic
          placement assistance designed to cultivate real professional
          capability. Through expert-driven guidance and practical exposure, we
          help individuals progress with greater clarity, confidence, and
          direction toward their evolving career aspirations.
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
