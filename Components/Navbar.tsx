"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

import { CancelIcon, HamburgerIcon } from "@/constants/svgIcons";
import AuthModal from "./AuthModal";
import { LogOut, LogOutIcon } from "lucide-react";

interface NavbarProps {
  onOpenSidebar: () => void;
}

const baseNavItems = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/Careers" },
  { label: "About Us", href: "/About" },
  { label: "Blog", href: "/blog" },
  { label: "Dashboard", href: "/admin" },
];

const NavLink = ({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) => (
  <Link
    href={href}
    className={`relative transition ${
      isActive
        ? "text-(--color-primary) font-bold text-[17px]"
        : "text-(--color-black-8) hover:text-(--color-primary) font-medium text-[17px]"
    }`}
  >
    {label}
  </Link>
);

const Navbar = ({ onOpenSidebar }: NavbarProps) => {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const { data: session } = useSession();

  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  // 🔥 scroll hide
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (prev !== undefined && latest > prev && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // ✅ build nav items dynamically
  const navItems = [...baseNavItems];

  if (session?.user?.email === adminEmail) {
    navItems.push({ label: "Dashboard", href: "/admin" });
  }

  return (
    <>
      <motion.nav
        animate={hidden ? { y: "-120%", opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl"
      >
        <div className="flex items-center justify-between bg-white rounded-2xl px-6 py-2 shadow-xl">

          {/* LOGO */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
              <span className="font-bold text-lg">StartHub</span>
            </Link>

            <button
              type="button"
              onClick={onOpenSidebar}
              className="border border-blue-500 px-4 py-2 rounded-full flex items-center gap-1"
            >
              <HamburgerIcon /> Programs
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5">

            {/* NAV LINKS */}
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={pathname === item.href}
              />
            ))}

            {/* 🔥 AUTH UI */}
            {!session ? (
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-full"
              >
                Login
              </button>
            ) : (
              <div className="flex items-center gap-3">

                {/* PROFILE IMAGE */}
                <Image
                  src={`https://avatarfiles.alphacoders.com/375/thumb-1920-375473.jpeg`}
                  alt="profile"
                  width={36}
                  height={36}
                  className="rounded-full border"
                />

                {/* LOGOUT */}
                <button
                type="button"
                  onClick={() => signOut()}
                  className="text-sm text-gray-500 hover:text-red-500"
                >
                  <LogOutIcon/>
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.nav>

      <AuthModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;