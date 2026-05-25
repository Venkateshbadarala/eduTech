"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  BotMessageSquare,
  MessageCircleMore,
  X,
} from "lucide-react";

import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Program/Sidebar";
import Footer from "@/Components/Footer";

import { SessionProvider } from "next-auth/react";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <SessionProvider>
      {/* NAVBAR */}
      <Navbar
        onOpenSidebar={() =>
          setSidebarOpen(true)
        }
      />

      {/* SIDEBAR */}
      <AnimatePresence>
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="bg-black/40 w-full"
              onClick={() =>
                setSidebarOpen(false)
              }
            />

            {/* Sidebar */}
            <motion.div
              initial={{
                x: "-100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "-100%",
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                absolute left-0 top-0
                h-full
              "
            >
              <Sidebar
                onSelectCategory={(cat) =>
                  console.log(cat)
                }
                onClose={() =>
                  setSidebarOpen(false)
                }
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* PAGE CONTENT */}
      <main>{children}</main>

      {/* FLOATING CONTACT BUTTON */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        className="
          fixed bottom-26 right-2 md:hidden
          z-50
        "
      >
        <motion.a
          href="/contact"
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            group
            relative

            flex items-center gap-3

            rounded-full
            px-4 py-4

            bg-gradient-to-r
            from-primary
            to-secondary

            text-white
            font-semibold

            shadow-[0_15px_50px_rgba(0,0,0,0.18)]

            overflow-hidden
          "
        >
         

         
            <BotMessageSquare
              size={22}
            />
         

         

        
        </motion.a>
      </motion.div>

      {/* FOOTER */}
      <Footer />
    </SessionProvider>
  );
}