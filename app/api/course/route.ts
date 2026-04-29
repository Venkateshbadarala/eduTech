import connectDB from "@/lib/db";
import Course from "@/model/Course";

export async function POST(req: Request) {
  try {
    await connectDB();
console.log("DB connected"); 
    const body = await req.json();

    // 🔹 Basic validation
    if (!body.title || !body.category) {
      return new Response(
        JSON.stringify({ message: "Title and Category are required" }),
        { status: 400 }
      );
    }

    // 🔹 Generate slug
    const baseSlug = body.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // remove special chars
      .replace(/\s+/g, "-");

    // 🔹 Ensure unique slug
    let slug = baseSlug;
    let count = 1;

    while (await Course.findOne({ slug })) {
      slug = `${baseSlug}-${count}`;
      count++;
    }

   const course = await Course.create({
  ...body,
  brochure: body?.brochure?.file || "", // force string
  slug,
});

    return new Response(JSON.stringify(course), {
      status: 201,
    });

  } catch (error: any) {
    console.error("POST ERROR:", error);

    return new Response(
      JSON.stringify({ message: "Failed to create course" }),
      { status: 500 }
    );
  }
}