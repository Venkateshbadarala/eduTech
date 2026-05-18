// "use client";

// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { Upload, Trash2, ImagePlus } from "lucide-react";

// type Tool = {
//   image: string;
// };

// type Props = {
//   value?: Tool[];
//   onChange: (tools: Tool[]) => void;
// };

// const EMPTY_TOOL: Tool = { image: "" };

// export default function ToolsEditor({ value, onChange }: Props) {
//   const [tools, setTools] = useState<Tool[]>(
//     value?.length ? value : [EMPTY_TOOL, EMPTY_TOOL, EMPTY_TOOL]
//   );

//   useEffect(() => {
//     onChange(tools);
//   }, [tools]);

//   // 🔹 upload image
//   const updateImage = (index: number, file: File) => {
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       const updated = [...tools];
//       updated[index].image = reader.result as string;
//       setTools(updated);
//     };

//     reader.readAsDataURL(file);
//   };

//   // 🔹 add tool
//   const addTool = () => {
//     if (tools.length >= 6) {
//       toast.error("Max 6 tools allowed");
//       return;
//     }
//     setTools([...tools, EMPTY_TOOL]);
//   };

//   // 🔹 remove tool
//   const removeTool = (index: number) => {
//     if (tools.length <= 3) {
//       toast.error("Minimum 3 tools required");
//       return;
//     }
//     setTools(tools.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="mt-12">
//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-5">
//         <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
//           🧰 Tools Used
//         </h3>

//         <button
//           onClick={addTool}
//           className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           <ImagePlus size={18} />
//           Add Tool
//         </button>
//       </div>

//       {/* GRID */}
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
//         {tools.map((tool, i) => (
//           <div
//             key={i}
//             className="group relative rounded-2xl border bg-white shadow-sm hover:shadow-lg transition overflow-hidden"
//           >
//             {/* REMOVE BUTTON */}
//             {/* <button
//               onClick={() => removeTool(i)}
//               className="absolute top-2 right-2 bg-white/80 backdrop-blur p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
//             >
//               <Trash2 size={16} className="text-red-500" />
//             </button> */}

//             {/* IMAGE AREA */}
//             <div className="h-36 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
//               {tool.image ? (
//                 <img
//                   src={tool.image}
//                   className="h-20 object-contain transition group-hover:scale-110"
//                 />
//               ) : (
//                 <div className="flex flex-col items-center text-gray-400">
//                   <Upload size={24} />
//                   <span className="text-xs mt-1">Upload</span>
//                 </div>
//               )}
//             </div>

//             {/* OVERLAY UPLOAD */}
//             <label className="absolute inset-0 cursor-pointer opacity-0 group-hover:opacity-100 bg-black/40 flex items-center justify-center transition">
//               <div className="bg-white px-3 py-2 rounded-lg text-sm font-medium shadow">
//                 Change Image
//               </div>

//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e: any) =>
//                   e.target.files[0] && updateImage(i, e.target.files[0])
//                 }
//                 className="hidden"
//               />
//             </label>

//             {/* FOOTER */}
//             <div className="p-3 text-center border-t">
//               <p className="text-xs text-gray-500">
//                 Tool #{i + 1}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* FOOT NOTE */}
//       <p className="text-xs text-gray-400 mt-3">
//         Minimum 3 tools required • Maximum 6 allowed
//       </p>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Trash2,
  ImagePlus,
  Link2,
} from "lucide-react";

type Tool = {
  image: string;
};

type Props = {
  value?: Tool[];
  onChange: (tools: Tool[]) => void;
};

// ✅ CREATE EMPTY TOOL
const createEmptyTool = (): Tool => ({
  image: "",
});

