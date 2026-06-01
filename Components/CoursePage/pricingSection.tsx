// "use client";

// import { useEffect, useState } from "react";
// import PriceCard from "./PriceCard";

// interface PricingData {
//   name: string;
//   badge?: string;
//   title: string;
//   subtitle: string;
//   features?: string[];
//   price: string;
//   note?: string;
//   highlight?: boolean;
// }

// interface PricingSectionProps {
//   pricing: PricingData[];
//   courseType: string; // "Normal" | "Zoho"
// }

// export default function PricingSection({
//   pricing,
//   courseType,
// }: PricingSectionProps) {
//   const filteredPricing = pricing.filter(
//     (plan) =>
//       plan.name?.toLowerCase() ===
//       courseType?.toLowerCase()
//   );

//   const [selectedPlan, setSelectedPlan] =
//     useState<PricingData | null>(
//       filteredPricing[0] || null
//     );

//   useEffect(() => {
//     setSelectedPlan(filteredPricing[0] || null);
//   }, [courseType, pricing]);

//   const handlePayment = () => {
//     if (!selectedPlan) return;

//     const amount =
//       Number(
//         selectedPlan.price.replace(
//           /[₹,]/g,
//           ""
//         )
//       ) * 100;

//     const options = {
//       key:
//         process.env
//           .NEXT_PUBLIC_RAZORPAY_KEY,
//       amount,
//       currency: "INR",
//       name: "EduTech",
//       description: selectedPlan.title,

//       handler: function (
//         response: any
//       ) {
//         console.log(
//           "✅ Payment Success:",
//           response
//         );
//       },
//     };

//     const rzp = new (
//       window as any
//     ).Razorpay(options);

//     rzp.open();
//   };

//   const sortedPricing = [
//     ...filteredPricing,
//   ].sort((a, b) => {
//     const order: Record<
//       string,
//       number
//     > = {
//       Recorded: 1,
//       Professional: 3,
//       "Mentor Led": 2,
//     };

//     return (
//       (order[a.title] || 999) -
//       (order[b.title] || 999)
//     );
//   });

//   return (
//     <section className="py-10 px-6 text-center">
//       {/* Heading */}
//       <div className="mb-10 px-4">
//         <h2 className="text-3xl md:text-5xl font-bold text-black-1 leading-tight">
//           Unlock Premium Learning at a Limited Price
//         </h2>

//         <p className="text-gray-500 mt-5 max-w-6xl mx-auto text-md md:text-lg leading-relaxed">
//           Get industry-ready skills with
//           high-quality training,
//           affordable pricing, practical
//           projects, and expert guidance.
//         </p>
//       </div>

//       {/* Pricing Cards */}
//       <div className="flex flex-wrap justify-center gap-10 py-10">
//         {sortedPricing.map(
//           (plan, index) => (
//             <PriceCard
//               key={index}
//               allPlans={sortedPricing}
//               data={plan}
//               isActive={
//                 selectedPlan?.title ===
//                 plan.title
//               }
//               onSelect={() =>
//                 setSelectedPlan(plan)
//               }
//             />
//           )
//         )}
//       </div>
//     </section>
//   );
// }



"use client";

import { Check, X, Crown } from "lucide-react";

const plans = [
  {
    badge: "RECORDED",
    title: "Self-Paced",
    subtitle: "Learn at your own pace",
    price: "5999",
    note: "Best for Beginners",
    highlight: false,
    features: [
      "Recorded Sessions",
      "Assignments",
      "Certification",
      "Industry Projects",
      "LMS Access",
    ],
  },

  {
    badge: "MOST POPULAR",
    title: "Mentor Led",
    subtitle: "Guided learning with mentor support",
    price: "8999",
    note: "Most Popular",
    highlight: false,
    features: [
      "Recorded Sessions",
      "Assignments",
      "Certification",
      "Industry Projects",
      "LMS Access",
      "Live Session",
      "Doubt Clearing Session",
      "Mentor Guidance",
      "Placement Support",
    ],
  },

  {
    badge: "PROFESSIONAL",
    title: "Professional",
    subtitle: "Become placement ready",
    price: "14999",
    note: "Career Focused",
    highlight: true,
    features: [
      "Recorded Sessions",
      "Assignments",
      "Certification",
      "Industry Projects",
      "LMS Access",
      "Live Session",
      "Doubt Clearing Session",
      "Mentor Guidance",
      "Placement Support",
      "Interview Preparation",
      "1:1 Premium Session",
      "Portfolio Review",
    ],
  },
];

