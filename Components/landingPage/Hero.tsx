"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Course from "@/public/hero6.png";
import Course1 from "@/public/Course.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Briefcase, TrendingUp, Video } from "lucide-react";
import { BarChart3, BookOpen, Trophy } from "lucide-react";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  sub?: string;
  icon: React.ReactNode;
  color: string;
};
function CountUp({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}</>;
}

export default function Home() {
  // ✅ FIXED TYPES
  const container = useRef<HTMLDivElement | null>(null);
  const bubble1Ref = useRef<HTMLDivElement | null>(null);
  const bubble2Ref = useRef<HTMLDivElement | null>(null);
  const bubble3Ref = useRef<HTMLDivElement | null>(null);
  const dotCircleRef = useRef<HTMLDivElement | null>(null);
  const heroContentRef = useRef<HTMLDivElement | null>(null);
  const wavesRef = useRef<HTMLDivElement | null>(null);

  // 🎯 FRAMER PARALLAX
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const bubbleY1 = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);

  const bubbleY3 = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  const floatingCards = [
    {
      icon: <BookOpen size={22} />,
      title: "Live Classes",
      subtitle: "Learn from industry experts",
    },

    {
      icon: <BarChart3 size={22} />,
      title: "Practical Learning",
      subtitle: "Real-world projects & case studies",
    },

    {
      icon: <Trophy size={22} />,
      title: "Career Growth",
      subtitle: "Internships & placement opportunities",
    },
  ];


    const stats: Stat[] = [
      {
        value: 15,
        suffix: "K+",
        label: "Students",
        sub: "Learning with us",
        icon: <Users size={20} />,
        color: "from-blue-500 to-cyan-500",
      },
      {
        value: 250,
        suffix: "+",
        label: "Employees",
        sub: "Industry mentors",
        icon: <Briefcase size={20} />,
        color: "from-purple-500 to-indigo-500",
      },
      {
        value: 98,
        suffix: "%",
        label: "Placement Rate",
        sub: "Career success",
        icon: <TrendingUp size={20} />,
        color: "from-green-500 to-emerald-500",
      },
      {
        value: 48,
        suffix: " Hrs",
        label: "Live Classes",
        sub: "Interactive sessions",
        icon: <Video size={20} />,
        color: "from-orange-500 to-yellow-500",
      },
    ];

 

  return (
    <div
      ref={container}
      className="relative w-full py-16 lg:py-0  overflow-hidden  bg-white "
    >
      {/* 🫧 BUBBLES */}
      <motion.div
        ref={bubble1Ref}
        style={{ y: bubbleY1 }}
        className="absolute top-60 left-90 w-32 h-32 bg-primary-light/20 rounded-full "
      />

      {/* 🔥 HERO */}
      <div className=" flex items-center flex-col justify-center ">
        <div className="lg:max-w-[calc(100vw)] xl:max-w-[calc(100vw-100px)] mx-auto grid lg:grid-cols-2  items-center px-6 mt-5  grid-cols-1 justify-center lg:h-[100vh] ">
          {/* LEFT */}
          <motion.div ref={heroContentRef}>
            <div className="mt-4">
              <span className="bg-(--color-light) text-(--color-primary)  px-1.5   py-1 rounded-full text-sm font-bold ">
                BUILD SKILLS FOR TOMORROW
              </span>

              <h1 className="font-bold  leading-tight text-black-1 mt-2">
                <div>
                  <p className="uppercase md:text-4xl text-3xl">Cornixe</p>
                  <p className="md:text-4xl text-2xl">
                    {" "}
                    Empowering Your Vision
                  </p>
                </div>
                <p className="text-(--color-primary) text-xl mt-2">
                  Equipping Visionaries for the Modern Professional Landscape
                </p>
              </h1>

              <p className="text-gray-500 mt-4 ">
                At Cornixe, we believe that every student has a unique
                professional{" "}
                <span className="font-bold text-black">"Vision"</span>. Our role
                is to provide the empowerment to achieve it. Guided by elite
                professional trainers, Cornixe serves as the strategic backbone
                for the next generation of industry giants. Through high-impact
                technical skilling, internships, and institutional partnerships,
                we ensure our learners are not just participants in the industry
                - they are the ones leading it. Join the Evolution, Whether you
                are a student looking to sharpen your edge or an institution
                aiming to elevate your curriculum, Cornixe is your partner in
                progress. Let’s turn your vision into your reality.
              </p>

              {/* BUTTON */}
              <div className="flex items-center gap-4 mt-6">
                <button className="bg-gradient-to-r from-(--color-primary) to-(--color-secondary) text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition">
                  Explore Programs
                  <span className=" text-white rounded-full w-6 h-6 flex items-center justify-center">
                    →
                  </span>
                </button>
              </div>
              <div className="hidden lg:flex mt-6">
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className=" bg-white/90
        backdrop-blur-xl

        rounded-[28px]
        border border-white

        shadow-[0_10px_40px_rgba(0,0,0,0.08)]

        px-4 py-4

        flex items-center gap-8
        flex-wrap

        z-20
                      

       
      "
            >
              {stats.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4"
        >
          {/* ICON */}
          <div
            className="
              w-12 h-12
              rounded-xl

              bg-primary

              flex items-center justify-center

              text-white
            "
          >
            {item.icon}
          </div>

          {/* CONTENT */}
          <div>
             <div className="text-2xl font-bold text-gray-900">
              <CountUp value={item.value} />
              {item.suffix}
            </div>

            <p className="text-sm text-gray-2 mt-1">
              {item.label}
            </p>
          </div>
        </div>
      ))}
            </motion.div>
          </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="lg:absolute relative flex justify-center  lg:h-[100vh] lg:w-[58vw] w-full h-full right-0">
            <Image
              src={Course}
              alt="Hero Image"
              width={1000}
              height={1000}
              className="w-full relative mix-blend-multiply hidden lg:block"
            />
             <Image
              src={Course1}
              alt="Hero Image"
              width={1000}
              height={1000}
              className="w-full relative mix-blend-multiply lg:hidden block"
            />

            <div className="absolute top-[18%] right-2 md:right-2 flex flex-col gap-4 z-20 hidden lg:flex">
              {floatingCards.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: 40 + index * 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5 + index * 0.2,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  className="
            bg-white/90
            backdrop-blur-xl

            rounded-2xl
            border border-white

            shadow-[0_10px_40px_rgba(0,0,0,0.08)]

            px-2.5 py-2

            flex items-center gap-4

            min-w-[240px]
          "
                >
                  {/* ICON */}
                  <div
                    className="
              w-12 h-12
              rounded-full

              bg-primary

              flex items-center justify-center

              text-white

              shadow-sm
            "
                  >
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="font-bold text-black-1 text-sm">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-2 mt-1">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
