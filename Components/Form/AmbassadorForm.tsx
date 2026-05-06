"use client";

import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Building2,
  MapPin,
  Send,
  X,
  Globe,
  Sparkles,
} from "lucide-react";

interface AmbassadorFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AmbassadorForm({
  isOpen,
  onClose,
}: AmbassadorFormProps) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    city: "",
    year: "",
    linkedin: "",
    whyJoin: "",
  });

  // 🔥 HANDLE CHANGE
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
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

  // ✅ VALIDATIONS
  if (!formData.fullName.trim()) {
    toast.error("Full name is required");
    return;
  }

  if (!formData.email.trim()) {
    toast.error("Email is required");
    return;
  }

  // ✅ EMAIL VALIDATION
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

  // ✅ PHONE VALIDATION
  if (formData.phone.length < 10) {
    toast.error(
      "Enter valid phone number"
    );
    return;
  }

  if (!formData.college.trim()) {
    toast.error(
      "College / University is required"
    );
    return;
  }

  if (!formData.city.trim()) {
    toast.error("City is required");
    return;
  }

  if (!formData.year.trim()) {
    toast.error("Current year is required");
    return;
  }

  if (!formData.linkedin.trim()) {
    toast.error(
      "LinkedIn / Portfolio is required"
    );
    return;
  }

  if (!formData.whyJoin.trim()) {
    toast.error(
      "Please tell why you want to join"
    );
    return;
  }

  try {
    setLoading(true);

    const res = await axios.post(
      "/api/ambassador-query",
      formData
    );

    toast.success(
      res.data.message ||
        "Application submitted 🚀"
    );

    // ✅ RESET FORM
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      college: "",
      city: "",
      year: "",
      linkedin: "",
      whyJoin: "",
    });

    // ✅ CLOSE POPUP
    setTimeout(() => {
      onClose();
    }, 1200);

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
      <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-2 ">
        
        {/* 🔥 TOASTER */}
        <Toaster position="top-center" />

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
  max-w-4xl
  max-h-[75vh]
  overflow-y-auto
  no-scrollbar
  rounded-[36px]
  bg-white/90
  backdrop-blur-2xl
  shadow-[0_20px_100px_rgba(0,0,0,0.18)]
  border border-white/20
          "
        >
          {/* 🔥 GLOW */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-(--color-primary)/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-72 h-72 bg-(--color-secondary)/20 rounded-full blur-3xl" />

          {/* 🔥 CLOSE BUTTON */}
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

          {/* 🔥 HEADER */}
          <div className="relative p-6 md:p-8 border-b border-gray-100">
            
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-(--color-primary) to-(--color-secondary) text-white text-sm font-semibold shadow-lg">
              <Sparkles size={16} />
              Campus Ambassador Program
            </div>

            <h2 className="text-2xl md:text-3xl font-black mt-2 leading-tight text-(--color-black-1)">
              Become The Face Of{" "}
              <span className="bg-gradient-to-r from-(--color-primary) to-(--color-secondary) text-transparent bg-clip-text">
                Cornixe
              </span>
            </h2>

            <p className="text-(--color-gray-2) mt-1 text-base md:text-sm max-w-3xl leading-relaxed">
              Lead innovation on your campus, build leadership skills,
              organize events, grow your network, and unlock exciting
              internship opportunities.
            </p>
          </div>

          {/* 🔥 FORM */}
          <form
            onSubmit={handleSubmit}
            className="relative p-6 md:p-8 space-y-4"
          >
            {/* 🔥 GRID */}
            <div className="grid md:grid-cols-2 gap-3">

              <InputField
                icon={<User size={18} />}
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />

              <InputField
                icon={<Mail size={18} />}
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
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
                icon={<GraduationCap size={18} />}
                label="College / University"
                name="college"
                value={formData.college}
                onChange={handleChange}
                placeholder="e.g. IIT Hyderabad"
              />

              <InputField
                icon={<MapPin size={18} />}
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Hyderabad"
              />

              <InputField
                icon={<Building2 size={18} />}
                label="Current Year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="e.g. 3rd Year"
              />

              <div className="md:col-span-2">
                <InputField
                  icon={<Globe size={18} />}
                  label="LinkedIn / Portfolio"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
            </div>

            {/* 🔥 TEXTAREA */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Why do you want to become a Campus Ambassador?
              </label>

              <textarea
                name="whyJoin"
                value={formData.whyJoin}
                onChange={handleChange}
                placeholder="Tell us about your passion, leadership skills, and why you'd like to join..."
                rows={5}
                required
                className="
                  w-full
                  rounded-2xl
                  border border-gray-200
                  bg-white/70
                  p-4
                  outline-none
                  resize-none
                  focus:border-(--color-primary)
                  focus:ring-4 focus:ring-blue-100
                  transition
                "
              />
            </div>

            {/* 🔥 SUBMIT */}
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
                  Apply Now
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
      <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
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