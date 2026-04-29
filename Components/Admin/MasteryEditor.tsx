"use client";

import { useEffect, useState } from "react";
import { Users, Code2, Video } from "lucide-react";

type MasteryItem = {
  value: string;
  label: string;
  icon: any;
};

type Props = {
  value?: MasteryItem[];
  onChange: (data: MasteryItem[]) => void;
};

// 🔒 CONSTANT DATA
const DEFAULT_MASTERY: MasteryItem[] = [
  {
    value: "",
    label: "Industry Experts",
    icon: <Users />,
  },
  {
    value: "",
    label: "Real World Projects",
    icon: <Code2 />,
  },
  {
    value: "",
    label: "Hours of Live Classes",
    icon: <Video />,
  },
];

export default function MasteryEditor({ value, onChange }: Props) {
  const [mastery, setMastery] = useState<MasteryItem[]>(
    value?.length === 3 ? value : DEFAULT_MASTERY
  );

  // 🔁 sync
  useEffect(() => {
    onChange(mastery);
  }, [mastery]);

  // 🔹 update only value
  const updateValue = (index: number, val: string) => {
    const updated = [...mastery];
    updated[index].value = val;
    setMastery(updated);
  };

  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold mb-5 text-gray-800">
        🚀 Course Mastery Highlights
      </h3>

      <div className="grid md:grid-cols-3 gap-5">
        {mastery.map((item, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition"
          >
            {/* ICON */}
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 text-blue-500 mb-3">
              {item.icon}
            </div>

            {/* LABEL */}
            <p className="text-sm text-gray-500 mb-2">
              {item.label}
            </p>

            {/* INPUT */}
            <input
              type="text"
              placeholder="Enter value (e.g. 10+)"
              value={item.value}
              onChange={(e) => updateValue(i, e.target.value)}
              className="w-full border p-2 rounded-lg text-lg font-semibold focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}