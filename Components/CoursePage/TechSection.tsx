"use client";

import Image from "next/image";

interface ToolItem {
  image: string;
}

export default function TechSection({
  tools,
}: {
  tools: ToolItem[];
}) {
  return (
    <section className="relative pt-10 ">

      {/* 🔥 BACKGROUND GLOW */}
      <div
        className="
          absolute top-0 left-1/2
          -translate-x-1/2
          w-[700px] h-[700px]
          
          blur-3xl
          rounded-full
          -z-10
        "
      />

     

      {/* 🔥 TOOLS GRID */}
      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          gap-6
          max-w-7xl
          mx-auto
          px-6
        "
      >
        {tools.map((item, i) => (
          <div
            key={i}
            className="
              group relative
              bg-white/80
              backdrop-blur-xl
              border border-white/40
              rounded-3xl
              p-6
              flex items-center justify-center
              h-40
              shadow-lg
              hover:shadow-2xl
              transition-all duration-500
              hover:-translate-y-3
              overflow-hidden
            "
          >

            {/* 🔥 HOVER GLOW */}
            <div
              className="
                absolute inset-0
                opacity-0
                group-hover:opacity-100
                transition duration-500
                bg-gradient-to-br
                from-blue-100/50
                via-cyan-50/30
                to-indigo-100/50
              "
            />

            {/* 🔥 IMAGE */}
            <div className="relative z-10">
              <img
                src={item.image}
                alt="Tool"
                width={90}
                height={90}
                className="
                  object-contain
                  transition duration-500
                  group-hover:scale-110
                  drop-shadow-md
                "
              />
            </div>

            {/* 🔥 BORDER EFFECT */}
            <div
              className="
                absolute inset-0
                rounded-3xl
                border border-transparent
                group-hover:border-blue-200
                transition
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}