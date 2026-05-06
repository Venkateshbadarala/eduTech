"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Brochure = {
  file: string;
};

type Props = {
  value?: Brochure;
  onChange: (data: Brochure) => void;
};

export default function BrochureEditor({
  value,
  onChange,
}: Props) {

  // ✅ LOCAL STATE
  const [brochure, setBrochure] =
    useState<Brochure>({
      file: "",
    });

  // ✅ LOAD INITIAL VALUE
  useEffect(() => {
    if (value?.file) {
      setBrochure({
        file: value.file,
      });
    }
  }, []);

  // ✅ URL VALIDATION
  const isValidUrl = (
    val: string
  ) => {
    return (
      val.startsWith("http://") ||
      val.startsWith("https://")
    );
  };

  // ✅ HANDLE CHANGE
  const handleChange = (
    newUrl: string
  ) => {

    const updated = {
      file: newUrl,
    };

    setBrochure(updated);

    // ✅ UPDATE PARENT
    onChange(updated);
  };

  // ✅ REMOVE
  const removeBrochure = () => {

    const updated = {
      file: "",
    };

    setBrochure(updated);

    // ✅ UPDATE PARENT
    onChange(updated);

    toast.success(
      "Brochure removed"
    );
  };

  return (
    <div className="mt-10">

      {/* HEADER */}
      <h3 className="text-xl font-bold mb-4 text-gray-800">
        📄 Course Brochure
      </h3>

      {/* CARD */}
      <div
        className="
          border rounded-xl
          p-6 bg-white
          shadow-sm
          hover:shadow-md
          transition
          space-y-4
        "
      >

        {/* INPUT */}
        <input
          type="text"
          value={brochure.file}
          placeholder="Paste PDF URL (https://...)"
          onChange={(e) =>
            handleChange(
              e.target.value
            )
          }
          className="
            w-full border p-3
            rounded-lg
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />

        {/* ERROR */}
        {brochure.file &&
          !isValidUrl(
            brochure.file
          ) && (
            <p className="text-red-500 text-sm">
              Please enter a valid URL
              (must start with
              http/https)
            </p>
          )}

        {/* PREVIEW */}
        {brochure.file &&
          isValidUrl(
            brochure.file
          ) && (
            <div
              className="
                bg-gray-50
                p-4 rounded-lg
                flex justify-between
                items-center
              "
            >

              <div>
                <p
                  className="
                    text-sm font-medium
                    text-gray-700
                  "
                >
                  📄 PDF Attached
                </p>

                <a
                  href={brochure.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-blue-600
                    text-sm
                    underline
                  "
                >
                  Preview PDF
                </a>
              </div>

              {/* REMOVE */}
              <button
                type="button"
                onClick={
                  removeBrochure
                }
                className="
                  text-red-500
                  text-sm
                  hover:underline
                "
              >
                Remove
              </button>
            </div>
          )}
      </div>
    </div>
  );
}