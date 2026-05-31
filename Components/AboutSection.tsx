"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
  PiUsersThreeBold,
  PiChalkboardTeacherBold,
  PiBriefcaseBold,
  PiTrophyBold,
  PiBookOpenBold,
  PiRocketLaunchBold,
  PiSuitcaseBold,
} from "react-icons/pi";

import TeamImage from "@/public/about1.png";
import MentorImage from "@/public/about2.png";
import GaneshImage from "@/public/Team/Ganesh.png";
import KumaresanImage from"@/public/Team/Kumaresan.png";
import HemanthImage from "@/public/team/Hemanth.png";

const leadershipTeam = [
  {
    name: "Ganesh E",
    role: "CEO",
    image: GaneshImage,
    description:
      "Ganesh, CEO of CORNIXE, is passionate about creating impactful learning experiences that inspire growth, excellence, and future-ready skills.",
  },

  {
    name: "Kumaresan D",
    role: "Founder & COO",
    image: KumaresanImage,
    description:
      "Kumaresan, Founder & COO of CORNIXE, transforms vision into impact through operational leadership, strategic execution, and a commitment to educational excellence.",
  },

  {
    name: "Hemanth Kumar",
    role: "CSO",
    image: HemanthImage,
    description:
      "Hemanth Kumar, CSO of CORNIXE, drives long-term growth by aligning innovation, strategy, and market opportunities.",
  },
];

const stats = [
  {
    icon: <PiUsersThreeBold size={30} />,
    count: 15000,
    suffix: "+",
    label: "Students Enrolled",
  },

  {
    icon: <PiChalkboardTeacherBold size={30} />,
    count: 250,
    suffix: "+",
    label: "Expert Mentors",
  },

  {
    icon: <PiBriefcaseBold size={30} />,
    count: 100,
    suffix: "+",
    label: "Industry Partners",
  },

  {
    icon: <PiTrophyBold size={30} />,
    count: 50000,
    suffix: "+",
    label: "Successful Learners",
  },
];

const commitments = [
  {
    icon: <PiBookOpenBold size={22} />,
    title: "Quality Courses",
    desc: "Industry-aligned curriculum with practical real-world applications.",
  },

  {
    icon: <PiChalkboardTeacherBold size={22} />,
    title: "Expert Mentorship",
    desc: "Learn directly from professionals with years of industry experience.",
  },

  {
    icon: <PiRocketLaunchBold size={22} />,
    title: "Practical Learning",
    desc: "Hands-on projects designed to strengthen skills and portfolios.",
  },

  {
    icon: <PiSuitcaseBold size={22} />,
    title: "Career Support",
    desc: "Internships, placements, and personalized career guidance.",
  },
];

