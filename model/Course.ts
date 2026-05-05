import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },

  title: String,
  category: String,
  subcategory:String,
  description: String,
  image: String,
  headline: String,
  tagline: String,

  trend: Boolean,
  trenddesc: String,

  duration: String,
  syllabus: String,
  start: String,


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

  skills: [
    {
      title: String,
      description: String,
      icon: String,
    },
  ],

  modules: [
    {
      title: String,
      topics: [String],
    },
  ],

  tools: [
    {
      image: String,
    },
  ],

  mastery: [
    {
      value: String,
      label: String,
      icon: String,
    },
  ],

  projects: [
    {
      title: String,
      duration: String,
      highlight: Boolean,
    },
  ],

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

  brochure: {
  file: {
    type: String,
    default: "",
  },
},
});

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);