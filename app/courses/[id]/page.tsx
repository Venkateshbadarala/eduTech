"use client";

import { useParams, useRouter } from "next/navigation"; // ✅ FIX
import { coursesData } from "../../../lib/courseData";
import Home from "@/Components/CoursePage/Home";
import StatsCard from "@/Components/CoursePage/StatsCard";
import Card from "@/Components/CoursePage/Card";
import ModulesSection from "@/Components/CoursePage/ModulesSection";
import TechSection from "@/Components/CoursePage/TechSection";
import MasterySection from "@/Components/CoursePage/MasterySection";
import ProjectsSection from "@/Components/CoursePage/ProjectSection";
import PriceCard from "@/Components/CoursePage/PriceCard";
import TeamSection from "@/Components/TeamsSection";
import Testimonials from "@/Components/Testimonials";
import LearningJourney from "@/Components/LearningJourney";
import Companies from "@/Components/Companies";
import PricingSection from "@/Components/CoursePage/pricingSection";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const emptyCourse = {
  title: "",
  category: "",
  description: "",
  image: "",
  headline: "",
  tagline: "",
  trend: false,
  trenddesc: "",
  duration: "",
  start: "ongoing",
  stats: [],
  skills: [],
  modules: [],
  mastery: [],
  tools: [],
  pricing: [],
  brochure: "",
};

export default function Page() {
  const { id } = useParams();
  // 🔥 LOCAL STATE FOR API DATA
  const [course, setCourse] = useState<any>(emptyCourse);
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH FROM DB
  useEffect(() => {
    if (!id) return;

    const fetchCourse = async () => {
      try {
        const res = await fetch(`/api/course/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          const text = await res.text();
          console.error("API ERROR:", text);
          throw new Error("Failed");
        }

        const data = await res.json();

        const courseData = data.course || data;

        console.log("API RESPONSE:", courseData);

        // ✅ NORMALIZE DATA
        setCourse({
          ...emptyCourse,
          ...courseData,
          stats: courseData.stats || [],
          skills: courseData.skills || [],
          modules: courseData.modules || [],
          tools: courseData.tools || [],
          mastery: courseData.mastery || [],
          pricing: courseData.pricing || [],
          brochure: courseData.brochure || "",
        });
      } catch {
        toast.error("Failed to load course ❌");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  // 🔥 LOADING STATE
  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (!course) {
    return <div className="p-10 text-center">Course not found</div>;
  }
  return (
    <div className="bg-(--color-white) ">
      {/* 🔥 HERO */}
      <section className="text-center">
        <Home
          headline={course.headline}
          tagline={course.tagline}
          courseName={course.title}
          image={course.image}
        />
      </section>

      {/* 🔥 STATS */}
      {course.stats && (
        <section className="max-w-7xl mx-auto px-6 py-20">
          {/* Heading */}
          <div className="text-center mb-14 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Rising Demand for{" "}
              <span className="text-(--color-secondary)">{course.title}</span>
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              Explore the growing need for versatile {course.title} skills
              across industries and future careers.
            </p>
          </div>

          {/* Cards */}
          {course.stats && (
  <section className="max-w-7xl mx-auto px-6 pt-10">
  <StatsCard value={course.stats} courseTitle={course.title} />
</section>
)}
        </section>
      )}

      {/* 🔥 SKILLS */}
      {course.skills && (
        <section className="pt-20 text-center max-w-7xl mx-auto px-6">
          <div className="mb-10 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Get to Know These Skills and Tools as You Learn
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              As you go through {course.title}, our mentor supports you with
              skills and tools, keeping you ahead.
            </p>
          </div>

          {/* Grid */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {course.skills.slice(0, 3).map((item: any, i: any) => (
                <Card key={i} item={item} />
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
              {course.skills.slice(3).map((item: any, i: any) => (
                <Card key={i} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 🔥 MODULES */}
      {course.modules && (
        <section className="pt-16 max-w-6xl mx-auto px-6">
          <ModulesSection modules={course.modules} />
        </section>
      )}

      {/* 🔥 TOOLS */}
      {course.tools && (
        <section className="pt-16 text-center max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Tools and Technologies You'll Learn
          </h2>

          <p className="text-gray-500 mt-4  mx-auto text-base md:text-lg">
            Learn a wide range of programming languages and tools, from
            foundational to advanced, to equip you with the skills needed for
            real-world projects and career success
          </p>

          <div className="mt-10">
            <TechSection tools={course.tools} />
          </div>
        </section>
      )}

      {/* 🔥 MASTERY */}
      {course.mastery && (
        <section className="pt-16 text-center max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Mastery Through Advanced Programs
          </h2>

          <p className="text-gray-500 mt-4  mx-auto text-base md:text-lg">
            Elevate your skills with in-depth, hands-on training led by industry
            experts. Our advanced programs are designed to equip you with
            specialized knowledge and real-world experience for career
            excellence in high-demand fields.
          </p>

          <div className="mt-10">
            <MasterySection value={course.mastery} />
          </div>
        </section>
      )}

      {course.projects && (
        <section className="py-20 text-center">
          <div className="mb-12 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-(--color-black-1) leading-tight">
              Turn Knowledge into Skills with Hands-On Projects
            </h2>

            <p className="text-(--color-gray-2) mt-4 max-w-2xl mx-auto text-base md:text-lg">
              Work on real-world challenges, build practical expertise, and gain
              the confidence to succeed in your career.
            </p>
          </div>

          <ProjectsSection  />
        </section>
      )}

      {/* 🔥 PRICING */}
      {course.pricing && (
        <section className=" text-center px-6">
          <PricingSection pricing={course.pricing} />
        </section>
      )}
      <div className="px-20">
       <LearningJourney />
      <Companies />
      <TeamSection />
      <Testimonials />
      </div>
      
    </div>
  );
}
