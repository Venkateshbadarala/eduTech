"use client";

import Image, { StaticImageData } from "next/image";

interface ToolItem {
  image: StaticImageData;
}

export default function TechSection({ tools }: { tools: ToolItem[] }) {
  return (
    <div className="flex justify-center items-center gap-8 mt-10  ">

      {tools.map((item, i) => (
        <div
          key={i}
          className="
            w-60 h-32 
            bg-white rounded-2xl
            flex items-center justify-center
            shadow-md hover:shadow-xl
            transition duration-300
            hover:-translate-y-1
          "
        >
          <Image
            src={item.image}
            alt="tool"
            width={400}
            height={400}
            className="w-28 h-28 object-contain"
          />
        </div>
      ))}

    </div>
  );
}