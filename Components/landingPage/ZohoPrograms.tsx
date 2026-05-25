"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import toast from "react-hot-toast";

import zoho from "@/public/Companies/zoho.png";

import {
  PiArrowRightBold,
  PiCertificateBold,
  PiSparkleFill,
} from "react-icons/pi";

export default function ZohoCertifiedPrograms() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // 🔥 FETCH COURSES
  const fetchCourses = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/courses");

      if (!res.ok) {
        const text = await res.text();

        console.error("API ERROR:", text);

        throw new Error("Failed");
      }

      const data = await res.json();

      setCourses(data.courses || []);
    } catch (err) {
      console.error(err);

      toast.error(
        "Error fetching courses ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <section
      className="
        relative overflow-hidden
        px-6 md:py-16 py-8
      "
    >

      {/* GRID */}
      <div
        className="
          absolute inset-0 opacity-30
          bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* BLURS */}
      <div
        className="
          absolute top-10 left-10
          w-72 h-72
          bg-(--color-primary)/20
          rounded-full blur-3xl
        "
      />

      <div
        className="
          absolute bottom-10 right-10
          w-72 h-72
          bg-(--color-secondary)/20
          rounded-full blur-3xl
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          {/* BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="
              inline-flex items-center gap-4
              md:px-8 md:py-4 py-2 px-4
              rounded-full

              border border-white/10
              bg-white/10
              backdrop-blur-xl

              shadow-[0_15px_60px_rgba(0,0,0,0.08)]
            "
          >

            <img
              src={zoho.src}
              alt="Zoho"
              className="
                object-contain h-12 w-12 md:h-12 md:w-12
              "
            />

            

            <p
              className="
                text-sm md:text-base
                font-semibold
                text-(--color-black-1)
              "
            >
              All Programs Are{" "}

              <span className="text-(--color-primary)">
                Zoho Certified
              </span>
            </p>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              mt-10
              text-3xl md:text-5xl
              font-black
              leading-tight
              text-(--color-black-1)
            "
          >
            Learn With{" "}

            <span
              className="
                bg-gradient-to-r
                from-(--color-primary)
                to-(--color-secondary)
                text-transparent bg-clip-text
              "
            >
              Zoho Certified
            </span>{" "}

            Programs
          </motion.h1>

          <p
            className="
              mt-8
              max-w-4xl mx-auto
              text-sm md:text-xl
              leading-relaxed
              text-(--color-gray-2)
            "
          >
            Industry-focused learning
            programs powered with
            practical training, live
            implementation, enterprise
            workflows, and certification-ready
            projects in collaboration with
            Zoho.
          </p>
        </div>

        {/* LOADING */}
        {loading && (
          <div
            className="
              mt-20
              text-center
              text-lg
              font-semibold
              text-(--color-gray-1)
            "
          >
            Loading Courses...
          </div>
        )}

        {/* COURSES */}
        {!loading && (
          <div
            className="
              mt-20
              grid sm:grid-cols-2
              lg:grid-cols-3
              gap-7
            "
          >

            {courses.map(
              (course: any, index) => (
                <motion.div
                  key={course._id || index}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="
                    group
                    relative overflow-hidden

                    rounded-[32px]
                    border border-white/10
                    bg-white/10
                    backdrop-blur-2xl

                    shadow-[0_15px_60px_rgba(0,0,0,0.08)]

                    transition-all duration-500
                  "
                >

                  {/* HOVER */}
                  <div
                    className="
                      absolute inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition duration-500

                      bg-gradient-to-br
                      from-(--color-primary)/10
                      via-transparent
                      to-(--color-secondary)/10
                    "
                  />

                  {/* SHINE */}
                  <div
                    className="
                      absolute top-0 left-[-100%]
                      w-full h-full
                      bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]
                      group-hover:left-[100%]
                      transition-all duration-1000
                    "
                  />

                  {/* IMAGE */}
                  <div
                    className="
                      relative h-[250px]
                      overflow-hidden
                    "
                  >

                    <img
                      src={
                        course.image ||
                        "/placeholder.jpg"
                      }
                      alt={course.title}
                      className="
                        w-full h-full
                        object-cover

                        transition-transform duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* OVERLAY */}
                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-black/90
                        via-black/20
                        to-transparent
                      "
                    />

                    {/* CERTIFIED */}
                    <div
                      className="
                        absolute top-5 left-5

                        flex items-center gap-2

                        px-4 py-2
                        rounded-full

                        border border-white/10
                        bg-white/10
                        backdrop-blur-xl

                        text-white
                        text-xs font-semibold
                      "
                    >
                      <PiCertificateBold size={16} />

                      Zoho Certified
                    </div>

                    {/* CATEGORY */}
                    <div
                      className="
                        absolute top-5 right-5

                        px-4 py-2
                        rounded-full

                        bg-(--color-primary)/80

                        text-white
                        text-xs font-semibold
                      "
                    >
                      {course.category}
                    </div>

                    {/* TITLE */}
                    <div
                      className="
                        absolute bottom-6
                        left-6 right-6
                      "
                    >

                      <h2
                        className="
                          text-2xl
                          font-black
                          leading-snug
                          text-white
                        "
                      >
                        {course.title}
                      </h2>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 p-7">

                    <p
                      className="
                        text-base
                        leading-relaxed
                        text-(--color-gray-2)
                        line-clamp-3
                      "
                    >
                      {course.description}
                    </p>

                    {/* FOOTER */}
                    <div
                      className="
                        mt-8
                        flex items-center justify-between
                        gap-2
                      "
                    >

                      <div
                        className="
                          flex items-center gap-2
                          
                          px-4 py-2
                          rounded-xl

                          bg-(--color-primary)/10
                          text-(--color-primary)

                          text-sm font-semibold
                        "
                      >
                        <PiSparkleFill />

                        Enterprise Ready
                      </div>

                      <Link
                        href={`/courses/${course._id}`}
                      >
                        <button
                          className="
                            group/btn

                            inline-flex items-center gap-2

                            px-5 py-3
                            rounded-2xl
                             md:text-lg text-sm
                            bg-gradient-to-r
                            from-(--color-primary)
                            to-(--color-secondary)

                            text-white
                            font-semibold

                            hover:scale-105
                            transition-all duration-300

                            shadow-lg
                          "
                        >
                          View Course

                         
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        )}

        {/* EMPTY */}
        {!loading &&
          courses.length === 0 && (
            <div
              className="
                mt-20
                text-center
                text-lg
                font-semibold
                text-(--color-gray-2)
              "
            >
              No Courses Found
            </div>
          )}

        
      </div>
    </section>
  );
}