"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CoursesPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  // 🔥 FETCH COURSES
  const fetchCourses = async () => {
    try {
      setLoading(true);

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

  useEffect(() => {
    fetchCourses();
  }, []);

  // ✅ FILTER LOGIC
  const filteredCourses = courses.filter((course) => {
    if (filter === "all") return true;
    if (filter === "tech") return course.subcategory?.toLowerCase().includes("tech");
    if (filter === "non-tech") return !course.subcategory?.toLowerCase().includes("tech");
    return true;
  });

  // 🔥 GROUP BY CATEGORY
  const groupedCourses = filteredCourses.reduce((acc: any, course: any) => {
    const category = course.category || "Other";

    if (!acc[category]) acc[category] = [];
    acc[category].push(course);

    return acc;
  }, {});

  const categoryList = Object.keys(groupedCourses);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-6">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          🎓 Explore Courses
        </h1>
        <p className="text-gray-500 mt-2">
          Learn industry skills with structured programs 🚀
        </p>

        {/* 🔥 FILTERS */}
        <div className="flex gap-3 mt-6">
          {["all", "tech", "non-tech"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  filter === f
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white border hover:bg-gray-100"
                }
              `}
            >
              {f === "all" ? "All" : f === "tech" ? "Tech" : "Non-Tech"}
            </button>
          ))}
        </div>
      </div>

      {/* 🔥 SKELETON LOADING */}
      {loading && (
        <div className="space-y-10 max-w-7xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <div className="h-6 w-40 bg-gray-200 animate-pulse rounded mb-4" />

              <div className="flex gap-5 overflow-hidden">
                {[1, 2, 3, 4].map((j) => (
                  <div
                    key={j}
                    className="min-w-[260px] bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    {/* IMAGE */}
                    <div className="h-40 bg-gray-200 animate-pulse" />

                    {/* CONTENT */}
                    <div className="p-4 space-y-3">
                      <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded" />
                      <div className="h-3 w-full bg-gray-200 animate-pulse rounded" />
                      <div className="h-3 w-5/6 bg-gray-200 animate-pulse rounded" />
                      <div className="h-8 w-full bg-gray-200 animate-pulse rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 🔥 CATEGORY SECTIONS */}
      {!loading && (
        <div className="space-y-12 max-w-7xl mx-auto">
          {categoryList.length === 0 && (
            <p className="text-center text-gray-400">
              No courses found 🚫
            </p>
          )}

          {categoryList.map((category, index) => (
            <div key={index}>

              {/* CATEGORY TITLE */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 uppercase">
                  {category}
                </h2>
              </div>

              {/* 🔥 COURSE ROW */}
              <div className="flex gap-5 overflow-x-auto pb-2 no-scrollbar">

                {groupedCourses[category].map((course: any) => (
                  <div
                    key={course._id}
                    className="min-w-[250px] bg-white rounded-xl shadow-md hover:shadow-xl transition group"
                  >
                    {/* IMAGE */}
                    <div className="h-60 w-full overflow-hidden rounded-t-xl">
                      <Image
                        src={course.image || "/placeholder.jpg"}
                        alt="Image"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                        {course.title}
                      </h3>

                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {course.description}
                      </p>

                      {/* BUTTON */}
                      <Link
                        href={`/courses/${course._id}`}
                        className="
                          mt-4 flex items-center justify-center gap-2
                          bg-gradient-to-r from-blue-500 to-indigo-500
                          hover:opacity-90
                          text-white py-2 rounded-lg text-sm
                          transition
                        "
                      >
                        Explore
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}