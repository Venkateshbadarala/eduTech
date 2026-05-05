"use client";

import { useState } from "react";
import PriceCard from "./PriceCard";

interface PricingData {
  badge?: string;
  title: string;
  subtitle: string;
  features?: string[];
  price: string;
  note?: string;
  highlight?: boolean;
}

export default function PricingSection({
  pricing,
}: {
  pricing: PricingData[];
}) {
  const [selectedPlan, setSelectedPlan] = useState(pricing[1]); // center default

  const handlePayment = () => {
    if (!selectedPlan) return;

    const amount = Number(selectedPlan.price.replace(/[₹,]/g, "")) * 100;

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount,
      currency: "INR",
      name: "EduTech",
      description: selectedPlan.title,
      handler: function (response: any) {
        console.log("✅ Payment Success:", response);
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <section className="py-10 px-6 text-center">
      {/* HEADING */}
      {/* 🔥 HEADING */}{" "}
      <div className="mb-10 px-4">
        {" "}
        <h2 className="text-3xl md:text-5xl font-bold text-(--color-black-1) leading-tight">
          {" "}
          Unlock Premium Learning at a Limited Price{" "}
        </h2>{" "}
        <p className="text-(--color-gray-2) mt-4 mx-auto text-base md:text-lg">
          {" "}
          Get industry-ready skills with high-quality training—affordable,
          practical, and designed for your success.{" "}
        </p>{" "}
      </div>
      {/* CARDS */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-10">
        {pricing?.map((plan, i) => (
          <PriceCard
            key={i}
            data={plan}
            isActive={selectedPlan?.title === plan.title}
            onSelect={() => setSelectedPlan(plan)}
          />
        ))}
      </div>
    </section>
  );
}
