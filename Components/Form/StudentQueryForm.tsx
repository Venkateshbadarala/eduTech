"use client";

import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

import {
  User,
  Mail,
  Phone,
  BookOpen,
  GraduationCap,
  Languages,
  Send,
  X,
} from "lucide-react";

interface StudentQueryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StudentQueryForm({
  isOpen,
  onClose,
}: StudentQueryFormProps) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    college: "",
    language: "",
  });

  // 🔥 HANDLE CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 SUBMIT
 // 🔥 SUBMIT
const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  // ✅ FULL NAME
  if (!formData.fullName.trim()) {
    toast.error("Full name is required");
    return;
  }

  // ✅ EMAIL
  if (!formData.email.trim()) {
    toast.error("Email is required");
    return;
  }

  // ✅ EMAIL VALIDATION
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email)) {
    toast.error("Enter valid email address");
    return;
  }

  // ✅ PHONE
  if (!formData.phone.trim()) {
    toast.error("Phone number is required");
    return;
  }

  // ✅ PHONE VALIDATION
  const phoneRegex = /^[0-9+\-\s()]+$/;

  if (
    !phoneRegex.test(formData.phone) ||
    formData.phone.replace(/\D/g, "").length < 10
  ) {
    toast.error("Enter valid phone number");
    return;
  }

  // ✅ COURSE
  if (!formData.course.trim()) {
    toast.error(
      "Interested course is required"
    );
    return;
  }

  // ✅ COLLEGE
  if (!formData.college.trim()) {
    toast.error(
      "College / University is required"
    );
    return;
  }

  // ✅ LANGUAGE
  if (!formData.language.trim()) {
    toast.error(
      "Preferred language is required"
    );
    return;
  }

  try {
    setLoading(true);

    const res = await axios.post(
      "/api/student-query",
      formData
    );

    toast.success(
      res.data.message ||
        "Submitted Successfully 🚀"
    );

    // ✅ RESET FORM
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      course: "",
      college: "",
      language: "",
    });

    // ✅ CLOSE MODAL
    setTimeout(() => {
      onClose();
    }, 1200);

  } catch (error: any) {
    toast.error(
      error.response?.data?.message ||
        "Something went wrong"
    );
  } finally {
    setLoading(false);
  }
};

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6">
        
       

        {/* 🔥 OVERLAY */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-md"
        />

        {/* 🔥 MODAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 0.35 }}
          className="
            relative
            w-full
            max-w-3xl
            max-h-[75vh]
            overflow-y-auto
            no-scrollbar
            bg-white/90
            backdrop-blur-2xl
            border border-white/20
            rounded-[32px]
            shadow-[0_20px_80px_rgba(0,0,0,0.15)]
          "
        >
          {/* 🔥 GLOW */}
          <div className="absolute top-0 left-0 w-60 h-60 bg-(--color-primary)/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-60 h-60 bg-(--color-secondary)/20 rounded-full blur-3xl" />

          {/* 🔥 CLOSE BUTTON */}
          <button
            type="button"
            onClick={onClose}
            className="
              absolute top-5 right-5 z-20
              w-10 h-10
              rounded-full
              bg-white
              shadow-md
              flex items-center justify-center
              hover:rotate-90
              transition duration-300
            "
          >
            <X
              size={20}
              className="text-(--color-black-1)"
            />
          </button>

          {/* 🔥 HEADER */}
          <div className="relative p-5 md:p-8 border-b border-gray-100">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-(--color-primary) to-(--color-secondary) text-white text-sm font-semibold shadow-lg">
              Student Enquiry Form
            </div>

            <h2 className="text-2xl md:text-4xl font-black text-(--color-black-1) mt-6 leading-tight">
              Launch Your Career With{" "}
              <span className="bg-gradient-to-r from-(--color-primary) to-(--color-secondary) text-transparent bg-clip-text">
                Cornixe
              </span>
            </h2>

            <p className="text-(--color-gray-2) mt-3 text-sm md:text-base leading-relaxed max-w-2xl">
              Connect with industry mentors, join high-demand programs,
              and unlock exciting opportunities for your future career.
            </p>
          </div>

          {/* 🔥 FORM */}
          <form
            onSubmit={handleSubmit}
            className="relative p-5 md:p-8 space-y-5"
          >
            {/* 🔥 GRID */}
            <div className="grid md:grid-cols-2 gap-5">

              {/* FULL NAME */}
              <InputField
                icon={<User size={18} />}
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />

              {/* EMAIL */}
              <InputField
                icon={<Mail size={18} />}
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                type="email"
              />

              {/* PHONE */}
              <InputField
                icon={<Phone size={18} />}
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                type="tel"
              />

              {/* COURSE */}
              <InputField
                icon={<BookOpen size={18} />}
                label="Interested Course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="e.g. Full Stack Development"
              />

              {/* COLLEGE */}
              <InputField
                icon={<GraduationCap size={18} />}
                label="College / University"
                name="college"
                value={formData.college}
                onChange={handleChange}
                placeholder="e.g. IIT Bombay"
              />

              {/* LANGUAGE */}
              <InputField
                icon={<Languages size={18} />}
                label="Preferred Language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                placeholder="e.g. English, Hindi"
              />
            </div>

            {/* 🔥 SUBMIT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="
                w-full h-14 mt-3
                rounded-2xl
                bg-gradient-to-r from-(--color-primary) to-(--color-secondary)
                text-white
                font-semibold
                text-lg
                shadow-[0_15px_50px_rgba(0,102,255,0.25)]
                hover:shadow-[0_20px_60px_rgba(0,102,255,0.35)]
                transition-all duration-300
                flex items-center justify-center gap-2
              "
            >
              {loading ? (
                "Submitting..."
              ) : (
                <>
                  Submit Enquiry
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

/* 🔥 REUSABLE INPUT FIELD */
function InputField({
  icon,
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: any) {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-700 mb-2 block">
        {label}
      </label>

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-(--color-primary)">
          {icon}
        </div>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className="
            w-full h-13 pl-12 pr-4
            rounded-2xl
            border border-gray-200
            bg-white/70
            outline-none
            text-sm md:text-base
            focus:border-(--color-primary)
            focus:ring-4 focus:ring-blue-100
            transition
          "
        />
      </div>
    </div>
  );
}