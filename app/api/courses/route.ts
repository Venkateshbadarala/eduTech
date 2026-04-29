import connectDB from "@/lib/db";
import Course from "@/model/Course";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
console.log("DB connected"); 
    const courses = await Course.find().sort({ createdAt: -1 });

    return NextResponse.json({ courses });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}