import connectDB from "@/lib/db";
import User from "@/model/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, password, confirmPassword } = await req.json();

    // ✅ validation
    if (!email || !password || !confirmPassword) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ FIX: use update instead of save()
    await User.findOneAndUpdate(
      { email },
      { password: hashedPassword }
    );

    return NextResponse.json({
      success: true,
      message: "Password updated successfully",
    });

  } catch (error: any) {
    console.error("❌ FORGOT ERROR:", error);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}