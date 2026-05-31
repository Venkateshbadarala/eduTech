"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface InpatPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InpatPortal({
  isOpen,
  onClose,
}: InpatPortalProps) {
  const portalUrl =
    "https://inpatpro.com/student/signup.html?branch=CHNCOR";

  // Disable background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="
            fixed inset-0
            z-[9999]
            flex items-center justify-center
            p-4 md:p-6
          "
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              absolute inset-0
              bg-black/60
              backdrop-blur-md
            "
          />

          {/* Modal */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 60,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: 40,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              relative
              w-full
              max-w-6xl
              h-[90vh]

              bg-white

              rounded-[32px]
              overflow-hidden

              border border-white/20

              shadow-[0_25px_100px_rgba(0,0,0,0.18)]
            "
          >
            {/* Glow Effects */}
            <div
              className="
                absolute
                -top-20
                -left-20
                w-72 h-72
                bg-primary/10
                rounded-full
                blur-3xl
              "
            />

            <div
              className="
                absolute
                -bottom-20
                -right-20
                w-72 h-72
                bg-secondary/10
                rounded-full
                blur-3xl
              "
            />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="
                absolute
                top-5 right-5
                z-20

                w-11 h-11
                rounded-full

                bg-white
                shadow-lg

                flex items-center justify-center

                hover:rotate-90
                transition-all duration-300
              "
            >
              <X
                size={20}
                className="text-black-1"
              />
            </button>

           

            {/* Iframe */}
           
              <iframe
                src={portalUrl}
                title="InPAT Registration Portal"
                allow="fullscreen; geolocation;"
                className="
                  w-full
                  h-full

                  rounded-3xl
                  border
                  border-gray-200

                  bg-white

                  shadow-sm
                "
              />
           
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}