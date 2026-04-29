import connectDB from "@/lib/db";
import User from "@/model/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { name, email, phone, password, confirmPassword } = await req.json();

    console.log("📩 Incoming Data:", { name, email, phone });

    // ✅ validation
    if (!name || !email || !phone || !password || !confirmPassword) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // ✅ password match
    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }

    // ✅ check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }

    // ✅ hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ create user
    const newUser = await User.create({
      name,
      email,
      phone, // ✅ added
      password: hashedPassword,
    });

    console.log("✅ User Created:", newUser._id);

    return NextResponse.json({
      success: true,
      message: "User registered successfully",
    });

  } catch (error: any) {
    console.error("❌ REGISTER ERROR:", error);

    return NextResponse.json(
      { error: error.message || "Server error" },
      { status: 500 }
    );
  }
}