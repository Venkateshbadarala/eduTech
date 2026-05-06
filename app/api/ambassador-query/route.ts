// app/api/ambassador-query/route.ts

import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 🔥 GET FORM DATA
    const body = await req.json();

    console.log("AMBASSADOR FORM DATA:", body);

    // 🔥 VALIDATION
    if (
      !body.fullName ||
      !body.email ||
      !body.phone ||
      !body.college ||
      !body.city ||
      !body.year ||
      !body.linkedin ||
      !body.whyJoin
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
        client_email:
          process.env.GOOGLE_CLIENT_EMAIL,

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

    // 🔥 SHEETS INSTANCE
    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    // 🔥 SAVE TO GOOGLE SHEET
    await sheets.spreadsheets.values.append({
      spreadsheetId:
        process.env.GOOGLE_SHEET_ID,

      // ✅ NEW SHEET TAB NAME
      range: "AmbassadorQuery!A:I",

      valueInputOption: "USER_ENTERED",

      requestBody: {
        values: [
          [
            body.fullName,

            body.email,

            // ✅ SAVE PHONE AS TEXT
            `'${body.phone}`,

            body.college,

            body.city,

            body.year,

            body.linkedin,

            body.whyJoin,

            // ✅ DATE
            new Date().toLocaleString(),
          ],
        ],
      },
    });

    // 🔥 SUCCESS
    return NextResponse.json({
      success: true,
      message:
        "Ambassador application submitted 🚀",
    });

  } catch (error: any) {
    console.log(
      "GOOGLE SHEETS ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save data",
      },
      { status: 500 }
    );
  }
}