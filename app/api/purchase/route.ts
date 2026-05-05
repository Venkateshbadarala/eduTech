import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/model/User";
import Course from "@/model/Course";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const session = await getServerSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { courseId } = await req.json();

    const user = await User.findOne({ email: session.user?.email });
    const course = await Course.findById(courseId);

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    // ✅ prevent duplicate purchase
    const alreadyBought = user.purchasedCourses.some(
      (c: any) => c.courseId.toString() === courseId
    );

    if (alreadyBought) {
      return NextResponse.json({ message: "Already purchased" });
    }

    // 🔥 PUSH COURSE INTO USER
    user.purchasedCourses.push({
      courseId: course._id,
      title: course.title,
      price: course.price || 0,
    });

    await user.save();

    return NextResponse.json({ message: "Course purchased ✅" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}