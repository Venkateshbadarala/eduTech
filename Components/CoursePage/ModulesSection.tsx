"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ModulesSection({ modules }: any) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="pt-1  0 px-6 md:px-10 ">

      {/* 🔥 HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Explore Our <span className="text-(--color-secondary)">Course Modules</span> 
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Dive into our structured course modules, each designed to provide
          in-depth knowledge and practical skills for a well-rounded learning experience.
        </p>
      </div>

      {/* 🔥 ACCORDION */}
      <div className="max-w-4xl mx-auto space-y-5">

        {modules.map((mod: any, i: number) => {
          const isOpen = activeIndex === i;

          return (
            <div
              key={i}
              className={`
                rounded-2xl border transition-all duration-300
                ${isOpen 
                  ? "border-(--color-secondary) bg-(--color-white) shadow-md" 
                  : "border-(--color-black-9) bg-(--color-white)/70 shadow-sm hover:shadow-md cursor-pointer"
                }
              `}
            >
              {/* 🔥 HEADER */}
              <div
                onClick={() => toggle(i)}
                className="flex justify-between items-center p-5 cursor-pointer"
              >
                <h3
                  className={`text-lg font-semibold ${
                    isOpen ? "text-(--color-secondary)" : "text-(--color-primary)"
                  }`}
                >
                  {mod.title}
                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-(--color-primary)" : "text-(--color-gray-2)"
                  }`}
                />
              </div>

              {/* 🔥 CONTENT */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[500px] pb-5 px-5" : "max-h-0"
                }`}
              >
                <ul className="space-y-3">
                  {mod.topics.map((t: string, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-(--color-gray-2)"
                    >
                      <span className="text-(--color-primary) text-lg">›</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}