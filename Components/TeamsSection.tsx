"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { LinkedInIcon } from "@/constants/svgIcons";
import Ganesh from "@/public/Team/Ganesh.png";
import Ansh from '@/public/Team/Ansh.png'
import Arib from '@/public/Team/Arib.png'
import Kumaresan from '@/public/Team/Kumaresan.png'
import hemanth from '@/public/Team/Hemanth.png'
import Farhath from '@/public/Team/Farhath.png'
import subhasis from '@/public/Team/subhasis.png'
import titturaja from '@/public/Team/titturaja.png'
import uttam from '@/public/Team/uttam.png'
import vaishnavu from '@/public/Team/Vaishnavu.png'
import Vinay from '@/public/Team/Vinay.png'


const team = [
  {
    image: Ganesh,

    name: "Ganesh E",

    role: "Founder & CEO",

    linkedin:
      "https://www.linkedin.com/",
  },
  {
    image: Kumaresan,

    name: "Kumaresan D",

    role: "COO",

    linkedin:
      "https://www.linkedin.com/",
  },
   {
    image: hemanth,

    name: "Hemanth Kumar",

    role: "CSO",

    linkedin:
      "https://www.linkedin.com/",
  },
   {
    image: Ansh,

    name: "Ansh",

    role: "COO",

    linkedin:
      "https://www.linkedin.com/",
  },
   {
    image: Arib,

    name: "Arib",

    role: "COO",

    linkedin:
      "https://www.linkedin.com/",
  },
   {
    image: subhasis,

    name: "Subhasis",

    role: "COO",

    linkedin:
      "https://www.linkedin.com/",
  },
   {
    image: Farhath,

    name: "Farhath",

    role: "COO",

    linkedin:
      "https://www.linkedin.com/",
  },
   {
    image: titturaja,

    name: "Tittu Raja",

    role: "COO",

    linkedin:
      "https://www.linkedin.com/",
  },
  {
    image: uttam,

    name: "Uttam",

    role: "COO",

    linkedin:
      "https://www.linkedin.com/",
  },
  {
    image: vaishnavu,

    name: "Vaishnavu",

    role: "COO",

    linkedin:
      "https://www.linkedin.com/",
  },
  {
    image: Vinay,

    name: "Vinay",

    role: "COO",

    linkedin:
      "https://www.linkedin.com/",
  },
];

export default function TeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement | null>(null);

  // 🔥 SCROLL PARALLAX
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  // 🔁 SCROLL BUTTON
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    const width = scrollRef.current.offsetWidth;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section ref={container} className="relative py-16 overflow-hidden  ">
      {/* 🔥 HEADING */}
      <motion.div
        style={{ y: headingY }}
        className="text-center mb-10 px-4 relative z-10"
      >
        <p className="text-secondary text-3xl md:text-3xl font-bold mb-2">
          Meet the team
        </p>

        <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-black-1 leading-tight">
          Meet our Dedicated Team of Educators and Innovators
        </h2>
      </motion.div>

      {/* 🔥 ARROWS (hidden on mobile) */}
      <button
        type="button"
        onClick={() => scroll("left")}
        className="hidden md:block absolute left-4 top-1/3 -translate-y-1/2 z-20 bg-white/80 backdrop-blur p-3 rounded-full shadow hover:scale-110 transition"
      >
        <ChevronLeft />
      </button>

      <button
        type="button"
        onClick={() => scroll("right")}
        className="hidden md:block absolute right-4 top-1/3 -translate-y-1/2 z-20 bg-white/80 backdrop-blur p-3 rounded-full shadow hover:scale-110 transition"
      >
        <ChevronRight />
      </button>

      {/* 🔥 CARDS */}
      <div className="px-16">
 <motion.div
        style={{ y: cardsY }}
        ref={scrollRef}
        className="
          flex gap-4 sm:gap-6
          overflow-x-auto
        
          no-scrollbar pb-4
          scroll-smooth
          snap-x snap-mandatory
          overflow-y-hidden
        "
      >
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="
              snap-start
              flex-shrink-0
              w-[85%]           /* mobile: almost full */
              sm:w-[48%]       /* tablet: 2 cards */
              md:w-[280px]       /* small laptop: 3 cards */
              lg:w-[280px]     /* desktop */
              h-[280px] sm:h-[340px] md:h-[360px]
              relative
              rounded-3xl
              overflow-hidden
              group
              shadow-md
              transition
            "
          >
            {/* IMAGE */}
         <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top transition duration-500 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <h3 className="text-lg font-semibold">{member.name}</h3>

              <p className="text-sm text-gray-200">{member.role}</p>

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
          </motion.div>
        ))}
      </motion.div>
      </div>
     
    </section>
  );
}