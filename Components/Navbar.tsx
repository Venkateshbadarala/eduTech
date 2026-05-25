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
import { DownIcon, HamburgerIcon } from "@/constants/svgIcons";
import AuthModal from "./AuthModal";

import {
  LogOutIcon,
  User,
  Home,
  Info,
  Briefcase,
  User2,
  Layers3,
  Building2,
  ContactIcon,
  BotMessageSquare,
} from "lucide-react";

interface NavbarProps {
  onOpenSidebar: () => void;
}

// 🔥 DESKTOP NAV ITEMS WITH DROPDOWNS
const navItems = [
  {
    label: "Home",
    href: "/",
  },
   {
    label: "Elite Packs",
    dropdown: [
      {
        label: "TECH STARTER PACK",
        href: "/tech-starter-pack",
      },

      {
        label: "MBA LITE PACK",
        href: "/mba-lite-pack",
      },

      {
        label: "MAKE YOUR OWN PACK",
        href: "/custom-pack",
      },
      {
        label: "GOLDEN PASS",
        href: "/golden-pass",
      },
    ],
  },

  {
    label: "Cornixe X Zoho",
    href: "/zoho",
  },



  {
    label: "Career",
    dropdown: [
      {
        label: "Instructor",
        href: "/careers",
      },

      {
        label: "Ambassador",
        href: "/ambassador",
      },
    ],
  },

    {
    label: "About",
    href: "/about",
  },

 
];

const mobileNavItems = [
  {
    label: "Home",
    href: "/",
    icon: <Home size={18} />,
  },
  {
    label: "Elite",
    icon: <Layers3 size={18} />,
    dropdown: [
      {
        label: "TECH STARTER PACK",
        href: "/tech-starter-pack",
      },

      {
        label: "MBA LITE PACK",
        href: "/mba-lite-pack",
      },

      {
        label: "MAKE YOUR OWN PACK",
        href: "/custom-pack",
      },
      {
        label: "GOLDEN PASS",
        href: "/golden-pass",
      },
    ],
  },

   {
    label: "Zoho",
    href: "/zoho",
    icon: <Building2 size={18} />,
  },

 

  {
    label: "Career",
    icon: <Briefcase size={18} />,
    dropdown: [
      {
        label: "Instructor",
        href: "/careers",
      },

      {
        label: "Ambassador",
        href: "/ambassador",
      },
    ],
  },

  {
    label: "About",
    href: "/about",
    icon: <Info size={18} />,
  },

  
];

