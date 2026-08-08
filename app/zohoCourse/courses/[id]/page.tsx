"use client";

import { useParams, useRouter } from "next/navigation"; // ✅ FIX
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
import { Check, Crown, Sparkles, X } from "lucide-react";
import CapstoneProjectsSection from "@/Components/CoursePage/CapstoneProjectsSection";
import JobRolesEditor from "@/Components/Admin/JobRolesEditor";
import JobRolesSection from "@/Components/CoursePage/JobRolesSection";
import CertificateShowcase from "@/Components/Program/CertificateShowcase";
import ZohoShowcase from "@/Components/landingPage/ZohoShowcase";
import ZohoCurriculum from "@/Components/landingPage/ZohoCurriculum";


const plans = [
  {
    badge: "Live",
    title: "Live",
    subtitle: "Live learning",
    price: "22999",
    note: "Learn at your convenience",
    highlight: false,
    features: [
      "Recorded Sessions",
      "Hands-on Projects",
      "Certificates",
      "Study Materials",
      "Live Sessions",
      "Doubt Clearing Sessions",
      "Placement Support",
    ],
  },

  {
    badge: "PROFESSIONAL",
    title: "Professional",
    price: "24999",
    note: "Premium Career Growth",
    highlight: true,
    features: [
      "Recorded Sessions",
      "Hands-on Projects",
      "Certificates",
      "Study Materials",
      "Doubt Clearing Sessions",
      "Placement Support",

      "Live Sessions",
      "Interview Preparation",
      "1:1 Premium Session",
      "Mentor Guidance",
    ],
  },
];

const allFeatures = [
  "Recorded Sessions",
  "Hands-on Projects",
  "Certificates",
  "Study Materials",
  
  "Doubt Clearing Sessions",
  "Placement Support",
  "Live Sessions",
  "Interview Preparation",
  "1:1 Premium Session",
  "Mentor Guidance",
];

const emptyCourse = {
  title: "",
  category: "",
  subcategory: "",
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
  capstoneProjects: [],
  jobRoles: [],
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
          capstoneProjects: courseData.capstoneProjects || [],
          jobRoles: courseData.jobRoles || [],
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
              <div key={i} className="h-40 bg-gray-200 rounded-2xl shadow-sm" />
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
    <div >
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
      {/* 🔥 ZOHO CURRICULUM */}
      <section className="py-10 max-w-6xl mx-auto px-6">
        <ZohoCurriculum />
      </section>



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
          <CapstoneProjectsSection projects={course.capstoneProjects} />
        </section>
      )}

      {course.jobRoles && (
        <section className="py-16 text-center">
          <JobRolesSection roles={course.jobRoles} />
        </section>
      )}

      {/* 🔥 PRICING */}
      {course.pricing && (
        <section className=" text-center px-6">
          <section className="py-20 px-6 ">
                 {/* Heading */}
                <div className="mb-10 px-4">        <h2 className="text-3xl md:text-5xl font-bold text-black-1 leading-tight">          Unlock Premium Learning at a Limited Price
                  </h2>
          
                  <p className="text-gray-500 mt-5 max-w-6xl mx-auto text-md md:text-lg leading-relaxed">
                    Get industry-ready skills with
                   high-quality training,
                   affordable pricing, practical
                   projects, and expert guidance.       </p>
                </div>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:grid-cols-2 grid-cols-1">
                  {plans.map((plan, index) => (
                    <div
                      key={index}
                      className={`
                        relative overflow-hidden
                    rounded-[32px]
                    border
                    h-full
                    flex flex-col
                    transition-all duration-300
                        ${
                          plan.highlight
                            ? `
                              bg-[#0f172a]
                              border-blue-500/30
                              shadow-[0_20px_60px_rgba(59,130,246,0.18)]
                            `
                            : `
                              bg-white
                          border-gray-200
                          hover:border-blue-200
                          shadow-sm hover:shadow-xl
                            `
                        }
                      `}
                    >
                      {/* Header */}
                      <div className="p-8 pb-6">
                        <div
                          className={`
                           inline-flex items-center gap-2
                          px-4 py-1.5 rounded-full
                          text-xs font-semibold mb-6
                            ${
                              plan.highlight
                                ? "bg-blue-500/20 text-blue-200 border border-blue-400/20"
                                : "bg-blue-50 text-blue-600"
                            }
                          `}
                        >
                          <Crown size={12} />
                          {plan.badge}
                        </div>
          
                        <h2
                          className={`
                            text-3xl font-black
                            ${
                              plan.highlight
                                ? "text-white"
                                : "text-slate-900"
                            }
                          `}
                        >
                          {plan.title}
                        </h2>
          
                        <p
                          className={`
                            mt-3 text-sm
                            ${
                              plan.highlight
                                ? "text-slate-300"
                                : "text-slate-500"
                            }
                          `}
                        >
                          {plan.subtitle}
                        </p>
          
                        <div className="mt-8">
                          <h3
                            className={`
                              text-5xl font-black
                              ${
                                plan.highlight
                                  ? "text-white"
                                  : "text-slate-900"
                              }
                            `}
                          >
                            ₹{plan.price}
                          </h3>
          
                          <p className="mt-2 text-sm font-medium text-primary">
                            {plan.note}
                          </p>
                        </div>
                      </div>
          
                      {/* Divider */}
                      <div
                        className={`
                          border-t
                          ${
                            plan.highlight
                              ? "border-white/10"
                              : "border-gray-200"
                          }
                        `}
                      />
          
                      {/* Features */}
                      <div className="flex flex-col flex-1 px-10 py-10">
                        <div className="space-y-6 flex-1">
                          {allFeatures.map((feature) => {
                            const included =
                              plan.features.includes(feature);
          
                            return (
                              <div
                                key={feature}
                                className="flex items-center gap-3"
                              >
                                <div
                                  className={`
                                    w-7 h-7
                                    rounded-full
                                    flex items-center justify-center
                                    flex-shrink-0
                                    ${
                                      included
                                        ? plan.highlight
                                          ? "bg-blue-500/20 text-blue-300"
                                          : "bg-green-100 text-green-600"
                                        : "bg-red-100 text-red-500"
                                    }
                                  `}
                                >
                                  {included ? (
                                    <Check size={14} />
                                  ) : (
                                    <X size={14} />
                                  )}
                                </div>
          
                                <span
                                  className={`
                                    text-[15px]
                                    ${
                                      included
                                        ? plan.highlight
                                          ? "text-white"
                                          : "text-slate-700"
                                        : "text-slate-400 line-through"
                                    }
                                  `}
                                >
                                  {feature}
                                </span>
                              </div>
                            );
                          })}
                        </div>
          
                        {/* Button */}
                        <button
                          className={`
                           mt-10 w-full py-4 rounded-2xl
                font-semibold text-sm
                transition-all duration-300
                            ${
                              plan.highlight
                                ? `
                                  bg-blue-500
                                  text-white
                                  hover:bg-blue-600
                                `
                                : `
                                  bg-[#041235]
                                  text-white
                                  hover:bg-black
                                `
                            }
                          `}
                        >
                          {plan.highlight
                            ? "Get Started"
                            : "Choose Plan"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
        </section>
      )}
      
       <section className=" text-center px-6">
        <ZohoShowcase/>
        </section>
    </div>
  );
}
