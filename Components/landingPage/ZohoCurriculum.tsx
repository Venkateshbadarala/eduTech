"use client";

import { BookOpen, CheckCircle2, GraduationCap, FileSpreadsheet } from "lucide-react";

const curriculum = [
  {
    module: "Module 1",
    title: "Zoho Books Fundamentals",
    topics: [
      "Organization Setup",
      "Chart of Accounts",
      "Customers & Vendors",
      "Items & Preferences",
    ],
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
  },
  {
    module: "Module 2",
    title: "Transactions & Banking",
    topics: [
      "Sales & Purchases",
      "Expenses & Payments",
      "Bank Reconciliation",
      "Recurring Transactions",
    ],
    icon: <FileSpreadsheet className="w-6 h-6 text-green-600" />,
  },
  {
    module: "Module 3",
    title: "GST & Reports",
    topics: [
      "GST Management",
      "E-Invoicing",
      "Financial Reports",
      "Business Analytics",
    ],
    icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
  },
  {
    module: "Module 4",
    title: "Automation & Integrations",
    topics: [
      "Workflow Automation",
      "Email Notifications",
      "Custom Functions",
      "Zoho Integrations",
    ],
    icon: <CheckCircle2 className="w-6 h-6 text-orange-600" />,
  },
];

export default function ZohoCurriculum() {
  return (
    <section className="py-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Zoho Books Curriculum
        </h2>

        <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
          Learn every essential feature of Zoho Books through a structured,
          industry-focused curriculum designed for beginners and professionals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {curriculum.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
                {item.icon}
              </div>

              <div>
                <span className="text-sm font-semibold text-blue-600">
                  {item.module}
                </span>

                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {item.topics.map((topic, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}