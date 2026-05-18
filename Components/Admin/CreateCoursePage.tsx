"use client";

import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import StatsEditor from "./StatsEditor";
import SkillsEditor from "./SkillsEditor";
import ModulesEditor from "./ModulesEditor";
import PricingEditor from "./PricingEditor";
import BrochureEditor from "./BrochureEditor";
import ToolsEditor from "./ToolsEditor";
import { BadgePlus, Clock, ImagePlus, TrendingUp } from "lucide-react";
import MasteryEditor from "./MasteryEditor";
import { useRouter } from "next/navigation";
import CapstoneProjectEditor from "./CapstoneProjectEditor";
import JobRolesEditor from "./JobRolesEditor";
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
  mastery:[],
capstoneProjects:[],
jobRoles:[],
  tools: [],
  pricing: [],
  brochure: { file: "" },
};


export default function CreateCoursePage({ slug }: any) {
  const isEdit = !!slug;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<any>(emptyCourse);
  const [preview, setPreview] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
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
  // const handleSubmit = async () => {
  //   setLoading(true);

  //   const res = await fetch(isEdit ? `/api/course/${slug}` : "/api/course", {
  //     method: isEdit ? "PATCH" : "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(form),
  //   });

  //   setLoading(false);

  //   if (res.ok) {
  //     toast.success(isEdit ? "Course Updated ✏️" : "Course Created 🚀");

  //     if (!isEdit) {
  //       setForm(emptyCourse);
  //       setPreview("");
  //       setOpen(false);
  //     }
  //   } else {
  //     toast.error("Something went wrong ❌");
  //   }
  // };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const res = await fetch(isEdit ? `/api/course/${slug}` : "/api/course", {
        method: isEdit ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Something went wrong ❌");
        return;
      }

      toast.success(isEdit ? "Course Updated ✏️" : "Course Created 🚀");

      // ✅ RESET FORM
      if (!isEdit) {
        setForm(emptyCourse);
        setPreview("");
        setOpen(false);
      }

      // ✅ REFRESH FRONTEND DATA
      router.refresh();

      // ✅ OPTIONAL HARD REFRESH
      // window.location.reload();
    } catch (error) {
      console.log(error);

      toast.error("Failed to save course ❌");
    } finally {
      setLoading(false);
    }
  };

  // ✅ CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="p-10">
      {/* OPEN BUTTON */}
      {!isEdit && (
        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-white px-6  py-3 rounded-xl flex gap-2 "
        >
          <BadgePlus /> <p className="hidden md:block">Create Course</p>
        </button>
      )}

      {/* MODAL / EDIT PAGE */}
      {(open || isEdit) && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div
            className="bg-white w-[900px] max-h-[90vh] overflow-y-auto p-6 rounded-xl shadow-xl flex flex-col gap-4"
            ref={dropdownRef}
          >
            <h2 className="text-2xl font-bold mb-4">
              {isEdit ? "Edit Course" : "Create Course"}
            </h2>

            {loading && <p className="text-sm">Loading...</p>}

            {/* BASIC */}
            <div className="bg-white p-6 rounded-2xl shadow-md space-y-5">
              <h2 className="text-lg font-semibold text-gray-700">
                📘 Basic Information
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                {/* TITLE */}
                <div>
                  <label className="label">Course Title</label>
                  <div className="relative">
                    <input
                      className="input-style pl-10"
                      value={form.title || ""}
                      onChange={(e) => handleChange("title", e.target.value)}
                      placeholder="Enter course title"
                    />
                  </div>
                </div>

                {/* CATEGORY */}
                <div>
                  <label className="label">Category</label>
                  <div className="relative">
                    <input
                      className="input-style pl-10"
                      value={form.category || ""}
                      onChange={(e) => handleChange("category", e.target.value)}
                      placeholder="Enter category"
                    />
                  </div>
                </div>

                <div>
                  <label className="label">Sub-Category</label>
                  <div className="relative">
                    <input
                      className="input-style pl-10"
                      value={form.subcategory || ""}
                      onChange={(e) =>
                        handleChange("subcategory", e.target.value)
                      }
                      placeholder="Enter Sub-category"
                    />
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="md:col-span-2">
                  <label className="label">Description</label>
                  <textarea
                    className="input-style"
                    value={form.description || ""}
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    placeholder="Write course description..."
                  />
                </div>

                {/* HEADLINE */}
                <div>
                  <label className="label">Headline</label>
                  <input
                    className="input-style"
                    value={form.headline || ""}
                    onChange={(e) => handleChange("headline", e.target.value)}
                  />
                </div>

                {/* TAGLINE */}
                <div>
                  <label className="label">Tagline</label>
                  <input
                    className="input-style"
                    value={form.tagline || ""}
                    onChange={(e) => handleChange("tagline", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* STATUS */}
              <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Clock size={18} /> Status & Settings
                </h2>

                <div>
                  <label className="label">Course Status</label>
                  <select
                    className="input-style"
                    value={form.start}
                    onChange={(e) => handleChange("start", e.target.value)}
                  >
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <TrendingUp className="text-orange-500" size={18} />
                  <label className="text-gray-700 flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={form.trend}
                      onChange={(e) => handleChange("trend", e.target.checked)}
                    />
                    Trending Course
                  </label>
                </div>

                <div>
                  <label className="label">Trend Description</label>
                  <input
                    className="input-style"
                    value={form.trenddesc || ""}
                    onChange={(e) => handleChange("trenddesc", e.target.value)}
                  />
                </div>

                <div>
                  <label className="label">Duration</label>
                  <input
                    className="input-style"
                    value={form.duration || ""}
                    onChange={(e) => handleChange("duration", e.target.value)}
                  />
                </div>
              </div>

              {/* IMAGE */}
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <ImagePlus size={18} /> Course Image
                </h2>

                <input
                  value={form.image || ""}
                  onChange={(e) => handleChange("image", e.target.value)}
                  placeholder="Icon URL"
                  className="w-full border p-2 rounded mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <div className="relative border-2 border-dashed rounded-xl overflow-hidden group">
                  {form.image ? (
                    <div className="flex items-center gap-2 ">
                      <img
                        src={form.image}
                        alt="Course Preview"
                        className="h-60 w-full object-cover rounded"
                      />
                    </div>
                  ) : (
                    <div className="h-48 flex flex-col items-center justify-center text-gray-400 cursor-pointer">
                      <ImagePlus
                        size={40}
                        className="mx-auto mb-2 text-blue-400"
                      />

                      <p className="font-medium">Image Preview</p>

                      <p className="text-sm mt-1">Paste image URL to preview</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

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
            <CapstoneProjectEditor
              value={form.capstoneProjects}
              onChange={(v) => handleChange("capstoneProjects", v)}
            />
            <JobRolesEditor
              value={form.jobRoles}
              onChange={(v) => handleChange("jobRoles", v)}
            />
            <MasteryEditor
              value={form.mastery}
              onChange={(v) => handleChange("mastery", v)}
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
      <style jsx>{`
        .input-style {
          width: 100%;
          border: 1px solid #e5e7eb;
          padding: 12px;
          border-radius: 10px;
          outline: none;
          transition: all 0.2s;
          background: #fafafa;
        }

        .input-style:focus {
          border-color: #6366f1;
          background: white;
          box-shadow: 0 0 0 3px #6366f120;
        }

        .label {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 6px;
          display: block;
        }

        .icon {
          position: absolute;
          left: 10px;
          top: 12px;
          color: #9ca3af;
        }
      `}</style>
    </div>
  );
}
