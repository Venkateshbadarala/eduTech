"use client";

import Image from "next/image";
import Link from "next/link";
import { coursesData } from "@/lib/courseData";
import { CalendarDays, DownloadCloud, Lock } from "lucide-react";

export default function TrendingCourses() {
  const trendingCourses = Object.entries(coursesData)
    .filter(([_, course]: any) => course.trend)
    .slice(0, 6);

  return (
    <section className="py-24 px-6 md:px-16">

      {/* 🔥 HEADING */}
      <div className="text-center mb-16">
      <p className="text-2xl tracking-widest text-(--color-white)  mb-2  font-bold bg-(--color-secondary) inline-block px-4 py-1 rounded-full">
  TRENDING COURSES
</p>

        <h2 className="text-4xl md:text-5xl font-bold text-(--color-secondary) ">
          Explore our advanced programs
        </h2>
      </div>

      {/* 🔥 GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {trendingCourses.map(([slug, course]: any, i) => (
          <div
            key={i}
            className="bg-(--color-white) rounded-xl p-5 shadow-md hover:shadow-xl transition duration-300 border-2  hover:border-(--color-secondary) border-(--color-white)"
          >

            {/* 🔥 IMAGE BOX */}
            <div className="bg-(--color-primary-light) rounded-xl  flex items-center justify-center mb-5">
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={400}
                className="object-contain rounded-xl"
              />
            </div>

            {/* 🔥 TITLE */}
            <h3 className="text-xl font-bold text-(--color-secondary)">
              {course.title}
            </h3>

            {/* 🔥 DESCRIPTION */}
            <p className="text-(--color-gray-2) text-sm mt-2 leading-relaxed min-h-[60px]">
              {course.trenddesc}
            </p>

            {/* 🔥 TAG */}
            {course.tag && (
              <span className="inline-block mt-3 text-xs bg-gray-100 px-3 py-1 rounded-full text-(--color-gray-2)">
                {course.tag}
              </span>
            )}

            {/* 🔥 TYPE */}
            <p className="mt-4 text-sm text-gray-700 font-medium">
              {course.type || "Certification"}
            </p>

            {/* 🔥 DURATION */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <CalendarDays size={16} />
              {course.duration || "6 Months"}
            </div>

            {/* 🔥 BUTTONS */}
            <div className="flex gap-3 mt-5">

              {/* VIEW */}
              <Link href={`/courses/${slug}`} className="flex-1">
                <button className="w-full border bg-gradient-to-r from-(--color-primary) to-(--color-secondary) py-2 rounded-xl transition text-(--color-white)">
                  View Program
                </button>
              </Link>

              {/* SYLLABUS */}
              {course.syllabus ? (
                <Link href={course.syllabus}>
                  <button className="px-4 py-2 bg-gradient-to-r from-(--color-primary) to-(--color-secondary) text-white rounded-xl hover:opacity-90 transition flex gap-2">
                    <DownloadCloud/>
                    Syllabus
                  </button>
                </Link>
              ) : (
                <button className="px-4 py-2 bg-gray-300 text-gray-600 rounded-xl flex items-center gap-1 cursor-not-allowed">
                  <Lock size={14} />
                  Syllabus
                </button>
              )}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}