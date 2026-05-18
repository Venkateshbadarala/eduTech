"use client";

import {
  Cpu,
  Briefcase,
  Sparkles,
  Crown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const packs = [
  {
    title: "TECH STARTER PACK",
    subtitle: "Perfect for future developers & tech enthusiasts",
    icon: <Cpu size={30} />,
    gradient: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/30",
    badge: "Most Popular",
    features: [
      "Web Development",
      "AI & Data Basics",
      "Live Projects",
      "Career Guidance",
    ],
  },

  {
    title: "MBA LITE PACK",
    subtitle: "Business, marketing & management essentials",
    icon: <Briefcase size={30} />,
    gradient: "from-violet-500 to-purple-600",
    glow: "shadow-purple-500/30",
    badge: "Trending",
    features: [
      "Digital Marketing",
      "Business Analytics",
      "Case Studies",
      "Industry Mentorship",
    ],
  },

  {
    title: "MAKE YOUR OWN PACK",
    subtitle: "Build a customized learning journey",
    icon: <Sparkles size={30} />,
    gradient: "from-pink-500 to-rose-500",
    glow: "shadow-pink-500/30",
    badge: "Custom",
    features: [
      "Choose Any Courses",
      "Flexible Duration",
      "Personal Mentor",
      "Custom Roadmap",
    ],
  },

  {
    title: "GOLDEN PASS",
    subtitle: "Unlimited access to premium programs",
    icon: <Crown size={30} />,
    gradient: "from-amber-400 to-yellow-500",
    glow: "shadow-yellow-500/30",
    badge: "Premium",
    features: [
      "Access All Courses",
      "Internship Support",
      "Exclusive Workshops",
      "Priority Placement Help",
    ],
  },
];

export default function ElitePacks() {
  return (
    <section className="relative py-24 overflow-hidden ">

      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-black text-sm font-semibold mb-5">
            ✨ Exclusive Learning Bundles
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            Explore Our{" "}
            <span className="text-secondary ">
              Elite Packs
            </span>
          </h2>

          <p className="max-w-4xl mx-auto text-gray-500 text-lg mt-6 leading-relaxed">
            Unlock premium learning experiences crafted for career growth,
            industry readiness, and future success.
          </p>
        </div>

        {/* PACKS GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {packs.map((pack, i) => (
            <div
              key={i}
              className={`
                relative group overflow-hidden
                rounded-3xl bg-white/80 backdrop-blur-xl
                border border-white/50
                shadow-xl ${pack.glow}
                hover:-translate-y-3
                transition-all duration-500
              `}
            >

              {/* TOP GLOW */}
              <div
                className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100 transition
                  
                  blur-3xl
                `}
              />

              {/* CONTENT */}
              <div className="relative z-10 p-7">

                {/* BADGE */}
                <div className="flex justify-between items-start mb-6">
                  <span
                    className={`
                      px-3 py-1 rounded-full text-xs font-bold text-white
                      bg-gradient-to-r ${pack.gradient}
                    `}
                  >
                    {pack.badge}
                  </span>

                  <div
                    className={`
                      w-14 h-14 rounded-2xl
                      flex items-center justify-center
                      text-white shadow-lg
                      bg-gradient-to-br ${pack.gradient}
                      group-hover:rotate-6 group-hover:scale-110
                      transition-all duration-300
                    `}
                  >
                    {pack.icon}
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-black text-gray-900 leading-snug">
                  {pack.title}
                </h3>

                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  {pack.subtitle}
                </p>

                {/* FEATURES */}
                <div className="mt-8 space-y-4">

                  {pack.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-cyan-500"
                      />

                      <span className="text-gray-700 text-sm font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* BUTTON */}
                <button
                  className={`
                    mt-10 w-full py-3 rounded-2xl
                    text-white font-semibold
                    bg-gradient-to-r ${pack.gradient}
                    hover:shadow-2xl
                    transition-all duration-300
                    flex items-center justify-center gap-2
                  `}
                >
                  select Pack
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* BORDER EFFECT */}
              <div className="absolute inset-0 rounded-3xl border border-white/20 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}