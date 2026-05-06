"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Trophy,
  Zap,
  ShieldCheck,
  Sparkles,
  Globe,
} from "lucide-react";
import { useState } from "react";
import AmbassadorForm from "./Form/AmbassadorForm";

export default function AmbassadorHero() {
   const [openForm, setOpenForm] = useState(false);
  return (
    <section className="relative overflow-hidden md:min-h-screen  flex items-center justify-center px-6 md:py-24 py-24 ">
      
      {/* 🔥 GRID BACKGROUND */}
      <div
        className="
          absolute inset-0 opacity-30
          bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* 🔥 MAIN GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-(--color-primary)/20 blur-[180px] rounded-full" />

      {/* 🔥 FLOATING BLURS */}
      <div className="absolute top-20 left-20 w-52 h-52 bg-(--color-primary)/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-(--color-secondary)/20 rounded-full blur-3xl" />

      {/* 🔥 LEFT FLOAT CARD */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="
          hidden lg:flex
          absolute top-32 left-16
          bg-white/10 backdrop-blur-2xl
          border border-white/10
          rounded-3xl
          px-6 py-5
          items-center gap-4
          shadow-[0_10px_50px_rgba(0,102,255,0.15)]
        "
      >
        <div className="w-14 h-14 rounded-2xl bg-(--color-primary)/20 flex items-center justify-center">
          <Trophy className="text-(--color-primary)" size={28} />
        </div>

        <div>
          <h3 className="font-bold text-xl text-black-1">
            Campus Leader
          </h3>

          <p className="text-(--color-gray-2) text-sm">
            Ananya R. · IIT Hyderabad
          </p>
        </div>
      </motion.div>

      {/* 🔥 RIGHT TOP FLOAT CARD */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="
          hidden lg:flex
          absolute top-40 right-16
          bg-white/10 backdrop-blur-2xl
          border border-white/10
          rounded-3xl
          px-6 py-5
          items-center gap-4
          shadow-[0_10px_50px_rgba(0,102,255,0.15)]
        "
      >
        <div className="w-14 h-14 rounded-2xl bg-(--color-secondary)/20 flex items-center justify-center">
          <Zap className="text-(--color-secondary)" size={28} />
        </div>

        <div>
          <h3 className="font-bold text-2xl text-black-1">
            ₹18,000+
          </h3>

          <p className="text-(--color-gray-2) text-sm">
            rewards unlocked
          </p>
        </div>
      </motion.div>

      {/* 🔥 RIGHT BOTTOM CARD */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
        className="
          hidden lg:flex
          absolute bottom-40 right-24
          bg-white/10 backdrop-blur-2xl
          border border-white/10
          rounded-3xl
          px-7 py-5
          items-center gap-4
          shadow-[0_10px_50px_rgba(0,102,255,0.15)]
        "
      >
        <div className="w-12 h-12 rounded-xl bg-(--color-primary)/20 flex items-center justify-center">
          <Sparkles className="text-(--color-primary)" size={22} />
        </div>

        <div>
          <h3 className="font-semibold text-xl text-black-1">
            SRM University
          </h3>

          <p className="text-(--color-gray-2) text-sm">
            joined today
          </p>
        </div>
      </motion.div>

      {/* 🔥 MAIN CONTENT */}
      <div className="relative z-10 max-w-5xl text-center">
        
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            inline-flex items-center gap-3
            border border-white/10
            bg-white/10 backdrop-blur-xl
            rounded-full
            px-6 py-3
            md:mb-10 mb-5
          "
        >
          <div className="w-3 h-3 rounded-full bg-(--color-primary) animate-pulse" />

          <span className="tracking-wide text-black-1">
            APPLICATIONS OPEN · STUDENT LEADERSHIP PROGRAM 2026
          </span>
        </motion.div>

        {/* 🔥 TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-4xl md:text-7xl xl:text-8xl
            font-black
            leading-[1.05]
            text-black-1
          "
        >
          Become The Face
          <br />

          <span className="bg-gradient-to-r from-(--color-primary) to-(--color-secondary) text-transparent bg-clip-text">
            Of Innovation
          </span>
        </motion.h1>

        {/* 🔥 DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            max-w-3xl
            mx-auto
            md:mt-10 mt-5
            text-md 
            text-(--color-gray-2)
            leading-relaxed
          "
        >
          Empower your campus with opportunities that matter. 
          Connect with global mentors, organize impactful events, 
          gain leadership experience, and build a network that accelerates your career journey.
        </motion.p>

        {/* 🔥 CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="md:pt-14 pt-6"
        >
          <button
          type="button"
        onClick={() => setOpenForm(true)}
            className="
              group
              relative
              overflow-hidden
              px-10 py-5
              rounded-2xl
              bg-gradient-to-r from-(--color-primary) to-(--color-secondary)
              md:text-xl font-semibold text-lg
              text-(--color-white)
              shadow-[0_15px_50px_rgba(0,102,255,0.35)]
              hover:scale-105
              transition-all duration-300
            "
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Leadership Journey
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </span>

            {/* HOVER GLOW */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />
          </button>
          <AmbassadorForm
        isOpen={openForm}
        onClose={() => setOpenForm(false)}
      />
        </motion.div>

        {/* 🔥 TAGS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            mt-10
            flex flex-wrap items-center justify-center
            gap-6
            text-(--color-gray-2)
          "
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-(--color-primary)" size={18} />
            Leadership Certificate
          </div>

          <div className="flex items-center gap-2">
            <Globe className="text-(--color-secondary)" size={18} />
            National Networking
          </div>

          <div>Exclusive Internship Access</div>

          <div>Flexible Student Program</div>
        </motion.div>
      </div>
    </section>
  );
}