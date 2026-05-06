// "use client";

// import { useEffect, useState } from "react";

// type Plan = {
//   badge: string;
//   title: string;
//   subtitle: string;
//   features: string[];
//   price: string;
//   note: string;
//   highlight: boolean;
// };

// type Props = {
//   value?: Plan[];
//   onChange: (plans: Plan[]) => void;
// };

// // 🔒 CONSTANT FEATURES
// const FEATURES = {
//   Basic: [
//     "6 weeks course",
//     "20+ live classes",
//     "Basic projects",
//     "Community support",
//   ],
//   Popular: [
//     "15 weeks course",
//     "80+ live classes",
//     "50 credit hours",
//     "Real-time assistance",
//     "Placement support",
//   ],
//   Premium: [
//     "20+ weeks course",
//     "100+ live classes",
//     "1:1 mentorship",
//     "Internship opportunity",
//     "Guaranteed interview calls",
//   ],
// };

// // 🔒 DEFAULT PLANS
// const DEFAULT_PLANS: Plan[] = [
//   {
//     badge: "Basic",
//     title: "",
//     subtitle: "",
//     features: FEATURES.Basic,
//     price: "",
//     note: "(18% GST extra)",
//     highlight: false,
//   },
//   {
//     badge: "Popular",
//     title: "",
//     subtitle: "",
//     features: FEATURES.Popular,
//     price: "",
//     note: "(18% GST extra)",
//     highlight: true, // default highlight
//   },
//   {
//     badge: "Premium",
//     title: "",
//     subtitle: "",
//     features: FEATURES.Premium,
//     price: "",
//     note: "(18% GST extra)",
//     highlight: false,
//   },
// ];

// export default function PricingEditor({ value, onChange }: Props) {
//   const [plans, setPlans] = useState<Plan[]>(
//     value?.length === 3 ? value : DEFAULT_PLANS
//   );

//   // 🔁 sync to parent
//   useEffect(() => {
//     onChange(plans);
//   }, [plans]);

//   // 🔹 update field
//   const updatePlan = (index: number, key: keyof Plan, val: any) => {
//     const updated = [...plans];
//     updated[index] = { ...updated[index], [key]: val };
//     setPlans(updated);
//   };

//   // 🔹 handle highlight (only one allowed)
//   const setHighlight = (index: number) => {
//     const updated = plans.map((p, i) => ({
//       ...p,
//       highlight: i === index,
//     }));
//     setPlans(updated);
//   };

//   return (
//     <div className="mt-10">
//       <h3 className="text-xl font-semibold mb-6">Pricing Plans</h3>

//       <div className="grid md:grid-cols-3 gap-6">
//         {plans.map((plan, i) => (
//           <div
//             key={i}
//             className={`border rounded-2xl p-5 shadow-sm transition hover:shadow-md ${
//               plan.highlight
//                 ? "border-blue-500 ring-2 ring-blue-300"
//                 : "border-gray-200"
//             }`}
//           >
//             {/* BADGE */}
//             <p className="text-xs font-semibold text-gray-500 mb-2">
//               {plan.badge}
//             </p>

//             {/* TITLE */}
//             <input
//               value={plan.title}
//               onChange={(e) =>
//                 updatePlan(i, "title", e.target.value)
//               }
//               placeholder="Plan Title"
//               className="w-full border p-2 rounded mb-2 font-semibold"
//             />

//             {/* SUBTITLE */}
//             <input
//               value={plan.subtitle}
//               onChange={(e) =>
//                 updatePlan(i, "subtitle", e.target.value)
//               }
//               placeholder="Subtitle"
//               className="w-full border p-2 rounded mb-3 text-sm"
//             />

//             {/* PRICE */}
//             <input
//               value={plan.price}
//               onChange={(e) =>
//                 updatePlan(i, "price", e.target.value)
//               }
//               placeholder="₹ Price"
//               className="w-full border p-2 rounded mb-3 text-lg font-bold"
//             />

