"use client";

import { FC, JSX, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation"; // ✅ for redirect
import Logo from "@/public/logo.png";
import {
  IBMIcon,
  ManagementIcon,
  ComputerScienceIcon,
  MicrosoftIcon,
  MetaIcon,
  ElectricalIcon,
  MechanicalIcon,
  MedicalIcon,
  AutodeskIcon,
  PlacementIcon,
  DownIcon,
  TimeIcon,
  LiveIcon,
  AllIcon,
  CancelIcon,
} from "@/constants/svgIcons";
import Image from "next/image";
import Link from "next/link";

interface Props {
  onSelectCategory: (category: string) => void;
  onClose?: () => void;
}

const iconMap: Record<string, JSX.Element> = {
  "Advanced Programs": <AllIcon />,
  "Computer Science": <ComputerScienceIcon />,
  IBM: <IBMIcon />,
  Microsoft: <MicrosoftIcon />,
  Meta: <MetaIcon />,
  Electrical: <ElectricalIcon />,
  Mechanical: <MechanicalIcon />,
  Management: <ManagementIcon />,
  Medical: <MedicalIcon />,
  "Autodesk Courses": <AutodeskIcon />,
  "Placement Courses": <PlacementIcon />,
};

const normalizeCategory = (cat: string) => {
  if (!cat) return "advanced programs";
  return cat.trim().toLowerCase();
};

const categoryLabelMap: Record<string, string> = {
  "advanced programs": "Advanced Programs",
  "web development": "Advanced Programs",
  "app development": "Advanced Programs",
  "ai ml": "Advanced Programs",
  "computer science": "Computer Science",
  ibm: "IBM",
  microsoft: "Microsoft",
  meta: "Meta",
  electrical: "Electrical",
  mechanical: "Mechanical",
  management: "Management",
  medical: "Medical",
  "autodesk courses": "Autodesk Courses",
  "placement courses": "Placement Courses",
};

const Sidebar: FC<Props> = ({ onSelectCategory, onClose }) => {
  const router = useRouter(); // ✅ router

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCourse, setActiveCourse] = useState<string | null>(null);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCourses = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/courses", {
        cache: "no-store",
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", text);
        throw new Error("Failed");
      }

      const data = await res.json();

      setCourses(Array.isArray(data) ? data : data.courses || []);
    } catch (err) {
      console.error(err);
      toast.error("Error fetching courses ❌");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();

    const handlePageShow = (event: any) => {
      if (event.persisted) {
        fetchCourses();
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  const grouped = courses.reduce((acc: any, course: any) => {
    const normalized = normalizeCategory(course.category);

    const displayCategory = categoryLabelMap[normalized] || "Advanced Programs";

    if (!acc[displayCategory]) acc[displayCategory] = [];

    acc[displayCategory].push(course);

    return acc;
  }, {});

  const categoryList = Object.keys(grouped);

  const toggleCategory = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.4 }}
      className="w-80 h-screen bg-white shadow-2xl flex flex-col"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center p-2 border-b">
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" width={50} height={50} />
        </Link>
        <div className="flex flex-row gap-4">
          <button
            type="button"
            className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full"
          >
            Talk with us  
          </button>

          <motion.button
            onClick={onClose}
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:bg-gray-100 p-2 rounded-full transition"
          >
            <CancelIcon />
          </motion.button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {/* 🔥 SKELETON LOADING */}
        {loading && (
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-3 rounded-lg bg-gray-100 animate-pulse">
                <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        )}

        {!loading && categoryList.length === 0 && (
          <p className="text-center text-gray-400">No courses available</p>
        )}

        {!loading &&
          categoryList.map((category, index) => {
            const isActiveCategory = openIndex === index;

            return (
              <div key={index}>
                {/* CATEGORY */}
                <motion.div
                  onClick={() => toggleCategory(index)}
                  whileHover={{ scale: 1.02 }}
                  className={`
                    flex justify-between items-center cursor-pointer p-3 rounded-lg transition-all
                    ${
                      isActiveCategory
                        ? "bg-blue-50 text-blue-600 shadow-sm"
                        : "hover:bg-gray-100 text-gray-700"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`
                        p-2 rounded-md
                        ${isActiveCategory ? "bg-blue-100" : "bg-gray-100"}
                      `}
                    >
                      {iconMap[category] || <AllIcon />}
                    </div>

                    <span className="font-medium">{category}</span>
                  </div>

                  <motion.div animate={{ rotate: isActiveCategory ? 180 : 0 }}>
                    <DownIcon />
                  </motion.div>
                </motion.div>

                {/* COURSES */}
                <AnimatePresence>
                  {isActiveCategory && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-3 mt-2 space-y-2 border-l-2 border-blue-100">
                        {grouped[category].map((course: any, i: number) => {
                          const isActiveCourse = activeCourse === course.title;

                          return (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.02, x: 4 }}
                              whileTap={{ scale: 0.97 }}
                              onClick={() => {
                                setActiveCourse(course.title);
                                onSelectCategory(category);

                                // ✅ REDIRECT TO COURSE PAGE
                                router.push(`/courses/${course._id}`);
                              }}
                              className={`
                                p-3 rounded-lg cursor-pointer transition-all
                                ${
                                  isActiveCourse
                                    ? "bg-blue-100 text-blue-700 shadow-sm"
                                    : "hover:bg-blue-50 text-gray-700"
                                }
                              `}
                            >
                              <p className="text-sm font-medium">
                                {course.title}
                              </p>

                              <div className="flex gap-3 mt-1 text-xs text-gray-400">
                                <span className="flex items-center gap-1">
                                  <TimeIcon /> {course.duration || "N/A"}
                                </span>
                                <span className="flex items-center gap-1">
                                  <LiveIcon /> {course.start || "Live"}
                                </span>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
      </div>

      {/* FOOTER */}
      <div className="p-4 border-t text-center text-sm text-gray-500">
        © 2026 Venkatesh. All rights reserved.
      </div>
    </motion.div>
  );
};

export default Sidebar;
