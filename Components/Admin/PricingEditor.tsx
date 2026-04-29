"use client";

import { useEffect, useState } from "react";

type Plan = {
  badge: string;
  title: string;
  subtitle: string;
  features: string[];
  price: string;
  note: string;
  highlight: boolean;
};

type Props = {
  value?: Plan[];
  onChange: (plans: Plan[]) => void;
};

// 🔒 CONSTANT FEATURES
const FEATURES = {
  Basic: [
    "6 weeks course",
    "20+ live classes",
    "Basic projects",
    "Community support",
  ],
  Popular: [
    "15 weeks course",
    "80+ live classes",
    "50 credit hours",
    "Real-time assistance",
    "Placement support",
  ],
  Premium: [
    "20+ weeks course",
    "100+ live classes",
    "1:1 mentorship",
    "Internship opportunity",
    "Guaranteed interview calls",
  ],
};

// 🔒 DEFAULT PLANS
const DEFAULT_PLANS: Plan[] = [
  {
    badge: "Basic",
    title: "",
    subtitle: "",
    features: FEATURES.Basic,
    price: "",
    note: "(18% GST extra)",
    highlight: false,
  },
  {
    badge: "Popular",
    title: "",
    subtitle: "",
    features: FEATURES.Popular,
    price: "",
    note: "(18% GST extra)",
    highlight: true, // default highlight
  },
  {
    badge: "Premium",
    title: "",
    subtitle: "",
    features: FEATURES.Premium,
    price: "",
    note: "(18% GST extra)",
    highlight: false,
  },
];

export default function PricingEditor({ value, onChange }: Props) {
  const [plans, setPlans] = useState<Plan[]>(
    value?.length === 3 ? value : DEFAULT_PLANS
  );

  // 🔁 sync to parent
  useEffect(() => {
    onChange(plans);
  }, [plans]);

  // 🔹 update field
  const updatePlan = (index: number, key: keyof Plan, val: any) => {
    const updated = [...plans];
    updated[index] = { ...updated[index], [key]: val };
    setPlans(updated);
  };

  // 🔹 handle highlight (only one allowed)
  const setHighlight = (index: number) => {
    const updated = plans.map((p, i) => ({
      ...p,
      highlight: i === index,
    }));
    setPlans(updated);
  };

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-6">Pricing Plans</h3>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`border rounded-2xl p-5 shadow-sm transition hover:shadow-md ${
              plan.highlight
                ? "border-blue-500 ring-2 ring-blue-300"
                : "border-gray-200"
            }`}
          >
            {/* BADGE */}
            <p className="text-xs font-semibold text-gray-500 mb-2">
              {plan.badge}
            </p>

            {/* TITLE */}
            <input
              value={plan.title}
              onChange={(e) =>
                updatePlan(i, "title", e.target.value)
              }
              placeholder="Plan Title"
              className="w-full border p-2 rounded mb-2 font-semibold"
            />

            {/* SUBTITLE */}
            <input
              value={plan.subtitle}
              onChange={(e) =>
                updatePlan(i, "subtitle", e.target.value)
              }
              placeholder="Subtitle"
              className="w-full border p-2 rounded mb-3 text-sm"
            />

            {/* PRICE */}
            <input
              value={plan.price}
              onChange={(e) =>
                updatePlan(i, "price", e.target.value)
              }
              placeholder="₹ Price"
              className="w-full border p-2 rounded mb-3 text-lg font-bold"
            />

            {/* NOTE */}
            <p className="text-xs text-gray-400 mb-3">
              {plan.note}
            </p>

            {/* FEATURES (readonly) */}
            <ul className="text-sm text-gray-600 mb-4 space-y-1">
              {plan.features.map((f, idx) => (
                <li key={idx}>✔ {f}</li>
              ))}
            </ul>

            {/* HIGHLIGHT RADIO */}
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                checked={plan.highlight}
                onChange={() => setHighlight(i)}
              />
              Highlight Plan
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}