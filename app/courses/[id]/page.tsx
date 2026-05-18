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
import FAQSection from "@/Components/FAQSection";
import { Sparkles } from "lucide-react";
import CapstoneProjectsSection from "@/Components/CoursePage/CapstoneProjectsSection";
import JobRolesEditor from "@/Components/Admin/JobRolesEditor";
import JobRolesSection from "@/Components/CoursePage/JobRolesSection";

const emptyCourse = {
  title: "",
  category: "",
  subcategory:"",
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
  capstoneProjects:[],
  jobRoles:[],
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
        const res = await fetch(`/api/course/${id}`);

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
          capstoneProjects:courseData.capstoneProjects  || [],
  jobRoles:courseData.jobRoles || [],
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
  return (
    <div className="animate-pulse">

      {/* 🔥 HERO SKELETON */}
      <div className="h-[60vh] bg-white flex flex-col justify-center items-center gap-4">
        <div className="h-10 w-1/3 bg-gray-300 rounded-lg" />
        <div className="h-5 w-1/2 bg-gray-300 rounded" />
        <div className="h-40 w-96 bg-gray-300 rounded-xl mt-6" />
      </div>

      {/* 🔥 STATS SKELETON */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="h-8 w-80 bg-gray-300 rounded mx-auto mb-10" />

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-40 bg-gray-200 rounded-2xl shadow-sm"
            />
          ))}
        </div>
      </div>

      {/* 🔥 SKILLS SKELETON */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="h-8 w-72 bg-gray-300 rounded mx-auto mb-10" />

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-xl" />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6 w-2/3 mx-auto">
          {[1, 2].map((i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-xl" />
          ))}
        </div>
      </div>

      {/* 🔥 MODULES SKELETON */}
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 bg-gray-200 rounded-xl" />
        ))}
      </div>

    </div>
  );
}

  if (!course) {
    return <div className="p-10 text-center">Course not found</div>;
  }
  return (
    <div className=" ">
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
        <section className="max-w-7xl mx-auto px-6 py-16">
          {/* Heading */}
          <div className="text-center mb-7 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
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
  <section className="max-w-7xl mx-auto px-6">
  <StatsCard value={course.stats} courseTitle={course.title} />
</section>
)}
        </section>
      )}

      {/* 🔥 SKILLS */}
      {course.skills && (
        <section className="py-10 text-center max-w-7xl mx-auto px-6">
          <div className="mb-7 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              Get to Know These Skills as You Learn
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              As you go through {course.title}, our mentor supports you with
              skills and tools, keeping you ahead.
            </p>
          </div>

          {/* Grid */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {course.skills.map((item: any, i: any) => (
                <Card key={i} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 🔥 MODULES */}
      {course.modules && (
        <section className="py-10 max-w-6xl mx-auto px-6">
          <ModulesSection modules={course.modules} />
        </section>
      )}

      {/* 🔥 TOOLS */}
      {course.tools && (
        <section className="py-16 text-center max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Tools and Technologies You'll Learn
          </h2>

          <p className="text-gray-500 mt-4  mx-auto text-base md:text-lg">
            Learn a wide range of programming languages and tools, from
            foundational to advanced, to equip you with the skills needed for
            real-world projects and career success
          </p>

          <div className="">
            <TechSection tools={course.tools} />
          </div>
        </section>
      )}

      {/* 🔥 MASTERY */}
      {course.mastery && (
        <section className="py-16 text-center max-w-6xl mx-auto px-6">
          <div className="">
            <MasterySection value={course.mastery} />
          </div>
        </section>
      )}

      {course.capstoneProjects && (
        <section className="py-16 text-center">

          <CapstoneProjectsSection projects={course.capstoneProjects}  />
        </section>
      )}

       {course.jobRoles && (
        <section className="py-16 text-center">

          <JobRolesSection roles={course.jobRoles}  />
        </section>
      )}

      {/* 🔥 PRICING */}
      {course.pricing && (
        <section className=" text-center px-6">
          <PricingSection pricing={course.pricing} />
        </section>
      )}
      <div className="px-10">
       <LearningJourney />
      <Companies />
      <TeamSection />
      <Testimonials />
      <FAQSection/>
      </div>
      
    </div>
  );
}
