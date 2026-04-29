"use client";

interface ToolItem {
  name: string;
  icon: React.ReactNode;
}

interface Props {
  title: string;
  description: string;
  tools: ToolItem[];
}

export default function ToolsSection({ title, description, tools }: Props) {
  return (
    <section className="py-20  text-center">

      {/* 🔥 HEADING */}
      <div className="mb-14 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          {title}
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
          {description}
        </p>
      </div>

      {/* 🔥 TOOLS GRID */}
      <div className="flex justify-center gap-6 flex-wrap">

        {tools.map((tool, i) => (
          <div
            key={i}
            className="
              w-40 h-40 bg-white rounded-2xl
              flex flex-col items-center justify-center
              shadow-md hover:shadow-xl
              transition duration-300 hover:-translate-y-1
            "
          >
            {/* ICON */}
            <div className="text-4xl mb-2">
              {tool.icon}
            </div>

            {/* NAME */}
            <p className="text-sm text-gray-600 font-medium">
              {tool.name}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}