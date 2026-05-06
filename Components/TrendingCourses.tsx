"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ChartColumnBig,
  DownloadCloud,
  Lock,
  ThumbsUpIcon,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { ElectricalIcon } from "@/constants/svgIcons";

export default function TrendingCourses() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH COURSES FROM DB
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/courses");

        if (!res.ok) throw new Error("Failed");

        const data = await res.json();
        setCourses(data.courses || []);
      } catch {
        toast.error("Failed to load courses ❌");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // ✅ FILTER TRENDING COURSES
  const trendingCourses = courses.filter((c) => c.trend === true);

  // 🌊 PARALLAX
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container.current ? container : undefined,
  });

  const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["60px", "-20px"]);
  const bubbleY1 = useTransform(scrollYProgress, [0, 1], ["0%", "140%"]);
  const bubbleY2 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  // 🔥 LOADING SKELETON
  if (loading) {
    return (
      <section className="py-16 px-6 md:px-16">
        <div className="animate-pulse max-w-6xl mx-auto">
          <div className="h-6 w-40 bg-gray-300 rounded-full mx-auto mb-6" />

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow p-4">
                <div className="h-40 bg-gray-200 rounded-xl mb-4" />
                <div className="h-4 w-3/4 bg-gray-200 rounded mb-2" />
                <div className="h-3 w-full bg-gray-200 rounded mb-2" />
                <div className="h-8 w-full bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={container}
      className="relative py-16 px-6 md:px-16 overflow-hidden rounded-xl "
    >
      {/* 🫧 BUBBLES */}
      <motion.div
        style={{ y: bubbleY1 }}
        className="absolute top-10 left-10 w-52 h-52 bg-blue-400/20 rounded-full "
      />
      <motion.div
        style={{ y: bubbleY2 }}
        className="absolute top-40 right-10 w-40 h-40 bg-indigo-400/20 rounded-full "
      />

      {/* 🔥 HEADING */}
      <motion.div
        style={{ y: headingY, opacity: headingOpacity }}
        className="text-center "
      >
        <p className="text-sm tracking-widest text-white font-semibold bg-gradient-to-r from-primary to-secondary inline-block px-6 py-1 rounded-full shadow-lg">
          TRENDING COURSES
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-6">
          Explore our <span className="text-blue-600">Top Programs</span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Hand-picked trending courses based on industry demand 🚀
        </p>
      </motion.div>

      {/* ❌ EMPTY */}
      {trendingCourses.length === 0 && (
        <p className="text-center text-gray-400">
          No trending courses available 🚫
        </p>
      )}

      {/* 🔥 GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {trendingCourses.map((course: any, i) => (
          <motion.div
            key={i}
            style={{ y: cardY }}
            className="
          group relative
          bg-white/70 backdrop-blur-xl
          rounded-3xl p-[1px]
          bg-gradient-to-br from-blue-200/40 to-indigo-200/30
          shadow-lg hover:shadow-2xl
          transition duration-300
        "
          >
            {/* INNER CARD */}
            <div className="bg-white rounded-3xl p-5 h-full flex flex-col justify-between">
              {/* IMAGE */}
              <div className="relative rounded-2xl overflow-hidden mb-5 bg-blue-50 h-56">
                <Image
                  src={course.image || "/placeholder.jpg"}
                  alt={course.title}
                  fill
                  unoptimized
                  className="
      object-cover
      transition-transform
      duration-500
      group-hover:scale-105
    "
                />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold text-gray-800">
                {course.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm mt-2 min-h-[60px]">
                {course.trenddesc || course.description}
              </p>

              {/* BADGE */}
              <div className="flex justify-between items-center mt-3">
                <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  {course.category}
                </span>

                <span className="text-xs text-green-600 font-semibold uppercase flex items-center gap-2 ">
                  <ChartColumnBig size={16} />
                  {course.start || "ongoing"}
                </span>
              </div>

              {/* META */}
              <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  {course.duration || "Flexible"}
                </div>

                <div className="flex items-center gap-1 text-blue-500">
                  <ThumbsUpIcon size={14} />
                  Popular
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-5">
                <Link href={`/courses/${course._id}`} className="flex-1">
                  <button
                    className="
                w-full
                bg-gradient-to-r from-blue-500 to-indigo-500
                text-white py-2 rounded-xl
                shadow-md hover:shadow-lg
                transition
              "
                  >
                    Explore
                  </button>
                </Link>

                {course?.brochure?.file ? (
                  <Link href={course.brochure.file} target="_blank" download>
                    <button
                      className="
        px-4 py-2
        bg-white border border-gray-200
        rounded-xl hover:bg-gray-50
        flex items-center gap-2
        transition
      "
                    >
                      <DownloadCloud size={16} />
                      Download
                    </button>
                  </Link>
                ) : (
                  <button
                    className="
      px-4 py-2
      bg-gray-200 text-gray-500
      rounded-xl cursor-not-allowed
      flex items-center gap-2
    "
                  >
                    <Lock size={14} />
                    Locked
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 VIEW ALL BUTTON */}
      <div className="flex justify-center mt-14">
        <Link href="/courses">
          <button
            className="
          px-8 py-3 rounded-full
          bg-gradient-to-r from-primary to-secondary
          text-white font-semibold
          shadow-lg hover:shadow-xl
          hover:scale-105
          transition
        "
          >
            View All Courses →
          </button>
        </Link>
      </div>
    </section>
  );
}
