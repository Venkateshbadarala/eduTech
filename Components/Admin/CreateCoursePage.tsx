"use client";

import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import StatsEditor from "./StatsEditor";
import SkillsEditor from "./SkillsEditor";
import ModulesEditor from "./ModulesEditor";
import PricingEditor from "./PricingEditor";
import BrochureEditor from "./BrochureEditor";
import ToolsEditor from "./ToolsEditor";
import { BadgePlus, Clock, ImagePlus, TrendingUp } from "lucide-react";
import MasteryEditor from "./MasteryEditor";
import { useRouter } from "next/navigation";
import CapstoneProjectEditor from "./CapstoneProjectEditor";
import JobRolesEditor from "./JobRolesEditor";
const emptyCourse = {
  title: "Medical Coding - CPC Preparation",

  category: "Healthcare & Life Sciences",

  subcategory: "Medical Coding",

  description:
    "Master Medical Coding, ICD-10-CM, CPT, HCPCS, Medical Terminology, Anatomy, Physiology, Healthcare Compliance, and CPC Exam Preparation. Gain industry-ready skills for healthcare documentation, insurance claims processing, reimbursement systems, and medical coding certification careers.",

  image:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2400&auto=format&fit=crop",

  headline:
    "Become a Certified Professional Medical Coder (CPC)",

  tagline:
    "Master ICD-10, CPT, HCPCS & Medical Coding with CPC Exam Preparation",

  trend: true,

  trenddesc:
    "Medical Coding professionals are in high demand globally due to the rapid growth of healthcare services, insurance systems, and digital health records.",

  duration: "4 Months",

  start: "ongoing",

  stats: [
    {
      value: 95,
    },
    {
      value: 16,
    },
    {
      value: 50000,
    },
  ],

  skills: [
    {
      title: "Medical Terminology",
      description:
        "Understand medical vocabulary, abbreviations, roots, prefixes, and suffixes used in healthcare documentation.",
      image:
        "https://cdn-icons-png.flaticon.com/512/2966/2966486.png",
    },

    {
      title: "ICD-10 Coding",
      description:
        "Assign diagnosis codes accurately using ICD-10-CM guidelines and coding standards.",
      image:
        "https://cdn-icons-png.flaticon.com/512/4320/4320371.png",
    },

    {
      title: "CPT Coding",
      description:
        "Master procedural coding, modifiers, evaluation & management coding, and reimbursement practices.",
      image:
        "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    },

    {
      title: "HCPCS Coding",
      description:
        "Learn HCPCS Level I & II coding for healthcare supplies, services, and equipment.",
      image:
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },

    {
      title: "Medical Documentation",
      description:
        "Interpret physician notes, patient records, and healthcare documentation accurately.",
      image:
        "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    },

    {
      title: "Healthcare Compliance",
      description:
        "Understand HIPAA, ethics, fraud prevention, audits, and coding compliance regulations.",
      image:
        "https://cdn-icons-png.flaticon.com/512/3063/3063822.png",
    },
  ],

  modules: [
    {
      title: "Introduction to Medical Coding",
      topics: [
        "Medical Coding Basics",
        "Healthcare Systems",
        "Coding Types",
        "Importance of Coding",
      ],
    },

    {
      title: "Coding Workflow and Documentation",
      topics: [
        "Medical Records",
        "Coding Workflow",
        "Data Sources",
        "Professional Skills",
      ],
    },

    {
      title: "Fundamentals of Medical Terminology",
      topics: [
        "Medical Vocabulary",
        "Word Roots",
        "Prefixes",
        "Suffixes",
      ],
    },

    {
      title: "Applied Medical Terminology",
      topics: [
        "Medical Abbreviations",
        "Physician Reports",
        "Case Studies",
        "Terminology Practice",
      ],
    },

    {
      title: "Overview of Human Anatomy",
      topics: [
        "Body Structure",
        "Anatomical Regions",
        "Body Planes",
        "Medical Terminology",
      ],
    },

    {
      title: "Physiology and Body Systems",
      topics: [
        "Body Systems",
        "Physiology Basics",
        "Clinical Documentation",
        "Coding Scenarios",
      ],
    },

    {
      title: "Introduction to ICD-10-CM",
      topics: [
        "ICD Structure",
        "Code Categories",
        "Guidelines",
        "Diagnosis Coding",
      ],
    },

    {
      title: "Advanced ICD-10-CM Coding",
      topics: [
        "Clinical Records",
        "Comorbidities",
        "Code Selection",
        "Best Practices",
      ],
    },

    {
      title: "Introduction to CPT Coding",
      topics: [
        "CPT Structure",
        "Code Categories",
        "E/M Coding",
        "Coding Applications",
      ],
    },

    {
      title: "CPT Coding Practice",
      topics: [
        "Surgical Coding",
        "Radiology Coding",
        "Modifiers",
        "Case Exercises",
      ],
    },

    {
      title: "HCPCS Coding Fundamentals",
      topics: [
        "HCPCS Level I",
        "HCPCS Level II",
        "Code Differences",
        "Medical Supplies Coding",
      ],
    },

    {
      title: "HCPCS Modifiers and Billing",
      topics: [
        "Modifiers",
        "Insurance Billing",
        "Reimbursements",
        "Practical Coding",
      ],
    },

    {
      title: "Medical Ethics and Compliance",
      topics: [
        "HIPAA",
        "Patient Privacy",
        "Fraud Prevention",
        "Ethical Coding",
      ],
    },

    {
      title: "Quality, Audits and Professionalism",
      topics: [
        "Audit Readiness",
        "Documentation Standards",
        "Communication Skills",
        "Career Development",
      ],
    },

    {
      title: "CPC Exam Preparation",
      topics: [
        "Mock Tests",
        "Exam Strategies",
        "Time Management",
        "Career Opportunities",
      ],
    },
  ],

  mastery: [
    {
      value: "95%",
      label: "Practical Coding Skills",
      image:
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },

    {
      value: "500+",
      label: "Coding Exercises",
      image:
        "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    },

    {
      value: "16",
      label: "Industry Modules",
      image:
        "https://cdn-icons-png.flaticon.com/512/4320/4320371.png",
    },

    {
      value: "100%",
      label: "CPC Exam Focused",
      image:
        "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    },
  ],

  capstoneProjects: [
    {
      name: "Complete Patient Record Coding",

      whatYouDo:
        "Analyze patient documentation and assign ICD-10, CPT, and HCPCS codes accurately.",

      keySteps: [
        "Medical Record Review",
        "Diagnosis Coding",
        "Procedure Coding",
        "Compliance Validation",
      ],

      dataset:
        "Real-world healthcare documentation and coding scenarios",
    },

    {
      name: "Healthcare Claims Processing Project",

      whatYouDo:
        "Perform end-to-end coding and billing workflow for healthcare reimbursement.",

      keySteps: [
        "Documentation Review",
        "Code Assignment",
        "Billing Workflow",
        "Claims Validation",
      ],

      dataset:
        "Healthcare insurance claims and coding records",
    },
  ],

  jobRoles: [
    {
      name: "Medical Coder",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2400&auto=format&fit=crop",
      packageRange: "₹3 LPA - ₹6 LPA",
    },

    {
      name: "Certified Professional Coder (CPC)",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2400&auto=format&fit=crop",
      packageRange: "₹4 LPA - ₹8 LPA",
    },

    {
      name: "Medical Billing Specialist",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2400&auto=format&fit=crop",
      packageRange: "₹3.5 LPA - ₹7 LPA",
    },

    {
      name: "Coding Auditor",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2400&auto=format&fit=crop",
      packageRange: "₹5 LPA - ₹12 LPA",
    },

    {
      name: "Healthcare Documentation Specialist",
      image:
        "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2400&auto=format&fit=crop",
      packageRange: "₹4 LPA - ₹8 LPA",
    },

    {
      name: "Medical Coding Trainer",
      image:
        "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2400&auto=format&fit=crop",
      packageRange: "₹5 LPA - ₹10 LPA",
    },
  ],

  tools: [
    {
      image:
        "https://cdn-icons-png.flaticon.com/512/2966/2966486.png",
    },
    {
      image:
        "https://cdn-icons-png.flaticon.com/512/4320/4320371.png",
    },
    {
      image:
        "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    },
    {
      image:
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      image:
        "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    },
    {
      image:
        "https://cdn-icons-png.flaticon.com/512/3063/3063822.png",
    },
    {
      image:
        "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    },
    {
      image:
        "https://cdn-icons-png.flaticon.com/512/4207/4207247.png",
    },
  ],

  pricing: [
  {
    name: "Normal",
    badge: "RECORDED",
    title: "Recorded",
    subtitle: "Learn at your own pace",

    features: [
      "Recorded Sessions",
      "Assignments",
      "Certification",
      "Industry Projects",
      "LMS Access",
    ],

    price: "5999",
    note: "Best for Beginners",
    highlight: false,
  },

  {
    name: "Normal",
    badge: "MOST POPULAR",
    title: "Mentor Led",
    subtitle: "Guided learning with mentor support",

    features: [
      "Recorded Sessions",
      "Assignments",
      "Certification",
      "Industry Projects",
      "LMS Access",
      "Live Session",
      "Doubt Clearing Session",
      "Mentor Guidance",
      "Placement Support",
    ],

    price: "8999",
    note: "Most Popular",
    highlight: true,
  },

  {
    name: "Normal",
    badge: "PROFESSIONAL",
    title: "Professional",
    subtitle: "Become placement ready",

    features: [
      "Recorded Sessions",
      "Assignments",
      "Certification",
      "Industry Projects",
      "LMS Access",
      "Live Session",
      "Doubt Clearing Session",
      "Mentor Guidance",
      "Placement Support",
      "Interview Preparation",
      "1:1 Premium Session",
      "Portfolio Review",
    ],

    price: "14999",
    note: "Career Focused",
    highlight: false,
  },

  // ================= ZOHO =================

  {
    name: "Zoho",
    badge: "RECORDED",
    title: "Recorded",
    subtitle: "Self-paced Zoho learning",

    features: [
      "Recorded Sessions",
      "Hands-on Projects",
      "Certificates",
      "Study Materials",
      "Direct Certification from Zoho",
      "Placement Support",
      "Doubt Clearing Sessions",
      "Live Sessions",
    ],

    price: "7999",
    note: "Learn Zoho at your convenience",
    highlight: false,
  },

  {
    name: "Zoho",
    badge: "PROFESSIONAL",
    title: "Professional",
    subtitle: "Complete Zoho career pathway",

    features: [
      "Recorded Sessions",
      "Hands-on Projects",
      "Certificates",
      "Study Materials",
      "Live Sessions",
      "Doubt Clearing Sessions",
      "Placement Support",
      "Direct Certification from Zoho",
      "Interview Preparation",
      "1:1 Premium Session",
      "Mentor Guidance",
    ],

    price: "14999",
    note: "Premium Career Growth",
    highlight: true,
  },
],

  brochure: {
    file: "",
  },
};
export default function CreateCoursePage({ slug }: any) {
  const isEdit = !!slug;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<any>(emptyCourse);
  const [preview, setPreview] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // 🔥 FETCH COURSE (EDIT MODE)
  useEffect(() => {
    if (!slug) return;

    const fetchCourse = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/api/courses/${slug}`);

        if (!res.ok) {
          throw new Error("Failed to fetch course");
        }

        const data = await res.json();

        // 🔥 If your API returns { course: {...} }
        const course = data.course || data;
        console.log("API RESPONSE:", data);
        setForm(course);
        setPreview(course.image || "");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [slug]);

  // 🔹 HANDLE CHANGE
  const handleChange = (key: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [key]: value }));
  };

  // 🔹 IMAGE
  const handleImage = (e: any) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
      handleChange("image", reader.result);
    };

    reader.readAsDataURL(file);
  };

  // 🔥 SUBMIT (CREATE / UPDATE)
  // const handleSubmit = async () => {
  //   setLoading(true);

  //   const res = await fetch(isEdit ? `/api/course/${slug}` : "/api/course", {
  //     method: isEdit ? "PATCH" : "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(form),
  //   });

  //   setLoading(false);

  //   if (res.ok) {
  //     toast.success(isEdit ? "Course Updated ✏️" : "Course Created 🚀");

  //     if (!isEdit) {
  //       setForm(emptyCourse);
  //       setPreview("");
  //       setOpen(false);
  //     }
  //   } else {
  //     toast.error("Something went wrong ❌");
  //   }
  // };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const res = await fetch(isEdit ? `/api/course/${slug}` : "/api/course", {
        method: isEdit ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Something went wrong ❌");
        return;
      }

      toast.success(isEdit ? "Course Updated ✏️" : "Course Created 🚀");

      // ✅ RESET FORM
      if (!isEdit) {
        setForm(emptyCourse);
        setPreview("");
        setOpen(false);
      }

      // ✅ REFRESH FRONTEND DATA
      router.refresh();

      // ✅ OPTIONAL HARD REFRESH
      // window.location.reload();
    } catch (error) {
      console.log(error);

      toast.error("Failed to save course ❌");
    } finally {
      setLoading(false);
    }
  };

  // ✅ CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="p-10">
      {/* OPEN BUTTON */}
      {!isEdit && (
        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-white px-6  py-3 rounded-xl flex gap-2 "
        >
          <BadgePlus /> <p className="hidden md:block">Create Course</p>
        </button>
      )}

      {/* MODAL / EDIT PAGE */}
      {(open || isEdit) && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div
            className="bg-white w-[900px] max-h-[90vh] overflow-y-auto p-6 rounded-xl shadow-xl flex flex-col gap-4"
            ref={dropdownRef}
          >
            <h2 className="text-2xl font-bold mb-4">
              {isEdit ? "Edit Course" : "Create Course"}
            </h2>

            {loading && <p className="text-sm">Loading...</p>}

            {/* BASIC */}
            <div className="bg-white p-6 rounded-2xl shadow-md space-y-5">
              <h2 className="text-lg font-semibold text-gray-700">
                📘 Basic Information
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                {/* TITLE */}
                <div>
                  <label className="label">Course Title</label>
                  <div className="relative">
                    <input
                      className="input-style pl-10"
                      value={form.title || ""}
                      onChange={(e) => handleChange("title", e.target.value)}
                      placeholder="Enter course title"
                    />
                  </div>
                </div>

                {/* CATEGORY */}
                <div>
                  <label className="label">Category</label>
                  <div className="relative">
                    <input
                      className="input-style pl-10"
                      value={form.category || ""}
                      onChange={(e) => handleChange("category", e.target.value)}
                      placeholder="Enter category"
                    />
                  </div>
                </div>

                <div>
                  <label className="label">Sub-Category</label>
                  <div className="relative">
                    <input
                      className="input-style pl-10"
                      value={form.subcategory || ""}
                      onChange={(e) =>
                        handleChange("subcategory", e.target.value)
                      }
                      placeholder="Enter Sub-category"
                    />
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="md:col-span-2">
                  <label className="label">Description</label>
                  <textarea
                    className="input-style"
                    value={form.description || ""}
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    placeholder="Write course description..."
                  />
                </div>

                {/* HEADLINE */}
                <div>
                  <label className="label">Headline</label>
                  <input
                    className="input-style"
                    value={form.headline || ""}
                    onChange={(e) => handleChange("headline", e.target.value)}
                  />
                </div>

                {/* TAGLINE */}
                <div>
                  <label className="label">Tagline</label>
                  <input
                    className="input-style"
                    value={form.tagline || ""}
                    onChange={(e) => handleChange("tagline", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* STATUS */}
              <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Clock size={18} /> Status & Settings
                </h2>

                <div>
                  <label className="label">Course Status</label>
                  <select
                    className="input-style"
                    value={form.start}
                    onChange={(e) => handleChange("start", e.target.value)}
                  >
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <TrendingUp className="text-orange-500" size={18} />
                  <label className="text-gray-700 flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={form.trend}
                      onChange={(e) => handleChange("trend", e.target.checked)}
                    />
                    Trending Course
                  </label>
                </div>

                <div>
                  <label className="label">Trend Description</label>
                  <input
                    className="input-style"
                    value={form.trenddesc || ""}
                    onChange={(e) => handleChange("trenddesc", e.target.value)}
                  />
                </div>

                <div>
                  <label className="label">Duration</label>
                  <input
                    className="input-style"
                    value={form.duration || ""}
                    onChange={(e) => handleChange("duration", e.target.value)}
                  />
                </div>
              </div>

              {/* IMAGE */}
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <ImagePlus size={18} /> Course Image
                </h2>

                <input
                  value={form.image || ""}
                  onChange={(e) => handleChange("image", e.target.value)}
                  placeholder="Icon URL"
                  className="w-full border p-2 rounded mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <div className="relative border-2 border-dashed rounded-xl overflow-hidden group">
                  {form.image ? (
                    <div className="flex items-center gap-2 ">
                      <img
                        src={form.image}
                        alt="Course Preview"
                        className="h-60 w-full object-cover rounded"
                      />
                    </div>
                  ) : (
                    <div className="h-48 flex flex-col items-center justify-center text-gray-400 cursor-pointer">
                      <ImagePlus
                        size={40}
                        className="mx-auto mb-2 text-blue-400"
                      />

                      <p className="font-medium">Image Preview</p>

                      <p className="text-sm mt-1">Paste image URL to preview</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 🔥 CHILD EDITORS */}
            <StatsEditor
              value={form.stats}
              onChange={(v) => handleChange("stats", v)}
            />
            <SkillsEditor
              value={form.skills}
              onChange={(v) => handleChange("skills", v)}
            />
            <ModulesEditor
              value={form.modules}
              onChange={(v) => handleChange("modules", v)}
            />
            <PricingEditor
              value={form.pricing}
              onChange={(v) => handleChange("pricing", v)}
            />
            <BrochureEditor
              value={form.brochure}
              onChange={(v) => handleChange("brochure", v)}
            />
            <CapstoneProjectEditor
              value={form.capstoneProjects}
              onChange={(v) => handleChange("capstoneProjects", v)}
            />
            <JobRolesEditor
              value={form.jobRoles}
              onChange={(v) => handleChange("jobRoles", v)}
            />
            <MasteryEditor
              value={form.mastery}
              onChange={(v) => handleChange("mastery", v)}
            />
            <ToolsEditor
              value={form.tools}
              onChange={(v) => handleChange("tools", v)}
            />

            {/* ACTIONS */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                {loading ? "Saving..." : isEdit ? "Update" : "Save"}
              </button>

              {!isEdit && (
                <button
                  onClick={() => setOpen(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .input-style {
          width: 100%;
          border: 1px solid #e5e7eb;
          padding: 12px;
          border-radius: 10px;
          outline: none;
          transition: all 0.2s;
          background: #fafafa;
        }

        .input-style:focus {
          border-color: #6366f1;
          background: white;
          box-shadow: 0 0 0 3px #6366f120;
        }

        .label {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 6px;
          display: block;
        }

        .icon {
          position: absolute;
          left: 10px;
          top: 12px;
          color: #9ca3af;
        }
      `}</style>
    </div>
  );
}
