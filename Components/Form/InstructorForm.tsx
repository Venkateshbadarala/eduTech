"use client";

import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

import {
  User,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Globe,
  BookOpen,
  Clock3,
  IndianRupee,
  FileText,
  FileUser,
  Send,
  X,
  Sparkles,
  Award,
} from "lucide-react";
import CustomTeachingMode from "./CustomTeachingMode";

interface InstructorFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InstructorForm({
  isOpen,
  onClose,
}: InstructorFormProps) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    expertise: "",
    experience: "",
    qualification: "",
    linkedin: "",
    portfolio: "",
    courseTopic: "",
    teachingMode: "",
    expectedSalary: "",
    about: "",
  });

  // 🔥 HANDLE CHANGE
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 SUBMIT
  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    // ✅ VALIDATIONS
    if (!formData.fullName.trim()) {
      toast.error("Full name is required");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Enter valid email");
      return;
    }

    if (!formData.phone.trim()) {
      toast.error("Phone number is required");
      return;
    }

    if (
      formData.phone.replace(/\D/g, "").length < 10
    ) {
      toast.error("Enter valid phone number");
      return;
    }

    if (!formData.expertise.trim()) {
      toast.error("Expertise is required");
      return;
    }

    if (!formData.experience.trim()) {
      toast.error("Experience is required");
      return;
    }

    if (!formData.qualification.trim()) {
      toast.error("Qualification is required");
      return;
    }

    if (!formData.courseTopic.trim()) {
      toast.error("Course topic is required");
      return;
    }

    if (!formData.teachingMode.trim()) {
      toast.error("Select teaching mode");
      return;
    }

    if (!formData.about.trim()) {
      toast.error("Please enter instructor bio");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "/api/instructor-query",
        formData
      );

      toast.success(
        res.data.message ||
          "Instructor application submitted 🚀"
      );

      // RESET
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        expertise: "",
        experience: "",
        qualification: "",
        linkedin: "",
        portfolio: "",
        courseTopic: "",
        teachingMode: "",
        expectedSalary: "",
        about: "",
      });

      setTimeout(() => {
        onClose();
      }, 1500);

    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "Submission failed"
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-4">

        

        {/* OVERLAY */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-md"
        />

        {/* MODAL */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: 40,
          }}
          transition={{ duration: 0.35 }}
          className="
            relative
            w-full
            max-w-5xl
            max-h-[75vh]
            overflow-y-auto
            no-scrollbar
            rounded-[36px]
            bg-white/90
            backdrop-blur-2xl
            border border-white/20
            shadow-[0_20px_100px_rgba(0,0,0,0.15)]
          "
        >
          {/* GLOW */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-(--color-primary)/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-72 h-72 bg-(--color-secondary)/20 rounded-full blur-3xl" />

          {/* CLOSE */}
          <button
            type="button"
            onClick={onClose}
            className="
              absolute top-5 right-5 z-20
              w-10 h-10 rounded-full
              bg-white shadow-lg
              flex items-center justify-center
              hover:rotate-90 transition
            "
          >
            <X size={20} />
          </button>

          {/* HEADER */}
          <div className="relative p-6 md:p-8 border-b border-gray-100">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-(--color-primary) to-(--color-secondary) text-white text-sm font-semibold shadow-lg">
              <Sparkles size={16} />
              Instructor Application
            </div>

            <h2 className="text-2xl md:text-3xl font-black mt-2 leading-tight text-(--color-black-1)">
              Become an Expert Instructor at{" "}
              <span className="bg-gradient-to-r from-(--color-primary) to-(--color-secondary) text-transparent bg-clip-text">
                Cornixe
              </span>
            </h2>

            <p className="text-(--color-gray-2) mt-1 text-base md:text-sm max-w-3xl leading-relaxed">
              Teach passionate learners, build your personal brand,
              earn income, and share your expertise with thousands
              of students worldwide.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="relative p-6 md:p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">

              <InputField
                icon={<User size={18} />}
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
              />

              <InputField
                icon={<Mail size={18} />}
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@gmail.com"
              />

              <InputField
                icon={<Phone size={18} />}
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
              />

              <InputField
                icon={<Briefcase size={18} />}
                label="Area of Expertise"
                name="expertise"
                value={formData.expertise}
                onChange={handleChange}
                placeholder="MERN Stack, AI, AWS"
              />

              <InputField
                icon={<Award size={18} />}
                label="Years of Experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="5 Years"
              />

              <InputField
                icon={<GraduationCap size={18} />}
                label="Highest Qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="B.Tech, MBA"
              />

              <InputField
                icon={<BookOpen size={18} />}
                label="Course Topic"
                name="courseTopic"
                value={formData.courseTopic}
                onChange={handleChange}
                placeholder="Full Stack Development"
              />

              <CustomTeachingMode
  formData={formData}
  setFormData={setFormData}
/>

              <InputField
                icon={<FileUser size={18} />}
                label="LinkedIn Profile"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="linkedin.com/in/username"
              />

              <InputField
                icon={<Globe size={18} />}
                label="Portfolio / Website"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="yourportfolio.com"
              />

              <InputField
                icon={<IndianRupee size={18} />}
                label="Expected Salary / Revenue"
                name="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleChange}
                placeholder="₹50,000"
              />
            </div>

            {/* ABOUT */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Instructor Bio
              </label>

              <div className="relative">
                <FileText
                  size={18}
                  className="absolute left-4 top-5 text-(--color-primary)"
                />

                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your teaching experience, achievements, and skills..."
                  required
                  className="
                    w-full
                    rounded-2xl
                    border border-gray-200
                    bg-white/70
                    p-4 pl-12
                    outline-none
                    resize-none
                    focus:border-(--color-primary)
                    focus:ring-4 focus:ring-blue-100
                  "
                />
              </div>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="
                w-full h-14
                rounded-2xl
                bg-gradient-to-r from-(--color-primary) to-(--color-secondary)
                text-white
                font-semibold
                text-lg
                shadow-[0_15px_50px_rgba(0,102,255,0.25)]
                hover:shadow-[0_20px_60px_rgba(0,102,255,0.35)]
                transition
                flex items-center justify-center gap-2
              "
            >
              {loading ? (
                "Submitting..."
              ) : (
                <>
                  Apply as Instructor
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

/* 🔥 INPUT FIELD */
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
            w-full h-14 pl-12 pr-4
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