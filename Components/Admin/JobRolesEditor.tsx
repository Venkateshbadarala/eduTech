"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Briefcase,
  CircleX,
  Sparkles,
  ImagePlus,
} from "lucide-react";

import toast from "react-hot-toast";

// ✅ MATCHES SCHEMA
type JobRole = {
  name: string;
  image: string;
};

type Props = {
  value?: JobRole[];
  onChange: (
    roles: JobRole[]
  ) => void;
};

// ✅ EMPTY ROLE
const EMPTY_ROLE: JobRole = {
  name: "",
  image: "",
};

export default function JobRolesEditor({
  value,
  onChange,
}: Props) {

  // ✅ SAFE INIT
  const [roles, setRoles] =
    useState<JobRole[]>(
      value?.length
        ? value.map((item) => ({
            ...EMPTY_ROLE,
            ...item,
          }))
        : [EMPTY_ROLE]
    );

  // 🔁 SYNC TO PARENT
  useEffect(() => {
    onChange(roles);
  }, [roles]);

  // ✅ UPDATE FIELD
  const updateField = (
    index: number,
    key: keyof JobRole,
    val: string
  ) => {
    const updated = [...roles];

    updated[index] = {
      ...updated[index],
      [key]: val,
    };

    setRoles(updated);
  };

  // ✅ ADD ROLE
  const addRole = () => {
    if (roles.length >= 12) {
      toast.error(
        "Maximum 12 job roles allowed"
      );
      return;
    }

    setRoles([
      ...roles,
      {
        ...EMPTY_ROLE,
      },
    ]);
  };

  // ✅ REMOVE ROLE
  const removeRole = (
    index: number
  ) => {
    if (roles.length === 1) {
      toast.error(
        "At least 1 role required"
      );
      return;
    }

    setRoles(
      roles.filter(
        (_, i) => i !== index
      )
    );
  };

  return (
    <div className="mt-10">

      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Briefcase className="text-blue-600" />
          Job Roles Editor
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          Add career opportunities
          students can apply for
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {roles.map((role, index) => (
          <div
            key={index}
            className="
              relative
              bg-white
              border border-gray-100
              rounded-3xl
              p-6
              shadow-sm
              hover:shadow-xl
              transition-all duration-300
              overflow-hidden
            "
          >

            {/* BG EFFECT */}
            <div
              className="
                absolute inset-0
                opacity-0 hover:opacity-100
                transition
                bg-gradient-to-br
                from-blue-50
                via-transparent
                to-indigo-50
              "
            />

            {/* REMOVE */}
            <button
              type="button"
              onClick={() =>
                removeRole(index)
              }
              className="
                absolute top-4 right-4
                text-red-500
                hover:scale-110
                transition
                z-10
              "
            >
              <CircleX />
            </button>

            {/* CONTENT */}
            <div className="relative z-10">

              {/* BADGE */}
              <div
                className="
                  inline-flex items-center gap-2
                  bg-blue-50
                  text-blue-600
                  px-3 py-1
                  rounded-full
                  text-xs font-semibold
                  mb-5
                "
              >
                <Sparkles size={14} />
                Role #{index + 1}
              </div>

              {/* ROLE NAME */}
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Job Role Name
                </label>

                <input
                  type="text"
                  value={role.name}
                  onChange={(e) =>
                    updateField(
                      index,
                      "name",
                      e.target.value
                    )
                  }
                  placeholder="Digital Marketing Executive"
                  className="
                    w-full border border-gray-200
                    rounded-2xl p-3
                    focus:ring-2
                    focus:ring-blue-400
                    outline-none
                  "
                />
              </div>

              {/* IMAGE URL */}
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <ImagePlus size={16} />
                  Image URL
                </label>

                <input
                  type="text"
                  value={role.image}
                  onChange={(e) =>
                    updateField(
                      index,
                      "image",
                      e.target.value
                    )
                  }
                  placeholder="https://example.com/image.png"
                  className="
                    w-full border border-gray-200
                    rounded-2xl p-3
                    focus:ring-2
                    focus:ring-blue-400
                    outline-none
                  "
                />
              </div>

              {/* IMAGE PREVIEW */}
              <div
                className="
                  border-2 border-dashed
                  border-gray-200
                  rounded-2xl
                  overflow-hidden
                  bg-gray-50
                  h-52
                  flex items-center justify-center
                "
              >
                {role.image ? (
                  <img
                    src={role.image}
                    alt={role.name}
                    className="
                      w-full h-full
                      object-contain    
                    "
                  />
                ) : (
                  <div className="text-center text-gray-400">
                    <ImagePlus
                      size={34}
                      className="mx-auto mb-2"
                    />

                    <p className="font-medium">
                      Image Preview
                    </p>

                    <p className="text-sm">
                      Paste image URL
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ADD BUTTON */}
      <button
        type="button"
        onClick={addRole}
        className="
          mt-6
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          hover:from-blue-700
          hover:to-indigo-700
          text-white
          px-6 py-3
          rounded-2xl
          shadow-lg
          hover:shadow-xl
          transition
          font-medium
        "
      >
        + Add Job Role
      </button>
    </div>
  );
}