"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Upload, Trash2, ImagePlus } from "lucide-react";

type Tool = {
  image: string;
};

type Props = {
  value?: Tool[];
  onChange: (tools: Tool[]) => void;
};

const EMPTY_TOOL: Tool = { image: "" };

export default function ToolsEditor({ value, onChange }: Props) {
  const [tools, setTools] = useState<Tool[]>(
    value?.length ? value : [EMPTY_TOOL, EMPTY_TOOL, EMPTY_TOOL]
  );

  useEffect(() => {
    onChange(tools);
  }, [tools]);

  // 🔹 upload image
  const updateImage = (index: number, file: File) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const updated = [...tools];
      updated[index].image = reader.result as string;
      setTools(updated);
    };

    reader.readAsDataURL(file);
  };

  // 🔹 add tool
  const addTool = () => {
    if (tools.length >= 6) {
      toast.error("Max 6 tools allowed");
      return;
    }
    setTools([...tools, EMPTY_TOOL]);
  };

  // 🔹 remove tool
  const removeTool = (index: number) => {
    if (tools.length <= 3) {
      toast.error("Minimum 3 tools required");
      return;
    }
    setTools(tools.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-12">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          🧰 Tools Used
        </h3>

        <button
          onClick={addTool}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <ImagePlus size={18} />
          Add Tool
        </button>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="group relative rounded-2xl border bg-white shadow-sm hover:shadow-lg transition overflow-hidden"
          >
            {/* REMOVE BUTTON */}
            {/* <button
              onClick={() => removeTool(i)}
              className="absolute top-2 right-2 bg-white/80 backdrop-blur p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <Trash2 size={16} className="text-red-500" />
            </button> */}

            {/* IMAGE AREA */}
            <div className="h-36 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
              {tool.image ? (
                <img
                  src={tool.image}
                  className="h-20 object-contain transition group-hover:scale-110"
                />
              ) : (
                <div className="flex flex-col items-center text-gray-400">
                  <Upload size={24} />
                  <span className="text-xs mt-1">Upload</span>
                </div>
              )}
            </div>

            {/* OVERLAY UPLOAD */}
            <label className="absolute inset-0 cursor-pointer opacity-0 group-hover:opacity-100 bg-black/40 flex items-center justify-center transition">
              <div className="bg-white px-3 py-2 rounded-lg text-sm font-medium shadow">
                Change Image
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={(e: any) =>
                  e.target.files[0] && updateImage(i, e.target.files[0])
                }
                className="hidden"
              />
            </label>

            {/* FOOTER */}
            <div className="p-3 text-center border-t">
              <p className="text-xs text-gray-500">
                Tool #{i + 1}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FOOT NOTE */}
      <p className="text-xs text-gray-400 mt-3">
        Minimum 3 tools required • Maximum 6 allowed
      </p>
    </div>
  );
}