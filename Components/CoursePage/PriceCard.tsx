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

const professionalPlan = allPlans?.find(
  (plan) =>
    plan.title?.toLowerCase() ===
    "professional"
);

const professionalFeatures =
  professionalPlan?.features || [];

const includedFeatures =
  professionalFeatures.filter(
    (feature) =>
      data.features?.includes(feature)
  );

const excludedFeatures =
  professionalFeatures.filter(
    (feature) =>
      !data.features?.includes(feature)
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
      <div
        className={`
          relative overflow-hidden
          rounded-[32px]
          border
          h-full
          flex flex-col
          transition-all duration-300
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
        {/* Header */}
        <div className="p-8 pb-6">
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

          <h2
            className={`
              text-3xl font-black
              ${
                data.highlight
                  ? "text-white"
                  : "text-gray-900"
              }
            `}
          >
            {data.title}
          </h2>

          <p
            className={`
              mt-3 text-sm
              ${
                data.highlight
                  ? "text-slate-300"
                  : "text-gray-500"
              }
            `}
          >
            {data.subtitle}
          </p>

          <div className="mt-8">
            <h3
              className={`
                text-5xl font-black
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

          {data.note && (
            <p className="mt-2 text-sm font-medium text-primary">
              {data.note}
            </p>
          )}
        </div>

        {/* Features */}
        <div
  className={`
    px-8 py-7 border-t
    flex flex-col flex-1
    ${
      data.highlight
        ? "border-white/10"
        : "border-gray-100"
    }
  `}
>
  <div className="space-y-4 flex-1">

    {/* Available Features */}
    {includedFeatures.map(
      (feature, index) => (
        <div
          key={index}
          className="flex items-start gap-3"
        >
          <div
            className={`
              mt-0.5
              w-5 h-5
              rounded-full
              flex items-center justify-center
              ${
                data.highlight
                  ? "bg-blue-500/20 text-blue-300"
                  : "bg-green-100 text-green-600"
              }
            `}
          >
            <Check size={13} />
          </div>

          <p
            className={`
              text-sm leading-relaxed
              ${
                data.highlight
                  ? "text-slate-200"
                  : "text-gray-700"
              }
            `}
          >
            {feature}
          </p>
        </div>
      )
    )}

    {/* Missing Features */}
    {!data.highlight &&
      excludedFeatures.map(
        (feature, index) => (
          <div
            key={`missing-${index}`}
            className="flex items-start gap-3"
          >
            <div
              className="
                mt-0.5
                w-5 h-5
                rounded-full
                flex items-center justify-center
                bg-red-100
                text-red-500
              "
            >
              <X size={13} />
            </div>

            <p
              className="
                text-sm
                text-gray-400
                line-through
              "
            >
              {feature}
            </p>
          </div>
        )
      )}
  </div>

  <button
    className={`
      mt-auto w-full py-4 rounded-2xl
      font-semibold text-sm
      transition-all duration-300
      ${
        data.highlight
          ? `
            bg-blue-500
            hover:bg-blue-600
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