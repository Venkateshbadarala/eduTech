"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { trainers as team } from "@/constants/Trainers";
import { LinkedInIcon } from "@/constants/svgIcons";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

export default function TeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10  relative ">

      {/* 🔥 HEADING */}
      <div className="text-center mb-14 px-4">
        <p className="text-secondary text-4xl font-bold mb-2">Meet the team</p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Meet our Dedicated Team of Educators
          <br /> and Innovators
        </h2>
      </div>

      {/* 🔥 ARROWS */}
      <button
      type="button"
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/3 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:scale-110 transition"
      >
        <ChevronLeft />
      </button>

      <button
      type="button"
        onClick={() => scroll("right")}
        className="absolute right-4  top-1/3 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:scale-110 transition"
      >
        <ChevronRight />
      </button>

      {/* 🔥 CARDS */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-10 no-scrollbar pb-2"
      >
        {team.map((member, i) => (
          <div
  key={i}
  className="
    min-w-[280px]
    h-[360px]
    relative
    rounded-3xl
    overflow-hidden
    group
    shadow-md
    hover:shadow-xl
    transition
  "
>
  {/* 🔥 IMAGE FULL */}
  <Image
    src={member.image}
    alt={member.name}
    fill
    className="
      object-cover object-top
      transition duration-500
      group-hover:scale-110
    "
  />

  {/* 🔥 DARK OVERLAY */}
  <div className="
    absolute inset-0 
    bg-gradient-to-t 
    from-black/80 via-black/20 to-transparent
  " />

  {/* 🔥 CONTENT ON IMAGE */}
  <div className="
    absolute bottom-0 left-0 right-0
    p-5 text-white
  ">
    <h3 className="text-lg font-semibold">
      {member.name}
    </h3>

    <p className="text-sm text-gray-200">
      {member.role}
    </p>

    {/* BUTTON */}
    <Link
      href={member.linkedin}
      target="_blank"
      className="
        mt-3 inline-flex items-center gap-2
        bg-white/20 backdrop-blur-md
        px-4 py-2 rounded-full text-sm
        hover:bg-white hover:text-black
        transition
      "
    >
      View Profile
      <LinkedInIcon />
    </Link>
  </div>
</div>
        ))}
      </div>
    </section>
  );
}