export default function AboutCornixe() {
  return (
    <section className="w-full  px-6 py-26 md:py-26 overflow-hidden relative">
      {/* BLUR EFFECTS */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
          >
            <p
              className="
                text-sm
                uppercase
                font-bold
                tracking-[0.25em]
                text-primary
              "
            >
              Where It All Began
            </p>

            <h2
              className="
                mt-5
                text-3xl md:text-6xl
                font-black
                leading-tight
                text-black-1
              "
            >
              Empowering the{" "}

              <span
                className="
                  bg-gradient-to-r
                  from-primary
                  to-secondary
                  text-transparent bg-clip-text
                "
              >
                Next Generation
              </span>{" "}

              of Global Innovators
            </h2>

            <p
              className="
                mt-7
                text-lg
                leading-relaxed
                text-gray-2
                max-w-2xl
              "
            >
              At Cornixe, we bridge the gap
              between education and industry
              through immersive training,
              mentorship, internships, and
              real-world learning experiences.
              We empower learners with the
              confidence, clarity, and skills
              needed to thrive in the evolving
              professional world.
            </p>

            {/* SIGNATURE */}
            <div className="mt-10">
              <h4
                className="
                  text-3xl
                  italic
                  font-semibold
                  text-black-1
                "
              >
                Cornixe Team
              </h4>

              <div
                className="
                  mt-3
                  w-28 h-1
                  rounded-full
                  bg-gradient-to-r
                  from-primary
                  to-secondary
                "
              />
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="relative"
          >
            <div
              className="
                overflow-hidden
                rounded-[36px]

                border border-black/5
                bg-light

                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              "
            >
              <Image
                src={TeamImage}
                alt="Cornixe Team"
                className="
                  w-full h-auto
                  object-cover
                  transition-transform duration-700
                  hover:scale-105
                "
              />
            </div>

            {/* FLOAT CARD */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="
                absolute -bottom-6 left-8

                rounded-3xl
                bg-white

                px-6 py-5

                shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              "
            >
              <h3
                className="
                  text-3xl
                  font-black
                  text-primary
                "
              >
                100%
              </h3>

              <p className="text-gray-2 mt-1">
                Career Focused Learning
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* STATS */}
        <div
          className="
            mt-14

            grid grid-cols-2 lg:grid-cols-4

            gap-6
          "
        >
          {stats.map((item, index) => (
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
                delay: index * 0.1,
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                group
                relative overflow-hidden

                rounded-[30px]

                bg-white
                border border-black/5

                md:p-8 p-4

                shadow-[0_15px_60px_rgba(0,0,0,0.06)]

                transition-all duration-500
              "
            >
              {/* HOVER BG */}
              <div
                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition duration-500

                  bg-gradient-to-br
                  from-primary/5
                  to-secondary/5
                "
              />

              <div className="relative z-10">
                {/* ICON */}
                <div
                  className="
                    w-16 h-16
                    rounded-2xl

                    bg-primary

                    flex items-center justify-center

                    text-white
                  "
                >
                  {item.icon}
                </div>

                {/* COUNT */}
                <h3
                  className="
                    mt-6
                    text-2xl md:text-3xl
                    font-black
                    text-black-1
                  "
                >
                  <CountUp
                    end={item.count}
                    duration={3}
                    separator=","
                  />

                  {item.suffix}
                </h3>

                {/* LABEL */}
                <p
                  className="
                    mt-3
                    text-gray-2
                    leading-relaxed
                  "
                >
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-20 grid lg:grid-cols-2 gap-14 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="
              overflow-hidden
              rounded-[36px]

              border border-black/5
              bg-light

              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
            "
          >
            <Image
              src={MentorImage}
              alt="Mentorship"
              className="
                w-full h-auto
                object-cover
                transition-transform duration-700
                hover:scale-105
              "
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
          >
            <p
              className="
                text-sm
                uppercase
                font-bold
                tracking-[0.25em]
                text-primary
              "
            >
              Our Commitment
            </p>

            <h2
              className="
                mt-5
                text-3xl md:text-5xl
                font-black
                leading-tight
                text-black-1
              "
            >
              Real Skills. Real Projects.{" "}

              <span
                className="
                  bg-gradient-to-r
                  from-primary
                  to-secondary
                  text-transparent bg-clip-text
                "
              >
                Real Opportunities.
              </span>
            </h2>

            <p
              className="
                mt-7
                text-lg
                leading-relaxed
                text-gray-2
              "
            >
              Our approach combines practical
              learning, expert mentorship,
              internships, and placement support
              to ensure learners become truly
              industry-ready with confidence and
              real-world experience.
            </p>

            {/* FEATURES */}
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {commitments.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    flex gap-4

                    rounded-2xl
                    bg-white

                    p-5

                    shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                  "
                >
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl

                      bg-primary

                      flex items-center justify-center

                      text-white
                      shrink-0
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h4
                      className="
                        font-bold
                        text-black-1
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-relaxed
                        text-gray-2
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

           
          </motion.div>
          
        </div>
         {/* CTA */}
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="
                mt-12

                rounded-[30px]

                bg-gradient-to-r
                from-primary
                to-secondary

                p-8

                text-white

                shadow-[0_20px_80px_rgba(0,0,0,0.12)]
              "
            >
              <h3
                className="
                  text-2xl
                  font-black
                "
              >
                We Don’t Just Teach,
                We Transform.
              </h3>

              <p className="mt-4 text-white/90 leading-relaxed">
                Cornixe is a community of
                dreamers, innovators, and
                achievers building future-ready
                careers with confidence and
                practical expertise.
              </p>

              <button
                className="
                  mt-7

                  px-7 py-4
                  rounded-full

                  bg-white
                  text-primary

                  font-bold

                  hover:scale-105
                  transition-all duration-300
                "
              >
                Join The Cornixe Evolution →
              </button>
            </motion.div>
      </div>
      {/* LEADERSHIP TEAM */}
<div className="mt-24 px-6">
  <div className="text-center mb-16">
    <p className="text-sm uppercase font-bold tracking-[0.25em] text-primary">
      Leadership Team
    </p>

    <h2 className="mt-4 text-3xl md:text-5xl font-black text-black-1">
      Meet The Minds Behind
      <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
        {" "}
        CORNIXE
      </span>
    </h2>

    <p className="mt-6 text-lg text-gray-2 max-w-3xl mx-auto">
      Visionary leaders committed to empowering learners and shaping future-ready careers.
    </p>
  </div>

  <div className="space-y-24">
    {leadershipTeam.map((member, index) => (
      <motion.div
        key={member.name}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* IMAGE */}
        <div
          className={`relative ${
            index % 2 !== 0 ? "lg:order-2" : ""
          }`}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[40px] blur-xl" />

          <div className="relative overflow-hidden rounded-[36px] shadow-[0_20px_80px_rgba(0,0,0,0.12)]">
            <Image
              src={member.image}
              alt={member.name}
              className="
                w-full
                h-full
                object-fit
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>
        </div>

        {/* CONTENT */}
        <div
          className={`${
            index % 2 !== 0 ? "lg:order-1" : ""
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            {member.role}
          </span>

          <h3 className="mt-5 text-4xl font-black text-black-1">
            {member.name}
          </h3>

          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-primary to-secondary mt-4" />

          <p className="mt-6 text-lg leading-relaxed text-gray-2">
            {member.description}
          </p>

          <div className="mt-8 flex gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-lg">
              {member.name.charAt(0)}
            </div>

            <div>
              <h4 className="font-bold text-black-1">
                {member.name}
              </h4>

              <p className="text-gray-500">
                {member.role}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>
    </section>
  );
}