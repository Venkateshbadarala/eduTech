"use client";

import {
  FileCheck,
  ShieldAlert,
  Ban,
  Scale,
  Sparkles,
  BookOpen,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

export default function Page() {
  const sections = [
    {
      icon: <Scale size={26} />,
      title: "Acceptance of Terms",
      desc: "By accessing or using our platform, you agree to comply with these Terms & Conditions and all applicable laws and regulations.",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
    },
    {
      icon: <ShieldAlert size={26} />,
      title: "User Responsibilities",
      desc: "Users must provide accurate information, maintain account security, and respect the learning environment and instructors.",
      points: [
        "Provide accurate registration details",
        "Maintain account confidentiality",
        "Respect instructors & students",
        "Avoid misuse of platform services",
      ],
      color: "from-orange-500 to-pink-500",
      bg: "bg-orange-50",
    },
    {
      icon: <Ban size={26} />,
      title: "Restrictions",
      desc: "Unauthorized redistribution, copying, reselling, or misuse of course materials is strictly prohibited.",
      color: "from-red-500 to-rose-500",
      bg: "bg-red-50",
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-(--color-primary-light)/20 via-white to-(--color-secondary)/10 py-24 px-4">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-(--color-primary)/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-(--color-secondary)/20 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* 🔥 HERO */}
        <div className="text-center mb-20">

          <div className="
            inline-flex items-center gap-2
            px-6 py-3 rounded-full
            bg-white shadow-lg border border-gray-100
            text-(--color-secondary)
            font-semibold mb-6
          ">
            <Sparkles size={18} />
            Legal Information
          </div>

          <h1 className="
            text-5xl md:text-7xl
            font-black
            leading-tight
            text-(--color-black-1)
          ">
            Terms &
            <span className="
              bg-gradient-to-r
              from-(--color-primary)
              to-(--color-secondary)
              text-transparent bg-clip-text
            ">
              {" "}Conditions
            </span>
          </h1>

          <p className="
            text-(--color-gray-2)
            mt-6
            text-lg md:text-xl
            max-w-3xl mx-auto
            leading-relaxed
          ">
            Please review these Terms & Conditions carefully before using
            Cornixe educational services, learning resources, and platform.
          </p>

          {/* 🔥 MINI STATS */}
          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <div className="
              bg-white/80 backdrop-blur-xl
              border border-white/50
              rounded-2xl px-6 py-4
              shadow-lg
              flex items-center gap-3
            ">
              <BookOpen className="text-(--color-primary)" />
              <div className="text-left">
                <h3 className="font-bold text-lg">100+</h3>
                <p className="text-sm text-gray-500">Courses</p>
              </div>
            </div>

            <div className="
              bg-white/80 backdrop-blur-xl
              border border-white/50
              rounded-2xl px-6 py-4
              shadow-lg
              flex items-center gap-3
            ">
              <GraduationCap className="text-(--color-secondary)" />
              <div className="text-left">
                <h3 className="font-bold text-lg">10K+</h3>
                <p className="text-sm text-gray-500">Learners</p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 TERMS CARDS */}
        <div className="grid gap-8">

          {sections.map((item, i) => (
            <div
              key={i}
              className="
                group
                relative overflow-hidden
                bg-white/90 backdrop-blur-xl
                border border-white/50
                rounded-[32px]
                p-8 md:p-10
                shadow-[0_10px_60px_rgba(0,0,0,0.08)]
                hover:-translate-y-1
                transition-all duration-300
              "
            >

              {/* TOP BAR */}
              <div className={`
                absolute top-0 left-0
                h-2 w-full
                bg-gradient-to-r ${item.color}
              `} />

              <div className="flex flex-col md:flex-row md:items-start gap-6">

                {/* ICON */}
                <div className={`
                  min-w-[72px] h-[72px]
                  rounded-2xl
                  flex items-center justify-center
                  text-white shadow-lg
                  bg-gradient-to-br ${item.color}
                `}>
                  {item.icon}
                </div>

                {/* CONTENT */}
                <div className="flex-1">

                  <h2 className="
                    text-2xl md:text-3xl
                    font-bold
                    text-(--color-black-1)
                    mb-4
                  ">
                    {item.title}
                  </h2>

                  <p className="
                    text-(--color-gray-2)
                    leading-relaxed
                    text-base md:text-lg
                  ">
                    {item.desc}
                  </p>

                  {/* POINTS */}
                  {item.points && (
                    <div className="grid sm:grid-cols-2 gap-4 mt-6">

                      {item.points.map((point, idx) => (
                        <div
                          key={idx}
                          className={`
                            flex items-center gap-3
                            ${item.bg}
                            rounded-2xl
                            px-4 py-3
                          `}
                        >
                          <ChevronRight
                            size={18}
                            className="text-(--color-primary)"
                          />

                          <p className="text-sm font-medium text-gray-700">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 BOTTOM CTA */}
        <div className="
          relative overflow-hidden
          mt-16
          rounded-[36px]
          bg-gradient-to-r
          from-(--color-primary)
          to-(--color-secondary)
          p-10 md:p-14
          text-white
          shadow-[0_20px_80px_rgba(0,0,0,0.15)]
        ">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">

            <div className="
              inline-flex items-center gap-2
              bg-white/20
              px-4 py-2 rounded-full
              backdrop-blur-md
              mb-5
            ">
              <FileCheck size={18} />
              Updated Policies
            </div>

            <h2 className="
              text-3xl md:text-5xl
              font-black
              leading-tight
            ">
              Updates to Terms
            </h2>

            <p className="
              mt-5
              text-white/90
              text-lg
              max-w-3xl
              leading-relaxed
            ">
              We may update these Terms & Conditions periodically to improve
              our services and maintain legal compliance. Continued use of our
              platform indicates acceptance of the latest terms.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="
                bg-white text-(--color-primary)
                px-6 py-3 rounded-2xl
                font-semibold
                hover:scale-105
                transition
                shadow-lg
              ">
               support@cornixe.com
              </button>

              <button className="
                border border-white/30
                bg-white/10 backdrop-blur-md
                px-6 py-3 rounded-2xl
                font-semibold
                hover:bg-white/20
                transition
              ">
                +91 9108126243
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}