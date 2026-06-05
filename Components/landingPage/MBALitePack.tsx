"use client";

import { motion } from "framer-motion";
import poster from "@/public/MBA LITE PACK.png";
import Image from "next/image";

import {
  PiBriefcaseBold,
  PiGraduationCapBold,
  PiUsersThreeBold,
  PiRocketLaunchBold,
  PiArrowRightBold,
  PiCertificateBold,
  PiDownloadSimpleBold,
} from "react-icons/pi";

const universities = [
  {
    name: "SRM",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/58/SRM_Institute_of_Science_and_Technology_Logo.png",
  },

  {
    name: "Zoho",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/ZOHO_logo_2023.svg",
  },

  {
    name: "Manipal",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/56/Manipal_University_Jaipur_logo.png",
  },

  {
    name: "SCMS",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GxYj8L5f8QW5M1Q6vL7m2QjQfQ4xYh6mQw&s",
  },

  {
    name: "Xavier",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/7d/St._Xavier%27s_College%2C_Mumbai_logo.png",
  },

  {
    name: "NIT",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/04/National_Institute_of_Technology%2C_Warangal_Logo.png",
  },
];

const careers = [
  {
    title: "Digital Marketing Specialist",

    desc:
      "Promote products via SEO, social media, and paid advertising campaigns.",

    side: "left",
  },

  {
    title: "Business Analyst",

    desc:
      "Analyze business data to improve efficiency and decision making.",

    side: "right",
  },

  {
    title: "Financial Analyst",

    desc:
      "Evaluate investments, budgets, and financial forecasting strategies.",

    side: "left",
  },

  {
    title: "Human Resources Manager",

    desc:
      "Manage hiring, employee relations, and organizational development.",

    side: "right",
  },

  {
    title: "Stock Market Trader",

    desc:
      "Buy and sell securities based on financial and market analysis.",

    side: "left",
  },

  {
    title: "Operations Manager",

    desc:
      "Optimize operational workflows and business productivity systems.",

    side: "right",
  },
];

const courses = [
  "Artificial Intelligence",
  "Finance",
  "Business Analytics",
  "Human Resource",
  "Stock Market",
  "Fashion Designing",
  "Psychology",
];

const benefits = [
  {
    icon: <PiBriefcaseBold size={28} />,
    title: "Internship Assistance",
  },

  {
    icon: <PiRocketLaunchBold size={28} />,
    title: "Life Time Access",
  },

  {
    icon: <PiCertificateBold size={28} />,
    title: "MBA Lite AI Toolkit",
  },
];

export default function MBALitePack() {
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
      <div className="absolute top-20 left-20 w-72 h-72 bg-(--color-primary)/20 rounded-full blur-3xl" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-(--color-secondary)/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HERO */}
        <div
          className="
            relative overflow-hidden
            rounded-[40px]
            border border-white/10
           
            
            backdrop-blur-2xl
           
          "
        >
<div className=" inset-0 relative">
  <img
    src={poster.src}
    alt="Background"
    className="w-full  object-cover rounded-xl "
  />
 </div>

          
        </div>
