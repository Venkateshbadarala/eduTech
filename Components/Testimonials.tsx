"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { GoogleIcon } from "@/constants/svgIcons";
import Link from "next/link";
import Image from "next/image";

import user1 from "@/constants/Trainer.png";
import user2 from "@/constants/Trainer.png";

const testimonials = [
  {
    name: "Venkatesh",
    image: user1,
    review:
      "Cornixe completely changed the way I learn. The mentorship and real-world projects helped me build confidence and become industry-ready.",
    rating: 5,
    link: "https://www.google.com/maps",
  },
  {
    name: "Hariketan",
    image: user2,
    review:
      "Joining Cornixe was worth every rupee. The sessions are practical, and the mentors actually guide you step-by-step.",
    rating: 5,
    link: "https://www.google.com/maps",
  },
  {
    name: "Eswar",
    image: user1,
    review:
      "What I liked most about Cornixe is the hands-on approach. You don’t just learn—you build real projects that matter.",
    rating: 4,
    link: "https://www.google.com/maps",
  },
  {
    name: "Vineeth",
    image: user2,
    review:
      "Cornixe gave me clarity in my career path. The support team and mentors are always available when you need help.",
    rating: 5,
    link: "https://www.google.com/maps",
  },

  // 🔥 NEW STRONG REVIEWS
  {
    name: "Rahul Verma",
    image: user1,
    review:
      "Cornixe helped me go from beginner to confident developer. The projects I built here actually helped me crack interviews.",
    rating: 5,
    link: "https://www.google.com/maps",
  },
  {
    name: "Priya Nair",
    image: user2,
    review:
      "The best part about Cornixe is the structured learning path. Everything is clear, focused, and easy to follow.",
    rating: 5,
    link: "https://www.google.com/maps",
  },
  {
    name: "Akash Sharma",
    image: user1,
    review:
      "I gained practical skills and real confidence through Cornixe. It’s not just theory—it’s real industry-level learning.",
    rating: 5,
    link: "https://www.google.com/maps",
  },
  {
    name: "Sneha Reddy",
    image: user2,
    review:
      "Cornixe made learning simple and effective. The mentorship and community support are truly next level.",
    rating: 5,
    link: "https://www.google.com/maps",
  },
  {
    name: "Karthik Sai",
    image: user1,
    review:
      "Because of Cornixe, I now feel ready for real-world challenges. The platform genuinely prepares you for your career.",
    rating: 5,
    link: "https://www.google.com/maps",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

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
    <section
      ref={container}
      className="relative md:py-16 px-4 sm:px-6 overflow-hidden py-4"
    >
      {/* HEADING */}
      <motion.div style={{ y: headingY }} className="text-center">
        <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold text-gray-900">
          Voices of Success <br />
          <span className="text-primary">
            Real Stories. Real Impact.
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Discover how our students are transforming their careers.
        </p>
      </motion.div>

      {/* ARROWS (hide on mobile) */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:block absolute left-5 top-1/3 -translate-y-1/2 bg-white/80 backdrop-blur p-3 rounded-full z-20 shadow"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden md:block absolute right-5 top-1/3 -translate-y-1/2 bg-white/80 backdrop-blur p-3 rounded-full z-20 shadow"
      >
        <ChevronRight />
      </button>
       <div className="px-6">
 <motion.div
        style={{ y: cardsY }}
        ref={scrollRef}
        className="
          flex gap-4 sm:gap-6
          overflow-x-auto
          py-8
          no-scrollbar
          px-2 sm:px-4
          scroll-smooth
          snap-x snap-mandatory
          overflow-y-hidden
        "
      >
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="
              flex-shrink-0
              snap-start
              w-[90%]          /* mobile */
              sm:w-[48%]      /* tablet */
              md:w-[32%]      /* small desktop */
              lg:w-[300px]    /* large screens */
              min-w-[260px]   /* fallback */
              bg-white rounded-2xl shadow-md p-6 transition
            "
          >
            {/* TOP */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 ">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover h-10 w-10"
                />
                <h3 className="font-semibold text-gray-800">
                  {item.name}
                </h3>
              </div>

              <Link href={item.link} target="_blank">
                <GoogleIcon />
              </Link>
            </div>

            {/* REVIEW */}
            <p className="text-gray-500 text-sm leading-relaxed min-h-[90px]">
              {item.review}
            </p>

            {/* FOOTER */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-1 text-blue-500">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <Link
                href={item.link}
                target="_blank"
                className="text-gray-600 hover:text-primary text-sm font-medium border-2 border-primary p-2 rounded-2xl"
              >
                View Review
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
       </div>
      {/* CARDS */}
     
    </section>
  );
} 