const allFeatures = [
  "Recorded Sessions",
  "Assignments",
  "Certification",
  "Industry Projects",
  "LMS Access",
  "Live Session",
  "Doubt Clearing Session",
  "Mentor Guidance",
  "Placement Support",
  "Interview Preparation",
  "1:1 Premium Session",
  "Portfolio Review",
];

export default function PricingSection() {
  return (
    <section className="py-20 px-6 ">
       {/* Heading */}
      <div className="mb-10 px-4">        <h2 className="text-3xl md:text-5xl font-bold text-black-1 leading-tight">          Unlock Premium Learning at a Limited Price
        </h2>

        <p className="text-gray-500 mt-5 max-w-6xl mx-auto text-md md:text-lg leading-relaxed">
          Get industry-ready skills with
         high-quality training,
         affordable pricing, practical
         projects, and expert guidance.       </p>
      </div>
  <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden
          rounded-[32px]
          border
          h-full
          flex flex-col
          transition-all duration-300
              ${
                plan.highlight
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
              <div
                className={`
                 inline-flex items-center gap-2
                px-4 py-1.5 rounded-full
                text-xs font-semibold mb-6
                  ${
                    plan.highlight
                      ? "bg-blue-500/20 text-blue-200 border border-blue-400/20"
                      : "bg-blue-50 text-blue-600"
                  }
                `}
              >
                <Crown size={12} />
                {plan.badge}
              </div>

              <h2
                className={`
                  text-3xl font-black
                  ${
                    plan.highlight
                      ? "text-white"
                      : "text-slate-900"
                  }
                `}
              >
                {plan.title}
              </h2>

              <p
                className={`
                  mt-3 text-sm
                  ${
                    plan.highlight
                      ? "text-slate-300"
                      : "text-slate-500"
                  }
                `}
              >
                {plan.subtitle}
              </p>

              <div className="mt-8">
                <h3
                  className={`
                    text-5xl font-black
                    ${
                      plan.highlight
                        ? "text-white"
                        : "text-slate-900"
                    }
                  `}
                >
                  ₹{plan.price}
                </h3>

                <p className="mt-2 text-sm font-medium text-primary">
                  {plan.note}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div
              className={`
                border-t
                ${
                  plan.highlight
                    ? "border-white/10"
                    : "border-gray-200"
                }
              `}
            />

            {/* Features */}
            <div className="flex flex-col flex-1 px-10 py-10">
              <div className="space-y-6 flex-1">
                {allFeatures.map((feature) => {
                  const included =
                    plan.features.includes(feature);

                  return (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`
                          w-7 h-7
                          rounded-full
                          flex items-center justify-center
                          flex-shrink-0
                          ${
                            included
                              ? plan.highlight
                                ? "bg-blue-500/20 text-blue-300"
                                : "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-500"
                          }
                        `}
                      >
                        {included ? (
                          <Check size={14} />
                        ) : (
                          <X size={14} />
                        )}
                      </div>

                      <span
                        className={`
                          text-[15px]
                          ${
                            included
                              ? plan.highlight
                                ? "text-white"
                                : "text-slate-700"
                              : "text-slate-400 line-through"
                          }
                        `}
                      >
                        {feature}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Button */}
              <button
                className={`
                 mt-10 w-full py-4 rounded-2xl
      font-semibold text-sm
      transition-all duration-300
                  ${
                    plan.highlight
                      ? `
                        bg-blue-500
                        text-white
                        hover:bg-blue-600
                      `
                      : `
                        bg-[#041235]
                        text-white
                        hover:bg-black
                      `
                  }
                `}
              >
                {plan.highlight
                  ? "Get Started"
                  : "Choose Plan"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}