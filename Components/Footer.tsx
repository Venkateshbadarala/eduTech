"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { coursesData } from "@/lib/courseData";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/constants/svgIcons";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const socialIcons = [
  { icon: <InstagramIcon />, name: "Instagram", link: "#" },
  { icon: <FacebookIcon />, name: "Facebook", link: "#" },
  { icon: <TwitterIcon />, name: "Twitter", link: "#" },
  { icon: <LinkedInIcon />, name: "LinkedIn", link: "#" },
];

export default function Footer() {
  const [open, setOpen] = useState<string | null>("tech");
  const [formData, setFormData] = useState({
  email: "",
});
 const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);


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
        console.log("respsne", data)
  
        setCourses(Array.isArray(data) ? data : data.courses || []);
      } catch (err) {
        console.error(err);
        toast.error("Error fetching courses ❌");
      } finally {
        setLoading(false);
      }
    };
  
const techCourses = courses.filter(
  (course: any) =>
    course.category === "tech"
);

const nonTechCourses = courses.filter(
  (course: any) =>
    course.category === "non-tech"
);

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

  const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  // ✅ VALIDATIONS
 

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

  

 

  try {
    setLoading(true);

    const res = await axios.post(
      "/api/newsletter",
      formData
    );

    toast.success(
      res.data.message ||
        "Application submitted 🚀"
    );

    // ✅ RESET FORM
    setFormData({
      
      email: "",
     
    });

  

  } catch (error: any) {
    toast.error(
      error.response?.data?.message ||
        "Submission failed"
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <footer className="bg-(--color-black-1) text-(--color-white) px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-16">
      
      {/* 🔥 DESKTOP */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        {/* LEFT SIDE */}
        <div className="max-w-xl space-y-6">
          {/* NEWSLETTER */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Join Our Newsletter</h3>
      <form onSubmit={handleSubmit}>
  <div className="flex flex-col sm:flex-row gap-3 mb-4">

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
      className="
        px-4 py-2 rounded-full
        outline-none text-black
        w-full border bg-white
      "
    />

    <button
      type="submit"
      disabled={loading}
      className="
        bg-secondary
        px-5 py-3 rounded-full
        text-white
        hover:scale-105
        transition
        whitespace-nowrap
      "
    >
      {loading ? "Saving..." : "Subscribe"}
    </button>

  </div>
</form>
           

            <p className="text-sm text-(--color-gray-1)">
              Stay ahead with updates on new courses, offers, and career
              opportunities.
            </p>
          </div>

          {/* ADDRESS */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Address</h4>

            <div className="flex items-start gap-2 text-sm text-(--color-gray-1)">
              <MapPin size={16} className="mt-1" />
              <p>
                5, 14th Main Road, 15th Cross, Sector 4, HSR Layout, Bangalore
                South, Karnataka – 560102, India
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>

            <div className="space-y-2 text-sm text-(--color-gray-1)">
              <div className="flex items-center gap-2">
                <Mail size={16} /> support@cornixe.com
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} /> +91 9108126243
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Social Links</h4>

            <div className="flex gap-4 flex-wrap">
              {socialIcons.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className="hover:bg-(--color-primary) p-2 rounded-full transition"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {/* TECH */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Tech Courses</h3>
            <ul className="space-y-2 text-(--color-gray-1) text-sm">
              {techCourses.map((c: any, i) => (
                <li key={i}>
                  <Link
                    href={`/courses/${c._id || i}`}
                    className="hover:text-(--color-primary)"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NON TECH */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Non-Tech Courses</h3>
            <ul className="space-y-2 text-(--color-gray-1) text-sm">
              {nonTechCourses.map((c: any, i) => (
                <li key={i}>
                  <Link
                    href={`/courses/${c.slug || i}`}
                    className="hover:text-(--color-primary)"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LINKS */}
         <div>
  <h3 className="font-semibold mb-4 text-lg">
    Useful Links
  </h3>

  <ul className="space-y-2 text-(--color-gray-1) text-sm">
    {[
      {
        title: "About Us",
        href: "/about",
      },
      
      {
        title: "Privacy Policy",
        href: "/privacypolicy",
      },
      {
        title: "Terms & Conditions",
        href: "/termsandconditions",
      },
      {
        title: "Careers",
        href: "/careers",
      },
      {
        title: "Ambassador", href: "/ambassador"
      },
    ].map((item, i) => (
      <li key={i}>
        <Link
          href={item.href}
          className="
            hover:text-(--color-primary)
            transition
          "
        >
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
</div>
        </div>
      </div>

      {/* 🔥 MOBILE */}
      <div className="md:hidden space-y-6">
        {/* NEWSLETTER */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
<form onSubmit={handleSubmit}>
  <div className="flex gap-2 mb-3">

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email"
      className="
        px-4 py-2 rounded-full
        outline-none text-black
        w-full border bg-white
      "
    />

    <button
      type="submit"
      disabled={loading}
      className="
        bg-secondary
        px-4 rounded-full
        text-white
      "
    >
      {loading ? "..." : "Go"}
    </button>

  </div>
</form>
          

          <div>
            <h4 className="text-lg font-semibold mb-3">Address</h4>

            <div className="flex items-start gap-2 text-sm text-(--color-gray-1)">
              <MapPin size={28} className="mt-1" />
              <p>
                5, 14th Main Road, 15th Cross, Sector 4, HSR Layout, Bangalore
                South, Karnataka – 560102, India
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>

            <div className="space-y-2 text-sm text-(--color-gray-1)">
              <div className="flex items-center gap-2">
                <Mail size={16} /> support@mindenious.com
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} /> +91 9108126243
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            {socialIcons.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="p-2 bg-(--color-gray-1) rounded-full"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* ACCORDION */}
        {[
          { key: "tech", title: "Tech Courses", data: techCourses },
          { key: "nontech", title: "Non-Tech Courses", data: nonTechCourses },
          {
            key: "links",
            title: "Useful Links",
            data: ["About Us", "Contact Us", "Privacy Policy"],
          },
        ].map((section: any) => (
          <div key={section.key}>
            <button
              onClick={() => setOpen(open === section.key ? null : section.key)}
              className="w-full flex justify-between items-center font-semibold"
            >
              {section.title}
              <span>{open === section.key ? "-" : "+"}</span>
            </button>

            {open === section.key && (
              <ul className="mt-2 space-y-2 text-(--color-gray-1)">
                {section.data.map((item: any, i: number) => (
                  <li key={i}>{item.title || item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* 🔥 BOTTOM */}
      <div className="mt-10 text-center text-xs sm:text-sm bg-(--color-black-4) py-3 px-4 rounded-xl">
        © 2026 Venkatesh Edutech LLP. All rights reserved
      </div>
    </footer>
  );
}
