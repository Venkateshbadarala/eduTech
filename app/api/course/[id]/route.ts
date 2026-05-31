// import { NextResponse } from "next/server";
// import connectDB from "@/lib/db";
// import Course from "@/model/Course";

// export async function GET(
//   req: Request,
//   context: { params: Promise<{ id: string }> }
// ) {
//   try {
//     await connectDB();

//     const { id } = await context.params; // ✅ FIX

//     const course = await Course.findById(id);

//     if (!course) {
//       return NextResponse.json(
//         { error: "Course not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(course, { status: 200 });
//   } catch (error) {
//     console.error("GET ERROR:", error);

//     return NextResponse.json(
//       { error: "Server error" },
//       { status: 500 }
//     );
//   }
// }

// export async function PATCH(
//   req: Request,
//   context: { params: Promise<{ id: string }> }
// ) {
//   try {
//     await connectDB();

//     const { id } = await context.params;
//     const body = await req.json();

//     console.log("UPDATE BODY:", body);

//     const updated = await Course.findByIdAndUpdate(
//       id,
//       body,
//       {
//         returnDocument: "after",
//         runValidators: true,
//       }
//     );

//     if (!updated) {
//       return NextResponse.json(
//         { error: "Course not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(updated, {
//       status: 200,
//     });

//   } catch (error: any) {
//     console.log("PATCH ERROR:", error);

//     return NextResponse.json(
//       {
//         error:
//           error.message || "Update failed",
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(
//   req: Request,
//   context: { params: Promise<{ id: string }> }
// ) {
//   try {
//     await connectDB();

//     const { id } = await context.params; // ✅ FIX

//     await Course.findByIdAndDelete(id);

//     return NextResponse.json({ message: "Deleted" });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Delete failed" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Course from "@/model/Course";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params;

    const course = await Course.findById(id);

    if (!course) {
      return NextResponse.json(
        { error: "Course not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(course);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params;

    const body = await req.json();

    const updatedCourse =
      await Course.findByIdAndUpdate(
        id,
        {
          $set: {
            title: body.title,
            category: body.category,
            subcategory:
              body.subcategory,

            description:
              body.description,

            image: body.image,

            headline:
              body.headline,

            tagline:
              body.tagline,

            trend: body.trend,

            trenddesc:
              body.trenddesc,

            duration:
              body.duration,

            start:
              body.start,

            stats:
              body.stats || [],

            skills:
              body.skills || [],

            modules:
              body.modules || [],

            mastery:
              body.mastery || [],

            capstoneProjects:
              body.capstoneProjects ||
              [],

            jobRoles:
              body.jobRoles || [],

            tools:
              body.tools || [],

            pricing:
              body.pricing || [],

            brochure:
              body.brochure || {
                file: "",
              },
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updatedCourse) {
      return NextResponse.json(
        {
          error:
            "Course not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        course:
          updatedCourse,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.error(
      "PATCH ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          error.message ||
          "Update failed",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params;

    const deletedCourse =
      await Course.findByIdAndDelete(
        id
      );

    if (!deletedCourse) {
      return NextResponse.json(
        {
          error:
            "Course not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Course deleted successfully",
    });
  } catch (error) {
    console.error(
      "DELETE ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Delete failed",
      },
      {
        status: 500,
      }
    );
  }
}