<div className="  z-10 flex flex-col items-center justify-center mt-10 lg:mt-20 ">

            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              className="
              flex items-center justify-center gap-3
                text-3xl md:text-5xl
                font-black
                leading-tight
                text-(--color-black-1)
              "
            >
              Achieve Academic Excellence With

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-(--color-primary)
                  to-(--color-secondary)
                  text-transparent bg-clip-text
                "
              >
                MBA Lite Pack
              </span>
            </motion.h1>

            {/* PRICE BOX */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              className="
                mt-10 mx-auto
                max-w-md
                rounded-3xl
                bg-[#201547]
                  shadow-[0_15px_60px_rgba(0,0,0,0.15)]
                border border-white/10
                backdrop-blur-xl
                p-6
              "
            >

              <p className="text-white/80">
                Unlock an{" "}

                <span className="font-bold text-lg text-white">
                  MBA Lite Bundle
                </span>{" "}

                worth <span className="line-through">₹42,500</span>
              </p>

              <h2
                className="
                  mt-2
                  text-center
                      text-4xl font-black
                      text-white
                       bg-clip-text
                "
              >
                ₹7,999
              </h2>
            </motion.div>

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
                  px-10 py-4
                  rounded-2xl
                  bg-white
              
                  flex items-center justify-center gap-3
                  text-black
                  font-semibold
                  shadow-xl
                  hover:scale-105
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
                  shadow-[0_10px_40px_rgba(139,92,246,0.35)]
                  hover:scale-105
                  transition-all duration-300
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
                y: -6,
              }}
              className="
                relative overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white
                backdrop-blur-xl
                p-8
                text-center
                shadow-[0_15px_60px_rgba(0,0,0,0.15)]
              "
            >

              <div
                className="
                  w-16 h-16 mx-auto
                  rounded-2xl
                  bg-gradient-to-r
                  from-(--color-primary)
                  to-(--color-secondary)
                  flex items-center justify-center
                  text-white
                  shadow-2xl
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                  mt-5
                  text-2xl
                  font-bold
                  text-(--color-black-1)
                "
              >
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* UNIVERSITIES */}
        {/* <div className="mt-28 text-center">

          <h2
            className="
              text-4xl md:text-5xl
              font-black
              text-(--color-black-1)
            "
          >
            Partnering with{" "}

            <span
              className="
                bg-gradient-to-r
                from-(--color-primary)
                to-(--color-secondary)
                text-transparent bg-clip-text
              "
            >
              50+ Leading Institutions
            </span>
          </h2>

          <div
            className="
              mt-14
              grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6
              gap-5
            "
          >

            {universities.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="
                  bg-white
                  rounded-2xl
                  p-5
                  shadow-xl
                  flex items-center justify-center
                  h-28
                "
              >

                <img
                  src={item.image}
                  alt={item.name}
                  width={140}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div> */}

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
            Careers After Taking{" "}

            <span
              className="
                bg-gradient-to-r
                from-(--color-primary)
                to-(--color-secondary)
                text-transparent bg-clip-text
              "
            >
              MBA Lite Pack
            </span>
          </h2>

          <div
            className="
              relative
              mt-20
              grid md:grid-cols-2
              gap-y-10 gap-x-20
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
                  x:
                    career.side === "left"
                      ? -80
                      : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                className={`
                  relative
                  ${
                    career.side === "right"
                      ? "md:mt-16"
                      : ""
                  }
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
                    w-5 h-5
                    rounded-full
                    bg-gradient-to-r
                    from-(--color-primary)
                    to-(--color-secondary)
                    border-4 border-white
                    shadow-[0_15px_60px_rgba(0,0,0,0.15)]
                  "
                />

                <div
                  className="
                    rounded-3xl
                    border border-white/10
                    bg-white
                    backdrop-blur-2xl
                    p-8
                    shadow-[0_15px_60px_rgba(0,0,0,0.15)]
                  "
                >

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-(--color-black-1)
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

        {/* COURSES */}
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
              All Access Bundle
            </span>
          </h2>

          <p
            className="
              mt-4
              text-lg
              text-(--color-gray-2)
            "
          >
            Featuring 7+ Career Focused Programs
          </p>

          {/* TAGS */}
          <div
            className="
              py-6
              flex items-center justify-center
              gap-4
            "
          >

            <div
              className="
                px-5 py-2
                rounded-full
                 bg-gradient-to-r
                      from-(--color-primary)
                      to-(--color-secondary)
                border border-white/10
                backdrop-blur-xl
                text-sm font-semibold
                text-white
              "
            >
              Mentor Lead
            </div>

            <div
              className="
                px-5 py-2
                rounded-full
                 bg-gradient-to-r
                      from-(--color-primary)
                      to-(--color-secondary)
                border border-white/10
                backdrop-blur-xl
                text-sm font-semibold
                 text-white
              "
            >
              Lifetime Access
            </div>
          </div>

          {/* COURSE CARDS */}
          <div
            className="
              mt-14
              grid md:grid-cols-2 lg:grid-cols-4
              gap-6
            "
          >

            {courses.map((course, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -6,
                }}
                className="
                  relative overflow-hidden
                  rounded-3xl
                  bg-white
                  border border-white/10
                  backdrop-blur-xl
                  p-7
                  text-left
                  shadow-[0_15px_60px_rgba(0,0,0,0.15)]
                "
              >

                <div
                  className="
                    absolute top-0 right-0
                    w-28 h-28
                    bg-(--color-primary)/20
                    rounded-full blur-3xl
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
                      text-white
                    "
                  >
                    <PiGraduationCapBold size={26} />
                  </div>

                  <h3
                    className="
                      mt-6
                      text-2xl
                      font-bold
                      text-(--color-black-1)
                    "
                  >
                    {course}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-(--color-gray-2)
                    "
                  >
                    Worth ₹8500
                  </p>

                  
                </div>
              </motion.div>
            ))}
          </div>

          {/* PRICE */}
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
              7+ Courses worth{" "}

              <span className="line-through">
                ₹59,000
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
            Available At Just ₹7,999/-
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