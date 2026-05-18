import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },

    // 🔹 BASIC INFO
    title: String,
    category: String,
    subcategory: String,
    description: String,
    image: String,
    headline: String,
    tagline: String,

    trend: Boolean,
    trenddesc: String,

    duration: String,
    syllabus: String,
    start: String,

    // 🔹 STATS
    stats: [
      {
        value: Number,
        suffix: String,
        label: String,
        color: String,
        bg: String,
        icon: String,
      },
    ],

    // 🔹 SKILLS
    skills: [
      {
        title: String,
        description: String,
        icon: String,
      },
    ],

    // 🔹 MODULES
    modules: [
      {
        title: String,
        topics: [String],
      },
    ],

    // 🔹 TOOLS
    tools: [
      {
        image: String,
      },
    ],

    // 🔹 MASTERY
    mastery: [
      {
        value: String,
        label: String,
        icon: String,
      },
    ],

    // 🔹 PROJECTS
    projects: [
      {
        title: String,
        duration: String,
        highlight: Boolean,
      },
    ],

    // 🔹 CAPSTONE PROJECTS
    capstoneProjects: [
      {
        name: String,

        whatYouDo: String,

        keySteps: [String],

        dataset: String,
      },
    ],

    // 🔹 JOB ROLES
    jobRoles: [
      {
        name: String,
        image: String,
      },
    ],

    // 🔹 PRICING
    pricing: [
      {
        badge: String,
        title: String,
        subtitle: String,
        features: [String],
        price: String,
        note: String,
        highlight: Boolean,
      },
    ],

    // 🔹 BROCHURE
    brochure: {
      file: {
        type: String,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Course ||
  mongoose.model("Course", CourseSchema);