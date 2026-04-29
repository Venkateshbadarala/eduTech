"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Journey from "@/public/Journey.png";

export default function LearningJourney() {
  return (
    <section className="py-10  text-center px-6">

      <motion.h2
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="text-4xl md:text-5xl font-bold text-(--color-black-1) leading-tight"
>
  Transform Your Future with{" "}
  <span className="bg-gradient-to-r from-(--color-primary) to-(--color-secondary) text-transparent bg-clip-text">
Venkatesh Edtech
  </span>
</motion.h2>

<p className="text-(--color-gray-2) mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
  Step into a smarter way of learning — where industry-driven courses,
  expert mentorship, and real-world projects come together to help you
  build skills, gain confidence, and achieve your career goals faster.
</p>

      {/* 🔥 Illustration */}
      <div className=" flex justify-center">
        <Image
          src={Journey}
          alt="Learning Journey"
          width={1000}
          height={400}
          className="w-full max-w-5xl object-contain mix-blend-multiply"
        />
      </div>

      

    </section>
  );
}