"use client";

import { useState } from "react";
import Link from "next/link";
import { coursesData } from "@/lib/courseData";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/constants/svgIcons";

const socialIcons = [
  { icon: <InstagramIcon />, name: "Instagram", link: "#" },
  { icon: <FacebookIcon />, name: "Facebook", link: "#" },
  { icon: <TwitterIcon />, name: "Twitter", link: "#" },
  { icon: <LinkedInIcon />, name: "LinkedIn", link: "#" },
];

export default function Footer() {
  const [open, setOpen] = useState<string | null>("tech");

  const techCourses = Object.values(coursesData).filter(
    (c: any) => c.category === "tech"
  );

  const nonTechCourses = Object.values(coursesData).filter(
    (c: any) => c.category === "non-tech"
  );

  return (
    <footer className="bg-(--color-black-1) text-(--color-white) px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-16">

      {/* 🔥 DESKTOP */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

        {/* LEFT SIDE */}
        <div className="max-w-xl space-y-6">

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Join Our Newsletter
            </h3>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                name="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-full outline-none text-black w-full border bg-white"
              />
              <button className="bg-(--color-secondary) px-5 py-2 rounded-full text-white hover:scale-105 transition">
                Subscribe
              </button>
            </div>

            <p className="text-sm text-(--color-gray-1)">
              Stay ahead with updates on new courses, offers, and career opportunities.
            </p>
          </div>

          {/* ADDRESS */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Address</h4>

            <div className="flex items-start gap-2 text-sm text-(--color-gray-1)">
              <MapPin size={16} className="mt-1" />
              <p>
                5, 14th Main Road, 15th Cross, Sector 4,
                HSR Layout, Bangalore South,
                Karnataka – 560102, India
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
                    href={`/courses/${c.slug || i}`}
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
            <h3 className="font-semibold mb-4 text-lg">Useful Links</h3>
            <ul className="space-y-2 text-(--color-gray-1) text-sm">
              {[
                "About Us",
                "Contact Us",
                "Privacy Policy",
                "Terms & Conditions",
                "Careers",
              ].map((item, i) => (
                <li key={i} className="hover:text-(--color-primary)">
                  {item}
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

          <div className="flex gap-2 mb-3">
            <input
              placeholder="Email"
              className="px-4 py-2 rounded-full outline-none text-black w-full border bg-white"
            />
            <button className="bg-(--color-secondary) px-4 rounded-full">
              Go
            </button>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Address</h4>

            <div className="flex items-start gap-2 text-sm text-(--color-gray-1)">
              <MapPin size={28} className="mt-1" />
              <p>
                5, 14th Main Road, 15th Cross, Sector 4,
                HSR Layout, Bangalore South,
                Karnataka – 560102, India
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