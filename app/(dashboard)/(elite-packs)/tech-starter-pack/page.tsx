"use client";

import { motion } from "framer-motion";
import poster from "@/public/TECH Starter Pack .png";
import Image from "next/image";

import {
  PiArrowRightBold,
  PiBriefcaseBold,
  PiCertificateBold,
  PiDownloadSimpleBold,
  PiRocketLaunchBold,
  PiSparkleFill,
} from "react-icons/pi";

const universities = [
  "https://upload.wikimedia.org/wikipedia/en/5/58/SRM_Institute_of_Science_and_Technology_Logo.png",
  "https://upload.wikimedia.org/wikipedia/en/5/5f/SLS_Pune.png",
  "https://upload.wikimedia.org/wikipedia/en/7/70/LPU_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/5/56/Manipal_University_Jaipur_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/0/0f/SCMS_Cochin_School_of_Business_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/4/47/St._Xavier%27s_College%2C_Mumbai_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/0/04/National_Institute_of_Technology%2C_Warangal_Logo.png",
  "https://upload.wikimedia.org/wikipedia/en/1/1b/JNTU_Hyderabad_logo.png",
];

const careers = [
  {
    title: "Data Scientist / Analyst",
    desc: "Work on AI models, analytics dashboards and predictive systems.",
  },

  {
    title: "Cyber Security Analyst",
    desc: "Protect organizations from cyber attacks and vulnerabilities.",
  },

  {
    title: "AI / ML Engineer",
    desc: "Build intelligent applications and automation systems.",
  },

  {
    title: "Embedded Systems Engineer",
    desc: "Design integrated hardware and software systems.",
  },

  {
    title: "Genetic Engineer",
    desc: "Work on genetics, bioinformatics and modern research systems.",
  },

  {
    title: "UI / UX Designer",
    desc: "Create user-friendly digital products and interfaces.",
  },
];

const courses = [
  "Artificial Intelligence",
  "Cyber Security",
  "Data Science",
  "Machine Learning",
  "Web Development",
  "IoT & Robotics",
  "Cloud Computing",
  "Embedded System",
  "Hybrid & Electric Vehicle",
  "Auto CAD",
  "Fashion Designing",
  "Digital Marketing",
];

const benefits = [
  {
    title: "Internship Assistance",
    icon: <PiBriefcaseBold size={28} />,
  },

  {
    title: "Life Time Access",
    icon: <PiRocketLaunchBold size={28} />,
  },

  {
    title: "Tech Starter AI Toolkit",
    icon: <PiCertificateBold size={28} />,
  },
];

