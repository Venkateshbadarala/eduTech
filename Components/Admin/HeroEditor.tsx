"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const emptyCourse = {
  title: "",
  category: "",
  description: "",
  headline: "",
  tagline: "",
  image: "",
  trend: false,
  trenddesc: "",
  duration: "",
  start: "",
};

export default function HeroEditor() {
  const { courseId } = useParams();

  const [form, setForm] = useState<any>(emptyCourse);
  const [preview, setPreview] = useState("");
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isNew, setIsNew] = useState(false);

  // 🔥 FETCH COURSE
  useEffect(() => {
    if (!courseId) return;

    fetch(`/api/course/${courseId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setForm(data);
          setPreview(data.image);
          setEditing(false);
        } else {
          // new course
          setIsNew(true);
          setEditing(true);
        }
      });
  }, [courseId]);

  // 🔹 handle input
  const handleChange = (key: string, value: any) => {
    setForm((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  // 🔹 image upload
  const handleImage = (e: any) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
      handleChange("image", reader.result);
    };

    if (file) reader.readAsDataURL(file);
  };

  // 🔥 SAVE (CREATE + UPDATE)
  const handleSave = async () => {
    setLoading(true);

    const method = isNew ? "POST" : "PATCH";

    const url = isNew
      ? "/api/course"
      : `/api/course/${courseId}`;

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    setForm(data);
    setPreview(data.image);

    setEditing(false);
    setLoading(false);
    setIsNew(false);

    alert("Saved successfully ✅");
  };

  // 🔥 CANCEL
  const handleCancel = () => {
    if (isNew) {
      setForm(emptyCourse);
      setPreview("");
    } else {
      // refetch original
      fetch(`/api/course/${courseId}`)
        .then((res) => res.json())
        .then((data) => {
          setForm(data);
          setPreview(data.image);
        });
    }

    setEditing(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          {isNew ? "Create Course" : "Hero Section"}
        </h2>

        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              {loading ? "Saving..." : "Save"}
            </button>

            <button
              onClick={handleCancel}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* FORM */}
      <div className="grid gap-4 grid-cols-2">

        <input
          disabled={!editing}
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Title"
          className="border p-2 rounded"
        />

        <input
          disabled={!editing}
          value={form.category}
          onChange={(e) => handleChange("category", e.target.value)}
          placeholder="Category"
          className="border p-2 rounded"
        />

        <textarea
          disabled={!editing}
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Description"
          className="border p-2 rounded"
        />

        <input
          disabled={!editing}
          value={form.headline}
          onChange={(e) => handleChange("headline", e.target.value)}
          placeholder="Headline"
          className="border p-2 rounded"
        />

        <input
          disabled={!editing}
          value={form.tagline}
          onChange={(e) => handleChange("tagline", e.target.value)}
          placeholder="Tagline"
          className="border p-2 rounded"
        />

        {/* TREND */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            disabled={!editing}
            checked={form.trend}
            onChange={(e) => handleChange("trend", e.target.checked)}
          />
          <span>Trending</span>
        </div>

        <input
          disabled={!editing}
          value={form.trenddesc}
          onChange={(e) => handleChange("trenddesc", e.target.value)}
          placeholder="Trend Description"
          className="border p-2 rounded"
        />

        <input
          disabled={!editing}
          value={form.duration}
          onChange={(e) => handleChange("duration", e.target.value)}
          placeholder="Duration"
          className="border p-2 rounded"
        />

        <input
          disabled={!editing}
          value={form.start}
          onChange={(e) => handleChange("start", e.target.value)}
          placeholder="Start"
          className="border p-2 rounded"
        />

        {/* IMAGE BOX */}
        <div className="border-2 border-dashed p-6 text-center rounded">
          {preview ? (
            <img
              src={preview}
              className="w-full h-48 object-cover rounded mb-3"
            />
          ) : (
            <p>Upload Image</p>
          )}

          {editing && (
            <input type="file" onChange={handleImage} />
          )}
        </div>

        

      </div>
    </div>
  );
}