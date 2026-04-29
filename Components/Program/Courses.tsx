// data/courses.ts

export interface Course {
  title: string;
  duration: string;
  image: string;
  category: string;
  type?: string;
}

export const courses: Course[] = [
  // 💻 Computer Science
  {
    title: "Web Development (MERN)",
    duration: "2-4 Months",
    image: "/web.jpg",
    category: "Computer Science",
    type: "Live"
  },
   {
    title: "Web Development (MERN)",
    duration: "2-4 Months",
    image: "/web.jpg",
    category: "Advanced Programs",
    type: "Live"
  },
  {
    title: "Data Structures & Algorithms",
    duration: "3 Months",
    image: "/dsa.jpg",
    category: "Computer Science",
    type: "Live"
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    duration: "2-4 Months",
    image: "/cyber.jpg",
    category: "Computer Science",
    type: "Live"
  },

  // 🏢 IBM
  {
    title: "IBM Data Science Professional",
    duration: "3-6 Months",
    image: "/ibm.jpg",
    category: "IBM",
    type: "Offline"
  },

  // 🧠 Microsoft
  {
    title: "Azure Cloud Fundamentals",
    duration: "2 Months",
    image: "/azure.jpg",
    category: "Microsoft",
    type: "Offline"
  },

  // 🔵 Meta
  {
    title: "Meta Frontend Developer",
    duration: "4 Months",
    image: "/meta.jpg",
    category: "Meta",
    type: "Live"
  },

  // ⚡ Electrical
  {
    title: "Electrical Circuit Design",
    duration: "3 Months",
    image: "/electrical.jpg",
    category: "Electrical",
    type: "Live"
  },

  // 🔧 Mechanical
  {
    title: "Mechanical CAD Design",
    duration: "3 Months",
    image: "/mechanical.jpg",
    category: "Mechanical",
    type: "Live"
  },

  // 📊 Management
  {
    title: "Digital Marketing",
    duration: "2-4 Months",
    image: "/marketing.jpg",
    category: "Management",
    type: "Live"
  },
  {
    title: "Business Analytics",
    duration: "3 Months",
    image: "/business.jpg",
    category: "Management",
    type: "Live"
  },

  // 🏥 Medical
  {
    title: "Medical Coding",
    duration: "2 Months",
    image: "/medical.jpg",
    category: "Medical",
    type: "Offline"
  },

  // 🎨 Autodesk
  {
    title: "AutoCAD Design",
    duration: "2 Months",
    image: "/autocad.jpg",
    category: "Autodesk Courses",
    type: "Live"
  },

  // 🎓 Placement
  {
    title: "Full Stack Placement Program",
    duration: "4-6 Months",
    image: "/placement.jpg",
    category: "Placement Courses",
    type: "Live"
  },
];


