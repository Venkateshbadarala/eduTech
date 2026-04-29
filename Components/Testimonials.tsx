"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { GoogleIcon } from "@/constants/svgIcons";
import Link from "next/link";
import user1 from "@/constants/Trainer.png";
import user2 from "@/constants/Trainer.png";
import Image from "next/image";
const testimonials = [
  {
    name: "Venkatesh",
    image: user1,
    review:
      "Professional & Impactful – Mindenious Edutech is redefining learning! 🚀 The courses are practical, mentors are inspiring, and the focus on real-world skills makes it stand out.",
    rating: 5,
    link: "https://www.google.com/maps", // 🔗 add real review link
  },
  {
    name: "Hariketan",
    image: user2,
    review:
      "It's an amazing experience. I am learning something new. Classes are conducted efficiently. Totally worth the money!",
    rating: 5,
    link: "https://www.google.com/maps",
  },
  {
    name: "Eswar",
    image: user1,
    review:
      "Working at Mindenious has been a great experience. The environment encourages learning and growth.",
    rating: 4,
    link: "https://www.google.com/maps",
  },
  {
    name: "Vineeth",
    image: user2,
    review:
      "Great experience! I was looking for internships and found amazing opportunities here.",
    rating: 5,
    link: "https://www.google.com/maps",
  },
  {
    name: "Anirudh",
    image: user1,
    review:
      "Great experience! I was looking for internships and found amazing opportunities here.",
    rating: 5,
    link: "https://www.google.com/maps",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -width : width,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 relative px-6">
      {/* 🔥 HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold text-(--color-black-1) ">
          Voices of Success <br />
          <span className="text-(--color-primary)">
            Real Stories. Real Impact.
          </span>
        </h2>

        <p className="text-(--color-gray-2) mt-4 max-w-2xl mx-auto">
          Discover how our students are transforming their careers through
          hands-on learning, expert mentorship, and real-world experience.
        </p>
      </div>

      {/* 🔥 ARROWS */}
      <button
      type="button"
        onClick={() => scroll("left")}
        className="absolute left-5 top-1/3 -translate-y-1/2 bg-(--color-white) shadow-lg p-3 rounded-full z-10 hover:scale-110 transition"
      >
        <ChevronLeft />
      </button>

      <button
      type="button"
        onClick={() => scroll("right")}
        className="absolute right-5 top-1/3 -translate-y-1/2 bg-(--color-white) shadow-lg p-3 rounded-full z-10 hover:scale-110 transition"
      >
        <ChevronRight />
      </button>

      {/* 🔥 CARDS */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto items-start pb-2 no-scrollbar"
      >
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="min-w-[320px] bg-(--color-white) rounded-2xl shadow-md p-6 transition "
          >
            {/* TOP */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h3 className="font-semibold text-(--color-black-1)">
                  {item.name}
                </h3>
              </div>

              {/* 🔥 Google Link */}
              <Link
                href={item.link}
                target="_blank"
                className="cursor-pointer hover:scale-110 transition"
              >
                <GoogleIcon />
              </Link>
            </div>

            {/* REVIEW */}
            <p className="text-(--color-gray-2) text-sm leading-relaxed line-clamp-4 min-h-[90px]">
              {item.review}
            </p>

            {/* FOOTER */}
            <div className="flex items-center justify-between mt-6">
              {/* ⭐ Stars */}
              <div className="flex gap-1 text-(--color-primary)">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <Link
                href={item.link}
                target="_blank"
                className="text-(--color-gray-2) hover:text-(--color-primary) transition text-sm font-medium"
              >
                View Review
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
