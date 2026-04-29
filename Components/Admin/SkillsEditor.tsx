"use client";

import { CircleX } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Skill = {
  title: string;
  description: string;
  icon: string;
};

type Props = {
  value?: Skill[];
  onChange: (skills: Skill[]) => void;
};

const EMPTY_SKILL: Skill = {
  title: "",
  description: "",
  icon: "",
};

export default function SkillsEditor({ value, onChange }: Props) {
  const [skills, setSkills] = useState<Skill[]>(
    value?.length ? value : [EMPTY_SKILL]
  );

  // 🔁 sync to parent
  useEffect(() => {
    onChange(skills);
  }, [skills]);

  // 🔹 update field
  const updateSkill = (index: number, key: keyof Skill, val: string) => {
    const updated = [...skills];
    updated[index] = { ...updated[index], [key]: val };
    setSkills(updated);
  };

  // 🔹 add skill
  const addSkill = () => {
    if (skills.length >= 6) {
      toast.error("Max 6 skills allowed");
      return;
    }
    setSkills([...skills, EMPTY_SKILL]);
  };

  // 🔹 remove skill
  const removeSkill = (index: number) => {
    if (skills.length === 1) {
      toast.error("At least 1 skill required");
      return;
    }
    const updated = skills.filter((_, i) => i !== index);
    setSkills(updated);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Skills</h3>

      <div className="grid md:grid-cols-2 gap-5">

        {skills.map((skill, i) => (
          <div
            key={i}
            className="relative p-5 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
          >
            {/* ❌ remove */}
            <button
              onClick={() => removeSkill(i)}
              className="absolute top-2 right-2 text-red-500 text-sm"
            >
              <CircleX/>
            </button>

            {/* 🔢 index */}
            <p className="text-xs text-gray-400 mb-2">Skill #{i + 1}</p>

            {/* TITLE */}
            <input
              value={skill.title}
              onChange={(e) => updateSkill(i, "title", e.target.value)}
              placeholder="Skill Title (e.g. SEO Mastery)"
              className="w-full border p-2 rounded mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            {/* DESCRIPTION */}
            <textarea
              value={skill.description}
              onChange={(e) => updateSkill(i, "description", e.target.value)}
              placeholder="Skill Description"
              className="w-full border p-2 rounded mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            {/* ICON */}
            <input
              value={skill.icon}
              onChange={(e) => updateSkill(i, "icon", e.target.value)}
              placeholder="Icon URL"
              className="w-full border p-2 rounded mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            {/* 🔍 preview */}
            {skill.icon && (
              <div className="flex items-center gap-2 mt-2">
                <img
                  src={skill.icon}
                  alt="icon"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xs text-gray-500">Preview</span>
              </div>
            )}
          </div>
        ))}

      </div>

      {/* ➕ Add Button */}
      <button
        onClick={addSkill}
        className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        + Add Skill
      </button>
    </div>
  );
}