"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CoursesPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // 🔥 FETCH COURSES
  const fetchCourses = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/courses", {
        cache: "no-store",
      });

      if (!res.ok) throw new Error("Failed");

      const data = await res.json();

      setCourses(data.courses || []);
    } catch (err) {
      toast.error("Failed to load courses ❌");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // 🔥 GROUP BY CATEGORY
  const groupedCourses = courses.reduce((acc: any, course: any) => {
    const category = course.category || "Other";

    if (!acc[category]) acc[category] = [];

    acc[category].push(course);

    return acc;
  }, {});

  const categoryList = Object.keys(groupedCourses);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          🎓 Explore Courses
        </h1>
        <p className="text-gray-500 mt-2">
          Learn industry skills with structured programs 🚀
        </p>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="space-y-10">
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <div className="h-6 w-40 bg-gray-200 animate-pulse rounded mb-4" />
              <div className="flex gap-4 overflow-hidden">
                {[1, 2, 3].map((j) => (
                  <div
                    key={j}
                    className="w-64 h-48 bg-gray-200 animate-pulse rounded-xl"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 🔥 CATEGORY SECTIONS */}
      <div className="space-y-12 max-w-7xl mx-auto">
        {categoryList.map((category, index) => (
          <div key={index}>

            {/* 🔥 CATEGORY TITLE */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {category}
              </h2>

              
            </div>

            {/* 🔥 HORIZONTAL SCROLL ROW */}
            <div className="flex gap-5 overflow-x-auto pb-2 no-scrollbar">

              {groupedCourses[category].map((course: any) => (
                <div
                  key={course._id}
                  className="w-sm bg-white rounded-xl shadow-md hover:shadow-xl transition group"
                >
                  {/* IMAGE */}
                  <div className="h-60 w-full overflow-hidden rounded-t-2xl">
                    <img
                      src={course.image || "/placeholder.jpg"}
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

                    {/* 🔥 EXPLORE BUTTON */}
                    <Link
                      href={`/courses/${course._id}`}
                      className="
                        mt-4 flex items-center justify-center gap-2
                        bg-blue-600 hover:bg-blue-700
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
    </div>
  );
}