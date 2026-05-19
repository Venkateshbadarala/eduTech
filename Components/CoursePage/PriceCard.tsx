"use client";

import {
  Check,
  X,
  Crown,
} from "lucide-react";

interface PricingData {
  badge?: string;
  title: string;
  subtitle: string;
  features?: string[];
  price: string;
  note?: string;
  highlight?: boolean;
}

export default function PriceCard({
  data,
  isActive,
  onSelect,
  allPlans,
}: {
  data: PricingData;
  isActive: boolean;
  onSelect: () => void;
  allPlans: PricingData[];
}) {

  // ✅ ALL FEATURES
  const allFeatures = Array.from(
    new Set(
      (allPlans || []).flatMap(
        (plan) => plan.features || []
      )
    )
  );

  return (
    <div
      onClick={onSelect}
      className={`
        relative w-full max-w-sm
        transition-all duration-300
        cursor-pointer
        ${
          isActive
            ? "scale-[1.02]"
            : "hover:-translate-y-1"
        }
      `}
    >

      {/* CARD */}
      <div
        className={`
          relative overflow-hidden
          rounded-[32px]
          border
          transition-all duration-300
          h-full
          backdrop-blur-xl
          ${
            data.highlight
              ? `
                bg-[#0f172a]
                border-blue-500/30
                shadow-[0_20px_60px_rgba(59,130,246,0.18)]
              `
              : `
                bg-white
                border-gray-200
                hover:border-blue-200
                shadow-sm hover:shadow-xl
              `
          }
        `}
      >

        {/* TOP */}
        <div className="p-8 pb-6">

          {/* BADGE */}
          {data.badge && (
            <div
              className={`
                inline-flex items-center gap-2
                px-4 py-1.5 rounded-full
                text-xs font-semibold mb-6
                ${
                  data.highlight
                    ? "bg-blue-500/20 text-blue-300 border border-blue-400/20"
                    : "bg-blue-50 text-blue-600"
                }
              `}
            >
              <Crown size={13} />
              {data.badge}
            </div>
          )}

          {/* TITLE */}
          <h2
            className={`
              text-3xl font-black tracking-tight
              ${
                data.highlight
                  ? "text-white"
                  : "text-gray-900"
              }
            `}
          >
            {data.title}
          </h2>

          {/* SUBTITLE */}
          <p
            className={`
              mt-3 text-sm leading-relaxed
              ${
                data.highlight
                  ? "text-slate-300"
                  : "text-gray-500"
              }
            `}
          >
            {data.subtitle}
          </p>

          {/* PRICE */}
          
          <div className="mt-8 ">

            <h3
              className={`
                text-5xl font-black tracking-tight
                ${
                  data.highlight
                    ? "text-white"
                    : "text-gray-900"
                }
              `}
            >
              ₹{data.price}
            </h3>
          </div>

          {/* NOTE */}
          {data.note && (
            <p
              className={`
                mt-2 text-sm font-medium
                ${
                  data.highlight
                    ? "text-primary"
                    : "text-primary"
                }
              `}
            >
              {data.note}
            </p>
          )}
        </div>

        {/* FEATURES */}
        <div
          className={`
            px-8 py-7 border-t
            ${
              data.highlight
                ? "border-white/10"
                : "border-gray-1"
            }
          `}
        >

          <div className="space-y-4 min-h-[320px]">

            {allFeatures.map(
              (feature, i) => {

                const included =
                  data.features?.includes(
                    feature
                  );

                return (
                  <div
                    key={i}
                    className="flex items-start gap-3"
                  >

                    {/* ICON */}
                    <div
                      className={`
                        mt-0.5 flex-shrink-0
                        w-5 h-5 rounded-full
                        flex items-center justify-center
                        ${
                          included
                            ? data.highlight
                              ? "bg-blue-500/20 text-blue-300"
                              : "bg-blue-100 text-blue-600"
                            : data.highlight
                            ? "bg-white/10 text-slate-500"
                            : "bg-gray-100 text-gray-400"
                        }
                      `}
                    >
                      {included ? (
                        <Check size={13} />
                      ) : (
                        <X size={12} />
                      )}
                    </div>

                    {/* FEATURE */}
                    <p
                      className={`
                        text-sm leading-relaxed
                        ${
                          included
                            ? data.highlight
                              ? "text-slate-200"
                              : "text-black-1"
                            : data.highlight
                            ? "text-slate-500 line-through"
                            : "text-gray-400 line-through"
                        }
                      `}
                    >
                      {feature}
                    </p>
                  </div>
                );
              }
            )}
          </div>

          {/* BUTTON */}
          <button
            className={`
              mt-8 w-full py-4 rounded-2xl
              font-semibold text-sm
              transition-all duration-300
              ${
                data.highlight
                  ? `
                    bg-blue-500
                    hover:bg-primary
                    text-white
                  `
                  : `
                    bg-gray-900
                    hover:bg-black
                    text-white
                  `
              }
            `}
          >
            {data.highlight
              ? "Get Started"
              : "Choose Plan"}
          </button>
        </div>
      </div>
    </div>
  );
}