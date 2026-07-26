"use client";

import { motion } from "framer-motion";

import {
  PiCpuFill,
  PiChartBarFill,
  PiPaletteFill,
  PiFlaskFill,
  PiCarFill,
  PiCloudFill,
  PiArrowRightBold,
  PiSparkleFill,
} from "react-icons/pi";

export default function GoldenCareers() {

  const careers = [
    {
      title: "Technology & Engineering",
      desc: "Explore cutting-edge fields like AI, cybersecurity, data science, and IoT.",
      icon: PiCpuFill,
    },

    {
      title: "Business & Finance",
      desc: "Excel in digital marketing, business analytics, and financial planning.",
      icon: PiChartBarFill,
    },

    {
      title: "Design & Development",
      desc: "Dive into web development, UI/UX design, and graphic design.",
      icon: PiPaletteFill,
    },

    {
      title: "Science & Research",
      desc: "Engage in nanotechnology, genetic engineering, and psychology research.",
      icon: PiFlaskFill,
    },

    {
      title: "Automotive & Mechanical",
      desc: "Innovate in hybrid vehicles and advanced mechanical systems.",
      icon: PiCarFill,
    },

    {
      title: "Cloud & Specialized Tech",
      desc: "Master cloud computing, embedded systems, robotics, and automation.",
      icon: PiCloudFill,
    },
  ];

  const courses = [
    "Artificial Intelligence",
    "Cyber Security",
    "Data Science",
    "Machine Learning",
    "Web Development",
    "UI/UX Design",
    "IoT & Robotics",
    "Cloud Computing",
    "Embedded Systems",
    "Hybrid & EV",
    "Auto CAD",
    "Fashion Designing",
    "Digital Marketing",
  ];

  return (
    <section
      className="
        relative overflow-hidden
        py-24 px-6
        
      "
    >

      {/* 🔥 GRID */}
      <div
        className="
          absolute inset-0 opacity-30
          bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* 🔥 BLURS */}
      <div className="absolute top-20 left-20 w-52 h-52 bg-(--color-primary)/20 rounded-full blur-3xl" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-(--color-secondary)/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* 🔥 TOP TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center"
        >

          <div
            className="
              inline-flex items-center gap-3
              border border-white/10
              bg-white
              shadow-[0_15px_60px_rgba(0,0,0,0.15)]
              backdrop-blur-xl
              rounded-full
              px-6 py-3
            "
          >

            <PiSparkleFill
              className="text-(--color-primary)"
              size={18}
            />

            <span
              className="
                text-(--color-black-1)
                font-medium tracking-wide
              "
            >
              GOLDEN PASS CAREERS
            </span>
          </div>

          <h2
            className="
              mt-8
              text-4xl md:text-6xl
              font-black
              leading-tight
              text-(--color-black-1)
            "
          >
            Careers You Can Unlock
            <br />

            <span
              className="
                bg-gradient-to-r
                from-(--color-primary)
               
                to-(--color-secondary)
                text-transparent bg-clip-text
              "
            >
              With Golden Pass
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-3xl mx-auto
              text-lg
              leading-relaxed
              text-(--color-gray-2)
            "
          >
            Access diverse career paths across
            technology, business, design, science,
            and engineering with premium learning
            and placement-focused programs.
          </p>
        </motion.div>

        {/* 🔥 CAREER TIMELINE */}
        <div
          className="
            relative mt-24
            grid lg:grid-cols-2
            gap-8
          "
        >

          {/* CENTER LINE */}
          <div
            className="
              hidden lg:block
              absolute left-1/2 top-0
              -translate-x-1/2
              w-[2px] h-full
              bg-gradient-to-b
              from-(--color-primary)
             
              to-(--color-secondary)
              opacity-40
            "
          />

          {careers.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`
                  relative
                  ${
                    index % 2 === 0
                      ? "lg:pr-16"
                      : "lg:pl-16"
                  }
                `}
              >

                {/* DOT */}
                <div
                  className="
                    hidden lg:block
                    absolute top-10
                    left-1/2
                    -translate-x-1/2
                    w-5 h-5
                    rounded-full
                    bg-gradient-to-r
                    from-(--color-primary)
                    to-(--color-secondary)
                    border-4 border-(--color-light)
                    z-20
                  "
                />

                {/* CARD */}
                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    relative overflow-hidden
                    rounded-3xl
                    border border-white/10
                    bg-white
                    backdrop-blur-2xl
                    p-8
                    shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                  "
                >

                  {/* HOVER */}
                  <div
                    className="
                      absolute inset-0
                      opacity-0 hover:opacity-100
                      transition duration-500
                      bg-gradient-to-br
                      from-(--color-primary)/5
                      to-(--color-secondary)/5
                    "
                  />

                  <div className="relative z-10">

                    {/* ICON */}
                    <div
                      className="
                        w-16 h-16
                        rounded-2xl
                        bg-gradient-to-br
                        from-(--color-primary)
                        to-(--color-secondary)
                        flex items-center justify-center
                        shadow-lg
                      "
                    >

                      <Icon
                        size={30}
                        className="text-white"
                      />
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        mt-6
                        text-2xl
                        font-bold
                        text-(--color-black-1)
                      "
                    >
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p
                      className="
                        mt-4
                        leading-relaxed
                        text-(--color-gray-2)
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* 🔥 COURSES */}
        <div className="mt-32 text-center">

          <h2
            className="
              text-4xl md:text-5xl
              font-black
              text-(--color-black-1)
            "
          >
            Explore The{" "}

            <span
              className="
                bg-gradient-to-r
                from-(--color-primary)
                to-(--color-secondary)
                text-transparent bg-clip-text
              "
            >
              Golden Pass
            </span>
          </h2>

          <p
            className="
              mt-5
              text-lg
              text-(--color-gray-2)
            "
          >
            Featuring 20+ Premium Career Programs
          </p>

          {/* TAGS */}
          <div
            className="
              mt-5
              flex items-center justify-center
              gap-4 flex-wrap
            "
          >

            <div
              className="
                px-4 py-2
                rounded-full
                bg-gradient-to-r
                      from-(--color-primary)
                      to-(--color-secondary)
                shadow-[0_15px_60px_rgba(0,0,0,0.15)]
                border border-white/10
                backdrop-blur-xl
                text-sm
                text-white
              "
            >
              Mentor Led
            </div>

            <div
              className="
                px-4 py-2
                rounded-full
                bg-gradient-to-r
                      from-(--color-primary)
                      to-(--color-secondary)
                shadow-[0_15px_60px_rgba(0,0,0,0.15)]
                border border-white/10
                backdrop-blur-xl
                text-sm
                text-white
              "
            >
              Lifetime Access
            </div>
          </div>

          {/* COURSE GRID */}
          <div
            className="
              mt-16
              grid sm:grid-cols-2
              lg:grid-cols-4
              gap-5
            "
          >

            {courses.map((course, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative overflow-hidden
                  rounded-3xl
                  border border-white/10
                  bg-white
                  backdrop-blur-2xl
                  p-6
                  text-left
                  shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                "
              >

                {/* HOVER */}
                <div
                  className="
                    absolute inset-0
                    opacity-0 group-hover:opacity-100
                    transition duration-500
                    bg-gradient-to-br
                    from-(--color-primary)/5
                    to-(--color-secondary)/5
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-gradient-to-r
                      from-(--color-primary)
                      to-(--color-secondary)
                      flex items-center justify-center
                    "
                  >

                    <PiSparkleFill
                      size={24}
                      className="text-white"
                    />
                  </div>

                  <h3
                    className="
                      mt-6
                      text-xl
                      font-bold
                      text-(--color-black-1)
                    "
                  >
                    {course}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      text-(--color-gray-2)
                    "
                  >
                    Worth ₹8500
                  </p>

                  {/* <button
                    className="
                      mt-6
                      w-11 h-11
                      rounded-2xl
                      bg-(--color-black-1)
                      text-white
                      flex items-center justify-center
                      group-hover:translate-x-1
                      transition
                    "
                  >

                    <PiArrowRightBold size={18} />
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 🔥 BOTTOM CTA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              relative mt-20
              
              rounded-[36px]
              overflow-hidden
              border border-white/10
              bg-white/10
              backdrop-blur-2xl
              p-10
            "
          >

            {/* TOP LINE */}
            <div
              className="
                absolute top-0 left-0
                w-full h-1
                bg-gradient-to-r
                from-(--color-primary)
               
                to-(--color-secondary)
              "
            />

            <h3
              className="
              text-xl md:text-4xl lg:text-5xl
                font-black
                text-(--color-black-1)
              "
            >
              20+ Courses Worth{" "}

              <span className="line-through text-(--color-gray-2)">
                ₹1,20,000
              </span>
            </h3>

            <p
              className="
                mt-4
                text-xl md:text-4xl 
                font-bold
                bg-gradient-to-r
                from-(--color-primary)
                to-(--color-secondary)
                text-transparent bg-clip-text
              "
            >
              Available At Just ₹24,999/-
            </p>

            <button
              className="
                mt-8
                group
                inline-flex items-center gap-3
                px-10 py-4
                rounded-2xl
                font-semibold
                text-white
                bg-secondary
                hover:scale-105
                transition-all duration-300
                shadow-[0_10px_40px_rgba(0,102,255,0.18)]
                text-md md:text-xl
              "
            >
              Join Golden Pass

              <PiArrowRightBold
                size={18}
                className="
                  group-hover:translate-x-1
                  transition
                "
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}