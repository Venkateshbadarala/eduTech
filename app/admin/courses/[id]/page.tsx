"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
 import {
  Trash2,
  ImagePlus,
  Tag,
  FileText,
  Type,
  Clock,
  TrendingUp,
} from "lucide-react";
import StatsEditor from "@/Components/Admin/StatsEditor";
import SkillsEditor from "@/Components/Admin/SkillsEditor";
import ModulesEditor from "@/Components/Admin/ModulesEditor";
import PricingEditor from "@/Components/Admin/PricingEditor";
import BrochureEditor from "@/Components/Admin/BrochureEditor";
import ToolsEditor from "@/Components/Admin/ToolsEditor";
import MasteryEditor from "@/Components/Admin/MasteryEditor";

const emptyCourse = {
  title: "",
  category: "",
  subcategory:"",
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
  tools: [],
  pricing: [],
  brochure: "",
};

export default function Page() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState<any>(emptyCourse);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // 🔥 FETCH COURSE
  useEffect(() => {
    if (!id) return;

    const fetchCourse = async () => {
      try {
        const res = await fetch(`/api/course/${id}`);

        if (!res.ok) throw new Error();

        const data = await res.json();
        const course = data.course || data;
console.log("API RESPONSE:", data);
        // ✅ normalize data
        setForm({
          ...emptyCourse,
          ...course,
          stats: course.stats || [],
          skills: course.skills || [],
          modules: course.modules || [],
          tools: course.tools || [],
          mastery: course.mastery || [],
          pricing: course.pricing || [],
          brochure: course.brochure || "",
        });

        setPreview(course.image || "");
      } catch {
        toast.error("Failed to load course ❌");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

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

  // 🔥 UPDATE
  const handleUpdate = async () => {
    try {
      setSaving(true);

      const res = await fetch(`/api/course/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          brochure: form.brochure || "",
        }),
      });

      if (!res.ok) throw new Error();

      toast.success("Updated successfully ✏️");
    } catch {
      toast.error("Update failed ❌");
    } finally {
      setSaving(false);
    }
  };

  // 🔥 DELETE
  const handleDelete = async () => {
    if (!confirm("Are you sure to delete?")) return;

    await fetch(`/api/course/${id}`, {
      method: "DELETE",
    });

    toast.success("Deleted 🗑️");
    router.push("/admin");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6 pt-[6rem]">
  <Toaster />

  {/* HEADER */}
  <div className="flex justify-between items-center">
    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
      <FileText size={28} /> Edit Course
    </h1>

    <button
      onClick={handleDelete}
      className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
    >
      <Trash2 size={18} />
      Delete
    </button>
  </div>

  {/* BASIC INFO */}
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
            onChange={(e) => handleChange("subcategory", e.target.value)}
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
          onChange={(e) => handleChange("description", e.target.value)}
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

  {/* STATUS + IMAGE */}
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

      <div className="relative border-2 border-dashed rounded-xl overflow-hidden group">

        {preview ? (
          <>
            <img
              src={preview}
              className="h-70 w-full object-cover rounded"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <label className="cursor-pointer bg-white px-4 py-2 rounded-lg text-sm font-medium">
                Change Image
                <input
                  type="file"
                  onChange={handleImage}
                  className="hidden"
                />
              </label>
            </div>
          </>
        ) : (
          <label className="h-48 flex flex-col items-center justify-center text-gray-400 cursor-pointer">
            <ImagePlus size={32} />
            <span className="text-sm mt-2">Upload Image</span>
            <input type="file" onChange={handleImage} className="hidden" />
          </label>
        )}
      </div>
    </div>
  </div>

  {/* EDITORS */}
  <StatsEditor value={form.stats} onChange={(v) => handleChange("stats", v)} />
  <SkillsEditor value={form.skills} onChange={(v) => handleChange("skills", v)} />
  <ModulesEditor value={form.modules} onChange={(v) => handleChange("modules", v)} />
  <PricingEditor value={form.pricing} onChange={(v) => handleChange("pricing", v)} />

  <BrochureEditor
    value={{ file: form.brochure }}
    onChange={(v) => handleChange("brochure", v.file)}
  />

<MasteryEditor value={form.mastery} onChange={(v) => handleChange("mastery", v)} />
  <ToolsEditor value={form.tools} onChange={(v) => handleChange("tools", v)} />

  {/* ACTION BUTTON */}
  <div className="flex justify-end">
    <button
      onClick={handleUpdate}
      className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition shadow-md"
    >
      {saving ? "Updating..." : "Update Course"}
    </button>
  </div>
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