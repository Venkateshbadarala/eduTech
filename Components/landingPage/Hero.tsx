"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Course from "@/public/Course.png";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/constants/svgIcons";
import Link from "next/link";
import Services from "./Services";

const socialIcons = [
  { icon: <InstagramIcon />, name: "Instagram", link: "#" },
  { icon: <FacebookIcon />, name: "Facebook", link: "#" },
  { icon: <TwitterIcon />, name: "Twitter", link: "#" },
  { icon: <LinkedInIcon />, name: "LinkedIn", link: "#" },
];

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
  const bubbleY2 = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]);
  const bubbleY3 = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  const waveY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div
      ref={container}
      className="relative w-full min-h-screen overflow-hidden from-light via-white to-primary-light  "
    >
      {/* 🔵 BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-primary-light/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-primary-light/30 blur-3xl rounded-full top-[200px] right-[-100px]" />
      </div>

      {/* 🫧 BUBBLES */}
      <motion.div
        ref={bubble1Ref}
        style={{ y: bubbleY1 }}
        className="absolute top-60 left-90 w-32 h-32 bg-primary-light/20 rounded-full "
      />

      <motion.div
        ref={bubble2Ref}
        style={{ y: bubbleY2 }}
        className="absolute bottom-45  right-1/3 w-40 h-40 bg-light rounded-full "
      />

      <motion.div
        ref={bubble3Ref}
        style={{ y: bubbleY3 }}
        className="absolute bottom-60 left-20 w-18 h-18 bg-light rounded-full "
      />

      {/* 🔵 DOTTED CIRCLE */}
      <motion.div
        ref={dotCircleRef}
        style={{ y: bubbleY2 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-32 left-10 w-28 h-28 border-2 border-dashed border-blue-300 rounded-full"
      />

      {/* 🔥 HERO */}
      <div className="py-16 flex items-center flex-col justify-center ">
        <div className="lg:max-w-[calc(100vw-100px)] xl:max-w-[calc(100vw-200px)] mx-auto grid lg:grid-cols-2 gap-6 items-center px-6 mt-5 grid-cols-1 justify-center">

          {/* LEFT */}
          <motion.div
            ref={heroContentRef}
            style={{ y: textY, opacity: textOpacity }}
          >
            <div className="mt-4">
            <span className="bg-(--color-light) text-(--color-primary)  px-3 py-1 rounded-full text-sm font-bold">
              HI, THERE
            </span>

            <h1 className="font-bold  leading-tight text-black-1">
              <div>
                <p className="uppercase md:text-4xl text-3xl">Cornixe</p>
                <p className="md:text-4xl text-2xl">Your Smart Learning Partner</p>
              </div>
              <p className="text-(--color-primary) text-2xl mt-2">
                Learn Smarter. Grow Faster. Build Your Future.
              </p>
            </h1>

            <p className="text-gray-500 mt-4 ">
              Cornixe is more than just an educational platform — it’s your
              gateway to real-world success. We bridge the gap between classroom
              learning and industry demands, helping you turn knowledge into
              practical skills that truly matter. From hands-on internships to
              personalized career guidance and expert mentorship, we empower you
              to confidently navigate the ever-evolving professional world. With
              us, education isn’t just about learning more — it’s about growing
              smarter, building confidence, and thriving in your career.
            </p>

            {/* BUTTON */}
            {/* <div className="flex items-center gap-4 mt-6">
              <button className="bg-gradient-to-r from-(--color-primary) to-(--color-secondary) text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition">
                Get Started for Free
                <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center">
                  →
                </span>
              </button>

              <span className="text-gray-600 flex items-center gap-2">
                ✉️ start@domain.com
              </span>
            </div> */}
          </div>
          </motion.div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:w-[38rem] xl:w-[42rem] sm:w-full ">
            <Image
              src={Course}
              alt="Hero Image"
              width={400}
              height={400}
              className="mix-blend-multiply w-full relative z-10"
            />

            {/* 💎 GLASS SOCIAL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -6 }}
              className="absolute -bottom-2 left-8 bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl px-5 py-3 rounded-2xl flex gap-4"
            >
              {socialIcons.map((item, index) => (
                <motion.div key={index} whileHover={{ scale: 1.2 }}>
                  <Link href={item.link} target="_blank">
                    <div className="text-xl hover:text-blue-600 transition">
                      {item.icon}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="z-10 mt-5">
          <Services />
        </div>
      </div>

      {/* 🌊 WAVES */}
      <motion.div
        ref={wavesRef}
        style={{ y: waveY }}
        className="absolute bottom-0 left-0 w-full overflow-hidden"
      >
        <svg viewBox="0 0 1440 320" className="w-full absolute bottom-0 ">
          <path
            fill="#93c5fd"
            fillOpacity="0.2"
            d="M0,224 C240,300 480,100 720,160 C960,220 1200,280 1440,200 L1440,320 L0,320 Z"
          />
        </svg>

        <svg viewBox="0 0 1440 320" className="w-full absolute bottom-0">
          <path
            fill="#93c5fd"
            fillOpacity="0.2"
            d="M0,256 C300,180 600,300 900,220 C1200,140 1440,200 1440,200 L1440,320 L0,320 Z"
          />
        </svg>

        <svg viewBox="0 0 1440 320" className="w-full relative">
          <path
            fill="#93c5fd"
            fillOpacity="0.3"
            d="M0,280 C360,200 1080,300 1440,240 L1440,320 L0,320 Z"
          />
        </svg>
      </motion.div>
    </div>
  );
}