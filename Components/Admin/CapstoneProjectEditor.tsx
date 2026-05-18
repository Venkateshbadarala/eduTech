"use client";

import {
  CircleX,
  FolderKanban,
  Lightbulb,
  ListChecks,
  Database,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

// ✅ MATCHES MONGOOSE SCHEMA
type CapstoneProject = {
  name: string;
  whatYouDo: string;
  keySteps: string[];
  dataset: string;
};

type Props = {
  value?: CapstoneProject[];
  onChange: (
    projects: CapstoneProject[]
  ) => void;
};

// ✅ EMPTY PROJECT
const EMPTY_PROJECT: CapstoneProject = {
  name: "",
  whatYouDo: "",
  keySteps: ["", ""],
  dataset: "",
};

export default function CapstoneProjectEditor({
  value,
  onChange,
}: Props) {

  // ✅ SAFE INIT
  const [projects, setProjects] =
    useState<CapstoneProject[]>(
      value?.length
        ? value.map((item) => ({
            ...EMPTY_PROJECT,
            ...item,
            keySteps:
              item.keySteps || [
                "",
                "",
              ],
          }))
        : [EMPTY_PROJECT]
    );

  // ✅ SYNC
  useEffect(() => {
    onChange(projects);
  }, [projects]);

  // ✅ UPDATE FIELD
  const updateField = (
    index: number,
    key: keyof CapstoneProject,
    val: any
  ) => {
    const updated = [...projects];

    updated[index] = {
      ...updated[index],
      [key]: val,
    };

    setProjects(updated);
  };

  // ✅ UPDATE STEP
  const updateStep = (
    pIndex: number,
    sIndex: number,
    val: string
  ) => {
    const updated = [...projects];

    const keySteps = [
      ...(updated[pIndex]
        .keySteps || []),
    ];

    keySteps[sIndex] = val;

    updated[pIndex] = {
      ...updated[pIndex],
      keySteps,
    };

    setProjects(updated);
  };

  // ✅ ADD PROJECT
  const addProject = () => {
    setProjects([
      ...projects,
      {
        ...EMPTY_PROJECT,
      },
    ]);
  };

  // ✅ REMOVE PROJECT
  const removeProject = (
    index: number
  ) => {
    if (projects.length === 1) {
      toast.error(
        "At least 1 project required"
      );
      return;
    }

    setProjects(
      projects.filter(
        (_, i) => i !== index
      )
    );
  };

  // ✅ ADD STEP
  const addStep = (
    pIndex: number
  ) => {
    const project =
      projects[pIndex];

    if (
      project.keySteps.length >= 6
    ) {
      toast.error(
        "Maximum 6 steps allowed"
      );
      return;
    }

    const updated = [...projects];

    updated[pIndex] = {
      ...project,
      keySteps: [
        ...project.keySteps,
        "",
      ],
    };

    setProjects(updated);
  };

  // ✅ REMOVE STEP
  const removeStep = (
    pIndex: number,
    sIndex: number
  ) => {
    const project =
      projects[pIndex];

    if (
      project.keySteps.length <= 2
    ) {
      toast.error(
        "Minimum 2 steps required"
      );
      return;
    }

    const updated = [...projects];

    updated[pIndex] = {
      ...project,
      keySteps:
        project.keySteps.filter(
          (_, i) => i !== sIndex
        ),
    };

    setProjects(updated);
  };

  return (
    <div className="mt-10">

      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FolderKanban className="text-indigo-600" />
          Capstone Projects
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          Add real-world projects for
          students
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {projects.map(
          (project, pIndex) => (
            <div
              key={pIndex}
              className="
                relative
                bg-white
                border border-gray-100
                rounded-3xl
                p-6
                shadow-sm
                hover:shadow-xl
                transition-all duration-300
              "
            >

              {/* REMOVE */}
              <button
                type="button"
                onClick={() =>
                  removeProject(
                    pIndex
                  )
                }
                className="
                  absolute top-4 right-4
                  text-red-500
                  hover:scale-110
                  transition
                "
              >
                <CircleX />
              </button>

              {/* BADGE */}
              <div
                className="
                  inline-flex items-center
                  px-3 py-1
                  rounded-full
                  bg-indigo-50
                  text-indigo-600
                  text-xs font-semibold
                  mb-4
                "
              >
                Project #
                {pIndex + 1}
              </div>

              {/* NAME */}
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-2">
                  <Lightbulb size={16} />
                  Project Name
                </label>

                <input
                  type="text"
                  value={project.name}
                  onChange={(e) =>
                    updateField(
                      pIndex,
                      "name",
                      e.target.value
                    )
                  }
                  placeholder="Customer Churn Prediction"
                  className="
                    w-full border border-gray-200
                    rounded-xl p-3
                    focus:ring-2
                    focus:ring-indigo-400
                    outline-none
                  "
                />
              </div>

              {/* WHAT YOU DO */}
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-2">
                  <FolderKanban size={16} />
                  What You Do
                </label>

                <textarea
                  rows={3}
                  value={
                    project.whatYouDo
                  }
                  onChange={(e) =>
                    updateField(
                      pIndex,
                      "whatYouDo",
                      e.target.value
                    )
                  }
                  placeholder="Build a machine learning model to predict customer churn..."
                  className="
                    w-full border border-gray-200
                    rounded-xl p-3
                    focus:ring-2
                    focus:ring-indigo-400
                    outline-none resize-none
                  "
                />
              </div>

              {/* KEY STEPS */}
              <div className="mb-4">

                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <ListChecks size={16} />
                    Key Steps
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      addStep(pIndex)
                    }
                    className="
                      text-xs font-medium
                      text-indigo-600
                      hover:underline
                    "
                  >
                    + Add Step
                  </button>
                </div>

                <div className="space-y-2">

                  {(project.keySteps ||
                    []).map(
                    (
                      step,
                      sIndex
                    ) => (
                      <div
                        key={sIndex}
                        className="flex gap-2"
                      >
                        <input
                          type="text"
                          value={step}
                          onChange={(e) =>
                            updateStep(
                              pIndex,
                              sIndex,
                              e.target.value
                            )
                          }
                          placeholder={`Step ${
                            sIndex + 1
                          }`}
                          className="
                            flex-1 border border-gray-200
                            rounded-xl p-3
                            focus:ring-2
                            focus:ring-indigo-400
                            outline-none
                          "
                        />

                        <button
                          type="button"
                          onClick={() =>
                            removeStep(
                              pIndex,
                              sIndex
                            )
                          }
                          className="
                            text-red-500
                            hover:scale-110
                            transition
                          "
                        >
                          <CircleX />
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* DATASET */}
              <div>
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-2">
                  <Database size={16} />
                  Dataset
                </label>

                <input
                  type="text"
                  value={project.dataset}
                  onChange={(e) =>
                    updateField(
                      pIndex,
                      "dataset",
                      e.target.value
                    )
                  }
                  placeholder="Telco Customer Churn Dataset"
                  className="
                    w-full border border-gray-200
                    rounded-xl p-3
                    focus:ring-2
                    focus:ring-indigo-400
                    outline-none
                  "
                />
              </div>
            </div>
          )
        )}
      </div>

      {/* ADD BUTTON */}
      <button
        type="button"
        onClick={addProject}
        className="
          mt-6
          bg-indigo-600
          hover:bg-indigo-700
          text-white
          px-6 py-3
          rounded-2xl
          shadow-md
          hover:shadow-lg
          transition
        "
      >
        + Add Capstone Project
      </button>
    </div>
  );
}