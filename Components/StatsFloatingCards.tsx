"use client";

import { useEffect, useState } from "react";
import { Users, Briefcase, TrendingUp, Video } from "lucide-react";
import { motion } from "framer-motion";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  sub?: string;
  icon: React.ReactNode;
  color: string;
};

function CountUp({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}</>;
}

export default function StatsFloatingCards() {
  const stats: Stat[] = [
    {
      value: 15000,
      suffix: "+",
      label: "Students",
      sub: "Learning with us",
      icon: <Users size={20} />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      value: 250,
      suffix: "+",
      label: "Employees",
      sub: "Industry mentors",
      icon: <Briefcase size={20} />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      value: 92,
      suffix: "%",
      label: "Placement Rate",
      sub: "Career success",
      icon: <TrendingUp size={20} />,
      color: "from-green-500 to-emerald-500",
    },
    {
      value: 48,
      suffix: " Hrs",
      label: "Live Classes",
      sub: "Interactive sessions",
      icon: <Video size={20} />,
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section className="relative py-16 px-6 overflow-hidden">
      
      {/* 🌊 BACKGROUND (OCEAN STYLE) */}
      <div className="absolute inset-0 " />

      

      {/* 🫧 FLOATING BUBBLES */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-purple-300/30 rounded-full blur-3xl" />

      {/* 🔥 CARDS */}
      <div className="relative z-10 max-w-6xl mx-auto grid  gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="
              bg-white/70 backdrop-blur-xl
              border border-white/40
              rounded-2xl p-4
              shadow-md hover:shadow-2xl
              transition-all duration-300
            "
          >
            <div className="flex items-center gap-5">
 <div
              className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 text-white bg-gradient-to-r ${item.color}`}
            >
              {item.icon}
            </div>

            {/* VALUE */}
            <div className="text-3xl font-bold text-gray-900">
              <CountUp value={item.value} />
              {item.suffix}
            </div>
            </div>
            {/* ICON */}
           

            {/* LABEL */}
            <p className="text-gray-700 font-medium mt-1">
              {item.label}
            </p>

            {/* SUBTEXT */}
            <p className="text-gray-400 text-sm mt-1">
              {item.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}