export default function ToolsEditor({
  value,
  onChange,
}: Props) {

  // ✅ STATE
  const [tools, setTools] = useState<Tool[]>([]);

  // ✅ INITIAL LOAD
  useEffect(() => {
    if (value && value.length > 0) {
      setTools(value);
    } else {
      setTools([
        createEmptyTool(),
        createEmptyTool(),
        createEmptyTool(),
      ]);
    }
  }, []);

  // ✅ UPDATE URL
  const updateImageUrl = (
    index: number,
    url: string
  ) => {
    const updated = tools.map((tool, i) =>
      i === index
        ? {
            ...tool,
            image: url,
          }
        : tool
    );

    setTools(updated);

    // ✅ UPDATE PARENT
    onChange(updated);
  };

  // ✅ ADD TOOL
  const addTool = () => {
    if (tools.length >= 9) {
      toast.error(
        "Maximum 9 tools allowed"
      );
      return;
    }

    const updated = [
      ...tools,
      createEmptyTool(),
    ];

    setTools(updated);

    onChange(updated);
  };

  // ✅ REMOVE TOOL
  const removeTool = (
    index: number
  ) => {
    if (tools.length <= 3) {
      toast.error(
        "Minimum 3 tools required"
      );
      return;
    }

    const updated = tools.filter(
      (_, i) => i !== index
    );

    setTools(updated);

    onChange(updated);
  };

  return (
    <div className="mt-12">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">
            🧰 Tools & Technologies
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Add technology logos using image URLs
          </p>
        </div>

        <button
          type="button"
          onClick={addTool}
          className="
            flex items-center gap-2
            bg-gradient-to-r
            from-blue-600 to-cyan-500
            text-white
            px-5 py-3 rounded-2xl
            shadow-lg hover:shadow-xl
            hover:scale-105
            transition-all duration-300
          "
        >
          <ImagePlus size={18} />
          Add Tool
        </button>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {tools.map((tool, i) => (
          <div
            key={i}
            className="
              relative overflow-hidden
              bg-white/90 backdrop-blur-xl
              border border-gray-100
              rounded-3xl
              shadow-md hover:shadow-2xl
              transition-all duration-300
              hover:-translate-y-1
              group
            "
          >

            {/* REMOVE */}
            <button
              type="button"
              onClick={() =>
                removeTool(i)
              }
              className="
                absolute top-3 right-3 z-20
                w-9 h-9 rounded-full
                bg-white shadow-md
                flex items-center justify-center
                opacity-0 group-hover:opacity-100
                transition
              "
            >
              <Trash2
                size={16}
                className="text-red-500"
              />
            </button>

            {/* PREVIEW */}
            <div
              className="
                h-52
                flex items-center justify-center
               
                border-b
              "
            >

              {tool.image ? (
                <img
                  src={tool.image}
                  alt={`Tool ${i + 1}`}
                  className="
                    max-h-28 max-w-[80%]
                    object-contain
                    transition duration-300
                    group-hover:scale-110
                  "
                />
              ) : (
                <div className="text-center text-gray-400">
                  <div
                    className="
                      w-16 h-16 mx-auto mb-3
                      rounded-2xl
                      bg-white shadow-md
                      flex items-center justify-center
                    "
                  >
                    <ImagePlus
                      size={30}
                      className="text-blue-500"
                    />
                  </div>

                  <p className="font-medium">
                    No Preview
                  </p>

                  <p className="text-xs mt-1">
                    Paste image URL below
                  </p>
                </div>
              )}
            </div>

            {/* URL INPUT */}
            <div className="p-5">

              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-2">
                <Link2 size={15} />
                Image URL
              </label>

              <input
                type="text"
                value={tool.image}
                onChange={(e) =>
                  updateImageUrl(
                    i,
                    e.target.value
                  )
                }
                placeholder="Paste image URL..."
                className="
                  w-full
                  px-4 py-3
                  rounded-2xl
                  border border-gray-200
                  bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  focus:border-transparent
                  transition
                  text-sm
                "
              />

              <div
                className="
                  mt-4
                  flex items-center justify-between
                "
              >
                <p className="text-xs text-gray-400">
                  Tool #{i + 1}
                </p>

                <div
                  className="
                    px-3 py-1
                    rounded-full
                    bg-blue-50
                    text-blue-600
                    text-xs font-medium
                  "
                >
                  Active
                </div>
              </div>
            </div>

            {/* GLOW */}
            <div
              className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition duration-500
                pointer-events-none
                bg-gradient-to-r
                from-transparent
                via-blue-100/20
                to-transparent
              "
            />
          </div>
        ))}
      </div>

      {/* FOOTNOTE */}
      <div
        className="
          mt-5
          p-4 rounded-2xl
          bg-blue-50
          border border-blue-100
        "
      >
        <p className="text-sm text-blue-700 font-medium">
          ✅ Minimum 3 tools required • Maximum 9 tools allowed
        </p>
      </div>
    </div>
  );
}