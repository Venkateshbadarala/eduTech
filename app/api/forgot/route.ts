// import connectDB from "@/lib/db";
// import User from "@/model/User";
// import { NextRequest, NextResponse } from "next/server";
// import bcrypt from "bcryptjs";

// export async function POST(req: NextRequest) {
//   try {
//     await connectDB();

//     const { email, password, confirmPassword } = await req.json();

//     // ✅ validation
//     if (!email || !password || !confirmPassword) {
//       return NextResponse.json(
//         { error: "All fields required" },
//         { status: 400 }
//       );
//     }

//     if (password !== confirmPassword) {
//       return NextResponse.json(
//         { error: "Passwords do not match" },
//         { status: 400 }
//       );
//     }

//     const user = await User.findOne({ email });

//     if (!user) {
//       return NextResponse.json(
//         { error: "User not found" },
//         { status: 404 }
//       );
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     // ✅ FIX: use update instead of save()
//     await User.findOneAndUpdate(
//       { email },
//       { password: hashedPassword }
//     );

//     return NextResponse.json({
//       success: true,
//       message: "Password updated successfully",
//     });

//   } catch (error: any) {
//     console.error("❌ FORGOT ERROR:", error);

//     return NextResponse.json(
//       { error: "Server error" },
//       { status: 500 }
//     );
//   }
// }

import connectDB from "@/lib/db";
import User from "@/model/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const {
      email,
      password,
      confirmPassword,
    } = await req.json();

    // ✅ REQUIRED VALIDATION
    if (
      !email ||
      !password ||
      !confirmPassword
    ) {
      return NextResponse.json(
        {
          error:
            "All fields are required",
        },
        { status: 400 }
      );
    }

    // ✅ EMAIL VALIDATION
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid email address",
        },
        { status: 400 }
      );
    }

    // ✅ PASSWORD LENGTH
    if (password.length < 6) {
      return NextResponse.json(
        {
          error:
            "Password must be at least 6 characters",
        },
        { status: 400 }
      );
    }

    // ✅ STRONG PASSWORD VALIDATION
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

    if (!passwordRegex.test(password)) {
      return NextResponse.json(
        {
          error:
            "Password must contain uppercase, lowercase and number",
        },
        { status: 400 }
      );
    }

    // ✅ PASSWORD MATCH
    if (password !== confirmPassword) {
      return NextResponse.json(
        {
          error:
            "Passwords do not match",
        },
        { status: 400 }
      );
    }

    // ✅ CHECK USER
    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "User not found",
        },
        { status: 404 }
      );
    }

    // ✅ CHECK SAME PASSWORD
    const isSamePassword =
      await bcrypt.compare(
        password,
        user.password
      );

    if (isSamePassword) {
      return NextResponse.json(
        {
          error:
            "New password cannot be same as old password",
        },
        { status: 400 }
      );
    }

    // ✅ HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // ✅ UPDATE PASSWORD
    await User.findOneAndUpdate(
      {
        email: email.toLowerCase(),
      },
      {
        password: hashedPassword,
      }
    );

    return NextResponse.json({
      success: true,
      message:
        "Password updated successfully 🔐",
    });

  } catch (error: any) {
    console.error(
      "❌ FORGOT ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          error.message ||
          "Server error",
      },
      { status: 500 }
    );
  }
}