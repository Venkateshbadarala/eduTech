"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

import Logo from "@/public/logo.png";
import { HamburgerIcon } from "@/constants/svgIcons";
import AuthModal from "./AuthModal";

import {
  LogOutIcon,
  User,
  Home,
  Info,
  Briefcase,
  User2,
} from "lucide-react";

interface NavbarProps {
  onOpenSidebar: () => void;
}

const baseNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Ambassador", href: "/ambassador" },
];

const Navbar = ({ onOpenSidebar }: NavbarProps) => {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const { data: session } = useSession();

  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // 🔥 scroll hide (desktop navbar)
 useMotionValueEvent(scrollY, "change", (latest) => {
  const prev = scrollY.getPrevious();

  // ✅ CLOSE PROFILE DROPDOWN ON SCROLL
  setProfileOpen(false);

  // ✅ HIDE NAVBAR ON SCROLL DOWN
  if (
    prev !== undefined &&
    latest > prev &&
    latest > 50
  ) {
    setHidden(true);
  } else {
    setHidden(false);
  }
});

  // 🔥 close dropdown
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔥 Mobile nav with icons
  const mobileNav = [
    { label: "Home", href: "/", icon: <Home size={18} /> },
    { label: "About", href: "/about", icon: <Info size={18} /> },
    { label: "Careers", href: "/careers", icon: <Briefcase size={18} /> },
    { label: "Ambassador", href: "/ambassador", icon: <User2 size={18} /> },
  ];

  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
const isAdmin = session?.user?.email === adminEmail;

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <motion.nav
        animate={hidden ? { y: "-120%", opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className=" fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl"
      >
        <div className="flex items-center justify-between bg-white rounded-2xl px-6 py-2 shadow-xl">
          {/* LOGO */}
          <div className="flex items-center gap-6 ">
            <Link href="/" className="flex items-center gap-2">
              <Image src={Logo} alt="Logo" width={50} height={50} />
            </Link>

            <button
              type="button"
              onClick={onOpenSidebar}
              className="border border-primary px-4 py-2 rounded-full lg:flex items-center gap-1 hidden"
            >
              <HamburgerIcon /> Programs
            </button>
          </div>

          {/* NAV LINKS */}
          <div className="flex items-center gap-5">
             <button
              type="button"
              onClick={onOpenSidebar}
              className=" rounded-full md:hidden items-center gap-1 sm:flex "
            >
              <HamburgerIcon /> 
            </button>
            <div className="hidden lg:flex gap-5 ">
{baseNavItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition text-[16px] ${
                    isActive
                      ? "text-blue-600 font-bold"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
                
              );
            })}
             {isAdmin && (
    <Link
      href="/admin"
      className={`transition text-[16px] ${
        pathname === "/admin"
          ? "text-blue-600 font-bold"
          : "text-gray-700 hover:text-blue-600"
      }`}
    >
      Dashboard
    </Link>
  )}
            </div>
            

            {/* AUTH */}
            {!session ? (
              <button
              type="button"
                onClick={() => setOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-full"
              >
                Login
              </button>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <Image
                  src="https://avatarfiles.alphacoders.com/375/thumb-1920-375473.jpeg"
                  alt="profile"
                  width={36}
                  height={36}
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="rounded-full cursor-pointer"
                />

                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-lg border p-2"
                    >
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 text-sm"
                      >
                        <User size={16} />
                        Profile
                      </Link>

                      <button
                        onClick={() => signOut()}
                        className="w-full flex items-center gap-2 px-3 py-2 hover:bg-red-50 text-sm text-red-500"
                      >
                        <LogOutIcon size={16} />
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE FLOATING NAV ================= */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 w-[65%] max-w-md bg-white/90 backdrop-blur-md shadow-xl rounded-2xl px-4 py-2 flex justify-between items-center z-50 lg:hidden">
        {mobileNav.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center text-xs"
            >
              <div
                className={`w-9 h-9 flex items-center justify-center rounded-full transition ${
                  isActive
                    ? "bg-secondary text-white scale-110"
                    : "text-gray-2"
                }`}
              >
                {item.icon}
              </div>

              <span
                className={`mt-1 ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-gray-2"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* AUTH MODAL */}
      <AuthModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;