const Navbar = ({ onOpenSidebar }: NavbarProps) => {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const { data: session } = useSession();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
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
    if (prev !== undefined && latest > prev && latest > 50) {
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
              <Image src={Logo} alt="Logo" width={60} height={60} />
            </Link>

            <button
              type="button"
              onClick={onOpenSidebar}
              className="border border-primary px-4 py-2 rounded-full md:flex items-center gap-1 hidden"
            >
              <HamburgerIcon /> Programs
            </button>
          </div>

          {/* NAV LINKS */}
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={onOpenSidebar}
              className="
    flex md:hidden
    items-center gap-2
    border border-primary
    rounded-full
    px-1.5 py-1.5
    text-[14px] font-medium
    hover:bg-primary
    hover:text-white
    transition-all duration-300
  "
            >
              <HamburgerIcon />

              <span>Programs</span>
            </button>
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item, index) => {
                // ✅ DROPDOWN MENU
                if (item.dropdown) {
                  return (
                    <div key={index} className="relative group">
                      {/* MAIN BUTTON */}
                      <button
                        className="
              flex items-center gap-1
              text-[15px]
              font-medium
              text-gray-700
              hover:text-blue-600
              transition
              
            "
                      >
                        {item.label}

                        <span className="text-xs mt-[2px]">
                          <DownIcon />
                        </span>
                      </button>

                      {/* DROPDOWN BOX */}
                      <div
                        className="
              absolute top-full left-0
              mt-3
              min-w-[240px]
              bg-white
              border border-gray-100
              rounded-2xl
              shadow-2xl
              opacity-0 invisible
              group-hover:opacity-100
              group-hover:visible
              transition-all duration-300
              overflow-hidden
              z-50
            "
                      >
                        {item.dropdown.map((drop, i) => (
                          <Link
                            key={i}
                            href={drop.href}
                            
                            className="
                    block px-5 py-4
                    text-sm font-medium
                    text-gray-700
                    hover:bg-blue-50
                    hover:text-blue-600
                    transition
                    border-b border-gray-100
                    last:border-b-0
                  "
                          >
                            {drop.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                // ✅ NORMAL LINK
                return (
                  <Link
                    key={item.href}
                    href={item.href!}
                    
                    className={`
          text-[15px]
          font-medium
          transition-all duration-300
          hover:text-blue-600
          ${pathname === item.href ? "text-blue-600" : "text-gray-700"}
        `}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* ADMIN */}
              {isAdmin && (
                <Link
                  href="/admin"
                  className={`
        text-[15px]
        font-medium
        transition-all duration-300
        ${
          pathname === "/admin"
            ? "text-blue-600"
            : "text-gray-700 hover:text-blue-600"
        }
      `}
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
            <span className="hidden md:block">|</span>
              <button
            type="button"
            className="bg-gradient-to-r from-primary to-secondary text-white px-2.5 py-2 rounded-full hidden md:block"
          >  
          <p className="">Contact Us</p>
          
            
          </button>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE FLOATING NAV ================= */}
      <div
        className="
    fixed bottom-4
    left-1/2
    -translate-x-1/2
    w-[90%]
    max-w-md
    bg-white/95
    backdrop-blur-xl
    border border-gray-200
    shadow-2xl
    rounded-3xl
    px-4 py-3
    z-50
    lg:hidden
  "
      >
        <div className="flex justify-between items-center">
          {mobileNavItems.map((item, index) => {
            // 🔥 DROPDOWN ITEM
            if (item.dropdown) {
              return (
                <div key={index} className="relative">
                  {/* BUTTON */}
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className="
              flex flex-col items-center
              text-xs
            "
                  >
                    <div
                      className="
                w-10 h-10 rounded-2xl
                flex items-center justify-center
                text-gray-500
              "
                    >
                      {item.icon}
                    </div>

                    <span
                      className="
                mt-1 text-[11px]
                flex items-center gap-1
              "
                    >
                      {item.label}

                      <span
                        className={`
                  text-[9px]
                  transition
                  ${openDropdown === index ? "rotate-180" : ""}
                `}
                      >
                        <DownIcon />
                      </span>
                    </span>
                  </button>

                  {/* DROPDOWN */}
                  {openDropdown === index && (
                    <div
                      className="
                absolute bottom-18 left-9
                -translate-x-1/2
                w-48
                bg-white
                border border-gray-100
                rounded-2xl
                shadow-2xl
                overflow-hidden
                z-50
                animate-in fade-in zoom-in-95
              "
                    >
                      {item.dropdown.map((drop, i) => (
                        <Link
                          key={i}
                          href={drop.href}
                          
                          className="
                      block px-4 py-3
                      text-sm
                      hover:bg-blue-50
                      hover:text-blue-600
                      border-b border-gray-100
                      last:border-b-0
                    "
                          onClick={() => setOpenDropdown(null)}
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // 🔥 NORMAL ITEM
            return (
              <Link
                key={index}
                href={item.href!}
                
                className="
          flex flex-col items-center
          text-xs
        "
              >
                <div
                  className={`
            w-10 h-10 rounded-2xl
            flex items-center justify-center
            ${
              pathname === item.href
                ? "bg-blue-600 text-white"
                : "text-gray-500"
            }
          `}
                >
                  {item.icon}
                </div>

                <span className="mt-1 text-[11px]">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* AUTH MODAL */}
      <AuthModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
