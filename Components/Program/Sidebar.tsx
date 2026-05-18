"use client";

import { FC, JSX, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
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
} from "@/constants/svgIcons";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

interface Props {
  onSelectCategory: (category: string) => void;
  onClose?: () => void;
}

const iconMap: Record<string, JSX.Element> = {
  "CORE STREAM": <ComputerScienceIcon />,
  "MANAGEMENT STREAM": <ManagementIcon />,
  "MEDICAL STREAM": <MedicalIcon />,
  "DESIGNING STREAM": <AutodeskIcon />,

  "TECH & DATA": <ComputerScienceIcon />,
  "MECH & CIVIL": <MechanicalIcon />,
  "EEE & ECE": <ElectricalIcon />,

  IBM: <IBMIcon />,
  Microsoft: <MicrosoftIcon />,
  Meta: <MetaIcon />,
  "Placement Courses": <PlacementIcon />,

  Default: <AllIcon />,
};

// ✅ MAIN STREAMS
const STREAMS = [
  {
    name: "ADVANCED PROGRAM",
    substreams: [],
  },
  {
    name: "CORE STREAM",
    substreams: ["TECH & DATA", "MECH & CIVIL", "EEE & ECE"],
  },
  {
    name: "MANAGEMENT STREAM",
    substreams: [],
  },
  {
    name: "MEDICAL STREAM",
    substreams: [],
  },
  {
    name: "DESIGNING STREAM",
    substreams: [],
  },
];

// ✅ MAP DATABASE CATEGORY
const normalizeCategory = (cat: string) => {
  if (!cat) return "";

  return cat.trim().toLowerCase();
};

const categoryLabelMap: Record<
  string,
  string
> = {

  // 🔥 MAIN STREAMS
  "advanced program":
    "ADVANCED PROGRAM",

  "tech & data":
    "TECH & DATA",

  "mech & civil":
    "MECH & CIVIL",

  "eee & ece":
    "EEE & ECE",

  "management stream":
    "MANAGEMENT STREAM",

  "medical stream":
    "MEDICAL STREAM",

  "designing stream":
    "DESIGNING STREAM",

  // 🔥 ADVANCED PROGRAM
  "web development":
    "ADVANCED PROGRAM",

  "advanced digital marketing":
    "ADVANCED PROGRAM",

  // 🔥 TECH & DATA
  "app development":
    "TECH & DATA",

  "ai ml":
    "TECH & DATA",

  "artificial intelligence":
    "TECH & DATA",

  "data science":
    "TECH & DATA",

  "cyber security":
    "TECH & DATA",

  // 🔥 MECH & CIVIL
  mechanical:
    "MECH & CIVIL",

  civil:
    "MECH & CIVIL",

  // 🔥 EEE & ECE
  eee:
    "EEE & ECE",

  ece:
    "EEE & ECE",

  // 🔥 MANAGEMENT
  management:
    "MANAGEMENT STREAM",

  mba:
    "MANAGEMENT STREAM",

  business:
    "MANAGEMENT STREAM",

  "digital marketing":
    "MANAGEMENT STREAM",

  finance:
    "MANAGEMENT STREAM",

  // 🔥 MEDICAL
  medical:
    "MEDICAL STREAM",

  pharmacy:
    "MEDICAL STREAM",

  nursing:
    "MEDICAL STREAM",

  // 🔥 DESIGN
  designing:
    "DESIGNING STREAM",

  uiux:
    "DESIGNING STREAM",

  graphic:
    "DESIGNING STREAM",
};

