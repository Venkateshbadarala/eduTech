import { TrendingUp, Briefcase, DollarSign, Wrench } from "lucide-react";
import {Search,Hash,Megaphone,Pencil,BarChart3} from "lucide-react";
import seo from "@/public/Mastery/SEO.png";
import ads from "@/public/Mastery/Ads.png";
import social from "@/public/Mastery/social.png";
import { Users, Code2, Video } from "lucide-react";
import CourseImg from "@/public/Course.png";
export const coursesData: any = {
  "digital-marketing": {
    title: "Advanced Digital Marketing",
    category: "non-tech",
    description:
    "Master SEO, Ads, Social Media & Analytics with real-world projects.",
    image: "data:image/jpeg;base64,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",
    headline:"Master Digital Marketing — From Beginner to Pro",
    tagline:"Build real-world skills with expert-led training and hands-on projects that accelerate your career.",
    trend: true,
    trenddesc:'Digital marketing is booming, with 93% of companies investing in it.',
  duration: "6 Months",
  start:"ongoing",
   stats: [
    {
      value: 93,
      suffix: "%",
      label:
        "Companies actively invest in digital marketing to boost online presence.",
      color: "text-green-500",
      bg: "bg-white",
      icon: <TrendingUp className="text-green-500" />,
    },
    {
      value: 15,
      suffix: " Lacs+",
      label:
        "Projected digital marketing jobs by 2026 in India alone.",
      color: "text-purple-500",
      bg: "bg-purple-50",
      icon: <Briefcase className="text-purple-500" />,
    },
    {
      value: 70000,
      suffix: "+",
      label:
        "Average annual pay for digital marketing managers worldwide.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: <DollarSign className="text-blue-600" />,
    },
  ],

   skills : [
  {
    title: "SEO Mastery",
    description: "Learn how search engines work and optimize content effectively.",
    icon: "https://img.icons8.com/?size=100&id=7695&format=png&color=000000",
  },
  {
    title: "Social Media Growth",
    description: "Build impactful campaigns across platforms.",
    icon: "https://img.icons8.com/?size=100&id=12621&format=png&color=000000",
  },
  {
    title: "Paid Ads Optimization",
    description: "Design and optimize ad campaigns for ROI.",
    icon: "https://img.icons8.com/?size=100&id=2920&format=png&color=000000",
  },
  {
    title: "Content Strategy",
    description: "Create, distribute, and manage impactful content.",
    icon: "https://img.icons8.com/?size=100&id=avu7fhuOMreB&format=png&color=000000",
  },
  {
    title: "Analytics & Reporting",
    description: "Leverage tools to track KPIs and make data-driven decisions.",
    icon: "https://img.icons8.com/?size=100&id=ZFKgC5O8ab3K&format=png&color=000000",
  },
],

  modules :[
  {
    title: "Introduction to Digital Marketing",
    topics: [
      "Digital Marketing Basics",
      "Purpose of Marketing",
      "Segmentation & 4Ps",
      "Marketing Funnel",
    ],
  },
  {
    title: "Digital Branding & Website Building",
    topics: [
      "Brand Identity",
      "Online Presence",
      "Storytelling",
      "Domain & Hosting",
      "WordPress Website",
    ],
  },
  {
    title: "Keyword Research",
    topics: [
      "Keyword Types",
      "Research Tools",
      "Competitive Analysis",
      "Keyword Mapping",
    ],
  },
  {
    title: "Search Engine Optimization (SEO)",
    topics: [
      "On-page SEO",
      "Technical SEO",
      "Off-page SEO",
      "Mobile & Local SEO",
      "Google Algorithms",
    ],
  },
  {
    title: "Paid Advertising",
    topics: [
      "Google Ads",
      "Ad Campaigns",
      "Bidding Strategies",
      "Optimization & Reporting",
    ],
  },
  {
    title: "Analytics",
    topics: [
      "Setup Analytics",
      "KPIs & Metrics",
      "Custom Reports",
      "Dashboards",
    ],
  },
  {
    title: "Social Media Optimization",
    topics: [
      "Profile Optimization",
      "Hashtag Strategies",
      "Content Calendar",
      "Trends & Analytics",
    ],
  },
  {
    title: "Social Media Marketing",
    topics: [
      "Facebook & Instagram Ads",
      "Influencer Marketing",
      "Campaign Measurement",
    ],
  },
  {
    title: "Email Marketing",
    topics: [
      "Email Campaigns",
      "List Building",
      "Content Creation",
      "Tools & Reporting",
    ],
  },
  {
    title: "Affiliate Marketing",
    topics: [
      "Affiliate Models",
      "Networks",
      "Performance Tracking",
    ],
  },
  {
    title: "Online Reputation Management (ORM)",
    topics: [
      "Basics of ORM",
      "Monitoring Tools",
      "Building Strong Presence",
    ],
  },
  {
    title: "Content Marketing",
    topics: [
      "Content Planning",
      "Blogging",
      "Distribution",
      "Case Studies",
    ],
  },
  {
    title: "Career Preparation",
    topics: [
      "Resume Building",
      "Interview Prep",
      "Mock Interviews",
      "Placement Guidance",
    ],
  },
],

tools: [
    { image: seo },
    { image: ads },
    { image: social },
  ],

mastery: [
    {
      value: "10+",
      label: "Industry Experts",
      icon: <Users className="text-(--color-secondary)" />,
    },
    {
      value: "20+",
      label: "Real World Projects",
      icon: <Code2 className="text-(--color-secondary)" />,
    },
    {
      value: "32",
      label: "Hours of Live Classes",
      icon: <Video className="text-(--color-secondary)" />,
    },
  ],

  projects: [
  {
    title: "Mini Project(1)",
    duration: "Duration : 1 Week",
    icon: <Wrench />,
    color: "bg-indigo-400",
  },
  {
    title: "Major Project(1)",
    duration: "Duration : 3 weeks",
    icon: <Search />,
    color: "bg-green-500",
  },
  {
    title: "1",
    duration: "Certificate",
    highlight: true,
  },
],
pricing: [
  {
    badge: "Basic",
    title: "Starter",
    subtitle: "Perfect for Beginners",
    features: [
      "6 weeks course",
      "20+ live classes",
      "Basic projects",
      "Community support",
    ],
    price: "₹9,999",
    note: "(18% GST extra)",
    highlight: false,
  },
  {
    badge: "Popular",
    title: "Advanced",
    subtitle: "Most Recommended 🚀",
    features: [
      "15 weeks course",
      "80+ live classes",
      "50 credit hours",
      "Real-time assistance",
      "Placement support",
    ],
    price: "₹30,000",
    note: "(18% GST extra)",
    highlight: true, // 🔥 highlight this plan
  },
  {
    badge: "Premium",
    title: "Pro",
    subtitle: "Career Accelerator",
    features: [
      "20+ weeks course",
      "100+ live classes",
      "1:1 mentorship",
      "Internship opportunity",
      "Guaranteed interview calls",
    ],
    price: "₹49,999",
    note: "(18% GST extra)",
    highlight: false,
  },
],

brochure: 
  {
    title: "Course Syllabus",
    type: "PDF",
    file: "/pdfs/dm.pdf",
  },


  },
};