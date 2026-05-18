"use client";

import {
  Database,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

type CapstoneProject = {
  name: string;
  whatYouDo: string;
  keySteps: string[];
  dataset: string;
};

type Props = {
  projects?: CapstoneProject[];
};

export default function CapstoneProjectsSection({
  projects = [],
}: Props) {
  return (
    <section className="relative">

      {/* BG */}
      <div className="absolute inset-0 " />

      {/* BLUR */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">

          <div
            className="
              inline-flex items-center gap-2
              bg-sky-100 text-sky-700
              px-5 py-2 rounded-full
              text-sm font-semibold
              mb-5
            "
          >
            <Sparkles size={16} />
            Industry Capstone Projects
          </div>

          <h2
            className="
              text-4xl md:text-6xl
              font-black
              text-gray-900
              leading-tight
            "
          >
            Build Real World
            <span className="text-secondary">
              {" "}
              Industry Projects
            </span>
          </h2>

          <p
            className="
              text-gray-500
              max-w-3xl
              mx-auto
              mt-6
              text-lg
              leading-relaxed
            "
          >
            Work on advanced capstone projects
            designed to simulate real business
            challenges and gain practical
            industry-level experience.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group relative
                bg-white/80
                backdrop-blur-xl
                border border-white/40
                rounded-[32px]
                p-8
                shadow-xl
                hover:shadow-2xl
                transition-all duration-500
                hover:-translate-y-2
                overflow-hidden
              "
            >

              {/* TOP GLOW */}
              <div
                className="
                  absolute top-0 right-0
                  w-52 h-52
                  bg-sky-100/40
                  rounded-full
                  blur-3xl
                "
              />

              {/* CONTENT */}
              <div className="relative z-10">

                {/* BADGE */}
                <div
                  className="
                    inline-flex items-center gap-2
                    bg-sky-50
                    text-sky-700
                    px-4 py-2
                    rounded-full
                    text-sm font-semibold
                    mb-6
                  "
                >
                  🚀 Capstone #{index + 1}
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-3xl font-black
                    text-gray-900
                    mb-4
                    group-hover:text-sky-600
                    transition
                  "
                >
                  {project.name}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-gray-600
                    leading-relaxed
                    text-base
                    mb-8
                  "
                >
                  {project.whatYouDo}
                </p>

                {/* STEPS */}
                <div className="space-y-4 mb-8">

                  <h4
                    className="
                      text-lg font-bold
                      text-gray-800
                    "
                  >
                    Key Steps
                  </h4>

                  {project.keySteps?.map(
                    (step, i) => (
                      <div
                        key={i}
                        className="
                          flex items-start gap-3
                        "
                      >
                        <div
                          className="
                            w-7 h-7
                            rounded-full
                            bg-sky-100
                            flex items-center justify-center
                            shrink-0 mt-0.5
                          "
                        >
                          <CheckCircle2
                            size={16}
                            className="text-sky-600"
                          />
                        </div>

                        <p className="text-gray-600">
                          {step}
                        </p>
                      </div>
                    )
                  )}
                </div>

                {/* DATASET */}
                <div
                  className="
                    flex items-center justify-between
                    bg-gradient-to-r
                    from-sky-50 to-cyan-50
                    border border-sky-100
                    rounded-2xl
                    p-5
                  "
                >
                  <div className="flex gap-3">
                    <div
                      className="
                        w-12 h-12
                        rounded-xl
                        bg-white
                        flex items-center justify-center
                        shadow-sm
                      "
                    >
                      <Database className="text-sky-600" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Dataset
                      </p>

                      <p className="font-semibold text-gray-800">
                        {project.dataset}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="text-sky-500 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}