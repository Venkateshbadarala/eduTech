"use client";

import { useEffect, useState } from "react";
import {
  Users,
  Code2,
  Video,
  Sparkles,
} from "lucide-react";

type MasteryValue = {
  value: string;
};

type Props = {
  value?: MasteryValue[];
};

function CountUp({
  value,
}: {
  value: string;
}) {
  const [count, setCount] = useState(0);

  const numericValue = parseInt(
    (value || "0").replace(/\D/g, "")
  );

  useEffect(() => {
    if (!numericValue) return;

    let start = 0;

    const duration = 1400;

    const increment =
      numericValue / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [numericValue]);

  return <>{count}</>;
}

export default function MasterySection({
  value,
}: Props) {
  const cards = [
    {
      title: "Industry Experts",
      suffix: "+",
      icon: <Users size={26} />,
      bg: "from-blue-500 to-cyan-500",
      light: "bg-blue-50",
      glow: "shadow-blue-500/20",
    },

    {
      title: "Real Projects",
      suffix: "+",
      icon: <Code2 size={26} />,
      bg: "from-violet-500 to-fuchsia-500",
      light: "bg-violet-50",
      glow: "shadow-violet-500/20",
    },

    {
      title: "Live Classes",
      suffix: "+",
      icon: <Video size={26} />,
      bg: "from-orange-500 to-amber-500",
      light: "bg-orange-50",
      glow: "shadow-orange-500/20",
    },
  ];

  return (
    <section className="relative ">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-10 w-72 h-72   rounded-full" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-violet-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold mb-5">
            <Sparkles size={16} />
            Learning Excellence
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Mastery Through Advanced Programs
          </h2>

          <p className="text-gray-500 mt-4  mx-auto text-base md:text-lg">
            Elevate your skills with in-depth, hands-on training led by industry
            experts. Our advanced programs are designed to equip you with
            specialized knowledge and real-world experience for career
            excellence in high-demand fields.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {cards.map((card, i) => (
            <div
              key={i}
              className={`
                relative group overflow-hidden
                rounded-3xl bg-white/90 backdrop-blur-xl
                border border-white/50
                shadow-2xl ${card.glow}
                hover:-translate-y-3
                transition-all duration-500
              `}
            >

              {/* TOP GLOW */}
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

                {/* ICON */}
                <div
                  className={`
                    w-20 h-20 rounded-3xl
                    flex items-center justify-center
                    bg-gradient-to-br ${card.bg}
                    text-white
                    shadow-xl
                    mb-8
                    group-hover:scale-110
                    group-hover:rotate-6
                    transition-all duration-500
                  `}
                >
                  {card.icon}
                </div>

                {/* VALUE */}
                <h2 className="text-6xl font-black text-gray-900 leading-none tracking-tight">
                  <CountUp
                    value={
                      value?.[i]?.value || "0"
                    }
                  />
                  <span
                    className={`
                      bg-gradient-to-r ${card.bg}
                      bg-clip-text text-transparent
                    `}
                  >
                    {card.suffix}
                  </span>
                </h2>

                {/* TITLE */}
                <p className="mt-5 text-xl font-bold text-gray-800">
                  {card.title}
                </p>

                
              </div>

              {/* BOTTOM LINE */}
              <div
                className={`
                  absolute bottom-0 left-0
                  h-1 w-0
                  bg-gradient-to-r ${card.bg}
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