"use client";

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
}: {
  data: PricingData;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      onClick={onSelect}
      className={`
        relative cursor-pointer transition-all duration-300 w-full max-w-sm 
        ${data.highlight ? "md:scale-110 z-10" : ""}
        ${isActive ? "" : ""}
      `}
    >
      {/* BADGE */}
      {data.badge && (
        <div className="absolute -top-3 left-6 bg-black text-white px-4 py-1 rounded-full text-sm shadow">
          {data.badge}
        </div>
      )}

      <div className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition h-[30rem]">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-gray-800">
          {data.title}
        </h2>

        {/* SUBTITLE */}
        <p className="text-gray-500 mt-1">
          {data.subtitle}
        </p>

        <div className="border-t my-5" />

        {/* FEATURES */}
        <ul className="space-y-2 text-gray-600">
          {(data?.features || []).map((f, i) => (
            <li key={i} className="flex gap-2">
              ✔ {f}
            </li>
          ))}
        </ul>

        {/* PRICE */}
        <div className="mt-6">
          <h3 className="text-3xl font-bold text-blue-600">
            {data.price}
          </h3>

          {data.note && (
            <p className="text-sm text-gray-400">
              {data.note}
            </p>
          )}
        </div>

        {/* BUTTON */}
        <button className="mt-6 w-full bg-black text-white py-2 rounded-xl">
          Select Plan
        </button>
      </div>
    </div>
  );
}