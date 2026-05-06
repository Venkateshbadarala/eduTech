"use client";

import CreateCoursePage from "@/Components/Admin/CreateCoursePage";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function CoursesDashboard() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const pathname = usePathname(); // 🔥 detects route change

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
      toast.error("Error fetching courses ❌");
    } finally {
      setLoading(false);
    }
  };

 useEffect(() => {
  fetchCourses();

  // 🔥 THIS FIXES BACK/FORWARD BUTTON ISSUE
  const handlePageShow = (event: any) => {
    if (event.persisted) {
      fetchCourses(); // page restored from cache
    }
  };

  window.addEventListener("pageshow", handlePageShow);

  return () => {
    window.removeEventListener("pageshow", handlePageShow);
  };
}, []);


  // 🔥 DELETE
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this course?")) return;

    try {
      const res = await fetch(`/api/courses/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error();

      toast.success("Deleted ✅");

      // ✅ instant UI update
      setCourses((prev) => prev.filter((c) => c._id !== id));
    } catch {
      toast.error("Delete failed ❌");
    }
  };

  return (
    <div className="px-10 py-16 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="flex justify-between items-center ">
        <h1 className="md:text-3xl text-2xl font-bold text-gray-800">
          🎓 Courses Dashboard
        </h1>

        <CreateCoursePage />
      </div>

      {/* LOADING */}
      {loading && (
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-60 bg-(--color-gray-2) animate-pulse rounded-xl" />
          ))}
        </div>
      )}

      {/* EMPTY */}
      {!loading && courses.length === 0 && (
        <p className="text-gray-500 text-center mt-10">
          No courses found 🚫
        </p>
      )}

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-2">
        {courses.map((course: any) => (
          <div
            key={course._id}
            className="bg-(--color-white) rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group w-sm"
          >
            {/* IMAGE */}
            <div className="h-60 w-full overflow-hidden">
              <Image
                src={course.image || "/placeholder.jpg"}
                alt={course.title}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {course.title}
              </h2>

              <p className="text-sm text-gray-500 mb-3">
                {course.category}
              </p>

              <p className="text-xs text-gray-400 line-clamp-2">
                {course.description}
              </p>

              {/* ACTIONS */}
              <div className="flex gap-2 mt-4">
                <Link
                  href={`/admin/courses/${course._id}`}
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(course._id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}