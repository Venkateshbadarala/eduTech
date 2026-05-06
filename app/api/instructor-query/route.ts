// app/api/instructor-query/route.ts

import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // ✅ GET FORM DATA
    const body = await req.json();

    console.log(
      "INSTRUCTOR FORM DATA:",
      body
    );

    // ✅ VALIDATION
    if (
      !body.fullName ||
      !body.email ||
      !body.phone ||
      !body.expertise ||
      !body.experience ||
      !body.qualification ||
      !body.linkedin ||
      !body.courseTopic ||
      !body.teachingMode ||
      !body.about
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "All mandatory fields are required",
        },
        { status: 400 }
      );
    }

    // ✅ EMAIL VALIDATION
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid email address",
        },
        { status: 400 }
      );
    }

    // ✅ GOOGLE AUTH
    const auth =
      new google.auth.GoogleAuth({
        credentials: {
          client_email:
            process.env
              .GOOGLE_CLIENT_EMAIL,

          private_key:
            process.env.GOOGLE_PRIVATE_KEY?.replace(
              /\\n/g,
              "\n"
            ),
        },

        scopes: [
          "https://www.googleapis.com/auth/spreadsheets",
        ],
      });

    // ✅ GOOGLE SHEETS INSTANCE
    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    const spreadsheetId =
      process.env.GOOGLE_SHEET_ID!;

    const range =
      "InstructorQuery!A:M";

    // ✅ GET EXISTING DATA
    const existingData =
      await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });

    const rows =
      existingData.data.values || [];

    // ✅ CREATE HEADER IF EMPTY
    if (rows.length === 0) {
      await sheets.spreadsheets.values.append({
        spreadsheetId,

        range:
          "InstructorQuery!A1:M1",

        valueInputOption: "RAW",

        requestBody: {
          values: [
            [
              "Full Name",
              "Email",
              "Phone Number",
              "Expertise",
              "Experience",
              "Qualification",
              "LinkedIn",
              "Portfolio",
              "Course Topic",
              "Teaching Mode",
              "Expected Salary",
              "About",
              "Submitted At",
            ],
          ],
        },
      });
    }

    // ✅ CHECK DUPLICATE EMAIL
    const emailExists = rows.some(
      (row) =>
        row[1]
          ?.toLowerCase()
          ?.trim() ===
        body.email
          ?.toLowerCase()
          ?.trim()
    );

    if (emailExists) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Instructor application already submitted",
        },
        { status: 409 }
      );
    }

    // ✅ SAVE TO GOOGLE SHEET
    await sheets.spreadsheets.values.append({
      spreadsheetId,

      range,

      valueInputOption:
        "USER_ENTERED",

      requestBody: {
        values: [
          [
            body.fullName,

            body.email,

            // ✅ SAVE PHONE AS TEXT
            `'${body.phone}`,

            body.expertise,

            body.experience,

            body.qualification,

            body.linkedin,

            body.portfolio || "",

            body.courseTopic,

            body.teachingMode,

            body.expectedSalary || "",

            body.about,

            // ✅ DATE & TIME
            new Date().toLocaleString(),
          ],
        ],
      },
    });

    // ✅ SUCCESS RESPONSE
    return NextResponse.json({
      success: true,
      message:
        "Instructor application submitted successfully 🚀",
    });

  } catch (error: any) {
    console.log(
      "INSTRUCTOR SHEETS ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to save instructor data",
      },
      { status: 500 }
    );
  }
}