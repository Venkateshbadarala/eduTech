"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

import { courses } from "./Courses";

export default function CourseSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <div className="flex gap-6  ">

      {/* 🔥 Sidebar mounted here */}
      <Sidebar onSelectCategory={setSelectedCategory} />


    </div>
  );
}