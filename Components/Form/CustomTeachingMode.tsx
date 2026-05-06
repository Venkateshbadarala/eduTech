"use client";

import { useState, useRef, useEffect } from "react";
import { Clock3, ChevronDown } from "lucide-react";

const teachingOptions = [
  "Online",
  "Offline",
  "Hybrid",
];

export default function CustomTeachingMode({
  formData,
  setFormData,
}: any) {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<any>(null);

  // ✅ CLOSE DROPDOWN OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (
      e: MouseEvent
    ) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          e.target
        )
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div className="w-full relative">
      {/* LABEL */}
      <label className="text-sm font-semibold text-gray-700 mb-2 block">
        Teaching Mode
      </label>

      {/* DROPDOWN */}
      <div
        ref={dropdownRef}
        className="relative"
      >
        {/* SELECT BUTTON */}
        <button
          type="button"
          onClick={() =>
            setOpen(!open)
          }
          className="
            w-full
            h-14

            flex
            items-center
            justify-between

            rounded-2xl
            border border-gray-200
            bg-white/70

            px-4 pl-12

            text-left
            text-sm md:text-base
            text-gray-700

            outline-none

            focus:border-(--color-primary)
            focus:ring-4
            focus:ring-blue-100

            transition
          "
        >
          {/* ICON */}
          <Clock3
            size={18}
            className="
              absolute
              left-4
              text-(--color-primary)
            "
          />

          {/* VALUE */}
          <span
            className={`truncate ${
              !formData.teachingMode
                ? "text-gray-400"
                : ""
            }`}
          >
            {formData.teachingMode ||
              "Select Teaching Mode"}
          </span>

          {/* ARROW */}
          <ChevronDown
            size={18}
            className={`transition duration-300 ${
              open
                ? "rotate-180"
                : ""
            }`}
          />
        </button>

        {/* OPTIONS */}
        {open && (
          <div
            className="
              absolute
              top-16
              left-0

              w-full
              z-50

              rounded-2xl
              border border-gray-200
              bg-white

              shadow-xl
              overflow-hidden
            "
          >
            {teachingOptions.map(
              (option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      teachingMode:
                        option,
                    });

                    setOpen(false);
                  }}
                  className="
                    w-full
                    px-4 py-4

                    text-left
                    text-sm md:text-base

                    hover:bg-blue-50
                    hover:text-(--color-primary)

                    transition
                  "
                >
                  {option}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}