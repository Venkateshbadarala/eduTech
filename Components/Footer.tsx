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
    <footer className="bg-(--color-black-1) text-(--color-white)  md:px-16 py-16 ">

      {/* 🔥 DESKTOP */}
      <div className="hidden md:grid grid-cols-2 gap-14 px-14">

        {/* LEFT SIDE */}
        <div className="max-w-xl">

          {/* 🔹 NEWSLETTER */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Join Our Newsletter
            </h3>

            <div className="flex gap-2 mb-4">
              <input
              name="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-full outline-none text-(--color-black) w-full border bg-(--color-white)"
              />
              <button className="bg-(--color-secondary) px-5 rounded-full text-(--color-white) hover:scale-105 transition">
                Subscribe
              </button>
            </div>

            <p className="text-sm text-(--color-gray-1) leading-relaxed">
              Stay ahead with updates on new courses, offers, and career opportunities.
            </p>
          </div>

        

          {/* 🔹 ADDRESS */}
          <div className="mt-2  ">
            <h4 className="text-lg font-semibold mb-3">Address</h4>

            <div className="flex items-start gap-2 text-sm text-(--color-gray-1) leading-relaxed">
              <MapPin size={16} className="mt-1" />
              <p>
                5, 14th Main Road, 15th Cross, Sector 4,  
                HSR Layout, Bangalore South,  
                Karnataka – 560102, India
              </p>
            </div>
          </div>

          {/* 🔹 SOCIAL */}
          <div className="mt-2">
            <h4 className="text-lg font-semibold mb-3">Social Links</h4>

            <div className="flex gap-4">
              {socialIcons.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  target="_blank"
                  title={item.name}
                  className=" hover:bg-(--color-primary) transition"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
            {/* 🔹 CONTACT */}
          <div className="mt-2">
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>

            <div className="space-y-3 text-sm text-(--color-gray-1)">
              <div className="flex items-center gap-2">
                <Mail size={16} /> support@mindenious.com
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} /> +91 9108126243
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-3 gap-10">

          {/* TECH */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Tech Courses</h3>
            <ul className="space-y-2 text-(--color-gray-1) text-sm">
              {techCourses.map((c: any, i) => (
                <li key={i}>
                  <Link
                    href={`/courses/${c.slug || i}`}
                    className="hover:text-(--color-primary) transition"
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
                    className="hover:text-(--color-primary) transition"
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
                <li
                  key={i}
                  className="hover:text-(--color-primary) cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* 🔥 MOBILE */}
      <div className="md:hidden space-y-6">

        {/* CONTACT + NEWSLETTER */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>

          <div className="flex gap-2 mb-3">
            <input
              placeholder="Email"
              className="px-4 py-2 rounded-full text-(--color-black-1) w-full border"
            />
            <button className="bg-(--color-secondary) px-4 rounded-full">
              Go
            </button>
          </div>

          <div className="text-sm text-(--color-gray-2) space-y-2">
            <p>support@mindenious.com</p>
            <p>+91 9108126243</p>
            <p className="text-(--color-gray-2) text-xs">
              Bangalore, Karnataka, India
            </p>
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
              className="w-full flex justify-between font-semibold"
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
      <div className="mt-10 text-center text-sm bg-(--color-black-4) p-3 rounded-xl font-medium px-14">
        © 2026 Venkatesh Edutech LLP. All rights reserved
      </div>
    </footer>
  );
}