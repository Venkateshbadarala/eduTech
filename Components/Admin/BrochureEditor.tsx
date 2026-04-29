"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Brochure = {
  file: string;
};

type Props = {
  value?: any; // 🔥 allow both string OR object
  onChange: (data: Brochure) => void;
};

export default function BrochureEditor({ value, onChange }: Props) {
  // ✅ normalize incoming value
  const initialUrl =
    typeof value === "string"
      ? value
      : typeof value?.file === "string"
      ? value.file
      : "";

  const [url, setUrl] = useState<string>(initialUrl);

  // 🔁 sync with parent
  useEffect(() => {
    onChange({ file: url || "" });
  }, [url]);

  // 🔹 SAFE validation
  const isValidUrl = (val: any) => {
    if (typeof val !== "string") return false; // ✅ prevent crash
    return val.startsWith("http://") || val.startsWith("https://");
  };

  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold mb-4 text-gray-800">
        📄 Course Brochure
      </h3>

      <div className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition space-y-4">

        {/* 🔗 INPUT */}
        <input
          type="text"
          value={url}
          placeholder="Paste PDF URL (https://...)"
          onChange={(e) => setUrl(e.target.value)}
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* ⚠️ VALIDATION */}
        {url && !isValidUrl(url) && (
          <p className="text-red-500 text-sm">
            Please enter a valid URL (must start with http/https)
          </p>
        )}

        {/* ✅ PREVIEW */}
        {url && isValidUrl(url) && (
          <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-700">
                📄 PDF Attached
              </p>

              <a
                href={url}
                target="_blank"
                className="text-blue-600 text-sm underline"
              >
                Preview PDF
              </a>
            </div>

            <button
              onClick={() => {
                setUrl("");
                toast("Removed");
              }}
              className="text-red-500 text-sm hover:underline"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}