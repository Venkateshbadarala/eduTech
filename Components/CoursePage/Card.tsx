"use client";

import Image from "next/image";

interface SkillItem {
  title: string;
  description: string;
  icon: string; // ✅ changed from ReactNode → string
}

export default function Card({ item }: { item: SkillItem }) {
  return (
    <div
      className="
        bg-(--color-white) p-4
        border border-(--color-gray-1)
        transition duration-300
        hover:-translate-y-1 hover:shadow-xl
        text-left
        shadow-md
        rounded-2xl
      "
    >
      {/* ICON */}
      <div className="w-14 h-14 flex items-center justify-center bg-(--color-light)  rounded-xl mb-4">
        <img
          src={item.icon}
          alt={item.title}
          width={28}
          height={28}
          className="object-contain"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-gray-800">
        {item.title}
      </h3>

      {/* DESC */}
      <p className="text-gray-500 mt-2 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}