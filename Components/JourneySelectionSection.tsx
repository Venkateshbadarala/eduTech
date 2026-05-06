"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Send,
  Video,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    number: 30,
    suffix: "K+",
    label: "Students Empowered",
  },
  {
    number: 4.8,
    suffix: "/5",
    decimals: 1,
    label: "Learner Satisfaction",
  },
  {
    number: 75,
    suffix: "K+",
    label: "Projects Completed",
  },
  {
    number: 98,
    suffix: "%",
    label: "Placement Support",
  },
];

const steps = [
  {
    id: "01",
    title: "Apply Online",
    desc: "Complete your application and share your interests and career goals.",
    icon: Send,
  },
  {
    id: "02",
    title: "Quick Interaction",
    desc: "Attend a short interaction round with our team and mentors.",
    icon: Video,
  },
  {
    id: "03",
    title: "Start Learning",
    desc: "Get selected and begin your premium learning journey with us.",
    icon: BadgeCheck,
  },
];

export default function JourneySelectionSection() {
  return (
    <section className="relative overflow-hidden py-28 px-6 md:px-10 ">
      
      {/* 🔥 BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-(--color-primary)/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-(--color-secondary)/10 rounded-full blur-[120px]" />

      {/* GRID */}
      <div
        className="
          absolute inset-0 opacity-[0.04]
          bg-[linear-gradient(rgba(0,0,0,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.4)_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      <div className="max-w-7xl mx-auto relative ">

        {/* 🔥 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <div
            className="
              inline-flex items-center gap-3
              bg-(--color-primary)/10
              border border-(--color-primary)/10
              px-6 py-3 rounded-full
              text-(--color-primary)
              font-semibold 
              uppercase text-md
              backdrop-blur-xl
              text-sm
            "
          >
            🚀 Your Success Starts Here
          </div>

          <h2
            className="
              mt-8
              text-4xl md:text-5xl 
              font-black
              text-(--color-black-1)
              md:leading-[1.1] leading-7
              max-w-6xl
              mx-auto
              flex gap-4 flex-col md:flex-row
            "
          >
            Unlock Your
            <span className="block bg-gradient-to-r from-(--color-primary) to-(--color-secondary) text-transparent bg-clip-text">
              Career Potential
            </span>
          </h2>

          <p
            className="
              max-w-4xl
              text-center
              mx-auto
              mt-4
              text-(--color-gray-2)
              text-lg md:text-xl
              leading-relaxed
            "
          >
            Gain industry-ready skills through mentorship, live projects,
            hands-on learning, and career-focused programs designed for
            future innovators and leaders.
          </p>
        </motion.div>

        {/* 🔥 STATS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                group relative overflow-hidden
                rounded-[2rem]
                border border-(--color-primary)/10
                bg-white/70 backdrop-blur-2xl
                shadow-[0_15px_60px_rgba(0,0,0,0.08)]
                p-10
                text-center
                transition-all duration-500
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br
                  from-(--color-primary)/10
                  to-(--color-secondary)/10
                "
              />

              {/* Floating Circle */}
              <div className="absolute -top-10 -right-10 w-22 h-22 bg-(--color-primary)/10 rounded-full blur-2xl" />

              <div className="relative">
                <h3
                  className="
                    text-4xl md:text-5xl
                    font-black
                    text-secondary
                   
                    bg-clip-text
                  "
                >
                  <CountUp
                    end={item.number}
                    duration={3}
                    decimals={item.decimals || 0}
                  />
                  {item.suffix}
                </h3>

                <p
                  className="
                    mt-5
                    uppercase
                    tracking-[4px]
                    text-sm
                    font-bold
                    text-black-1
                  "
                >
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 JOURNEY SECTION */}
        <div className="py-20 flex flex-col items-center ">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              text-3xl md:text-5xl
              font-black
              text-(--color-black-1)
               max-w-6xl
              mx-auto
              flex md:gap-4 gap-2 flex-row
            "
          >
            Your Journey To
            <span className="block text-(--color-primary)">
              Success
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="
              mt-6
              text-(--color-gray-2)
              text-lg md:text-xl
              max-w-3xl
              mx-auto
               text-center
            "
          >
            A smooth and structured process designed to help passionate learners
            grow into industry-ready professionals.
          </motion.p>
        </div>

        {/* 🔥 STEPS */}
        <div className="relative ">


          <div className="grid lg:grid-cols-3 gap-16 relative ">
            {steps.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -12,
                  }}
                  className="group relative"
                >
                  {/* CARD */}
                  <div
                    className="
                      relative overflow-hidden
                      rounded-[2.5rem]
                      bg-white/80 backdrop-blur-2xl
                      border border-(--color-primary)/10
                      shadow-[0_15px_70px_rgba(0,0,0,0.08)]
                      p-4
                      text-center
                      transition-all duration-500
                    "
                  >
                    {/* Glow */}
                    <div
                      className="
                        absolute inset-0 opacity-0
                        group-hover:opacity-100
                        transition duration-500
                        bg-gradient-to-br
                        from-(--color-primary)/10
                        to-(--color-secondary)/10
                      "
                    />

                    {/* Number */}
                    <div
                      className="
                        absolute top-5 right-5
                        w-12 h-12 rounded-full
                        bg-gradient-to-r
                        from-(--color-primary)
                        to-(--color-secondary)
                        text-white
                        font-bold
                        flex items-center justify-center
                        shadow-lg
                      "
                    >
                      {item.id}
                    </div>

                    {/* Icon */}
                    <div
                      className="
                        relative 
                        w-18 h-18
                        mx-auto
                        rounded-full
                        bg-gradient-to-br
                        from-(--color-primary)/10
                        to-(--color-secondary)/10
                        flex items-center justify-center
                        shadow-xl
                        border border-(--color-primary)/10
                      "
                    >
                      <Icon
                        size={32}
                        className="text-(--color-primary)"
                      />
                    </div>

                    {/* Content */}
                    <h3
                      className="
                        relative 
                        mt-8
                        text-2xl
                        font-black
                        text-(--color-black-1)
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        relative 
                        mt-4
                        text-(--color-gray-2)
                        text-md
                        leading-relaxed
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}