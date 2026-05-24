"use client";

import {
  Briefcase,
  Sparkles,
  IndianRupee,
  Package,
  Package2,
} from "lucide-react";

type JobRole = {
  name: string;
  image: string;
  packageRange?: string;
};

type Props = {
  roles?: JobRole[];
};

export default function JobRolesSection({
  roles = [],
}: Props) {
  return (
    <section className="relative py-20 overflow-hidden">

      {/* BG EFFECTS */}
      <div
        className="
          absolute top-0 left-0
          w-96 h-96
          bg-blue-100/40
          blur-3xl rounded-full
        "
      />

      <div
        className="
          absolute bottom-0 right-0
          w-96 h-96
          bg-purple-100/40
          blur-3xl rounded-full
        "
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">

          <div
            className="
              inline-flex items-center gap-2
            bg-light text-primary
              px-5 py-2 rounded-full
              text-sm font-semibold
              mb-5
              border border-blue-100
            "
          >
            <Sparkles size={16} />
            Career Opportunities
          </div>

          <h2
            className="
              text-4xl md:text-6xl
              font-black
              leading-tight
              tracking-tight
          
            "
          >
            Explore Your{" "}
            <span
              className="
               text-secondary
                
              "
            >
              Future Roles
            </span>
          </h2>

          <p
            className="
              text-gray-500 mt-5
              max-w-3xl mx-auto
              text-base md:text-lg
              leading-relaxed
            "
          >
            Unlock exciting career opportunities
            with industry-ready skills and become
            job-ready for top companies worldwide.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {roles.map((role, index) => (
            <div
              key={index}
              className="
                group relative
                bg-white/90
                backdrop-blur-xl
                rounded-[32px]
                p-7
                border border-white/40
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                hover:shadow-[0_20px_60px_rgba(29,161,242,0.15)]
                transition-all duration-500
                hover:-translate-y-2
                overflow-hidden
              "
            >

              {/* HOVER GRADIENT */}
              <div
                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br
                  from-[#EAF6FF]
                  via-transparent
                  to-[#F5EEFF]
                "
              />

              {/* TOP BORDER */}
              <div
                className="
                  absolute top-0 left-0
                  h-1 w-0
                  group-hover:w-full
                  bg-gradient-to-r
                  from-[#1DA1F2]
                  via-[#5B8BF5]
                  to-[#7C3AED]
                  transition-all duration-500
                "
              />

              <div className="relative z-10">

                {/* IMAGE */}
                <div
                  className="
                    w-28 h-28
                    rounded-[28px]
                    overflow-hidden
                    bg-gradient-to-br
                    from-[#F8FBFF]
                    to-[#EEF5FF]
                    mx-auto
                    border border-blue-50
                    shadow-inner
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

                {/* CONTENT */}
                <div className="text-center mt-6">

                  {/* ROLE NAME */}
                  <h3
                    className="
                      text-xl font-bold
                      text-[#0B1F5E]
                      group-hover:text-[#1DA1F2]
                      transition
                      leading-snug
                    "
                  >
                    {role.name}
                  </h3>

                  {/* PACKAGE */}
                  <div
                    className="
                      mt-4
                      inline-flex items-center gap-2
                     
                      px-4 py-2
                      rounded-full
                      text-sm font-semibold
                    "
                  >
                   <Package size={20}/>

                    {role.packageRange ||
                      "₹4 LPA - ₹12 LPA"}
                  </div>

                  {/* DEMAND */}
                  <div
                    className="
                      mt-3
                      inline-flex items-center gap-2
                     bg-primary
                      px-4 py-2
                      rounded-full
                      text-white
                      text-sm font-medium
                    "
                  >
                    <Briefcase size={15} />
                    High Demand Role
                  </div>
                </div>
              </div>

              {/* CORNER DOT */}
              <div
                className="
                  absolute -bottom-10 -right-10
                  w-32 h-32
                  rounded-full
                  bg-gradient-to-br
                  from-[#1DA1F2]/10
                  to-[#7C3AED]/10
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}