const Sidebar: FC<Props> = ({ onSelectCategory, onClose }) => {
  const router = useRouter();

  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // ✅ STREAM OPEN
  const [openStream, setOpenStream] = useState<number | null>(0);

  // ✅ SUBSTREAM OPEN
  const [openSubstream, setOpenSubstream] = useState<string | null>(null);

  const [activeCourse, setActiveCourse] = useState<string | null>(null);

  // ✅ FETCH
  const fetchCourses = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/courses");

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

  // ✅ GROUP COURSES
  const grouped = courses.reduce((acc: any, course: any) => {
    const normalized = normalizeCategory(
      course.subcategory 
    );

    const mappedCategory =
      categoryLabelMap[normalized] || "ADVANCED PROGRAM";

    if (!acc[mappedCategory]) {
      acc[mappedCategory] = [];
    }

    acc[mappedCategory].push(course);

    return acc;
  }, {});

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.4 }}
      className="w-80 h-screen bg-white shadow-2xl flex flex-col rounded-r-xl"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center p-2 border-b">
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" width={60} height={60} />
        </Link>

        <div className="flex flex-row gap-4">
          <button
            type="button"
            className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full"
          >
            Talk with us
          </button>

          <button
            type="button"
            onClick={onClose}
            className="
              w-8 h-8 rounded-full
              bg-white shadow-lg
              flex items-center justify-center
              hover:rotate-90 transition
            "
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">

        {/* LOADING */}
        {loading && (
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-gray-100 animate-pulse"
              >
                <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        )}

        {/* STREAMS */}
        {!loading &&
          STREAMS.map((stream, streamIndex) => {
            const isStreamOpen = openStream === streamIndex;

            return (
              <div key={streamIndex}>
                {/* MAIN STREAM */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  onClick={() =>
                    setOpenStream(
                      isStreamOpen ? null : streamIndex
                    )
                  }
                  className={`
                    flex justify-between items-center
                    p-4 rounded-xl cursor-pointer transition-all
                    ${
                      isStreamOpen
                        ? "bg-blue-50 text-blue-600"
                        : "hover:bg-gray-100"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100">
                      {iconMap[stream.name] || iconMap.Default}
                    </div>

                    <span className="font-semibold text-sm">
                      {stream.name}
                    </span>
                  </div>

                  <motion.div
                    animate={{
                      rotate: isStreamOpen ? 180 : 0,
                    }}
                  >
                    <DownIcon />
                  </motion.div>
                </motion.div>

                {/* SUBSTREAMS */}
                <AnimatePresence>
                  {isStreamOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 mt-2 space-y-2 border-l-2 border-blue-100">

                        {/* CORE STREAM */}
                        {stream.substreams.length > 0 ? (
                          stream.substreams.map((substream, subIndex) => {
                            const isSubOpen =
                              openSubstream === substream;

                            return (
                              <div key={subIndex}>
                                {/* SUBSTREAM HEADER */}
                                <div
                                  onClick={() =>
                                    setOpenSubstream(
                                      isSubOpen
                                        ? null
                                        : substream
                                    )
                                  }
                                  className="
                                    flex justify-between items-center
                                    p-3 rounded-lg cursor-pointer
                                    hover:bg-blue-50 transition
                                  "
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-md bg-gray-100">
                                      {iconMap[substream]}
                                    </div>

                                    <span className="text-sm font-medium">
                                      {substream}
                                    </span>
                                  </div>

                                  <motion.div
                                    animate={{
                                      rotate: isSubOpen
                                        ? 180
                                        : 0,
                                    }}
                                  >
                                    <DownIcon />
                                  </motion.div>
                                </div>

                                {/* COURSES */}
                                <AnimatePresence>
                                  {isSubOpen && (
                                    <motion.div
                                      initial={{
                                        height: 0,
                                        opacity: 0,
                                      }}
                                      animate={{
                                        height: "auto",
                                        opacity: 1,
                                      }}
                                      exit={{
                                        height: 0,
                                        opacity: 0,
                                      }}
                                      className="overflow-hidden"
                                    >
                                      <div className="pl-3 mt-2 space-y-2">

                                        {(grouped[substream] || []).map(
                                          (
                                            course: any,
                                            i: number
                                          ) => {
                                            const isActive =
                                              activeCourse ===
                                              course.title;

                                            return (
                                              <motion.div
                                                key={i}
                                                whileHover={{
                                                  scale: 1.02,
                                                  x: 4,
                                                }}
                                                whileTap={{
                                                  scale: 0.98,
                                                }}
                                                onClick={() => {
                                                  setActiveCourse(
                                                    course.title
                                                  );

                                                  onSelectCategory(
                                                    substream
                                                  );

                                                  onClose?.();

                                                  router.push(
                                                    `/courses/${course._id}`
                                                  );
                                                }}
                                                className={`
                                                  p-3 rounded-xl cursor-pointer transition
                                                  ${
                                                    isActive
                                                      ? "bg-blue-100 text-blue-700"
                                                      : "hover:bg-blue-50"
                                                  }
                                                `}
                                              >
                                                <p className="text-sm font-medium">
                                                  {course.title}
                                                </p>

                                                <div className="flex gap-3 mt-1 text-xs text-gray-400">
                                                  <span className="flex items-center gap-1">
                                                    <TimeIcon />
                                                    {course.duration ||
                                                      "N/A"}
                                                  </span>

                                                  <span className="flex items-center gap-1">
                                                    <LiveIcon />
                                                    {course.start ||
                                                      "Live"}
                                                  </span>
                                                </div>
                                              </motion.div>
                                            );
                                          }
                                        )}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })
                        ) : (
                          // OTHER STREAMS
                          <div className="space-y-2">
                            {(grouped[stream.name] || []).map(
                              (course: any, i: number) => (
                                <motion.div
                                  key={i}
                                  whileHover={{
                                    scale: 1.02,
                                    x: 4,
                                  }}
                                  whileTap={{
                                    scale: 0.98,
                                  }}
                                  onClick={() => {
                                    setActiveCourse(
                                      course.title
                                    );

                                    onSelectCategory(
                                      stream.name
                                    );

                                    onClose?.();

                                    router.push(
                                      `/courses/${course._id}`
                                    );
                                  }}
                                  className={`
                                    p-3 rounded-xl cursor-pointer transition
                                    ${
                                      activeCourse ===
                                      course.title
                                        ? "bg-blue-100 text-blue-700"
                                        : "hover:bg-blue-50"
                                    }
                                  `}
                                >
                                  <p className="text-sm font-medium">
                                    {course.title}
                                  </p>

                                  <div className="flex gap-3 mt-1 text-xs text-gray-400">
                                    <span className="flex items-center gap-1">
                                      <TimeIcon />
                                      {course.duration ||
                                        "N/A"}
                                    </span>

                                    <span className="flex items-center gap-1">
                                      <LiveIcon />
                                      {course.start ||
                                        "Live"}
                                    </span>
                                  </div>
                                </motion.div>
                              )
                            )}
                          </div>
                        )}
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
        © 2026 Cornixe. All rights reserved.
      </div>
    </motion.div>
  );
};

export default Sidebar;