//             {/* NOTE */}
//             <p className="text-xs text-gray-400 mb-3">
//               {plan.note}
//             </p>

//             {/* FEATURES (readonly) */}
//             <ul className="text-sm text-gray-600 mb-4 space-y-1">
//               {plan.features.map((f, idx) => (
//                 <li key={idx}>✔ {f}</li>
//               ))}
//             </ul>

//             {/* HIGHLIGHT RADIO */}
//             <label className="flex items-center gap-2 text-sm">
//               <input
//                 type="radio"
//                 checked={plan.highlight}
//                 onChange={() => setHighlight(i)}
//               />
//               Highlight Plan
//             </label>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Plus,
  Trash2,
  Star,
  CircleX,
} from "lucide-react";

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

// ✅ CREATE EMPTY PLAN
const createPlan = (): Plan => ({
  badge: "",
  title: "",
  subtitle: "",
  features: [""],
  price: "",
  note: "(18% GST extra)",
  highlight: false,
});

export default function PricingEditor({
  value,
  onChange,
}: Props) {

  // ✅ INITIAL STATE
  const [plans, setPlans] = useState<Plan[]>([]);

  // ✅ LOAD INITIAL VALUE ONLY ONCE
  useEffect(() => {
    if (value && value.length > 0) {
      setPlans(value);
    } else {
      setPlans([createPlan()]);
    }
  }, []);

  // ✅ UPDATE PLAN FIELD
  const updatePlan = (
    index: number,
    key: keyof Plan,
    value: any
  ) => {
    const updated = plans.map((plan, i) =>
      i === index
        ? {
            ...plan,
            [key]: value,
          }
        : plan
    );

    setPlans(updated);

    // ✅ UPDATE PARENT
    onChange(updated);
  };

  // ✅ ADD PLAN
  const addPlan = () => {
    if (plans.length >= 6) {
      toast.error("Maximum 6 plans allowed");
      return;
    }

    const updated = [
      ...plans,
      createPlan(),
    ];

    setPlans(updated);

    // ✅ UPDATE PARENT
    onChange(updated);
  };

  // ✅ REMOVE PLAN
  const removePlan = (index: number) => {
    if (plans.length <= 1) {
      toast.error(
        "At least one pricing plan required"
      );
      return;
    }

    const updated = plans.filter(
      (_, i) => i !== index
    );

    setPlans(updated);

    // ✅ UPDATE PARENT
    onChange(updated);
  };

  // ✅ ADD FEATURE
  const addFeature = (
    planIndex: number
  ) => {
    const updated = [...plans];

    updated[planIndex].features.push("");

    setPlans(updated);

    // ✅ UPDATE PARENT
    onChange(updated);
  };

  // ✅ REMOVE FEATURE
  const removeFeature = (
    planIndex: number,
    featureIndex: number
  ) => {
    const updated = [...plans];

    if (
      updated[planIndex].features
        .length <= 1
    ) {
      toast.error(
        "At least one feature required"
      );
      return;
    }

    updated[planIndex].features =
      updated[
        planIndex
      ].features.filter(
        (_, i) => i !== featureIndex
      );

    setPlans(updated);

    // ✅ UPDATE PARENT
    onChange(updated);
  };

  // ✅ UPDATE FEATURE
  const updateFeature = (
    planIndex: number,
    featureIndex: number,
    value: string
  ) => {
    const updated = [...plans];

    updated[planIndex].features[
      featureIndex
    ] = value;

    setPlans(updated);

    // ✅ UPDATE PARENT
    onChange(updated);
  };

  // ✅ HIGHLIGHT PLAN
  const setHighlight = (
    index: number
  ) => {
    const updated = plans.map(
      (plan, i) => ({
        ...plan,
        highlight: i === index,
      })
    );

    setPlans(updated);

    // ✅ UPDATE PARENT
    onChange(updated);
  };

  return (
    <div className="mt-10">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800">
          Pricing Plans
        </h3>

        <button
          type="button"
          onClick={addPlan}
          className="
            flex items-center gap-2
            bg-blue-600 text-white
            px-4 py-2 rounded-xl
            hover:bg-blue-700
            transition
          "
        >
          <Plus size={18} />
          Add Plan
        </button>
      </div>

      {/* PLANS */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`
              relative
              rounded-3xl
              border
              p-5
              bg-white
              shadow-sm
              hover:shadow-lg
              transition
              ${
                plan.highlight
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-200"
              }
            `}
          >

            {/* REMOVE BUTTON */}
            <button
              type="button"
              onClick={() =>
                removePlan(i)
              }
              className="
                absolute top-1 right-1
                w-6 h-6 rounded-full
                bg-red-50
                flex items-center justify-center
                hover:bg-red-100
                transition
              "
            >
              <CircleX
                size={16}
                className="text-red-500"
              />
            </button>

            {/* BADGE */}
            <input
              value={plan.badge}
              onChange={(e) =>
                updatePlan(
                  i,
                  "badge",
                  e.target.value
                )
              }
              placeholder="Badge"
              className="
                w-full border rounded-xl
                p-3 mb-3
                font-semibold
              "
            />

            {/* TITLE */}
            <input
              value={plan.title}
              onChange={(e) =>
                updatePlan(
                  i,
                  "title",
                  e.target.value
                )
              }
              placeholder="Plan Title"
              className="
                w-full border rounded-xl
                p-3 mb-3
                font-semibold
              "
            />

            {/* SUBTITLE */}
            <input
              value={plan.subtitle}
              onChange={(e) =>
                updatePlan(
                  i,
                  "subtitle",
                  e.target.value
                )
              }
              placeholder="Subtitle"
              className="
                w-full border rounded-xl
                p-3 mb-3 text-sm
              "
            />

            {/* PRICE */}
            <input
              value={plan.price}
              onChange={(e) =>
                updatePlan(
                  i,
                  "price",
                  e.target.value
                )
              }
              placeholder="₹49,999"
              className="
                w-full border rounded-xl
                p-3 mb-2
                text-xl font-bold
              "
            />

            {/* NOTE */}
            <input
              value={plan.note}
              onChange={(e) =>
                updatePlan(
                  i,
                  "note",
                  e.target.value
                )
              }
              placeholder="Note"
              className="
                w-full border rounded-xl
                p-3 mb-4 text-sm
              "
            />

            {/* FEATURES */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-gray-700">
                  Features
                </h4>

                <button
                  type="button"
                  onClick={() =>
                    addFeature(i)
                  }
                  className="
                    text-blue-600 text-sm
                    font-medium
                  "
                >
                  + Add
                </button>
              </div>

              {plan.features.map(
                (
                  feature,
                  featureIndex
                ) => (
                  <div
                    key={featureIndex}
                    className="flex gap-2"
                  >
                    <input
                      value={feature}
                      onChange={(e) =>
                        updateFeature(
                          i,
                          featureIndex,
                          e.target.value
                        )
                      }
                      placeholder="Feature"
                      className="
                        flex-1 border
                        rounded-xl p-3
                        text-sm
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        removeFeature(
                          i,
                          featureIndex
                        )
                      }
                      className="
                        w-10 h-10
                        rounded-xl
                        bg-red-50
                        flex items-center justify-center
                      "
                    >
                      <Trash2
                        size={15}
                        className="text-red-500"
                      />
                    </button>
                  </div>
                )
              )}
            </div>

            {/* HIGHLIGHT */}
            <button
              type="button"
              onClick={() =>
                setHighlight(i)
              }
              className={`
                mt-5 w-full h-12
                rounded-xl
                font-medium
                flex items-center justify-center gap-2
                transition
                ${
                  plan.highlight
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-100 text-gray-700"
                }
              `}
            >
              <Star size={16} />

              {plan.highlight
                ? "Highlighted"
                : "Set Highlight"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}