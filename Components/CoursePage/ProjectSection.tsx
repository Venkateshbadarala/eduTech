// "use client";

// interface ProjectItem {
//   title: string;
//   duration: string;
//   icon?: React.ReactNode;
//   color?: string;
//   highlight?: boolean;
// }

// export default function ProjectsSection({
//   projects,
// }: {
//   projects: ProjectItem[];
// }) {
//   return (
//     <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6 ">

//       {projects?.map((item, i) => (
//         <div
//           key={i}
//           className={`
//             flex items-center gap-4
//             bg-white p-6 rounded-2xl
//             border border-gray-100
//             transition duration-300
//             hover:-translate-y-1 hover:shadow-lg
//             ${
//               item.highlight
//                 ? "justify-center text-center"
//                 : ""
//             }
//           `}
//         >

//           {/* 🔥 ICON (ONLY IF EXISTS) */}
//           {!item.highlight && (
//             <div
//               className={`
//                 w-14 h-14 flex items-center justify-center
//                 rounded-full text-white text-xl
//                 ${item.color || "bg-gray-400"}
//               `}
//             >
//               {item.icon}
//             </div>
//           )}

//           {/* 🔥 TEXT */}
//           <div className={`${item.highlight ? "text-left" : ""}`}>
            
//             {/* VALUE / TITLE */}
//             <h3
//               className={`
//                 font-semibold text-gray-800
//                 ${item.highlight ? "text-3xl text-orange-500 font-bold" : "text-lg"}
//               `}
//             >
//               {item.title}
//             </h3>

//             {/* SUBTEXT */}
//             <p className="text-gray-500 text-sm mt-1">
//               {item.duration}
//             </p>
//           </div>

//         </div>
//       ))}

//     </div>
//   );
// }


"use client";

import { Wrench, Search, Ticket } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Mini Project (1)",
      duration: "Duration: 1 Week",
      icon: <Wrench />,
      color: "bg-indigo-500",
    },
    {
      title: "Major Project (1)",
      duration: "Duration: 3 Weeks",
      icon: <Search />,
      color: "bg-green-500",
    },
    {
      title: "1",
      duration: "Certificate",
      icon: <Ticket />,
      highlight: true,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
      {projects.map((item, i) => (
        <div
          key={i}
          className={`
            relative flex items-center gap-4
            p-6 rounded-2xl bg-white
            border border-gray-2
            shadow-sm hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-1
            ${
              item.highlight
                ? " text-center justify-center bg-gradient-to-br from-light to-primary-light border-(--color-light)"
                : ""
            }
          `}
        >
          {/* ICON */}
          <div
            className={`
              flex items-center justify-center 
              ${
                item.highlight
                  ? "w-14 h-14 rounded-xl bg-secondary text-white text-2xl shadow-md"
                  : `w-14 h-14 rounded-xl text-white text-xl ${item.color}`
              }
            `}
          >
            {item.icon}
          </div>

          {/* TEXT */}
          <div className={`${item.highlight ? "" : ""}`}>
            <h3
              className={`
                font-semibold
                ${
                  item.highlight
                    ? "text-3xl font-bold text-secondary"
                    : "text-lg text-gray-2"
                }
              `}
            >
              {item.title}
            </h3>

            <p
              className={`
                mt-1 text-sm
                ${
                  item.highlight
                    ? "text-secondary font-medium"
                    : "text-gray-2"
                }
              `}
            >
              {item.duration}
            </p>
          </div>

          {/* 🔥 GLOW EFFECT */}
          <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-500" />
        </div>
      ))}
    </div>
  );
}