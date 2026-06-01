"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Course from "@/public/hero6.png";
import Course1 from "@/public/hero10.png";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Users, Briefcase, TrendingUp, Video } from "lucide-react";
import { BarChart3, BookOpen, Trophy } from "lucide-react";
import Link from "next/link";

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

  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setActiveCard(null);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isXL, setIsXL] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsXL(window.innerWidth >= 1280);
  };

  handleResize();

  window.addEventListener("resize", handleResize);

  return () =>
    window.removeEventListener(
      "resize",
      handleResize
    );
}, []);

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
   
  ];

  return (
    <div
      ref={container}
      className="relative w-full py-16 lg:py-0  overflow-hidden   "
    >
      {/* 🫧 BUBBLES */}
      <motion.div
        ref={bubble1Ref}
        style={{ y: bubbleY1 }}
        className="absolute top-60 left-90 w-32 h-32 bg-primary-light/20 rounded-full "
      />

      {/* 🔥 HERO */}
      <div className=" flex items-center flex-col justify-center ">
        <div className="lg:max-w-[calc(100vw)] xl:max-w-[calc(100vw-100px)] mx-auto lg:grid lg:grid-cols-2  items-center px-6 mt-5   justify-center lg:h-[100vh]   ">
          
          {/* LEFT */}
          <motion.div ref={heroContentRef}>
            <div className="mt-4">
              <span className="bg-(--color-light) text-(--color-primary)  px-1.5   py-1 rounded-full text-sm font-bold ">
                BUILD SKILLS FOR TOMORROW
              </span>

              <h1 className="font-bold  leading-tight text-black-1 mt-2 xl:mt-4">
                <div>
                  <p className="uppercase md:text-4xl text-3xl xl:text-5xl">Cornixe</p>
                  <p className="md:text-4xl text-2xl xl:text-5xl">
                    {" "}
                    Empowering Your Vision
                  </p>
                </div>
                <p className="text-(--color-primary) text-lg lg:text-lg xl:text-xl mt-2">
                  Equipping Visionaries for the Modern Professional Landscape
                </p>
              </h1>

              <p className="text-gray-2 mt-2 xl:text-md leading-relaxed ">
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
              <div className="flex items-center gap-4 xl:mt-6 lg:mt-2 mt-6">
                <Link href="/courses" className="bg-gradient-to-r from-(--color-primary) to-(--color-secondary) text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition">
                  Explore Programs
                  <span className=" text-white rounded-full w-6 h-6 flex items-center justify-center">
                    →
                  </span>
                </Link>
              </div>
              <div className="hidden lg:flex xl:mt-6 lg:mt-3 mt-6">
                <motion.div
                  className=" bg-white/90
        backdrop-blur-xl

        rounded-[28px]
        border border-white

        shadow-[0_10px_40px_rgba(0,0,0,0.08)]

        px-4 py-4

        flex items-center gap-5 xl:gap-10
        flex-wrap

        z-20
                      

       
      "
                >
                  {stats.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
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

                        <p className="text-sm text-gray-2 mt-1">{item.label}</p>
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
              className="w-full relative mix-blend-multiply h-full lg:hidden block mt-5 "
            />
         
           

         <div className="absolute top-[18%] right-2 flex-col gap-5 z-20 hidden lg:flex">
  {floatingCards.map((item, index) => {
     const isActive =
      activeCard === index || isXL;

    return (
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
          duration: 0.5 + index * 0.15,
        }}
        onMouseEnter={() => {
          if (!isXL) {
            setActiveCard(index);
          }
        }}
        onMouseLeave={() => {
          if (!isXL) {
            setActiveCard(null);
          }
        }}
        onClick={() => {
          if (!isXL) {
            setActiveCard(
              activeCard === index ? null : index
            );
          }
        }}
        whileHover={{
          y: -4,
        }}
        className="flex justify-end cursor-pointer"
      >
        <motion.div
          animate={{
            width:
              isXL
                ? 320
                : isActive
                ? 320
                : 68,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 20,
          }}
          className="
            h-16

            bg-white/95
            backdrop-blur-xl

            rounded-[24px]
            border border-white

            shadow-[0_12px_35px_rgba(0,0,0,0.08)]

            flex items-center
            justify-between

            overflow-hidden

            px-2
          "
        >
          {/* CONTENT */}
          <motion.div
            animate={{
              opacity: isActive ? 1 : 0,
              x: isActive ? 0 : 20,
            }}
            transition={{
              duration: 0.25,
            }}
           className={`
    flex flex-col justify-center
    flex-1

    text-right

    overflow-hidden

    ${
      isActive || isXL
        ? "pr-4"
        : "pr-0"
    }
  `}
            
          >
            <h3
              className="
                text-md
                font-bold
                leading-none
                text-black-1

                whitespace-nowrap
              "
            >
              {item.title}
            </h3>

            <p
              className="
                text-[13px]
                text-gray-2
                mt-1

                whitespace-nowrap
                overflow-hidden
                text-ellipsis
              "
            >
              {item.subtitle}
            </p>
          </motion.div>

          {/* ICON */}
          <motion.div
            animate={{
              scale: isActive ? 1.05 : 1,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              
             h-11 w-11

              rounded-full
              bg-primary

              flex items-center justify-center

              text-white

              shadow-[0_6px_20px_rgba(59,130,246,0.35)]
            "
          >
            {item.icon}
          </motion.div>
        </motion.div>
      </motion.div>
    );
  })}
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
