"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I join live classes?",
    answer:
      "The class link will be sent to your registered email/WhatsApp. Sessions will take place on the Zoom/LMS platform.",
  },
  {
    question: "What should I do if I don’t receive the class link?",
    answer:
      "Please check your spam folder or contact our support team. We’ll resend the access link immediately.",
  },
  {
    question: "How do I access my LMS portal?",
    answer:
      "You can log in using your registered email credentials on our LMS dashboard.",
  },
  {
    question: "How do I submit my projects?",
    answer:
      "Projects can be submitted directly through your LMS dashboard under the assignments section.",
  },
  {
    question: "Will I have access to recorded sessions I missed?",
    answer:
      "Yes, all sessions are recorded and uploaded within 24 hours for your convenience.",
  },
  {
    question: "Who would be the mentors of our programs?",
    answer:
      "Our mentors are industry professionals with real-world experience from top companies.",
  },
  {
    question: "When will I get my certificate?",
    answer:
      "You will receive your certificate after successfully completing the course and projects.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="md:py-16 px-6 py-10 ">
      {/* 🔥 HEADER */}
      <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
  
  <h2
    className="
      text-3xl md:text-5xl
      font-bold
      text-gray-900
      leading-tight
      text-center
      flex flex-col md:block
    "
  >
    Frequently{" "}
    <span className="text-secondary">
      Asked Questions
    </span>
  </h2>

  <p
    className="
      text-gray-500
      mt-5
      text-lg
      leading-relaxed
      text-center
      max-w-3xl
    "
  >
    Check out our FAQ section for quick answers to common questions.
    If you don’t find what you’re looking for, feel free to contact us.
  </p>

</div>

      {/* 🔥 FAQ LIST */}
      <div className="max-w-5xl mx-auto space-y-5">
        {faqs.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className={`
                rounded-2xl border
                transition-all duration-300
                ${
                  isActive
                    ? "border-black bg-white shadow-md"
                    : "border-gray-200 bg-white/70 hover:bg-white"
                }
              `}
            >
              {/* QUESTION */}
              <button
              type="button"
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span
                  className={`font-semibold text-lg ${
                    isActive ? "text-secondary" : "text-black-1"
                  }`}
                >
                  {item.question}
                </span>

                <motion.span
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    className={`${
                      isActive ? "text-secondary" : "text-black-1"
                    }`}
                  />
                </motion.span>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-2 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
