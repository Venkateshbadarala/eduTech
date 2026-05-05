"use client";

import { CircleX } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Module = {
  title: string;
  topics: string[];
};

type Props = {
  value?: Module[];
  onChange: (modules: Module[]) => void;
};

const EMPTY_MODULE: Module = {
  title: "",
  topics: ["", ""], // ✅ min 2 topics
};

export default function ModulesEditor({ value, onChange }: Props) {
  const [modules, setModules] = useState<Module[]>(
    value?.length ? value : [EMPTY_MODULE]
  );

  // 🔁 sync to parent
  useEffect(() => {
    onChange(modules);
  }, [modules]);

  // 🔹 update module title
  const updateModuleTitle = (index: number, val: string) => {
    const updated = [...modules];
    updated[index] = { ...updated[index], title: val };
    setModules(updated);
  };

  // 🔹 update topic
  const updateTopic = (mIndex: number, tIndex: number, val: string) => {
    const updated = [...modules];
    const topics = [...updated[mIndex].topics];
    topics[tIndex] = val;

    updated[mIndex] = {
      ...updated[mIndex],
      topics,
    };

    setModules(updated);
  };

  // 🔹 add module
  const addModule = () => {
    setModules([...modules, EMPTY_MODULE]);
  };

  // 🔹 remove module
  const removeModule = (index: number) => {
    if (modules.length === 1) {
      toast.error("At least 1 module required");
      return;
    }
    setModules(modules.filter((_, i) => i !== index));
  };

  // 🔹 add topic
  const addTopic = (mIndex: number) => {
    const module = modules[mIndex];

    if (module.topics.length >= 6) {
      toast.error("Max 6 topics allowed");
      return;
    }

    const updated = [...modules];
    updated[mIndex] = {
      ...module,
      topics: [...module.topics, ""],
    };

    setModules(updated);
  };

  // 🔹 remove topic
  const removeTopic = (mIndex: number, tIndex: number) => {
    const module = modules[mIndex];

    if (module.topics.length <= 2) {
      toast.error("Minimum 2 topics required");
      return;
    }

    const updated = [...modules];
    updated[mIndex] = {
      ...module,
      topics: module.topics.filter((_, i) => i !== tIndex),
    };

    setModules(updated);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Modules</h3>

      <div className=" grid grid-cols-2  gap-4">

        {modules.map((module, mIndex) => (
          <div
            key={mIndex}
            className="relative bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition "
          >
            {/* ❌ remove module */}
            <button
              onClick={() => removeModule(mIndex)}
              className="absolute top-2 right-2 text-red-500"
            >
              <CircleX/>
            </button>

            {/* 🔢 module index */}
            <p className="text-xs text-gray-400 mb-2">
              Module #{mIndex + 1}
            </p>

            {/* TITLE */}
            <input
              value={module.title}
              onChange={(e) =>
                updateModuleTitle(mIndex, e.target.value)
              }
              placeholder="Module Title"
              className="w-full border p-2 rounded mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            {/* TOPICS */}
            <div className="space-y-2">
              {module.topics.map((topic, tIndex) => (
                <div key={tIndex} className="flex gap-1">
                  <input
                    value={topic}
                    onChange={(e) =>
                      updateTopic(mIndex, tIndex, e.target.value)
                    }
                    placeholder={`Topic ${tIndex + 1}`}
                    className="flex-1 border p-2 rounded focus:ring-2 focus:ring-indigo-400 outline-none"
                  />

                  <button
                    onClick={() => removeTopic(mIndex, tIndex)}
                    className="text-red-500"
                  >
                    <CircleX/>
                  </button>
                </div>
              ))}
            </div>

            {/* ➕ add topic */}
            <button
              onClick={() => addTopic(mIndex)}
              className="mt-3 text-sm text-indigo-600 hover:underline"
            >
              + Add Topic
            </button>
          </div>
        ))}

      </div>

      {/* ➕ add module */}
      <button
        onClick={addModule}
        className="mt-5 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        + Add Module
      </button>
    </div>
  );
}