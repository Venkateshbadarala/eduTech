"use client";

import { useEffect, useState } from "react";
import PriceCard from "./PriceCard";

interface PricingData {
  name: string;
  badge?: string;
  title: string;
  subtitle: string;
  features?: string[];
  price: string;
  note?: string;
  highlight?: boolean;
}

interface PricingSectionProps {
  pricing: PricingData[];
  courseType: string; // "Normal" | "Zoho"
}

export default function PricingSection({
  pricing,
  courseType,
}: PricingSectionProps) {
  const filteredPricing = pricing.filter(
    (plan) =>
      plan.name?.toLowerCase() ===
      courseType?.toLowerCase()
  );

  const [selectedPlan, setSelectedPlan] =
    useState<PricingData | null>(
      filteredPricing[0] || null
    );

  useEffect(() => {
    setSelectedPlan(filteredPricing[0] || null);
  }, [courseType, pricing]);

  const handlePayment = () => {
    if (!selectedPlan) return;

    const amount =
      Number(
        selectedPlan.price.replace(
          /[₹,]/g,
          ""
        )
      ) * 100;

    const options = {
      key:
        process.env
          .NEXT_PUBLIC_RAZORPAY_KEY,
      amount,
      currency: "INR",
      name: "EduTech",
      description: selectedPlan.title,

      handler: function (
        response: any
      ) {
        console.log(
          "✅ Payment Success:",
          response
        );
      },
    };

    const rzp = new (
      window as any
    ).Razorpay(options);

    rzp.open();
  };

  const sortedPricing = [
    ...filteredPricing,
  ].sort((a, b) => {
    const order: Record<
      string,
      number
    > = {
      Recorded: 1,
      Professional: 2,
      "Mentor Led": 3,
    };

    return (
      (order[a.title] || 999) -
      (order[b.title] || 999)
    );
  });

  return (
    <section className="py-10 px-6 text-center">
      {/* Heading */}
      <div className="mb-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-black-1 leading-tight">
          Unlock Premium Learning at a Limited Price
        </h2>

        <p className="text-gray-500 mt-5 max-w-6xl mx-auto text-md md:text-lg leading-relaxed">
          Get industry-ready skills with
          high-quality training,
          affordable pricing, practical
          projects, and expert guidance.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-10 py-10">
        {sortedPricing.map(
          (plan, index) => (
            <PriceCard
              key={index}
              allPlans={sortedPricing}
              data={plan}
              isActive={
                selectedPlan?.title ===
                plan.title
              }
              onSelect={() =>
                setSelectedPlan(plan)
              }
            />
          )
        )}
      </div>
    </section>
  );
}