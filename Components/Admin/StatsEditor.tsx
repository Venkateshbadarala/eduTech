"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Briefcase, DollarSign } from "lucide-react";

type Stat = {
  value: number | string;
  
};

type Props = {
  value?: Stat[];
  onChange: (stats: Stat[]) => void;
};

const DEFAULT_STATS: Stat[] = [
  {
    value: "",
  },
  {
    value: ""
  },
  {
    value: "",
  },
];

export default function StatsEditor({ value, onChange }: Props) {
  const [stats, setStats] = useState<Stat[]>(
    value?.length === 3 ? value : DEFAULT_STATS
  );

  useEffect(() => {
    onChange(stats);
  }, [stats]);

  const updateValue = (index: number, newValue: string) => {
    const updated = [...stats];
    updated[index] = {
      ...updated[index],
      value: newValue,
    };
    setStats(updated);
  };

  const cards = [
    {
      bg: "bg-green-50",
      border: "border-green-200",
      focus: "focus:ring-green-500",
      icon: <TrendingUp className="text-green-600" size={20} />,
      suffix: "%",
      label: "Companies actively invest",
    },
    {
      bg: "bg-purple-50",
      border: "border-purple-200",
      focus: "focus:ring-purple-500",
      icon: <Briefcase className="text-purple-600" size={20} />,
      suffix: "+",
      label: "Projected jobs in India alone",
    },
    {
      bg: "bg-blue-50",
      border: "border-blue-200",
      focus: "focus:ring-blue-500",
      icon: <DollarSign className="text-blue-600" size={20} />,
      suffix: "+",
      label: "Average annual salary worldwide",
    },
  ];

  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        📊 Course Stats
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`p-5 rounded-2xl border ${cards[i].border} ${cards[i].bg} shadow-sm hover:shadow-md transition`}
          >
            {/* ICON + LABEL */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-12 h-12 flex items-center justify-center bg-(--color-light)  rounded-xl">
                {cards[i].icon}
              </div>
              
              <p className="text-sm font-medium text-gray-800 leading-snug">
                {cards[i].label}
              </p>
            </div>

            {/* INPUT */}
            <div className="relative">
              <input
                type="number"
                value={stat.value}
                onChange={(e) => updateValue(i, e.target.value)}
                placeholder="Enter value"
                className={`w-full p-3 pr-10 text-lg font-semibold border rounded-lg outline-none focus:ring-2 ${cards[i].focus}`}
              />

              {/* SUFFIX */}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                {cards[i].suffix}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}