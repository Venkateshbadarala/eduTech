"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  PiCertificateBold,
  PiMedalBold,
  PiSealCheckFill,
  PiSparkleFill,
} from "react-icons/pi";

import internshipCertificate from "@/public/Internship Sample Certificate-1.png";
import trainingCertificate from "@/public/Training Sample Certificate-1.png";

const certificates = [
  {
    title: "Internship Certificate",

    subtitle:
      "Industry internship completion certificate with verification and recognition.",

    image: internshipCertificate,

    icon: <PiMedalBold size={24} />,
  },

  {
    title: "Training Certificate",

    subtitle:
      "Professional training completion certificate for skill enhancement programs.",

    image: trainingCertificate,

    icon: <PiCertificateBold size={24} />,
  },
];

const features = [
  "Industry Recognized",
  "Verification Enabled",
  "Professional Branding",
  "Career Enhancement",
];

export default function CertificateShowcase() {
  return (
    <section
      className="
        relative overflow-hidden
        py-20 md:py-28
      "
    >
     

      {/* BLURS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >
          {/* BADGE */}
          <div
            className="
              inline-flex items-center gap-3
              px-6 py-3
              rounded-full

              border border-white/10
              bg-white/10
              backdrop-blur-xl

              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            "
          >
            <PiSealCheckFill
              size={20}
              className="text-primary"
            />

            <span
              className="
                text-sm font-semibold
                text-black-1
              "
            >
              Verified Professional Certificates
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-8
              text-4xl md:text-6xl
              font-black
              leading-tight
              text-black-1
            "
          >
            Showcase Your{" "}

            <span
              className="
                bg-gradient-to-r
                from-primary
                to-secondary
                text-transparent bg-clip-text
              "
            >
              Achievements
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              max-w-3xl mx-auto
              text-lg md:text-xl
              leading-relaxed
              text-gray-2
            "
          >
            Earn beautifully designed certificates
            that validate your learning journey,
            internship experience, and professional
            skill development.
          </p>

          {/* FEATURES */}
          <div
            className="
              mt-10
              flex flex-wrap
              items-center justify-center
              gap-4
            "
          >
            {features.map((item, index) => (
              <div
                key={index}
                className="
                  px-5 py-3
                  rounded-2xl

                  border border-white/10
                  bg-white/10
                  backdrop-blur-xl

                  text-black-1
                  font-semibold

                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                "
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CERTIFICATE CARDS */}
        <div
          className="
            mt-20
            grid lg:grid-cols-2
            gap-10 
          "
        >
          {certificates.map(
            (certificate, index) => (
              <motion.div
                key={index}
                whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                className="
                  group
                  relative overflow-hidden

                  rounded-[36px]

                  border border-white/10
                  bg-white/10
                  backdrop-blur-2xl

                  shadow-[0_10px_40px_rgba(59,130,246,0.08)]


                  transition-all duration-500
                "
              >
                {/* HOVER GRADIENT */}
                <div
                  className="
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition duration-500

                    bg-gradient-to-br
                    from-primary/10
                    via-transparent
                    to-secondary/10
                  "
                />

                {/* SHINE */}
                <div
                  className="
                    absolute top-0 left-[-100%]
                    w-full h-full

                    bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.15),transparent)]

                    group-hover:left-[100%]

                    transition-all duration-1000
                  "
                />

                {/* IMAGE */}
                <div className="relative p-5">
                  <div
                    className="
                      overflow-hidden
                      rounded-[28px]
                      border border-white/10
                    "
                  >
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      className="
                        w-full h-auto
                        object-cover

                        transition-transform duration-700
                        group-hover:scale-[1.03]
                      "
                    />
                  </div>

                  {/* FLOAT BADGE */}
                  <div
                    className="
                      absolute md:top-10 md:left-10
                   top-4 left-4
                      flex items-center gap-2

                      px-4 py-2
                      rounded-full

                      bg-white/80
                      backdrop-blur-xl

                      text-black-1
                      md:text-sm font-semibold
                       text-xs                 
                      shadow-lg
                    "
                  >
                    <span className="text-primary">
                      {certificate.icon}
                    </span>

                    Verified
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 px-8 pb-8">
                  <div
                    className="
                      flex items-center justify-between
                      gap-4
                    "
                  >
                    <div>
                      <h3
                        className="
                          text-2xl md:text-3xl
                          font-black
                          text-black-1
                        "
                      >
                        {certificate.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          leading-relaxed
                          text-gray-2
                        "
                      >
                        {certificate.subtitle}
                      </p>
                    </div>

                    <div
                      className="
                        hidden md:flex
                        w-16 h-16
                        rounded-2xl

                        bg-gradient-to-r
                        from-primary
                        to-secondary

                        items-center justify-center

                        text-white

                        shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                      "
                    >
                      <PiSparkleFill size={28} />
                    </div>
                  </div>

                  {/* BOTTOM */}
                  <div
                    className="
                      mt-8
                      flex items-center justify-between
                      gap-4
                      flex-wrap
                    "
                  >
                    <div
                      className="
                        px-5 py-3
                        rounded-2xl

                        bg-primary/10
                        border border-primary/10

                        text-primary

                        text-sm font-semibold
                      "
                    >
                      Professional Recognition
                    </div>

                    <div
                      className="
                        px-5 py-3
                        rounded-2xl

                        bg-secondary/10
                        border border-secondary/10

                        text-secondary

                        text-sm font-semibold
                      "
                    >
                      Career Verified
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}