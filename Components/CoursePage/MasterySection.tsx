"use client";

import { useEffect, useState } from "react";
import {
  Users,
  Code2,
  Video,
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
  const [count, setCount] =
    useState(0);

  const numericValue = parseInt(
    (value || "0").replace(/\D/g, "")
  );

  const suffix =
    value?.replace(/[0-9]/g, "") || "";

  useEffect(() => {
    if (!numericValue) return;

    let start = 0;

    const duration = 1200;

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

    return () =>
      clearInterval(counter);
  }, [numericValue]);

  return (
    <>
      {count}
      
    </>
  );
}

export default function MasterySection({
  value,
}: Props) {
  const cards = [
    {
      title: "Industry Experts",
      suffix: "+",
      icon: <Users size={22} />,
      bg: "bg-blue-50",
      text: "text-blue-600",
    },

    {
      title: "Real Projects",
      icon: <Code2 size={22} />,
      suffix: "+",
      bg: "bg-violet-50",
      text: "text-violet-600",
    },

    {
      title: "Live Classes",
      icon: <Video size={22} />,
      suffix: "+",
      bg: "bg-orange-50",
      text: "text-orange-600",
    },
  ];

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto px-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="
              flex-1
              bg-white
              border border-gray-100
              rounded-3xl
              p-6
              shadow-sm
              hover:shadow-lg
              transition-all duration-300
            "
          >
            {/* TOP */}
            <div className="flex items-center gap-4 justify-around">
              
              {/* ICON */}
              <div
                className={`
                  w-14 h-14
                  rounded-2xl
                  flex items-center justify-center
                  ${card.bg}
                  ${card.text}
                  shrink-0
                `}
              >
                {card.icon}
              </div>

              {/* CONTENT */}
              <div>
                <h2 className="text-4xl font-black text-gray-900 leading-none">
                  <CountUp
                    value={
                      value?.[i]?.value ||
                      "0+"
                    }
                  />
                  {card.suffix}
                </h2>

                <p className="text-gray-500 text-sm mt-2 font-medium">
                  {card.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}