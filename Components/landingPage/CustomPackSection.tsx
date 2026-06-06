"use client";

import { useState } from "react";
import poster from "@/public/image.png";

import { color, motion } from "framer-motion";

import {
  PiCheckBold,
  PiArrowRightBold,
  PiSparkleFill,
  PiDownloadSimpleBold,
} from "react-icons/pi";

const tabs = [
  "Live Edge",
  "Solo Sprint",
];

const categories = [
  {
    title: "Technology and Data",

    courses: [
      "Web Development",
      "Android Development",
      "Cloud Security",
      "Artificial Intelligence",
      "Data Science",
      "Machine Learning",
      "UI/UX Design",
    ],
  },

  {
    title: "Electronics",

    courses: [
      "IoT & Robotics",
      "Cloud Computing",
      "Embedded Systems",
    ],
  },

  {
    title: "Mechanical",

    courses: [
      "Electric Vehicles",
      "Auto CAD",
    ],
  },

  {
    title: "Management",

    courses: [
      "Digital Marketing",
      "Finance",
      "Human Resource",
      "Stock Market",
      "Business Analytics",
      "Fashion Designing",
      "Graphic Design",
    ],
  },

  {
    title: "Medical",

    courses: [
      "Genetics Engineering",
      "Psychology",
    ],
  },
];

export default function CustomPackSection() {

  const [activeTab, setActiveTab] =
    useState("Solo Sprint");

  const [selectedCourses, setSelectedCourses] =
    useState<string[]>([]);

  const handleSelect = (course: string) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(
        selectedCourses.filter(
          (item) => item !== course
        )
      );

      return;
    }

    if (selectedCourses.length >= 4) return;

    setSelectedCourses([
      ...selectedCourses,
      course,
    ]);
  };

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

      <div className="relative z-10  mx-auto">

        {/* TOP HERO */}
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
          className="
            relative overflow-hidden
            rounded-[40px]
            border border-white/10
           
            backdrop-blur-2xl
           
          "
        >

          {/* BG GLOW */}
         <div className=" inset-0 relative flex items-center justify-center">
          <div className="">
 <img
             src={poster.src}
             alt="Background"
             className="w-full  object-cover rounded-xl "
           />
          </div>
          
          </div>

          
        </motion.div>

        <div className=" z-10 mt-10 lg:mt-20">

            {/* TITLE */}
            <div className=" text-center text-3xl md:text-5xl
                font-black
                leading-tight
                text-center
                text-(--color-black-1)">
 <h2
              className="
                
              "
            >
              Make Your {" "}

              <span
                className="
                  bg-gradient-to-r
                  from-(--color-primary)
                 
                  to-(--color-secondary)
                  text-transparent bg-clip-text
                "
              >
               Own PACK
              </span>

              {" "}
              
            </h2>
             <h2>Tailor Your Path To What Matters Most</h2>
            </div>
           
            {/* PRICE CARD */}
            <div className="flex justify-center mt-10">

              <div
                className="
                  relative overflow-hidden
                  px-10 py-6
                  rounded-3xl
                  border border-white/10
                  bg-[#201547]
                  shadow-[0_15px_60px_rgba(0,0,0,0.15)]
                "
              >

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-r
                    from-(--color-primary)/10
                    to-(--color-secondary)/10
                  "
                />

                <div className="relative z-10 text-center">

                  <p className="text-white/80">
                Unlock a{" "}
                <span className="font-bold text-lg  text-white">
                  3 Individual Courses 
                </span>{" "}
                worth <span className="line-through">₹35,000</span>
              </p>

                  

                 

                  <h3
                    className="
                      mt-2
                      text-4xl font-black
                      text-white
                       bg-clip-text
                    "
                  >
                    ₹7,999
                  </h3>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div
              className="
                mt-10
                flex flex-col sm:flex-row
                items-center justify-center
                gap-5
              "
            >

              <button
                className="
                  w-full sm:w-auto
                  flex items-center justify-center gap-3
                  bg-white
                  hover:bg-gray-100
                  text-(--color-black-1)
                  px-8 py-4
                  rounded-2xl
                  font-semibold
                  transition-all duration-300
                  shadow-lg
                "
              >

                <PiDownloadSimpleBold size={20} />

                Download Brochure
              </button>

              <button
                className="
                  w-full sm:w-auto
                  group
                  flex items-center justify-center gap-3
                  px-10 py-4
                  rounded-2xl
                  font-semibold
                  text-white
                  bg-[#201547]
                  hover:scale-105
                  transition-all duration-300
                  shadow-[0_10px_40px_rgba(0,102,255,0.18)]
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

        {/* SECTION TITLE */}
        <div className="text-center mt-28">

          <h2
            className="
              text-4xl md:text-5xl
              font-black
              text-(--color-black-1)
            "
          >
            Explore The Programs
          </h2>

          <p
            className="
              mt-4
              text-lg
              text-(--color-gray-2)
            "
          >
            Featuring 23+ Courses — Choose any
            four programs that interest you.
          </p>
        </div>

        {/* TAB SWITCH */}
        {/* TAB SWITCH */}
<div className="flex justify-center mt-12">
  <div
    className="
      relative flex
      w-full max-w-2xl
      rounded-full
      border border-white/10
      bg-white/10
      backdrop-blur-2xl
      p-2
    "
  >

    {/* ACTIVE TAB */}
    <motion.div
      layout
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="
        absolute top-2 bottom-2
        rounded-full
        bg-gradient-to-r
        from-(--color-primary)
       
        to-(--color-secondary)
        shadow-lg
      "
      style={{
        width: "49%",
        left:
          activeTab === "Live Edge"
            ? "0.8%"
            : "50.2%",
      }}
    />

    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => {
          setActiveTab(tab);

          // ✅ RESET SELECTION
          setSelectedCourses([]);
        }}
        className={`
          relative z-10
          flex-1 py-4
          rounded-full
          font-bold
          transition-all duration-300
          ${
            activeTab === tab
              ? "text-white"
              : "text-(--color-gray-2)"
          }
        `}
      >
        {tab}
      </button>
    ))}
  </div>
