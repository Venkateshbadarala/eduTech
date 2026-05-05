"use client";

import { motion } from "framer-motion";
import { Briefcase, User, BookOpen } from "lucide-react";

const services = [
  {
    title: "Training",
    description:
      "Structured training by experienced mentors, covering basics to advanced tactics in multiple learning modes.",
    icon: <BookOpen size={28} className="text-(--color-black-6)" />,
  },
  {
    title: "Internship",
    description:
      "Real-world projects, mentor guidance, and feedback to boost employability and practical skills.",
    icon: <Briefcase size={28} className="text-(--color-black-6)" />,
  },
  {
    title: "Placement Support",
    description:
      "Aptitude training, personality growth, mock interviews, and HR prep for careers.",
    icon: <User size={28} className="text-(--color-black-6)" />,
  },
];

export default function Services() {
  return (
    <section className=" px-6 py-6 lg:py-0">
      {/* 🔥 Heading */}
      <div className="max-w-7xl mx-auto mb-2">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="w-1 h-6 bg-(--color-primary) rounded-full "></span>
          Our Services
        </h2>
      </div>

      {/* 🔥 Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="
              bg-white
              rounded-2xl
              p-4
              shadow-md
              hover:shadow-xl
              transition-all duration-300
              cursor-pointer
            "
          >
            {/* 🔹 Icon */}
            <div className="flex items-center gap-4">
             <div className="w-14 h-14 flex items-center justify-center bg-(--color-light)  rounded-xl mb-4">{service.icon}</div> 
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            </div>

            {/* 🔹 Title */}
            

            {/* 🔹 Description */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}