export default function TechStarterPack() {
  return (
    <section
      className="
        relative overflow-hidden
        py-24 px-6
        
      "
    >
      {/* GRID */}
      <div
        className="
          absolute inset-0 opacity-30
          bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* BLURS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-(--color-primary)/20 rounded-full blur-3xl" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-(--color-secondary)/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HERO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative overflow-hidden
            rounded-[40px]
            border border-white/10
          
            backdrop-blur-2xl
            
            
          "
        >
          {/* BG GLOW */}
          <div className=" inset-0 relative">
  <img
    src={poster.src}
    alt="Background"
    className="w-full  object-cover rounded-xl "
  />
 </div>

         
        </motion.div>
 <div className=" z-10 flex flex-col items-center justify-center mt-10 lg:mt-20">
            {/* TITLE */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              className="
               text-center
                text-3xl md:text-5xl
                font-black
                leading-tight
                text-(--color-black-1)
              "
            >
              Achieve Academic Excellence With{" "}
              <span
                className="
                
                  bg-gradient-to-r
                  from-(--color-primary)
                  to-(--color-secondary)
                  text-transparent
                  bg-clip-text
                "
              >
                Tech Starter Pack
              </span>
            </motion.h1>

            {/* PRICE BOX */}
            <div
              className="
                mt-8 mx-auto
                max-w-md
                rounded-3xl
                border border-white/10
                bg-[#201547]
                  shadow-[0_15px_60px_rgba(0,0,0,0.15)]
                
                backdrop-blur-xl
                
                p-6
              "
            >
              <p className="text-white/80">
                Unlock a{" "}
                <span className="font-bold text-lg text-white">
                  Tech Starter Pack
                </span>{" "}
                worth <span className="line-through">₹1,20,000</span>
                
              </p>

              <h2
                className="
                  mt-3
                  text-5xl
                  font-black
                  text-white
                   text-center
                "
              >
                ₹17,999
              </h2>
            </div>

            {/* BUTTONS */}
            <div
              className="
                mt-10
                flex flex-wrap
                items-center justify-center
                gap-5
              "
            >
              <button
                className="
                  bg-white
                  hover:bg-gray-100
                  text-(--color-black-1)
                  px-10 py-4
                  rounded-2xl
                  font-semibold
                    flex items-center justify-center gap-3
                  shadow-[0_15px_60px_rgba(0,0,0,0.15)]
                  transition-all duration-300
                "
              >
                <PiDownloadSimpleBold size={20} />
                Download Brochure
              </button>

              <button
                className="
                  px-10 py-4
                  rounded-2xl
                  flex items-center justify-center gap-3
                 bg-[#201547]
                  text-white
                  font-semibold
                  hover:scale-105
                  transition-all duration-300
                  shadow-[0_15px_50px_rgba(0,0,0,0.2)]
                "
              >
                Enroll Now
                  <PiArrowRightBold
                                  size={18}
                                  className="
                                    group-hover:translate-x-1
                                    transition
                                  "
                                />
              </button>
            </div>
          </div>


        {/* BENEFITS */}
        <div
          className="
            mt-24
            grid md:grid-cols-3
            gap-8
          "
        >
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -5,
              }}
              className="
                relative
                rounded-3xl
                border border-white/10
                bg-white
                backdrop-blur-xl
                shadow-[0_15px_60px_rgba(0,0,0,0.15)]
                p-8 text-center
              "
            >
              <div
                className="
                  w-16 h-16 mx-auto
                  rounded-2xl
                  bg-gradient-to-r
                  from-(--color-primary)/20
                  to-(--color-secondary)/20
                  flex items-center justify-center
                  text-(--color-primary)
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                  mt-5
                  text-xl font-bold
                  text-(--color-black-1)
                "
              >
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* CAREERS */}
        <div className="mt-32">
          <h2
            className="
              text-center
              text-4xl md:text-5xl
              font-black
              text-(--color-black-1)
            "
          >
            Careers after taking
            <span className="text-(--color-primary)"> Tech Starter Pack</span>
          </h2>

          <div
            className="
              relative
              mt-20
              grid md:grid-cols-2
              gap-10
            "
          >
            {/* CENTER LINE */}
            <div
              className="
                hidden md:block
                absolute left-1/2 top-0
                -translate-x-1/2
                w-[3px] h-full
                bg-gradient-to-b
                from-(--color-primary)
                to-(--color-secondary)
              "
            />

            {careers.map((career, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className={`
                  relative
                  ${i % 2 !== 0 ? "md:mt-16" : ""}
                `}
              >
                {/* DOT */}
                <div
                  className="
                    hidden md:block
                    absolute top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-5 h-5 rounded-full
                    bg-(--color-primary)
                    border-4 border-white
                  "
                />

                <div
                  className="
                    rounded-3xl
                    border border-white/10
                    bg-white
                    backdrop-blur-xl
                    shadow-[0_15px_60px_rgba(0,0,0,0.15)]
                    p-8
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-(--color-primary)
                    "
                  >
                    {career.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-relaxed
                      text-(--color-gray-2)
                    "
                  >
                    {career.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* COURSES SECTION */}
        <div className="mt-32 text-center">
          {/* HEADING */}
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
          >
            <h2
              className="
        text-3xl md:text-5xl
        font-black
        leading-tight
        text-(--color-black-1)
      "
            >
              Explore The All Access Bundle
              <span
                className="
          block mt-2
          bg-gradient-to-r
          from-(--color-primary)
          to-(--color-secondary)
          text-transparent bg-clip-text
        "
              >
                Featuring 20+ Courses
              </span>
            </h2>

            <p
              className="
        mt-5
        max-w-4xl mx-auto
        text-lg
        leading-relaxed
        text-(--color-gray-2)
      "
            >
              Unlock industry-leading programs designed to help you build
              future-ready skills, practical expertise, and premium career
              opportunities.
            </p>

            {/* TAGS */}
            <div
              className="
        mt-8
        flex flex-wrap items-center justify-center
        gap-4
      "
            >
              <div
                className="
          px-5 py-4
          rounded-xl
          border border-white/10
            bg-gradient-to-r
          from-(--color-primary)
          to-(--color-secondary)
          text-white
          backdrop-blur-xl
          text-(--color-black-1)
          font-semibold text-sm
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        "
              >
                Mentor Led
              </div>

              <div
                className="
          px-5 py-4
          rounded-xl
          border border-white/10
          bg-gradient-to-r
          from-(--color-primary)
          to-(--color-secondary)
          text-white
          font-semibold text-sm
          shadow-[0_8px_30px_rgba(0,0,0,0.15)]
        "
              >
                Lifetime Access
              </div>

              <div
                className="
          px-5 py-4
          rounded-xl
          border border-white/10
            bg-gradient-to-r
          from-(--color-primary)
          to-(--color-secondary)
          text-white
          backdrop-blur-xl
          text-(--color-black-1)
          font-semibold text-sm
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        "
              >
                Internship Support
              </div>
            </div>
          </motion.div>

          {/* CARDS */}
          <div
            className="
      mt-16
      grid sm:grid-cols-2
      lg:grid-cols-4
      gap-7
    "
          >
            {courses.map((course, index) => {
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
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className="
            group
            relative overflow-hidden
            rounded-[30px]
            border border-white/10
            bg-white
            backdrop-blur-2xl
            p-7
            transition-all duration-500

            shadow-[0_15px_60px_rgba(0,0,0,0.15)]
            hover:border-(--color-primary)/30
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
              from-(--color-primary)/10
              via-transparent
              to-(--color-secondary)/10
            "
                  />

                  {/* SHINE */}
                  <div
                    className="
              absolute top-0 left-[-120%]
              w-full h-full
              bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]
              group-hover:left-[120%]
              transition-all duration-1000
            "
                  />

                  {/* TOP CIRCLE */}
                  <div
                    className="
              absolute -top-10 -right-10
              w-32 h-32
              rounded-full
              bg-(--color-primary)/10
              blur-3xl
            "
                  />

                  {/* CONTENT */}
                  <div className="relative z-10 flex flex-col items-start">
                    {/* ICON */}
                    <div
                      className="
                       w-16 h-16
                       rounded-2xl
                       bg-gradient-to-r
                       from-(--color-primary)
                       to-(--color-secondary)
                       flex items-center justify-center
                       shadow-lg
                     "
                    >
                      <PiSparkleFill size={26} className="text-white" />
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                       mt-6
                       text-xl
                       font-black
                       leading-snug
                       text-(--color-black-1)
                     "
                    >
                      {course}
                    </h3>

                    {/* PRICE */}
                    <p
                      className="
                       mt-3
                       text-sm
                       font-medium
                       text-(--color-gray-2)
                     "
                    >
                      Worth ₹8500
                    </p>

                    {/* BOTTOM */}
                    <div
                      className="
                       mt-8
                       flex items-center
                       justify-between
                     "
                    >
                      <div
                        className="
                         px-4 py-2
                         rounded-xl
                         bg-light
                         text-sm font-semibold
                         text-(--color-black-1)
                         backdrop-blur-xl
                       "
                      >
                        Premium Program
                      </div>

                      {/* <div
                       className="
                         w-10 h-10
                         rounded-xl
                         flex items-center justify-center
                         bg-gradient-to-r
                         from-(--color-primary)
                         to-(--color-secondary)
                         text-white
                         group-hover:rotate-45
                         transition duration-300
                       "
                     >
                       <PiArrowRightBold size={18} />
                     </div> */}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* PREMIUM CTA */}
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
            relative mt-28
             mx-auto
            rounded-[40px]
            overflow-hidden
            border border-white/10
            bg-white/10
            backdrop-blur-2xl
            p-10 md:p-14
            text-center
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

           <p
              className="
                text-xl md:text-4xl lg:text-5xl
                text-(--color-gray-2)
              "
            >
              9+ Courses worth{" "}

              <span className="line-through">
                ₹1,20,000
              </span>
            </p>

          <p
            className="
              mt-5
              font-black
              bg-gradient-to-r
              from-(--color-primary)
              to-(--color-secondary)
              text-transparent bg-clip-text
               text-xl md:text-4xl 
            "
          >
            Available At Just ₹17,999/-
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
              bg-gradient-to-r
              from-(--color-primary)
             
              to-(--color-secondary)
              hover:scale-105
              transition-all duration-300
              shadow-[0_10px_40px_rgba(0,102,255,0.18)]
              text-md md:text-xl
            "
          >
            Apply Now

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
