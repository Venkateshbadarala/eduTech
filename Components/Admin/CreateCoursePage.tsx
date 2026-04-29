"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import StatsEditor from "./StatsEditor";
import SkillsEditor from "./SkillsEditor";
import ModulesEditor from "./ModulesEditor";
import PricingEditor from "./PricingEditor";
import BrochureEditor from "./BrochureEditor";
import ToolsEditor from "./ToolsEditor";

const emptyCourse = {
  title: "",
  category: "",
  description: "",
  image: "",
  headline: "",
  tagline: "",
  trend: false,
  trenddesc: "",
  duration: "",
  start: "ongoing",
  stats: [],
  skills: [],
  modules: [],
  tools: [],
  pricing: [],
  brochure: { file: "" },
};
export default function CreateCoursePage({ slug }: any) {
  const isEdit = !!slug;

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<any>(emptyCourse);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 FETCH COURSE (EDIT MODE)
 useEffect(() => {
  if (!slug) return;

  const fetchCourse = async () => {
    try {
      setLoading(true);

      const res = await fetch(`/api/courses/${slug}`);

      if (!res.ok) {
        throw new Error("Failed to fetch course");
      }

      const data = await res.json();

      // 🔥 If your API returns { course: {...} }
      const course = data.course || data;
console.log("API RESPONSE:", data);
      setForm(course);
      setPreview(course.image || "");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  fetchCourse();
}, [slug]);

  // 🔹 HANDLE CHANGE
  const handleChange = (key: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [key]: value }));
  };

  // 🔹 IMAGE
  const handleImage = (e: any) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
      handleChange("image", reader.result);
    };

    reader.readAsDataURL(file);
  };

  // 🔥 SUBMIT (CREATE / UPDATE)
  const handleSubmit = async () => {
    setLoading(true);

    const res = await fetch(isEdit ? `/api/course/${slug}` : "/api/course", {
      method: isEdit ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      toast.success(isEdit ? "Course Updated ✏️" : "Course Created 🚀");

      if (!isEdit) {
        setForm(emptyCourse);
        setPreview("");
        setOpen(false);
      }
    } else {
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <div className="p-10">
      <Toaster />

      {/* OPEN BUTTON */}
      {!isEdit && (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          + Create Course
        </button>
      )}

      {/* MODAL / EDIT PAGE */}
      {(open || isEdit) && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white w-[900px] max-h-[90vh] overflow-y-auto p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              {isEdit ? "Edit Course" : "Create Course"}
            </h2>

            {loading && <p className="text-sm">Loading...</p>}

            {/* BASIC */}
            <input
              placeholder="Title"
              className="input"
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />

            <input
              placeholder="Category"
              className="input"
              value={form.category}
              onChange={(e) => handleChange("category", e.target.value)}
            />

            <textarea
              placeholder="Description"
              className="input"
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />

            <input
              placeholder="Headline"
              className="input"
              value={form.headline}
              onChange={(e) => handleChange("headline", e.target.value)}
            />

            <input
              placeholder="Tagline"
              className="input"
              value={form.tagline}
              onChange={(e) => handleChange("tagline", e.target.value)}
            />

            {/* START */}
            <select
              className="input"
              value={form.start}
              onChange={(e) => handleChange("start", e.target.value)}
            >
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>

            {/* IMAGE */}
            <div className="border p-4 rounded">
              {preview && <img src={preview} className="h-40 mb-2 rounded" />}
              <input type="file" onChange={handleImage} />
            </div>

            {/* TREND */}
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                checked={form.trend}
                onChange={(e) => handleChange("trend", e.target.checked)}
              />
              Trending
            </div>

            <input
              placeholder="Trend Description"
              className="input"
              value={form.trenddesc}
              onChange={(e) => handleChange("trenddesc", e.target.value)}
            />

            <input
              placeholder="Duration"
              className="input"
              value={form.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
            />

            {/* 🔥 CHILD EDITORS */}
            <StatsEditor
              value={form.stats}
              onChange={(v) => handleChange("stats", v)}
            />
            <SkillsEditor
              value={form.skills}
              onChange={(v) => handleChange("skills", v)}
            />
            <ModulesEditor
              value={form.modules}
              onChange={(v) => handleChange("modules", v)}
            />
            <PricingEditor
              value={form.pricing}
              onChange={(v) => handleChange("pricing", v)}
            />
            <BrochureEditor
              value={form.brochure}
              onChange={(v) => handleChange("brochure", v)}
            />
            <ToolsEditor
              value={form.tools}
              onChange={(v) => handleChange("tools", v)}
            />

            {/* ACTIONS */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                {loading ? "Saving..." : isEdit ? "Update" : "Save"}
              </button>

              {!isEdit && (
                <button
                  onClick={() => setOpen(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
