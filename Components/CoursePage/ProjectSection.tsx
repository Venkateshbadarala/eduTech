"use client";

import {
  Wrench,
  Search,
  Ticket,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Mini Project",
      count: "1",
      duration: "Duration: 1 Week",
      icon: <Wrench size={24} />,
      gradient: "from-indigo-500 to-blue-500",
      glow: "shadow-indigo-500/20",
      bg: "bg-indigo-50",
    },

    {
      title: "Major Project",
      count: "1",
      duration: "Duration: 3 Weeks",
      icon: <Search size={24} />,
      gradient: "from-emerald-500 to-green-500",
      glow: "shadow-emerald-500/20",
      bg: "bg-emerald-50",
    },

    {
      title: "Certificate",
      count: "1",
      duration: "Industry Recognized",
      icon: <Ticket size={24} />,
      gradient: "from-orange-500 to-amber-500",
      glow: "shadow-orange-500/20",
      bg: "bg-orange-50",
      highlight: true,
    },
  ];

  return (
    <section className="relative ">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-200/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-200/20 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          

         
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((item, i) => (
            <div
              key={i}
              className={`
                relative overflow-hidden group
                rounded-3xl bg-white/90 backdrop-blur-xl
                border border-white/50
                shadow-2xl ${item.glow}
                hover:-translate-y-3
                transition-all duration-500
              `}
            >

              {/* HOVER GLOW */}
              <div
                className={`
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition duration-500
                  
                  blur-3xl
                `}
              />

              {/* CONTENT */}
              <div className="relative z-10 p-8">

                {/* TOP */}
                <div className="flex justify-between items-start mb-8">

                  {/* ICON */}
                  <div
                    className={`
                      w-16 h-16 rounded-2xl
                      flex items-center justify-center
                      text-white shadow-xl
                      bg-gradient-to-br ${item.gradient}
                      group-hover:rotate-6
                      group-hover:scale-110
                      transition-all duration-500
                    `}
                  >
                    {item.icon}
                  </div>

                  {/* BADGE */}
                  {item.highlight && (
                    <div className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold">
                      Premium
                    </div>
                  )}
                </div>

                {/* NUMBER */}
                <h2
                  className={`
                    text-6xl font-black tracking-tight
                    bg-gradient-to-r ${item.gradient}
                    bg-clip-text text-transparent
                  `}
                >
                  {item.count}
                </h2>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-gray-900 mt-4">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-500 mt-3 leading-relaxed">
                  {item.duration}
                </p>

               
              </div>

              {/* BOTTOM BORDER EFFECT */}
              <div
                className={`
                  absolute bottom-0 left-0
                  h-1 w-0
                  bg-gradient-to-r ${item.gradient}
                  group-hover:w-full
                  transition-all duration-500
                `}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}