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
  IndianRupee,
} from "lucide-react";

import toast from "react-hot-toast";

// ✅ MATCHES SCHEMA
type JobRole = {
  name: string;
  image: string;
  packageRange: string;
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
  packageRange: "",
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
      <div className="mb-8">
        <h2 className="text-3xl font-black text-gray-900 flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-blue-100 text-blue-600">
            <Briefcase size={24} />
          </div>

          Job Roles Editor
        </h2>

        <p className="text-gray-500 text-sm mt-3 ml-1">
          Add career opportunities students can apply for
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-7">

        {roles.map((role, index) => (
          <div
            key={index}
            className="
              relative
              bg-white
              border border-gray-100
              rounded-[30px]
              p-6
              shadow-sm
              hover:shadow-2xl
              transition-all duration-300
              overflow-hidden
              group
            "
          >

            {/* HOVER BG */}
            <div
              className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition duration-500
                bg-gradient-to-br
                from-blue-50
                via-white
                to-indigo-50
              "
            />

            {/* REMOVE BUTTON */}
            <button
              type="button"
              onClick={() =>
                removeRole(index)
              }
              className="
                absolute top-5 right-5
                text-red-500
                hover:scale-110
                transition
                z-20
              "
            >
              <CircleX size={22} />
            </button>

            {/* CONTENT */}
            <div className="relative z-10">

              {/* BADGE */}
              <div
                className="
                  inline-flex items-center gap-2
                  bg-blue-100
                  text-blue-700
                  px-4 py-1.5
                  rounded-full
                  text-xs font-bold
                  mb-6
                "
              >
                <Sparkles size={14} />
                Role #{index + 1}
              </div>

              {/* ROLE NAME */}
              <div className="mb-5">
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
                  placeholder="Data Analyst"
                  className="
                    w-full border border-gray-200
                    rounded-2xl p-3.5
                    bg-white
                    focus:ring-2
                    focus:ring-blue-400
                    outline-none
                    transition
                  "
                />
              </div>

              {/* PACKAGE */}
              <div className="mb-5">
                <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <IndianRupee size={16} />
                  Package Range
                </label>

                <input
                  type="text"
                  value={role.packageRange}
                  onChange={(e) =>
                    updateField(
                      index,
                      "packageRange",
                      e.target.value
                    )
                  }
                  placeholder="₹4 LPA - ₹12 LPA"
                  className="
                    w-full border border-gray-200
                    rounded-2xl p-3.5
                    bg-white
                    focus:ring-2
                    focus:ring-blue-400
                    outline-none
                    transition
                  "
                />
              </div>

              {/* IMAGE URL */}
              <div className="mb-5">
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
                  placeholder="https://example.com/job-role-image.png"
                  className="
                    w-full border border-gray-200
                    rounded-2xl p-3.5
                    bg-white
                    focus:ring-2
                    focus:ring-blue-400
                    outline-none
                    transition
                  "
                />
              </div>

              {/* IMAGE PREVIEW */}
              <div
                className="
                  relative
                  border border-gray-200
                  rounded-3xl
                  overflow-hidden
                  bg-gradient-to-br
                  from-gray-50
                  to-gray-100
                  h-56
                  flex items-center justify-center
                  shadow-inner
                "
              >

                {role.image ? (
                  <img
                    src={role.image}
                    alt={role.name}
                    className="
                      w-full h-full
                      object-cover
                      transition duration-300
                      group-hover:scale-105
                    "
                  />
                ) : (
                  <div className="text-center text-gray-400">
                    <div
                      className="
                        w-16 h-16
                        rounded-full
                        bg-blue-100
                        text-blue-500
                        flex items-center justify-center
                        mx-auto mb-4
                      "
                    >
                      <ImagePlus size={28} />
                    </div>

                    <p className="font-semibold text-gray-600">
                      Image Preview
                    </p>

                    <p className="text-sm mt-1">
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
          mt-8
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          hover:from-blue-700
          hover:to-indigo-700
          text-white
          px-7 py-3.5
          rounded-2xl
          shadow-lg
          hover:shadow-2xl
          transition-all duration-300
          font-semibold
        "
      >
        + Add Job Role
      </button>
    </div>
  );
}