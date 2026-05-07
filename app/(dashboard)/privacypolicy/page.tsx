// app/privacy-policy/page.tsx

"use client";

import {
  ShieldCheck,
  Lock,
  Database,
  Mail,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const cards = [
    {
      icon: <Database size={24} />,
      title: "Data Collection",
      desc: "We collect only essential information such as name, email, and learning preferences.",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
    },
    {
      icon: <Lock size={24} />,
      title: "Secure Storage",
      desc: "Your personal data is encrypted and securely stored using modern protection systems.",
      color: "from-purple-500 to-pink-500",
      bg: "bg-purple-50",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Privacy Protection",
      desc: "We never sell or share your personal information with unauthorized third parties.",
      color: "from-green-500 to-emerald-500",
      bg: "bg-green-50",
    },
  ];

  return (
    <div
      className="
        relative overflow-hidden
        min-h-screen
        bg-gradient-to-br
        from-(--color-primary-light)/20
        via-white
        to-(--color-secondary)/10
        py-20 px-4
      "
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-(--color-primary)/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-(--color-secondary)/20 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* 🔥 HERO */}
        <div className="text-center mb-16">

          <div
            className="
              inline-flex items-center gap-2
              px-5 py-2 rounded-full
              bg-white shadow-lg
              border border-gray-100
              text-(--color-primary)
              font-semibold mb-5
            "
          >
            <Sparkles size={16} />
            Privacy & Security
          </div>

          <h1
            className="
              text-4xl md:text-6xl
              font-black
              text-(--color-black-1)
              leading-tight
            "
          >
            Privacy
            <span
              className="
                bg-gradient-to-r
                from-(--color-primary)
                to-(--color-secondary)
                text-transparent bg-clip-text
              "
            >
              {" "}Policy
            </span>
          </h1>

          <p
            className="
              text-(--color-gray-2)
              mt-5
              text-base md:text-lg
              max-w-2xl mx-auto
              leading-relaxed
            "
          >
            We value your trust and ensure your data stays protected,
            secure, and private while using Cornixe.
          </p>
        </div>

        {/* 🔥 FLOATING SMALL CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {cards.map((card, i) => (
            <div
              key={i}
              className="
                group relative
                bg-white/80 backdrop-blur-2xl
                border border-white/40
                rounded-[28px]
                p-6
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                transition-all duration-300
              "
            >

              {/* FLOATING ICON */}
              <div
                className={`
                  w-14 h-14
                  rounded-2xl
                  flex items-center justify-center
                  text-white
                  shadow-lg mb-5
                  bg-gradient-to-br ${card.color}
                `}
              >
                {card.icon}
              </div>

              {/* TITLE */}
              <h2
                className="
                  text-xl font-bold
                  text-(--color-black-1)
                  mb-3
                "
              >
                {card.title}
              </h2>

              {/* DESC */}
              <p
                className="
                  text-(--color-gray-2)
                  leading-relaxed
                  text-sm
                "
              >
                {card.desc}
              </p>

              {/* FLOATING BADGE */}
              <div
                className={`
                  inline-flex items-center gap-2
                  mt-5
                  ${card.bg}
                  px-3 py-2 rounded-full
                  text-sm font-medium
                  text-gray-700
                `}
              >
                <CheckCircle2
                  size={16}
                  className="text-(--color-primary)"
                />
                Trusted Security
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 CONTACT FLOATING CARD */}
        <div
          className="
            relative overflow-hidden
            mt-16
            rounded-[32px]
            bg-gradient-to-r
            from-(--color-primary)
            to-(--color-secondary)
            p-8 md:p-10
            text-white
            shadow-[0_20px_80px_rgba(0,0,0,0.15)]
          "
        >

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            {/* LEFT */}
            <div>
              <div
                className="
                  inline-flex items-center gap-2
                  bg-white/20
                  px-4 py-2 rounded-full
                  backdrop-blur-md
                  mb-4
                "
              >
                <Mail size={16} />
                Contact Support
              </div>

              <h2 className="text-3xl font-black">
                Need Help?
              </h2>

              <p className="text-white/90 mt-3 max-w-xl leading-relaxed">
                If you have questions about your privacy or personal data,
                feel free to contact our support team anytime.
              </p>
            </div>

            {/* RIGHT BUTTON */}
            <a
              href="mailto:support@mindenious.com"
              className="
                bg-white text-(--color-primary)
                px-6 py-4 rounded-2xl
                font-semibold
                hover:scale-105
                transition
                shadow-xl
                whitespace-nowrap
                text-center
              "
            >
              support@mindenious.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}