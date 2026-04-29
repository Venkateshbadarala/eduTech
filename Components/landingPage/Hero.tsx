"use client";

import Image from "next/image";
import Course from "@/public/Course.png";
import { motion } from "framer-motion";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/constants/svgIcons";
import Link from "next/link";
import Services from "./Services";

const socialIcons = [
  {
    icon: <InstagramIcon />,
    name: "Instagram",
    link: "https://www.instagram.com",
  },
  {
    icon: <FacebookIcon />,
    name: "Facebook",
    link: "https://www.facebook.com",
  },
  { icon: <TwitterIcon />, name: "Twitter", link: "https://www.twitter.com" },
  {
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    link: "https://www.linkedin.com",
  },
];


export default function Home() {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden 
    bg-[linear-gradient(120deg,#eaf4ff_0%,#f5f9ff_40%,#eef2ff_100%)]"
    >
      {/* 🔵 Soft Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_40%)]"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.2),transparent_40%)]"></div>

      {/* 🫧 BUBBLES */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-(--color-primary-light) rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-60 right-20 w-40 h-40 bg-(--color-primary-light) rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-(--color-primary-light) rounded-full blur-2xl"></div>

      {/* 🔵 Dotted Circle */}
      <div className="absolute top-32 left-10 w-28 h-28 border-2 border-dashed border-(--color-primary-light) rounded-full"></div>

      {/* 🔥 HERO */}
      <div className="h-[calc(105vh)] flex items-center flex-col justify-center ">
        <div className="max-w-[calc(100vw-200px)] mx-auto grid md:grid-cols-2 gap-2 items-center px-6">
          {/* LEFT */}
          <div>
            <span className="bg-(--color-light) text-(--color-primary)  px-3 py-1 rounded-full text-sm font-bold">
              HI, THERE
            </span>

            <h1 className="text-5xl font-bold  leading-tight text-gray-800">
              <div>
                <p>Venkatesh</p>
                <p className="text-4xl">Your Smart Learning Partner</p>
              </div>
              <p className="text-(--color-primary) text-2xl mt-2">
                Learn Smarter. Grow Faster. Build Your Future.
              </p>
            </h1>

            <p className="text-gray-500 mt-4 ">
              Venkatesh is more than just an educational platform — it’s your
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

          {/* RIGHT */}
          <div className="relative flex justify-center w-[42rem]">
            <Image
              src={Course}
              alt="Hero Image"
              width={400}
              height={400}
              className="mix-blend-multiply w-[100vw]  relative z-10"
            />

            {/* SOCIAL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="
    absolute -bottom-2 left-8
    bg-primaryLight/90 backdrop-blur-lg
    shadow-xl
    px-5 py-3
    rounded-2xl
    flex gap-4
  "
            >
              {socialIcons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                  }}
                >
                  <Link
                    href={item.link}
                    target="_blank"
                    className="
          text-gray-700
          text-xl
          transition-all duration-300
          hover:text-primary
        "
                    title={item.name}
                  >
                    {item.icon}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="z-1">
 <Services/>
        </div>
       
      </div>
 
      {/* 🌊 WAVES */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
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
      </div>
    </div>
  );
}
