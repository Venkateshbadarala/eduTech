"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Briefcase, DollarSign } from "lucide-react";

type Stat = {
  value: number | string;
};

type Props = {
  value?: Stat[]; // ✅ from DB
  courseTitle: string;
};

export default function StatsCard({ value ,courseTitle }: Props) {
  const [stats, setStats] = useState<Stat[]>(
    value?.length === 3
      ? value
      : [
          { value: 0 },
          { value: 0 },
          { value: 0 },
        ]
  );

  // 🔥 animate counts
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = Number(stat.value || 0);
      const duration = 1200;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] =
            start >= end ? end : Math.floor(start);
          return updated;
        });

        if (start >= end) clearInterval(counter);
      }, 16);
    });
  }, [stats]);

  // 🔥 STATIC UI CONFIG (like your editor)
  const cards = [
    {
      suffix: "%",
      label: `Companies actively invest in ${courseTitle} to boost online presence.`,
      color: "text-green-500",
      bg: "bg-green-50",
      icon: <TrendingUp className="text-green-500" />,
    },
    {
      suffix: "+",
      label: `Projected ${courseTitle} jobs by 2026 in India alone.`,
      color: "text-purple-500",
      bg: "bg-purple-50",
      icon: <Briefcase className="text-purple-500" />,
    },
    {
      suffix: "+",
      label: `Average annual pay for ${courseTitle} professionals worldwide.`,
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: <DollarSign className="text-blue-600" />,
    },
  ];

  return (
    <div className="">
      

       <div className="grid md:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`p-4 rounded-2xl shadow-md transition hover:shadow-lg max-w-7xl ${ card.bg || "bg-(--color-white)" }`}
        >
          {/* ICON + VALUE */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl">
              {card.icon}
            </div>

            <h2 className={`text-3xl font-bold ${card.color}`}>
              {counts[i]}
              {card.suffix}
            </h2>
          </div>

          {/* LABEL */}
          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            {card.label}
          </p>
        </div>
      ))}
    </div>
    </div>
  );
}