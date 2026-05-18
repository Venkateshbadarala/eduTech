"use client";

import {
  Briefcase,
  Sparkles,
} from "lucide-react";

type JobRole = {
  name: string;
  image: string;
};

type Props = {
  roles?: JobRole[];
};

export default function JobRolesSection({
  roles = [],
}: Props) {
  return (
    <section className="relative ">

      {/* BG EFFECT */}
      <div className="absolute " />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">

          <div
            className="
              inline-flex items-center gap-2
              bg-blue-100 text-blue-700
              px-5 py-2 rounded-full
              text-sm font-semibold
              mb-5
            "
          >
            <Sparkles size={16} />
            Career Opportunities
          </div>

          <h2
            className="
              text-4xl md:text-6xl
              font-black
              text-gray-900
              leading-tight
            "
          >
            Explore Your
            <span className="text-secondary">
              {" "}
              Future Roles
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
            Unlock exciting career opportunities
            with industry-ready skills and become
            job-ready for top companies.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {roles.map((role, index) => (
            <div
              key={index}
              className="
                group relative
                bg-white
                rounded-[28px]
                p-6
                border border-gray-100
                shadow-lg
                hover:shadow-2xl
                transition-all duration-500
                hover:-translate-y-2
                overflow-hidden
              "
            >

              {/* GLOW */}
              <div
                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  bg-gradient-to-br
                  from-blue-50
                  via-transparent
                  to-cyan-50
                "
              />

              <div className="relative z-10">

                {/* IMAGE */}
                <div
                  className="
                    w-28 h-28
                    rounded-3xl
                    overflow-hidden
                    bg-gradient-to-br
                    from-slate-50 to-blue-50
                    mx-auto
                    shadow-inner
                    border border-gray-100
                    flex items-center justify-center
                  "
                >
                  <img
                    src={role.image}
                    alt={role.name}
                    className="
                      w-20 h-20
                      object-contain
                      group-hover:scale-110
                      transition duration-500
                    "
                  />
                </div>

                {/* NAME */}
                <div className="text-center mt-6">

                  <h3
                    className="
                      text-xl font-bold
                      text-gray-900
                      group-hover:text-blue-600
                      transition
                    "
                  >
                    {role.name}
                  </h3>

                  <div
                    className="
                      mt-4
                      inline-flex items-center gap-2
                      bg-blue-50
                      text-blue-700
                      px-4 py-2
                      rounded-full
                      text-sm font-medium
                    "
                  >
                    <Briefcase size={15} />
                    High Demand Role
                  </div>
                </div>
              </div>

              {/* BOTTOM LINE */}
              <div
                className="
                  absolute bottom-0 left-0
                  h-1 w-0
                  bg-gradient-to-r
                  from-blue-500 to-cyan-400
                  group-hover:w-full
                  transition-all duration-500
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}