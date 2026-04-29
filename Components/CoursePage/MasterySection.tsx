"use client";

import { useEffect, useState } from "react";
import { Users, Code2, Video } from "lucide-react";

type MasteryValue = {
  value: string;
};

type Props = {
  value?: MasteryValue[];
};

function CountUp({ value }: { value: string }) {
  const [count, setCount] = useState(0);

  const numericValue = parseInt((value || "0").replace(/\D/g, ""));

  useEffect(() => {
    if (!numericValue) return;

    let start = 0;
    const duration = 1000;
    const increment = numericValue / (duration / 16);

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

  const suffix = value?.replace(/[0-9]/g, "") || "";

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function MasterySection({ value }: Props) {
  const cards = [
    {
      label: "Industry Experts",
      icon: <Users size={22} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Real World Projects",
      icon: <Code2 size={22} />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      label: "Hours of Live Classes",
      icon: <Video size={22} />,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto px-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="
            bg-white rounded-2xl p-6
            border border-gray-100
            shadow-sm hover:shadow-md
            transition-all duration-300
            hover:-translate-y-1
            text-center
          "
        >
          {/* ICON */}
          <div
            className={`
              w-14 h-14 mx-auto flex items-center justify-center
              rounded-xl mb-4
              ${card.color}
            `}
          >
            {card.icon}
          </div>

          {/* VALUE */}
          <h2 className="text-3xl font-bold text-gray-900">
            <CountUp value={value?.[i]?.value || "0"} />
          </h2>

          {/* LABEL */}
          <p className="text-gray-500 mt-2 text-sm">
            {card.label}
          </p>
        </div>
      ))}
    </div>
  );
}