"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import Sidebar from "@/Components/Program/Sidebar";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/landingPage/Hero";
import Testimonials from "@/Components/Testimonials";
import LearningJourney from "@/Components/LearningJourney";
import Companies from "@/Components/Companies";
import TeamSection from "@/Components/TeamsSection";
import TrendingCourses from "@/Components/TrendingCourses";
import WhyChooseSection from "@/Components/landingPage/WhyChooseSection";
import StatsFloatingCards from "@/Components/StatsFloatingCards";
import FAQSection from "@/Components/FAQSection";
import AutoPopupForm from "@/Components/Form/AutoPopupForm";
import ElitePacks from "@/Components/Program/ElitePacks";


export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
    <AutoPopupForm />
      <Navbar onOpenSidebar={() => setSidebarOpen(true)} />

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="bg-black/40 w-full"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Sidebar with animation */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-0"
          >
            <Sidebar
              onSelectCategory={(cat) => console.log(cat)}
              onClose={() => setSidebarOpen(false)}
            />
          </motion.div>
        </div>
      )}
      <Hero />
      <StatsFloatingCards />
      <TrendingCourses />
      <WhyChooseSection />
      <LearningJourney />
      <Companies />
      <ElitePacks/>
      <TeamSection />
      <Testimonials />
      <FAQSection />
    </>
  );
}
