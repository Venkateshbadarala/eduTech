"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface HomeProps {
  headline: string;
  tagline: string;
  courseName: string;
  image: StaticImageData;
}

const features = [
  "25+ Real-World Projects",
  "80+ Hours of Live Classes",
  "Self-Paced Learning",
  "1:1 Mentorship",
  "Capstone Project",
  "Career Counseling",
  "Interview Prep",
  "Job & Internship Help",
  "Doubt Solving",
  "Community Access",
  "Lifetime Material Access",
  "Latest Tools & Tech",
];

export default function Home({
  headline,
  tagline,
  courseName,
  image,
}: HomeProps) {
  return (
    <div className="relative bg-(--color-white) overflow-hidden">

      {/* 🔵 CURVE BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-[50vh] z-0">

        <svg
          viewBox="0 0 1440 500"
          className="w-full h-[500px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="curveGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>

          <path
            fill="url(#curveGradient)"
            d="M0,0 L1440,0 L1440,300 Q720,500 0,300 Z"
          />
        </svg>

        {/* TEXT */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center text-white z-10 px-4">
          <h1 className="text-5xl font-bold leading-tight">
            {headline}
          </h1>
          <p className="mt-3 text-sm md:text-lg opacity-90 max-w-2xl mx-auto">
            {tagline}
          </p>
        </div>
      </div>

      {/* 🔥 MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto p-6">

        <div className="grid md:grid-cols-2 gap-10 items-center pt-[36vh]">

          {/* 🔥 LEFT SIDE (IMAGE CARD) */}
          <div className="relative rounded-xl overflow-hidden bg-black h-[25rem]">

            <Image
              src={image}
              width={300}
              height={200}
              alt="Course"
              className="w-full h-full object-cover mix-blend-lighten opacity-90"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-(--color-black-1) via-(--color-black-1)/50 to-(--color-secondary)/60" />

            {/* TEXT */}
            <div className="absolute top-6 left-6 text-(--color-gray-1)">
              

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {courseName}
               
              </h1>
            </div>
          </div>

          {/* 🔥 RIGHT SIDE (FEATURES - STATIC AS YOU SAID) */}
          <div className="bg-white p-8 rounded-xl shadow-lg z-10 flex flex-col items-start h-[25rem]">
            <h2 className="text-2xl text-black font-bold mb-6">
              Features Highlight
            </h2>

            <div className="flex flex-wrap gap-3">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-sm hover:shadow-md transition"
                >
                  <span className="text-blue-500 font-bold">✔</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}