</div>

{/* CATEGORIES */}
<div className="mt-20 space-y-20">

  {(activeTab === "Solo Sprint"
    ? categories.filter(
        (category) =>
          category.title ===
          "Technology and Data"
      )
    : categories
  ).map((category, categoryIndex) => (
    <div key={categoryIndex}>

      {/* CATEGORY TITLE */}
      <div className="flex justify-center">
        <div
          className="
            px-8 py-3
            rounded-2xl
            border border-white/10
            bg-white/10
            backdrop-blur-xl
            text-(--color-black-1)
            font-bold
            text-3xl

          "
        >
          {category.title}
        </div>
      </div>

      {/* COURSE GRID */}
      {/* COURSE GRID */}
<div
  className="
    mt-10
    grid sm:grid-cols-2
    lg:grid-cols-4
    gap-6
  "
>

  {(activeTab === "Solo Sprint"
    ? category.courses.slice(0, 5)
    : category.courses
  ).map((course, index) => {

    return (
      <motion.div
        key={index}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="
          group
          relative overflow-hidden
          rounded-3xl
          border border-white/10
          bg-white/10
          backdrop-blur-2xl
          p-6
          transition-all duration-500
          hover:border-(--color-primary)/40
          
          shadow-[0_10px_35px_rgba(0,102,255,0.22)]
        "
      >

        {/* CARD GRADIENT */}
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

        {/* TOP SHINE */}
        <div
          className="
            absolute top-0 left-[-100%]
            w-full h-full
            bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]
            group-hover:left-[100%]
            transition-all duration-1000
          "
        />

        {/* CONTENT */}
        <div className="relative z-10">

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
            <PiSparkleFill
              size={26}
              className="text-white"
            />
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
                bg-black/20
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
    </div>
  ))}
</div>

       

        {/* BOTTOM CTA */}
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
            max-w-4xl mx-auto
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

          <h3
            className="
              text-xl md:text-4xl lg:text-5xl
              font-black
              text-(--color-black-1)
            "
          >
            20+ Courses Worth{" "}

            <span className="line-through text-(--color-gray-2)">
              ₹35,000
            </span>
          </h3>

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
              text-md md:text-xl
              shadow-[0_10px_40px_rgba(0,102,255,0.18)]
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
    </section>
  );
}