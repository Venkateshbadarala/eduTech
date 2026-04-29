"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Program/Sidebar";
import Footer from "@/Components/Footer";
import { SessionProvider } from "next-auth/react";
export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SessionProvider>
      {/* NAVBAR */}
      <Navbar onOpenSidebar={() => setSidebarOpen(true)} />

      {/* SIDEBAR */}
      <AnimatePresence>
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex">

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/40 w-full"
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-0 h-full"
            >
              <Sidebar
                onSelectCategory={(cat) => console.log(cat)}
                onClose={() => setSidebarOpen(false)}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* PAGE CONTENT */}
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </SessionProvider>
  );
}