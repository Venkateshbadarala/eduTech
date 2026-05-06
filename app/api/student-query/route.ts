// app/api/student-query/route.ts

import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 🔥 GET FORM DATA
    const body = await req.json();

    console.log("FORM DATA:", body);

    // 🔥 VALIDATION
    if (
      !body.fullName ||
      !body.email ||
      !body.phone ||
      !body.course ||
      !body.college ||
      !body.language
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    // 🔥 GOOGLE AUTH
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,

        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
      },

      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    // 🔥 SHEETS INSTANCE
    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    // 🔥 SAVE TO SHEETS
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,

      range: "StudentsQueries!A:F",

      valueInputOption: "USER_ENTERED",

      requestBody: {
        values: [
          [
            body.fullName,

            body.email,

            // ✅ STORE PHONE AS TEXT
            `'${body.phone}`,

            body.course,

            body.college,

            body.language,
          ],
        ],
      },
    });

    // 🔥 SUCCESS
    return NextResponse.json({
      success: true,
      message: "Data saved successfully 🚀",
    });

  } catch (error: any) {
    console.log("GOOGLE SHEETS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save data",
      },
      { status: 500 }
    );
  }
}